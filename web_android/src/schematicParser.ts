import { NbtReader } from './nbtParser';
import { parseLitematicBitArray } from '../../shulkr/src/parsers/litematic';
import { decodeVarintStream } from '../../shulkr/src/parsers/schem';

export interface BlockState {
  name: string;
  properties?: Record<string, string>;
}

export interface RegionData {
  name: string;
  size: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
  palette: BlockState[];
  // Map of 3D key "x,y,z" => palette index
  blocks: Map<string, number>;
}

export interface SchematicData {
  format: 'litematic' | 'schem' | 'nbt' | 'mcstructure';
  regions: Record<string, RegionData>;
  totalBlocks: number;
  blockStats: Record<string, number>;
}

export function parseSchematic(buffer: ArrayBuffer | Uint8Array): SchematicData {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);

  // Check magic header
  // Java NBT / GZIP or BigEndian NBT Compound (0x0A)
  if (bytes[0] === 0x0A) {
    // Big Endian NBT Compound
    const reader = new NbtReader(bytes, false);
    const root = reader.parseRoot();
    return processNbtRoot(root.value);
  } else {
    // Attempt Little Endian NBT Compound (Bedrock .mcstructure)
    try {
      const readerLE = new NbtReader(bytes, true);
      const rootLE = readerLE.parseRoot();
      if (rootLE.value && (rootLE.value.structure || rootLE.value.format_version)) {
        return processMcstructure(rootLE.value);
      }
    } catch (e) {
      // Fallback to Big Endian
    }

    const readerBE = new NbtReader(bytes, false);
    const rootBE = readerBE.parseRoot();
    return processNbtRoot(rootBE.value);
  }
}

function processNbtRoot(root: any): SchematicData {
  if (!root) throw new Error('Invalid NBT structure');

  // 1. Check Litematic
  if (root.Regions || root.Version) {
    return processLitematic(root);
  }

  // 2. Check Sponge Schematic (.schem)
  if (root.Sponge || root.Palette || root.BlockData) {
    return processSchem(root);
  }

  // 3. Check Structure Block (.nbt)
  if (root.size && root.palette && root.blocks) {
    return processJavaNbt(root);
  }

  throw new Error('Unsupported schematic format');
}

// 1. Litematic (.litematic)
function processLitematic(root: any): SchematicData {
  const regions: Record<string, RegionData> = {};
  const blockStats: Record<string, number> = {};
  let totalBlocks = 0;

  const rawRegions = root.Regions || {};
  for (const regName of Object.keys(rawRegions)) {
    const reg = rawRegions[regName];
    const size = {
      x: Math.abs(Number(reg.Size?.x ?? reg.Size?.X ?? 0)),
      y: Math.abs(Number(reg.Size?.y ?? reg.Size?.Y ?? 0)),
      z: Math.abs(Number(reg.Size?.z ?? reg.Size?.Z ?? 0))
    };
    const pos = {
      x: Number(reg.Position?.x ?? reg.Position?.X ?? 0),
      y: Number(reg.Position?.y ?? reg.Position?.Y ?? 0),
      z: Number(reg.Position?.z ?? reg.Position?.Z ?? 0)
    };

    const paletteTags = reg.BlockStatePalette || [];
    const palette: BlockState[] = paletteTags.map((p: any) => ({
      name: String(p.Name || 'minecraft:air'),
      properties: p.Properties ? Object.fromEntries(Object.entries(p.Properties).map(([k, v]) => [k, String(v)])) : undefined
    }));

    const volume = size.x * size.y * size.z;
    const blocksMap = new Map<string, number>();

    const blockStatesLongs = reg.BlockStates;
    if (blockStatesLongs && palette.length > 0) {
      const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(palette.length)));
      const decodedIndices = parseLitematicBitArray(blockStatesLongs, bitsPerBlock, volume);

      for (let y = 0; y < size.y; y++) {
        for (let z = 0; z < size.z; z++) {
          for (let x = 0; x < size.x; x++) {
            const index = (y * size.z + z) * size.x + x;
            const palIdx = decodedIndices[index];
            if (palIdx > 0 && palIdx < palette.length) {
              const bState = palette[palIdx];
              if (bState && bState.name !== 'minecraft:air' && bState.name !== 'air') {
                blocksMap.set(`${x},${y},${z}`, palIdx);
                totalBlocks++;
                blockStats[bState.name] = (blockStats[bState.name] || 0) + 1;
              }
            }
          }
        }
      }
    }

    regions[regName] = { name: regName, size, position: pos, palette, blocks: blocksMap };
  }

  return { format: 'litematic', regions, totalBlocks, blockStats };
}

