import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gunzipSync, decompressSync } from 'fflate';

// Direct imports from shulkr/src/ core modules
import { parseLitematicBitArray } from '../../shulkr/src/parsers/litematic';
import { decodeVarintStream } from '../../shulkr/src/parsers/schem';
import { parseJavaNbtStructure } from '../../shulkr/src/parsers/nbt';
import { parseBedrockMcstructure } from '../../shulkr/src/parsers/mcstructure';
import { ChunkBuilder, AssetsData } from '../../shulkr/src/rendering/chunkBuilder';
import { SlicerController } from '../../shulkr/src/rendering/slicer';
import { ViewController } from '../../shulkr/src/controls/viewController';
import { NbtReader } from './nbtParser';

export interface BlockState {
  name: string;
  properties?: Record<string, string>;
}

export interface RegionData {
  name: string;
  size: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
  palette: BlockState[];
  blocksData: Uint16Array | Uint32Array;
}

export interface SchematicData {
  format: 'litematic' | 'schem' | 'nbt' | 'mcstructure';
  regions: Record<string, RegionData>;
  totalBlocks: number;
  blockStats: Record<string, number>;
}

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

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let viewController: ViewController;
let slicerController: SlicerController;

let assets: AssetsData | null = null;
let atlasTexture: THREE.Texture | null = null;
let opaqueMaterial: THREE.MeshLambertMaterial | null = null;
let transparentMaterial: THREE.MeshLambertMaterial | null = null;

let opaqueList = new Set<string>();
let transparentList = new Set<string>();

let chunkMeshes: THREE.Object3D[] = [];
let currentSchematic: SchematicData | null = null;
let currentRegionName: string = 'Main';
let animationFrameId: number | null = null;
let isSlicerActive: boolean = false;
let isDay: boolean = true;

let dirLight: THREE.DirectionalLight;
let hemiLight: THREE.HemisphereLight;

