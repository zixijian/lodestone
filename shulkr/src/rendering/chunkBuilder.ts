import * as THREE from 'three';

export interface ChunkBounds {
  minX: number;
  minY: number;
  minZ: number;
  maxX: number;
  maxY: number;
  maxZ: number;
}

export interface AssetsData {
  textures: Record<string, [number, number, number, number]>;
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
    const transparentList = ['glass', 'water', 'leaves', 'slab', 'stairs', 'torch', 'sign', 'door', 'fence', 'pane'];
    return !transparentList.some(t => cleanName.includes(t));
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
    blockName: string,
    face: string
  ): { u0: number; v0: number; u1: number; v1: number } {
    let key = blockName.startsWith('minecraft:') ? blockName.substring(10) : blockName;
    let texKey = `block/${key}`;

    if (!assets.textures[texKey]) {
      if (assets.textures[`block/${key}_top`] && (face === 'up' || face === 'down')) {
        texKey = `block/${key}_top`;
      } else if (assets.textures[`block/${key}_side`]) {
        texKey = `block/${key}_side`;
      } else {
        texKey = 'block/stone';
      }
    }

    const info = assets.textures[texKey] || [0, 0, 16, 16];
    // Master atlas 2048x2048 with 0.5px padding protection against GPU bilinear sampling bleeding
    const u0 = (info[0] + 0.5) / 2048;
    const v0 = 1.0 - (info[1] + info[3] - 0.5) / 2048;
    const u1 = (info[0] + info[2] - 0.5) / 2048;
    const v1 = 1.0 - (info[1] + 0.5) / 2048;

    return { u0, v0, u1, v1 };
  }
}
