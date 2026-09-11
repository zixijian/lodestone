import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as Lodestone from '@mattzh72/lodestone';
import { mat4 } from 'gl-matrix';

const {
  Structure,
  ThreeStructureRenderer,
  loadDefaultPackResources,
  LitematicLoader,
  meshToBufferGeometry
} = Lodestone;

// Declare types for android host interface exposure
declare global {
  interface Window {
    AndroidHost?: {
      onLoadingProgress(state: string): void;
      onRegionsParsed(regionsJson: string): void;
      onStatisticsUpdated(totalBlocks: number, statsJson: string): void;
    };
    loadLitematic(): void;
    toggleCameraView(): void;
    resetCamera(): void;
    switchRegion(regionName: string): void;
    stopRenderLoop(): void;
    destroyRenderer(): void;
  }
}

let container: HTMLElement;
let activeCamera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
let perspectiveCamera: THREE.PerspectiveCamera;
let orthographicCamera: THREE.OrthographicCamera;
let controls: OrbitControls;
let renderer: ThreeStructureRenderer;
let currentLitematicBuffer: ArrayBuffer | null = null;
let currentStructure: Structure | null = null;
let activeRegionName: string = '';
let currentResources: any = null;
let canvasElement: HTMLCanvasElement;
let parsedRootCompound: any = null;
let tightCenter: [number, number, number] = [0, 0, 0];
let tightRadius: number = 10;
let animFrameId: number | null = null;

// High-performance block caching patch
(Structure.prototype as any).ensurePlacedCaches = function () {
  if (this.placedBlocksCache && this.placedBlocksCache.length === this.blocks.length) return;
  this.placedBlocksCache = this.blocks.map((block: any) => this.toPlacedBlock(block));
  this.placedBlocksMapCache = [];
  for (let i = 0; i < this.placedBlocksCache.length; i++) {
    const placed = this.placedBlocksCache[i];
    this.placedBlocksMapCache[this.getIndex(placed.pos)] = placed;
  }
};

// Override LitematicLoader.loadRegion with time-sliced async decoding to support smooth percentage updates
(LitematicLoader as any).loadRegionAsync = async function (region: any, onProgress?: (pct: number) => void): Promise<any> {
  const sizeNbt = region.getCompound('Size');
  const rawSize = [
    sizeNbt.getNumber('x') ?? 0,
    sizeNbt.getNumber('y') ?? 0,
    sizeNbt.getNumber('z') ?? 0,
  ];
  const size: [number, number, number] = [
    Math.abs(rawSize[0]),
    Math.abs(rawSize[1]),
    Math.abs(rawSize[2]),
  ];

  const paletteList = region.getList('BlockStatePalette');
  const palette: any[] = [];
  paletteList.forEach((entry: any) => {
    if (!entry.isCompound()) return;
    const name = entry.getString('Name') ?? 'minecraft:air';
    const properties: { [key: string]: string } = {};
    if (entry.has('Properties')) {
      const propsTag = entry.get('Properties');
      if (propsTag && propsTag.isCompound()) {
        propsTag.forEach((key: string, value: any) => {
          properties[key] = value.getAsString?.() ?? '';
        });
      }
    }
    palette.push(new (Lodestone as any).BlockState(name, properties));
  });

  const blockStatesNbt = region.getLongArray('BlockStates');
  const blockStates = blockStatesNbt.getItems().map((item: any) => item.getAsPair());
  const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(palette.length)));

  const volume = size[0] * size[1] * size[2];
  const blocks = new Array(volume);
  const mask = (1 << bitsPerBlock) - 1;

  let lastYield = performance.now();
  for (let index = 0; index < volume; index++) {
    const startOffset = index * bitsPerBlock;
    const startArrIndex = startOffset >>> 5;
    const endArrIndex = ((index + 1) * bitsPerBlock - 1) >>> 5;
    const startBitOffset = startOffset & 0x1f;

    const halfInd = startArrIndex >>> 1;
    let blockStart: number;
    let blockEnd: number;

    if ((startArrIndex & 0x1) === 0) {
      blockStart = blockStates[halfInd]?.[1] ?? 0;
      blockEnd = blockStates[halfInd]?.[0] ?? 0;
    } else {
      blockStart = blockStates[halfInd]?.[0] ?? 0;
      blockEnd = blockStates[halfInd + 1]?.[1] ?? 0;
    }

    let value: number;
    if (startArrIndex === endArrIndex) {
      value = (blockStart >>> startBitOffset) & mask;
    } else {
      const endOffset = 32 - startBitOffset;
      value = ((blockStart >>> startBitOffset) & mask) | ((blockEnd << endOffset) & mask);
    }
    blocks[index] = value;

    if ((index & 0x1fff) === 0 && performance.now() - lastYield >= 12) {
      if (onProgress) {
        onProgress(Math.floor((index / volume) * 100));
      }
      await new Promise(resolve => requestAnimationFrame(resolve));
      lastYield = performance.now();
    }
  }
  if (onProgress) {
    onProgress(100);
  }

  const isAir = palette.map(state => state.is('minecraft:air'));
  const storedBlocks: any[] = [];

  for (let index = 0; index < blocks.length; index++) {
    const paletteIndex = blocks[index];
    if (paletteIndex >= 0 && paletteIndex < palette.length && !isAir[paletteIndex]) {
      const x = index % size[0];
      const y = Math.floor(index / (size[0] * size[2]));
      const z = Math.floor(index / size[0]) % size[2];
      storedBlocks.push({ pos: [x, y, z], state: paletteIndex });
    }
  }

  return new Structure(size, palette, storedBlocks);
};

