# Lodestone Android 投影预览应用

基于 [Lodestone](https://github.com/mattzh72/lodestone)（一种支持高效离线解析与渲染 Minecraft 投影 `.litematic` 文件的 3D 渲染库）开发的 Android 投影预览客户端。本应用利用 Android Native 的强大底座，结合 WebView 进行底层 offline 渲染及高交互性 3D 投影展示，提供原生流畅的操作体验。

---

## 🎨 材质包升级要点与解决方案 (Texture Pack Upgrade)

为了提升渲染精度并支持 Minecraft 1.21.4+ 最新方块材质（包含苍白木 Pale Oak 系列），本项目从 [zixijian/atlas](https://github.com/zixijian/atlas) 升级并自动合成了 2048x2048 主图集（Master Texture Atlas）。针对合成材质包中的错位、杂线以及特殊方块渲染问题，实施了以下技术方案：

### 1. zixijian/atlas 1px 边框剥离与像素精准对齐
- **问题分析**：`zixijian/atlas` 生成的子图集 PNG（`*.png_0.png`）为了防止贴图拼接渗色，在每个贴图四周加入了 1 像素的外包扩充边框。其 `.txt` 元数据文件中记录的坐标 `(x, y)` 是包含此 1px 扩充边框的左上角起点。直接提取会导致所有方块贴图在渲染时产生 1 像素的整体右上偏移（例如轨道 Rail 出现非对称 1px 错位）。
- **技术方案**：在 `scripts/build_atlas.js` 构建脚本中，解析元数据坐标时自动对起点进行 `+1` 像素校正（即取 `x + 1, y + 1`），提取出 1:1 绝对准确的原始贴图像素区域。

### 2. 图集 1px 像素挤出保护边 (Bleed Padding Extrusion)
- **问题分析**：在 2048x2048 拼接图集中，若贴图紧密相邻放置，GPU 双线性采样（Bilinear Filtering）和 WebGL Shader 半像素 Clamping 计算会在贴图边缘采样到邻近贴图的颜色，导致方块边缘出现黑线或异色杂线。
- **技术方案**：在主图集中为每个贴图四周保留 1px 保护边，并将贴图边缘像素向外延伸 1 像素（Edge Extrusion）。即使 GPU 在边缘进行插值采样，采到的也是完全一致的延伸像素，彻底消除了贴图边缘黑线。

### 3. 告示牌与悬挂告示牌（Sign & Hanging Sign）尺寸与贴图修复
- **尺寸一致性**：移除 Lodestone 引擎在渲染天花板垂直悬挂告示牌（`hanging_sign`）时默认施加的 `2/3` 缩小变换（`mat4.scale`），使天花板悬挂告示牌与侧挂告示牌（`wall_hanging_sign`）保持 100% 原始尺寸，并调整铁链模型位置使其贴合顶部方块。
- **苍白木（Pale Oak）支持**：在引擎 `WoodTypes` 中补充 `'pale_oak'` 与 `'poplar'` 木材类型，并映射 `entity/signs/pale_oak` 贴图路径，使苍白木普通告示牌与悬挂告示牌正常渲染。

### 4. 物品展示框（Item Frame & Glow Item Frame）NBT 实体解析
- **问题分析**：在 Litematica 投影结构中，物品展示框作为实体存储于 NBT Compound 的 `Entities` / `PendingBlockEntities` / `TileEntities` / `BlockEntities` 列表中，而非 `BlockStates` 方块网格数组中。
- **技术方案**：在 `loadRegionAsync` 中增加对 NBT 实体列表的提取逻辑，解析物品展示框的坐标（`Pos` 或 `TileX, Y, Z`）与 `Facing` 朝向，自动构建 `BlockState` 并插入渲染网格中，使普通物品展示框与发光物品展示框正常显示。

---

## 🚀 架构设计与渲染原理

本应用采用 **混合开发（Hybrid）架构**，将原生 Android 界面与 Web 3D 渲染进行整合：
- **数据流通**：Android 原生通过安全的文件流读取本地或 SAF（Storage Access Framework）选择的 `.litematic` 文件，并在 WebView 请求自定义虚拟域名 `https://appassets.androidplatform.net` 下的资源时，在 `shouldInterceptRequest` 阶段进行流式拦截并直接返回，无任何多余中介拷贝，速度极快。
- **3D 渲染**：利用 Three.js 与 Lodestone 的 `ThreeStructureRenderer` 在 Web 侧进行 GPU 加速的立体网格渲染。
- **状态同步**：通过 Android `JavascriptInterface` 建立高可靠双向通信桥（`AndroidHost`）。实现方块统计数据异步回传、解析出的子区域列表同步，以及原生 FloatingActionButton 触发 Web 视角控制、复位和子区域切换。

---

## 📐 大型投影文件 (5MB - 10MB+) 架构设计文档 (Design Architecture)

针对超过 2 万 / 5MB - 10MB 的大型 `.litematic` 投影文件，在 Android WebView 环境下实现的性能与全视距渲染架构设计如下：

### 1. 异步非阻塞 NBT 解析与流式加载 (Streaming NBT Parsing & Yielding)
- **时间片分包 (Time-sliced Batching)**：在 JavaScript 侧解码 NBT 方块流与生成 Structure 数据结构时，采用 `performance.now()` 时间片预算控制（每帧分配 ~12ms 执行预算），超出的数据分批通过 `requestAnimationFrame` 异步让出主线程控制权。
- **进度实时回传**：在 NBT 解码过程中，每批次计算解码进度，并通过 `window.AndroidHost.onLoadingProgress('DECODING_X%')` 实时通知 Android Native 端，更新原生进度条与百分比文本。

### 2. 增量渲染与渐进显示 (Incremental Progressive Mesh Rendering)
- **边解析边渲染**：摒弃传统“全部解析完成后才构建 Mesh 渲染”的阻塞模式。数据块解码完成后，增量更新 dirty chunk meshes 并实时添加到 Three.js Scene 场景中，实现“解析多少即在 3D 画面中准确位置渲染多少”。
- **渲染进度反馈**：随着 chunk mesh 的逐步构建，向 Native UI 发送 `RENDERING_X%` 状态更新，当 100% 构建完毕后发送 `SUCCESS` 隐藏原生加载控件。

### 3. 全视距完整显示与无限视距 (Infinite View & No Culling)
- **禁用 distance culling**：重写 `applyDrawDistance` 与 `getMeshEntriesInRange` 方法，在所有缩放比例和摄像机距离下，保持 100% 的 chunk mesh 处于 `visible = true` 状态，彻底消除缩小视距时的截断或消失现象。
- **无缝远裁剪平面 (Far Clip Plane & Fog Removal)**：动态调整 Camera 的 `far` 剪裁平面（扩展至 `100000.0`），并将阳光与环境雾化 (`fog.density`) 强制设为 `0.0`。
- **相机与视图适配**：在初始加载和重置视图时，根据模型的紧凑包围盒 (tight bounding box) 和正交/透视相机的 FOV 动态计算适配位置与 `frustum` 尺寸，使模型在任何屏幕分辨率（含 Android 竖屏）下均能填充 viewport 的 85%-90%，且缩小后整体轮廓清晰可辨。

---

## 🛠️ 编译与运行指南

1. **前端资源编译**：
   ```bash
   cd web_android
   npm install
   npm run build
   ```
   编译产生的文件会自动生成到 Android 工程下的 `assets/web/` 目录中。

2. **Android 编译**：
   建议在执行 Gradle 任务前清理缓存以排除中间编译产物干扰：
   ```bash
   ./gradlew clean
   ./gradlew assembleDebug
   ```
