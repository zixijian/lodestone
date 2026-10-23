import * as THREE from 'three';

export interface ChunkBounds {
  minX: number;
  minY: number;
  minZ: number;
  maxX: number;
  maxY: number;
  maxZ: number;
}

export class ChunkBuilder {
  public static readonly CHUNK_SIZE = 16;

  public static isFaceOpaque(blockName: string): boolean {
    if (!blockName || blockName === 'minecraft:air' || blockName === 'air') {
      return false;
    }
    const transparentList = ['glass', 'water', 'leaves', 'slab', 'stairs', 'torch', 'sign', 'door', 'fence', 'pane'];
    return !transparentList.some(t => blockName.includes(t));
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
}