(LitematicLoader as any).fromNbtAsync = async function (root: any, regionName?: string, onProgress?: (pct: number) => void): Promise<any> {
  const regions = root.getCompound('Regions');
  let region: any;
  if (regionName !== undefined) {
    if (!regions.hasCompound(regionName)) {
      throw new Error(`Region '${regionName}' not found in litematic file`);
    }
    region = regions.getCompound(regionName);
  } else {
    const firstKey = regions.keys()[Symbol.iterator]().next().value;
    if (firstKey === undefined) {
      throw new Error('No regions found in litematic file');
    }
    region = regions.getCompound(firstKey);
  }
  return await (this as any).loadRegionAsync(region, onProgress);
};

// Infinite View: override applyDrawDistance so chunks are never culled when zooming out
ThreeStructureRenderer.prototype.applyDrawDistance = function () {
  if ((this as any).chunkMeshes) {
    for (let i = 0; i < (this as any).chunkMeshes.length; i++) {
      const mesh = (this as any).chunkMeshes[i];
      mesh.visible = true;
      mesh.frustumCulled = false;
    }
  }
};

// Progressive Chunk Mesh Building
ThreeStructureRenderer.prototype.rebuildChunkObjectsAsync = async function (token: number) {
  this.chunkMeshes.forEach(mesh => {
    this.structureScene.remove(mesh);
    mesh.geometry.dispose();
  });
  this.chunkMeshes = [];

  const meshes = (this as any).chunkBuilder.getMeshEntries();
  const total = meshes.length;
  let lastYield = (this as any).now();

  for (let i = 0; i < total; i++) {
    if (token !== (this as any).buildToken) return;

    const entry = meshes[i];
    if (entry.mesh.isEmpty()) continue;

    const geometry = meshToBufferGeometry(entry.mesh);
    const material = entry.transparent ? (this as any).transparentMaterial : (this as any).opaqueMaterial;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = entry.transparent ? 1 : 0;
    mesh.userData.origin = entry.origin;
    mesh.visible = true;
    mesh.frustumCulled = false;

    this.structureScene.add(mesh);
    this.chunkMeshes.push(mesh);

    if (window.AndroidHost && (i & 0x7) === 0) {
      const pct = Math.floor(((i + 1) / Math.max(1, total)) * 100);
      window.AndroidHost.onLoadingProgress(`RENDERING_${pct}%`);
    }

    if ((i & 0x3) === 0 && (this as any).now() - lastYield >= ((this as any).asyncChunkBuildTimeMs || 12)) {
      await (this as any).yieldControl();
      lastYield = (this as any).now();
    }
  }

  if (token !== (this as any).buildToken) return;

  const emissiveLights = (this as any).chunkBuilder.getEmissiveLights();
  (this as any).updateEmissiveLightUniforms(emissiveLights);
  (this as any).emissiveSelectionDirty = true;
  (this as any).shadowDirty = true;

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_100%');
  }
};

