import { decompressSync, gunzipSync } from 'fflate';
import { NbtFile } from '@mattzh72/lodestone';

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
  entities: any[];
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

  const nbt = NbtFile.read(uint8);
  const root = nbt.root;
  const regionsTag = root.getCompound('Regions');

  if (!regionsTag) {
    throw new Error('Invalid litematic: Regions tag not found');
  }

  let keys: string[] = [];
  if (typeof (regionsTag as any).keys === 'function') {
    keys = Array.from((regionsTag as any).keys());
  } else {
    keys = Object.keys(regionsTag);
  }

  keys = keys.filter(
    k => typeof k === 'string' && k !== 'properties' && k !== 'constructor' && k !== '__proto__'
  );

  for (const regName of keys) {
    const regionTag = regionsTag.getCompound(regName);
    if (!regionTag) continue;

    const sizeNbt = regionTag.getCompound('Size');
    const rawSize = [
      sizeNbt?.getNumber('x') ?? 0,
      sizeNbt?.getNumber('y') ?? 0,
      sizeNbt?.getNumber('z') ?? 0,
    ];
    const size: [number, number, number] = [
      Math.abs(rawSize[0]),
      Math.abs(rawSize[1]),
      Math.abs(rawSize[2]),
    ];

    const posNbt = regionTag.getCompound('Position');
    const position: [number, number, number] = [
      posNbt?.getNumber('x') ?? 0,
      posNbt?.getNumber('y') ?? 0,
      posNbt?.getNumber('z') ?? 0,
    ];

    // Palette parsing
    const paletteList = regionTag.getList('BlockStatePalette');
    const palette: BlockStateData[] = [];
    if (paletteList) {
      paletteList.forEach((entry: any) => {
        if (!entry.isCompound()) return;
        const name = entry.getString('Name') ?? 'minecraft:air';
        const properties: Record<string, string> = {};
        if (entry.has('Properties')) {
          const propsTag = entry.get('Properties');
          if (propsTag && propsTag.isCompound()) {
            propsTag.forEach((pKey: string, pVal: any) => {
              if (!pKey) return;
              if (pVal && pVal.value !== undefined) {
                if (typeof pVal.value === 'object' && Array.isArray(pVal.value)) {
                  properties[pKey] = String(pVal.value[1] ?? pVal.value[0]);
                } else {
                  properties[pKey] = String(pVal.value);
                }
              } else if (pVal && typeof pVal.getAsString === 'function') {
                properties[pKey] = pVal.getAsString();
              } else if (pVal !== undefined && pVal !== null) {
                properties[pKey] = String(pVal);
              }
            });
          }
        }
        palette.push({ name, properties });
      });
    }

    // BlockStates parsing
    const blockStatesNbt = regionTag.has('BlockStates')
      ? regionTag.getLongArray('BlockStates')
      : null;

    let numLongs = 0;
    let longArray: BigUint64Array | null = null;

    if (blockStatesNbt) {
      if (typeof blockStatesNbt.getItems === 'function') {
        const items = blockStatesNbt.getItems();
        numLongs = items.length;
        longArray = new BigUint64Array(numLongs);
        for (let i = 0; i < numLongs; i++) {
          const item = items[i];
          if (item && typeof item.getAsPair === 'function') {
            const pair = item.getAsPair();
            const high = BigInt(pair[0] >>> 0);
            const low = BigInt(pair[1] >>> 0);
            longArray[i] = (high << 32n) | low;
          } else if (item && typeof item.value === 'bigint') {
            longArray[i] = BigInt(item.value);
          } else if (Array.isArray(item)) {
            const high = BigInt((item[0] ?? 0) >>> 0);
            const low = BigInt((item[1] ?? 0) >>> 0);
            longArray[i] = (high << 32n) | low;
          }
        }
      } else if (Array.isArray((blockStatesNbt as any).value)) {
        const arr = (blockStatesNbt as any).value;
        numLongs = arr.length;
        longArray = new BigUint64Array(numLongs);
        for (let i = 0; i < numLongs; i++) {
          longArray[i] = BigInt(arr[i]);
        }
      }
    }

    // Entities parsing
    const entities: any[] = [];
    const entityLists = ['Entities', 'PendingBlockEntities', 'TileEntities', 'BlockEntities'];
    entityLists.forEach(listName => {
      if (!regionTag.has(listName)) return;
      const list = regionTag.getList(listName);
      if (!list) return;
      list.forEach((entTag: any) => {
        if (!entTag || !entTag.isCompound()) return;
        entities.push(entTag);
      });
    });

    currentRegions.set(regName, {
      name: regName,
      size,
      position,
      palette,
      longArray,
      numLongs,
      entities
    });
  }

  return Array.from(currentRegions.keys());
}

function decodeRegionBlocks(regionName: string) {
  const meta = currentRegions.get(regionName);
  if (!meta) throw new Error(`Region ${regionName} not found`);

  const palette = meta.palette;
  const isAir = palette.map(p => p.name === 'minecraft:air');
  const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(Math.max(2, palette.length))));
  const maskBig = (1n << BigInt(bitsPerBlock)) - 1n;

  const width = meta.size[0];
  const height = meta.size[1];
  const depth = meta.size[2];
  const volume = width * height * depth;
  const longArray = meta.longArray;
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

  return new Uint32Array(tempBlocks);
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
    } else if (type === 'GET_REGION_PALETTE') {
      const meta = currentRegions.get(payload.regionName);
      if (!meta) throw new Error(`Region ${payload.regionName} not found`);
      self.postMessage({
        id,
        type: 'GET_REGION_PALETTE_SUCCESS',
        palette: meta.palette,
        size: meta.size
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
