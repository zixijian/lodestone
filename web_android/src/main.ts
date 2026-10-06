import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as Lodestone from '@mattzh72/lodestone';
import { mat4 } from 'gl-matrix';

const {
  Structure,
  ThreeStructureRenderer,
  loadDefaultPackResources,
  BlockState
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
    toggleDayNight(): void;
    setDayNight(isNight: boolean): void;
    switchRegion(regionName: string): void;
    stopRenderLoop(): void;
    destroyRenderer(): void;
    loadCustomResourcePack(packBaseUrl: string): void;
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
let isNightMode = false;

// High-performance flat array grid structure patch (Uint32Array to support multi-million block schematics)
(Structure.prototype as any).ensurePlacedCaches = function () {
  if (this.placedBlocksCache && this.flatGrid) return;
  const [w, h, d] = this.getSize();
  const vol = w * h * d;
  const grid = new Uint32Array(vol);
  grid.fill(0xffffffff); // 0xffffffff indicates empty/air

  const blocks = this.blocks || [];
  const placedCache: any[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    const placed = this.toPlacedBlock(b);
    placedCache.push(placed);
    const pos = b.pos;
    const idx = pos[0] * (h * d) + pos[1] * d + pos[2];
    grid[idx] = i;
  }
  this.flatGrid = grid;
  this.placedBlocksCache = placedCache;
};

(Structure.prototype as any).getBlock = function (pos: [number, number, number]) {
  if (!this.isInside(pos)) return null;
  this.ensurePlacedCaches();
  const [w, h, d] = this.getSize();
  const idx = pos[0] * (h * d) + pos[1] * d + pos[2];
  const bIdx = this.flatGrid[idx];
  if (bIdx === 0xffffffff) return null;
  return this.placedBlocksCache[bIdx] ?? null;
};

// Helper to generate double chest half models (left / right) with accurate geometry & UV mappings
function createChestHalfModel(textureKey: string, isLeft: boolean) {
  const baseFrom: [number, number, number] = isLeft ? [1, 0, 1] : [0, 0, 1];
  const baseTo: [number, number, number] = isLeft ? [16, 10, 15] : [15, 10, 15];
  const lidFrom: [number, number, number] = isLeft ? [1, 10, 1] : [0, 10, 1];
  const lidTo: [number, number, number] = isLeft ? [16, 14, 15] : [15, 14, 15];
  const latchFrom: [number, number, number] = isLeft ? [15, 7, 0] : [0, 7, 0];
  const latchTo: [number, number, number] = isLeft ? [16, 11, 2] : [1, 11, 2];

  return new (Lodestone as any).BlockModel(undefined, { 0: textureKey }, [
    {
      from: baseFrom,
      to: baseTo,
      faces: {
        north: { uv: [3.5, 8.25, 7.25, 10.75], rotation: 180, texture: '#0' },
        east: { uv: [7.25, 8.25, 10.75, 10.75], rotation: 180, texture: '#0' },
        south: { uv: [10.75, 8.25, 14.5, 10.75], rotation: 180, texture: '#0' },
        west: { uv: [0, 8.25, 3.5, 10.75], rotation: 180, texture: '#0' },
        up: { uv: [3.5, 4.75, 7.25, 8.25], texture: '#0' },
        down: { uv: [7.25, 4.75, 11, 8.25], texture: '#0' },
      }
    },
    {
      from: lidFrom,
      to: lidTo,
      faces: {
        north: { uv: [3.5, 3.5, 7.25, 4.5], rotation: 180, texture: '#0' },
        east: { uv: [7.25, 3.5, 10.75, 4.5], rotation: 180, texture: '#0' },
        south: { uv: [10.75, 3.5, 14.5, 4.5], rotation: 180, texture: '#0' },
        west: { uv: [0, 3.5, 3.5, 4.5], rotation: 180, texture: '#0' },
        up: { uv: [3.5, 0, 7.25, 3.5], texture: '#0' },
        down: { uv: [7.25, 0, 11, 3.5], texture: '#0' },
      }
    },
    {
      from: latchFrom,
      to: latchTo,
      faces: {
        north: { uv: [0.25, 0.25, 0.5, 1.25], rotation: 180, texture: '#0' },
        east: { uv: [0.5, 0.25, 1.0, 1.25], rotation: 180, texture: '#0' },
        south: { uv: [1.0, 0.25, 1.25, 1.25], rotation: 180, texture: '#0' },
        west: { uv: [0, 0.25, 0.25, 1.25], rotation: 180, texture: '#0' },
        up: { uv: [0.25, 0, 0.5, 0.25], rotation: 180, texture: '#0' },
        down: { uv: [0.5, 0, 0.75, 0.25], rotation: 180, texture: '#0' },
      }
    }
  ]);
}

// Override Lodestone SpecialRenderers.getBlockMesh to handle double chest state (type=left / type=right)
if ((Lodestone as any).SpecialRenderers && typeof (Lodestone as any).SpecialRenderers.getBlockMesh === 'function') {
  const origGetBlockMesh = (Lodestone as any).SpecialRenderers.getBlockMesh;
  (Lodestone as any).SpecialRenderers.getBlockMesh = function (block: any, nbt: any, atlas: any, cull: any) {
    const blockName = block.getName ? block.getName().toString() : String(block);
    if (blockName.includes('chest') && !blockName.includes('boat')) {
      const props = block.getProperties ? block.getProperties() : {};
      const type = props.type || 'single';
      if (type === 'left' || type === 'right') {
        let texPrefix = 'normal';
        if (blockName.includes('trapped')) texPrefix = 'trapped';
        else if (blockName.includes('ender')) texPrefix = 'ender';
        const texKey = 'entity/chest/' + texPrefix + '_' + type;
        const model = createChestHalfModel(texKey, type === 'left');
        const mesh = model.getMesh(atlas, cull);

        const facing = props.facing || 'north';
        const t = mat4.create();
        mat4.translate(t, t, [8, 8, 8]);
        mat4.rotateY(
          t,
          t,
          facing === 'west' ? Math.PI / 2 : facing === 'south' ? Math.PI : facing === 'east' ? (Math.PI * 3) / 2 : 0
        );
        mat4.translate(t, t, [-8, -8, -8]);
        mat4.scale(t, t, [0.0625, 0.0625, 0.0625]);
        return mesh.transform(t);
      }
    }
    return origGetBlockMesh.call(this, block, nbt, atlas, cull);
  };
}

// Suppress parent model warning for builtin/entity
if ((Lodestone as any).BlockModel?.prototype?.flatten) {
  const origFlatten = (Lodestone as any).BlockModel.prototype.flatten;
  (Lodestone as any).BlockModel.prototype.flatten = function (accessor: any) {
    if (this.parent) {
      const parentStr = this.parent.toString();
      if (
        parentStr === 'builtin/entity' ||
        parentStr === 'minecraft:builtin/entity' ||
        parentStr === 'builtin/generated' ||
        parentStr === 'minecraft:builtin/generated'
      ) {
        this.parent = undefined;
        return;
      }
    }
    return origFlatten.call(this, accessor);
  };
}

// Eliminate per-frame Matrix4 allocations inside prepareCamera
const tempMat1 = new THREE.Matrix4();
const tempMat2 = new THREE.Matrix4();
const tempCamPos: [number, number, number] = [0, 0, 0];

ThreeStructureRenderer.prototype.prepareCamera = function (viewMatrixElements: any) {
  tempMat1.fromArray(viewMatrixElements);
  tempMat2.copy(tempMat1).invert();

  this.camera.position.setFromMatrixPosition(tempMat2);
  this.camera.quaternion.setFromRotationMatrix(tempMat2);
  this.camera.updateMatrixWorld(true);

  tempCamPos[0] = tempMat2.elements[12];
  tempCamPos[1] = tempMat2.elements[13];
  tempCamPos[2] = tempMat2.elements[14];

  if ((this as any).chunkMeshes) {
    for (let i = 0; i < (this as any).chunkMeshes.length; i++) {
      const mesh = (this as any).chunkMeshes[i];
      mesh.visible = true;
      mesh.frustumCulled = false;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
    }
  }

  if (typeof (this as any).updateEmissiveLightsForCamera === 'function') {
    (this as any).updateEmissiveLightsForCamera(tempCamPos);
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

const cachedViewMatrix = mat4.create();

// Render loop to keep view and OrbitControls synchronized
function tick() {
  animFrameId = requestAnimationFrame(tick);
  if (controls) {
    controls.update();
  }
  if (renderer && activeCamera) {
    activeCamera.updateMatrixWorld(true);
    mat4.copy(cachedViewMatrix, activeCamera.matrixWorldInverse.elements as any);
    renderer.drawStructure(cachedViewMatrix);
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
      if ((renderer as any).chunkMeshes) {
        for (const mesh of (renderer as any).chunkMeshes) {
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((m: any) => m.dispose?.());
            } else {
              mesh.material.dispose?.();
            }
          }
        }
        (renderer as any).chunkMeshes = [];
      }
      if (renderer.renderer) {
        renderer.renderer.dispose();
        renderer.renderer.forceContextLoss();
      }
    } catch (e) {
      console.error("Error destroying renderer: ", e);
    }
  }

  currentStructure = null;
  currentLitematicBuffer = null;
  parsedRootCompound = null;

  if (container) {
    container.innerHTML = '';
  }
};

