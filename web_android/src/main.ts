import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as Lodestone from '@mattzh72/lodestone';
import { mat4 } from 'gl-matrix';

const {
  Structure,
  ThreeStructureRenderer,
  loadDefaultPackResources,
  createResourcesFromPack,
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
    toggleDayNight(): boolean;
    startRenderLoop(): void;
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

// High-performance, zero-GC Uint16Array flat block grid storage with on-demand lazy block object creation
(Structure.prototype as any).ensurePlacedCaches = function () {
  if (this.placedBlocksGrid) return;
  const w = this.size[0], h = this.size[1], d = this.size[2];
  const volume = w * h * d;
  const grid = new Uint16Array(volume);
  grid.fill(0xffff);
  const hd = h * d;
  this.placedBlockObjectMap = new Map();
  this.placedBlockIndexMap = new Map();

  for (let i = 0; i < this.blocks.length; i++) {
    const b = this.blocks[i];
    const idx = b.pos[0] * hd + b.pos[1] * d + b.pos[2];
    grid[idx] = b.state;
    this.placedBlockIndexMap.set(idx, i);
  }
  this.placedBlocksGrid = grid;
};

(Structure.prototype as any).getBlock = function (pos: [number, number, number]) {
  if (!this.isInside(pos)) return null;
  this.ensurePlacedCaches();
  const w = this.size[0], h = this.size[1], d = this.size[2];
  const idx = pos[0] * (h * d) + pos[1] * d + pos[2];
  const stateIdx = this.placedBlocksGrid[idx];
  if (stateIdx === 0xffff) return null;

  let blockObj = this.placedBlockObjectMap.get(idx);
  if (!blockObj) {
    const origIndex = this.placedBlockIndexMap.get(idx);
    const origBlock = origIndex !== undefined ? this.blocks[origIndex] : null;
    blockObj = { pos: [pos[0], pos[1], pos[2]], state: this.palette[stateIdx], nbt: origBlock?.nbt };
    this.placedBlockObjectMap.set(idx, blockObj);
  }
  return blockObj;
};

(Structure.prototype as any).getBlocks = function () {
  this.ensurePlacedCaches();
  if (this.placedBlocksCache && this.placedBlocksCache.length > 0) {
    return this.placedBlocksCache;
  }
  this.placedBlocksCache = [];
  const w = this.size[0], h = this.size[1], d = this.size[2];
  const hd = h * d;
  for (let i = 0; i < this.blocks.length; i++) {
    const b = this.blocks[i];
    const idx = b.pos[0] * hd + b.pos[1] * d + b.pos[2];
    let placed = this.placedBlockObjectMap.get(idx);
    if (!placed) {
      placed = { pos: [b.pos[0], b.pos[1], b.pos[2]], state: this.palette[b.state], nbt: b.nbt };
      this.placedBlockObjectMap.set(idx, placed);
    }
    this.placedBlocksCache.push(placed);
  }
  return this.placedBlocksCache;
};

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


// Non-full blocks that MUST NOT cull adjacent faces
const nonFullKeywords = [
  'chest', 'sign', 'frame', 'stair', 'slab', 'glass', 'door', 'trapdoor',
  'fence', 'wall', 'gate', 'lantern', 'torch', 'chain', 'ladder', 'bars',
  'pane', 'carpet', 'flower', 'tulip', 'rose', 'orchid', 'dandelion', 'poppy',
  'bluet', 'lily', 'sunflower', 'lilac', 'peony', 'bush', 'sapling', 'mushroom',
  'fungus', 'roots', 'sprout', 'vine', 'lichen', 'rail', 'lever', 'button',
  'pressure_plate', 'tripwire', 'redstone', 'repeater', 'comparator', 'campfire',
  'candle', 'amethyst', 'dripstone', 'coral', 'pickle', 'egg', 'bell', 'conduit',
  'beacon', 'brewing', 'cauldron', 'hopper', 'composter', 'lectern', 'grindstone',
  'stonecutter', 'anvil', 'enchanting', 'portal', 'dragon_egg', 'cake', 'bed',
  'piston', 'head', 'skull', 'banner', 'bamboo', 'sugar_cane', 'cactus', 'kelp', 'seagrass'
];

const isNonFullBlock = (name: string) => {
  if (!name) return false;
  const lower = name.toLowerCase();
  return nonFullKeywords.some(kw => lower.includes(kw));
};

// Comprehensive Face Culling & Special Block Processing
if (Lodestone.ChunkBuilder) {
  Lodestone.ChunkBuilder.prototype.needsCull = function (block: any, dir: any) {
    const neighbor = this.structure.getBlock(Lodestone.BlockPos.towards(block.pos, dir))?.state;
    if (!neighbor) return false;
    const neighborName = neighbor.getName().toString();
    const flags = this.resources.getBlockFlags(neighbor.getName());
    if (!flags?.opaque) return false;
    if (isNonFullBlock(neighborName)) return false;
    return true;
  };

  Lodestone.ChunkBuilder.prototype.isFullyOccluded = function (block: any) {
    const dirs = [
      Lodestone.Direction.UP, Lodestone.Direction.DOWN,
      Lodestone.Direction.NORTH, Lodestone.Direction.SOUTH,
      Lodestone.Direction.EAST, Lodestone.Direction.WEST
    ];
    for (const dir of dirs) {
      const neighbor = this.structure.getBlock(Lodestone.BlockPos.towards(block.pos, dir))?.state;
      if (!neighbor) return false;
      const name = neighbor.getName().toString();
      if (isNonFullBlock(name)) return false;
      const flags = this.resources.getBlockFlags(neighbor.getName());
      if (!flags?.opaque) return false;
    }
    return true;
  };
}

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

  if ((this as any).drawDistance) {
    this.applyDrawDistance(tempCamPos as any, (this as any).drawDistance);
  } else if ((this as any).chunkMeshes) {
    for (let i = 0; i < (this as any).chunkMeshes.length; i++) {
      (this as any).chunkMeshes[i].visible = true;
    }
  }

  if (typeof (this as any).updateEmissiveLightsForCamera === 'function') {
    (this as any).updateEmissiveLightsForCamera(tempCamPos);
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
      }
    }
    if (window.AndroidHost && token === (this as any).buildToken) {
      window.AndroidHost.onLoadingProgress('RENDERING_100%');
    }
  });

  (this as any).buildPromise = buildPromise;
  return buildPromise;
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
    const cb = Date.now();
    const packBaseUrl = window.location.href.split('?')[0].replace('index.html', '') + `default-pack/`;

    const parseBlockList = (text: string) => {
      const set = new Set<string>();
      if (!text) return set;
      text.split(/\r?\n/).forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          set.add(trimmed.startsWith('minecraft:') ? trimmed : 'minecraft:' + trimmed);
        }
      });
      return set;
    };

    const [loaded, opaqueRes, transparentRes, nonSelfCullingRes, emissiveRes] = await Promise.all([
      loadDefaultPackResources({ baseUrl: packBaseUrl + `?cb=${cb}` }),
      fetch(packBaseUrl + `block-flags/opaque.txt?cb=${cb}`).catch(() => null),
      fetch(packBaseUrl + `block-flags/transparent.txt?cb=${cb}`).catch(() => null),
      fetch(packBaseUrl + `block-flags/non-self-culling.txt?cb=${cb}`).catch(() => null),
      fetch(packBaseUrl + `block-flags/emissive.json?cb=${cb}`).catch(() => null)
    ]);

    const opaqueText = opaqueRes && opaqueRes.ok ? await opaqueRes.text() : '';
    const transparentText = transparentRes && transparentRes.ok ? await transparentRes.text() : '';
    const nonSelfCullingText = nonSelfCullingRes && nonSelfCullingRes.ok ? await nonSelfCullingRes.text() : '';
    const emissiveJson = emissiveRes && emissiveRes.ok ? await emissiveRes.json() : {};

    const parsedOpaque = parseBlockList(opaqueText);
    const parsedTransparent = parseBlockList(transparentText);

    // Filter opaque flags so ONLY true 1x1x1 solid cubes are opaque
    const strictOpaque = new Set<string>();
    parsedOpaque.forEach(id => {
      if (!isNonFullBlock(id)) {
        strictOpaque.add(id);
      } else {
        parsedTransparent.add(id);
      }
    });

    const flags = {
      opaque: strictOpaque,
      transparent: parsedTransparent,
      nonSelfCulling: parseBlockList(nonSelfCullingText),
      emissive: emissiveJson
    };

    currentResources = createResourcesFromPack({
      assets: loaded.assets,
      atlas: loaded.atlas,
      flags
    });

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

