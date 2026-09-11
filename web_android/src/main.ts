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
    stopRenderLoop(): void;
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
let isDestroyed = false;

// Clean exit resource disposal handler
window.destroyRenderer = window.stopRenderLoop = function () {
  isDestroyed = true;
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  if (controls) {
    try {
      controls.dispose();
    } catch (e) {
      // ignore
    }
  }
  if (renderer) {
    try {
      if ((renderer as any).chunkMeshes) {
        for (const mesh of (renderer as any).chunkMeshes) {
          if (mesh.geometry) mesh.geometry.dispose();
        }
        (renderer as any).chunkMeshes = [];
      }
      if (renderer.renderer) {
        renderer.renderer.dispose();
        renderer.renderer.forceContextLoss();
      }
    } catch (e) {
      console.error("Error disposing renderer: ", e);
    }
  }
  if (container) {
    container.innerHTML = '';
  }
};

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

// Convert Lodestone Mesh to Three.js BufferGeometry with pre-allocated typed arrays
function meshToBufferGeometry(mesh: any): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();
  if (!mesh || !mesh.quads || mesh.quads.length === 0) {
    return geometry;
  }
  const quadCount = mesh.quads.length;
  const vertCount = quadCount * 4;

  const positions = new Float32Array(vertCount * 3);
  const normals = new Float32Array(vertCount * 3);
  const uvs = new Float32Array(vertCount * 2);
  const texLimits = new Float32Array(vertCount * 4);
  const colors = new Float32Array(vertCount * 3);
  const blockPositions = new Float32Array(vertCount * 3);
  const emissives = new Float32Array(vertCount);

  const indexCount = quadCount * 6;
  const indices = vertCount > 65536 ? new Uint32Array(indexCount) : new Uint16Array(indexCount);

  let vIdx = 0;
  let iIdx = 0;
  let offset = 0;

  for (let q = 0; q < quadCount; q++) {
    const quad = mesh.quads[q];
    const verts = quad.vertices();
    const defaultNormal = quad.normal ? quad.normal() : { x: 0, y: 1, z: 0 };

    for (let i = 0; i < 4; i++) {
      const v = verts[i];
      const pIdx = vIdx * 3;
      positions[pIdx] = v.pos.x;
      positions[pIdx + 1] = v.pos.y;
      positions[pIdx + 2] = v.pos.z;

      const norm = v.normal ?? defaultNormal;
      normals[pIdx] = norm.x;
      normals[pIdx + 1] = norm.y;
      normals[pIdx + 2] = norm.z;

      const uvIdx = vIdx * 2;
      uvs[uvIdx] = v.texture?.[0] ?? 0;
      uvs[uvIdx + 1] = v.texture?.[1] ?? 0;

      const tlIdx = vIdx * 4;
      if (v.textureLimit) {
        texLimits[tlIdx] = v.textureLimit[0];
        texLimits[tlIdx + 1] = v.textureLimit[1];
        texLimits[tlIdx + 2] = v.textureLimit[2];
        texLimits[tlIdx + 3] = v.textureLimit[3];
      } else {
        texLimits[tlIdx] = 0;
        texLimits[tlIdx + 1] = 0;
        texLimits[tlIdx + 2] = 0;
        texLimits[tlIdx + 3] = 0;
      }

      const col = v.color ?? [1, 1, 1];
      colors[pIdx] = col[0];
      colors[pIdx + 1] = col[1];
      colors[pIdx + 2] = col[2];

      const bPos = v.blockPos ?? v.pos;
      blockPositions[pIdx] = bPos.x;
      blockPositions[pIdx + 1] = bPos.y;
      blockPositions[pIdx + 2] = bPos.z;

      emissives[vIdx] = v.emissive ?? 0;

      vIdx++;
    }

    indices[iIdx] = offset;
    indices[iIdx + 1] = offset + 1;
    indices[iIdx + 2] = offset + 2;
    indices[iIdx + 3] = offset;
    indices[iIdx + 4] = offset + 2;
    indices[iIdx + 5] = offset + 3;

    iIdx += 6;
    offset += 4;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.setAttribute('texLimit', new THREE.BufferAttribute(texLimits, 4));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('blockPos', new THREE.BufferAttribute(blockPositions, 3));
  geometry.setAttribute('emissive', new THREE.BufferAttribute(emissives, 1));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.computeBoundingSphere();

  return geometry;
}

