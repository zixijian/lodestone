import { decompressSync, gunzipSync } from 'fflate';
import { NbtCursor, TAG_BYTE, TAG_COMPOUND, TAG_END, TAG_INT, TAG_LIST, TAG_LONG_ARRAY, TAG_SHORT, TAG_STRING } from './nbtStream';

export interface BlockStateData {
  name: string;
  properties: Record<string, string>;
}

export interface RegionMeta {
  name: string;
  size: [number, number, number];
  position?: [number, number, number];
  palette: BlockStateData[];
  longArray: BigUint64Array | null;
  numLongs: number;
  chunkGrids?: Map<string, Uint16Array>; // Sparse chunk-level sub-grids (32x32x32 max)
}

let currentRegions: Map<string, RegionMeta> = new Map();

function parseLitematicBuffer(buffer: ArrayBuffer) {
  let uint8 = new Uint8Array(buffer);
  if (uint8[0] === 0x1f && uint8[1] === 0x8b) {
    try {
      uint8 = gunzipSync(uint8);
    } catch {
      uint8 = decompressSync(uint8);
    }
  }

  currentRegions.clear();

  const cursor = new NbtCursor(uint8);
  const rootType = cursor.readByte();
  if (rootType !== TAG_COMPOUND) {
    throw new Error('Invalid NBT root tag');
  }
  cursor.readString();

  while (cursor.offset < uint8.byteLength) {
    const t = cursor.readByte();
    if (t === TAG_END) break;
    const key = cursor.readString();

    if (key === 'Regions' && t === TAG_COMPOUND) {
      while (cursor.offset < uint8.byteLength) {
        const regTag = cursor.readByte();
        if (regTag === TAG_END) break;
        const regionName = cursor.readString();
        const regMeta = parseRegionStream(cursor, regionName);
        currentRegions.set(regionName, regMeta);
      }
    } else {
      cursor.skipTag(t);
    }
  }

  return Array.from(currentRegions.keys());
}

function parseRegionStream(cursor: NbtCursor, regionName: string): RegionMeta {
  let size: [number, number, number] = [0, 0, 0];
  let position: [number, number, number] = [0, 0, 0];
  let palette: BlockStateData[] = [];
  let longArray: BigUint64Array | null = null;
  let numLongs = 0;

  while (cursor.offset < cursor.buffer.byteLength) {
    const t = cursor.readByte();
    if (t === TAG_END) break;
    const key = cursor.readString();

    if (key === 'Size' && t === TAG_COMPOUND) {
      size = parseVector3(cursor);
    } else if (key === 'Position' && t === TAG_COMPOUND) {
      position = parseVector3(cursor);
    } else if (key === 'BlockStatePalette' && t === TAG_LIST) {
      palette = parsePaletteList(cursor);
    } else if (key === 'BlockStates' && t === TAG_LONG_ARRAY) {
      numLongs = cursor.readInt();
      longArray = new BigUint64Array(numLongs);
      for (let i = 0; i < numLongs; i++) {
        longArray[i] = cursor.readLongBigInt();
      }
    } else {
      cursor.skipTag(t);
    }
  }

  return {
    name: regionName,
    size: [Math.abs(size[0]), Math.abs(size[1]), Math.abs(size[2])],
    position,
    palette,
    longArray,
    numLongs
  };
}

function parseVector3(cursor: NbtCursor): [number, number, number] {
  let x = 0, y = 0, z = 0;
  while (cursor.offset < cursor.buffer.byteLength) {
    const t = cursor.readByte();
    if (t === TAG_END) break;
    const key = cursor.readString();
    let val = 0;
    if (t === TAG_INT) val = cursor.readInt();
    else if (t === TAG_SHORT) val = cursor.readShort();
    else if (t === TAG_BYTE) val = cursor.readByte();
    else cursor.skipTag(t);

    if (key === 'x' || key === 'X') x = val;
    else if (key === 'y' || key === 'Y') y = val;
    else if (key === 'z' || key === 'Z') z = val;
  }
  return [x, y, z];
}

