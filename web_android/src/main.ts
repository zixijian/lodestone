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

// Double Chest Half Models
// Unrotated local block space: facing = north.
// In Minecraft standard chest texture:
// - Left half chest (type='left') is at +X (East). Seam is at WEST (x=0). Exterior side face is at EAST (x=15).
// - Right half chest (type='right') is at -X (West). Seam is at EAST (x=16). Exterior side face is at WEST (x=1).
function createChestHalfModel(type: 'left' | 'right', textureName: string) {
  const tex = `#0`;
  const textures = { '0': `entity/chest/${textureName}` };

  if (type === 'left') {
    return new BlockModel(undefined, textures, [
      { // body
        from: [0, 0, 1],
        to: [15, 10, 15],
        faces: {
          north: { uv: [10.5, 8.25, 14.25, 10.75], rotation: 180, texture: tex },
          south: { uv: [3.25, 8.25, 7, 10.75], rotation: 180, texture: tex },
          east: { uv: [7, 8.25, 10.5, 10.75], rotation: 180, texture: tex }, // exterior side face
          up: { uv: [7, 4.75, 10.75, 8.25], texture: tex },
          down: { uv: [3.25, 4.75, 7, 8.25], texture: tex },
          // west face omitted (joining seam face at x=0)
        },
      },
      { // lid
        from: [0, 10, 1],
        to: [15, 14, 15],
        faces: {
          north: { uv: [10.5, 3.75, 14.25, 4.75], rotation: 180, texture: tex },
          south: { uv: [3.25, 3.75, 7, 4.75], rotation: 180, texture: tex },
          east: { uv: [7, 3.75, 10.5, 4.75], rotation: 180, texture: tex }, // exterior side face
          up: { uv: [7, 0, 10.75, 3.5], texture: tex },
          down: { uv: [3.25, 0, 7, 3.5], texture: tex },
          // west face omitted (joining seam face at x=0)
        },
      },
      { // latch knob
        from: [0, 7, 0],
        to: [1, 11, 1],
        faces: {
          north: { uv: [0.25, 0.25, 0.5, 1.25], rotation: 180, texture: tex },
          south: { uv: [0.75, 0.25, 1.0, 1.25], rotation: 180, texture: tex },
          east: { uv: [0, 0.25, 0.25, 1.25], rotation: 180, texture: tex },
          up: { uv: [0.25, 0, 0.5, 0.25], texture: tex },
          down: { uv: [0.5, 0, 0.75, 0.25], texture: tex },
        },
      },
    ]);
  } else {
    return new BlockModel(undefined, textures, [
      { // body
        from: [1, 0, 1],
        to: [16, 10, 15],
        faces: {
          north: { uv: [10.5, 8.25, 14.25, 10.75], rotation: 180, texture: tex },
          south: { uv: [3.25, 8.25, 7, 10.75], rotation: 180, texture: tex },
          west: { uv: [0, 8.25, 3.5, 10.75], rotation: 180, texture: tex }, // exterior side face
          up: { uv: [7, 4.75, 10.75, 8.25], texture: tex },
          down: { uv: [3.25, 4.75, 7, 8.25], texture: tex },
          // east face omitted (joining seam face at x=16)
        },
      },
      { // lid
        from: [1, 10, 1],
        to: [16, 14, 15],
        faces: {
          north: { uv: [10.5, 3.75, 14.25, 4.75], rotation: 180, texture: tex },
          south: { uv: [3.25, 3.75, 7, 4.75], rotation: 180, texture: tex },
          west: { uv: [0, 3.75, 3.5, 4.75], rotation: 180, texture: tex }, // exterior side face
          up: { uv: [7, 0, 10.75, 3.5], texture: tex },
          down: { uv: [3.25, 0, 7, 3.5], texture: tex },
          // east face omitted (joining seam face at x=16)
        },
      },
      { // latch knob
        from: [15, 7, 0],
        to: [16, 11, 1],
        faces: {
          north: { uv: [0.25, 0.25, 0.5, 1.25], rotation: 180, texture: tex },
          south: { uv: [0.75, 0.25, 1.0, 1.25], rotation: 180, texture: tex },
          west: { uv: [0.5, 0.25, 0.75, 1.25], rotation: 180, texture: tex },
          up: { uv: [0.25, 0, 0.5, 0.25], texture: tex },
          down: { uv: [0.5, 0, 0.75, 0.25], texture: tex },
        },
      },
    ]);
  }
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

// Override getBlockMesh to fix chest type (single/left/right) and waterlogged stairs Z-fighting
const origGetBlockMesh = SpecialRenderers.getBlockMesh;
SpecialRenderers.getBlockMesh = function (block: any, nbt: any, atlas: any, cull: any) {
  const name = block.getName().toString();
  if (name === 'minecraft:chest' || name === 'minecraft:trapped_chest') {
    const type = block.getProperty('type') ?? 'single';
    const facing = block.getProperty('facing') ?? 'south';
    const baseTex = name === 'minecraft:trapped_chest' ? 'trapped' : 'normal';

    let model: any;
    if (type === 'left') {
      model = createChestHalfModel('left', `${baseTex}_left`).getMesh(atlas, Cull.none());
    } else if (type === 'right') {
      model = createChestHalfModel('right', `${baseTex}_right`).getMesh(atlas, Cull.none());
    }

    if (model) {
      const mesh = new Lodestone.Mesh();
      const t = mat4.create();
      mat4.translate(t, t, [8, 8, 8]);
      mat4.rotateY(t, t, facing === 'west' ? Math.PI / 2 : facing === 'south' ? Math.PI : facing === 'east' ? (Math.PI * 3) / 2 : 0);
      mat4.translate(t, t, [-8, -8, -8]);
      mesh.merge(model.transform(t));

      const scaleMat = mat4.create();
      mat4.scale(scaleMat, scaleMat, [0.0625, 0.0625, 0.0625]);
      return mesh.transform(scaleMat);
    }
  }

  const mesh = origGetBlockMesh.call(SpecialRenderers, block, nbt, atlas, cull);

  if (!block.is('water') && !block.is('lava') && block.isWaterlogged()) {
    const waterMesh = liquidRendererWaterlogged(atlas);
    const scaleMat = mat4.create();
    mat4.scale(scaleMat, scaleMat, [0.0625, 0.0625, 0.0625]);
    mesh.merge(waterMesh.transform(scaleMat));
  }

  return mesh;
};

// Fast zero-allocation Mesh to BufferGeometry converter
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
  const indices = vertCount > 65535 ? new Uint32Array(quadCount * 6) : new Uint16Array(quadCount * 6);

  let vIndex = 0;
  let iIndex = 0;
  let offset = 0;

  for (let q = 0; q < quadCount; q++) {
    const quad = mesh.quads[q];
    const verts = quad.vertices();
    const quadNormal = quad.normal();

    for (let i = 0; i < 4; i++) {
      const v = verts[i];
      const pos = v.pos;
      const normal = v.normal || quadNormal;
      const uv = v.texture;
      const texLimit = v.textureLimit;
      const color = v.color;
      const bPos = v.blockPos || pos;

      positions[vIndex * 3] = pos.x;
      positions[vIndex * 3 + 1] = pos.y;
      positions[vIndex * 3 + 2] = pos.z;

      normals[vIndex * 3] = normal.x;
      normals[vIndex * 3 + 1] = normal.y;
      normals[vIndex * 3 + 2] = normal.z;

      if (uv) {
        uvs[vIndex * 2] = uv[0];
        uvs[vIndex * 2 + 1] = uv[1];
      }

      if (texLimit) {
        texLimits[vIndex * 4] = texLimit[0];
        texLimits[vIndex * 4 + 1] = texLimit[1];
        texLimits[vIndex * 4 + 2] = texLimit[2];
        texLimits[vIndex * 4 + 3] = texLimit[3];
      }

      if (color) {
        colors[vIndex * 3] = color[0];
        colors[vIndex * 3 + 1] = color[1];
        colors[vIndex * 3 + 2] = color[2];
      } else {
        colors[vIndex * 3] = 1;
        colors[vIndex * 3 + 1] = 1;
        colors[vIndex * 3 + 2] = 1;
      }

      blockPositions[vIndex * 3] = bPos.x;
      blockPositions[vIndex * 3 + 1] = bPos.y;
      blockPositions[vIndex * 3 + 2] = bPos.z;

      emissives[vIndex] = v.emissive || 0;

      vIndex++;
    }

    indices[iIndex] = offset;
    indices[iIndex + 1] = offset + 1;
    indices[iIndex + 2] = offset + 2;
    indices[iIndex + 3] = offset;
    indices[iIndex + 4] = offset + 2;
    indices[iIndex + 5] = offset + 3;

    iIndex += 6;
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

// Fast quad translation into target mesh without object re-allocation
function addTransformedQuads(targetMesh: any, sourceMesh: any, offsetX: number, offsetY: number, offsetZ: number) {
  if (!sourceMesh || !sourceMesh.quads || sourceMesh.quads.length === 0) return;

  for (let q = 0; q < sourceMesh.quads.length; q++) {
    const origQuad = sourceMesh.quads[q];
    const origVerts = origQuad.vertices();

    const v0 = origVerts[0].clone();
    const v1 = origVerts[1].clone();
    const v2 = origVerts[2].clone();
    const v3 = origVerts[3].clone();

    v0.pos.x += offsetX; v0.pos.y += offsetY; v0.pos.z += offsetZ;
    v1.pos.x += offsetX; v1.pos.y += offsetY; v1.pos.z += offsetZ;
    v2.pos.x += offsetX; v2.pos.y += offsetY; v2.pos.z += offsetZ;
    v3.pos.x += offsetX; v3.pos.y += offsetY; v3.pos.z += offsetZ;

    v0.blockPos = { x: offsetX, y: offsetY, z: offsetZ };
    v1.blockPos = { x: offsetX, y: offsetY, z: offsetZ };
    v2.blockPos = { x: offsetX, y: offsetY, z: offsetZ };
    v3.blockPos = { x: offsetX, y: offsetY, z: offsetZ };

    targetMesh.quads.push(new Lodestone.Quad(v0, v1, v2, v3));
  }
}

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

// Render loop to keep view and OrbitControls synchronized
function tick() {
  if (!isRendering) return;
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

  const isAir = palette.map(state => state.is('minecraft:air') || state.is('minecraft:cave_air') || state.is('minecraft:void_air'));

  // Pre-build cached meshes and opacity flags for palette entries ONCE
  const paletteMesh: any[] = new Array(palette.length);
  const paletteTransparentMesh: any[] = new Array(palette.length);
  const isOpaque: boolean[] = new Array(palette.length);

  for (let i = 0; i < palette.length; i++) {
    if (isAir[i]) {
      isOpaque[i] = false;
      continue;
    }

    const state = palette[i];
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
      isOpaque[i] = false;
    } else {
      opaqueMesh.merge(mesh);
      // Blocks that have solid meshes and are non-transparent are opaque for occlusion culling
      isOpaque[i] = !mesh.isEmpty() && !flags?.semi_transparent;
    }

    paletteMesh[i] = opaqueMesh;
    paletteTransparentMesh[i] = transMesh;
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
        const pct = Math.floor((i / Math.max(1, longs.length)) * 50); // First 50% for NBT long array conversion
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

  // Compute block statistics with time-sliced yields for large volumes
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

    if (paletteIndex >= 0 && paletteIndex < palette.length && !isAir[paletteIndex]) {
      paletteStats[paletteIndex]++;
      totalPlacedBlocks++;
    }

    if ((index & 0x7ff) === 0) {
      const now = performance.now();
      if (now - lastYield >= 12) {
        const pct = 50 + Math.floor((index / Math.max(1, volume)) * 50); // Second 50% for block unpacking
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
  // Scale Chunk Size according to total schematic volume to avoid excess WebGL draw calls & VBO overhead
  const CSIZE = volume > 2000000 ? 64 : volume > 500000 || maxDim > 128 ? 32 : 16;

  // Helper function to query grid index block palette index
  const getPaletteIndexAt = (x: number, y: number, z: number): number => {
    if (x < 0 || x >= width || y < 0 || y >= height || z < 0 || z >= depth) return -1;
    const idx = (y * depth + z) * width + x;
    if (bigArray.length === 0) return 0;
    const startBit = BigInt(idx * bitsPerBlock);
    const startWord = Number(startBit >> 6n);
    const bitOffset = startBit & 63n;
    if (startWord >= bigArray.length) return 0;
    let val = bigArray[startWord] >> bitOffset;
    if (bitOffset + BigInt(bitsPerBlock) > 64n && startWord + 1 < bigArray.length) {
      val |= bigArray[startWord + 1] << (64n - bitOffset);
    }
    return Number(val & mask);
  };

  // Helper to check if a block at (x,y,z) is fully occluded by 6 opaque neighbors
  const isOccluded = (x: number, y: number, z: number): boolean => {
    if (x === 0 || x === width - 1 || y === 0 || y === height - 1 || z === 0 || z === depth - 1) {
      return false; // Exterior boundary blocks are visible
    }

    const pX1 = getPaletteIndexAt(x + 1, y, z); if (pX1 < 0 || !isOpaque[pX1]) return false;
    const pX2 = getPaletteIndexAt(x - 1, y, z); if (pX2 < 0 || !isOpaque[pX2]) return false;
    const pY1 = getPaletteIndexAt(x, y + 1, z); if (pY1 < 0 || !isOpaque[pY1]) return false;
    const pY2 = getPaletteIndexAt(x, y - 1, z); if (pY2 < 0 || !isOpaque[pY2]) return false;
    const pZ1 = getPaletteIndexAt(x, y, z + 1); if (pZ1 < 0 || !isOpaque[pZ1]) return false;
    const pZ2 = getPaletteIndexAt(x, y, z - 1); if (pZ2 < 0 || !isOpaque[pZ2]) return false;

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

  const storedBlocksForStructure: Array<{ pos: [number, number, number]; state: number }> = [];

  for (let cy = 0; cy < numChunksY; cy++) {
    for (let cz = 0; cz < numChunksZ; cz++) {
      for (let cx = 0; cx < numChunksX; cx++) {
        processedChunks++;

        const chunkMesh = new Lodestone.Mesh();
        const chunkTransparentMesh = new Lodestone.Mesh();

        const xStart = cx * CSIZE;
        const xEnd = Math.min(width, (cx + 1) * CSIZE);
        const yStart = cy * CSIZE;
        const yEnd = Math.min(height, (cy + 1) * CSIZE);
        const zStart = cz * CSIZE;
        const zEnd = Math.min(depth, (cz + 1) * CSIZE);

        for (let y = yStart; y < yEnd; y++) {
          for (let z = zStart; z < zEnd; z++) {
            for (let x = xStart; x < xEnd; x++) {
              const index = (y * depth + z) * width + x;

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

              if (paletteIndex >= 0 && paletteIndex < palette.length && !isAir[paletteIndex]) {
                if (x < minX) minX = x;
                if (y < minY) minY = y;
                if (z < minZ) minZ = z;
                if (x > maxX) maxX = x;
                if (y > maxY) maxY = y;
                if (z > maxZ) maxZ = z;
                hasPlaced = true;

                if (volume <= 500000) {
                  storedBlocksForStructure.push({ pos: [x, y, z], state: paletteIndex });
                }

                // 6-Neighbor Occlusion Culling: Skip interior blocks surrounded by 6 opaque neighbors
                if (isOpaque[paletteIndex] && isOccluded(x, y, z)) {
                  continue;
                }

                // Fast Quad Translation from pre-cached palette meshes
                const oMesh = paletteMesh[paletteIndex];
                if (oMesh && !oMesh.isEmpty()) {
                  addTransformedQuads(chunkMesh, oMesh, x, y, z);
                }

                const tMesh = paletteTransparentMesh[paletteIndex];
                if (tMesh && !tMesh.isEmpty()) {
                  addTransformedQuads(chunkTransparentMesh, tMesh, x, y, z);
                }
              }
            }
          }
        }

        // Add chunk meshes to scene immediately for progressive streaming display ("加载多少显示多少")
        if (!chunkMesh.isEmpty()) {
          const geometry = meshToBufferGeometry(chunkMesh);
          const threeMesh = new THREE.Mesh(geometry, (renderer as any).opaqueMaterial);
          threeMesh.visible = true;
          threeMesh.frustumCulled = false;
          (renderer as any).structureScene.add(threeMesh);
          (renderer as any).chunkMeshes.push(threeMesh);
        }

        if (!chunkTransparentMesh.isEmpty()) {
          const geometry = meshToBufferGeometry(chunkTransparentMesh);
          const threeMesh = new THREE.Mesh(geometry, (renderer as any).transparentMaterial);
          threeMesh.renderOrder = 1;
          threeMesh.visible = true;
          threeMesh.frustumCulled = false;
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

  if (storedBlocksForStructure.length > 0) {
    currentStructure = new Structure(size, palette, storedBlocksForStructure);
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
