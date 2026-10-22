import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as Lodestone from '@mattzh72/lodestone';
import { mat4 } from 'gl-matrix';
import NbtWorker from './nbtWorker?worker&inline';

const {
  Structure,
  ThreeStructureRenderer,
  loadDefaultPackResources,
  createResourcesFromPack,
  BlockState
} = Lodestone;

// Patch TextureAtlas.prototype.getTextureUV for dual-key fallback compatibility
if ((Lodestone as any).TextureAtlas?.prototype?.getTextureUV) {
  const origGetTextureUV = (Lodestone as any).TextureAtlas.prototype.getTextureUV;
  (Lodestone as any).TextureAtlas.prototype.getTextureUV = function (id: any) {
    if (!id) return [0, 0, this.part, this.part];
    const str = id.toString();
    if (this.idMap[str]) return this.idMap[str];
    if (str.startsWith('minecraft:')) {
      const plain = str.substring(10);
      if (this.idMap[plain]) return this.idMap[plain];
    } else {
      const prefixed = 'minecraft:' + str;
      if (this.idMap[prefixed]) return this.idMap[prefixed];
    }
    return origGetTextureUV.call(this, id);
  };
}

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
let tightCenter: [number, number, number] = [0, 0, 0];
let tightRadius: number = 10;
let animFrameId: number | null = null;

// Worker Instance Management
let workerInstance: Worker | null = null;
let workerMessageId = 0;
const workerCallbacks = new Map<number, { resolve: (val: any) => void; reject: (err: any) => void }>();

function getWorker(): Worker {
  if (!workerInstance) {
    workerInstance = new NbtWorker();
    workerInstance.onmessage = (e: MessageEvent) => {
      const { id, type, error, ...data } = e.data;
      const cb = workerCallbacks.get(id);
      if (cb) {
        workerCallbacks.delete(id);
        if (type === 'ERROR' || error) {
          cb.reject(new Error(error || 'Worker error'));
        } else {
          cb.resolve(data);
        }
      }
    };
  }
  return workerInstance;
}

function sendWorkerMessage(type: string, payload: any, transferables?: Transferable[]): Promise<any> {
  const id = ++workerMessageId;
  const worker = getWorker();
  return new Promise((resolve, reject) => {
    workerCallbacks.set(id, { resolve, reject });
    if (transferables) {
      worker.postMessage({ id, type, payload }, transferables);
    } else {
      worker.postMessage({ id, type, payload });
    }
  });
}

// High-performance Uint16Array flat block grid storage with on-demand lazy block object creation
(Structure.prototype as any).ensurePlacedCaches = function () {
  if (this.placedBlocksGrid) return;
  const w = this.size[0], h = this.size[1], d = this.size[2];
  const volume = w * h * d;
  const grid = new Uint16Array(volume);
  grid.fill(0xffff);
  const hd = h * d;
  this.placedBlockObjectMap = new Map();

  for (let i = 0; i < this.blocks.length; i++) {
    const b = this.blocks[i];
    const idx = b.pos[0] * hd + b.pos[1] * d + b.pos[2];
    grid[idx] = b.state;
  }
  this.placedBlocksGrid = grid;
};

(Structure.prototype as any).getBlock = function (pos: [number, number, number]) {
  if (!this.isInside(pos)) return null;
  this.ensurePlacedCaches();
  const h = this.size[1], d = this.size[2];
  const idx = pos[0] * (h * d) + pos[1] * d + pos[2];
  const stateIdx = this.placedBlocksGrid[idx];
  if (stateIdx === 0xffff) return null;

  let cached = this.placedBlockObjectMap.get(idx);
  if (!cached) {
    cached = { pos: [pos[0], pos[1], pos[2]], state: this.palette[stateIdx] };
    this.placedBlockObjectMap.set(idx, cached);
  }
  return cached;
};

(Structure.prototype as any).getBlocks = function () {
  this.ensurePlacedCaches();
  if (this.placedBlocksCache && this.placedBlocksCache.length > 0) {
    return this.placedBlocksCache;
  }
  this.placedBlocksCache = [];
  for (let i = 0; i < this.blocks.length; i++) {
    const b = this.blocks[i];
    this.placedBlocksCache.push({ pos: [b.pos[0], b.pos[1], b.pos[2]], state: this.palette[b.state], nbt: b.nbt });
  }
  return this.placedBlocksCache;
};

