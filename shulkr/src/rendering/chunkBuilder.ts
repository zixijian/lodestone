import * as THREE from 'three';

export interface ChunkBounds {
  minX: number;
  minY: number;
  minZ: number;
  maxX: number;
  maxY: number;
  maxZ: number;
}

export interface ModelElementFace {
  texture: string;
  uv?: [number, number, number, number];
  cullface?: string;
  rotation?: number;
  tintindex?: number;
}

export interface ModelElement {
  from: [number, number, number];
  to: [number, number, number];
  faces: Record<string, ModelElementFace>;
  rotation?: {
    origin: [number, number, number];
    axis: 'x' | 'y' | 'z';
    angle: number;
    rescale?: boolean;
  };
}

export interface ResolvedVariantModel {
  elements: ModelElement[];
  rotX: number;
  rotY: number;
  rotZ: number;
  uvlock?: boolean;
}

export interface AssetsData {
  textures: Record<string, [number, number, number, number]>;
  blockstates?: Record<string, any>;
  models?: Record<string, any>;
  atlasWidth?: number;
  atlasHeight?: number;
}

export class ChunkBuilder {
  public static readonly CHUNK_SIZE = 16;

  public static isFaceOpaque(blockName: string, opaqueList: Set<string>): boolean {
    if (!blockName || blockName === 'minecraft:air' || blockName === 'air') {
      return false;
    }
    const cleanName = blockName.startsWith('minecraft:') ? blockName.substring(10) : blockName;
    if (opaqueList.has(cleanName) || opaqueList.has('minecraft:' + cleanName)) {
      return true;
    }
    const transparentList = ['glass', 'water', 'leaves', 'slab', 'stairs', 'torch', 'sign', 'door', 'fence', 'pane', 'repeater', 'comparator', 'redstone'];
    return !transparentList.some(t => cleanName.includes(t));
  }

  public static resolveBlockModel(
    assets: AssetsData,
    blockName: string,
    properties?: Record<string, string>
  ): ResolvedVariantModel | null {
    if (!assets.blockstates || !assets.models) return null;

    let cleanName = blockName.startsWith('minecraft:') ? blockName.substring(10) : blockName;
    let bs = assets.blockstates[cleanName];
    if (!bs) {
      if (assets.blockstates['minecraft:' + cleanName]) {
        bs = assets.blockstates['minecraft:' + cleanName];
      } else {
        return null;
      }
    }

    let selectedVariant: any = null;

    if (bs.variants) {
      if (properties && Object.keys(properties).length > 0) {
        // Try matching exact sorted property string
        const propKeys = Object.keys(properties).sort();
        const propStr = propKeys.map(k => `${k}=${properties[k]}`).join(',');
        if (bs.variants[propStr]) {
          selectedVariant = bs.variants[propStr];
        } else {
          // Find partial/best match
          for (const variantKey of Object.keys(bs.variants)) {
            const pairs = variantKey.split(',');
            let match = true;
            for (const pair of pairs) {
              const [k, v] = pair.split('=');
              if (k && v && properties[k] !== undefined && properties[k] !== v) {
                match = false;
                break;
              }
            }
            if (match) {
              selectedVariant = bs.variants[variantKey];
              break;
            }
          }
        }
      }

      if (!selectedVariant) {
        if (bs.variants['']) {
          selectedVariant = bs.variants[''];
        } else if (bs.variants['normal']) {
          selectedVariant = bs.variants['normal'];
        } else {
          const firstKey = Object.keys(bs.variants)[0];
          selectedVariant = bs.variants[firstKey];
        }
      }
    }

    // Handle array of variants (pick first)
    if (Array.isArray(selectedVariant)) {
      selectedVariant = selectedVariant[0];
    }

    if (!selectedVariant) return null;

    let modelName = selectedVariant.model || '';
    if (modelName.startsWith('minecraft:')) {
      modelName = modelName.substring(10);
    }

    const rotX = selectedVariant.x || 0;
    const rotY = selectedVariant.y || 0;
    const rotZ = selectedVariant.z || 0;
    const uvlock = !!selectedVariant.uvlock;

    const resolved = ChunkBuilder.resolveModelElements(assets, modelName);
    if (!resolved || !resolved.elements) return null;

    return {
      elements: resolved.elements,
      rotX,
      rotY,
      rotZ,
      uvlock
    };
  }

