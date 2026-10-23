# Shulkr 三大视角控制模式 (Orbit / Free-fly / Slicer) 交互算法

Shulkr 提供了三种针对 Minecraft 建筑查看和施工场景优化的交互模式：
1. **环绕模式 (Orbit Mode)**
2. **第一人称飞行模式 (Free-fly Mode)**
3. **分层切片模式 (Slicer Mode)**

---

## 🔄 1. 环绕模式 (Orbit Mode)

### 1.1 核心算法
- **相机类型**：透视相机 (`THREE.PerspectiveCamera`) 或 正交相机 (`THREE.OrthographicCamera`)。
- **控制器**：基于 `THREE.OrbitControls` 进行了惯性防抖与包围盒居中校准。
- **目标点定位 (Target Auto-Bounding)**：
  加载建筑后，首先计算全建筑的 Tight Axis-Aligned Bounding Box (AABB)：
  $$\mathbf{Center} = \frac{\mathbf{Min} + \mathbf{Max}}{2}$$
  将控制器的 `target` 锚定在 $\mathbf{Center}$，相机根据包围盒最大对角线长度 $D_{max}$ 保持适配距离：
  $$\text{Distance} = \frac{D_{max}}{2 \cdot \sin(\text{FOV} / 2)}$$

---

## ✈️ 2. 第一人称飞行模式 (Free-fly Mode)

### 2.1 交互控制机制
- **按键映射**：
  - `W` / `S`：沿相机视线方向 (LookVector) 前进 / 后退。
  - `A` / `D`：沿相机右向量 (RightVector) 左移 / 右移。
  - `Space` / `Shift`：沿世界坐标 $Y$ 轴垂直上升 / 下降。
- **穿墙模式 (No-Clip)**：
  碰撞检测默认关闭（即穿墙），允许玩家直接飞入建筑物内部查看红石线路和房间细节。
- **飞行速度调节**：
  可通过滚轮或 UI 滑块动态修改 `flySpeed` 参数（范围：0.1x - 5.0x）。

---

## 🔪 3. 分层切片模式 (Slicer Mode)

分层切片是生存玩家照着投影在游戏内施工的最核心工具。

### 3.1 Three.js 裁剪平面 (Clipping Planes) 算法

Shulkr 使用 Three.js `WebGLRenderer` 的原生裁剪平面机制，无需破坏或重新计算网格顶点 Buffer。

```typescript
// 初始化切片平面 (Clipping Plane)
import * as THREE from 'three';

// 创建沿 Y 轴向上裁剪的 Plane
// 法线方向为 (0, -1, 0)，表示裁剪掉 Y 坐标大于 constant 的所有几何顶点
const ySlicePlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), currentLayerY);

// 设置 WebGLRenderer 全局启用裁剪
renderer.clippingPlanes = [ySlicePlane];
renderer.localClippingEnabled = true;

// 动态修改切片层数 Y
function updateSliceLayer(targetY: number) {
  // constant 代表原点到平面的带符号距离
  ySlicePlane.constant = targetY + 0.5; // +0.5 保证完整包含当前层方块
}
```

### 3.2 三轴切片扩展 (X / Y / Z Axis Slicing)
除经典的 Y 轴逐层切片外，Shulkr 还支持 X 轴和 Z 轴剖切：
- **X 轴切片**：`Plane(Vector3(-1, 0, 0), limitX)`
- **Z 轴切片**：`Plane(Vector3(0, 0, -1), limitZ)`
- **双向高亮/盖板 (Layer Cap Overlay)**：
  在剖切断面上渲染一层半透明的暗色网格，突显当前正在施工的具体方块层。