function createWaterMesh(
  type: string,
  level: number,
  atlas: any,
  cull: any,
  _tintindex: number = 0,
  structure: any = null,
  pos: any = null
) {
  const mesh = new (Lodestone as any).Mesh();
  const tint = (Lodestone as any).BlockColors?.[type]?.({}) ?? [0.247, 0.462, 0.894];
  const heightsTable = [14.2, 12.5, 10.5, 9.0, 7.0, 5.3, 3.7, 1.9];

  const neighborHasFluid = (nx: number, ny: number, nz: number) => {
    if (!structure) return false;
    const nb = structure.getBlock([nx, ny, nz])?.state;
    if (!nb) return false;
    const nbName = nb.getName().toString();
    if (nbName === 'minecraft:water' || nbName === 'minecraft:lava') return true;
    if (nb.isWaterlogged && nb.isWaterlogged()) return true;
    return false;
  };

  const getNeighborWaterHeight = (nx: number, ny: number, nz: number) => {
    if (!structure) return -1;
    const b = structure.getBlock([nx, ny, nz])?.state;
    if (!b) return -1;
    const bName = b.getName().toString();
    const isW = bName === 'minecraft:water' || bName === 'minecraft:lava' || (b.isWaterlogged && b.isWaterlogged());
    if (!isW) return -1;

    const above = structure.getBlock([nx, ny + 1, nz])?.state;
    if (above) {
      const aName = above.getName().toString();
      if (aName === 'minecraft:water' || aName === 'minecraft:lava') {
        return 16.0;
      }
    }

    if (bName === 'minecraft:water' || bName === 'minecraft:lava') {
      const pLevelStr = typeof b.getProperty === 'function' ? b.getProperty('level') : (b.properties?.level ?? '0');
      const pLevel = parseInt(pLevelStr || '0', 10);
      if (pLevel >= 8) return 16.0;
      const effLevel = pLevel & 7;
      return heightsTable[effLevel] ?? 14.2;
    }
    return 14.2;
  };

  const [bx, by, bz] = pos || [0, 0, 0];
  const cullUpFinal = cull['up'] || (structure && pos ? neighborHasFluid(bx, by + 1, bz) : false);
  const cullDownFinal = cull['down'] || (structure && pos ? neighborHasFluid(bx, by - 1, bz) : false);

  const renderNorth = !cull['north'];
  const renderSouth = !cull['south'];
  const renderWest  = !cull['west'];
  const renderEast  = !cull['east'];

  const nbH_north = structure && pos ? getNeighborWaterHeight(bx, by, bz - 1) : -1;
  const nbH_south = structure && pos ? getNeighborWaterHeight(bx, by, bz + 1) : -1;
  const nbH_west  = structure && pos ? getNeighborWaterHeight(bx - 1, by, bz) : -1;
  const nbH_east  = structure && pos ? getNeighborWaterHeight(bx + 1, by, bz) : -1;

  let isWaterloggedStair = false;
  let stairFacing = 'north';
  let stairHalf = 'bottom';
  let stairShape = 'straight';

  let isWaterloggedSlab = false;
  let slabType = 'bottom';

  let isWaterloggedTrapdoor = false;
  let trapdoorHalf = 'bottom';
  let trapdoorOpen = 'false';
  let trapdoorFacing = 'north';

  if (structure && pos) {
    const selfBlock = structure.getBlock(pos)?.state;
    if (selfBlock) {
      const selfName = selfBlock.getName().toString();
      const getProp = (k: string) => typeof selfBlock.getProperty === 'function' ? selfBlock.getProperty(k) : selfBlock.properties?.[k];

      if (selfName.includes('stair')) {
        isWaterloggedStair = true;
        stairFacing = getProp('facing') || 'north';
        stairHalf = getProp('half') || 'bottom';
        stairShape = getProp('shape') || 'straight';
      } else if (selfName.includes('slab') && !selfName.includes('double')) {
        isWaterloggedSlab = true;
        slabType = getProp('type') || 'bottom';
      } else if (selfName.includes('trapdoor')) {
        isWaterloggedTrapdoor = true;
        trapdoorHalf = getProp('half') || 'bottom';
        trapdoorOpen = getProp('open') || 'false';
        trapdoorFacing = getProp('facing') || 'north';
      }
    }
  }

  const blockAbove = structure && pos ? structure.getBlock([pos[0], pos[1] + 1, pos[2]])?.state : null;
  const isAbovePureFluid = blockAbove && (
    blockAbove.getName().toString() === 'minecraft:water' ||
    blockAbove.getName().toString() === 'minecraft:lava'
  );

  let defaultH = 14.2;
  if (isAbovePureFluid) {
    defaultH = 16.0;
  } else {
    const effectiveLevel = level & 7;
    defaultH = heightsTable[effectiveLevel] ?? 14.2;
  }

  let y_nw = defaultH, y_ne = defaultH, y_se = defaultH, y_sw = defaultH;

  if (cullUpFinal || isAbovePureFluid) {
    y_nw = y_ne = y_se = y_sw = 16.0;
  } else if (isWaterloggedStair || isWaterloggedSlab || isWaterloggedTrapdoor) {
    y_nw = y_ne = y_se = y_sw = defaultH;
  } else if (structure && pos) {
    const getWaterLevelHeight = (lx: number, ly: number, lz: number) => {
      const b = structure.getBlock([lx, ly, lz])?.state;
      if (!b) return -1;
      const bName = b.getName().toString();
      const isW = bName === 'minecraft:water' || bName === 'minecraft:lava' || (b.isWaterlogged && b.isWaterlogged());
      if (!isW) return -1;

      const above = structure.getBlock([lx, ly + 1, lz])?.state;
      if (above) {
        const aName = above.getName().toString();
        if (aName === 'minecraft:water' || aName === 'minecraft:lava') {
          return 16.0;
        }
      }

      if (bName === 'minecraft:water' || bName === 'minecraft:lava') {
        const pLevelStr = typeof b.getProperty === 'function' ? b.getProperty('level') : (b.properties?.level ?? '0');
        const pLevel = parseInt(pLevelStr || '0', 10);
        if (pLevel >= 8) return 16.0;
        const effLevel = pLevel & 7;
        return heightsTable[effLevel] ?? 14.2;
      }
      return 14.2;
    };

    const getCornerHeight = (cornerCols: [number, number][], defH: number) => {
      let sum = 0;
      let count = 0;
      let maxH = -1;
      let hasFallingOrFull = false;
      for (const [cx, cz] of cornerCols) {
        const h = getWaterLevelHeight(cx, by, cz);
        if (h >= 0) {
          sum += h;
          count++;
          if (h > maxH) maxH = h;
          if (h >= 16.0) hasFallingOrFull = true;
        }
      }
      if (count === 0) return defH;
      if (hasFallingOrFull) return 16.0;
      const avg = sum / count;
      return Math.min(avg, maxH >= 0 ? maxH : defH);
    };

    y_nw = getCornerHeight([[bx - 1, bz - 1], [bx - 1, bz], [bx, bz - 1], [bx, bz]], defaultH);
    y_ne = getCornerHeight([[bx, bz - 1], [bx + 1, bz - 1], [bx, bz], [bx + 1, bz]], defaultH);
    y_se = getCornerHeight([[bx, bz], [bx + 1, bz], [bx, bz + 1], [bx + 1, bz + 1]], defaultH);
    y_sw = getCornerHeight([[bx - 1, bz], [bx, bz], [bx - 1, bz + 1], [bx, bz + 1]], defaultH);
  }

  const textureStill = `block/${type}_still`;
  const textureFlow = `block/${type}_flow`;
  const [u0_s, v0_s, u1_s, v1_s] = atlas.getTextureUV(textureStill);
  const du_s = (u1_s - u0_s) / 16, dv_s = (v1_s - v0_s) / 16;
  const [u0_f, v0_f, u1_f, v1_f] = atlas.getTextureUV(textureFlow);
  const du_f = (u1_f - u0_f) / 16, dv_f = (v1_f - v0_f) / 16;

  const addWaterBox = (
    x0: number, y0: number, z0: number,
    x1: number, z1: number,
    y1_NW: number, y1_NE: number, y1_SE: number, y1_SW: number,
    renderUp: boolean, renderDown: boolean,
    renderNorth: boolean, renderSouth: boolean,
    renderWest: boolean, renderEast: boolean
  ) => {
    if (renderUp) {
      const q = (Lodestone as any).Quad.fromPoints(
        new (Lodestone as any).Vector(x0, y1_SW, z1),
        new (Lodestone as any).Vector(x1, y1_SE, z1),
        new (Lodestone as any).Vector(x1, y1_NE, z0),
        new (Lodestone as any).Vector(x0, y1_NW, z0)
      );
      q.setColor(tint);
      q.v1.texture = [u0_s + x0 * du_s, v0_s + z1 * dv_s];
      q.v2.texture = [u0_s + x1 * du_s, v0_s + z1 * dv_s];
      q.v3.texture = [u0_s + x1 * du_s, v0_s + z0 * dv_s];
      q.v4.texture = [u0_s + x0 * du_s, v0_s + z0 * dv_s];
      q.v1.textureLimit = [u0_s, v0_s, u1_s, v1_s];
      q.v2.textureLimit = [u0_s, v0_s, u1_s, v1_s];
      q.v3.textureLimit = [u0_s, v0_s, u1_s, v1_s];
      q.v4.textureLimit = [u0_s, v0_s, u1_s, v1_s];
      mesh.quads.push(q);
    }

    if (renderDown) {
      const q = (Lodestone as any).Quad.fromPoints(
        new (Lodestone as any).Vector(x0, y0, z0),
        new (Lodestone as any).Vector(x1, y0, z0),
        new (Lodestone as any).Vector(x1, y0, z1),
        new (Lodestone as any).Vector(x0, y0, z1)
      );
      q.setColor(tint);
      q.v1.texture = [u0_s + x0 * du_s, v0_s + z0 * dv_s];
      q.v2.texture = [u0_s + x1 * du_s, v0_s + z0 * dv_s];
      q.v3.texture = [u0_s + x1 * du_s, v0_s + z1 * dv_s];
      q.v4.texture = [u0_s + x0 * du_s, v0_s + z1 * dv_s];
      q.v1.textureLimit = [u0_s, v0_s, u1_s, v1_s];
      q.v2.textureLimit = [u0_s, v0_s, u1_s, v1_s];
      q.v3.textureLimit = [u0_s, v0_s, u1_s, v1_s];
      q.v4.textureLimit = [u0_s, v0_s, u1_s, v1_s];
      mesh.quads.push(q);
    }

    const y0_north = nbH_north >= 0 ? Math.min(nbH_north, Math.min(y1_NW, y1_NE)) : y0;
    const y0_south = nbH_south >= 0 ? Math.min(nbH_south, Math.min(y1_SW, y1_SE)) : y0;
    const y0_west  = nbH_west  >= 0 ? Math.min(nbH_west,  Math.min(y1_NW, y1_SW)) : y0;
    const y0_east  = nbH_east  >= 0 ? Math.min(nbH_east,  Math.min(y1_NE, y1_SE)) : y0;

    if (renderNorth && (y1_NW > y0_north || y1_NE > y0_north)) {
      const q = (Lodestone as any).Quad.fromPoints(
        new (Lodestone as any).Vector(x1, y0_north, z0),
        new (Lodestone as any).Vector(x0, y0_north, z0),
        new (Lodestone as any).Vector(x0, y1_NW, z0),
        new (Lodestone as any).Vector(x1, y1_NE, z0)
      );
      q.setColor(tint);
      q.v1.texture = [u0_f + x1 * du_f, v0_f + (16 - y0_north) * dv_f];
      q.v2.texture = [u0_f + x0 * du_f, v0_f + (16 - y0_north) * dv_f];
      q.v3.texture = [u0_f + x0 * du_f, v0_f + (16 - y1_NW) * dv_f];
      q.v4.texture = [u0_f + x1 * du_f, v0_f + (16 - y1_NE) * dv_f];
      q.v1.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v2.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v3.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v4.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      mesh.quads.push(q);
    }

    if (renderSouth && (y1_SW > y0_south || y1_SE > y0_south)) {
      const q = (Lodestone as any).Quad.fromPoints(
        new (Lodestone as any).Vector(x0, y0_south, z1),
        new (Lodestone as any).Vector(x1, y0_south, z1),
        new (Lodestone as any).Vector(x1, y1_SE, z1),
        new (Lodestone as any).Vector(x0, y1_SW, z1)
      );
      q.setColor(tint);
      q.v1.texture = [u0_f + x0 * du_f, v0_f + (16 - y0_south) * dv_f];
      q.v2.texture = [u0_f + x1 * du_f, v0_f + (16 - y0_south) * dv_f];
      q.v3.texture = [u0_f + x1 * du_f, v0_f + (16 - y1_SE) * dv_f];
      q.v4.texture = [u0_f + x0 * du_f, v0_f + (16 - y1_SW) * dv_f];
      q.v1.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v2.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v3.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v4.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      mesh.quads.push(q);
    }

    if (renderWest && (y1_NW > y0_west || y1_SW > y0_west)) {
      const q = (Lodestone as any).Quad.fromPoints(
        new (Lodestone as any).Vector(x0, y0_west, z0),
        new (Lodestone as any).Vector(x0, y0_west, z1),
        new (Lodestone as any).Vector(x0, y1_SW, z1),
        new (Lodestone as any).Vector(x0, y1_NW, z0)
      );
      q.setColor(tint);
      q.v1.texture = [u0_f + z0 * du_f, v0_f + (16 - y0_west) * dv_f];
      q.v2.texture = [u0_f + z1 * du_f, v0_f + (16 - y0_west) * dv_f];
      q.v3.texture = [u0_f + z1 * du_f, v0_f + (16 - y1_SW) * dv_f];
      q.v4.texture = [u0_f + z0 * du_f, v0_f + (16 - y1_NW) * dv_f];
      q.v1.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v2.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v3.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v4.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      mesh.quads.push(q);
    }

    if (renderEast && (y1_NE > y0_east || y1_SE > y0_east)) {
      const q = (Lodestone as any).Quad.fromPoints(
        new (Lodestone as any).Vector(x1, y0_east, z1),
        new (Lodestone as any).Vector(x1, y0_east, z0),
        new (Lodestone as any).Vector(x1, y1_NE, z0),
        new (Lodestone as any).Vector(x1, y1_SE, z1)
      );
      q.setColor(tint);
      q.v1.texture = [u0_f + (16 - z1) * du_f, v0_f + (16 - y0_east) * dv_f];
      q.v2.texture = [u0_f + (16 - z0) * du_f, v0_f + (16 - y0_east) * dv_f];
      q.v3.texture = [u0_f + (16 - z0) * du_f, v0_f + (16 - y1_NE) * dv_f];
      q.v4.texture = [u0_f + (16 - z1) * du_f, v0_f + (16 - y1_SE) * dv_f];
      q.v1.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v2.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v3.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      q.v4.textureLimit = [u0_f, v0_f, u1_f, v1_f];
      mesh.quads.push(q);
    }
  };

  if (isWaterloggedStair) {
    const straightCutouts: Record<string, number[]> = { north: [2, 3], south: [0, 1], east: [0, 3], west: [1, 2] };
    const outerLeftCutouts: Record<string, number[]> = { north: [0, 2, 3], south: [0, 1, 2], east: [0, 1, 3], west: [1, 2, 3] };
    const outerRightCutouts: Record<string, number[]> = { north: [1, 2, 3], south: [0, 1, 3], east: [0, 2, 3], west: [0, 1, 2] };
    const innerLeftCutouts: Record<string, number[]> = { north: [2], south: [0], east: [3], west: [1] };
    const innerRightCutouts: Record<string, number[]> = { north: [3], south: [1], east: [0], west: [2] };

    let cutoutQuads: number[] = [];
    if (stairShape === 'straight') {
      cutoutQuads = straightCutouts[stairFacing] || straightCutouts.north;
    } else if (stairShape === 'outer_left') {
      cutoutQuads = outerLeftCutouts[stairFacing] || outerLeftCutouts.north;
    } else if (stairShape === 'outer_right') {
      cutoutQuads = outerRightCutouts[stairFacing] || outerRightCutouts.north;
    } else if (stairShape === 'inner_left') {
      cutoutQuads = innerLeftCutouts[stairFacing] || innerLeftCutouts.north;
    } else if (stairShape === 'inner_right') {
      cutoutQuads = innerRightCutouts[stairFacing] || innerRightCutouts.north;
    } else {
      cutoutQuads = straightCutouts[stairFacing] || straightCutouts.north;
    }

    const isTopHalf = stairHalf === 'top';
    const subY0 = isTopHalf ? 0 : 8;

    const midNW_N = (y_nw + y_ne) / 2;
    const midNW_W = (y_nw + y_sw) / 2;
    const midNE_E = (y_ne + y_se) / 2;
    const midSE_S = (y_sw + y_se) / 2;
    const centerH = (y_nw + y_ne + y_se + y_sw) / 4;

    const hasQ = (qIdx: number) => cutoutQuads.includes(qIdx);

    const addSubBox = (
      qx0: number, qz0: number, qx1: number, qz1: number,
      hNW: number, hNE: number, hSE: number, hSW: number
    ) => {
      addWaterBox(
        qx0, subY0, qz0,
        qx1, qz1,
        hNW, hNE, hSE, hSW,
        !cullUpFinal && !isTopHalf,
        !cullDownFinal && qz0 === 0 && isTopHalf,
        renderNorth && qz0 === 0,
        renderSouth && qz1 === 16,
        renderWest && qx0 === 0,
        renderEast && qx1 === 16
      );
    };

    if (hasQ(0)) addSubBox(0, 0, 8, 8, y_nw, midNW_N, centerH, midNW_W);
    if (hasQ(1)) addSubBox(8, 0, 16, 8, midNW_N, y_ne, midNE_E, centerH);
    if (hasQ(2)) addSubBox(8, 8, 16, 16, centerH, midNE_E, y_se, midSE_S);
    if (hasQ(3)) addSubBox(0, 8, 8, 16, midNW_W, centerH, midSE_S, y_sw);

    return mesh;
  }

  if (isWaterloggedSlab) {
    if (slabType === 'bottom') {
      addWaterBox(
        0, 8, 0,
        16, 16,
        y_nw, y_ne, y_se, y_sw,
        !cullUpFinal, false,
        renderNorth, renderSouth,
        renderWest, renderEast
      );
    } else {
      addWaterBox(
        0, 0, 0,
        16, 16,
        8, 8, 8, 8,
        false, !cullDownFinal,
        renderNorth, renderSouth,
        renderWest, renderEast
      );
    }
    return mesh;
  }

  if (isWaterloggedTrapdoor) {
    if (trapdoorOpen === 'true') {
      if (trapdoorFacing === 'north') {
        addWaterBox(
          0, 0, 3,
          16, 16,
          y_nw, y_ne, y_se, y_sw,
          !cullUpFinal, !cullDownFinal,
          false, renderSouth,
          renderWest, renderEast
        );
      } else if (trapdoorFacing === 'south') {
        addWaterBox(
          0, 0, 0,
          16, 13,
          y_nw, y_ne, y_se, y_sw,
          !cullUpFinal, !cullDownFinal,
          renderNorth, false,
          renderWest, renderEast
        );
      } else if (trapdoorFacing === 'west') {
        addWaterBox(
          3, 0, 0,
          16, 16,
          y_nw, y_ne, y_se, y_sw,
          !cullUpFinal, !cullDownFinal,
          renderNorth, renderSouth,
          false, renderEast
        );
      } else {
        addWaterBox(
          0, 0, 0,
          13, 16,
          y_nw, y_ne, y_se, y_sw,
          !cullUpFinal, !cullDownFinal,
          renderNorth, renderSouth,
          renderWest, false
        );
      }
    } else {
      if (trapdoorHalf === 'bottom') {
        addWaterBox(
          0, 3, 0,
          16, 16,
          y_nw, y_ne, y_se, y_sw,
          !cullUpFinal, false,
          renderNorth, renderSouth,
          renderWest, renderEast
        );
      } else {
        addWaterBox(
          0, 0, 0,
          16, 16,
          13, 13, 13, 13,
          false, !cullDownFinal,
          renderNorth, renderSouth,
          renderWest, renderEast
        );
      }
    }
    return mesh;
  }

  addWaterBox(
    0, 0, 0,
    16, 16,
    y_nw, y_ne, y_se, y_sw,
    !cullUpFinal, !cullDownFinal,
    renderNorth, renderSouth,
    renderWest, renderEast
  );

  return mesh;
}