// Streaming Zero-GC Time-Sliced NBT Decoder
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
        propsTag.forEach((key: string, value: any) => {
          if (!key) return;
          if (value && value.value !== undefined) {
            if (typeof value.value === 'object' && Array.isArray(value.value)) {
              properties[key] = String(value.value[1] ?? value.value[0]);
            } else {
              properties[key] = String(value.value);
            }
          } else if (value && typeof value.getAsString === 'function') {
            properties[key] = value.getAsString();
          } else if (value !== undefined && value !== null) {
            properties[key] = String(value);
          }
        });
      }
    }

    // Default facing for chests & item frames if omitted
    if (name.includes('chest') && !properties['facing']) {
      properties['facing'] = 'north';
    }
    if (name.includes('chest') && !properties['type']) {
      properties['type'] = 'single';
    }
    if (name.includes('item_frame') && !properties['facing']) {
      properties['facing'] = 'north';
    }
    if (name.includes('item_frame') && !properties['map']) {
      properties['map'] = 'false';
    }

    palette.push(new BlockState(name, properties));
  });

  const isAir = palette.map(state => state.is('minecraft:air'));

  const blockStatesNbt = regionCompound.has('BlockStates')
    ? regionCompound.getLongArray('BlockStates')
    : null;
  const items = blockStatesNbt ? blockStatesNbt.getItems() : [];
  const numLongs = items.length;
  const longArray = new BigUint64Array(numLongs);
  for (let i = 0; i < numLongs; i++) {
    const pair = items[i].getAsPair(); // [high32, low32]
    const high = BigInt(pair[0] >>> 0);
    const low = BigInt(pair[1] >>> 0);
    longArray[i] = (high << 32n) | low;
  }

  const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(palette.length)));
  const maskBig = (1n << BigInt(bitsPerBlock)) - 1n;

  const width = size[0];
  const height = size[1];
  const depth = size[2];
  const volume = width * height * depth;

  const storedBlocks: Array<{ pos: [number, number, number]; state: number }> = [];

  let minX = width, minY = height, minZ = depth;
  let maxX = 0, maxY = 0, maxZ = 0;
  let hasPlaced = false;

  let lastYield = performance.now();

  for (let index = 0; index < volume; index++) {
    let paletteIndex = 0;
    if (numLongs > 0) {
      const startBit = BigInt(index * bitsPerBlock);
      const startLong = Number(startBit >> 6n);
      const startBitOffset = startBit & 63n;
      const endBit = BigInt((index + 1) * bitsPerBlock - 1);
      const endLong = Number(endBit >> 6n);

      if (startLong < numLongs) {
        if (startLong === endLong) {
          paletteIndex = Number((longArray[startLong] >> startBitOffset) & maskBig);
        } else if (endLong < numLongs) {
          const endOffset = 64n - startBitOffset;
          paletteIndex = Number(
            ((longArray[startLong] >> startBitOffset) | (longArray[endLong] << endOffset)) & maskBig
          );
        }
      }
    }

    if (paletteIndex >= 0 && paletteIndex < palette.length && !isAir[paletteIndex]) {
      const x = index % width;
      const y = Math.floor(index / (width * depth));
      const z = Math.floor(index / width) % depth;
      storedBlocks.push({ pos: [x, y, z], state: paletteIndex });

      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (z < minZ) minZ = z;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
      if (z > maxZ) maxZ = z;
      hasPlaced = true;
    }

    if ((index & 0xff) === 0) {
      const now = performance.now();
      if (now - lastYield >= 12) {
        if (onProgress) {
          onProgress(Math.floor((index / volume) * 100));
        }
        await new Promise(resolve => requestAnimationFrame(resolve));
        lastYield = performance.now();
      }
    }
  }

  if (hasPlaced) {
    tightCenter = [(minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2];
    const dx = maxX - minX + 1;
    const dy = maxY - minY + 1;
    const dz = maxZ - minZ + 1;
    tightRadius = Math.max(1.0, 0.5 * Math.sqrt(dx * dx + dy * dy + dz * dz));
  } else {
    tightCenter = [width / 2, height / 2, depth / 2];
    tightRadius = Math.max(1.0, Math.max(width, height, depth) / 2);
  }

  if (onProgress) {
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

  window.stopRenderLoop();

  if (controls) {
    controls.dispose();
  }

  if (renderer) {
    try {
      if ((renderer as any).chunkMeshes) {
        for (const mesh of (renderer as any).chunkMeshes) {
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((m: any) => m.dispose?.());
            } else {
              mesh.material.dispose?.();
            }
          }
        }
        (renderer as any).chunkMeshes = [];
      }
      renderer.dispose();
    } catch (e) {
      console.error("Error disposing renderer: ", e);
    }
  }

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

  // Synchronously compute and send block statistics to Android UI before mesh rendering begins
  calculateAndSendStatistics();

  const size = currentStructure.getSize();
  const volume = size[0] * size[1] * size[2];
  const maxDim = Math.max(size[0], size[1], size[2]);

  const chunkSize = volume > 1000000 || maxDim > 128 ? 32 : 16;

  const rendererOptions: any = {
    asyncBuild: true,
    asyncChunkBuildTimeMs: 14,
    chunkSize: [chunkSize, chunkSize, chunkSize],
    sunlight: {
      direction: [-0.4, 0.8, -0.4],
      color: [1.0, 1.0, 0.95],
      ambientColor: [0.65, 0.7, 0.8],
      fillColor: [0.5, 0.5, 0.55],
      rimColor: [0.8, 0.85, 0.9],
      intensity: 1.1,
      ambientIntensity: 0.8,
      fillIntensity: 0.4,
      rimIntensity: 0.2,
      exposure: 1.0,
      sky: {
        zenithColor: [0.35, 0.55, 0.85],
        horizonColor: [0.75, 0.85, 0.95],
        groundColor: [0.3, 0.35, 0.4]
      },
      postProcess: {
        enabled: false
      },
      shadows: {
        enabled: false
      }
    }
  };

  renderer = new ThreeStructureRenderer(canvasElement, currentStructure, currentResources, rendererOptions);
  (renderer as any).drawDistance = 100000;

  // Disable postProcess pipeline completely to eliminate WebGL framebuffer black screen
  if ((renderer as any).sunlight) {
    if ((renderer as any).sunlight.postProcess) {
      (renderer as any).sunlight.postProcess.enabled = false;
    }
    if ((renderer as any).sunlight.fog) {
      (renderer as any).sunlight.fog.density = 0.0;
      (renderer as any).sunlight.fog.heightFalloff = 0.0;
    }
  }

  // Set high-DPI resolution
  if (renderer.renderer) {
    renderer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.renderer.setClearColor(isNightMode ? 0x050a14 : 0x002b36, 1.0);
  }

  renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
  (renderer as any).camera = activeCamera;

  if ((renderer as any).skyScene) {
    ((renderer as any).skyScene as THREE.Scene).clear();
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

  // Start continuous 60 FPS rendering immediately so chunks assemble progressively on canvas in real time
  tick();

  await renderer.whenReady();
}

