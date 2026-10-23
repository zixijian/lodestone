export interface BlockStateProperty {
  [key: string]: string;
}

export interface BlockState {
  namespace: string;
  name: string;
  id: string;
  properties?: BlockStateProperty;
}

export interface ParsedBlock {
  x: number;
  y: number;
  z: number;
  state: BlockState;
}

export interface LitematicRegion {
  name: string;
  size: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
  palette: BlockState[];
  blocks: ParsedBlock[];
}

export interface LitematicResult {
  version: number;
  minecraftDataVersion: number;
  regions: Record<string, LitematicRegion>;
}

export function parseLitematicBitArray(
  longArray: BigInt64Array,
  bitsPerBlock: number,
  volume: number
): number[] {
  const mask = (1n << BigInt(bitsPerBlock)) - 1n;
  const blocksPerLong = Math.floor(64 / bitsPerBlock);
  const result: number[] = new Array(volume);

  for (let i = 0; i < volume; i++) {
    const longIndex = Math.floor(i / blocksPerLong);
    const bitOffset = (i % blocksPerLong) * bitsPerBlock;
    if (longIndex < longArray.length) {
      const val = Number((longArray[longIndex] >> BigInt(bitOffset)) & mask);
      result[i] = val;
    } else {
      result[i] = 0;
    }
  }

  return result;
}
