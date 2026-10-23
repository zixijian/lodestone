import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ShulkrRenderer } from './shulkrRenderer';
import { parseSchematic, SchematicData } from './schematicParser';
import { gunzipSync, decompressSync } from 'fflate';

declare global {
  interface Window {
    AndroidHost?: {
      onLoadingProgress: (status: string) => void;
      onRegionsParsed: (regionsJson: string) => void;
      onStatisticsUpdated: (totalBlocks: number, statsJson: string) => void;
    };
    loadLitematic: (base64Data?: string) => Promise<void>;
    switchRegion: (regionName: string) => Promise<void>;
    resetCamera: () => void;
    toggleCameraView: () => void;
    toggleDayNight: () => void;
    startRenderLoop: () => void;
    stopRenderLoop: () => void;
    destroyRenderer: () => void;
  }
}

let shulkr: ShulkrRenderer | null = null;
let controls: OrbitControls | null = null;
let currentSchematic: SchematicData | null = null;
let currentRegionName: string = 'Main';
let animationFrameId: number | null = null;
let isSlicerActive: boolean = false;

async function initApp(): Promise<void> {
  const container = document.getElementById('webgl-canvas-container');
  if (!container) return;

  shulkr = new ShulkrRenderer(container);
  controls = new OrbitControls(shulkr.getCamera(), shulkr.getRenderer().domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Touch screen controls tuning for mobile
  controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN
  };

  try {
    updateLoading('加载纹理图集与材质规则...', 20);
    await shulkr.initAssets('default-pack/');
    updateLoading('Shulkr 引擎已就绪', 100);

    setTimeout(() => {
      document.getElementById('loading-overlay')?.classList.add('hidden');
    }, 500);

    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('READY');
    }
  } catch (err: any) {
    console.error('Failed to init Shulkr:', err);
    updateLoading('初始化失败: ' + err?.message, 0);
    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('ERROR: ' + err?.message);
    }
  }

  setupUIEventListeners();
  startRenderLoop();
}

function updateLoading(msg: string, pct: number): void {
  const txt = document.getElementById('loading-text');
  if (txt) txt.textContent = msg;
}

function startRenderLoop(): void {
  if (animationFrameId !== null) return;
  const render = () => {
    animationFrameId = requestAnimationFrame(render);
    controls?.update();
    shulkr?.render();
  };
  render();
}

