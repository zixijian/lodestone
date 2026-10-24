# Shulkr 投影查看器 (Schematic Viewer) 逆向工程与技术分析

本目录包含对 [Shulkr](https://www.shulkr.com/zh/viewer) 网页投影查看器（Minecraft Schematic Viewer）的完整逆向分析、技术架构拆解、纯前端解析算法说明及核心源码模块还原。

---

## 📁 目录结构

```
shulkr/
├── README.md                 # 逆向工程概述与目录说明（本文件）
├── tech_stack.md            # 纯前端技术栈与依赖架构剖析
├── parsers.md               # 四大投影格式 (.litematic / .schem / .nbt / .mcstructure) 逆向解析算法
├── rendering_pipeline.md    # 3D WebGL / Three.js 渲染管线与 Chunk 方块网格构建
├── view_modes.md            # 三大视角控制模式 (Orbit / Free-fly / Slicer) 交互算法
├── resources_and_apis.md    # 全量资源引用、CDN 路径、图集与 API 接口清单
└── src/                     # 逆向重构的纯前端 TypeScript 核心算法与渲染逻辑
    ├── parsers/
    │   ├── litematic.ts     # Litematica (.litematic) 64位位流与 Palette 解包器
    │   ├── schem.ts         # WorldEdit Sponge (.schem) Varint/NBT 结构解码器
    │   ├── nbt.ts           # 结构方块 (.nbt) 格式解析器
    │   └── mcstructure.ts   # 基岩版 (.mcstructure) 嵌套 Palette 方块列表提取器
    ├── rendering/
    │   ├── chunkBuilder.ts  # 3D Chunk 离屏网格构建与面剔除 (Culling) 引擎
    │   └── slicer.ts        # 轴向分层切片与 Three.js Clipping Planes 过滤器
    └── controls/
        └── viewController.ts# 视角切换 (环绕 / 飞行) 与相机参数矩阵更新器
```

---

## 🚀 核心逆向发现摘要

1. **纯客户端本地零延迟运行 (100% Pure Client-Side Execution)**：
   - Shulkr 无需服务端上传解析，所有投影文件（`.litematic` / `.schem` / `.nbt` / `.mcstructure`）的解压、NBT 节点树解析、位流解码、方块 Palette 映射均在浏览器主线程与 Worker 线程通过 WebAssembly / JavaScript 原生完成。
   - 文件体积限制（如 32.0 MB）仅为浏览器内存保护上限，解析过程 0 网络请求。

2. **技术栈组合 (Client-side Tech Stack)**：
   - **核心渲染**：Three.js (WebGL2) + 自定义 BufferGeometry 贴图合并。
   - **压缩解压**：`fflate` (高性能 DEFLATE/GZIP 流式解压) + `pako` 备用。
   - **应用框架**：React + TanStack Router (SSR/SSG 客户端水和) + Vite。
   - **UI 与样式**：TailwindCSS + Radix UI Primitives + Lucide Icons。

3. **四合一多格式兼容机制**：
   - 自动识别二进制头标识（GZIP 魔法数字 `0x1F 0x8B` 或 NBT Tag Compound 类型 `0x0A`），路由至对应解析管线。
   - 包含对 Litematica 1.12 - 1.21+ (Continuous vs Padded bit packing)、Sponge Schematic v1/v2/v3、Minecraft Java Structure Block NBT 及 Bedrock Edition `.mcstructure` 的完全转码支持。

4. **分层切片 (Slicer Mode) 原理**：
   - 利用 Three.js 自定义 ShaderMaterial / Material 的 `clippingPlanes`（裁剪平面向量 `THREE.Plane`）及 Bounding Box 维度裁切，动态修改 `constant` 参数实现 X/Y/Z 轴实时逐层剖切。