  public static resolveModelElements(
    assets: AssetsData,
    modelKey: string
  ): { elements: ModelElement[]; textures: Record<string, string> } | null {
    if (!assets.models) return null;

    let cleanKey = modelKey.startsWith('minecraft:') ? modelKey.substring(10) : modelKey;
    let currentKey: string | null = cleanKey;
    let textures: Record<string, string> = {};
    let elements: ModelElement[] | null = null;
    let visited = new Set<string>();

    while (currentKey && !visited.has(currentKey)) {
      visited.add(currentKey);
      const m = assets.models[currentKey];
      if (!m) break;

      if (m.textures) {
        textures = { ...m.textures, ...textures };
      }
      if (!elements && m.elements) {
        elements = m.elements;
      }
      if (m.parent) {
        currentKey = m.parent.startsWith('minecraft:') ? m.parent.substring(10) : m.parent;
      } else {
        currentKey = null;
      }
    }

    if (!elements) return null;

    // Resolve texture variable references (e.g. #slab -> block/smooth_stone)
    function resolveTex(ref: string): string {
      let curr = ref;
      let depth = 0;
      while (curr && curr.startsWith('#') && depth < 10) {
        const varName = curr.substring(1);
        if (textures[varName]) {
          curr = textures[varName];
        } else {
          break;
        }
        depth++;
      }
      if (curr && curr.startsWith('minecraft:')) {
        curr = curr.substring(10);
      }
      return curr || '';
    }

    const resolvedTextures: Record<string, string> = {};
    for (const k in textures) {
      resolvedTextures[k] = resolveTex(textures[k]);
    }

    // Clone and substitute resolved textures on faces
    const resolvedElements: ModelElement[] = elements.map(el => {
      const faces: Record<string, ModelElementFace> = {};
      for (const faceKey in el.faces) {
        const f = el.faces[faceKey];
        faces[faceKey] = {
          ...f,
          texture: resolveTex(f.texture)
        };
      }
      return {
        ...el,
        faces
      };
    });

    return { elements: resolvedElements, textures: resolvedTextures };
  }

  public static buildChunkMesh(
    positions: number[],
    normals: number[],
    uvs: number[],
    indices: number[],
    material: THREE.Material
  ): THREE.Mesh {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);

