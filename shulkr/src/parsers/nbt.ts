export class NbtCursor {
  private view: DataView;
  private offset: number = 0;
  private littleEndian: boolean;

  constructor(buffer: ArrayBuffer, byteOffset: number = 0, byteLength?: number, littleEndian: boolean = false) {
    const len = byteLength ?? (buffer.byteLength - byteOffset);
    this.view = new DataView(buffer, byteOffset, len);
    this.littleEndian = littleEndian;
  }

  public get getOffset(): number {
    return this.offset;
  }

  public get remaining(): number {
    return this.view.byteLength - this.offset;
  }

  private take(bytes: number): number {
    const current = this.offset;
    if (current + bytes > this.view.byteLength) {
      throw new Error(`Unexpected end of NBT data: needed ${bytes} more byte(s) at offset ${current}.`);
    }
    this.offset += bytes;
    return current;
  }

  public i8(): number { return this.view.getInt8(this.take(1)); }
  public u8(): number { return this.view.getUint8(this.take(1)); }
  public i16(): number { return this.view.getInt16(this.take(2), this.littleEndian); }
  public u16(): number { return this.view.getUint16(this.take(2), this.littleEndian); }
  public i32(): number { return this.view.getInt32(this.take(4), this.littleEndian); }
  public f32(): number { return this.view.getFloat32(this.take(4), this.littleEndian); }
  public f64(): number { return this.view.getFloat64(this.take(8), this.littleEndian); }

  public i64(): bigint {
    const pos = this.take(8);
    if (this.littleEndian) {
      const low = BigInt(this.view.getUint32(pos, true));
      const high = BigInt(this.view.getInt32(pos + 4, true));
      return (high << 32n) | low;
    } else {
      const high = BigInt(this.view.getInt32(pos, false));
      const low = BigInt(this.view.getUint32(pos + 4, false));
      return (high << 32n) | low;
    }
  }

  public string(): string {
    const len = this.u16();
    const pos = this.take(len);
    const bytes = new Uint8Array(this.view.buffer, this.view.byteOffset + pos, len);
    return new TextDecoder('utf-8').decode(bytes);
  }
}
