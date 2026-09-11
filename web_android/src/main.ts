import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as Lodestone from '@mattzh72/lodestone';
import { mat4 } from 'gl-matrix';

const {
  Structure,
  ThreeStructureRenderer,
  loadDefaultPackResources,
  BlockState,
  NbtFile
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
    destroyRenderer(): void;
    pauseRenderer(): void;
    resumeRenderer(): void;
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

let animationFrameId: number | null = null;
let isRenderingPaused = false;

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

function meshToBufferGeometry(mesh: any) {
  const geometry = new THREE.BufferGeometry();
  if (!mesh || !mesh.quads || mesh.quads.length === 0) {
    return geometry;
  }
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const colors: number[] = [];
  const texLimits: number[] = [];
  const blockPositions: number[] = [];
  const emissives: number[] = [];
  const indices: number[] = [];
  let offset = 0;
  for (const quad of mesh.quads) {
    const verts = quad.vertices();
    for (const v of verts) {
      positions.push(v.pos.x, v.pos.y, v.pos.z);
      const normal = v.normal ?? quad.normal();
      normals.push(normal.x, normal.y, normal.z);
      uvs.push(v.texture?.[0] ?? 0, v.texture?.[1] ?? 0);
      if (v.textureLimit) {
        texLimits.push(v.textureLimit[0], v.textureLimit[1], v.textureLimit[2], v.textureLimit[3]);
      } else {
        texLimits.push(0, 0, 0, 0);
      }
      const color = v.color ?? [1, 1, 1];
      colors.push(color[0], color[1], color[2]);
      const pos = v.blockPos ?? v.pos;
      blockPositions.push(pos.x, pos.y, pos.z);
      emissives.push(v.emissive ?? 0);
    }
    indices.push(offset, offset + 1, offset + 2, offset, offset + 2, offset + 3);
    offset += 4;
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setAttribute('texLimit', new THREE.Float32BufferAttribute(texLimits, 4));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('blockPos', new THREE.Float32BufferAttribute(blockPositions, 3));
  geometry.setAttribute('emissive', new THREE.Float32BufferAttribute(emissives, 1));
  const indexArray = positions.length / 3 > 0x10000 ? new Uint32Array(indices) : new Uint16Array(indices);
  geometry.setIndex(new THREE.BufferAttribute(indexArray, 1));
  geometry.computeBoundingSphere();
  return geometry;
}

// Hook rebuildChunksAsync to report progress (RENDERING_X%) and enable streaming chunk display
ThreeStructureRenderer.prototype.rebuildChunksAsync = async function (chunkPositions?: any) {
  const token = ++(this as any).buildToken;

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_0%');
  }

  if ((this as any).chunkMeshes) {
    for (const mesh of (this as any).chunkMeshes) {
      (this as any).structureScene.remove(mesh);
      if (mesh.geometry) mesh.geometry.dispose();
    }
  }
  (this as any).chunkMeshes = [];

  const chunkBuilder = (this as any).chunkBuilder;
  const chunkSize = (this as any).chunkSize || [16, 16, 16];
  const structure = (this as any).structure;
  if (!structure) return;

  chunkBuilder.markDirty();
  chunkBuilder.prepareRebuild(chunkPositions);

  const blocks = structure.getBlocks();

  // Group blocks by chunk coordinates
  const chunkMap = new Map<string, { chunkPos: [number, number, number]; blocks: any[] }>();

  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    const cx = Math.floor(b.pos[0] / chunkSize[0]);
    const cy = Math.floor(b.pos[1] / chunkSize[1]);
    const cz = Math.floor(b.pos[2] / chunkSize[2]);
    const key = `${cx},${cy},${cz}`;

    let group = chunkMap.get(key);
    if (!group) {
      group = { chunkPos: [cx, cy, cz], blocks: [] };
      chunkMap.set(key, group);
    }
    group.blocks.push(b);
  }

  const chunkGroups = Array.from(chunkMap.values());
  const totalChunks = chunkGroups.length;

  let processedChunks = 0;
  let lastYield = performance.now();

  for (let i = 0; i < chunkGroups.length; i++) {
    if (token !== (this as any).buildToken) return;

    const group = chunkGroups[i];
    const chunkPos = group.chunkPos;

    for (let j = 0; j < group.blocks.length; j++) {
      chunkBuilder.processBlock(group.blocks[j], null);
    }

    const chunk = chunkBuilder.getChunk(chunkPos);
    if (chunk) {
      if (!chunk.mesh.isEmpty()) {
        const geometry = meshToBufferGeometry(chunk.mesh);
        const meshObj = new THREE.Mesh(geometry, (this as any).opaqueMaterial);
        meshObj.visible = true;
        meshObj.frustumCulled = false;
        meshObj.matrixAutoUpdate = false;
        meshObj.userData.origin = chunk.origin;
        (this as any).structureScene.add(meshObj);
        (this as any).chunkMeshes.push(meshObj);
      }
      if (!chunk.transparentMesh.isEmpty()) {
        const geometry = meshToBufferGeometry(chunk.transparentMesh);
        const meshObj = new THREE.Mesh(geometry, (this as any).transparentMaterial);
        meshObj.renderOrder = 1;
        meshObj.visible = true;
        meshObj.frustumCulled = false;
        meshObj.matrixAutoUpdate = false;
        meshObj.userData.origin = chunk.origin;
        (this as any).structureScene.add(meshObj);
        (this as any).chunkMeshes.push(meshObj);
      }
    }

    processedChunks++;

    const now = performance.now();
    if (now - lastYield >= 12 || i === chunkGroups.length - 1) {
      if (window.AndroidHost) {
        const pct = Math.floor((processedChunks / Math.max(1, totalChunks)) * 100);
        window.AndroidHost.onLoadingProgress(`RENDERING_${pct}%`);
      }
      await new Promise(resolve => requestAnimationFrame(resolve));
      lastYield = performance.now();
    }
  }

  if (token !== (this as any).buildToken) return;

  const emissiveLights = chunkBuilder.getEmissiveLights();
  (this as any).updateEmissiveLightUniforms(emissiveLights);
  (this as any).emissiveSelectionDirty = true;
  (this as any).shadowDirty = true;

  if (window.AndroidHost && token === (this as any).buildToken) {
    window.AndroidHost.onLoadingProgress('RENDERING_100%');
  }
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

// Render loop to keep view and OrbitControls synchronized
function tick() {
  if (!isRenderingPaused) {
    animationFrameId = requestAnimationFrame(tick);
  } else {
    animationFrameId = null;
    return;
  }

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

// Streaming Time-Sliced NBT Decoder
async function loadRegionAsync(
  regionCompound: any,
  onProgress?: (pct: number) => void
): Promise<Structure> {
  const sizeNbt = regionCompound.getCompound('Size');
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

  const paletteList = regionCompound.getList('BlockStatePalette');
  const palette: BlockState[] = [];
  paletteList.forEach((entry: any) => {
    if (!entry.isCompound()) return;
    const name = entry.getString('Name') ?? 'minecraft:air';
    const properties: { [key: string]: string } = {};
    if (entry.has('Properties')) {
      const propsTag = entry.get('Properties');
      if (propsTag && propsTag.isCompound()) {
        const keys = Array.from((propsTag as any).keys());
        keys.forEach((key: any) => {
          if (typeof key === 'string') {
            const valTag = propsTag.get(key);
            properties[key] = valTag ? valTag.getAsString() : '';
          }
        });
      }
    }
    palette.push(new BlockState(name, properties));
  });

  const isAir = palette.map(state => state.is('minecraft:air'));

  const blockStatesNbt = regionCompound.has('BlockStates')
    ? regionCompound.getLongArray('BlockStates')
    : null;
  const blockStates = blockStatesNbt
    ? blockStatesNbt.getItems().map((item: any) => item.getAsPair())
    : [];

  const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(palette.length)));
  const mask = (1 << bitsPerBlock) - 1;

  const width = size[0];
  const height = size[1];
  const depth = size[2];
  const volume = width * height * depth;

  const storedBlocks: Array<{ pos: [number, number, number]; state: number }> = [];

  let lastYield = performance.now();
  let lastReportedPct = -1;

  for (let index = 0; index < volume; index++) {
    let paletteIndex = 0;
    if (blockStates.length > 0) {
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

      if (startArrIndex === endArrIndex) {
        paletteIndex = (blockStart >>> startBitOffset) & mask;
      } else {
        const endOffset = 32 - startBitOffset;
        paletteIndex =
          ((blockStart >>> startBitOffset) & mask) |
          ((blockEnd << endOffset) & mask);
      }
    }

    if (paletteIndex >= 0 && paletteIndex < palette.length && !isAir[paletteIndex]) {
      const x = index % width;
      const y = Math.floor(index / (width * depth));
      const z = Math.floor(index / width) % depth;
      storedBlocks.push({ pos: [x, y, z], state: paletteIndex });
    }

    const currentPct = Math.floor((index / volume) * 100);
    if (currentPct !== lastReportedPct) {
      lastReportedPct = currentPct;
      if (onProgress) {
        onProgress(currentPct);
      }
      const now = performance.now();
      if (now - lastYield >= 10) {
        await new Promise(resolve => requestAnimationFrame(resolve));
        lastYield = performance.now();
      }
    }
  }

  if (onProgress && lastReportedPct !== 100) {
    onProgress(100);
  }

  return new Structure(size, palette, storedBlocks);
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

  const regionsTag = parsedRootCompound.getCompound('Regions');
  const region = regionsTag.getCompound(regionName);

  // Time-sliced streaming NBT parsing
  currentStructure = await loadRegionAsync(region, (pct) => {
    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress(`DECODING_${pct}%`);
    }
  });

  const size = currentStructure.getSize();

  // Compute tight center & radius for camera target
  const blocks = currentStructure.getBlocks();
  if (blocks.length > 0) {
    let minX = size[0], minY = size[1], minZ = size[2];
    let maxX = 0, maxY = 0, maxZ = 0;
    for (let i = 0; i < blocks.length; i++) {
      const p = blocks[i].pos;
      if (p[0] < minX) minX = p[0];
      if (p[1] < minY) minY = p[1];
      if (p[2] < minZ) minZ = p[2];
      if (p[0] > maxX) maxX = p[0];
      if (p[1] > maxY) maxY = p[1];
      if (p[2] > maxZ) maxZ = p[2];
    }
    tightCenter = [(minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2];
    const dx = maxX - minX + 1;
    const dy = maxY - minY + 1;
    const dz = maxZ - minZ + 1;
    tightRadius = Math.max(1.0, 0.5 * Math.sqrt(dx * dx + dy * dy + dz * dz));
  } else {
    tightCenter = [size[0] / 2, size[1] / 2, size[2] / 2];
    tightRadius = Math.max(1.0, Math.max(size[0], size[1], size[2]) / 2);
  }

  // Prioritize calculating and displaying block statistics right after parsing finishes!
  calculateAndSendStatistics();

  const volume = size[0] * size[1] * size[2];
  const maxDim = Math.max(size[0], size[1], size[2]);

  const chunkSize = volume > 1000000 || maxDim > 128 ? 32 : 16;

  const rendererOptions: any = {
    asyncBuild: true,
    asyncChunkBuildTimeMs: 12,
    chunkSize: [chunkSize, chunkSize, chunkSize]
  };

  renderer = new ThreeStructureRenderer(canvasElement, currentStructure, currentResources, rendererOptions);

  // Disable sunlight fog density so models stay clear without fading when camera zooms out
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
    const width = window.innerWidth;
    const height = window.innerHeight;
    const newAspect = width / height;

    renderer.setViewport(0, 0, width, height);

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

  isRenderingPaused = false;
  tick();

  // Wait for mesh building to be 100% complete before finishing progress
  await renderer.whenReady();
}