function stopRenderLoop(): void {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

function setupUIEventListeners(): void {
  // Reset Camera
  document.getElementById('btn-reset-cam')?.addEventListener('click', () => {
    resetCamera();
  });

  // Toggle Day/Night
  document.getElementById('btn-toggle-day')?.addEventListener('click', () => {
    shulkr?.toggleDayNight();
  });

  // Toggle Slicer
  const btnSlicer = document.getElementById('btn-toggle-slicer');
  const slicerCard = document.getElementById('slicer-card');
  btnSlicer?.addEventListener('click', () => {
    isSlicerActive = !isSlicerActive;
    if (isSlicerActive) {
      btnSlicer.classList.add('active');
      slicerCard?.classList.remove('hidden');
    } else {
      btnSlicer.classList.remove('active');
      slicerCard?.classList.add('hidden');
      if (currentSchematic && shulkr) {
        const reg = currentSchematic.regions[currentRegionName];
        if (reg) shulkr.setSliceY(reg.size.y);
      }
    }
  });

  // Slider change
  const slicerSlider = document.getElementById('slicer-slider') as HTMLInputElement;
  const layerValue = document.getElementById('layer-value');
  slicerSlider?.addEventListener('input', () => {
    const layer = parseInt(slicerSlider.value, 10);
    if (layerValue && currentSchematic) {
      const maxY = currentSchematic.regions[currentRegionName]?.size.y || 100;
      layerValue.textContent = `${layer} / ${maxY}`;
    }
    shulkr?.setSliceY(layer);
  });

  // Region select change
  const regionSelect = document.getElementById('region-select') as HTMLSelectElement;
  regionSelect?.addEventListener('change', () => {
    switchRegion(regionSelect.value);
  });
}

function resetCamera(): void {
  if (!shulkr || !controls || !currentSchematic) return;
  const reg = currentSchematic.regions[currentRegionName];
  if (!reg) return;

  const center = new THREE.Vector3(reg.size.x / 2, reg.size.y / 2, reg.size.z / 2);
  const maxDim = Math.max(reg.size.x, reg.size.y, reg.size.z);
  const dist = maxDim * 1.5;

  shulkr.getCamera().position.set(center.x + dist, center.y + dist * 0.8, center.z + dist);
  controls.target.copy(center);
  controls.update();
}

async function loadLitematic(base64Data?: string): Promise<void> {
  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('DECODING_0%');
  }
  document.getElementById('loading-overlay')?.classList.remove('hidden');
  updateLoading('正在解压并解析投影文件...', 10);

  try {
    let rawBytes: Uint8Array;
    if (base64Data && base64Data.length > 0) {
      const binaryString = atob(base64Data);
      rawBytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        rawBytes[i] = binaryString.charCodeAt(i);
      }
    } else {
      // Fallback test file if running standalone in browser
      const res = await fetch('sample.litematic');
      const ab = await res.arrayBuffer();
      rawBytes = new Uint8Array(ab);
    }

    // Try fflate GZIP / DEFLATE decompression if compressed
    let uncompressed: Uint8Array = rawBytes;
    try {
      if (rawBytes[0] === 0x1f && rawBytes[1] === 0x8b) {
        uncompressed = gunzipSync(rawBytes);
      } else {
        uncompressed = decompressSync(rawBytes);
      }
    } catch (e) {
      console.warn('Decompression skipped or failed, trying raw NBT bytes:', e);
    }

    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('DECODING_50%');
    }

    currentSchematic = parseSchematic(uncompressed);

    // Update UI badge
    const badge = document.getElementById('format-badge');
    if (badge) badge.textContent = currentSchematic.format.toUpperCase();

    // Populate Region Select
    const regionNames = Object.keys(currentSchematic.regions);
    const regionSelect = document.getElementById('region-select') as HTMLSelectElement;
    if (regionSelect) {
      regionSelect.innerHTML = '';
      regionNames.forEach(r => {
        const opt = document.createElement('option');
        opt.value = r;
        opt.textContent = r;
        regionSelect.appendChild(opt);
      });
      if (regionNames.length > 1) {
        regionSelect.classList.remove('hidden');
      } else {
        regionSelect.classList.add('hidden');
      }
    }

    if (window.AndroidHost) {
      window.AndroidHost.onRegionsParsed(JSON.stringify(regionNames));
    }

    currentRegionName = regionNames[0] || 'Main';
    await switchRegion(currentRegionName);

    document.getElementById('loading-overlay')?.classList.add('hidden');

    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('SUCCESS');
    }
  } catch (err: any) {
    console.error('Failed to parse schematic:', err);
    updateLoading('解析失败: ' + err?.message, 0);
    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('ERROR: ' + err?.message);
    }
  }
}

async function switchRegion(regionName: string): Promise<void> {
  if (!currentSchematic || !shulkr) return;
  const reg = currentSchematic.regions[regionName];
  if (!reg) return;

  currentRegionName = regionName;

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_0%');
  }

  shulkr.renderRegion(reg);

  // Configure Slicer Slider
  const slicerSlider = document.getElementById('slicer-slider') as HTMLInputElement;
  const layerValue = document.getElementById('layer-value');
  if (slicerSlider) {
    slicerSlider.min = '0';
    slicerSlider.max = String(reg.size.y);
    slicerSlider.value = String(reg.size.y);
  }
  if (layerValue) {
    layerValue.textContent = `${reg.size.y} / ${reg.size.y}`;
  }
  shulkr.setSliceY(reg.size.y);

  resetCamera();

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_100%');
    window.AndroidHost.onStatisticsUpdated(currentSchematic.totalBlocks, JSON.stringify(currentSchematic.blockStats));
  }
}

// Expose Android Host Global JS Bridge
window.loadLitematic = loadLitematic;
window.switchRegion = switchRegion;
window.resetCamera = resetCamera;
window.toggleCameraView = () => {};
window.toggleDayNight = () => { shulkr?.toggleDayNight(); };
window.startRenderLoop = startRenderLoop;
window.stopRenderLoop = stopRenderLoop;
window.destroyRenderer = () => {
  stopRenderLoop();
  shulkr?.clearScene();
};

window.addEventListener('DOMContentLoaded', () => {
  initApp();
});