async function initApp(): Promise<void> {
  const container = document.getElementById('webgl-canvas-container');
  if (!container) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(30, 30, 30);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  container.appendChild(renderer.domElement);

  // Initialize Shulkr Controllers
  viewController = new ViewController(camera);
  slicerController = new SlicerController(renderer);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN
  };

  dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(50, 100, 50);
  scene.add(dirLight);

  hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
  scene.add(hemiLight);

  window.addEventListener('resize', onWindowResize);

  try {
    updateLoading('加载纹理图集与材质规则...', 20);
    await initAssets('default-pack/');
    updateLoading('Shulkr 引擎已就绪', 100);

    setTimeout(() => {
      document.getElementById('loading-overlay')?.classList.add('hidden');
    }, 500);

    if (window.AndroidHost) {
      window.AndroidHost.onLoadingProgress('READY');
    } else {
      // Auto-load sample/model in browser
      loadLitematic().catch(() => {});
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

async function initAssets(baseUrl: string): Promise<void> {
  const assetsRes = await fetch(`${baseUrl}assets.json`);
  assets = await assetsRes.json();

  const opaqueTxt = await (await fetch(`${baseUrl}block-flags/opaque.txt`)).text();
  opaqueTxt.split('\n').map(s => s.trim()).filter(Boolean).forEach(b => {
    let key = b.startsWith('minecraft:') ? b.substring(10) : b;
    opaqueList.add(key);
    opaqueList.add('minecraft:' + key);
  });

  const transparentTxt = await (await fetch(`${baseUrl}block-flags/transparent.txt`)).text();
  transparentTxt.split('\n').map(s => s.trim()).filter(Boolean).forEach(b => {
    let key = b.startsWith('minecraft:') ? b.substring(10) : b;
    transparentList.add(key);
    transparentList.add('minecraft:' + key);
  });

  const loader = new THREE.TextureLoader();
  atlasTexture = await new Promise((resolve, reject) => {
    loader.load(
      `${baseUrl}atlas.png`,
      tex => {
        tex.magFilter = THREE.NearestFilter;
        tex.minFilter = THREE.NearestFilter;
        tex.colorSpace = THREE.SRGBColorSpace;
        resolve(tex);
      },
      undefined,
      reject
    );
  });

  opaqueMaterial = new THREE.MeshLambertMaterial({
    map: atlasTexture,
    side: THREE.FrontSide,
    vertexColors: true,
    clippingPlanes: [slicerController.getClippingPlane()]
  });

  transparentMaterial = new THREE.MeshLambertMaterial({
    map: atlasTexture,
    transparent: true,
    opacity: 0.8,
    depthWrite: false,
    side: THREE.DoubleSide,
    vertexColors: true,
    clippingPlanes: [slicerController.getClippingPlane()]
  });
}

function updateLoading(msg: string, pct: number): void {
  const txt = document.getElementById('loading-text');
  if (txt) txt.textContent = msg;
}

function startRenderLoop(): void {
  if (animationFrameId !== null) return;
  const render = () => {
    animationFrameId = requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
  };
  render();
}

function stopRenderLoop(): void {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

function onWindowResize(): void {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function clearScene(): void {
  for (const mesh of chunkMeshes) {
    scene.remove(mesh);
    if (mesh instanceof THREE.Mesh) {
      mesh.geometry.dispose();
    }
  }
  chunkMeshes = [];
}

async function renderRegionAsync(region: RegionData): Promise<void> {
  clearScene();
  if (!assets || !atlasTexture) return;

  const { size } = region;
  const chunkSize = ChunkBuilder.CHUNK_SIZE;
  const chunksX = Math.ceil(size.x / chunkSize);
  const chunksY = Math.ceil(size.y / chunkSize);
  const chunksZ = Math.ceil(size.z / chunkSize);

  let processed = 0;
  const totalChunks = chunksX * chunksY * chunksZ;

  for (let cx = 0; cx < chunksX; cx++) {
    for (let cy = 0; cy < chunksY; cy++) {
      for (let cz = 0; cz < chunksZ; cz++) {
        buildChunkMesh(region, cx, cy, cz, chunkSize);
        processed++;
        if (processed % 10 === 0) {
          const pct = Math.floor((processed / totalChunks) * 100);
          if (window.AndroidHost) {
            window.AndroidHost.onLoadingProgress(`RENDERING_${pct}%`);
          }
          await new Promise(r => setTimeout(r, 0));
        }
      }
    }
  }
}

const faceDirMap: Record<string, [number, number, number]> = {
  up: [0, 1, 0],
  down: [0, -1, 0],
  south: [0, 0, 1],
  north: [0, 0, -1],
  east: [1, 0, 0],
  west: [-1, 0, 0]
};

function getFluidBlockInfo(region: RegionData, x: number, y: number, z: number): { isFluid: boolean; isWater: boolean; level: number } | null {
  if (x < 0 || y < 0 || z < 0 || x >= region.size.x || y >= region.size.y || z >= region.size.z) {
    return null;
  }
  const idx = (y * region.size.z + z) * region.size.x + x;
  const palIdx = region.blocksData[idx];
  if (!palIdx) return null;
  const bState = region.palette[palIdx];
  if (!bState) return null;
  const cleanName = bState.name.startsWith('minecraft:') ? bState.name.substring(10) : bState.name;
  if (cleanName === 'water' || cleanName === 'lava' || cleanName === 'flowing_water' || cleanName === 'flowing_lava') {
    const level = bState.properties?.level ? parseInt(bState.properties.level, 10) : 0;
    return { isFluid: true, isWater: cleanName.includes('water'), level };
  }
  return null;
}

function getFluidCellHeight(region: RegionData, x: number, y: number, z: number): number {
  const info = getFluidBlockInfo(region, x, y, z);
  if (!info || !info.isFluid) return 0;
  const above = getFluidBlockInfo(region, x, y + 1, z);
  if (above && above.isFluid) return 1.0;
  if (info.level >= 8) return 1.0;
  return Math.max(0.125, (15 - info.level * 1.8) / 16);
}

function getCornerFluidHeight(region: RegionData, x: number, y: number, z: number, cornerX: 0 | 1, cornerZ: 0 | 1): number {
  const dxs = cornerX === 0 ? [0, -1] : [0, 1];
  const dzs = cornerZ === 0 ? [0, -1] : [0, 1];
  let sum = 0;
  let count = 0;
  for (const dx of dxs) {
    for (const dz of dzs) {
      const h = getFluidCellHeight(region, x + dx, y, z + dz);
      if (h > 0) {
        sum += h;
        count++;
      }
    }
  }
  return count > 0 ? sum / count : 1.0;
}

function buildChunkMesh(region: RegionData, cx: number, cy: number, cz: number, chunkSize: number): void {
  const minX = cx * chunkSize;
  const maxX = Math.min((cx + 1) * chunkSize, region.size.x);
  const minY = cy * chunkSize;
  const maxY = Math.min((cy + 1) * chunkSize, region.size.y);
  const minZ = cz * chunkSize;
  const maxZ = Math.min((cz + 1) * chunkSize, region.size.z);

  const opPositions: number[] = [];
  const opNormals: number[] = [];
  const opUvs: number[] = [];
  const opColors: number[] = [];
  const opIndices: number[] = [];

  const trPositions: number[] = [];
  const trNormals: number[] = [];
  const trUvs: number[] = [];
  const trColors: number[] = [];
  const trIndices: number[] = [];

  let opVertexCount = 0;
  let trVertexCount = 0;

  const faces = [
    { name: 'up', dir: [0, 1, 0], norm: [0, 1, 0] },
    { name: 'down', dir: [0, -1, 0], norm: [0, -1, 0] },
    { name: 'south', dir: [0, 0, 1], norm: [0, 0, 1] },
    { name: 'north', dir: [0, 0, -1], norm: [0, 0, -1] },
    { name: 'east', dir: [1, 0, 0], norm: [1, 0, 0] },
    { name: 'west', dir: [-1, 0, 0], norm: [-1, 0, 0] }
  ];

  for (let x = minX; x < maxX; x++) {
    for (let y = minY; y < maxY; y++) {
      for (let z = minZ; z < maxZ; z++) {
        const idx = (y * region.size.z + z) * region.size.x + x;
        const palIdx = region.blocksData[idx];
        if (!palIdx) continue;
        const bState = region.palette[palIdx];
        if (!bState) continue;

        const cleanName = bState.name.startsWith('minecraft:') ? bState.name.substring(10) : bState.name;
        const fluidInfo = getFluidBlockInfo(region, x, y, z);

        if (fluidInfo && fluidInfo.isFluid) {
          // Custom Smooth Fluid Mesh
          const h00 = getCornerFluidHeight(region, x, y, z, 0, 0);
          const h10 = getCornerFluidHeight(region, x, y, z, 1, 0);
          const h11 = getCornerFluidHeight(region, x, y, z, 1, 1);
          const h01 = getCornerFluidHeight(region, x, y, z, 0, 1);

          const texName = fluidInfo.isWater ? 'block/water_still' : 'block/lava_still';
          const { u0, v0, u1, v1 } = ChunkBuilder.getTextureUV(assets!, texName);

          const fluidColor: [number, number, number] = fluidInfo.isWater
            ? [0.25, 0.46, 0.89] // Water tint
            : [1.0, 1.0, 1.0];

          // Up face
          const aboveInfo = getFluidBlockInfo(region, x, y + 1, z);
          if (!aboveInfo || !aboveInfo.isFluid) {
            trPositions.push(
              x, y + h01, z + 1,
              x + 1, y + h11, z + 1,
              x + 1, y + h10, z,
              x, y + h00, z
            );
            for (let i = 0; i < 4; i++) {
              trNormals.push(0, 1, 0);
              trColors.push(...fluidColor);
            }
            trUvs.push(u0, v1, u1, v1, u1, v0, u0, v0);
            trIndices.push(
              trVertexCount, trVertexCount + 1, trVertexCount + 2,
              trVertexCount, trVertexCount + 2, trVertexCount + 3
            );
            trVertexCount += 4;
          }

          // Down face
          const belowInfo = getFluidBlockInfo(region, x, y - 1, z);
          if (!belowInfo || !belowInfo.isFluid) {
            const neighborName = getNeighborBlockName(region, x, y - 1, z);
            if (!ChunkBuilder.isFaceOpaque(neighborName, opaqueList)) {
              trPositions.push(
                x, y, z,
                x + 1, y, z,
                x + 1, y, z + 1,
                x, y, z + 1
              );
              for (let i = 0; i < 4; i++) {
                trNormals.push(0, -1, 0);
                trColors.push(...fluidColor);
              }
              trUvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
              trIndices.push(
                trVertexCount, trVertexCount + 1, trVertexCount + 2,
                trVertexCount, trVertexCount + 2, trVertexCount + 3
              );
              trVertexCount += 4;
            }
          }

          // South face (+Z)
          const southInfo = getFluidBlockInfo(region, x, y, z + 1);
          if (!southInfo || !southInfo.isFluid) {
            const neighborName = getNeighborBlockName(region, x, y, z + 1);
            if (!ChunkBuilder.isFaceOpaque(neighborName, opaqueList)) {
              trPositions.push(
                x, y, z + 1,
                x + 1, y, z + 1,
                x + 1, y + h11, z + 1,
                x, y + h01, z + 1
              );
              for (let i = 0; i < 4; i++) {
                trNormals.push(0, 0, 1);
                trColors.push(...fluidColor);
              }
              trUvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
              trIndices.push(
                trVertexCount, trVertexCount + 1, trVertexCount + 2,
                trVertexCount, trVertexCount + 2, trVertexCount + 3
              );
              trVertexCount += 4;
            }
          }

          // North face (-Z)
          const northInfo = getFluidBlockInfo(region, x, y, z - 1);
          if (!northInfo || !northInfo.isFluid) {
            const neighborName = getNeighborBlockName(region, x, y, z - 1);
            if (!ChunkBuilder.isFaceOpaque(neighborName, opaqueList)) {
              trPositions.push(
                x + 1, y, z,
                x, y, z,
                x, y + h00, z,
                x + 1, y + h10, z
              );
              for (let i = 0; i < 4; i++) {
                trNormals.push(0, 0, -1);
                trColors.push(...fluidColor);
              }
              trUvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
              trIndices.push(
                trVertexCount, trVertexCount + 1, trVertexCount + 2,
                trVertexCount, trVertexCount + 2, trVertexCount + 3
              );
              trVertexCount += 4;
            }
          }

          // East face (+X)
          const eastInfo = getFluidBlockInfo(region, x + 1, y, z);
          if (!eastInfo || !eastInfo.isFluid) {
            const neighborName = getNeighborBlockName(region, x + 1, y, z);
            if (!ChunkBuilder.isFaceOpaque(neighborName, opaqueList)) {
              trPositions.push(
                x + 1, y, z + 1,
                x + 1, y, z,
                x + 1, y + h10, z,
                x + 1, y + h11, z + 1
              );
              for (let i = 0; i < 4; i++) {
                trNormals.push(1, 0, 0);
                trColors.push(...fluidColor);
              }
              trUvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
              trIndices.push(
                trVertexCount, trVertexCount + 1, trVertexCount + 2,
                trVertexCount, trVertexCount + 2, trVertexCount + 3
              );
              trVertexCount += 4;
            }
          }

          // West face (-X)
          const westInfo = getFluidBlockInfo(region, x - 1, y, z);
          if (!westInfo || !westInfo.isFluid) {
            const neighborName = getNeighborBlockName(region, x - 1, y, z);
            if (!ChunkBuilder.isFaceOpaque(neighborName, opaqueList)) {
              trPositions.push(
                x, y, z,
                x, y, z + 1,
                x, y + h01, z + 1,
                x, y + h00, z
              );
              for (let i = 0; i < 4; i++) {
                trNormals.push(-1, 0, 0);
                trColors.push(...fluidColor);
              }
              trUvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
              trIndices.push(
                trVertexCount, trVertexCount + 1, trVertexCount + 2,
                trVertexCount, trVertexCount + 2, trVertexCount + 3
              );
              trVertexCount += 4;
            }
          }

          continue;
        }

        const resolvedModel = ChunkBuilder.resolveBlockModel(assets!, bState.name, bState.properties);
        const isOpaque = ChunkBuilder.isFaceOpaque(bState.name, opaqueList);

        if (resolvedModel && resolvedModel.elements.length > 0) {
          // Model-driven rendering
          for (const el of resolvedModel.elements) {
            for (const faceKey in el.faces) {
              const face = el.faces[faceKey];
              if (face.cullface) {
                const cullDir = ChunkBuilder.getRotatedCullDirection(
                  face.cullface,
                  resolvedModel.rotX,
                  resolvedModel.rotY,
                  resolvedModel.rotZ
                );
                if (cullDir && ChunkBuilder.isElementFaceOnBoundary(el, faceKey)) {
                  const neighborName = getNeighborBlockName(region, x + cullDir[0], y + cullDir[1], z + cullDir[2]);
                  if (ChunkBuilder.isFaceOpaque(neighborName, opaqueList)) {
                    continue; // Skip face if culled by opaque neighbor at block boundary
                  }
                }
              }

              const quadData = ChunkBuilder.getTransformedElementFace(
                assets!,
                x,
                y,
                z,
                el,
                faceKey,
                face,
                resolvedModel.rotX,
                resolvedModel.rotY,
                resolvedModel.rotZ
              );

              if (isOpaque) {
                opPositions.push(...quadData.positions);
                opNormals.push(...quadData.normals);
                opUvs.push(...quadData.uvs);
                for (let i = 0; i < 4; i++) opColors.push(1.0, 1.0, 1.0);
                opIndices.push(
                  opVertexCount, opVertexCount + 1, opVertexCount + 2,
                  opVertexCount, opVertexCount + 2, opVertexCount + 3
                );
                opVertexCount += 4;
              } else {
                trPositions.push(...quadData.positions);
                trNormals.push(...quadData.normals);
                trUvs.push(...quadData.uvs);
                for (let i = 0; i < 4; i++) trColors.push(1.0, 1.0, 1.0);
                trIndices.push(
                  trVertexCount, trVertexCount + 1, trVertexCount + 2,
                  trVertexCount, trVertexCount + 2, trVertexCount + 3
                );
                trVertexCount += 4;
              }
            }
          }
        } else {
          // Fallback basic block rendering
          for (const f of faces) {
            const nx = x + f.dir[0];
            const ny = y + f.dir[1];
            const nz = z + f.dir[2];

            if (isOpaque && ChunkBuilder.isFaceOpaque(getNeighborBlockName(region, nx, ny, nz), opaqueList)) {
              continue;
            }

            const quadVertices = ChunkBuilder.getFaceVertices(x, y, z, f.name);
            const { u0, v0, u1, v1 } = ChunkBuilder.getTextureUV(assets!, bState.name, f.name);
            const quadUvs = [u0, v1, u0, v0, u1, v0, u1, v1];

            if (isOpaque) {
              opPositions.push(...quadVertices);
              for (let i = 0; i < 4; i++) {
                opNormals.push(...f.norm);
                opColors.push(1.0, 1.0, 1.0);
              }
              opUvs.push(...quadUvs);
              opIndices.push(
                opVertexCount, opVertexCount + 1, opVertexCount + 2,
                opVertexCount, opVertexCount + 2, opVertexCount + 3
              );
              opVertexCount += 4;
            } else {
              trPositions.push(...quadVertices);
              for (let i = 0; i < 4; i++) {
                trNormals.push(...f.norm);
                trColors.push(1.0, 1.0, 1.0);
              }
              trUvs.push(...quadUvs);
              trIndices.push(
                trVertexCount, trVertexCount + 1, trVertexCount + 2,
                trVertexCount, trVertexCount + 2, trVertexCount + 3
              );
              trVertexCount += 4;
            }
          }
        }
      }
    }
  }

  if (opPositions.length > 0 && opaqueMaterial) {
    const mesh = ChunkBuilder.buildChunkMesh(opPositions, opNormals, opUvs, opIndices, opaqueMaterial, opColors);
    scene.add(mesh);
    chunkMeshes.push(mesh);
  }

  if (trPositions.length > 0 && transparentMaterial) {
    const mesh = ChunkBuilder.buildChunkMesh(trPositions, trNormals, trUvs, trIndices, transparentMaterial, trColors);
    scene.add(mesh);
    chunkMeshes.push(mesh);
  }
}

function getNeighborBlockName(region: RegionData, x: number, y: number, z: number): string {
  if (x < 0 || y < 0 || z < 0 || x >= region.size.x || y >= region.size.y || z >= region.size.z) {
    return 'minecraft:air';
  }
  const idx = (y * region.size.z + z) * region.size.x + x;
  const palIdx = region.blocksData[idx];
  if (!palIdx) return 'minecraft:air';
  return region.palette[palIdx]?.name || 'minecraft:air';
}

function resetCamera(): void {
  if (!currentSchematic) return;
  const reg = currentSchematic.regions[currentRegionName];
  if (!reg) return;

  const min = new THREE.Vector3(0, 0, 0);
  const max = new THREE.Vector3(reg.size.x, reg.size.y, reg.size.z);
  const center = new THREE.Vector3().addVectors(min, max).multiplyScalar(0.5);
  viewController.recenterTarget(center, controls.target);
  controls.update();
}

async function parseSchematic(buffer: ArrayBuffer | Uint8Array): Promise<SchematicData> {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);

  let uncompressed = bytes;
  try {
    if (bytes[0] === 0x1f && bytes[1] === 0x8b) {
      uncompressed = gunzipSync(bytes);
    } else {
      uncompressed = decompressSync(bytes);
    }
  } catch (e) {
    console.warn('Decompression skipped/failed:', e);
  }

  // Parse NBT structure using shulkr/src/parsers/
  let rootNbt: any = null;
  try {
    const reader = new NbtReader(uncompressed, false);
    rootNbt = reader.parseRoot().value;
  } catch (e) {
    const readerLE = new NbtReader(uncompressed, true);
    rootNbt = readerLE.parseRoot().value;
  }

  if (rootNbt.Regions || rootNbt.Version) {
    return processLitematic(rootNbt);
  } else if (rootNbt.Sponge || rootNbt.Palette || rootNbt.BlockData) {
    return processSchem(rootNbt);
  } else if (rootNbt.size && rootNbt.palette && rootNbt.blocks) {
    return processJavaNbt(rootNbt);
  } else if (rootNbt.format_version || rootNbt.structure) {
    return processMcstructure(rootNbt);
  }

  throw new Error('Unsupported schematic format');
}

function processLitematic(root: any): SchematicData {
  const regions: Record<string, RegionData> = {};
  const blockStats: Record<string, number> = {};
  let totalBlocks = 0;

  const rawRegions = root.Regions || {};
  for (const regName of Object.keys(rawRegions)) {
    const reg = rawRegions[regName];
    const size = {
      x: Math.abs(Number(reg.Size?.x ?? reg.Size?.X ?? 0)),
      y: Math.abs(Number(reg.Size?.y ?? reg.Size?.Y ?? 0)),
      z: Math.abs(Number(reg.Size?.z ?? reg.Size?.Z ?? 0))
    };
    const pos = {
      x: Number(reg.Position?.x ?? reg.Position?.X ?? 0),
      y: Number(reg.Position?.y ?? reg.Position?.Y ?? 0),
      z: Number(reg.Position?.z ?? reg.Position?.Z ?? 0)
    };

    const paletteTags = reg.BlockStatePalette || [];
    const palette: BlockState[] = paletteTags.map((p: any) => ({
      name: String(p.Name || 'minecraft:air'),
      properties: p.Properties ? Object.fromEntries(Object.entries(p.Properties).map(([k, v]) => [k, String(v)])) : undefined
    }));

    const volume = size.x * size.y * size.z;
    const blocksData = new Uint16Array(volume);

    if (reg.BlockStates && palette.length > 0) {
      const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(palette.length)));
      const decodedIndices = parseLitematicBitArray(reg.BlockStates, bitsPerBlock, volume);

      for (let y = 0; y < size.y; y++) {
        for (let z = 0; z < size.z; z++) {
          for (let x = 0; x < size.x; x++) {
            const index = (y * size.z + z) * size.x + x;
            const palIdx = decodedIndices[index];
            if (palIdx > 0 && palIdx < palette.length) {
              const bState = palette[palIdx];
              if (bState && bState.name !== 'minecraft:air' && bState.name !== 'air') {
                blocksData[index] = palIdx;
                totalBlocks++;
                blockStats[bState.name] = (blockStats[bState.name] || 0) + 1;
              }
            }
          }
        }
      }
    }

    regions[regName] = { name: regName, size, position: pos, palette, blocksData };
  }

  return { format: 'litematic', regions, totalBlocks, blockStats };
}

function processSchem(root: any): SchematicData {
  const schemRoot = root.Sponge || root;
  const width = Number(schemRoot.Width || root.Width || 0);
  const height = Number(schemRoot.Height || root.Height || 0);
  const length = Number(schemRoot.Length || root.Length || 0);

  const rawPalette = schemRoot.Palette || root.Palette || {};
  const paletteList: BlockState[] = [];
  const paletteMap = new Map<number, number>();

  for (const [key, val] of Object.entries(rawPalette)) {
    const rawIdx = Number(val);
    const cleanName = key.split('[')[0];
    let properties: Record<string, string> | undefined = undefined;
    if (key.includes('[')) {
      const propStr = key.substring(key.indexOf('[') + 1, key.indexOf(']'));
      properties = {};
      for (const pair of propStr.split(',')) {
        const [k, v] = pair.split('=');
        if (k && v) properties[k] = v;
      }
    }
    const bState: BlockState = { name: cleanName, properties };

    let listIdx = paletteList.length;
    paletteList.push(bState);
    paletteMap.set(rawIdx, listIdx);
  }

  const blockDataBytes = schemRoot.BlockData || root.BlockData || new Uint8Array(0);
  const totalVolume = width * height * length;
  const decoded = decodeVarintStream(blockDataBytes, totalVolume);

  const blocksData = new Uint16Array(totalVolume);
  const blockStats: Record<string, number> = {};
  let totalBlocks = 0;

  for (let y = 0; y < height; y++) {
    for (let z = 0; z < length; z++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * length + z) * width + x;
        const rawPalIdx = decoded[idx];
        const palIdx = paletteMap.get(rawPalIdx) ?? 0;
        const bState = paletteList[palIdx];
        if (bState && bState.name !== 'minecraft:air' && bState.name !== 'air') {
          blocksData[idx] = palIdx;
          totalBlocks++;
          blockStats[bState.name] = (blockStats[bState.name] || 0) + 1;
        }
      }
    }
  }

  const region: RegionData = {
    name: 'Main',
    size: { x: width, y: height, z: length },
    position: { x: 0, y: 0, z: 0 },
    palette: paletteList,
    blocksData
  };

  return { format: 'schem', regions: { Main: region }, totalBlocks, blockStats };
}

