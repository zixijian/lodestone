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
  longArray: BigInt64Array | number[] | any,
  bitsPerBlock: number,
  volume: number
): Uint32Array {
  const mask = (1n << BigInt(bitsPerBlock)) - 1n;
  const blocksPerLong = Math.floor(64 / bitsPerBlock);
  const result = new Uint32Array(volume);

  if (!longArray || longArray.length === 0) return result;

  let blockIdx = 0;
  const numLongs = longArray.length;

  for (let i = 0; i < numLongs && blockIdx < volume; i++) {
    const rawVal = longArray[i];
    const val = typeof rawVal === 'bigint' ? rawVal : BigInt(rawVal ?? 0);
    for (let b = 0; b < blocksPerLong && blockIdx < volume; b++) {
      const bitOffset = BigInt(b * bitsPerBlock);
      result[blockIdx++] = Number((val >> bitOffset) & mask);
    }
  }

  return result;
}
