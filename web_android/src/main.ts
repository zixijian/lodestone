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
    switchRegion(regionName: string): void;
    cleanupRenderer(): void;
  }
}

let container: HTMLElement;
let activeCamera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
let perspectiveCamera: THREE.PerspectiveCamera;
let orthographicCamera: THREE.OrthographicCamera;
let controls: OrbitControls | null = null;
let renderer: ThreeStructureRenderer | null = null;
let currentLitematicBuffer: ArrayBuffer | null = null;
let currentStructure: Structure | null = null;
let activeRegionName: string = '';
let currentResources: any = null;
let canvasElement: HTMLCanvasElement | null = null;
let parsedRootCompound: any = null;
let tightCenter: [number, number, number] = [0, 0, 0];
let tightRadius: number = 10;
let animationFrameId: number | null = null;
let initPromise: Promise<void> | null = null;

// Reusable matrix to prevent GC allocations in tick loop
const cachedViewMatrix = mat4.create();

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

// Patch SpecialRenderers.getBlockMesh to render connected double chests (type=left / type=right)
const origGetBlockMesh = Lodestone.SpecialRenderers.getBlockMesh;
Lodestone.SpecialRenderers.getBlockMesh = function (state: any, nbt: any, resources: any, cull: any) {
  const name = state.getName().toString();
  if (name === 'minecraft:chest' || name === 'minecraft:trapped_chest') {
    const type = state.getProperty('type') || 'single';
    if (type === 'left' || type === 'right') {
      const texName = name === 'minecraft:trapped_chest' ? 'trapped' : 'normal';
      const isLeft = type === 'left';
      const texPath = `entity/chest/${texName}_${type}`;

      const bodyFrom: [number, number, number] = isLeft ? [1, 0, 1] : [0, 0, 1];
      const bodyTo: [number, number, number] = isLeft ? [16, 10, 15] : [15, 10, 15];

      const lidFrom: [number, number, number] = isLeft ? [1, 10, 1] : [0, 10, 1];
      const lidTo: [number, number, number] = isLeft ? [16, 14, 15] : [15, 14, 15];

      const latchFrom: [number, number, number] = isLeft ? [15, 7, 0] : [0, 7, 0];
      const latchTo: [number, number, number] = isLeft ? [16, 11, 2] : [1, 11, 2];

      const model = new Lodestone.BlockModel(undefined, { 0: texPath }, [
        {
          from: bodyFrom,
          to: bodyTo,
          faces: {
            north: { uv: [10.5, 8.25, 14, 10.75], rotation: 180, texture: '#0' },
            east: { uv: [7, 8.25, 10.5, 10.75], rotation: 180, texture: '#0' },
            south: { uv: [3.5, 8.25, 7, 10.75], rotation: 180, texture: '#0' },
            west: { uv: [0, 8.25, 3.5, 10.75], rotation: 180, texture: '#0' },
            up: { uv: [7, 4.75, 10.5, 8.25], texture: '#0' },
            down: { uv: [3.5, 4.75, 7, 8.25], texture: '#0' }
          }
        },
        {
          from: lidFrom,
          to: lidTo,
          faces: {
            north: { uv: [10.5, 3.75, 14, 4.75], rotation: 180, texture: '#0' },
            east: { uv: [7, 3.75, 10.5, 4.75], rotation: 180, texture: '#0' },
            south: { uv: [3.5, 3.75, 7, 4.75], rotation: 180, texture: '#0' },
            west: { uv: [0, 3.75, 3.5, 4.75], rotation: 180, texture: '#0' },
            up: { uv: [7, 0, 10.5, 3.5], texture: '#0' },
            down: { uv: [3.5, 0, 7, 3.5], texture: '#0' }
          }
        },
        {
          from: latchFrom,
          to: latchTo,
          faces: {
            north: { uv: [0.25, 0.25, 0.75, 1.25], rotation: 180, texture: '#0' },
            east: { uv: [0, 0.25, 0.25, 1.25], rotation: 180, texture: '#0' },
            south: { uv: [1, 0.25, 1.5, 1.25], rotation: 180, texture: '#0' },
            west: { uv: [0.75, 0.25, 1, 1.25], rotation: 180, texture: '#0' },
            up: { uv: [0.25, 0, 0.75, 0.25], texture: '#0' },
            down: { uv: [0.75, 0, 1.25, 0.25], texture: '#0' }
          }
        }
      ]);

      const mesh = model.getMesh(resources, Lodestone.Cull.none());
      const facing = state.getProperty('facing') || 'south';
      const matrix = mat4.create();
      mat4.translate(matrix, matrix, [8, 8, 8]);
      mat4.rotateY(
        matrix,
        matrix,
        facing === 'west' ? Math.PI / 2 : facing === 'south' ? Math.PI : facing === 'east' ? (Math.PI * 3) / 2 : 0
      );
      mat4.translate(matrix, matrix, [-8, -8, -8]);
      mesh.transform(matrix);

      const scaleMat = mat4.create();
      mat4.scale(scaleMat, scaleMat, [0.0625, 0.0625, 0.0625]);
      return mesh.transform(scaleMat);
    }
  }

  return origGetBlockMesh.call(this, state, nbt, resources, cull);
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

// Hook rebuildChunksAsync to report progress (RENDERING_X%) and enable progressive chunk display
ThreeStructureRenderer.prototype.rebuildChunksAsync = async function (chunkPositions?: any) {
  const token = ++(this as any).buildToken;

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_0%');
  }

  await (this as any).chunkBuilder.updateStructureBuffersAsync({
    chunkPositions,
    timeSliceMs: (this as any).asyncChunkBuildTimeMs || 12,
    onProgress: (done: number, total: number) => {
      if (window.AndroidHost) {
        const pct = Math.floor((done / Math.max(1, total)) * 50);
        window.AndroidHost.onLoadingProgress(`RENDERING_${pct}%`);
      }
    }
  });

  if (token !== (this as any).buildToken) return;

  const origRebuildChunkObjectsAsync = (this as any).rebuildChunkObjectsAsync;
  const buildPromise = origRebuildChunkObjectsAsync.call(this, token).then(() => {
    if ((this as any).chunkMeshes) {
      for (let i = 0; i < (this as any).chunkMeshes.length; i++) {
        const mesh = (this as any).chunkMeshes[i];
        mesh.visible = true;
        mesh.frustumCulled = false;
        mesh.matrixAutoUpdate = false;
      }
    }
    if (window.AndroidHost && token === (this as any).buildToken) {
      window.AndroidHost.onLoadingProgress('RENDERING_100%');
    }
  });

  (this as any).buildPromise = buildPromise;
  return buildPromise;
};

