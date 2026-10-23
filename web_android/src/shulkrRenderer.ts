import * as THREE from 'three';
import { RegionData, BlockState } from './schematicParser';

export interface UVRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface AssetsData {
  textures: Record<string, [number, number, number, number]>;
}

export class ShulkrRenderer {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private assets: AssetsData | null = null;
  private atlasTexture: THREE.Texture | null = null;

  private opaqueMaterial: THREE.MeshLambertMaterial | null = null;
  private transparentMaterial: THREE.MeshLambertMaterial | null = null;

  private opaqueList = new Set<string>();
  private transparentList = new Set<string>();

  private chunkMeshes: THREE.Object3D[] = [];
  private clippingPlaneY: THREE.Plane;
  private clippingPlaneX: THREE.Plane;
  private clippingPlaneZ: THREE.Plane;

  private isDay: boolean = true;
  private dirLight: THREE.DirectionalLight;
  private hemiLight: THREE.HemisphereLight;

  constructor(container: HTMLElement) {
    this.container = container;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb);

    // Camera
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(30, 30, 30);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.localClippingEnabled = true;
    container.appendChild(this.renderer.domElement);

    // Lights
    this.dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    this.dirLight.position.set(50, 100, 50);
    this.scene.add(this.dirLight);

    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
    this.scene.add(this.hemiLight);

