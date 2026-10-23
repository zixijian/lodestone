// NBT Reader supporting BigEndian and LittleEndian (Java & Bedrock)

export enum NbtType {
  END = 0,
  BYTE = 1,
  SHORT = 2,
  INT = 3,
  LONG = 4,
  FLOAT = 5,
  DOUBLE = 6,
  BYTE_ARRAY = 7,
  STRING = 8,
  LIST = 9,
  COMPOUND = 10,
  INT_ARRAY = 11,
  LONG_ARRAY = 12
}

export class NbtReader {
  private view: DataView;
  private offset: number = 0;
  private littleEndian: boolean;

  constructor(buffer: ArrayBuffer | Uint8Array, littleEndian: boolean = false) {
    if (buffer instanceof Uint8Array) {
      this.view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    } else {
      this.view = new DataView(buffer);
    }
    this.littleEndian = littleEndian;
  }

  public getOffset(): number {
    return this.offset;
  }

  public readByte(): number {
    const val = this.view.getInt8(this.offset);
    this.offset += 1;
    return val;
  }

  public readUByte(): number {
    const val = this.view.getUint8(this.offset);
    this.offset += 1;
    return val;
  }

  public readShort(): number {
    const val = this.view.getInt16(this.offset, this.littleEndian);
    this.offset += 2;
    return val;
  }

  public readInt(): number {
    const val = this.view.getInt32(this.offset, this.littleEndian);
    this.offset += 4;
    return val;
  }

  public readLongBigInt(): bigint {
    if (this.littleEndian) {
      const low = BigInt(this.view.getUint32(this.offset, true));
      const high = BigInt(this.view.getInt32(this.offset + 4, true));
      this.offset += 8;
      return (high << 32n) | low;
    } else {
      const high = BigInt(this.view.getInt32(this.offset, false));
      const low = BigInt(this.view.getUint32(this.offset + 4, false));
      this.offset += 8;
      return (high << 32n) | low;
    }
  }

  public readFloat(): number {
    const val = this.view.getFloat32(this.offset, this.littleEndian);
    this.offset += 4;
    return val;
  }

  public readDouble(): number {
    const val = this.view.getFloat64(this.offset, this.littleEndian);
    this.offset += 8;
    return val;
  }

  public readString(): string {
    const len = this.littleEndian ? this.view.getUint16(this.offset, true) : this.view.getUint16(this.offset, false);
    this.offset += 2;
    const bytes = new Uint8Array(this.view.buffer, this.view.byteOffset + this.offset, len);
    this.offset += len;
    return new TextDecoder('utf-8').decode(bytes);
  }

  public readByteArray(): Int8Array {
    const len = this.readInt();
    const arr = new Int8Array(this.view.buffer, this.view.byteOffset + this.offset, len);
    this.offset += len;
    return arr;
  }

  public readIntArray(): Int32Array {
    const len = this.readInt();
    const result = new Int32Array(len);
    for (let i = 0; i < len; i++) {
      result[i] = this.readInt();
    }
    return result;
  }

  public readLongArray(): BigInt64Array {
    const len = this.readInt();
    const result = new BigInt64Array(len);
    for (let i = 0; i < len; i++) {
      result[i] = this.readLongBigInt();
    }
    return result;
  }

  public readTagValue(type: NbtType): any {
    switch (type) {
      case NbtType.BYTE:
        return this.readByte();
      case NbtType.SHORT:
        return this.readShort();
      case NbtType.INT:
        return this.readInt();
      case NbtType.LONG:
        return this.readLongBigInt();
      case NbtType.FLOAT:
        return this.readFloat();
      case NbtType.DOUBLE:
        return this.readDouble();
      case NbtType.BYTE_ARRAY:
        return this.readByteArray();
      case NbtType.STRING:
        return this.readString();
      case NbtType.LIST: {
        const elemType = this.readByte() as NbtType;
        const len = this.readInt();
        const list: any[] = [];
        for (let i = 0; i < len; i++) {
          list.push(this.readTagValue(elemType));
        }
        return list;
      }
      case NbtType.COMPOUND: {
        const compound: Record<string, any> = {};
        while (true) {
          const tagType = this.readByte() as NbtType;
          if (tagType === NbtType.END) break;
          const name = this.readString();
          compound[name] = this.readTagValue(tagType);
        }
        return compound;
      }
      case NbtType.INT_ARRAY:
        return this.readIntArray();
      case NbtType.LONG_ARRAY:
        return this.readLongArray();
      default:
        throw new Error(`Unknown NBT Tag Type: ${type} at offset ${this.offset}`);
    }
  }

  public parseRoot(): { name: string; value: any } {
    const rootType = this.readByte() as NbtType;
    if (rootType === NbtType.END) {
      return { name: '', value: null };
    }
    const name = this.readString();
    const value = this.readTagValue(rootType);
    return { name, value };
  }
}