// Cleanup function to prevent frame drops on exit
window.cleanupRenderer = function () {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  if (controls) {
    controls.dispose();
    controls = null;
  }

  if (renderer) {
    try {
      const r = renderer.renderer;
      if (r) {
        const gl = r.getContext();
        r.dispose();
        if (gl) {
          const loseContextExt = gl.getExtension('WEBGL_lose_context');
          if (loseContextExt) loseContextExt.loseContext();
        }
      }
    } catch (e) {
      console.warn('Error disposing WebGL renderer context', e);
    }
    renderer = null;
  }

  currentStructure = null;
  currentLitematicBuffer = null;
  parsedRootCompound = null;

  if (container) {
    container.innerHTML = '';
  }
};

window.addEventListener('beforeunload', () => window.cleanupRenderer());
window.addEventListener('pagehide', () => window.cleanupRenderer());

// Initialize Web application
async function init() {
  container = document.getElementById('renderer-container')!;

  const aspect = window.innerWidth / window.innerHeight;
  perspectiveCamera = new THREE.PerspectiveCamera(60, aspect, 0.5, 100000);
  orthographicCamera = new THREE.OrthographicCamera(-10 * aspect, 10 * aspect, 10, -10, 0.5, 100000);

  activeCamera = perspectiveCamera;
  activeCamera.position.set(10, 15, 20);

  try {
    const packBaseUrl = new URL('default-pack/', window.location.href).href;
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

initPromise = init();

// Render loop optimized to prevent allocations and overhead
function tick() {
  animationFrameId = requestAnimationFrame(tick);
  if (controls) {
    controls.update();
  }
  if (renderer && activeCamera) {
    activeCamera.updateMatrixWorld(true);
    mat4.copy(cachedViewMatrix, activeCamera.matrixWorldInverse.elements as any);
    renderer.drawStructure(cachedViewMatrix);
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
    const state = BlockState.fromNbt(entry);
    palette.push(state);
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

  let minX = width, minY = height, minZ = depth;
  let maxX = 0, maxY = 0, maxZ = 0;
  let hasPlaced = false;

  let lastYield = performance.now();

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

      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (z < minZ) minZ = z;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
      if (z > maxZ) maxZ = z;
      hasPlaced = true;
    }

    if ((index & 0x7fff) === 0) {
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
    if (initPromise) {
      await initPromise;
    }

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

  if (renderer) {
    try {
      renderer.renderer.dispose();
    } catch (e) {
      // ignore
    }
    renderer = null;
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

  // Calculate and send statistics immediately after structure parsing
  calculateAndSendStatistics();

  const size = currentStructure.getSize();
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

  if (animationFrameId === null) {
    tick();
  }

  // Wait for mesh building to be 100% complete before finishing progress
  await renderer.whenReady();

  calculateAndSendStatistics();
}

function calculateAndSendStatistics() {
  if (!currentStructure) return;

  try {
    const rawStructure = currentStructure as any;
    const blocks = rawStructure.blocks || [];
    const palette = rawStructure.palette || [];

    const blockStats: { [key: string]: number } = {};
    let totalBlocks = 0;

    for (let i = 0; i < blocks.length; i++) {
      const b = blocks[i];
      if (b) {
        const st = palette[b.state];
        if (st) {
          const name = st.getName().toString();
          if (name !== 'minecraft:air' && name !== 'minecraft:cave_air' && name !== 'minecraft:void_air') {
            blockStats[name] = (blockStats[name] || 0) + 1;
            totalBlocks++;
          }
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

window.toggleCameraView = function () {
  if (!controls || !canvasElement) return;

  const currentTarget = controls.target.clone();
  const currentPos = activeCamera.position.clone();

  if (activeCamera === perspectiveCamera) {
    const aspect = window.innerWidth / window.innerHeight;
    const distance = Math.max(currentPos.distanceTo(currentTarget), 5.0);
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
