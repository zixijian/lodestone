export interface McstructureBlockState {
  name: string;
  states: Record<string, any>;
  version?: number;
}

export interface McstructureResult {
  formatVersion: number;
  size: [number, number, number];
  palette: McstructureBlockState[];
  layer0Indices: Int32Array;
  layer1Indices: Int32Array; // Waterlogged layer
}

export function parseBedrockMcstructure(compoundTag: any): McstructureResult {
  const formatVersion = compoundTag.format_version || 1;
  const size = compoundTag.size || [0, 0, 0];
  const blockIndices = compoundTag.structure?.block_indices || [[], []];
  const palette = compoundTag.structure?.palette?.default?.block_palette || [];

  return {
    formatVersion,
    size,
    palette,
    layer0Indices: new Int32Array(blockIndices[0] || []),
    layer1Indices: new Int32Array(blockIndices[1] || []),
  };
}
