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
  variantRotX?: number;
  variantRotY?: number;
  variantRotZ?: number;
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
    return opaqueList.has(cleanName) || opaqueList.has('minecraft:' + cleanName);
  }

  public static matchWhenCondition(
    when: any,
    properties?: Record<string, string>
  ): boolean {
    if (!when) return true;
    if (!properties) return false;

    if (when.OR && Array.isArray(when.OR)) {
      return when.OR.some((cond: any) => ChunkBuilder.matchWhenCondition(cond, properties));
    }
    if (when.AND && Array.isArray(when.AND)) {
      return when.AND.every((cond: any) => ChunkBuilder.matchWhenCondition(cond, properties));
    }

    for (const key of Object.keys(when)) {
      if (key === 'OR' || key === 'AND') continue;
      const expected = String(when[key]);
      const actual = properties[key];
      if (actual === undefined) return false;

      if (expected.includes('|')) {
        const allowed = expected.split('|');
        if (!allowed.includes(actual)) return false;
      } else {
        if (expected !== actual) return false;
      }
    }
    return true;
  }

  public static getRotatedCullDirection(
    cullface: string,
    rotX: number = 0,
    rotY: number = 0,
    rotZ: number = 0
  ): [number, number, number] | null {
    if (!cullface) return null;
    let dir: [number, number, number] = [0, 0, 0];
    switch (cullface) {
      case 'up': dir = [0, 1, 0]; break;
      case 'down': dir = [0, -1, 0]; break;
      case 'south': dir = [0, 0, 1]; break;
      case 'north': dir = [0, 0, -1]; break;
      case 'east': dir = [1, 0, 0]; break;
      case 'west': dir = [-1, 0, 0]; break;
      default: return null;
    }

    if (rotX !== 0) dir = ChunkBuilder.rotatePoint(dir, [0, 0, 0], 'x', rotX);
    if (rotY !== 0) dir = ChunkBuilder.rotatePoint(dir, [0, 0, 0], 'y', rotY);
    if (rotZ !== 0) dir = ChunkBuilder.rotatePoint(dir, [0, 0, 0], 'z', rotZ);

    return [Math.round(dir[0]), Math.round(dir[1]), Math.round(dir[2])];
  }

  public static isElementFaceOnBoundary(
    element: ModelElement,
    faceName: string
  ): boolean {
    if (element.rotation && element.rotation.angle % 360 !== 0) {
      return false;
    }
    switch (faceName) {
      case 'up': return element.to[1] === 16;
      case 'down': return element.from[1] === 0;
      case 'south': return element.to[2] === 16;
      case 'north': return element.from[2] === 0;
      case 'east': return element.to[0] === 16;
      case 'west': return element.from[0] === 0;
      default: return false;
    }
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

    if (bs.multipart && Array.isArray(bs.multipart)) {
      const combinedElements: ModelElement[] = [];
      for (const part of bs.multipart) {
        if (ChunkBuilder.matchWhenCondition(part.when, properties)) {
          const applies = Array.isArray(part.apply) ? part.apply : [part.apply];
          for (const apply of applies) {
            if (!apply) continue;
            let mName = apply.model || '';
            if (mName.startsWith('minecraft:')) mName = mName.substring(10);
            const resolved = ChunkBuilder.resolveModelElements(assets, mName);
            if (resolved && resolved.elements) {
              const pRotX = apply.x || 0;
              const pRotY = apply.y || 0;
              const pRotZ = apply.z || 0;
              for (const el of resolved.elements) {
                combinedElements.push({
                  ...el,
                  variantRotX: pRotX,
                  variantRotY: pRotY,
                  variantRotZ: pRotZ
                });
              }
            }
          }
        }
      }
      if (combinedElements.length > 0) {
        return { elements: combinedElements, rotX: 0, rotY: 0, rotZ: 0 };
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
          // Best-match variant scoring
          let bestScore = -1;
          for (const variantKey of Object.keys(bs.variants)) {
            const pairs = variantKey.split(',');
            let match = true;
            let score = 0;
            for (const pair of pairs) {
              const [k, v] = pair.split('=');
              if (k && v) {
                const actual = properties[k];
                if (actual !== undefined) {
                  if (actual === v) {
                    score++;
                  } else {
                    match = false;
                    break;
                  }
                }
              }
            }
            if (match && score > bestScore) {
              bestScore = score;
              selectedVariant = bs.variants[variantKey];
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
    material: THREE.Material,
    colors?: number[]
  ): THREE.Mesh {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    if (colors && colors.length > 0) {
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    }
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
      rx = x * cos - z * sin;
      rz = x * sin + z * cos;
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

      if (element.rotation.rescale && element.rotation.angle !== 0) {
        const rad = (Math.abs(element.rotation.angle) * Math.PI) / 180;
        const scaleFactor = 1 / Math.cos(rad);
        const axis = element.rotation.axis;
        quadVerts = quadVerts.map(v => {
          const rx = axis === 'x' ? v[0] : orig[0] + (v[0] - orig[0]) * scaleFactor;
          const ry = axis === 'y' ? v[1] : orig[1] + (v[1] - orig[1]) * scaleFactor;
          const rz = axis === 'z' ? v[2] : orig[2] + (v[2] - orig[2]) * scaleFactor;
          return [rx, ry, rz];
        });
      }

      quadVerts = quadVerts.map(v => ChunkBuilder.rotatePoint(v, orig, element.rotation!.axis, element.rotation!.angle));
      baseNorm = ChunkBuilder.rotatePoint(baseNorm, [0, 0, 0], element.rotation.axis, element.rotation.angle);
    }

    // Apply variant rotation (effRotX, effRotY, effRotZ around block center [0.5, 0.5, 0.5])
    const center: [number, number, number] = [0.5, 0.5, 0.5];
    const effRotX = element.variantRotX !== undefined ? element.variantRotX : rotX;
    const effRotY = element.variantRotY !== undefined ? element.variantRotY : rotY;
    const effRotZ = element.variantRotZ !== undefined ? element.variantRotZ : rotZ;

    if (effRotX !== 0) {
      quadVerts = quadVerts.map(v => ChunkBuilder.rotatePoint(v, center, 'x', effRotX));
      baseNorm = ChunkBuilder.rotatePoint(baseNorm, [0, 0, 0], 'x', effRotX);
    }
    if (effRotY !== 0) {
      quadVerts = quadVerts.map(v => ChunkBuilder.rotatePoint(v, center, 'y', effRotY));
      baseNorm = ChunkBuilder.rotatePoint(baseNorm, [0, 0, 0], 'y', effRotY);
    }
    if (effRotZ !== 0) {
      quadVerts = quadVerts.map(v => ChunkBuilder.rotatePoint(v, center, 'z', effRotZ));
      baseNorm = ChunkBuilder.rotatePoint(baseNorm, [0, 0, 0], 'z', effRotZ);
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

    // Correct UV alignment:
    // For top/bottom horizontal faces, cornerUVs map to [u0, v1], [u1, v1], [u1, v0], [u0, v0]
    // For vertical side faces (south, north, east, west), quad vertices start at Y=by0 (bottom),
    // so cornerUVs map to [u0, v0], [u1, v0], [u1, v1], [u0, v1]
    let cornerUVs: [number, number][];
    switch (faceName) {
      case 'up':
        cornerUVs = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
        break;
      case 'down':
        cornerUVs = [[u0, v1], [u1, v1], [u1, v0], [u0, v0]];
        break;
      case 'north':
        cornerUVs = [[u1, v0], [u0, v0], [u0, v1], [u1, v1]];
        break;
      case 'south':
      case 'east':
      case 'west':
      default:
        cornerUVs = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
        break;
    }

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