function parsePaletteList(cursor: NbtCursor): BlockStateData[] {
  const elemType = cursor.readByte();
  const len = cursor.readInt();
  const palette: BlockStateData[] = [];

  if (elemType !== TAG_COMPOUND) {
    for (let i = 0; i < len; i++) cursor.skipTag(elemType);
    return palette;
  }

  for (let i = 0; i < len; i++) {
    let name = 'minecraft:air';
    const properties: Record<string, string> = {};

    while (cursor.offset < cursor.buffer.byteLength) {
      const t = cursor.readByte();
      if (t === TAG_END) break;
      const key = cursor.readString();

      if (key === 'Name' && t === TAG_STRING) {
        name = cursor.readString();
      } else if (key === 'Properties' && t === TAG_COMPOUND) {
        while (cursor.offset < cursor.buffer.byteLength) {
          const pt = cursor.readByte();
          if (pt === TAG_END) break;
          const pKey = cursor.readString();
          if (pt === TAG_STRING) {
            properties[pKey] = cursor.readString();
          } else if (pt === TAG_INT) {
            properties[pKey] = String(cursor.readInt());
          } else if (pt === TAG_BYTE) {
            properties[pKey] = String(cursor.readByte());
          } else if (pt === TAG_SHORT) {
            properties[pKey] = String(cursor.readShort());
          } else {
            cursor.skipTag(pt);
          }
        }
      } else {
        cursor.skipTag(t);
      }
    }
    palette.push({ name, properties });
  }

  return palette;
}

// Sparse chunk sub-grid decoder (32x32x32 max chunk size)
function getChunkGrid(meta: RegionMeta, cx: number, cy: number, cz: number, chunkSize: number): Uint16Array {
  if (!meta.chunkGrids) {
    meta.chunkGrids = new Map();
  }
  const chunkKey = `${cx},${cy},${cz}`;
  if (meta.chunkGrids.has(chunkKey)) {
    return meta.chunkGrids.get(chunkKey)!;
  }

  const chunkVol = chunkSize * chunkSize * chunkSize;
  const grid = new Uint16Array(chunkVol);
  grid.fill(0xffff); // 0xffff = air

  const width = meta.size[0];
  const height = meta.size[1];
  const depth = meta.size[2];
  const volume = width * height * depth;

  const palette = meta.palette;
  const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(Math.max(2, palette.length))));
  const maskBig = (1n << BigInt(bitsPerBlock)) - 1n;

  const longArray = meta.longArray;
  const numLongs = meta.numLongs;

  const blocksPerLong = Math.floor(64 / bitsPerBlock);
  const paddedExpectedLongs = Math.ceil(volume / blocksPerLong);
  const isPadded = numLongs === paddedExpectedLongs || (numLongs > volume / (64 / bitsPerBlock) + 0.1 && numLongs !== Math.ceil((volume * bitsPerBlock) / 64));

  const isAir = palette.map(p => p.name === 'minecraft:air');

  const startX = cx * chunkSize;
  const endX = Math.min(startX + chunkSize, width);
  const startY = cy * chunkSize;
  const endY = Math.min(startY + chunkSize, height);
  const startZ = cz * chunkSize;
  const endZ = Math.min(startZ + chunkSize, depth);

  if (longArray && numLongs > 0) {
    for (let y = startY; y < endY; y++) {
      const localY = y - startY;
      for (let z = startZ; z < endZ; z++) {
        const localZ = z - startZ;
        for (let x = startX; x < endX; x++) {
          const localX = x - startX;
          const index = y * (width * depth) + z * width + x;
          let paletteIndex = 0;

          if (isPadded) {
            const longIndex = Math.floor(index / blocksPerLong);
            if (longIndex < numLongs) {
              const startBit = BigInt((index % blocksPerLong) * bitsPerBlock);
              paletteIndex = Number((longArray[longIndex] >> startBit) & maskBig);
            }
          } else {
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
            const localIdx = localX * (chunkSize * chunkSize) + localY * chunkSize + localZ;
            grid[localIdx] = paletteIndex;
          }
        }
      }
    }
  }

  meta.chunkGrids.set(chunkKey, grid);
  return grid;
}