if ((Lodestone as any).SpecialRenderers) {
  (Lodestone as any).SpecialRenderers.liquidRenderer = function () {
    return new (Lodestone as any).Mesh();
  };
}

// Override SpecialRenderers.getBlockMesh to yield double chest halves (type=left/right) to BlockDefinition
if ((Lodestone as any).SpecialRenderers?.getBlockMesh) {
  const origGetBlockMesh = (Lodestone as any).SpecialRenderers.getBlockMesh;
  (Lodestone as any).SpecialRenderers.getBlockMesh = function (block: any, nbt: any, atlas: any, cull: any, structure?: any, pos?: any) {
    const name = block.getName().toString();
    const scaleMat = new Float32Array([
      0.0625, 0, 0, 0,
      0, 0.0625, 0, 0,
      0, 0, 0.0625, 0,
      0, 0, 0, 1
    ]);

    if (name === 'minecraft:water' || name === 'minecraft:lava') {
      const liquidType = name.replace('minecraft:', '');
      const levelStr = typeof block.getProperty === 'function' ? block.getProperty('level') : (block.properties?.level ?? '0');
      const level = parseInt(levelStr || '0', 10);
      const wMesh = createWaterMesh(liquidType, level, atlas, cull, 0, structure, pos);
      return wMesh.transform(scaleMat);
    }
    if (name === 'minecraft:chest' || name === 'minecraft:trapped_chest') {
      let type = 'single';
      if (typeof block.getProperties === 'function') {
        const props = block.getProperties();
        if (props && props.type) type = props.type;
      } else if (block.properties) {
        type = block.properties.type || 'single';
      }
      if (type === 'left' || type === 'right') {
        const emptyMesh = new (Lodestone as any).Mesh();
        if (block.isWaterlogged && block.isWaterlogged()) {
          const waterMesh = createWaterMesh('water', 0, atlas, cull, 0, structure, pos);
          if (waterMesh) emptyMesh.merge(waterMesh.transform(scaleMat));
        }
        return emptyMesh;
      }
    } else if (name.includes('copper_chest')) {
      const emptyMesh = new (Lodestone as any).Mesh();
      if (block.isWaterlogged && block.isWaterlogged()) {
        const waterMesh = createWaterMesh('water', 0, atlas, cull, 0, structure, pos);
        if (waterMesh) emptyMesh.merge(waterMesh.transform(scaleMat));
      }
      return emptyMesh;
    }

    const mesh = origGetBlockMesh.call(this, block, nbt, atlas, cull);
    if (block.isWaterlogged && block.isWaterlogged()) {
      const waterMesh = createWaterMesh('water', 0, atlas, cull, 0, structure, pos);
      if (waterMesh && !waterMesh.isEmpty()) {
        mesh.merge(waterMesh.transform(scaleMat));
      }
    }
    return mesh;
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

const isNoCullBlock = (name: string) => {
  if (!name) return false;
  const lower = name.toLowerCase();
  return (
    lower.includes('redstone_torch') ||
    lower.includes('redstone_wall_torch') ||
    lower.includes('repeater') ||
    lower.includes('comparator')
  );
};

const isGlassBlock = (name: string) => {
  if (!name) return false;
  const lower = name.toLowerCase();
  return lower.includes('glass') && !lower.includes('pane');
};

const isGlassPane = (name: string) => {
  if (!name) return false;
  return name.toLowerCase().includes('pane');
};

const isFullLeavesBlock = (name: string) => {
  if (!name) return false;
  const lower = name.toLowerCase();
  if (!lower.includes('leaves')) return false;
  if (lower.includes('azalea')) return false;
  return true;
};

const isObserverBlock = (name: string) => {
  if (!name) return false;
  return name.toLowerCase().includes('observer');
};

// Comprehensive Face Culling & Special Block Processing
if (Lodestone.ChunkBuilder) {
  (Lodestone.ChunkBuilder.prototype as any).needsCull = function (block: any, dir: any) {
    const blockName = block.state.getName().toString();

    if (isNoCullBlock(blockName)) {
      return false;
    }

    const neighbor = (this as any).structure.getBlock(Lodestone.BlockPos.towards(block.pos, dir))?.state;
    if (!neighbor) return false;
    const neighborName = neighbor.getName().toString();

    if (isGlassBlock(blockName)) {
      return isGlassBlock(neighborName);
    }

    if (isGlassPane(blockName)) {
      return false;
    }

    if (isFullLeavesBlock(blockName)) {
      return isFullLeavesBlock(neighborName);
    }

    if (isObserverBlock(blockName)) {
      return isObserverBlock(neighborName);
    }

    const selfIsPureFluid = blockName === 'minecraft:water' || blockName === 'minecraft:lava';
    if (selfIsPureFluid) {
      const dirName = typeof dir === 'string' ? dir : (dir?.name || String(dir));
      const neighborIsWater = neighborName === 'minecraft:water' || neighborName === 'minecraft:lava' || (neighbor.isWaterlogged && neighbor.isWaterlogged());
      if (dirName === 'up' || dirName === 'down') {
        if (neighborIsWater) return true;
      } else if (neighborIsWater) {
        return false;
      }
      if (isGlassBlock(neighborName) || isGlassPane(neighborName)) return false;
      if (isNonFullBlock(neighborName)) return false;
      const flags = (this as any).resources.getBlockFlags(neighbor.getName());
      if (flags?.transparent) return false;
      if (!flags?.opaque) return false;
      return true;
    }

    const flags = (this as any).resources.getBlockFlags(neighbor.getName());
    if (!flags?.opaque) return false;
    if (isNonFullBlock(neighborName)) return false;
    return true;
  };

  (Lodestone.ChunkBuilder.prototype as any).isFullyOccluded = function (block: any) {
    const blockName = block.state.getName().toString();
    if (
      isNoCullBlock(blockName) ||
      blockName.includes('chest') ||
      blockName.includes('sign') ||
      blockName.includes('frame') ||
      blockName.includes('torch')
    ) {
      return false;
    }

    const dirs = [
      Lodestone.Direction.UP, Lodestone.Direction.DOWN,
      Lodestone.Direction.NORTH, Lodestone.Direction.SOUTH,
      Lodestone.Direction.EAST, Lodestone.Direction.WEST
    ];
    for (const dir of dirs) {
      const neighbor = (this as any).structure.getBlock(Lodestone.BlockPos.towards(block.pos, dir))?.state;
      if (!neighbor) return false;
      const name = neighbor.getName().toString();
      if (isNonFullBlock(name)) return false;
      const flags = (this as any).resources.getBlockFlags(neighbor.getName());
      if (!flags?.opaque) return false;
    }
    return true;
  };

  (Lodestone.ChunkBuilder.prototype as any).processBlock = function (block: any, chunkFilter: any) {
    const blockName = block.state.getName();
    const nameStr = blockName.toString();
    const blockProps = (this as any).getBlockProps(block.state);
    if ((this as any).isFullyOccluded(block)) {
      return;
    }
    const chunkPos = [
      Math.floor(block.pos[0] / (this as any).chunkSize[0]),
      Math.floor(block.pos[1] / (this as any).chunkSize[1]),
      Math.floor(block.pos[2] / (this as any).chunkSize[2]),
    ];
    const chunkKey = (this as any).chunkKey(chunkPos);
    if (chunkFilter && !chunkFilter.has(chunkKey)) return;
    const chunk = (this as any).getChunk(chunkPos);
    try {
      const cull = {
        up: (this as any).needsCull(block, Lodestone.Direction.UP),
        down: (this as any).needsCull(block, Lodestone.Direction.DOWN),
        west: (this as any).needsCull(block, Lodestone.Direction.WEST),
        east: (this as any).needsCull(block, Lodestone.Direction.EAST),
        north: (this as any).needsCull(block, Lodestone.Direction.NORTH),
        south: (this as any).needsCull(block, Lodestone.Direction.SOUTH),
      };
      const mesh = new (Lodestone as any).Mesh();

      const isSpecialSign = nameStr.includes('sign');

      if (!isSpecialSign) {
        const blockDefinition = (this as any).resources.getBlockDefinition(blockName);
        if (blockDefinition) {
          try {
            mesh.merge(blockDefinition.getMesh(blockName, blockProps, (this as any).resources, (this as any).resources, cull));
          } catch {
            // Fallback
          }
        }
      }

      if ((Lodestone as any).SpecialRenderers?.getBlockMesh) {
        try {
          const specialMesh = (Lodestone as any).SpecialRenderers.getBlockMesh(block.state, block.nbt, (this as any).resources, cull, (this as any).structure, block.pos);
          if (specialMesh && !specialMesh.isEmpty()) {
            mesh.merge(specialMesh);
          }
        } catch {
          // Fallback
        }
      }

      if (!mesh.isEmpty()) {
        (this as any).finishChunkMesh(mesh, block.pos, blockName, blockProps, chunkKey);
        if ((this as any).resources.getBlockFlags(block.state.getName())?.semi_transparent) {
          chunk.transparentMesh.merge(mesh);
        } else {
          chunk.mesh.merge(mesh);
        }
      }
    } catch (e) {
      console.error(`Error rendering block ${nameStr}`, e);
    }
  };
}

// Dynamic Frustum Culling
(ThreeStructureRenderer.prototype as any).applyDrawDistance = function () {
  if ((this as any).chunkMeshes) {
    for (let i = 0; i < (this as any).chunkMeshes.length; i++) {
      const mesh = (this as any).chunkMeshes[i];
      mesh.visible = true;
      mesh.frustumCulled = true;
    }
  }
};

const tempMat1 = new THREE.Matrix4();
const tempMat2 = new THREE.Matrix4();
const tempCamPos: [number, number, number] = [0, 0, 0];

(ThreeStructureRenderer.prototype as any).prepareCamera = function (viewMatrixElements: any) {
  tempMat1.fromArray(viewMatrixElements);
  tempMat2.copy(tempMat1).invert();

  if ((this as any).camera) {
    (this as any).camera.position.setFromMatrixPosition(tempMat2);
    (this as any).camera.quaternion.setFromRotationMatrix(tempMat2);
    (this as any).camera.updateMatrixWorld(true);
  }

  tempCamPos[0] = tempMat2.elements[12];
  tempCamPos[1] = tempMat2.elements[13];
  tempCamPos[2] = tempMat2.elements[14];

  if ((this as any).drawDistance) {
    (this as any).applyDrawDistance(tempCamPos as any, (this as any).drawDistance);
  } else if ((this as any).chunkMeshes) {
    for (let i = 0; i < (this as any).chunkMeshes.length; i++) {
      (this as any).chunkMeshes[i].visible = true;
      (this as any).chunkMeshes[i].frustumCulled = true;
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
      fetch(packBaseUrl + `block-flags/non_self_culling.txt?cb=${cb}`).catch(() => null),
      fetch(packBaseUrl + `block-flags/emissive.json?cb=${cb}`).catch(() => null)
    ]);

    const woodTypes = ['acacia', 'bamboo', 'birch', 'cherry', 'crimson', 'dark_oak', 'jungle', 'mangrove', 'oak', 'pale_oak', 'poplar', 'spruce', 'warped'];
    woodTypes.forEach(w => {
      delete loaded.assets.blockstates[`${w}_sign`];
      delete loaded.assets.models[`${w}_sign`];
      delete loaded.assets.blockstates[`${w}_wall_sign`];
      delete loaded.assets.models[`${w}_wall_sign`];
      delete loaded.assets.blockstates[`${w}_hanging_sign`];
      delete loaded.assets.models[`${w}_hanging_sign`];
      delete loaded.assets.blockstates[`${w}_wall_hanging_sign`];
      delete loaded.assets.models[`${w}_wall_hanging_sign`];
    });

    const createChestBlockState = (modelName: string, leftModel: string, rightModel: string) => ({
      variants: {
        'type=left,facing=north': { model: leftModel, y: 0 },
        'type=left,facing=south': { model: leftModel, y: 180 },
        'type=left,facing=west': { model: leftModel, y: 270 },
        'type=left,facing=east': { model: leftModel, y: 90 },
        'type=right,facing=north': { model: rightModel, y: 0 },
        'type=right,facing=south': { model: rightModel, y: 180 },
        'type=right,facing=west': { model: rightModel, y: 270 },
        'type=right,facing=east': { model: rightModel, y: 90 },
        'type=single,facing=north': { model: modelName, y: 0 },
        'type=single,facing=south': { model: modelName, y: 180 },
        'type=single,facing=west': { model: modelName, y: 270 },
        'type=single,facing=east': { model: modelName, y: 90 },
        'facing=north': { model: modelName, y: 0 },
        'facing=south': { model: modelName, y: 180 },
        'facing=west': { model: modelName, y: 270 },
        'facing=east': { model: modelName, y: 90 }
      }
    });

    loaded.assets.blockstates['chest'] = createChestBlockState('block/chest', 'block/chest_left', 'block/chest_right');
    loaded.assets.blockstates['trapped_chest'] = createChestBlockState('block/chest', 'block/trapped_chest_left', 'block/trapped_chest_right');

    const createChestHalfModel = (isLeft: boolean, texPath: string) => {
      const bodyFrom: [number, number, number] = isLeft ? [1, 0, 1] : [0, 0, 1];
      const bodyTo: [number, number, number] = isLeft ? [16, 10, 15] : [15, 10, 15];

      const lidFrom: [number, number, number] = isLeft ? [1, 10, 1] : [0, 10, 1];
      const lidTo: [number, number, number] = isLeft ? [16, 14, 15] : [15, 14, 15];

      const latchFrom: [number, number, number] = isLeft ? [15, 7, 0] : [0, 7, 0];
      const latchTo: [number, number, number] = isLeft ? [16, 11, 2] : [1, 11, 2];

      const bodyFaces: any = {
        north: { uv: [10.75, 8.25, 14.5, 10.75], rotation: 180, texture: '#0' },
        south: { uv: [3.5, 8.25, 7.25, 10.75], rotation: 180, texture: '#0' },
        up: { uv: [11.0, 8.25, 7.25, 4.75], texture: '#0' },
        down: { uv: [7.25, 8.25, 3.5, 4.75], texture: '#0' }
      };

      const lidFaces: any = {
        north: { uv: [10.75, 3.75, 14.5, 4.75], rotation: 180, texture: '#0' },
        south: { uv: [3.5, 3.75, 7.25, 4.75], rotation: 180, texture: '#0' },
        up: { uv: [11.0, 3.5, 7.25, 0], texture: '#0' },
        down: { uv: [7.25, 3.5, 3.5, 0], texture: '#0' }
      };

      const latchFaces: any = {
        north: { uv: [0.25, 0.25, 0.5, 1.25], rotation: 180, texture: '#0' },
        south: { uv: [0.75, 0.25, 1.0, 1.25], rotation: 180, texture: '#0' },
        up: { uv: [0.5, 0, 0.75, 0.25], texture: '#0' },
        down: { uv: [0.25, 0, 0.5, 0.25], texture: '#0' }
      };

      if (isLeft) {
        bodyFaces.west = { uv: [7.25, 8.25, 10.75, 10.75], rotation: 180, texture: '#0' };
        lidFaces.west = { uv: [7.25, 3.75, 10.75, 4.75], rotation: 180, texture: '#0' };
        latchFaces.west = { uv: [0.5, 0.25, 0.75, 1.25], rotation: 180, texture: '#0' };
      } else {
        bodyFaces.east = { uv: [3.5, 8.25, 0, 10.75], rotation: 180, texture: '#0' };
        lidFaces.east = { uv: [3.5, 3.75, 0, 4.75], rotation: 180, texture: '#0' };
        latchFaces.east = { uv: [0.25, 0.25, 0, 1.25], rotation: 180, texture: '#0' };
      }

      return {
        textures: { '0': texPath },
        elements: [
          { from: bodyFrom, to: bodyTo, faces: bodyFaces },
          { from: lidFrom, to: lidTo, faces: lidFaces },
          { from: latchFrom, to: latchTo, faces: latchFaces }
        ]
      };
    };

    loaded.assets.models['block/chest_left'] = createChestHalfModel(true, 'entity/chest/normal_left');
    loaded.assets.models['block/chest_right'] = createChestHalfModel(false, 'entity/chest/normal_right');
    loaded.assets.models['block/trapped_chest_left'] = createChestHalfModel(true, 'entity/chest/trapped_left');
    loaded.assets.models['block/trapped_chest_right'] = createChestHalfModel(false, 'entity/chest/trapped_right');

    loaded.assets.models['block/copper_torch'] = {
      parent: 'minecraft:block/template_torch',
      textures: { torch: 'minecraft:block/copper_torch' }
    };
    loaded.assets.models['block/copper_wall_torch'] = {
      parent: 'minecraft:block/template_torch_wall',
      textures: { torch: 'minecraft:block/copper_torch' }
    };

    const copperTorchVariants = [
      'copper_torch', 'exposed_copper_torch', 'weathered_copper_torch', 'oxidized_copper_torch',
      'waxed_copper_torch', 'waxed_exposed_copper_torch', 'waxed_weathered_copper_torch', 'waxed_oxidized_copper_torch'
    ];

    const groundTorchBS = {
      variants: { '': { model: 'minecraft:block/copper_torch' } }
    };

    const wallTorchBS = {
      variants: {
        'facing=east': { model: 'minecraft:block/copper_wall_torch' },
        'facing=north': { model: 'minecraft:block/copper_wall_torch', y: 270 },
        'facing=south': { model: 'minecraft:block/copper_wall_torch', y: 90 },
        'facing=west': { model: 'minecraft:block/copper_wall_torch', y: 180 }
      }
    };

    copperTorchVariants.forEach(variant => {
      loaded.assets.blockstates[variant] = groundTorchBS;
      loaded.assets.blockstates[variant.replace('_torch', '_wall_torch')] = wallTorchBS;
    });

    const createChestSingleModel = (texPath: string) => ({
      textures: { '0': texPath },
      elements: [
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
            up: { uv: [0.25, 0, 0.75, 0.25], texture: '#0' },
            down: { uv: [0.75, 0, 1.25, 0.25], texture: '#0' }
          }
        }
      ]
    });

    const chestBases = [
      { name: 'copper_chest', tex: 'entity/chest/copper' },
      { name: 'exposed_copper_chest', tex: 'entity/chest/copper_exposed' },
      { name: 'weathered_copper_chest', tex: 'entity/chest/copper_weathered' },
      { name: 'oxidized_copper_chest', tex: 'entity/chest/copper_oxidized' }
    ];

    chestBases.forEach(base => {
      const singleModelKey = `block/${base.name}`;
      const leftModelKey = `block/${base.name}_left`;
      const rightModelKey = `block/${base.name}_right`;

      loaded.assets.models[singleModelKey] = createChestSingleModel(base.tex);
      loaded.assets.models[leftModelKey] = createChestHalfModel(true, `${base.tex}_left`);
      loaded.assets.models[rightModelKey] = createChestHalfModel(false, `${base.tex}_right`);

      const blockstate = createChestBlockState(singleModelKey, leftModelKey, rightModelKey);
      loaded.assets.blockstates[base.name] = blockstate;
      loaded.assets.blockstates[`waxed_${base.name}`] = blockstate;
    });

    const createItemFrameBlockState = (modelName: string) => ({
      variants: {
        'facing=south': { model: modelName },
        'facing=north': { model: modelName, y: 180 },
        'facing=east': { model: modelName, y: 90 },
        'facing=west': { model: modelName, y: 270 },
        'facing=up': { model: modelName, x: 270 },
        'facing=down': { model: modelName, x: 90 },
        'facing=south,fixed=false': { model: modelName },
        'facing=north,fixed=false': { model: modelName, y: 180 },
        'facing=east,fixed=false': { model: modelName, y: 90 },
        'facing=west,fixed=false': { model: modelName, y: 270 },
        'facing=up,fixed=false': { model: modelName, x: 270 },
        'facing=down,fixed=false': { model: modelName, x: 90 },
        'facing=south,fixed=true': { model: modelName },
        'facing=north,fixed=true': { model: modelName, y: 180 },
        'facing=east,fixed=true': { model: modelName, y: 90 },
        'facing=west,fixed=true': { model: modelName, y: 270 },
        'facing=up,fixed=true': { model: modelName, x: 270 },
        'facing=down,fixed=true': { model: modelName, x: 90 },
        'facing=south,map=false': { model: modelName },
        'facing=north,map=false': { model: modelName, y: 180 },
        'facing=east,map=false': { model: modelName, y: 90 },
        'facing=west,map=false': { model: modelName, y: 270 },
        'facing=up,map=false': { model: modelName, x: 270 },
        'facing=down,map=false': { model: modelName, x: 90 },
        'facing=south,map=true': { model: modelName },
        'facing=north,map=true': { model: modelName, y: 180 },
        'facing=east,map=true': { model: modelName, y: 90 },
        'facing=west,map=true': { model: modelName, y: 270 },
        'facing=up,map=true': { model: modelName, x: 270 },
        'facing=down,map=true': { model: modelName, x: 90 },
        '': { model: modelName }
      }
    });

    loaded.assets.blockstates['item_frame'] = createItemFrameBlockState('block/item_frame');
    loaded.assets.blockstates['glow_item_frame'] = createItemFrameBlockState('block/glow_item_frame');

    const createItemFrameModel = () => ({
      textures: {
        wood: 'block/birch_planks'
      },
      elements: [
        {
          from: [3, 3, 0],
          to: [13, 13, 0.5],
          faces: {
            north: { uv: [3, 3, 13, 13], texture: '#wood' },
            south: { uv: [3, 3, 13, 13], texture: '#wood' }
          }
        },
        {
          from: [2, 2, 0],
          to: [14, 3, 1],
          faces: {
            north: { uv: [2, 13, 14, 14], texture: '#wood' },
            south: { uv: [2, 13, 14, 14], texture: '#wood' },
            up: { uv: [2, 15, 14, 16], texture: '#wood' },
            down: { uv: [2, 0, 14, 1], texture: '#wood' },
            east: { uv: [0, 13, 1, 14], texture: '#wood' },
            west: { uv: [15, 13, 16, 14], texture: '#wood' }
          }
        },
        {
          from: [2, 13, 0],
          to: [14, 14, 1],
          faces: {
            north: { uv: [2, 2, 14, 3], texture: '#wood' },
            south: { uv: [2, 2, 14, 3], texture: '#wood' },
            up: { uv: [2, 0, 14, 1], texture: '#wood' },
            down: { uv: [2, 15, 14, 16], texture: '#wood' },
            east: { uv: [0, 2, 1, 3], texture: '#wood' },
            west: { uv: [15, 2, 16, 3], texture: '#wood' }
          }
        },
        {
          from: [2, 3, 0],
          to: [3, 13, 1],
          faces: {
            north: { uv: [13, 3, 14, 13], texture: '#wood' },
            south: { uv: [2, 3, 3, 13], texture: '#wood' },
            east: { uv: [0, 3, 1, 13], texture: '#wood' },
            west: { uv: [15, 3, 16, 13], texture: '#wood' }
          }
        },
        {
          from: [13, 3, 0],
          to: [14, 13, 1],
          faces: {
            north: { uv: [2, 3, 3, 13], texture: '#wood' },
            south: { uv: [13, 3, 14, 13], texture: '#wood' },
            east: { uv: [0, 3, 1, 13], texture: '#wood' },
            west: { uv: [15, 3, 16, 13], texture: '#wood' }
          }
        }
      ]
    });

    loaded.assets.models['block/item_frame'] = createItemFrameModel();
    loaded.assets.models['block/glow_item_frame'] = createItemFrameModel();

    const opaqueText = opaqueRes && opaqueRes.ok ? await opaqueRes.text() : '';
    const transparentText = transparentRes && transparentRes.ok ? await transparentRes.text() : '';
    const nonSelfCullingText = nonSelfCullingRes && nonSelfCullingRes.ok ? await nonSelfCullingRes.text() : '';
    const emissiveJson = emissiveRes && emissiveRes.ok ? await emissiveRes.json() : {};

    const parsedOpaque = parseBlockList(opaqueText);
    const parsedTransparent = parseBlockList(transparentText);

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

    if (currentResources && currentResources.textures) {
      const texMap = currentResources.textures;
      Object.keys(texMap).forEach(key => {
        if (!key.startsWith('minecraft:')) {
          texMap['minecraft:' + key] = texMap[key];
        } else {
          texMap[key.replace('minecraft:', '')] = texMap[key];
        }
      });
      woodTypes.forEach(w => {
        if (texMap[`entity/signs/${w}`]) {
          texMap[`minecraft:entity/signs/${w}`] = texMap[`entity/signs/${w}`];
        }
        if (texMap[`entity/signs/hanging/${w}`]) {
          texMap[`minecraft:entity/signs/hanging/${w}`] = texMap[`entity/signs/hanging/${w}`];
        }
      });
    }

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
let renderRequested = false;

function renderFrame() {
  renderRequested = false;
  if (controls) {
    controls.update();
  }
  if (renderer && activeCamera) {
    activeCamera.updateMatrixWorld(true);
    mat4.copy(cachedViewMatrix, activeCamera.matrixWorldInverse.elements as any);
    renderer.drawStructure(cachedViewMatrix);
  }
  if (controls && controls.enableDamping) {
    if ((controls as any).state !== -1 || renderRequested) {
      requestRender();
    }
  }
}

function requestRender() {
  if (!renderRequested) {
    renderRequested = true;
    animFrameId = requestAnimationFrame(renderFrame);
  }
}

window.startRenderLoop = function () {
  requestRender();
};

window.stopRenderLoop = function () {
  if (animFrameId !== null) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
  renderRequested = false;
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

  if (container) {
    container.innerHTML = '';
  }
};

// Worker-based fast Litematic loading
window.loadLitematic = async function () {
  try {
    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('DECODING_0%');
    }

    const response = await fetch('./model.litematic');
    currentLitematicBuffer = await response.arrayBuffer();

    // Send array buffer to Worker for zero-copy streaming NBT parse
    const parseRes = await sendWorkerMessage(
      'PARSE_LITEMATIC',
      { buffer: currentLitematicBuffer.slice(0) },
      [currentLitematicBuffer.slice(0)]
    );

    const regionsList: any[] = parseRes.regions || [];
    const regionNames = regionsList.map(r => r.name);

    if (regionNames.length === 0) {
      regionNames.push('Region1');
    }

    activeRegionName = regionNames[0];

    if (window.AndroidHost) {
      window.AndroidHost.onRegionsParsed(JSON.stringify(regionNames));
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
  if (!currentResources) return;

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

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('DECODING_10%');
  }

  // Request region block states from Worker
  const paletteRes = await sendWorkerMessage('GET_REGION_PALETTE', { regionName });
  const rawPalette: any[] = paletteRes.palette || [];
  const regionSize: [number, number, number] = paletteRes.size || [1, 1, 1];

  const palette = rawPalette.map(p => new BlockState(p.name, p.properties));

  tightCenter = [regionSize[0] / 2, regionSize[1] / 2, regionSize[2] / 2];
  tightRadius = Math.max(1.0, Math.max(regionSize[0], regionSize[1], regionSize[2]) / 2);

  const volume = regionSize[0] * regionSize[1] * regionSize[2];
  const maxDim = Math.max(regionSize[0], regionSize[1], regionSize[2]);
  const chunkSize = volume > 1000000 || maxDim > 128 ? 32 : 16;

  // Request chunk list from Worker
  const chunkListRes = await sendWorkerMessage('GET_CHUNK_LIST', { regionName, chunkSize });
  const chunkList: Array<[number, number, number]> = chunkListRes.chunks || [];
  const totalChunks = chunkList.length;

  const storedBlocks: Array<{ pos: [number, number, number]; state: number }> = [];

  // Decode chunks progressively from Worker
  for (let i = 0; i < totalChunks; i++) {
    const [cx, cy, cz] = chunkList[i];
    const chunkRes = await sendWorkerMessage('DECODE_CHUNK', {
      regionName,
      cx,
      cy,
      cz,
      chunkSize
    });

    const flatBlocks = new Uint32Array(chunkRes.blocks);
    const numPlaced = flatBlocks.length / 4;

    for (let k = 0; k < numPlaced; k++) {
      storedBlocks.push({
        pos: [flatBlocks[k * 4], flatBlocks[k * 4 + 1], flatBlocks[k * 4 + 2]],
        state: flatBlocks[k * 4 + 3]
      });
    }

    if (window.AndroidHost && (i % 10 === 0 || i === totalChunks - 1)) {
      const pct = Math.floor(((i + 1) / totalChunks) * 80) + 10;
      window.AndroidHost.onLoadingProgress(`DECODING_${pct}%`);
    }
  }

  currentStructure = new Structure(regionSize, palette, storedBlocks);

  const rendererOptions: any = {
    asyncBuild: true,
    asyncChunkBuildTimeMs: 12,
    chunkSize: [chunkSize, chunkSize, chunkSize]
  };

  renderer = new ThreeStructureRenderer(canvasElement, currentStructure, currentResources, rendererOptions);
  (renderer as any).drawDistance = 100000;

  if ((renderer as any).atlasTexture) {
    const texture = (renderer as any).atlasTexture;
    texture.minFilter = THREE.NearestMipmapLinearFilter;
    texture.magFilter = THREE.NearestFilter;
    if (renderer.renderer) {
      texture.anisotropy = renderer.renderer.capabilities.getMaxAnisotropy();
    }
    texture.needsUpdate = true;
  }

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
  controls.addEventListener('change', requestRender);

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
    requestRender();
  });

  // Calculate and send statistics to Android host asynchronously with frame time-slicing
  calculateAndSendStatistics();

  // Asynchronously build all chunk meshes using Lodestone's native async chunk builder
  await renderer.whenReady();
  requestRender();
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
  controls.addEventListener('change', requestRender);
  controls.update();
  requestRender();
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
        sun.intensity = 0.08;
        sun.ambientIntensity = 0.12;
        if (sun.emissive) sun.emissive.intensity = 0.25;
        sun.direction = [-0.2, -0.9, -0.3];
        if (sun.light) sun.light.intensity = 0.08;
        if (sun.ambient) sun.ambient.intensity = 0.12;
      } else {
        sun.intensity = 0.50;
        sun.ambientIntensity = 0.65;
        if (sun.emissive) sun.emissive.intensity = 0.10;
        sun.direction = [0.6, 1.0, 0.8];
        if (sun.light) sun.light.intensity = 0.50;
        if (sun.ambient) sun.ambient.intensity = 0.65;
      }
    }
    if ((renderer as any).opaqueMaterial) (renderer as any).applySunlightUniforms((renderer as any).opaqueMaterial);
    if ((renderer as any).transparentMaterial) (renderer as any).applySunlightUniforms((renderer as any).transparentMaterial);
  }
  requestRender();
  return isNightMode;
};

window.resetCamera = function () {
  if (!currentStructure || !controls || !activeCamera) return;

  const offset = new THREE.Vector3().subVectors(activeCamera.position, controls.target);
  controls.target.set(tightCenter[0], tightCenter[1], tightCenter[2]);
  activeCamera.position.addVectors(controls.target, offset);
  controls.update();
  requestRender();
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
