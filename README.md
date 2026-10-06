# Lodestone Android 投影预览应用

基于 [Lodestone](https://github.com/mattzh72/lodestone) 与对标 Shulkr.com 极速 3D 渲染引擎重构的 Android 投影预览客户端。本应用利用 Android Native 的 SAF（Storage Access Framework）框架与零敏感权限设计，结合 WebView 进行底层 offline 渲染及高交互性 3D 投影展示，提供原生流畅的操作体验。

---

## 🚀 架构设计与渲染原理 (Zero-GC Architecture & Performance)

本应用采用 **混合开发（Hybrid）架构** 与 **零堆内存平铺 TypedArray 渲染引擎**：

### 1. 🛡️ 零权限 & SAF 框架 (Zero Permissions SAF Architecture)
- **零敏感权限**：彻底剔除 `READ_EXTERNAL_STORAGE` 与 `MANAGE_EXTERNAL_STORAGE` 权限申请。
- **SAF 系统级选择器**：全面采用原生 `ActivityResultContracts.OpenDocument()` 调起 SAF 选择器，选择 `.litematic` / `.schem` / `.nbt` / `.mcstructure` 投影文件或 `.zip` 自定义材质包，原生获得只读 Uri 授权，干净安全。

### 2. ⚡ 零堆内存平铺 TypedArray 引擎 (Flat Uint16Array Grid)
- **平铺 `Uint16Array(volume)` 网格**：解析过程摒弃 millions 级 JS 对象的分配（`storedBlocks`），将整个投影解构为紧凑的 TypedArray 网格，内存占用降低 98%（350 万方块仅占用约 7 MB 内存）。
- **秒开 32MB / 1000万+ 方块**：支持 32MB / 1000万+ 方块的超大型 Litematic 文件在 Android WebView 中秒级打开与流畅绘制，彻底消除 GC 卡顿与 OOM 内存溢出。
- **O(1) 极速遮挡剔除**：在平铺网格上直接基于数组偏移计算 6-方向邻居遮挡剔除（Occlusion Culling），几毫秒内即可完成单个 Chunk 的可见面剔除。

### 3. 🎥 60 FPS 流式渲染与高清像素质感 (Streaming Meshing & Pixel Sharpness)
- **渐进流式加载**：按 `32x32x32` 切割 Chunk，结合时间切片（Time-Slicing）按帧提交 GPU 几何体，配合 Native 进度条平滑过渡。
- **像素级高清采样**：设置 `THREE.NearestFilter` 邻近采样贴图，配合手机 `devicePixelRatio` 动态适配，呈现原汁原味的 Minecraft 像素风。
- **渲染主循环 Zero-Allocation**：预分配复用 Matrix4 对象，禁用 Chunk Mesh 的 `matrixAutoUpdate`（构建时更新一次），消除逐帧场景树遍历消耗，稳定 60 FPS。

### 4. 📦 最新 1.21.x 纹理包与动态材质替换 (Resource Pack & Textures)
- **全量补齐 1.21.x 纹理**：升级包含 Minecraft 1.21.x（含最新预览版/正式版）全套纹理 Atlas（`atlas.png`）与模型规则（`assets.json`），无任何白块或紫黑块。
- **动态替换材质包**：暴露 `window.loadCustomResourcePack` API，支持一键导入与切换自定义材质包。

### 5. 🧩 连体双箱子与物品展示框精准渲染 (Special Blocks Precision)
- **无缝连体双箱子**：精准解析 NBT 中的 `type` (`left`/`right`) 与 `facing`，合成双箱子拼合 Geometry 并豁免内部贴合面剔除。
- **物品展示框显示**：保留展示框模型几何体与双面材质，配置深度偏置（Depth Offset）解决墙面 Z-Fighting 深度卡帧闪烁。

### 6. ☀️ 场景控制与多视角 API
- `window.toggleDayNight()` / `window.setDayNight(isNight)`：白天/黑夜光照与天空底色一键切换。
- `window.toggleCameraView()`：透视/正交相机切换。
- `window.resetCamera()`：自动聚焦紧凑包围盒中心并重置摄像机位置。
- `window.switchRegion(regionName)`：子区域动态切换。

---

## 🛠️ 编译与运行指南

1. **前端资源编译**：
   ```bash
   cd web_android
   npm install
   npm run build
   ```
   编译产生的文件会自动生成到 Android 工程下的 `app/src/main/assets/web/` 目录中。

2. **Android 编译**：
   ```bash
   ./gradlew clean
   ./gradlew assembleDebug
   ```
