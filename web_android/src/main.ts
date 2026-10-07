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

// High-performance, low-memory block caching patch using Map
(Structure.prototype as any).ensurePlacedCaches = function () {
  if (this.placedBlocksCache && this.placedBlocksMapCache) return;
  this.placedBlocksCache = [];
  this.placedBlocksMapCache = new Map();
  for (let i = 0; i < this.blocks.length; i++) {
    const block = this.blocks[i];
    const placed = this.toPlacedBlock(block);
    this.placedBlocksCache.push(placed);
    this.placedBlocksMapCache.set(this.getIndex(block.pos), placed);
  }
};

(Structure.prototype as any).getBlock = function (pos: [number, number, number]) {
  if (!this.isInside(pos)) return null;
  this.ensurePlacedCaches();
  if (this.placedBlocksMapCache instanceof Map) {
    return this.placedBlocksMapCache.get(this.getIndex(pos)) ?? null;
  }
  return this.placedBlocksMapCache?.[this.getIndex(pos)] ?? null;
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

// Override SpecialRenderers.getBlockMesh for Chests, Hanging Signs, and Item Frames
if ((Lodestone as any).SpecialRenderers?.getBlockMesh) {
  const origGetBlockMesh = (Lodestone as any).SpecialRenderers.getBlockMesh;
  const { BlockModel, Cull, Mesh } = Lodestone;

  function createChestModel(chestType: string, chestKind: string, atlas: any) {
    const texName = `entity/chest/${chestKind}${chestType === 'left' ? '_left' : chestType === 'right' ? '_right' : ''}`;
    if (chestType === 'single') {
      return new BlockModel(undefined, { 0: texName }, [
        {
          from: [1, 0, 1],
          to: [15, 10, 15],
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
          from: [1, 10, 1],
          to: [15, 14, 15],
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
          from: [7, 7, 0],
          to: [9, 11, 2],
          faces: {
            north: { uv: [0.25, 0.25, 0.75, 1.25], rotation: 180, texture: '#0' },
            east: { uv: [0, 0.25, 0.25, 1.25], rotation: 180, texture: '#0' },
            south: { uv: [1, 0.25, 1.5, 1.25], rotation: 180, texture: '#0' },
            west: { uv: [0.75, 0.25, 1, 1.25], rotation: 180, texture: '#0' },
            up: { uv: [0.25, 0, 0.75, 0.25], rotation: 180, texture: '#0' },
            down: { uv: [0.75, 0, 1.25, 0.25], rotation: 180, texture: '#0' }
          }
        }
      ]).getMesh(atlas, Cull.none());
    }

    const isLeft = chestType === 'left';
    const fromX = isLeft ? 0 : 1;
    const toX = isLeft ? 15 : 16;
    const latchFromX = isLeft ? 14 : 0;
    const latchToX = isLeft ? 16 : 2;

    // UV mapping for Left vs Right double chest halves according to Minecraft Vanilla texture maps
    const bodyNorthUv = isLeft ? [10.5, 8.25, 14.25, 10.75] : [7, 8.25, 10.75, 10.75];
    const bodySouthUv = isLeft ? [3.5, 8.25, 7.25, 10.75] : [0, 8.25, 3.75, 10.75];
    const bodyUpUv = isLeft ? [7, 4.75, 10.75, 8.25] : [3.5, 4.75, 7.25, 8.25];
    const bodyDownUv = isLeft ? [3.5, 4.75, 7.25, 8.25] : [0, 4.75, 3.75, 8.25];

    const lidNorthUv = isLeft ? [10.5, 3.75, 14.25, 4.75] : [7, 3.75, 10.75, 4.75];
    const lidSouthUv = isLeft ? [3.5, 3.75, 7.25, 4.75] : [0, 3.75, 3.75, 4.75];
    const lidUpUv = isLeft ? [7, 0, 10.75, 3.5] : [3.5, 0, 7.25, 3.5];
    const lidDownUv = isLeft ? [3.5, 0, 7.25, 3.5] : [0, 0, 3.75, 3.5];

    return new BlockModel(undefined, { 0: texName }, [
      {
        from: [fromX, 0, 1],
        to: [toX, 10, 15],
        faces: {
          north: { uv: bodyNorthUv, rotation: 180, texture: '#0' },
          east: { uv: [7, 8.25, 10.5, 10.75], rotation: 180, texture: '#0' },
          south: { uv: bodySouthUv, rotation: 180, texture: '#0' },
          west: { uv: [0, 8.25, 3.5, 10.75], rotation: 180, texture: '#0' },
          up: { uv: bodyUpUv, texture: '#0' },
          down: { uv: bodyDownUv, texture: '#0' }
        }
      },
      {
        from: [fromX, 10, 1],
        to: [toX, 14, 15],
        faces: {
          north: { uv: lidNorthUv, rotation: 180, texture: '#0' },
          east: { uv: [7, 3.75, 10.5, 4.75], rotation: 180, texture: '#0' },
          south: { uv: lidSouthUv, rotation: 180, texture: '#0' },
          west: { uv: [0, 3.75, 3.5, 4.75], rotation: 180, texture: '#0' },
          up: { uv: lidUpUv, texture: '#0' },
          down: { uv: lidDownUv, texture: '#0' }
        }
      },
      {
        from: [latchFromX, 7, 0],
        to: [latchToX, 11, 2],
        faces: {
          north: { uv: [0.25, 0.25, 0.75, 1.25], rotation: 180, texture: '#0' },
          east: { uv: [0, 0.25, 0.25, 1.25], rotation: 180, texture: '#0' },
          south: { uv: [1, 0.25, 1.5, 1.25], rotation: 180, texture: '#0' },
          west: { uv: [0.75, 0.25, 1, 1.25], rotation: 180, texture: '#0' },
          up: { uv: [0.25, 0, 0.75, 0.25], rotation: 180, texture: '#0' },
          down: { uv: [0.75, 0, 1.25, 0.25], rotation: 180, texture: '#0' }
        }
      }
    ]).getMesh(atlas, Cull.none());
  }

  function createHangingSignModel(woodType: string, attached: boolean, isWall: boolean, atlas: any) {
    const texName = `block/${woodType}_planks`;
    const chainTex = 'block/chain';

    if (isWall) {
      return new BlockModel(undefined, { 0: texName, 1: chainTex }, [
        {
          from: [1, 0, 7],
          to: [15, 10, 9],
          faces: {
            north: { uv: [1, 6, 15, 16], texture: '#0' },
            east: { uv: [7, 6, 9, 16], texture: '#0' },
            south: { uv: [1, 6, 15, 16], texture: '#0' },
            west: { uv: [7, 6, 9, 16], texture: '#0' },
            up: { uv: [1, 7, 15, 9], texture: '#0' },
            down: { uv: [1, 7, 15, 9], texture: '#0' }
          }
        },
        {
          from: [0, 14, 6],
          to: [16, 16, 10],
          faces: {
            north: { uv: [0, 0, 16, 2], texture: '#0' },
            east: { uv: [6, 0, 10, 2], texture: '#0' },
            south: { uv: [0, 0, 16, 2], texture: '#0' },
            west: { uv: [6, 0, 10, 2], texture: '#0' },
            up: { uv: [0, 6, 16, 10], texture: '#0' },
            down: { uv: [0, 6, 16, 10], texture: '#0' }
          }
        },
        {
          from: [2, 10, 7.5],
          to: [4, 14, 8.5],
          faces: {
            north: { uv: [0, 0, 2, 4], texture: '#1' },
            east: { uv: [0, 0, 1, 4], texture: '#1' },
            south: { uv: [0, 0, 2, 4], texture: '#1' },
            west: { uv: [0, 0, 1, 4], texture: '#1' }
          }
        },
        {
          from: [12, 10, 7.5],
          to: [14, 14, 8.5],
          faces: {
            north: { uv: [0, 0, 2, 4], texture: '#1' },
            east: { uv: [0, 0, 1, 4], texture: '#1' },
            south: { uv: [0, 0, 2, 4], texture: '#1' },
            west: { uv: [0, 0, 1, 4], texture: '#1' }
          }
        }
      ]).getMesh(atlas, Cull.none());
    }

    return new BlockModel(undefined, { 0: texName, 1: chainTex }, [
      {
        from: [1, 0, 7],
        to: [15, 10, 9],
        faces: {
          north: { uv: [1, 6, 15, 16], texture: '#0' },
          east: { uv: [7, 6, 9, 16], texture: '#0' },
          south: { uv: [1, 6, 15, 16], texture: '#0' },
          west: { uv: [7, 6, 9, 16], texture: '#0' },
          up: { uv: [1, 7, 15, 9], texture: '#0' },
          down: { uv: [1, 7, 15, 9], texture: '#0' }
        }
      },
      {
        from: [2, 10, 7.5],
        to: [4, 16, 8.5],
        faces: {
          north: { uv: [0, 0, 2, 6], texture: '#1' },
          east: { uv: [0, 0, 1, 6], texture: '#1' },
          south: { uv: [0, 0, 2, 6], texture: '#1' },
          west: { uv: [0, 0, 1, 6], texture: '#1' }
        }
      },
      {
        from: [12, 10, 7.5],
        to: [14, 16, 8.5],
        faces: {
          north: { uv: [0, 0, 2, 6], texture: '#1' },
          east: { uv: [0, 0, 1, 6], texture: '#1' },
          south: { uv: [0, 0, 2, 6], texture: '#1' },
          west: { uv: [0, 0, 1, 6], texture: '#1' }
        }
      }
    ]).getMesh(atlas, Cull.none());
  }

  function createItemFrameModel(isGlow: boolean, facing: string, atlas: any) {
    const frameTex = isGlow ? 'block/glow_item_frame' : 'block/item_frame';
    const woodTex = 'block/oak_planks';

    const rawMesh = new BlockModel(undefined, { 0: frameTex, 1: woodTex }, [
      {
        from: [2, 2, 0.05],
        to: [14, 14, 0.8],
        faces: {
          south: { uv: [2, 2, 14, 14], texture: '#0' },
          north: { uv: [2, 2, 14, 14], texture: '#1' },
          east: { uv: [0, 2, 1, 14], texture: '#1' },
          west: { uv: [0, 2, 1, 14], texture: '#1' },
          up: { uv: [2, 0, 14, 1], texture: '#1' },
          down: { uv: [2, 0, 14, 1], texture: '#1' }
        }
      }
    ]).getMesh(atlas, Cull.none());

    const t = mat4.create();
    mat4.translate(t, t, [8, 8, 8]);
    if (facing === 'down') {
      mat4.rotateX(t, t, Math.PI / 2);
    } else if (facing === 'up') {
      mat4.rotateX(t, t, -Math.PI / 2);
    } else if (facing === 'north') {
      mat4.rotateY(t, t, Math.PI);
    } else if (facing === 'west') {
      mat4.rotateY(t, t, Math.PI / 2);
    } else if (facing === 'east') {
      mat4.rotateY(t, t, -Math.PI / 2);
    }
    mat4.translate(t, t, [-8, -8, -8]);
    return rawMesh.transform(t);
  }

  (Lodestone as any).SpecialRenderers.getBlockMesh = function (block: any, nbt: any, atlas: any, cull: any) {
    const blockName = block.getName().toString();

    // Custom Chest & Double Chest
    if (blockName === 'minecraft:chest' || blockName === 'minecraft:trapped_chest' || blockName === 'minecraft:ender_chest') {
      const chestKind = blockName === 'minecraft:ender_chest' ? 'ender' : blockName === 'minecraft:trapped_chest' ? 'trapped' : 'normal';
      const facing = block.getProperty('facing') ?? 'south';
      const chestType = block.getProperty('type') ?? 'single';

      const mesh = createChestModel(chestType, chestKind, atlas);

      const t = mat4.create();
      mat4.translate(t, t, [8, 8, 8]);
      mat4.rotateY(t, t, facing === 'west' ? Math.PI / 2 : facing === 'south' ? Math.PI : facing === 'east' ? Math.PI * 3 / 2 : 0);
      mat4.translate(t, t, [-8, -8, -8]);
      mesh.transform(t);

      const rootMat = mat4.create();
      mat4.scale(rootMat, rootMat, [0.0625, 0.0625, 0.0625]);
      return mesh.transform(rootMat);
    }

    // Custom Hanging Sign
    if (blockName.endsWith('_hanging_sign')) {
      const isWall = blockName.includes('_wall_hanging_sign');
      const woodType = blockName.replace('minecraft:', '').replace('_wall_hanging_sign', '').replace('_hanging_sign', '');
      const attached = (block.getProperty('attached') ?? 'false') === 'true';

      const mesh = createHangingSignModel(woodType, attached, isWall, atlas);

      const t = mat4.create();
      mat4.translate(t, t, [8, 8, 8]);
      if (isWall) {
        const facing = block.getProperty('facing') ?? 'south';
        mat4.rotateY(t, t, facing === 'west' ? Math.PI / 2 : facing === 'south' ? Math.PI : facing === 'east' ? Math.PI * 3 / 2 : 0);
      } else {
        const rotation = (parseInt(block.getProperty('rotation') ?? '0') / 16) * Math.PI * 2;
        mat4.rotateY(t, t, rotation);
        mat4.scale(t, t, [2 / 3, 2 / 3, 2 / 3]);
      }
      mat4.translate(t, t, [-8, -8, -8]);
      mesh.transform(t);

      const rootMat = mat4.create();
      mat4.scale(rootMat, rootMat, [0.0625, 0.0625, 0.0625]);
      return mesh.transform(rootMat);
    }

    // Custom Item Frame & Glow Item Frame
    if (blockName === 'minecraft:item_frame' || blockName === 'minecraft:glow_item_frame') {
      const facing = block.getProperty('facing') ?? 'south';
      const isGlow = blockName === 'minecraft:glow_item_frame';

      const mesh = createItemFrameModel(isGlow, facing, atlas);

      const rootMat = mat4.create();
      mat4.scale(rootMat, rootMat, [0.0625, 0.0625, 0.0625]);
      return mesh.transform(rootMat);
    }

    return origGetBlockMesh.call(this, block, nbt, atlas, cull);
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
    chunkSize: [chunkSize, chunkSize, chunkSize],
    sunlight: {
      intensity: 0.7,
      ambientIntensity: 0.5,
      fillIntensity: 0.25,
      exposure: 0.9,
      color: [1.0, 0.95, 0.9],
      ambientColor: [0.5, 0.55, 0.6]
    }
  };

  renderer = new ThreeStructureRenderer(canvasElement, currentStructure, currentResources, rendererOptions);
  (renderer as any).drawDistance = 100000;

  if (renderer.renderer) {
    renderer.renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.renderer.toneMappingExposure = 0.9;
    renderer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const maxAnisotropy = renderer.renderer.capabilities.getMaxAnisotropy();
    if ((renderer as any).atlasTexture) {
      const atlasTex = (renderer as any).atlasTexture as THREE.Texture;
      atlasTex.generateMipmaps = true;
      atlasTex.minFilter = THREE.NearestMipmapLinearFilter;
      atlasTex.magFilter = THREE.NearestFilter;
      atlasTex.anisotropy = Math.min(maxAnisotropy, 8);
      atlasTex.needsUpdate = true;
    }
  }

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
