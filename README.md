# Lodestone Android 投影预览应用

基于 [Lodestone](https://github.com/mattzh72/lodestone)（一种支持高效离线解析与渲染 Minecraft 投影 `.litematic` 文件的 3D 渲染库）开发的 Android 投影预览客户端。本应用利用 Android Native 的强大底座，结合 WebView 进行底层 offline 渲染及高交互性 3D 投影展示，提供原生流畅的操作体验。

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