// Decode blocks for a specific Chunk (cx, cy, cz)
function decodeChunkBlocks(regionName: string, cx: number, cy: number, cz: number, chunkSize: number) {
  const meta = currentRegions.get(regionName);
  if (!meta) throw new Error(`Region ${regionName} not found`);

  const grid = getChunkGrid(meta, cx, cy, cz, chunkSize);
  const width = meta.size[0];
  const height = meta.size[1];
  const depth = meta.size[2];

  const startX = cx * chunkSize;
  const endX = Math.min(startX + chunkSize, width);
  const startY = cy * chunkSize;
  const endY = Math.min(startY + chunkSize, height);
  const startZ = cz * chunkSize;
  const endZ = Math.min(startZ + chunkSize, depth);

  const tempBlocks: number[] = [];

  for (let x = startX; x < endX; x++) {
    const localX = x - startX;
    for (let y = startY; y < endY; y++) {
      const localY = y - startY;
      for (let z = startZ; z < endZ; z++) {
        const localZ = z - startZ;
        const localIdx = localX * (chunkSize * chunkSize) + localY * chunkSize + localZ;
        const stateIdx = grid[localIdx];
        if (stateIdx !== 0xffff) {
          tempBlocks.push(x, y, z, stateIdx);
        }
      }
    }
  }

  return new Uint32Array(tempBlocks);
}

// Get non-empty Chunk coordinates list
function getNonEmptyChunkList(regionName: string, chunkSize: number) {
  const meta = currentRegions.get(regionName);
  if (!meta) throw new Error(`Region ${regionName} not found`);

  const width = meta.size[0];
  const height = meta.size[1];
  const depth = meta.size[2];

  const numChunksX = Math.ceil(width / chunkSize);
  const numChunksY = Math.ceil(height / chunkSize);
  const numChunksZ = Math.ceil(depth / chunkSize);

  const chunkList: Array<[number, number, number]> = [];

  for (let cx = 0; cx < numChunksX; cx++) {
    for (let cy = 0; cy < numChunksY; cy++) {
      for (let cz = 0; cz < numChunksZ; cz++) {
        const grid = getChunkGrid(meta, cx, cy, cz, chunkSize);
        let hasBlock = false;
        for (let i = 0; i < grid.length; i++) {
          if (grid[i] !== 0xffff) {
            hasBlock = true;
            break;
          }
        }

        if (hasBlock) {
          chunkList.push([cx, cy, cz]);
        }
      }
    }
  }

  return chunkList;
}

self.onmessage = async (e: MessageEvent) => {
  const { type, payload, id } = e.data;

  try {
    if (type === 'PARSE_LITEMATIC') {
      const regionNames = parseLitematicBuffer(payload.buffer);
      const regionsListMeta = regionNames.map(name => {
        const meta = currentRegions.get(name)!;
        return {
          name: meta.name,
          size: meta.size,
          position: meta.position,
          paletteCount: meta.palette.length,
          palette: meta.palette
        };
      });

      self.postMessage({
        id,
        type: 'PARSE_LITEMATIC_SUCCESS',
        regions: regionsListMeta
      });
    } else if (type === 'GET_REGION_PALETTE') {
      const meta = currentRegions.get(payload.regionName);
      if (!meta) throw new Error(`Region ${payload.regionName} not found`);
      self.postMessage({
        id,
        type: 'GET_REGION_PALETTE_SUCCESS',
        palette: meta.palette,
        size: meta.size
      });
    } else if (type === 'GET_CHUNK_LIST') {
      const list = getNonEmptyChunkList(payload.regionName, payload.chunkSize);
      self.postMessage({
        id,
        type: 'GET_CHUNK_LIST_SUCCESS',
        chunks: list
      });
    } else if (type === 'DECODE_CHUNK') {
      const blocksArray = decodeChunkBlocks(
        payload.regionName,
        payload.cx,
        payload.cy,
        payload.cz,
        payload.chunkSize
      );
      self.postMessage(
        {
          id,
          type: 'DECODE_CHUNK_SUCCESS',
          regionName: payload.regionName,
          cx: payload.cx,
          cy: payload.cy,
          cz: payload.cz,
          blocks: blocksArray
        },
        [blocksArray.buffer]
      );
    }
  } catch (err: any) {
    self.postMessage({
      id,
      type: 'ERROR',
      error: err?.message || String(err)
    });
  }
};