// Fast Streaming Chunk Builder & Incremental Real-Time Scene Progressive Chunk Rendering
ThreeStructureRenderer.prototype.rebuildChunksAsync = async function (chunkPositions?: any) {
  const token = ++(this as any).buildToken;

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_0%');
  }

  // Clear existing chunk meshes from scene
  if ((this as any).chunkMeshes) {
    for (const mesh of (this as any).chunkMeshes) {
      (this as any).structureScene.remove(mesh);
      if (mesh.geometry) mesh.geometry.dispose();
    }
  }
  (this as any).chunkMeshes = [];

  const cb = (this as any).chunkBuilder;
  const origProcessBlock = cb.processBlock.bind(cb);

  // Buffer to batch chunk meshes during processBlock so they show up on screen in real-time
  const pendingChunkMeshes = new Set<any>();
  const chunkMeshMap = new Map<any, { opaque?: THREE.Mesh; transparent?: THREE.Mesh }>();

  cb.processBlock = function (block: any, chunkFilter: any) {
    const chunkPos = [
      Math.floor(block.pos[0] / this.chunkSize[0]),
      Math.floor(block.pos[1] / this.chunkSize[1]),
      Math.floor(block.pos[2] / this.chunkSize[2]),
    ];
    const chunk = this.getChunk(chunkPos);
    const result = origProcessBlock(block, chunkFilter);
    pendingChunkMeshes.add(chunk);
    return result;
  };

  const self = this;
  let lastSceneUpdate = performance.now();

  const flushNewChunkMeshes = () => {
    if (token !== (self as any).buildToken || pendingChunkMeshes.size === 0) return;

    for (const chunk of pendingChunkMeshes) {
      let existing = chunkMeshMap.get(chunk);
      if (!existing) {
        existing = {};
        chunkMeshMap.set(chunk, existing);
      }

      if (!chunk.mesh.isEmpty()) {
        if (existing.opaque) {
          (self as any).structureScene.remove(existing.opaque);
          existing.opaque.geometry.dispose();
          const oldIdx = (self as any).chunkMeshes.indexOf(existing.opaque);
          if (oldIdx !== -1) (self as any).chunkMeshes.splice(oldIdx, 1);
        }
        const geometry = meshToBufferGeometry(chunk.mesh);
        const mesh = new THREE.Mesh(geometry, (self as any).opaqueMaterial);
        mesh.renderOrder = 0;
        mesh.visible = true;
        mesh.frustumCulled = false;
        mesh.userData.origin = chunk.origin;
        (self as any).structureScene.add(mesh);
        (self as any).chunkMeshes.push(mesh);
        existing.opaque = mesh;
      }

      if (!chunk.transparentMesh.isEmpty()) {
        if (existing.transparent) {
          (self as any).structureScene.remove(existing.transparent);
          existing.transparent.geometry.dispose();
          const oldIdx = (self as any).chunkMeshes.indexOf(existing.transparent);
          if (oldIdx !== -1) (self as any).chunkMeshes.splice(oldIdx, 1);
        }
        const transparentGeometry = meshToBufferGeometry(chunk.transparentMesh);
        const transMesh = new THREE.Mesh(transparentGeometry, (self as any).transparentMaterial);
        transMesh.renderOrder = 1;
        transMesh.visible = true;
        transMesh.frustumCulled = false;
        transMesh.userData.origin = chunk.origin;
        (self as any).structureScene.add(transMesh);
        (self as any).chunkMeshes.push(transMesh);
        existing.transparent = transMesh;
      }
    }
    pendingChunkMeshes.clear();
  };

  try {
    await cb.updateStructureBuffersAsync({
      chunkPositions,
      timeSliceMs: 16,
      onProgress: (done: number, total: number) => {
        const now = performance.now();
        if (now - lastSceneUpdate >= 60) {
          flushNewChunkMeshes();
          lastSceneUpdate = now;
        }

        if (window.AndroidHost) {
          const pct = Math.floor((done / Math.max(1, total)) * 100);
          window.AndroidHost.onLoadingProgress(`RENDERING_${pct}%`);
        }
      }
    });
  } finally {
    cb.processBlock = origProcessBlock;
  }

  if (token !== (this as any).buildToken) return;

  // Final flush of remaining chunk meshes
  flushNewChunkMeshes();

  if (window.AndroidHost) {
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
  if (isDestroyed) return;
  animationFrameId = requestAnimationFrame(tick);
  if (controls) {
    controls.update();
  }
  if (renderer && activeCamera) {
    activeCamera.updateMatrixWorld(true);
    const viewMatrix = mat4.create();
    mat4.copy(viewMatrix, activeCamera.matrixWorldInverse.elements as any);
    renderer.drawStructure(viewMatrix);
  }
}

