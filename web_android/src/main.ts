import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as Lodestone from '@mattzh72/lodestone';
import { mat4 } from 'gl-matrix';

const {
  Structure,
  ThreeStructureRenderer,
  loadDefaultPackResources,
  BlockState,
  SpecialRenderers,
  Cull,
  BlockModel,
  Direction
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
    startRenderLoop(): void;
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
let isRendering: boolean = true;
let animFrameId: number | null = null;

// Extracted Quad data structure for zero-allocation geometry builder
interface ExtractedQuad {
  pos: Float32Array; // 12 floats (4 vertices * 3)
  normal: Float32Array; // 12 floats
  uv: Float32Array; // 8 floats
  texLimit: Float32Array; // 16 floats
  color: Float32Array; // 12 floats
  emissive: Float32Array; // 4 floats
}

interface PaletteEntry {
  opaqueQuads: ExtractedQuad[];
  transQuads: ExtractedQuad[];
  isOpaque: boolean;
  isAir: boolean;
}

function extractQuadsFromMesh(mesh: any): ExtractedQuad[] {
  if (!mesh || !mesh.quads || mesh.quads.length === 0) return [];
  const quads: ExtractedQuad[] = [];

  for (let q = 0; q < mesh.quads.length; q++) {
    const quad = mesh.quads[q];
    const verts = quad.vertices();
    const quadNormal = quad.normal();

    const pos = new Float32Array(12);
    const normal = new Float32Array(12);
    const uv = new Float32Array(8);
    const texLimit = new Float32Array(16);
    const color = new Float32Array(12);
    const emissive = new Float32Array(4);

    for (let i = 0; i < 4; i++) {
      const v = verts[i];
      const p = v.pos;
      const n = v.normal || quadNormal;
      const tex = v.texture;
      const limit = v.textureLimit;
      const c = v.color;

      pos[i * 3] = p.x;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = p.z;

      normal[i * 3] = n.x;
      normal[i * 3 + 1] = n.y;
      normal[i * 3 + 2] = n.z;

      if (tex) {
        uv[i * 2] = tex[0];
        uv[i * 2 + 1] = tex[1];
      }

      if (limit) {
        texLimit[i * 4] = limit[0];
        texLimit[i * 4 + 1] = limit[1];
        texLimit[i * 4 + 2] = limit[2];
        texLimit[i * 4 + 3] = limit[3];
      }

      if (c) {
        color[i * 3] = c[0];
        color[i * 3 + 1] = c[1];
        color[i * 3 + 2] = c[2];
      } else {
        color[i * 3] = 1;
        color[i * 3 + 1] = 1;
        color[i * 3 + 2] = 1;
      }

      emissive[i] = v.emissive || 0;
    }

    quads.push({ pos, normal, uv, texLimit, color, emissive });
  }

  return quads;
}

function liquidRendererWaterlogged(atlas: any) {
  // Inset water box slightly (0.01) to prevent Z-fighting depth flickering with solid stair faces
  return new BlockModel(undefined, {
    still: 'block/water_still',
    flow: 'block/water_flow',
  }, [{
    from: [0.01, 0.01, 0.01],
    to: [15.99, 15.99, 15.99],
    faces: {
      up: { texture: '#still', cullface: Direction.UP },
      down: { texture: '#still', cullface: Direction.DOWN },
      north: { texture: '#flow', cullface: Direction.NORTH },
      east: { texture: '#flow', cullface: Direction.EAST },
      south: { texture: '#flow', cullface: Direction.SOUTH },
      west: { texture: '#flow', cullface: Direction.WEST },
    },
  }]).getMesh(atlas, Cull.none());
}

// Override getBlockMesh only for waterlogged stairs Z-fighting (chests render as default single chest blocks)
const origGetBlockMesh = SpecialRenderers.getBlockMesh;
SpecialRenderers.getBlockMesh = function (block: any, nbt: any, atlas: any, cull: any) {
  const mesh = origGetBlockMesh.call(SpecialRenderers, block, nbt, atlas, cull);

  if (!block.is('water') && !block.is('lava') && block.isWaterlogged()) {
    const waterMesh = liquidRendererWaterlogged(atlas);
    const scaleMat = mat4.create();
    mat4.scale(scaleMat, scaleMat, [0.0625, 0.0625, 0.0625]);
    mesh.merge(waterMesh.transform(scaleMat));
  }

  return mesh;
};

// Infinite View: chunk visibility handling
ThreeStructureRenderer.prototype.applyDrawDistance = function () {
  if ((this as any).chunkMeshes) {
    for (let i = 0; i < (this as any).chunkMeshes.length; i++) {
      const mesh = (this as any).chunkMeshes[i];
      mesh.visible = true;
      mesh.frustumCulled = false;
    }
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

// Pre-allocate reusable gl-matrix view matrix to prevent per-frame garbage collection
const cachedViewMatrix = mat4.create();

// Render loop to keep view and OrbitControls synchronized
function tick() {
  if (!isRendering) return;
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

// Lifecycle methods for activity pause/destroy
window.stopRenderLoop = function () {
  isRendering = false;
  if (animFrameId !== null) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
};

window.startRenderLoop = function () {
  if (!isRendering) {
    isRendering = true;
    tick();
  }
};

window.destroyRenderer = function () {
  window.stopRenderLoop();

  if (renderer) {
    if ((renderer as any).chunkMeshes) {
      for (let i = 0; i < (renderer as any).chunkMeshes.length; i++) {
        const mesh = (renderer as any).chunkMeshes[i];
        if (mesh.geometry) mesh.geometry.dispose();
      }
      (renderer as any).chunkMeshes.length = 0;
    }
    try {
      renderer.dispose();
    } catch (e) {
      console.error(e);
    }
  }

  if (controls) {
    controls.dispose();
  }

  if (canvasElement) {
    try {
      const gl = canvasElement.getContext('webgl2') || canvasElement.getContext('webgl');
      gl?.getExtension('WEBGL_lose_context')?.loseContext();
    } catch (e) {
      console.error(e);
    }
  }
};

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

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('DECODING_0%');
  }

  container.innerHTML = '';

  canvasElement = document.createElement('canvas');
  canvasElement.style.width = '100%';
  canvasElement.style.height = '100%';
  container.appendChild(canvasElement);

  const regionsTag = parsedRootCompound.getCompound('Regions');
  const region = regionsTag.getCompound(regionName);

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
    palette.push(new BlockState(name, properties));
  });

  // Pre-build cached palette entries ONCE
  const paletteEntries: PaletteEntry[] = new Array(palette.length);

  for (let i = 0; i < palette.length; i++) {
    const state = palette[i];
    const air = state.is('minecraft:air') || state.is('minecraft:cave_air') || state.is('minecraft:void_air');

    if (air) {
      paletteEntries[i] = {
        opaqueQuads: [],
        transQuads: [],
        isOpaque: false,
        isAir: true
      };
      continue;
    }

    const blockName = state.getName();
    const props = state.getProperties();

    const blockDef = currentResources.getBlockDefinition(blockName);
    const cull = Cull.none();

    const opaqueMesh = new Lodestone.Mesh();
    const transMesh = new Lodestone.Mesh();

    const mesh = new Lodestone.Mesh();
    if (blockDef) {
      mesh.merge(blockDef.getMesh(blockName, props, currentResources, currentResources, cull));
    }

    const specialMesh = SpecialRenderers.getBlockMesh(state, undefined, currentResources, cull);
    if (!specialMesh.isEmpty()) {
      mesh.merge(specialMesh);
    }

    const flags = currentResources.getBlockFlags(blockName);
    if (flags?.semi_transparent) {
      transMesh.merge(mesh);
    } else {
      opaqueMesh.merge(mesh);
    }

    const opaqueQuads = extractQuadsFromMesh(opaqueMesh);
    const transQuads = extractQuadsFromMesh(transMesh);
    const isOpaque = opaqueQuads.length > 0 && !flags?.semi_transparent;

    paletteEntries[i] = {
      opaqueQuads,
      transQuads,
      isOpaque,
      isAir: false
    };
  }

  const blockStatesNbt = region.has('BlockStates')
    ? region.getLongArray('BlockStates')
    : null;

  const longs = blockStatesNbt ? blockStatesNbt.getItems() : [];
  const bigArray = new BigUint64Array(longs.length);

  let lastYield = performance.now();
  for (let i = 0; i < longs.length; i++) {
    const pair = longs[i].getAsPair();
    const high = BigInt(pair[0] >>> 0);
    const low = BigInt(pair[1] >>> 0);
    bigArray[i] = (high << 32n) | low;

    if ((i & 0x7ff) === 0) {
      const now = performance.now();
      if (now - lastYield >= 12) {
        const pct = Math.floor((i / Math.max(1, longs.length)) * 30); // First 30% for NBT long array conversion
        if (window.AndroidHost) {
          window.AndroidHost.onLoadingProgress(`DECODING_${pct}%`);
        }
        await new Promise(resolve => requestAnimationFrame(resolve));
        lastYield = performance.now();
      }
    }
  }

  const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(palette.length)));
  const mask = (1n << BigInt(bitsPerBlock)) - 1n;

  const width = size[0];
  const height = size[1];
  const depth = size[2];
  const volume = width * height * depth;

  // Unpack bit stream directly into flat grid Array (~7 MB for 3.5M blocks)
  const grid = new Uint16Array(volume);
  const paletteStats = new Uint32Array(palette.length);
  let totalPlacedBlocks = 0;

  lastYield = performance.now();
  for (let index = 0; index < volume; index++) {
    let paletteIndex = 0;
    if (bigArray.length > 0) {
      const startBit = BigInt(index * bitsPerBlock);
      const startWord = Number(startBit >> 6n);
      const bitOffset = startBit & 63n;

      if (startWord < bigArray.length) {
        let val = bigArray[startWord] >> bitOffset;
        if (bitOffset + BigInt(bitsPerBlock) > 64n && startWord + 1 < bigArray.length) {
          val |= bigArray[startWord + 1] << (64n - bitOffset);
        }
        paletteIndex = Number(val & mask);
      }
    }

    grid[index] = paletteIndex;

    if (paletteIndex >= 0 && paletteIndex < palette.length && !paletteEntries[paletteIndex].isAir) {
      paletteStats[paletteIndex]++;
      totalPlacedBlocks++;
    }

    if ((index & 0x7ff) === 0) {
      const now = performance.now();
      if (now - lastYield >= 12) {
        const pct = 30 + Math.floor((index / Math.max(1, volume)) * 70); // Remaining 70% for grid unpacking
        if (window.AndroidHost) {
          window.AndroidHost.onLoadingProgress(`DECODING_${pct}%`);
        }
        await new Promise(resolve => requestAnimationFrame(resolve));
        lastYield = performance.now();
      }
    }
  }

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('DECODING_100%');
  }

  // Send block statistics immediately right after NBT parsing completes
  const blockStats: { [key: string]: number } = {};
  for (let i = 0; i < palette.length; i++) {
    if (paletteStats[i] > 0) {
      blockStats[palette[i].getName().toString()] = paletteStats[i];
    }
  }

  if (window.AndroidHost) {
    window.AndroidHost.onStatisticsUpdated(totalPlacedBlocks, JSON.stringify(blockStats));
  }

  const maxDim = Math.max(width, height, depth);
  const CSIZE = volume > 2000000 ? 64 : volume > 500000 || maxDim > 128 ? 32 : 16;

  // Fast O(1) 6-Neighbor Occlusion Culling lookup
  const isOccluded = (x: number, y: number, z: number): boolean => {
    if (x === 0 || x === width - 1 || y === 0 || y === height - 1 || z === 0 || z === depth - 1) {
      return false; // Exterior boundary blocks are visible
    }

    const pX1 = grid[(y * depth + z) * width + (x + 1)]; if (!paletteEntries[pX1]?.isOpaque) return false;
    const pX2 = grid[(y * depth + z) * width + (x - 1)]; if (!paletteEntries[pX2]?.isOpaque) return false;
    const pY1 = grid[((y + 1) * depth + z) * width + x]; if (!paletteEntries[pY1]?.isOpaque) return false;
    const pY2 = grid[((y - 1) * depth + z) * width + x]; if (!paletteEntries[pY2]?.isOpaque) return false;
    const pZ1 = grid[(y * depth + (z + 1)) * width + x]; if (!paletteEntries[pZ1]?.isOpaque) return false;
    const pZ2 = grid[(y * depth + (z - 1)) * width + x]; if (!paletteEntries[pZ2]?.isOpaque) return false;

    return true; // Completely surrounded by 6 opaque solid blocks
  };

  // Dummy empty Structure for ThreeStructureRenderer initialization
  currentStructure = new Structure(size, palette, []);

  const rendererOptions: any = {
    asyncBuild: false,
    chunkSize: [CSIZE, CSIZE, CSIZE]
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

  // Position camera & target on region center BEFORE streaming chunk rendering starts
  tightCenter = [width / 2, height / 2, depth / 2];
  tightRadius = Math.max(1.0, Math.max(width, height, depth) / 2);

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

  window.startRenderLoop();

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_0%');
  }

  // Streaming Chunk-by-Chunk Mesh Generation Pipeline ("按litemapy库解析逻辑，流式渲染")
  const numChunksX = Math.ceil(width / CSIZE);
  const numChunksY = Math.ceil(height / CSIZE);
  const numChunksZ = Math.ceil(depth / CSIZE);
  const totalChunks = numChunksX * numChunksY * numChunksZ;

  let processedChunks = 0;

  let minX = width, minY = height, minZ = depth;
  let maxX = 0, maxY = 0, maxZ = 0;
  let hasPlaced = false;

  lastYield = performance.now();

  for (let cy = 0; cy < numChunksY; cy++) {
    for (let cz = 0; cz < numChunksZ; cz++) {
      for (let cx = 0; cx < numChunksX; cx++) {
        processedChunks++;

        const xStart = cx * CSIZE;
        const xEnd = Math.min(width, (cx + 1) * CSIZE);
        const yStart = cy * CSIZE;
        const yEnd = Math.min(height, (cy + 1) * CSIZE);
        const zStart = cz * CSIZE;
        const zEnd = Math.min(depth, (cz + 1) * CSIZE);

        let opaqueQuadCount = 0;
        let transQuadCount = 0;

        // First pass: Count quads to allocate exact zero-fragmentation TypedArrays
        for (let y = yStart; y < yEnd; y++) {
          for (let z = zStart; z < zEnd; z++) {
            for (let x = xStart; x < xEnd; x++) {
              const pIdx = grid[(y * depth + z) * width + x];
              const entry = paletteEntries[pIdx];
              if (!entry || entry.isAir) continue;

              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (z < minZ) minZ = z;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
              if (z > maxZ) maxZ = z;
              hasPlaced = true;

              if (entry.isOpaque && isOccluded(x, y, z)) continue;

              opaqueQuadCount += entry.opaqueQuads.length;
              transQuadCount += entry.transQuads.length;
            }
          }
        }

        // Build Opaque Geometry
        if (opaqueQuadCount > 0) {
          const vertCount = opaqueQuadCount * 4;
          const posArr = new Float32Array(vertCount * 3);
          const normArr = new Float32Array(vertCount * 3);
          const uvArr = new Float32Array(vertCount * 2);
          const texLimitArr = new Float32Array(vertCount * 4);
          const colArr = new Float32Array(vertCount * 3);
          const bPosArr = new Float32Array(vertCount * 3);
          const emissiveArr = new Float32Array(vertCount);
          const indexArr = vertCount > 65535 ? new Uint32Array(opaqueQuadCount * 6) : new Uint16Array(opaqueQuadCount * 6);

          let vIdx = 0;
          let iIdx = 0;
          let offset = 0;

          for (let y = yStart; y < yEnd; y++) {
            for (let z = zStart; z < zEnd; z++) {
              for (let x = xStart; x < xEnd; x++) {
                const pIdx = grid[(y * depth + z) * width + x];
                const entry = paletteEntries[pIdx];
                if (!entry || entry.isAir) continue;
                if (entry.isOpaque && isOccluded(x, y, z)) continue;

                for (let q = 0; q < entry.opaqueQuads.length; q++) {
                  const quad = entry.opaqueQuads[q];
                  for (let i = 0; i < 4; i++) {
                    posArr[vIdx * 3] = quad.pos[i * 3] + x;
                    posArr[vIdx * 3 + 1] = quad.pos[i * 3 + 1] + y;
                    posArr[vIdx * 3 + 2] = quad.pos[i * 3 + 2] + z;

                    normArr[vIdx * 3] = quad.normal[i * 3];
                    normArr[vIdx * 3 + 1] = quad.normal[i * 3 + 1];
                    normArr[vIdx * 3 + 2] = quad.normal[i * 3 + 2];

                    uvArr[vIdx * 2] = quad.uv[i * 2];
                    uvArr[vIdx * 2 + 1] = quad.uv[i * 2 + 1];

                    texLimitArr[vIdx * 4] = quad.texLimit[i * 4];
                    texLimitArr[vIdx * 4 + 1] = quad.texLimit[i * 4 + 1];
                    texLimitArr[vIdx * 4 + 2] = quad.texLimit[i * 4 + 2];
                    texLimitArr[vIdx * 4 + 3] = quad.texLimit[i * 4 + 3];

                    colArr[vIdx * 3] = quad.color[i * 3];
                    colArr[vIdx * 3 + 1] = quad.color[i * 3 + 1];
                    colArr[vIdx * 3 + 2] = quad.color[i * 3 + 2];

                    bPosArr[vIdx * 3] = x;
                    bPosArr[vIdx * 3 + 1] = y;
                    bPosArr[vIdx * 3 + 2] = z;

                    emissiveArr[vIdx] = quad.emissive[i];

                    vIdx++;
                  }

                  indexArr[iIdx] = offset;
                  indexArr[iIdx + 1] = offset + 1;
                  indexArr[iIdx + 2] = offset + 2;
                  indexArr[iIdx + 3] = offset;
                  indexArr[iIdx + 4] = offset + 2;
                  indexArr[iIdx + 5] = offset + 3;

                  iIdx += 6;
                  offset += 4;
                }
              }
            }
          }

          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
          geometry.setAttribute('normal', new THREE.BufferAttribute(normArr, 3));
          geometry.setAttribute('uv', new THREE.BufferAttribute(uvArr, 2));
          geometry.setAttribute('texLimit', new THREE.BufferAttribute(texLimitArr, 4));
          geometry.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
          geometry.setAttribute('blockPos', new THREE.BufferAttribute(bPosArr, 3));
          geometry.setAttribute('emissive', new THREE.BufferAttribute(emissiveArr, 1));
          geometry.setIndex(new THREE.BufferAttribute(indexArr, 1));
          geometry.computeBoundingSphere();

          const threeMesh = new THREE.Mesh(geometry, (renderer as any).opaqueMaterial);
          threeMesh.visible = true;
          threeMesh.frustumCulled = false;
          threeMesh.matrixAutoUpdate = false;
          threeMesh.updateMatrix();

          (renderer as any).structureScene.add(threeMesh);
          (renderer as any).chunkMeshes.push(threeMesh);
        }

        // Build Transparent Geometry
        if (transQuadCount > 0) {
          const vertCount = transQuadCount * 4;
          const posArr = new Float32Array(vertCount * 3);
          const normArr = new Float32Array(vertCount * 3);
          const uvArr = new Float32Array(vertCount * 2);
          const texLimitArr = new Float32Array(vertCount * 4);
          const colArr = new Float32Array(vertCount * 3);
          const bPosArr = new Float32Array(vertCount * 3);
          const emissiveArr = new Float32Array(vertCount);
          const indexArr = vertCount > 65535 ? new Uint32Array(transQuadCount * 6) : new Uint16Array(transQuadCount * 6);

          let vIdx = 0;
          let iIdx = 0;
          let offset = 0;

          for (let y = yStart; y < yEnd; y++) {
            for (let z = zStart; z < zEnd; z++) {
              for (let x = xStart; x < xEnd; x++) {
                const pIdx = grid[(y * depth + z) * width + x];
                const entry = paletteEntries[pIdx];
                if (!entry || entry.isAir) continue;

                for (let q = 0; q < entry.transQuads.length; q++) {
                  const quad = entry.transQuads[q];
                  for (let i = 0; i < 4; i++) {
                    posArr[vIdx * 3] = quad.pos[i * 3] + x;
                    posArr[vIdx * 3 + 1] = quad.pos[i * 3 + 1] + y;
                    posArr[vIdx * 3 + 2] = quad.pos[i * 3 + 2] + z;

                    normArr[vIdx * 3] = quad.normal[i * 3];
                    normArr[vIdx * 3 + 1] = quad.normal[i * 3 + 1];
                    normArr[vIdx * 3 + 2] = quad.normal[i * 3 + 2];

                    uvArr[vIdx * 2] = quad.uv[i * 2];
                    uvArr[vIdx * 2 + 1] = quad.uv[i * 2 + 1];

                    texLimitArr[vIdx * 4] = quad.texLimit[i * 4];
                    texLimitArr[vIdx * 4 + 1] = quad.texLimit[i * 4 + 1];
                    texLimitArr[vIdx * 4 + 2] = quad.texLimit[i * 4 + 2];
                    texLimitArr[vIdx * 4 + 3] = quad.texLimit[i * 4 + 3];

                    colArr[vIdx * 3] = quad.color[i * 3];
                    colArr[vIdx * 3 + 1] = quad.color[i * 3 + 1];
                    colArr[vIdx * 3 + 2] = quad.color[i * 3 + 2];

                    bPosArr[vIdx * 3] = x;
                    bPosArr[vIdx * 3 + 1] = y;
                    bPosArr[vIdx * 3 + 2] = z;

                    emissiveArr[vIdx] = quad.emissive[i];

                    vIdx++;
                  }

                  indexArr[iIdx] = offset;
                  indexArr[iIdx + 1] = offset + 1;
                  indexArr[iIdx + 2] = offset + 2;
                  indexArr[iIdx + 3] = offset;
                  indexArr[iIdx + 4] = offset + 2;
                  indexArr[iIdx + 5] = offset + 3;

                  iIdx += 6;
                  offset += 4;
                }
              }
            }
          }

          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
          geometry.setAttribute('normal', new THREE.BufferAttribute(normArr, 3));
          geometry.setAttribute('uv', new THREE.BufferAttribute(uvArr, 2));
          geometry.setAttribute('texLimit', new THREE.BufferAttribute(texLimitArr, 4));
          geometry.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
          geometry.setAttribute('blockPos', new THREE.BufferAttribute(bPosArr, 3));
          geometry.setAttribute('emissive', new THREE.BufferAttribute(emissiveArr, 1));
          geometry.setIndex(new THREE.BufferAttribute(indexArr, 1));
          geometry.computeBoundingSphere();

          const threeMesh = new THREE.Mesh(geometry, (renderer as any).transparentMaterial);
          threeMesh.renderOrder = 1;
          threeMesh.visible = true;
          threeMesh.frustumCulled = false;
          threeMesh.matrixAutoUpdate = false;
          threeMesh.updateMatrix();

          (renderer as any).structureScene.add(threeMesh);
          (renderer as any).chunkMeshes.push(threeMesh);
        }

        const now = performance.now();
        if (now - lastYield >= 12) {
          const pct = Math.floor((processedChunks / totalChunks) * 100);
          if (window.AndroidHost) {
            window.AndroidHost.onLoadingProgress(`RENDERING_${pct}%`);
          }
          await new Promise(resolve => requestAnimationFrame(resolve));
          lastYield = performance.now();
        }
      }
    }
  }

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_100%');
  }

  if (hasPlaced) {
    tightCenter = [(minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2];
    const dx = maxX - minX + 1;
    const dy = maxY - minY + 1;
    const dz = maxZ - minZ + 1;
    tightRadius = Math.max(1.0, 0.5 * Math.sqrt(dx * dx + dy * dy + dz * dz));

    // Shift camera target to tight center while maintaining current orientation and distance
    const oldTarget = controls.target.clone();
    const newTarget = new THREE.Vector3(tightCenter[0], tightCenter[1], tightCenter[2]);
    const targetOffset = new THREE.Vector3().subVectors(newTarget, oldTarget);

    controls.target.copy(newTarget);
    activeCamera.position.add(targetOffset);
    controls.update();
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
  if (!controls) return;

  const currentTarget = controls.target.clone();
  const newTarget = new THREE.Vector3(tightCenter[0], tightCenter[1], tightCenter[2]);
  const offset = new THREE.Vector3().subVectors(newTarget, currentTarget);

  // Shift focus target to structure tightCenter while preserving current camera distance, zoom and rotation angles!
  controls.target.copy(newTarget);
  perspectiveCamera.position.add(offset);
  orthographicCamera.position.add(offset);

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