// Hook rebuildChunksAsync to report progress and execute streaming chunk building
ThreeStructureRenderer.prototype.rebuildChunksAsync = async function (chunkPositions?: any) {
  const token = ++(this as any).buildToken;

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_0%');
  }

  await (this as any).chunkBuilder.updateStructureBuffersAsync({
    chunkPositions,
    timeSliceMs: (this as any).asyncChunkBuildTimeMs || 12,
  });

  if (token !== (this as any).buildToken) return;

  await (this as any).rebuildChunkObjectsAsync(token);
};

// Initialize Web application
async function init() {
  container = document.getElementById('renderer-container')!;

  const aspect = window.innerWidth / window.innerHeight;
  perspectiveCamera = new THREE.PerspectiveCamera(60, aspect, 0.5, 100000);
  orthographicCamera = new THREE.OrthographicCamera(-10 * aspect, 10 * aspect, 10, -10, 0.5, 100000);

  activeCamera = perspectiveCamera;
  activeCamera.position.set(10, 15, 20);

  try {
    const packBaseUrl = window.location.href.split('?')[0].replace('index.html', '') + 'default-pack/';
    const loaded = await loadDefaultPackResources({ baseUrl: packBaseUrl });
    currentResources = loaded.resources;

    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('READY');
    }
  } catch (err: any) {
    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('ERROR: Failed to load default resource pack. ' + err?.message);
    }
  }
}

// Render loop
function tick() {
  animFrameId = requestAnimationFrame(tick);
  if (controls) {
    controls.update();
  }
  if (renderer && activeCamera) {
    if ((renderer as any).chunkMeshes) {
      for (let i = 0; i < (renderer as any).chunkMeshes.length; i++) {
        const mesh = (renderer as any).chunkMeshes[i];
        mesh.visible = true;
        mesh.frustumCulled = false;
      }
    }
    activeCamera.updateMatrixWorld(true);
    const viewMatrix = mat4.create();
    mat4.copy(viewMatrix, activeCamera.matrixWorldInverse.elements as any);
    renderer.drawStructure(viewMatrix);
  }
}

window.stopRenderLoop = function () {
  if (animFrameId !== null) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
};

window.destroyRenderer = function () {
  window.stopRenderLoop();
  if (controls) {
    controls.dispose();
  }
  if (renderer) {
    try {
      if ((renderer as any).renderer) {
        const gl = (renderer as any).renderer.getContext();
        const loseContextExt = gl?.getExtension('WEBGL_lose_context');
        if (loseContextExt) {
          loseContextExt.loseContext();
        }
        (renderer as any).renderer.dispose();
      }
      if ((renderer as any).destroy) {
        (renderer as any).destroy();
      }
    } catch (e) {
      console.error('Error destroying renderer:', e);
    }
    renderer = null as any;
  }
  if (container) {
    container.innerHTML = '';
  }
  currentLitematicBuffer = null;
  currentStructure = null;
  parsedRootCompound = null;
};

