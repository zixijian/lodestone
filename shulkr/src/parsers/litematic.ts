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
  const blocksPerLongPadded = Math.floor(64 / bitsPerBlock);
  const result = new Uint32Array(volume);

  if (!longArray || longArray.length === 0) return result;

  const numLongs = longArray.length;
  const expectedLongsContinuous = Math.ceil((volume * bitsPerBlock) / 64);
  const expectedLongsPadded = Math.ceil(volume / blocksPerLongPadded);

  // Auto-detect continuous vs padded format based on long array length
  const isContinuous = numLongs === expectedLongsContinuous && expectedLongsContinuous !== expectedLongsPadded;

  function getUnsignedLong(val: any): bigint {
    if (typeof val === 'bigint') {
      return BigInt.asUintN(64, val);
    }
    if (Array.isArray(val) && val.length >= 2) {
      const high = BigInt(val[0]) & 0xffffffffn;
      const low = BigInt(val[1]) & 0xffffffffn;
      return (high << 32n) | low;
    }
    if (typeof val === 'number') {
      return BigInt.asUintN(64, BigInt(val));
    }
    return 0n;
  }

  if (isContinuous) {
    let currentLongIdx = 0;
    let currentBitOffset = 0;
    for (let i = 0; i < volume; i++) {
      let val = 0n;
      let bitsRead = 0;
      while (bitsRead < bitsPerBlock) {
        if (currentLongIdx >= numLongs) break;
        const rawLong = getUnsignedLong(longArray[currentLongIdx]);
        const bitsAvailableInLong = 64 - currentBitOffset;
        const bitsToRead = Math.min(bitsPerBlock - bitsRead, bitsAvailableInLong);

        const chunkMask = (1n << BigInt(bitsToRead)) - 1n;
        const chunk = (rawLong >> BigInt(currentBitOffset)) & chunkMask;

        val |= chunk << BigInt(bitsRead);
        bitsRead += bitsToRead;
        currentBitOffset += bitsToRead;

        if (currentBitOffset >= 64) {
          currentBitOffset = 0;
          currentLongIdx++;
        }
      }
      result[i] = Number(val);
    }
  } else {
    let blockIdx = 0;
    for (let i = 0; i < numLongs && blockIdx < volume; i++) {
      const uval = getUnsignedLong(longArray[i]);
      for (let b = 0; b < blocksPerLongPadded && blockIdx < volume; b++) {
        const bitOffset = BigInt(b * bitsPerBlock);
        result[blockIdx++] = Number((uval >> bitOffset) & mask);
      }
    }
  }

  return result;
}