// 2. Sponge Schematic (.schem)
function processSchem(root: any): SchematicData {
  const schemRoot = root.Sponge || root;
  const width = Number(schemRoot.Width || root.Width || 0);
  const height = Number(schemRoot.Height || root.Height || 0);
  const length = Number(schemRoot.Length || root.Length || 0);

  const rawPalette = schemRoot.Palette || root.Palette || {};
  const paletteInverse: Record<number, BlockState> = {};
  const paletteList: BlockState[] = [];
  const paletteMap = new Map<number, number>(); // raw index => list index

  for (const [key, val] of Object.entries(rawPalette)) {
    const rawIdx = Number(val);
    const cleanName = key.split('[')[0];
    const bState: BlockState = { name: cleanName };
    paletteInverse[rawIdx] = bState;

    let listIdx = paletteList.findIndex(p => p.name === cleanName);
    if (listIdx < 0) {
      listIdx = paletteList.push(bState) - 1;
    }
    paletteMap.set(rawIdx, listIdx);
  }

  const blockDataBytes = schemRoot.BlockData || root.BlockData || new Uint8Array(0);
  const totalVolume = width * height * length;
  const decoded = decodeVarintStream(blockDataBytes, totalVolume);

  const blocksMap = new Map<string, number>();
  const blockStats: Record<string, number> = {};
  let totalBlocks = 0;

  for (let y = 0; y < height; y++) {
    for (let z = 0; z < length; z++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * length + z) * width + x;
        const rawPalIdx = decoded[idx];
        const palIdx = paletteMap.get(rawPalIdx) ?? 0;
        const bState = paletteList[palIdx];
        if (bState && bState.name !== 'minecraft:air' && bState.name !== 'air') {
          blocksMap.set(`${x},${y},${z}`, palIdx);
          totalBlocks++;
          blockStats[bState.name] = (blockStats[bState.name] || 0) + 1;
        }
      }
    }
  }

  const region: RegionData = {
    name: 'Main',
    size: { x: width, y: height, z: length },
    position: { x: 0, y: 0, z: 0 },
    palette: paletteList,
    blocks: blocksMap
  };

  return { format: 'schem', regions: { Main: region }, totalBlocks, blockStats };
}

// 3. Structure Block NBT (.nbt)
function processJavaNbt(root: any): SchematicData {
  const sizeArr = root.size || [0, 0, 0];
  const size = { x: Number(sizeArr[0]), y: Number(sizeArr[1]), z: Number(sizeArr[2]) };

  const rawPalette = root.palette || [];
  const palette: BlockState[] = rawPalette.map((p: any) => ({
    name: String(p.Name || 'minecraft:air'),
    properties: p.Properties ? Object.fromEntries(Object.entries(p.Properties).map(([k, v]) => [k, String(v)])) : undefined
  }));

  const blocksArr = root.blocks || [];
  const blocksMap = new Map<string, number>();
  const blockStats: Record<string, number> = {};
  let totalBlocks = 0;

  for (const b of blocksArr) {
    const pos = b.pos || [0, 0, 0];
    const palIdx = Number(b.state);
    const bState = palette[palIdx];
    if (bState && bState.name !== 'minecraft:air' && bState.name !== 'air') {
      blocksMap.set(`${pos[0]},${pos[1]},${pos[2]}`, palIdx);
      totalBlocks++;
      blockStats[bState.name] = (blockStats[bState.name] || 0) + 1;
    }
  }

  const region: RegionData = {
    name: 'Main',
    size,
    position: { x: 0, y: 0, z: 0 },
    palette,
    blocks: blocksMap
  };

  return { format: 'nbt', regions: { Main: region }, totalBlocks, blockStats };
}

// 4. Bedrock Structure (.mcstructure)
function processMcstructure(root: any): SchematicData {
  const sizeArr = root.size || [0, 0, 0];
  const size = { x: Number(sizeArr[0]), y: Number(sizeArr[1]), z: Number(sizeArr[2]) };

  const rawPalette = root.structure?.palette?.default?.block_palette || [];
  const palette: BlockState[] = rawPalette.map((p: any) => ({
    name: String(p.name || 'minecraft:air')
  }));

  const layer0Indices = root.structure?.block_indices?.[0] || [];
  const blocksMap = new Map<string, number>();
  const blockStats: Record<string, number> = {};
  let totalBlocks = 0;

  for (let x = 0; x < size.x; x++) {
    for (let y = 0; y < size.y; y++) {
      for (let z = 0; z < size.z; z++) {
        const idx = (x * size.y + y) * size.z + z;
        const palIdx = layer0Indices[idx];
        if (palIdx >= 0 && palIdx < palette.length) {
          const bState = palette[palIdx];
          if (bState && bState.name !== 'minecraft:air' && bState.name !== 'air') {
            blocksMap.set(`${x},${y},${z}`, palIdx);
            totalBlocks++;
            blockStats[bState.name] = (blockStats[bState.name] || 0) + 1;
          }
        }
      }
    }
  }

  const region: RegionData = {
    name: 'Main',
    size,
    position: { x: 0, y: 0, z: 0 },
    palette,
    blocks: blocksMap
  };

  return { format: 'mcstructure', regions: { Main: region }, totalBlocks, blockStats };
}