function calculateAndSendStatistics() {
  if (!currentStructure) return;

  try {
    const rawStructure = currentStructure as any;
    const blocks = rawStructure.getBlocks() || [];

    const blockStats: { [key: string]: number } = {};
    let totalBlocks = 0;

    for (let index = 0; index < blocks.length; index++) {
      const block = blocks[index];
      if (block && block.state) {
        const blockName = block.state.getName().toString();
        blockStats[blockName] = (blockStats[blockName] || 0) + 1;
        totalBlocks++;
      }
    }

    if (window.AndroidHost) {
      window.AndroidHost.onStatisticsUpdated(totalBlocks, JSON.stringify(blockStats));
    }
  } catch (err) {
    console.error("Error collecting block statistics: ", err);
  }
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

window.destroyRenderer = function () {
  isRenderingPaused = true;
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  if (controls) {
    try {
      controls.dispose();
    } catch (e) { }
  }
  if (renderer) {
    try {
      (renderer as any).buildToken++;
      if ((renderer as any).chunkBuilder) {
        (renderer as any).chunkBuilder.cancelPendingBuilds();
      }
      renderer.dispose();
    } catch (e) {
      console.error("Error disposing renderer: ", e);
    }
    renderer = null as any;
  }
  if (canvasElement) {
    try {
      const gl = canvasElement.getContext('webgl2') || canvasElement.getContext('webgl');
      if (gl) {
        const loseContextExt = gl.getExtension('WEBGL_lose_context');
        if (loseContextExt) {
          loseContextExt.loseContext();
        }
      }
    } catch (e) { }
  }
  currentLitematicBuffer = null;
  currentStructure = null;
  parsedRootCompound = null;
  currentResources = null;
};

window.pauseRenderer = function () {
  isRenderingPaused = true;
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
};

window.resumeRenderer = function () {
  if (isRenderingPaused) {
    isRenderingPaused = false;
    tick();
  }
};

init();
