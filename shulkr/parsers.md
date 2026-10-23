# Shulkr 投影格式 (.litematic / .schem / .nbt / .mcstructure) 逆向解析算法

Shulkr 通过统一的底层 NBT 抽象层与位流解码器，实现了对 Minecraft 四大主流投影文件格式的无缝解析与互转。

---

## 📄 1. 四大格式特性对比表

| 格式名称 | 适用平台/模组 | 压缩格式 | NBT 字节序 | 方块存储结构 | 调色板 (Palette) 机制 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`.litematic`** | Java 版 Litematica 模组 | GZIP (`0x1F 0x8B`) | Big-Endian (大端) | 64 位 BigInt 数组 (长整型位压缩) | 局部区域 (`Regions[name].BlockStatePalette`) 映射 |
| **`.schem`** | Java 版 WorldEdit / Sponge | GZIP (`0x1F 0x8B`) | Big-Endian (大端) | Varint 变长字节数组 (`BlockData`) | 全局名空间映射 (`Palette` compound) |
| **`.nbt`** | Java 版 原生结构方块 (Structure Block) | GZIP (`0x1F 0x8B`) | Big-Endian (大端) | 顺序 Block State 索引数组 (`blocks[].state`) | 全局 Palette 列表 (`palette[]`) |
| **`.mcstructure`** | 基岩版 (Bedrock Edition) | 无压缩 / Raw NBT | Little-Endian (小端) | 3D Int32 索引数组 (`block_indices[0]`) | 嵌套 Block State 列表 (`structure.palette.default`) |

---

## 🧩 2. `.litematic` (Litematica) 详细解析算法

### 2.1 数据结构层次
```
Root (Compound)
 ├── MinecraftDataVersion (Int)
 ├── Version (Int)
 └── Regions (Compound)
      └── [RegionName] (Compound)
           ├── Position (Compound: x, y, z)
           ├── Size (Compound: x, y, z)
           ├── BlockStatePalette (List of Compound)
           │    └── [0..N]: { Name: "minecraft:stone", Properties: {...} }
           └── BlockStates (LongArray / Int64 Array)
```

### 2.2 位流解包算法 (Bit-Unpacking Algorithm)
Litematica 将所有方块在 Palette 中的索引紧密打包存储在一个 `LongArray` (`int64`) 数组中：
- **Bits Per Block (每个方块占用的位数)**：根据 Palette 长度动态决定，最小为 2 位，等于 `Math.max(2, Math.ceil(Math.log2(paletteSize)))`。
- **1.16+ 离散填充 (Padded) vs 1.12-1.15 连续位流 (Continuous)**：
  - **Padded (1.16+)**：每个 64 位 Long 整数只容纳完整不跨界位的方块索引（例如每 64 位放 `floor(64 / bitsPerBlock)` 个索引），剩余零头位丢弃。
  - **Continuous (1.12-1.15)**：方块索引可以跨越两个相邻的 64 位 Long 整数边界。

```typescript
// Padded 解码核心计算公式:
const blocksPerLong = Math.floor(64 / bitsPerBlock);
const mask = (1n << BigInt(bitsPerBlock)) - 1n;

for (let index = 0; index < totalVolume; index++) {
  const longIndex = Math.floor(index / blocksPerLong);
  const startBit = (index % blocksPerLong) * bitsPerBlock;
  const paletteIndex = Number((longArray[longIndex] >> BigInt(startBit)) & mask);
  const blockState = palette[paletteIndex];
  // 映射至 (x, y, z) 局部坐标
}
```

---

## 📜 3. `.schem` (Sponge Schematic v1/v2/v3) 详细解析算法

### 3.1 数据结构层次
```
Schematic (Compound)
 ├── Width (Short)
 ├── Height (Short)
 ├── Length (Short)
 ├── Palette (Compound: "minecraft:oak_log" -> Int Index)
 ├── BlockData (ByteArray / Varint Stream)
 └── BlockEntities (List of Compound)
```

### 3.2 BlockData Varint 解码
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
        byteVal = blockDataBytes[offset++];
        value |= (byteVal & 0x7F) << varintBits;
        varintBits += 7;
      } while ((byteVal & 0x80) !== 0);

      const paletteName = paletteMapByValue[value];
      // 放置到坐标 (x, y, z)
    }
  }
}
```

---

## 📦 4. `.nbt` (Java Structure Block) 详细解析算法

结构方块导出的 `.nbt` 格式相对扁平直观：
1. 读取 `size` (x, y, z) 三维尺寸。
2. 读取 `palette` (List) 获取所有方块状态对象。
3. 遍历 `blocks` (List)：
   - `pos`: `[x, y, z]` 坐标。
   - `state`: 对应 `palette` 的整数索引。
   - `nbt`: 额外方块实体数据 (Tile Entity Data)。

---

## 🎮 5. `.mcstructure` (Bedrock Edition) 详细解析算法

### 5.1 关键区别
- **小端序 (Little-Endian NBT)**：所有 Tag 的 Int/Short/Float 长度均以小端存储。
- **双层方块网络 (Two-layer Block Indices)**：`block_indices` 包含两个等长数组：
  - 数组 0 (`Layer 0`)：主方块层 (Main Block Layer)。
  - 数组 1 (`Layer 1`)：次方块层（用于水下/含水方块 Waterlogged Blocks）。

### 5.2 Palette 映射公式
```typescript
const layer0Indices = structure.block_indices[0];
const layer1Indices = structure.block_indices[1]; // 含水层
const palette = structure.palette.default.block_palette;

let idx = 0;
for (let x = 0; x < sizeX; x++) {
  for (let y = 0; y < sizeY; y++) {
    for (let z = 0; z < sizeZ; z++) {
      const blockPaletteIdx = layer0Indices[idx];
      const waterPaletteIdx = layer1Indices[idx];
      idx++;

      if (blockPaletteIdx !== -1) {
        const blockObj = palette[blockPaletteIdx];
        // 解析 blockObj.name (例如 "minecraft:chest") 和 blockObj.states
      }
    }
  }
}
```