    return new THREE.Mesh(geometry, material);
  }

  public static rotatePoint(
    p: [number, number, number],
    origin: [number, number, number],
    axis: 'x' | 'y' | 'z',
    angleDeg: number
  ): [number, number, number] {
    if (angleDeg === 0) return [...p];
    const rad = (angleDeg * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    let x = p[0] - origin[0];
    let y = p[1] - origin[1];
    let z = p[2] - origin[2];

    let rx = x, ry = y, rz = z;

    if (axis === 'x') {
      ry = y * cos - z * sin;
      rz = y * sin + z * cos;
    } else if (axis === 'y') {
      rx = x * cos + z * sin;
      rz = -x * sin + z * cos;
    } else if (axis === 'z') {
      rx = x * cos - y * sin;
      ry = x * sin + y * cos;
    }

    return [rx + origin[0], ry + origin[1], rz + origin[2]];
  }

  public static getTransformedElementFace(
    assets: AssetsData,
    x: number,
    y: number,
    z: number,
    element: ModelElement,
    faceName: string,
    face: ModelElementFace,
    rotX: number = 0,
    rotY: number = 0,
    rotZ: number = 0
  ): { positions: number[]; normals: number[]; uvs: number[] } {
    const bx0 = element.from[0] / 16;
    const by0 = element.from[1] / 16;
    const bz0 = element.from[2] / 16;
    const bx1 = element.to[0] / 16;
    const by1 = element.to[1] / 16;
    const bz1 = element.to[2] / 16;

    let quadVerts: [number, number, number][] = [];
    let baseNorm: [number, number, number] = [0, 0, 0];

    switch (faceName) {
      case 'up':
        quadVerts = [[bx0, by1, bz1], [bx1, by1, bz1], [bx1, by1, bz0], [bx0, by1, bz0]];
        baseNorm = [0, 1, 0];
        break;
      case 'down':
        quadVerts = [[bx0, by0, bz0], [bx1, by0, bz0], [bx1, by0, bz1], [bx0, by0, bz1]];
        baseNorm = [0, -1, 0];
        break;
      case 'south':
        quadVerts = [[bx0, by0, bz1], [bx1, by0, bz1], [bx1, by1, bz1], [bx0, by1, bz1]];
        baseNorm = [0, 0, 1];
        break;
      case 'north':
        quadVerts = [[bx1, by0, bz0], [bx0, by0, bz0], [bx0, by1, bz0], [bx1, by1, bz0]];
        baseNorm = [0, 0, -1];
        break;
      case 'east':
        quadVerts = [[bx1, by0, bz1], [bx1, by0, bz0], [bx1, by1, bz0], [bx1, by1, bz1]];
        baseNorm = [1, 0, 0];
        break;
      case 'west':
        quadVerts = [[bx0, by0, bz0], [bx0, by0, bz1], [bx0, by1, bz1], [bx0, by1, bz0]];
        baseNorm = [-1, 0, 0];
        break;
    }

    // Apply element rotation if present
    if (element.rotation) {
      const orig: [number, number, number] = [
        element.rotation.origin[0] / 16,
        element.rotation.origin[1] / 16,
        element.rotation.origin[2] / 16
      ];
      quadVerts = quadVerts.map(v => ChunkBuilder.rotatePoint(v, orig, element.rotation!.axis, element.rotation!.angle));
      baseNorm = ChunkBuilder.rotatePoint(baseNorm, [0, 0, 0], element.rotation.axis, element.rotation.angle);
    }

    // Apply variant rotation (rotX, rotY, rotZ around block center [0.5, 0.5, 0.5])
    const center: [number, number, number] = [0.5, 0.5, 0.5];
    if (rotX !== 0) {
      quadVerts = quadVerts.map(v => ChunkBuilder.rotatePoint(v, center, 'x', rotX));
      baseNorm = ChunkBuilder.rotatePoint(baseNorm, [0, 0, 0], 'x', rotX);
    }
    if (rotY !== 0) {
      quadVerts = quadVerts.map(v => ChunkBuilder.rotatePoint(v, center, 'y', rotY));
      baseNorm = ChunkBuilder.rotatePoint(baseNorm, [0, 0, 0], 'y', rotY);
    }
    if (rotZ !== 0) {
      quadVerts = quadVerts.map(v => ChunkBuilder.rotatePoint(v, center, 'z', rotZ));
      baseNorm = ChunkBuilder.rotatePoint(baseNorm, [0, 0, 0], 'z', rotZ);
    }

    // Translate to block coordinates [x, y, z]
    const positions: number[] = [];
    for (const v of quadVerts) {
      positions.push(v[0] + x, v[1] + y, v[2] + z);
    }

    const normals: number[] = [];
    for (let i = 0; i < 4; i++) {
      normals.push(baseNorm[0], baseNorm[1], baseNorm[2]);
    }

    // Determine UV bounds
    let faceUV: [number, number, number, number];
    if (face.uv) {
      faceUV = face.uv;
    } else {
      switch (faceName) {
        case 'up':
        case 'down':
          faceUV = [element.from[0], element.from[2], element.to[0], element.to[2]];
          break;
        case 'south':
        case 'north':
          faceUV = [element.from[0], 16 - element.to[1], element.to[0], 16 - element.from[1]];
          break;
        case 'east':
        case 'west':
          faceUV = [element.from[2], 16 - element.to[1], element.to[2], 16 - element.from[1]];
          break;
        default:
          faceUV = [0, 0, 16, 16];
      }
    }

    const { u0, v0, u1, v1 } = ChunkBuilder.getTextureUV(assets, face.texture, faceUV);
    let cornerUVs: [number, number][] = [[u0, v1], [u1, v1], [u1, v0], [u0, v0]];

    if (face.rotation) {
      const shift = Math.floor(face.rotation / 90) % 4;
      for (let s = 0; s < shift; s++) {
        cornerUVs.push(cornerUVs.shift()!);
      }
    }

    const uvs: number[] = [];
    for (const uvPair of cornerUVs) {
      uvs.push(uvPair[0], uvPair[1]);
    }

    return { positions, normals, uvs };
  }

  public static getFaceVertices(x: number, y: number, z: number, face: string): number[] {
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

  public static getTextureUV(
    assets: AssetsData,
    texName: string,
    faceUV?: [number, number, number, number]
  ): { u0: number; v0: number; u1: number; v1: number } {
    let cleanTex = texName.startsWith('minecraft:') ? texName.substring(10) : texName;
    if (!cleanTex.startsWith('block/') && !cleanTex.startsWith('item/')) {
      cleanTex = 'block/' + cleanTex;
    }

    let info = assets.textures[cleanTex];
    if (!info) {
      info = assets.textures['block/stone'] || [0, 0, 16, 16];
    }

    let x0 = info[0];
    let y0 = info[1];
    let w = info[2];
    let h = info[3];

    if (faceUV) {
      const uMin = faceUV[0] / 16;
      const vMin = faceUV[1] / 16;
      const uMax = faceUV[2] / 16;
      const vMax = faceUV[3] / 16;

      x0 = info[0] + uMin * info[2];
      y0 = info[1] + vMin * info[3];
      w = (uMax - uMin) * info[2];
      h = (vMax - vMin) * info[3];
    }

    const atlasW = assets.atlasWidth || 2048;
    const atlasH = assets.atlasHeight || 2048;

    const u0 = (x0 + 0.5) / atlasW;
    const v0 = 1.0 - (y0 + h - 0.5) / atlasH;
    const u1 = (x0 + w - 0.5) / atlasW;
    const v1 = 1.0 - (y0 + 0.5) / atlasH;

    return { u0, v0, u1, v1 };
  }
}
