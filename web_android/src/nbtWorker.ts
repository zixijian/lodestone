import { decompressSync, gunzipSync } from 'fflate';
import { NbtCursor, TAG_COMPOUND, TAG_END, TAG_LIST, TAG_LONG_ARRAY, TAG_STRING, TAG_INT, TAG_SHORT, TAG_BYTE } from './nbtStream';

export interface BlockStateData {
  name: string;
  properties: Record<string, string>;
}

export interface RegionMeta {
  name: string;
  size: [number, number, number];
  position?: [number, number, number];
  palette: BlockStateData[];
  blockStatesOffset: number;
  blockStatesLength: number;
  numLongs: number;
  entities: any[];
}

let currentRegions: Map<string, RegionMeta> = new Map();
let currentRegionStates: Map<string, BigUint64Array> = new Map();

// Parse Gzip or raw NBT buffer
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
  currentRegionStates.clear();

  const cursor = new NbtCursor(uint8);
  const rootTag = cursor.readByte();
  if (rootTag !== TAG_COMPOUND) {
    throw new Error('Invalid litematic file: Root tag must be TAG_Compound');
  }
  cursor.readString(); // Root name

  while (cursor.offset < uint8.byteLength) {
    const t = cursor.readByte();
    if (t === TAG_END) break;
    const key = cursor.readString();

    if (key === 'Regions' && t === TAG_COMPOUND) {
      while (cursor.offset < uint8.byteLength) {
        const regTag = cursor.readByte();
        if (regTag === TAG_END) break;
        const regionName = cursor.readString();
        const regMeta = parseRegionCompound(cursor, regionName);
        currentRegions.set(regionName, regMeta);
      }
    } else {
      cursor.skipTag(t);
    }
  }

  return Array.from(currentRegions.keys());
}

function parseRegionCompound(cursor: NbtCursor, regionName: string): RegionMeta {
  let size: [number, number, number] = [0, 0, 0];
  let position: [number, number, number] = [0, 0, 0];
  let palette: BlockStateData[] = [];
  let blockStatesOffset = 0;
  let blockStatesLength = 0;
  let numLongs = 0;
  let entities: any[] = [];

  while (cursor.offset < cursor.buffer.byteLength) {
    const t = cursor.readByte();
    if (t === TAG_END) break;
    const key = cursor.readString();

    if (key === 'Size' && t === TAG_COMPOUND) {
      size = parseVector3(cursor);
    } else if (key === 'Position' && t === TAG_COMPOUND) {
      position = parseVector3(cursor);
    } else if (key === 'BlockStatePalette' && t === TAG_LIST) {
      palette = parseBlockStatePalette(cursor);
    } else if (key === 'BlockStates' && t === TAG_LONG_ARRAY) {
      numLongs = cursor.readInt();
      blockStatesOffset = cursor.offset;
      blockStatesLength = numLongs * 8;

      const longArray = new BigUint64Array(numLongs);
      for (let i = 0; i < numLongs; i++) {
        longArray[i] = cursor.readLongBigInt();
      }
      currentRegionStates.set(regionName, longArray);
    } else if ((key === 'Entities' || key === 'PendingBlockEntities' || key === 'TileEntities' || key === 'BlockEntities') && t === TAG_LIST) {
      const parsedEnts = parseEntitiesList(cursor);
      entities.push(...parsedEnts);
    } else {
      cursor.skipTag(t);
    }
  }

  return {
    name: regionName,
    size: [Math.abs(size[0]), Math.abs(size[1]), Math.abs(size[2])],
    position,
    palette,
    blockStatesOffset,
    blockStatesLength,
    numLongs,
    entities
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

function parseBlockStatePalette(cursor: NbtCursor): BlockStateData[] {
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
          } else {
            properties[pKey] = String(cursor.readString());
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

function parseEntitiesList(cursor: NbtCursor): any[] {
  const elemType = cursor.readByte();
  const len = cursor.readInt();
  const ents: any[] = [];

  if (elemType !== TAG_COMPOUND) {
    for (let i = 0; i < len; i++) cursor.skipTag(elemType);
    return ents;
  }

  for (let i = 0; i < len; i++) {
    let ent: any = {};
    while (cursor.offset < cursor.buffer.byteLength) {
      const t = cursor.readByte();
      if (t === TAG_END) break;
      const key = cursor.readString();
      if (t === TAG_STRING) ent[key] = cursor.readString();
      else if (t === TAG_INT) ent[key] = cursor.readInt();
      else if (t === TAG_SHORT) ent[key] = cursor.readShort();
      else if (t === TAG_BYTE) ent[key] = cursor.readByte();
      else cursor.skipTag(t);
    }
    ents.push(ent);
  }

  return ents;
}

// Decode blocks for a specific Region into a compact flat Uint32Array [x, y, z, stateIndex]
function decodeRegionBlocks(regionName: string) {
  const meta = currentRegions.get(regionName);
  const longArray = currentRegionStates.get(regionName);
  if (!meta) throw new Error(`Region ${regionName} not found`);

  const palette = meta.palette;
  const isAir = palette.map(p => p.name === 'minecraft:air');
  const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(Math.max(2, palette.length))));
  const maskBig = (1n << BigInt(bitsPerBlock)) - 1n;

  const width = meta.size[0];
  const height = meta.size[1];
  const depth = meta.size[2];
  const volume = width * height * depth;
  const numLongs = meta.numLongs;

  const tempBlocks: number[] = [];

  if (longArray && numLongs > 0) {
    for (let index = 0; index < volume; index++) {
      const startBit = BigInt(index * bitsPerBlock);
      const startLong = Number(startBit >> 6n);
      const startBitOffset = startBit & 63n;
      const endBit = BigInt((index + 1) * bitsPerBlock - 1);
      const endLong = Number(endBit >> 6n);

      let paletteIndex = 0;
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

      if (paletteIndex >= 0 && paletteIndex < palette.length && !isAir[paletteIndex]) {
        const x = index % width;
        const y = Math.floor(index / (width * depth));
        const z = Math.floor(index / width) % depth;
        tempBlocks.push(x, y, z, paletteIndex);
      }
    }
  }

  const result = new Uint32Array(tempBlocks);
  return result;
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
          palette: meta.palette,
          entities: meta.entities
        };
      });

      self.postMessage({
        id,
        type: 'PARSE_LITEMATIC_SUCCESS',
        regions: regionsListMeta
      });
    } else if (type === 'DECODE_REGION') {
      const blocksArray = decodeRegionBlocks(payload.regionName);
      self.postMessage(
        {
          id,
          type: 'DECODE_REGION_SUCCESS',
          regionName: payload.regionName,
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
