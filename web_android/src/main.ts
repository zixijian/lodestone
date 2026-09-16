import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as Lodestone from '@mattzh72/lodestone';
import { mat4 } from 'gl-matrix';

const {
  Structure,
  ThreeStructureRenderer,
  loadDefaultPackResources,
  BlockState,
  NbtFile,
  ChunkBuilder
} = Lodestone;

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

const projScreenMatrix = new THREE.Matrix4();
const frustum = new THREE.Frustum();

function meshToBufferGeometry(mesh: any) {
  const geometry = new THREE.BufferGeometry();
  if (!mesh.quads || mesh.quads.length === 0) {
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

// Memory-efficient structure extensions for flat grid access
(Structure.prototype as any).getBlock = function (pos: [number, number, number]) {
  if (!this._grid) {
    if (this.placedBlocksMapCache) {
      return this.placedBlocksMapCache[this.getIndex(pos)];
    }
    return undefined;
  }
  const [x, y, z] = pos;
  const w = this.size[0];
  const h = this.size[1];
  const d = this.size[2];
  if (x < 0 || x >= w || y < 0 || y >= h || z < 0 || z >= d) return undefined;
  const pVal = this._grid[x * (h * d) + y * d + z];
  if (pVal === 0) return undefined;
  return { pos, state: this.palette[pVal - 1] };
};

(Structure.prototype as any).getBlocks = function () {
  if (this._flatPositions && this._flatStates) {
    const count = this._flatCount || 0;
    const posArray = this._flatPositions;
    const stateArray = this._flatStates;
    const palette = this.palette;
    const result = new Array(count);
    for (let i = 0; i < count; i++) {
      const x = posArray[i * 3];
      const y = posArray[i * 3 + 1];
      const z = posArray[i * 3 + 2];
      result[i] = { pos: [x, y, z], state: palette[stateArray[i]] };
    }
    return result;
  }
  return this.blocks || [];
};

// Fast occlusion culling overrides for ChunkBuilder
ChunkBuilder.prototype.isFullyOccluded = function (block: any) {
  const grid = (this.structure as any)._grid;
  if (!grid) return false;
  const [x, y, z] = block.pos;
  const w = (this.structure as any).size[0];
  const h = (this.structure as any).size[1];
  const d = (this.structure as any).size[2];
  const palette = (this.structure as any).palette;

  // 6 face directions: UP, DOWN, NORTH, SOUTH, EAST, WEST
  if (y + 1 >= h || y - 1 < 0 || z - 1 < 0 || z + 1 >= d || x + 1 >= w || x - 1 < 0) {
    return false;
  }

  const strideY = d;
  const strideX = h * d;
  const base = x * strideX + y * strideY + z;

  const up = grid[base + strideY];
  const down = grid[base - strideY];
  const north = grid[base - 1];
  const south = grid[base + 1];
  const east = grid[base + strideX];
  const west = grid[base - strideX];

  if (!up || !down || !north || !south || !east || !west) return false;

  const uFlag = this.resources.getBlockFlags(palette[up - 1].getName());
  const dFlag = this.resources.getBlockFlags(palette[down - 1].getName());
  const nFlag = this.resources.getBlockFlags(palette[north - 1].getName());
  const sFlag = this.resources.getBlockFlags(palette[south - 1].getName());
  const eFlag = this.resources.getBlockFlags(palette[east - 1].getName());
  const wFlag = this.resources.getBlockFlags(palette[west - 1].getName());

  return !!(uFlag?.opaque && dFlag?.opaque && nFlag?.opaque && sFlag?.opaque && eFlag?.opaque && wFlag?.opaque);
};

// Frustum Culling implementation
ThreeStructureRenderer.prototype.applyDrawDistance = function () {
  const meshes = (this as any).chunkMeshes;
  if (!meshes || meshes.length === 0) return;

  projScreenMatrix.multiplyMatrices(activeCamera.projectionMatrix, activeCamera.matrixWorldInverse);
  frustum.setFromProjectionMatrix(projScreenMatrix);

  for (let i = 0; i < meshes.length; i++) {
    const mesh = meshes[i];
    if (!mesh.userData.worldAABB) {
      const origin = mesh.userData.origin || [0, 0, 0];
      const cs = (this as any).chunkSize || [16, 16, 16];
      mesh.userData.worldAABB = new THREE.Box3(
        new THREE.Vector3(origin[0], origin[1], origin[2]),
        new THREE.Vector3(origin[0] + cs[0], origin[1] + cs[1], origin[2] + cs[2])
      );
    }

    const box: THREE.Box3 = mesh.userData.worldAABB;

    if (!frustum.intersectsBox(box)) {
      mesh.visible = false;
    } else {
      mesh.visible = true;
      mesh.geometry.setDrawRange(0, Infinity);
    }
  }
};

// Streamed Chunk Mesh Building
ThreeStructureRenderer.prototype.rebuildChunksAsync = async function (chunkPositions?: any) {
  const token = ++(this as any).buildToken;

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_0%');
  }

  (this as any).drawDistance = 100000;

  if ((this as any).chunkMeshes) {
    for (const mesh of (this as any).chunkMeshes) {
      this.structureScene.remove(mesh);
      if (mesh.geometry) mesh.geometry.dispose();
    }
  }
  (this as any).chunkMeshes = [];

  const timeSliceMs = (this as any).asyncChunkBuildTimeMs || 12;

  await (this as any).chunkBuilder.updateStructureBuffersAsync({
    chunkPositions,
    timeSliceMs,
    onProgress: (done: number, total: number) => {
      if (window.AndroidHost) {
        const pct = Math.floor((done / Math.max(1, total)) * 50);
        window.AndroidHost.onLoadingProgress(`RENDERING_${pct}%`);
      }
    }
  });

  if (token !== (this as any).buildToken) return;

  const buildPromise = (async () => {
    const entries = (this as any).chunkBuilder.getMeshEntries();
    let lastYield = performance.now();

    for (let i = 0; i < entries.length; i++) {
      if (token !== (this as any).buildToken) return;
      const entry = entries[i];
      if (entry.mesh.isEmpty()) continue;

      const geometry = meshToBufferGeometry(entry.mesh);
      if (!geometry) continue;

      const material = entry.transparent ? (this as any).transparentMaterial : (this as any).opaqueMaterial;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.renderOrder = entry.transparent ? 1 : 0;
      mesh.userData.origin = entry.origin;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();

      this.structureScene.add(mesh);
      (this as any).chunkMeshes.push(mesh);

      if (window.AndroidHost && (i % 20 === 0 || i === entries.length - 1)) {
        const pct = 50 + Math.floor(((i + 1) / entries.length) * 50);
        window.AndroidHost.onLoadingProgress(`RENDERING_${pct}%`);
      }

      if ((i & 0x0f) === 0 && performance.now() - lastYield >= timeSliceMs) {
        await new Promise(resolve => requestAnimationFrame(resolve));
        lastYield = performance.now();
      }
    }

    if (token !== (this as any).buildToken) return;

    const emissiveLights = (this as any).chunkBuilder.getEmissiveLights();
    (this as any).updateEmissiveLightUniforms(emissiveLights);
    (this as any).emissiveSelectionDirty = true;
    (this as any).shadowDirty = true;

    if (window.AndroidHost && token === (this as any).buildToken) {
      window.AndroidHost.onLoadingProgress('SUCCESS');
    }
  })();

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

// Tick loop
function tick() {
  animFrameId = requestAnimationFrame(tick);
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

window.stopRenderLoop = function () {
  if (animFrameId !== null) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
};

window.destroyRenderer = function () {
  window.stopRenderLoop();

  if (renderer) {
    try {
      (renderer as any).buildToken = ((renderer as any).buildToken || 0) + 1;
      if ((renderer as any).chunkBuilder) {
        (renderer as any).chunkBuilder.cancelPendingBuilds?.();
      }
      if ((renderer as any).chunkMeshes) {
        for (const mesh of (renderer as any).chunkMeshes) {
          if (mesh.parent) mesh.parent.remove(mesh);
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
      if (renderer.dispose) {
        renderer.dispose();
      } else if (renderer.renderer) {
        renderer.renderer.dispose();
        renderer.renderer.forceContextLoss();
      }
    } catch (e) {
      console.error("Error destroying renderer: ", e);
    }
  }

  if (controls) {
    controls.dispose();
  }

  currentStructure = null;
  currentLitematicBuffer = null;
  parsedRootCompound = null;

  if (container) {
    container.innerHTML = '';
  }
};

// High-speed memory-optimized time-sliced NBT parser
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
    // Default chest facing to north if unstated so chest facing & UV texture coordinates remain valid
    if ((name.endsWith('chest') || name.includes('chest')) && !properties.facing) {
      properties.facing = 'north';
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
    const pair = items[i].getAsPair();
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

  const grid = new Uint16Array(volume);
  const tempPosBuffer = new Int32Array(volume * 3);
  const tempStateBuffer = new Uint16Array(volume);
  let placedCount = 0;

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

      grid[index] = paletteIndex + 1;

      tempPosBuffer[placedCount * 3] = x;
      tempPosBuffer[placedCount * 3 + 1] = y;
      tempPosBuffer[placedCount * 3 + 2] = z;
      tempStateBuffer[placedCount] = paletteIndex;
      placedCount++;

      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (z < minZ) minZ = z;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
      if (z > maxZ) maxZ = z;
      hasPlaced = true;
    }

    if ((index & 0x7ff) === 0) {
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

  const flatPositions = new Int32Array(tempPosBuffer.buffer, 0, placedCount * 3);
  const flatStates = new Uint16Array(tempStateBuffer.buffer, 0, placedCount);

  const struct = new Structure(size, palette, []);
  (struct as any)._grid = grid;
  (struct as any)._flatPositions = flatPositions;
  (struct as any)._flatStates = flatStates;
  (struct as any)._flatCount = placedCount;

  return struct;
}

// Main loader function called from Android native side
window.loadLitematic = async function () {
  try {
    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('DECODING_0%');
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

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('DECODING_100%');
  }

  // Calculate & send block statistics immediately before 3D rendering begins
  calculateAndSendStatistics();

  const size = currentStructure.getSize();
  const volume = size[0] * size[1] * size[2];
  const maxDim = Math.max(size[0], size[1], size[2]);

  const chunkSize = volume > 2000000 ? 64 : volume > 1000000 || maxDim > 128 ? 32 : 16;

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

  await renderer.whenReady();
}

function calculateAndSendStatistics(): void {
  if (!currentStructure) return;

  try {
    const rawStructure = currentStructure as any;
    const flatStates = rawStructure._flatStates;
    const flatCount = rawStructure._flatCount || 0;
    const palette = rawStructure.palette || [];

    const blockStats: { [key: string]: number } = {};
    let totalBlocks = 0;

    for (let i = 0; i < flatCount; i++) {
      const stateIdx = flatStates[i];
      const state = palette[stateIdx];
      if (state) {
        const blockName = state.getName().toString();
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

  const newTarget = new THREE.Vector3(tightCenter[0], tightCenter[1], tightCenter[2]);
  const offset = new THREE.Vector3().subVectors(activeCamera.position, controls.target);

  controls.target.copy(newTarget);
  activeCamera.position.copy(newTarget).add(offset);
  controls.update();
};

window.switchRegion = async function (regionName: string) {
  if (regionName === activeRegionName) return;

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('DECODING_0%');
  }

  activeRegionName = regionName;
  await buildRendererForRegion(regionName);
};

init();
