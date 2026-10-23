# Shulkr 3D WebGL / Three.js 渲染管线与 Chunk 网格构建引擎

Shulkr 能够以 60 FPS 流畅渲染包含数十万方块的庞大 Minecraft 建筑，核心在于其 **Chunk 离屏网格构建 (Chunk Mesh Builder Engine)** 和 **主图集 (Master Texture Atlas)** 映射机制。

---

## 🎨 1. 渲染管线总览 (Rendering Pipeline)

```
[ 标准化方块网格 (Block Grid) ]
              │
              ▼
[ 划分 16x16x16 Chunk 空间区块 ]
              │
              ▼
[ 遍历区块内方块 & 检查 6 相邻面 (Adjacency Culling) ]
              │
              ├──► 邻居为实心不透明方块 ──► 剔除当前面 (Discard Face)
              └──► 面暴露在外 / 触及半透明方块 ──► 保留当前面
                                          │
                                          ▼
                      [ 计算顶点 (Vertices) & UV 映射 ]
                                          │
                                          ├──► 不透明材质 (Opaque Mesh Geometry)
                                          └──► 半透明材质 (Translucent Mesh Geometry)
                                                      │
                                                      ▼
                                   [ Three.js Scene.add(ChunkMesh) ]
```

---

## 🧱 2. Chunk 空间网格划分与 Draw Call 优化

直接为每个方块创建单独的 `THREE.Mesh` 会产生数万甚至数十万个 Draw Call，瞬间导致浏览器 WebGL 卡死。
Shulkr 的解决方案：
1. **16x16x16 Chunk 划分**：将整个 3D 空间划分为若干个 16x16x16 的子区块。
2. **BufferGeometry 合并**：每个 Chunk 内部只生成 1 个不透明 `BufferGeometry` 和 1 个半透明 `BufferGeometry`。
3. **Frustum Culling (视锥体裁剪)**：当玩家缩放或移动视角时，Three.js 引擎会自动跳过位于摄像机视野之外 (Far/Near/Out-of-bound) 的 Chunk Mesh，将实际 GPU 绘制压力降低 80% 以上。

---

## 🙈 3. 相邻面剔除算法 (Adjacent Face Culling)

剔除不可见内部面是提升帧率的关键步骤。

### 3.1 剔除逻辑表

| 当前方块类型 | 相邻方块类型 | 是否生成连接面 (Generate Quad)? | 说明 |
| :--- | :--- | :--- | :--- |
| **实心不透明** | 实心不透明 | ❌ 剔除 (Culled) | 内部接缝，完全不可见 |
| **实心不透明** | 空气 / 半透明 | ✅ 生成 (Kept) | 暴露在外，正常可见 |
| **半透明 (如玻璃)**| 同类半透明 | ❌ 剔除 (Culled) | 消除玻璃块内部重叠面，消除 Z-Fighting |
| **半透明 (如水/树叶)**| 异类半透明 | ✅ 生成 (Kept) | 树叶与水结合处需保留水面 |

### 3.2 顶点数据结构
每个四边形面 (Quad) 由 4 个顶点、2 个三角形（6 个索引 `Indices`）组成：

```typescript
// 顶点 BufferGeometry 属性表
const positionBuffer = new Float32Array(totalQuads * 4 * 3); // x, y, z
const normalBuffer   = new Float32Array(totalQuads * 4 * 3); // nx, ny, nz
const uvBuffer       = new Float32Array(totalQuads * 4 * 2); // u, v
const colorBuffer    = new Float32Array(totalQuads * 4 * 3); // r, g, b (用于红石/草方块动态染色)
const indexBuffer    = new Uint32Array(totalQuads * 6);      // 索引
```

---

## 🖼️ 4. 纹理图集 (Master Texture Atlas) 与 UV 映射

Shulkr 采用单个 2048x2048 像素的主纹理图集 (`atlas.png`)：
- 图集中每个标准材质为 16x16 像素。
- 通过 JSON 映射表 (`assets.json`) 记录贴图在图集中的精确像素坐标 `[x, y, width, height]`。

### 4.1 UV 坐标转换公式
给定贴图在图集中的坐标 $(X_{pixel}, Y_{pixel})$ 与宽高 $(W, H)$，2048x2048 总画布尺寸，计算顶点 UV：

$$U_{min} = \frac{X_{pixel} + 0.5}{2048}, \quad U_{max} = \frac{X_{pixel} + W - 0.5}{2048}$$
$$V_{min} = 1.0 - \frac{Y_{pixel} + H - 0.5}{2048}, \quad V_{max} = 1.0 - \frac{Y_{pixel} + 0.5}{2048}$$

> **注意 (Padding Protection)**：加减 `0.5` 像素保护偏移量是防止 GPU 开启双线性插值 (Bilinear Filtering) 采样时渗入邻近贴图颜色的关键技术。