// Fast Time-Sliced Streaming NBT Decoder with BigUint64Array bit-unpacking
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
          properties[key] = value.getAsString?.() ?? '';
        });
      }
    }
    if ((name === 'minecraft:chest' || name === 'minecraft:trapped_chest' || name === 'minecraft:ender_chest') && !properties.facing) {
      properties.facing = 'north';
    }
    palette.push(new BlockState(name, properties));
  });

  const isAir = new Uint8Array(palette.map(state => state.is('minecraft:air') ? 1 : 0));

  let longArray64: BigUint64Array | null = null;
  if (regionCompound.has('BlockStates')) {
    const blockStatesNbt = regionCompound.getLongArray('BlockStates');
    const items = blockStatesNbt.getItems();
    longArray64 = new BigUint64Array(items.length);
    for (let i = 0; i < items.length; i++) {
      const pair = items[i].getAsPair();
      const high = BigInt(pair[0] >>> 0);
      const low = BigInt(pair[1] >>> 0);
      longArray64[i] = (high << 32n) | low;
    }
  }

  const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(palette.length)));
  const maskBig = (1n << BigInt(bitsPerBlock)) - 1n;
  const bitsPerBlockBig = BigInt(bitsPerBlock);

  const width = size[0];
  const height = size[1];
  const depth = size[2];
  const volume = width * height * depth;
  const area = width * depth;

  const storedBlocks: Array<{ pos: [number, number, number]; state: number }> = [];

  let minX = width, minY = height, minZ = depth;
  let maxX = 0, maxY = 0, maxZ = 0;
  let hasPlaced = false;

  let lastYield = performance.now();
  let lastReportedPct = -1;

  for (let index = 0; index < volume; index++) {
    let paletteIndex = 0;
    if (longArray64 && longArray64.length > 0) {
      const bitIndex = BigInt(index) * bitsPerBlockBig;
      const startWord = Number(bitIndex >> 6n);
      const startBit = Number(bitIndex & 63n);

      if (startWord < longArray64.length) {
        let val = longArray64[startWord] >> BigInt(startBit);
        if (startBit + bitsPerBlock > 64 && startWord + 1 < longArray64.length) {
          val |= longArray64[startWord + 1] << BigInt(64 - startBit);
        }
        paletteIndex = Number(val & maskBig);
      }
    }

    if (paletteIndex >= 0 && paletteIndex < palette.length && isAir[paletteIndex] === 0) {
      const x = index % width;
      const y = (index / area) | 0;
      const z = ((index / width) | 0) % depth;
      storedBlocks.push({ pos: [x, y, z], state: paletteIndex });

      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (z < minZ) minZ = z;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
      if (z > maxZ) maxZ = z;
      hasPlaced = true;
    }

    if ((index & 0x3ff) === 0) {
      const pct = Math.min(99, (index / volume * 100) | 0);
      if (pct !== lastReportedPct) {
        lastReportedPct = pct;
        if (onProgress) {
          onProgress(pct);
        }
      }
      const now = performance.now();
      if (now - lastYield >= 12) {
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
  isDestroyed = false;
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

  // 1. Step 1: Parsing NBT file with percentage callbacks (DECODING_X%)
  currentStructure = await loadRegionAsync(region, (pct) => {
    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress(`DECODING_${pct}%`);
    }
  });

  // 2. Step 2: Show block statistics IMMEDIATELY on the native UI before starting 3D mesh building
  calculateAndSendStatisticsSync();

  const size = currentStructure.getSize();
  const volume = size[0] * size[1] * size[2];
  const maxDim = Math.max(size[0], size[1], size[2]);

  let chunkSize = 16;
  if (volume > 3000000 || maxDim > 256) {
    chunkSize = 64;
  } else if (volume > 1000000 || maxDim > 128) {
    chunkSize = 32;
  }

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

  tick();

  // 3. Step 3: Stream chunks progressively and render 3D meshes & textures frame-by-frame
  await renderer.rebuildChunksAsync();
}

function calculateAndSendStatisticsSync() {
  if (!currentStructure) return;

  try {
    const rawStructure = currentStructure as any;
    const blocks = rawStructure.blocks || [];
    const palette = rawStructure.palette || [];

    const blockStats: { [key: string]: number } = {};
    let totalBlocks = 0;

    const paletteNames: string[] = palette.map((st: any) => st ? st.getName().toString() : '');

    for (let i = 0; i < blocks.length; i++) {
      const stateIdx = blocks[i].state;
      const name = paletteNames[stateIdx];
      if (name && name !== 'minecraft:air') {
        blockStats[name] = (blockStats[name] || 0) + 1;
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

init();