function processJavaNbt(root: any): SchematicData {
  const parsed = parseJavaNbtStructure(root);
  const size = { x: parsed.size[0], y: parsed.size[1], z: parsed.size[2] };

  const palette: BlockState[] = parsed.palette.map(p => ({
    name: String(p.Name || 'minecraft:air'),
    properties: p.Properties ? Object.fromEntries(Object.entries(p.Properties).map(([k, v]) => [k, String(v)])) : undefined
  }));

  const volume = size.x * size.y * size.z;
  const blocksData = new Uint16Array(volume);
  const blockStats: Record<string, number> = {};
  let totalBlocks = 0;

  for (const b of parsed.blocks) {
    const palIdx = b.state;
    const bState = palette[palIdx];
    if (bState && bState.name !== 'minecraft:air' && bState.name !== 'air') {
      const idx = (b.pos[1] * size.z + b.pos[2]) * size.x + b.pos[0];
      if (idx >= 0 && idx < volume) {
        blocksData[idx] = palIdx;
        totalBlocks++;
        blockStats[bState.name] = (blockStats[bState.name] || 0) + 1;
      }
    }
  }

  const region: RegionData = {
    name: 'Main',
    size,
    position: { x: 0, y: 0, z: 0 },
    palette,
    blocksData
  };

  return { format: 'nbt', regions: { Main: region }, totalBlocks, blockStats };
}

