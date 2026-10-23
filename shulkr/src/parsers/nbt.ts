export interface NbtBlockEntity {
  id: string;
  x: number;
  y: number;
  z: number;
  [key: string]: any;
}

export interface NbtStructureResult {
  size: [number, number, number];
  palette: Array<{ Name: string; Properties?: Record<string, string> }>;
  blocks: Array<{
    pos: [number, number, number];
    state: number;
    nbt?: NbtBlockEntity;
  }>;
}

export function parseJavaNbtStructure(parsedNbtCompound: any): NbtStructureResult {
  const size = parsedNbtCompound.size || [0, 0, 0];
  const palette = parsedNbtCompound.palette || [];
  const blocks = parsedNbtCompound.blocks || [];

  return {
    size,
    palette,
    blocks,
  };
}