// Send block statistics right after parsing
function calculateAndSendStatistics() {
  if (!currentStructure) return;

  try {
    const rawStructure = currentStructure as any;
    const blocks = rawStructure.blocks || [];
    const palette = rawStructure.palette || [];

    const blockStats: { [key: string]: number } = {};
    let totalBlocks = 0;

    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      if (block) {
        const stateIdx = block.state;
        const state = palette[stateIdx];
        if (state) {
          const blockName = state.getName().toString();
          blockStats[blockName] = (blockStats[blockName] || 0) + 1;
          totalBlocks++;
        }
      }
    }

    if (window.AndroidHost) {
      window.AndroidHost.onStatisticsUpdated(totalBlocks, JSON.stringify(blockStats));
    }
  } catch (err) {
    console.error("Error collecting block statistics: ", err);
  }
}

// Main loader function called from Android native side
window.loadLitematic = async function () {
  try {
    const response = await fetch('./model.litematic');
    currentLitematicBuffer = await response.arrayBuffer();

    const nbt = Lodestone.NbtFile.read(new Uint8Array(currentLitematicBuffer));
    parsedRootCompound = nbt.root;
    const regionsTag = parsedRootCompound.getCompound('Regions');

    let regions: string[] = [];
    if (regionsTag && typeof (regionsTag as any).keys === 'function') {
      regions = Array.from((regionsTag as any).keys());
    } else if (regionsTag) {
      regions = Object.keys(regionsTag);
    }

    regions = regions.filter(
      key => typeof key === 'string' && key !== 'properties' && key !== 'constructor' && key !== '__proto__'
    );

    if (regions.length === 0) {
      regions = ['Region1'];
    }

    activeRegionName = regions[0];

    if (window.AndroidHost) {
      window.AndroidHost.onRegionsParsed(JSON.stringify(regions));
    }

    await buildRendererForRegion(activeRegionName);

    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('SUCCESS');
    }
  } catch (err: any) {
    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('ERROR: ' + err?.message);
    }
  }
};

async function buildRendererForRegion(regionName: string) {
  if (!currentLitematicBuffer || !currentResources || !parsedRootCompound) return;

  container.innerHTML = '';

  canvasElement = document.createElement('canvas');
  canvasElement.style.width = '100%';
  canvasElement.style.height = '100%';
  container.appendChild(canvasElement);

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('DECODING_0%');
  }

  // Use loadRegionAsync for smooth progress callbacks while retaining exact BlockState properties (facing, type, etc.)
  currentStructure = await (LitematicLoader as any).fromNbtAsync(parsedRootCompound, regionName, (pct: number) => {
    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress(`DECODING_${pct}%`);
    }
  });

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('DECODING_100%');
  }

  // Calculate center and radius for camera controls
  const size = currentStructure.getSize();
  const width = size[0];
  const height = size[1];
  const depth = size[2];

  tightCenter = [width / 2, height / 2, depth / 2];
  tightRadius = Math.max(1.0, Math.max(width, height, depth) / 2);

  // Send block statistics FIRST right after parsing completes
  calculateAndSendStatistics();

  const volume = width * height * depth;
  const maxDim = Math.max(width, height, depth);

  const chunkSize = volume > 1000000 || maxDim > 128 ? 32 : 16;

  const rendererOptions: any = {
    asyncBuild: true,
    asyncChunkBuildTimeMs: 12,
    chunkSize: [chunkSize, chunkSize, chunkSize]
  };

  renderer = new ThreeStructureRenderer(canvasElement, currentStructure, currentResources, rendererOptions);

  if ((renderer as any).sunlight && (renderer as any).sunlight.fog) {
    (renderer as any).sunlight.fog.density = 0.0;
    (renderer as any).sunlight.fog.heightFalloff = 0.0;
  }

  renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
  (renderer as any).camera = activeCamera;

  if ((renderer as any).skyScene) {
    ((renderer as any).skyScene as THREE.Scene).clear();
  }
  if (renderer.renderer) {
    renderer.renderer.setClearColor(0x002b36, 1.0);
  }

  const aspect = window.innerWidth / window.innerHeight;
  perspectiveCamera.far = 100000.0;
  perspectiveCamera.aspect = aspect;
  perspectiveCamera.updateProjectionMatrix();

  orthographicCamera.far = 100000.0;
  orthographicCamera.updateProjectionMatrix();

  if (controls) {
    controls.dispose();
  }
  controls = new OrbitControls(activeCamera, canvasElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.target.set(tightCenter[0], tightCenter[1], tightCenter[2]);

  const fitDistance = Math.max(tightRadius * 2.2, 10.0);
  activeCamera.position.set(
    tightCenter[0] + fitDistance,
    tightCenter[1] + fitDistance * 0.8,
    tightCenter[2] + fitDistance
  );
  controls.update();

  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const newAspect = w / h;

    renderer.setViewport(0, 0, w, h);

    perspectiveCamera.aspect = newAspect;
    perspectiveCamera.updateProjectionMatrix();

    if (activeCamera === orthographicCamera) {
      const distance = activeCamera.position.distanceTo(controls.target);
      const frustumHeight = distance * Math.tan((perspectiveCamera.fov * Math.PI) / 360) * 2;
      const frustumWidth = frustumHeight * newAspect;
      orthographicCamera.left = -frustumWidth / 2;
      orthographicCamera.right = frustumWidth / 2;
      orthographicCamera.top = frustumHeight / 2;
      orthographicCamera.bottom = -frustumHeight / 2;
      orthographicCamera.far = 100000.0;
      orthographicCamera.updateProjectionMatrix();
    }
  });

  if (animFrameId === null) {
    tick();
  }

  // Segment by segment chunk mesh building
  await renderer.rebuildChunksAsync();
}

