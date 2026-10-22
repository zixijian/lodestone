// NBT Stream Reader with Cursor for streaming NBT parsing
// Supports Gzip / Raw NBT reading without building large NBT trees in memory

export interface NbtTagHeader {
  type: number;
  name: string;
}

export const TAG_END = 0;
export const TAG_BYTE = 1;
export const TAG_SHORT = 2;
export const TAG_INT = 3;
export const TAG_LONG = 4;
export const TAG_FLOAT = 5;
export const TAG_DOUBLE = 6;
export const TAG_BYTE_ARRAY = 7;
export const TAG_STRING = 8;
export const TAG_LIST = 9;
export const TAG_COMPOUND = 10;
export const TAG_INT_ARRAY = 11;
export const TAG_LONG_ARRAY = 12;

export class NbtCursor {
  private view: DataView;
  public offset: number = 0;

  constructor(public buffer: Uint8Array) {
    this.view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  }

  public readByte(): number {
    const val = this.view.getInt8(this.offset);
    this.offset += 1;
    return val;
  }

  public readUnsignedByte(): number {
    const val = this.view.getUint8(this.offset);
    this.offset += 1;
    return val;
  }

  public readShort(): number {
    const val = this.view.getInt16(this.offset, false);
    this.offset += 2;
    return val;
  }

  public readInt(): number {
    const val = this.view.getInt32(this.offset, false);
    this.offset += 4;
    return val;
  }

  public readLongBigInt(): bigint {
    const high = BigInt(this.view.getUint32(this.offset, false));
    const low = BigInt(this.view.getUint32(this.offset + 4, false));
    this.offset += 8;
    return (high << 32n) | low;
  }

  public readFloat(): number {
    const val = this.view.getFloat32(this.offset, false);
    this.offset += 4;
    return val;
  }

  public readDouble(): number {
    const val = this.view.getFloat64(this.offset, false);
    this.offset += 8;
    return val;
  }

  public readString(): string {
    const len = this.view.getUint16(this.offset, false);
    this.offset += 2;
    if (len === 0) return '';
    const slice = this.buffer.subarray(this.offset, this.offset + len);
    this.offset += len;
    return new TextDecoder('utf-8').decode(slice);
  }

  public skip(bytes: number) {
    this.offset += bytes;
  }

  public skipTag(type: number) {
    switch (type) {
      case TAG_BYTE: this.offset += 1; break;
      case TAG_SHORT: this.offset += 2; break;
      case TAG_INT: this.offset += 4; break;
      case TAG_LONG: this.offset += 8; break;
      case TAG_FLOAT: this.offset += 4; break;
      case TAG_DOUBLE: this.offset += 8; break;
      case TAG_BYTE_ARRAY: {
        const len = this.readInt();
        this.offset += Math.max(0, len);
        break;
      }
      case TAG_STRING: {
        const len = this.view.getUint16(this.offset, false);
        this.offset += 2 + len;
        break;
      }
      case TAG_LIST: {
        const elemType = this.readByte();
        const len = this.readInt();
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            this.skipTag(elemType);
          }
        }
        break;
      }
      case TAG_COMPOUND: {
        while (this.offset < this.buffer.byteLength) {
          const t = this.readByte();
          if (t === TAG_END) break;
          const nameLen = this.view.getUint16(this.offset, false);
          this.offset += 2 + nameLen;
          this.skipTag(t);
        }
        break;
      }
      case TAG_INT_ARRAY: {
        const len = this.readInt();
        this.offset += Math.max(0, len) * 4;
        break;
      }
      case TAG_LONG_ARRAY: {
        const len = this.readInt();
        this.offset += Math.max(0, len) * 8;
        break;
      }
      default:
        throw new Error(`Unknown NBT Tag Type: ${type} at offset ${this.offset}`);
    }
  }
}
