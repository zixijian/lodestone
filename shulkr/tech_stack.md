# Shulkr 纯前端技术栈与依赖架构剖析

Shulkr (https://www.shulkr.com/zh/viewer) 是一个高度平滑、响应迅速的 3D Minecraft 投影查看器。其最大的技术亮点是 **全端纯本地（100% Client-Side Local Rendering）**，不需要将文件上传到服务器，所有渲染和计算均在浏览器中运行。

---

## 🛠️ 1. 核心技术栈清单 (Core Tech Stack)

| 领域 / 模块 | 技术选型 / 依赖库 | 作用与实现细节 |
| :--- | :--- | :--- |
| **基础渲染引擎** | **Three.js (WebGL2)** | 负责 3D 场景图构建、相机变换、材质 (MeshStandardMaterial / ShaderMaterial) 和自定义 Chunk BufferGeometry 绘制 |
| **前端框架** | **React 18** | UI 视图层封装、组件状态管理与 WebGL Canvas 生命周期绑定 |
| **路由与状态管理** | **TanStack Router (v1)** | 单页应用 (SPA) 路由切换、状态持久化与 URL 参数 (如 `#layer`, `#mode`) 同步 |
| **数据解压** | **fflate** / **pako** | 高性能 GZIP/ZLIB 二进制解压缩。`fflate` 相比传统 pako 拥有更小的体积与更快的数据处理吞吐量 |
| **二进制与 NBT 解析** | **Custom NBT Bit-Stream Reader** | 基于 `DataView` 和 `Uint8Array` 自研的底层 Big-Endian / Little-Endian NBT Tag 递归流式解析器 |
| **构建工具** | **Vite** | 现代化 ES Module 模块打包与 Code Splitting（打散为 ~140 个 async chunks 提升首屏加载速度） |
| **UI 样式与组件** | **TailwindCSS + Radix UI** | 响应式布局、弹窗 (Dialog/Popover)、滑动条 (Slider) 和图标集 (Lucide React) |
| **分析与统计** | **PostHog + Google Analytics** | 客户端无感埋点与 WebGL 渲染性能统计 |

---

## 🏗️ 2. 应用架构与运行管线 (Architecture & Pipeline)

```
                       +---------------------------------------+
                       | 用户拖拽 / 选择本地投影文件           |
                       | (.litematic / .schem / .nbt / .mc)   |
                       +---------------------------------------+
                                           |
                                           v
                       +---------------------------------------+
                       |  文件类型自动识别 (Magic Header)       |
                       +---------------------------------------+
                                           |
                    +----------------------+----------------------+
                    |                      |                      |
                    v                      v                      v
          [ GZIP Decompress ]    [ ZLIB Decompress ]    [ Raw ArrayBuffer ]
             (fflate.gunzip)       (fflate.inflate)             |
                    |                      |                      |
                    +----------------------+----------------------+
                                           |
                                           v
                       +---------------------------------------+
                       |     NBT Tag Tree & Bit-Stream         |
                       |       Unpacking (Palette Map)         |
                       +---------------------------------------+
                                           |
                                           v
                       +---------------------------------------+
                       |    Unified Standard Block Grid       |
                       |   { x, y, z, blockName, states }      |
                       +---------------------------------------+
                                           |
                                           v
                       +---------------------------------------+
                       |   Chunk Mesh Building & Cull Engine   |
                       |   - Merge quads                       |
                       |   - Opaque / Translucent splitting    |
                       |   - UV Atlas Coordinate Mapping       |
                       +---------------------------------------+
                                           |
                                           v
                       +---------------------------------------+
                       |   Three.js WebGL Scene Rendering      |
                       |   - OrbitControls / Free-Fly          |
                       |   - ClippingPlanes (Slicer)           |
                       +---------------------------------------+
```

---

## ⚡ 3. 性能优化关键突破

1. **分块网格合并 (Chunk Geometry Merging)**：
   - 将整座建筑划分为 16x16x16 的子区块 (Chunk)。每个区块只生成少量组合 Draw Call，大幅降低 GPU 与 CPU 的交互开销。

2. **不可见面剔除 (Adjacent Face Culling)**：
   - 检查当前方块 6 个相邻方向（上、下、东、南、西、北）的方块透明度。若相邻方块为完全不透明的实心方块，则直接抛弃该相邻面的顶点和索引，减少 70%+ 的无用多边形。

3. **纹理图集 (Texture Atlas Batching)**：
   - 将 Minecraft 所有方块材质预先打包至单一的主纹理图集 (Atlas) 中，通过顶点属性中的 `uv` 坐标偏移量动态定位贴图，从而实现单个材质 (Material) 绘制成千上万个方块。

4. **流式 Web Worker / Async Yielding**：
   - 大文件解析（如 10MB+ Litematic 包含数百万方块）采用分包异步让出主线程 (`requestAnimationFrame` / `setTimeout` 切片)，避免页面 UI 假死与掉帧。
