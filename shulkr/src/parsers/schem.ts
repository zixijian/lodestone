import { BlockState } from './litematic';

export interface SchemResult {
  width: number;
  height: number;
  length: number;
  palette: Record<string, number>;
  paletteInverse: Record<number, string>;
  blocks: Uint32Array; // 3D Flat Array (Y * Length * Width + Z * Width + X)
}

export function decodeVarintStream(buffer: Uint8Array, totalBlocks: number): Uint32Array {
  const result = new Uint32Array(totalBlocks);
  let offset = 0;
  let blockIdx = 0;

  while (offset < buffer.length && blockIdx < totalBlocks) {
    let value = 0;
    let varintBits = 0;
    let byteVal = 0;

    do {
      byteVal = buffer[offset++];
      value |= (byteVal & 0x7f) << varintBits;
      varintBits += 7;
      if (varintBits >= 35) {
        throw new Error('Varint stream corruption');
      }
    } while ((byteVal & 0x80) !== 0);

    result[blockIdx++] = value;
  }

  return result;
}
