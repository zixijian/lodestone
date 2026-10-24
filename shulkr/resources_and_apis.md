# Shulkr 全量资源引用、CDN 路径、图集与 API 接口清单

本文档记录了 Shulkr 投影查看器用到的所有静态资源、媒体文件、图集路径及 CDN/REST 接口。

---

## 🌐 1. 主站与 CDN 基础 URL (Base URLs)

- **主站入口**：`https://www.shulkr.com/zh/viewer`
- **静态资源 CDN**：`https://cdn.shulkr.com`
- **主 JS Bundle 路径**：`https://www.shulkr.com/assets/index-DMalct6S.js`

---

## 📹 2. 演示视频与媒体资源 (Demo Videos & Media)

主页演示视频（MP4 格式）：
1. **环绕模式演示**：`https://www.shulkr.com/videos/orbit/video.mp4`
2. **飞行模式演示**：`https://www.shulkr.com/videos/free-fly/video.mp4`
3. **分层切片演示**：`https://www.shulkr.com/videos/slicer/video.mp4`

热门建筑 CDN 缩略图 (Isometric 3D Renders)：
1. **村民交易大厅**：`https://cdn.shulkr.com/cdn-cgi/image/width=400,quality=75,format=auto/renders/pMp1y97y6NQp/iso-ne.png`
2. **盔甲更换器**：`https://cdn.shulkr.com/cdn-cgi/image/width=400,quality=75,format=auto/renders/yEmYGkA4JAhs/iso-ne.png`
3. **男人洞穴**：`https://cdn.shulkr.com/cdn-cgi/image/width=400,quality=75,format=auto/renders/jeHtVzZMIAvk/iso-ne.png`
4. **Claude Rainbow Tower**：`https://cdn.shulkr.com/cdn-cgi/image/width=400,quality=75,format=auto/renders/oEYhTZgE1fgi/iso-ne.png`

---

## 📦 3. 核心 JS 逻辑 Chunk 依赖表 (JavaScript Chunks Index)

Shulkr 采用 Vite 分块加载，关键模块对应 URL 如下：

| Chunk 相对路径 | 对应功能模块 | 说明 |
| :--- | :--- | :--- |
| `assets/dist-DeQDX97N.js` | **主逻辑 & Parsers 库** | 包含 4 大投影格式解析、NBT Tag Tree、Minecraft Block Data 转换 |
| `assets/editor-assets-COznUb6X.js` | **3D 渲染与网格引擎** | 包含 Three.js、Chunk Mesh 构建、Clipping Planes 切片材质 |
| `assets/viewer-stage-qOhJDN-i.js` | **查看器 Stage 组装** | 负责 Canvas 挂载、Camera/Orbit 视角绑定 |
| `assets/viewer-overlay-Bbv2jc25.js` | **UI 交互叠加层** | 负责侧边栏、分层 Slider、格式转换按钮 UI |
| `assets/nbt-qNTBBFOo.js` | **NBT 二进制流处理** | 提供变长 BigInt / Float / Byte 数组读取 |
| `assets/blockStateParser-3kR-Ucao.js` | **方块状态解析** | 处理 `minecraft:stair[facing=north]` 类型的属性解析 |

---

## 🔗 4. 模组与相关技术链参考资源 (External Tooling Links)

- **Litematica Mod (Modrinth)**：`https://modrinth.com/mod/litematica`
- **MaLiLib Mod (Modrinth)**：`https://modrinth.com/mod/malilib`
- **WorldEdit Plugin (Modrinth)**：`https://modrinth.com/plugin/worldedit`
- **Fabric MC (Fabric Installer)**：`https://fabricmc.net/use/`