window.toggleCameraView = function () {
  if (!controls || !canvasElement) return;

  const currentTarget = controls.target.clone();
  const currentPos = activeCamera.position.clone();
  const direction = new THREE.Vector3().subVectors(currentPos, currentTarget);
  const distance = Math.max(direction.length(), 5.0);

  if (activeCamera === perspectiveCamera) {
    const aspect = window.innerWidth / window.innerHeight;
    const frustumHeight = distance * Math.tan((perspectiveCamera.fov * Math.PI) / 360) * 2;
    const frustumWidth = frustumHeight * aspect;

    orthographicCamera.left = -frustumWidth / 2;
    orthographicCamera.right = frustumWidth / 2;
    orthographicCamera.top = frustumHeight / 2;
    orthographicCamera.bottom = -frustumHeight / 2;
    orthographicCamera.far = 100000.0;
    orthographicCamera.updateProjectionMatrix();

    activeCamera = orthographicCamera;
  } else {
    activeCamera = perspectiveCamera;
  }

  activeCamera.position.copy(currentPos);

  if (renderer) {
    (renderer as any).camera = activeCamera;

    if ((renderer as any).sunlight && (renderer as any).sunlight.postProcess) {
      if (activeCamera === orthographicCamera) {
        (renderer as any).sunlight.postProcess.enabled = false;
      } else {
        (renderer as any).sunlight.postProcess.enabled = true;
      }
    }
  }

  controls.dispose();
  controls = new OrbitControls(activeCamera, canvasElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.target.copy(currentTarget);
  controls.update();
};

window.resetCamera = function () {
  if (!currentStructure || !controls) return;

  const fitDistance = Math.max(tightRadius * 2.2, 10.0);
  controls.target.set(tightCenter[0], tightCenter[1], tightCenter[2]);
  activeCamera.position.set(
    tightCenter[0] + fitDistance,
    tightCenter[1] + fitDistance * 0.8,
    tightCenter[2] + fitDistance
  );
  controls.update();
};

window.switchRegion = async function (regionName: string) {
  if (regionName === activeRegionName) return;

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('DECODING_0%');
  }

  activeRegionName = regionName;
  await buildRendererForRegion(regionName);

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('SUCCESS');
  }
};

init();