function processMcstructure(root: any): SchematicData {
  const parsed = parseBedrockMcstructure(root);
  const size = { x: parsed.size[0], y: parsed.size[1], z: parsed.size[2] };

  const palette: BlockState[] = parsed.palette.map(p => ({
    name: String(p.name || 'minecraft:air'),
    properties: p.states ? Object.fromEntries(Object.entries(p.states).map(([k, v]) => [k, String(v)])) : undefined
  }));

  const volume = size.x * size.y * size.z;
  const blocksData = new Uint16Array(volume);
  const blockStats: Record<string, number> = {};
  let totalBlocks = 0;

  for (let x = 0; x < size.x; x++) {
    for (let y = 0; y < size.y; y++) {
      for (let z = 0; z < size.z; z++) {
        const mcIdx = (x * size.y + y) * size.z + z;
        const palIdx = parsed.layer0Indices[mcIdx];
        if (palIdx >= 0 && palIdx < palette.length) {
          const bState = palette[palIdx];
          if (bState && bState.name !== 'minecraft:air' && bState.name !== 'air') {
            const stdIdx = (y * size.z + z) * size.x + x;
            blocksData[stdIdx] = palIdx;
            totalBlocks++;
            blockStats[bState.name] = (blockStats[bState.name] || 0) + 1;
          }
        }
      }
    }
  }

  const region: RegionData = {
    name: 'Main',
    size,
    position: { x: 0, y: 0, z: 0 },
    palette,
    blocksData
  };

  return { format: 'mcstructure', regions: { Main: region }, totalBlocks, blockStats };
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
      let res = await fetch('model.litematic');
      if (!res.ok) res = await fetch('sample.litematic');
      const ab = await res.arrayBuffer();
      rawBytes = new Uint8Array(ab);
    }

    currentSchematic = await parseSchematic(rawBytes);

    const badge = document.getElementById('format-badge');
    if (badge) badge.textContent = currentSchematic.format.toUpperCase();

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
  if (!currentSchematic) return;
  const reg = currentSchematic.regions[regionName];
  if (!reg) return;

  currentRegionName = regionName;

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_0%');
  }

  await renderRegionAsync(reg);

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
  slicerController.setLayer(reg.size.y);

  const min = new THREE.Vector3(0, 0, 0);
  const max = new THREE.Vector3(reg.size.x, reg.size.y, reg.size.z);
  viewController.frameBoundingBox(min, max, controls.target);
  controls.update();

  if (window.AndroidHost) {
    window.AndroidHost.onLoadingProgress('RENDERING_100%');
    window.AndroidHost.onStatisticsUpdated(currentSchematic.totalBlocks, JSON.stringify(currentSchematic.blockStats));
  }
}