async function calculateAndSendStatistics(): Promise<void> {
  if (!currentStructure) return;

  try {
    const rawStructure = currentStructure as any;
    const blocks = rawStructure.blocks || [];
    const palette = rawStructure.palette || [];

    const blockStats: { [key: string]: number } = {};
    let totalBlocks = 0;
    const totalCount = blocks.length;
    let index = 0;

    let lastYield = performance.now();

    while (index < totalCount) {
      const end = Math.min(index + 50000, totalCount);
      for (; index < end; index++) {
        const block = blocks[index];
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

      if (index < totalCount && performance.now() - lastYield >= 12) {
        await new Promise(resolve => requestAnimationFrame(resolve));
        lastYield = performance.now();
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
  if (!currentStructure || !controls || !activeCamera) return;

  const offset = new THREE.Vector3().subVectors(activeCamera.position, controls.target);
  controls.target.set(tightCenter[0], tightCenter[1], tightCenter[2]);
  activeCamera.position.addVectors(controls.target, offset);
  controls.update();
};

window.toggleDayNight = function () {
  window.setDayNight(!isNightMode);
};

window.setDayNight = function (isNight: boolean) {
  isNightMode = isNight;
  if (renderer && renderer.renderer) {
    renderer.renderer.setClearColor(isNightMode ? 0x050a14 : 0x002b36, 1.0);
  }
  if (renderer && (renderer as any).sunlight) {
    const sunlight = (renderer as any).sunlight;
    if (sunlight.directionalLight) {
      sunlight.directionalLight.intensity = isNightMode ? 0.2 : 1.2;
    }
    if (sunlight.ambientLight) {
      sunlight.ambientLight.intensity = isNightMode ? 0.3 : 0.8;
    }
  }
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

window.loadCustomResourcePack = async function (packBaseUrl: string) {
  try {
    const loaded = await loadDefaultPackResources({ baseUrl: packBaseUrl });
    currentResources = loaded.resources;
    if (activeRegionName) {
      await buildRendererForRegion(activeRegionName);
    }
  } catch (err: any) {
    console.error("Failed to load custom resource pack: ", err);
  }
};

init();
