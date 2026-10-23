# Shulkr 投影格式 (.litematic / .schem / .nbt / .mcstructure) 逆向解析算法

Shulkr 网页端严格遵循 Minecraft 标准二进制 NBT (Named Binary Tag) 规范及官方/社区格式定义，在浏览器内存中通过 `DataView` 和高吞吐位流读取器实现绝对精准的解压与反序列化。

---

## 📄 1. 四大格式标准特性表

| 格式名称 | 适用平台/模组 | 压缩格式 | NBT 字节序 | 方块存储结构 | 调色板 (Palette) 机制 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`.litematic`** | Java 版 Litematica 模组 | GZIP (`0x1F 0x8B`) | Big-Endian (大端) | 64 位 BigInt 数组 (长整型位压缩) | 局部区域 (`Regions[name].BlockStatePalette`) 映射 |
| **`.schem`** | Java 版 WorldEdit / Sponge | GZIP (`0x1F 0x8B`) | Big-Endian (大端) | Varint 变长字节数组 (`BlockData`) | 全局名空间映射 (`Palette` compound) |
| **`.nbt`** | Java 版 原生结构方块 (Structure Block) | GZIP (`0x1F 0x8B`) | Big-Endian (大端) | 顺序 Block State 索引数组 (`blocks[].state`) | 全局 Palette 列表 (`palette[]`) |
| **`.mcstructure`** | 基岩版 (Bedrock Edition) | 无压缩 / Raw NBT | Little-Endian (小端) | 3D Int32 索引数组 (`block_indices[0]`) | 嵌套 Block State 列表 (`structure.palette.default`) |

---

## 🧩 2. `.litematic` (Litematica) 标准解包与 DataView 偏移控制

### 2.1 NBT 标签与内存预算控制 (`NbtCursor`)
Shulkr 内置 `NbtCursor` 读取类，基于 `DataView` 的精准 byteOffset / byteLength 进行严格控制。当 DataView 尝试读取超出数据流范围的字节时，抛出 `NbtReadError: Unexpected end of NBT data` 异常：

```typescript
export class NbtCursor {
  private view: DataView;
  private offset: number = 0;
  private littleEndian: boolean;

  constructor(buffer: ArrayBuffer, byteOffset: number, byteLength: number, littleEndian: boolean = false) {
    this.view = new DataView(buffer, byteOffset, byteLength);
    this.littleEndian = littleEndian;
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
  public i32(): number { return this.view.getInt32(this.take(4), this.littleEndian); }
  public f32(): number { return this.view.getFloat32(this.take(4), this.littleEndian); }
  public f64(): number { return this.view.getFloat64(this.take(8), this.littleEndian); }
}
```

### 2.2 位流解包算法 (Bit-Unpacking Algorithm)
Litematica 将所有方块在 Palette 中的索引紧密打包存储在一个 `LongArray` (`int64`) 数组中：
- **Bits Per Block (每个方块占用的位数)**：根据 Palette 长度动态决定，最小为 2 位，等于 `Math.max(2, Math.ceil(Math.log2(paletteSize)))`。
- **1.16+ 离散填充 (Padded) vs 1.12-1.15 连续位流 (Continuous)**：
  - **Padded (1.16+)**：每个 64 位 Long 整数只容纳完整不跨界位的方块索引（例如每 64 位放 `floor(64 / bitsPerBlock)` 个索引），剩余零头位丢弃。
  - **Continuous (1.12-1.15)**：方块索引可以跨越两个相邻的 64 位 Long 整数边界。

```typescript
// Padded 解码标准计算公式:
const blocksPerLong = Math.floor(64 / bitsPerBlock);
const mask = (1n << BigInt(bitsPerBlock)) - 1n;

for (let index = 0; index < totalVolume; index++) {
  const longIndex = Math.floor(index / blocksPerLong);
  const startBit = (index % blocksPerLong) * bitsPerBlock;
  const paletteIndex = Number((longArray[longIndex] >> BigInt(startBit)) & mask);
  const blockState = palette[paletteIndex];
}
```

---

## 📜 3. `.schem` (Sponge Schematic v1/v2/v3) 标准 Varint 解码

`BlockData` 使用 Varint（变长整数）编码。每个字节最高位 (MSB) 标识是否有后续字节，低 7 位组合构成 Palette 索引：

```typescript
let offset = 0;
for (let y = 0; y < height; y++) {
  for (let z = 0; z < length; z++) {
    for (let x = 0; x < width; x++) {
      let value = 0;
      let varintBits = 0;
      let byteVal = 0;
      do {
        if (offset >= blockDataBytes.length) {
          throw new Error('Offset is outside the bounds of the DataView');
        }
        byteVal = blockDataBytes[offset++];
        value |= (byteVal & 0x7F) << varintBits;
        varintBits += 7;
      } while ((byteVal & 0x80) !== 0);

      const paletteName = paletteMapByValue[value];
    }
  }
}
```

---

## 🎮 4. `.mcstructure` (Bedrock Edition) 小端序标准解析

### 4.1 关键区别
- **小端序 (Little-Endian NBT)**：所有 Tag 的 Int/Short/Float 长度均以小端存储。
- **双层方块网络 (Two-layer Block Indices)**：`block_indices` 包含两个等长数组：
  - 数组 0 (`Layer 0`)：主方块层 (Main Block Layer)。
  - 数组 1 (`Layer 1`)：次方块层（用于水下/含水方块 Waterlogged Blocks）。