function setupUIEventListeners(): void {
  document.getElementById('btn-reset-cam')?.addEventListener('click', resetCamera);

  document.getElementById('btn-toggle-day')?.addEventListener('click', () => {
    isDay = !isDay;
    scene.background = new THREE.Color(isDay ? 0x87ceeb : 0x000000);
    dirLight.intensity = isDay ? 1.2 : 0.2;
  });

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
      if (currentSchematic) {
        const reg = currentSchematic.regions[currentRegionName];
        if (reg) slicerController.setLayer(reg.size.y);
      }
    }
  });

  const slicerSlider = document.getElementById('slicer-slider') as HTMLInputElement;
  const layerValue = document.getElementById('layer-value');
  slicerSlider?.addEventListener('input', () => {
    const layer = parseInt(slicerSlider.value, 10);
    if (layerValue && currentSchematic) {
      const maxY = currentSchematic.regions[currentRegionName]?.size.y || 100;
      layerValue.textContent = `${layer} / ${maxY}`;
    }
    slicerController.setLayer(layer);
  });

  const regionSelect = document.getElementById('region-select') as HTMLSelectElement;
  regionSelect?.addEventListener('change', () => {
    switchRegion(regionSelect.value);
  });
}

// Expose Android Host Global JS Bridge
window.loadLitematic = loadLitematic;
window.switchRegion = switchRegion;
window.resetCamera = resetCamera;
window.toggleCameraView = () => {};
window.toggleDayNight = () => {
  isDay = !isDay;
  scene.background = new THREE.Color(isDay ? 0x87ceeb : 0x000000);
  dirLight.intensity = isDay ? 1.2 : 0.2;
};
(window as any).setBackgroundColor = (colorHex: string | number) => {
  if (scene) {
    scene.background = new THREE.Color(colorHex);
  }
};
window.startRenderLoop = startRenderLoop;
window.stopRenderLoop = stopRenderLoop;
window.destroyRenderer = () => {
  stopRenderLoop();
  clearScene();
};

window.addEventListener('DOMContentLoaded', () => {
  initApp();
});