    // Clipping planes
    this.clippingPlaneY = new THREE.Plane(new THREE.Vector3(0, -1, 0), 1000);
    this.clippingPlaneX = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 1000);
    this.clippingPlaneZ = new THREE.Plane(new THREE.Vector3(0, 0, -1), 1000);

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  public async initAssets(baseUrl: string = 'default-pack/'): Promise<void> {
    const assetsRes = await fetch(`${baseUrl}assets.json`);
    this.assets = await assetsRes.json();

    const opaqueTxt = await (await fetch(`${baseUrl}block-flags/opaque.txt`)).text();
    opaqueTxt.split('\n').map(s => s.trim()).filter(Boolean).forEach(b => {
      let key = b.startsWith('minecraft:') ? b.substring(10) : b;
      this.opaqueList.add(key);
      this.opaqueList.add('minecraft:' + key);
    });

    const transparentTxt = await (await fetch(`${baseUrl}block-flags/transparent.txt`)).text();
    transparentTxt.split('\n').map(s => s.trim()).filter(Boolean).forEach(b => {
      let key = b.startsWith('minecraft:') ? b.substring(10) : b;
      this.transparentList.add(key);
      this.transparentList.add('minecraft:' + key);
    });

    // Texture Atlas
    const loader = new THREE.TextureLoader();
    this.atlasTexture = await new Promise((resolve, reject) => {
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

    this.opaqueMaterial = new THREE.MeshLambertMaterial({
      map: this.atlasTexture,
      side: THREE.FrontSide,
      clippingPlanes: [this.clippingPlaneY]
    });

    this.transparentMaterial = new THREE.MeshLambertMaterial({
      map: this.atlasTexture,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      clippingPlanes: [this.clippingPlaneY]
    });
  }

  public clearScene(): void {
    for (const mesh of this.chunkMeshes) {
      this.scene.remove(mesh);
      if (mesh instanceof THREE.Mesh) {
        mesh.geometry.dispose();
      }
    }
    this.chunkMeshes = [];
  }

  public renderRegion(region: RegionData): void {
    this.clearScene();
    if (!this.assets || !this.atlasTexture) return;

    const { size, palette, blocks } = region;
    const CHUNK_SIZE = 16;
    const chunksX = Math.ceil(size.x / CHUNK_SIZE);
    const chunksY = Math.ceil(size.y / CHUNK_SIZE);
    const chunksZ = Math.ceil(size.z / CHUNK_SIZE);

    for (let cx = 0; cx < chunksX; cx++) {
      for (let cy = 0; cy < chunksY; cy++) {
        for (let cz = 0; cz < chunksZ; cz++) {
          this.buildChunkMesh(region, cx, cy, cz, CHUNK_SIZE);
        }
      }
    }
  }

  private buildChunkMesh(region: RegionData, cx: number, cy: number, cz: number, chunkSize: number): void {
    const minX = cx * chunkSize;
    const maxX = Math.min((cx + 1) * chunkSize, region.size.x);
    const minY = cy * chunkSize;
    const maxY = Math.min((cy + 1) * chunkSize, region.size.y);
    const minZ = cz * chunkSize;
    const maxZ = Math.min((cz + 1) * chunkSize, region.size.z);

    const opPositions: number[] = [];
    const opNormals: number[] = [];
    const opUvs: number[] = [];
    const opIndices: number[] = [];

    const trPositions: number[] = [];
    const trNormals: number[] = [];
    const trUvs: number[] = [];
    const trIndices: number[] = [];

    let opVertexCount = 0;
    let trVertexCount = 0;

    const isBlockOpaque = (x: number, y: number, z: number): boolean => {
      if (x < 0 || y < 0 || z < 0 || x >= region.size.x || y >= region.size.y || z >= region.size.z) {
        return false;
      }
      const palIdx = region.blocks.get(`${x},${y},${z}`);
      if (palIdx === undefined) return false;
      const bState = region.palette[palIdx];
      if (!bState) return false;
      return this.opaqueList.has(bState.name) || this.opaqueList.has(bState.name.replace('minecraft:', ''));
    };

    const getBlockTextureKey = (name: string, face: string): string => {
      let key = name.startsWith('minecraft:') ? name.substring(10) : name;
      // Texture mapping heuristics
      let texKey = `block/${key}`;
      if (this.assets?.textures[texKey]) return texKey;

      if (this.assets?.textures[`block/${key}_top`]) {
        if (face === 'up' || face === 'down') return `block/${key}_top`;
        if (this.assets?.textures[`block/${key}_side`]) return `block/${key}_side`;
      }

      return 'block/stone'; // fallback
    };

    for (let x = minX; x < maxX; x++) {
      for (let y = minY; y < maxY; y++) {
        for (let z = minZ; z < maxZ; z++) {
          const palIdx = region.blocks.get(`${x},${y},${z}`);
          if (palIdx === undefined) continue;
          const bState = region.palette[palIdx];
          if (!bState) continue;

          const isOpaque = isBlockOpaque(x, y, z);
          const pos = [x, y, z];

          // Check 6 faces
          const faces = [
            { dir: [0, 1, 0], name: 'up', norm: [0, 1, 0] },
            { dir: [0, -1, 0], name: 'down', norm: [0, -1, 0] },
            { dir: [0, 0, 1], name: 'south', norm: [0, 0, 1] },
            { dir: [0, 0, -1], name: 'north', norm: [0, 0, -1] },
            { dir: [1, 0, 0], name: 'east', norm: [1, 0, 0] },
            { dir: [-1, 0, 0], name: 'west', norm: [-1, 0, 0] }
          ];

          for (const f of faces) {
            const nx = x + f.dir[0];
            const ny = y + f.dir[1];
            const nz = z + f.dir[2];

            if (isOpaque && isBlockOpaque(nx, ny, nz)) {
              continue; // Cull internal opaque faces
            }

            const texKey = getBlockTextureKey(bState.name, f.name);
            const texInfo = this.assets?.textures[texKey] || [0, 0, 16, 16];

            // Atlas 2048x2048 UV calculation with 0.5px padding protection
            const u0 = (texInfo[0] + 0.5) / 2048;
            const v0 = 1.0 - (texInfo[1] + texInfo[3] - 0.5) / 2048;
            const u1 = (texInfo[0] + texInfo[2] - 0.5) / 2048;
            const v1 = 1.0 - (texInfo[1] + 0.5) / 2048;

            const quadVertices = this.getFaceVertices(x, y, z, f.name);
            const quadUvs = [u0, v1, u0, v0, u1, v0, u1, v1];

            if (isOpaque) {
              opPositions.push(...quadVertices);
              for (let i = 0; i < 4; i++) opNormals.push(...f.norm);
              opUvs.push(...quadUvs);
              opIndices.push(opVertexCount, opVertexCount + 1, opVertexCount + 2, opVertexCount, opVertexCount + 2, opVertexCount + 3);
              opVertexCount += 4;
            } else {
              trPositions.push(...quadVertices);
              for (let i = 0; i < 4; i++) trNormals.push(...f.norm);
              trUvs.push(...quadUvs);
              trIndices.push(trVertexCount, trVertexCount + 1, trVertexCount + 2, trVertexCount, trVertexCount + 2, trVertexCount + 3);
              trVertexCount += 4;
            }
          }
        }
      }
    }

    if (opPositions.length > 0 && this.opaqueMaterial) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(opPositions, 3));
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(opNormals, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(opUvs, 2));
      geo.setIndex(opIndices);
      const mesh = new THREE.Mesh(geo, this.opaqueMaterial);
      this.scene.add(mesh);
      this.chunkMeshes.push(mesh);
    }

    if (trPositions.length > 0 && this.transparentMaterial) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(trPositions, 3));
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(trNormals, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(trUvs, 2));
      geo.setIndex(trIndices);
      const mesh = new THREE.Mesh(geo, this.transparentMaterial);
      this.scene.add(mesh);
      this.chunkMeshes.push(mesh);
    }
  }

  private getFaceVertices(x: number, y: number, z: number, face: string): number[] {
    const x0 = x, x1 = x + 1;
    const y0 = y, y1 = y + 1;
    const z0 = z, z1 = z + 1;

    switch (face) {
      case 'up':
        return [x0, y1, z1, x1, y1, z1, x1, y1, z0, x0, y1, z0];
      case 'down':
        return [x0, y0, z0, x1, y0, z0, x1, y0, z1, x0, y0, z1];
      case 'south':
        return [x0, y0, z1, x1, y0, z1, x1, y1, z1, x0, y1, z1];
      case 'north':
        return [x1, y0, z0, x0, y0, z0, x0, y1, z0, x1, y1, z0];
      case 'east':
        return [x1, y0, z1, x1, y0, z0, x1, y1, z0, x1, y1, z1];
      case 'west':
        return [x0, y0, z0, x0, y0, z1, x0, y1, z1, x0, y1, z0];
      default:
        return [];
    }
  }

  public setSliceY(layerY: number): void {
    this.clippingPlaneY.constant = layerY + 0.5;
  }

  public toggleDayNight(): boolean {
    this.isDay = !this.isDay;
    if (this.isDay) {
      this.scene.background = new THREE.Color(0x87ceeb);
      this.dirLight.intensity = 1.2;
    } else {
      this.scene.background = new THREE.Color(0x050510);
      this.dirLight.intensity = 0.2;
    }
    return this.isDay;
  }

  public getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  public getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  public render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