window.startRenderLoop = function () {
  if (animFrameId === null) {
    tick();
  }
};

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
  await calculateAndSendStatistics();

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
  (renderer as any).drawDistance = 100000;

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
    renderer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.renderer.toneMappingExposure = 0.70;
  }

  // Force strict Day Mode initialization and synchronize all material lighting uniforms
  isNightMode = true;
  window.toggleDayNight();

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

  tick();

  // Wait for mesh building to be 100% complete before finishing progress
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

let isNightMode = false;
window.toggleDayNight = function () {
  isNightMode = !isNightMode;
  if (renderer) {
    if (renderer.renderer) {
      renderer.renderer.setClearColor(isNightMode ? 0x040810 : 0x002b36, 1.0);
    }
    if ((renderer as any).sunlight) {
      const sun = (renderer as any).sunlight;
      if (isNightMode) {
        // Night Mode: Ambient 0.12, Sun 0.08, Background #040810, Clean contrast
        sun.intensity = 0.08;
        sun.ambientIntensity = 0.12;
        if (sun.emissive) sun.emissive.intensity = 0.25;
        sun.direction = [-0.2, -0.9, -0.3];
        if (sun.light) sun.light.intensity = 0.08;
        if (sun.ambient) sun.ambient.intensity = 0.12;
      } else {
        // Day Mode: Ambient 0.55, Sun 0.45, Exposure 0.70, Emissive 0.10
        sun.intensity = 0.45;
        sun.ambientIntensity = 0.55;
        if (sun.emissive) sun.emissive.intensity = 0.10;
        sun.direction = [0.6, 1.0, 0.8];
        if (sun.light) sun.light.intensity = 0.45;
        if (sun.ambient) sun.ambient.intensity = 0.55;
      }
    }
    if ((renderer as any).opaqueMaterial) (renderer as any).applySunlightUniforms((renderer as any).opaqueMaterial);
    if ((renderer as any).transparentMaterial) (renderer as any).applySunlightUniforms((renderer as any).transparentMaterial);
  }
  return isNightMode;
};

window.resetCamera = function () {
  if (!currentStructure || !controls || !activeCamera) return;

  const offset = new THREE.Vector3().subVectors(activeCamera.position, controls.target);
  controls.target.set(tightCenter[0], tightCenter[1], tightCenter[2]);
  activeCamera.position.addVectors(controls.target, offset);
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
