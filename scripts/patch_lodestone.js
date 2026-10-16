const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../web_android/node_modules/@mattzh72/lodestone/lib/render/SpecialRenderer.js');

if (fs.existsSync(targetPath)) {
  let code = fs.readFileSync(targetPath, 'utf-8');

  // 1. Add pale_oak and poplar to WoodTypes
  code = code.replace(
    /const WoodTypes = \[\s*[\s\S]*?\s*\];/g,
    "const WoodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'mangrove', 'bamboo', 'cherry', 'pale_oak', 'poplar'];"
  );

  // 2. Remove 2/3 scale in ceiling hangingSignRenderer & wallHangingSignRenderer inside getBlockMesh if present
  code = code.replace(
    /mat4\.scale\(t,\s*t,\s*\[2\s*\/\s*3,\s*2\s*\/\s*3,\s*2\s*\/\s*3\]\);\s*\n\s*mat4\.translate\(t,\s*t,\s*\[-8,\s*-8,\s*-8\]\);\s*\n\s*mesh\.merge\(hangingSignRenderer/g,
    "mat4.translate(t, t, [-8, -8, -8]);\n            mesh.merge(hangingSignRenderer"
  );

  code = code.replace(
    /mat4\.scale\(t,\s*t,\s*\[2\s*\/\s*3,\s*2\s*\/\s*3,\s*2\s*\/\s*3\]\);\s*\n\s*mat4\.translate\(t,\s*t,\s*\[-8,\s*-8,\s*-8\]\);\s*\n\s*mesh\.merge\(wallHangingSignRenderer/g,
    "mat4.translate(t, t, [-8, -8, -8]);\n            mesh.merge(wallHangingSignRenderer"
  );

  // 3. Hanging sign board UV mapping:
  // Standard Minecraft Hanging Sign UVs (32x32 texture in 64x32 atlas, scaled to 0..16 coordinates):
  // North (front): [1, 8, 4.5, 13] (X=2..9px = 7px wide -> 14/16 model width)
  // East (right edge): [0.5, 8, 1, 13] (X=1..2px = 1px wide -> 2/16 model depth)
  // South (back): [5, 8, 8.5, 13] (X=10..17px = 7px wide)
  // West (left edge): [4.5, 8, 5, 13] (X=9..10px = 1px wide)
  // Up: [1, 7, 4.5, 8], Down: [4.5, 13, 8, 14]
  const boardPattern = /north:\s*\{ uv: \[0\.5, 7, 4, 12\], texture: '#0' \},\s*east:\s*\{ uv: \[0, 7, 0\.5, 12\], texture: '#0' \},\s*south:\s*\{ uv: \[4\.5, 7, 8, 12\], texture: '#0' \},\s*west:\s*\{ uv: \[4, 7, 4\.5, 12\], texture: '#0' \},\s*up:\s*\{ uv: \[4, 7, 0\.5, 6\], texture: '#0' \},\s*down:\s*\{ uv: \[7\.5, 6, 4, 7\], texture: '#0' \}/g;

  const newBoardUv = `north: { uv: [1, 8, 4.5, 13], texture: '#0' },
                        east: { uv: [0.5, 8, 1, 13], texture: '#0' },
                        south: { uv: [5, 8, 8.5, 13], texture: '#0' },
                        west: { uv: [4.5, 8, 5, 13], texture: '#0' },
                        up: { uv: [1, 7, 4.5, 8], texture: '#0' },
                        down: { uv: [4.5, 13, 8, 14], texture: '#0' }`;

  code = code.replace(boardPattern, newBoardUv);

  // 4. Chain texture UV mapping
  const oldAttachedChain = `north: { uv: [3.5, 3, 6.5, 6], texture: '#0' },
                            south: { uv: [3.5, 3, 6.5, 6], texture: '#0' }`;
  const newAttachedChain = `north: { uv: [14, 0, 16, 6], texture: '#0' },
                            south: { uv: [14, 0, 16, 6], texture: '#0' }`;
  code = code.replace(oldAttachedChain, newAttachedChain);

  const oldCeilingChainNorthSouth = `north: { uv: [0, 3, 0.75, 6], texture: '#0' },
                        south: { uv: [0, 3, 0.75, 6], texture: '#0' }`;
  const newCeilingChainNorthSouth = `north: { uv: [14, 0, 16, 6], texture: '#0' },
                        south: { uv: [14, 0, 16, 6], texture: '#0' }`;
  code = code.replaceAll(oldCeilingChainNorthSouth, newCeilingChainNorthSouth);

  const oldCeilingChainEastWest = `east: { uv: [1.5, 3, 2.25, 6], texture: '#0' },
                        west: { uv: [1.5, 3, 2.25, 6], texture: '#0' }`;
  const newCeilingChainEastWest = `east: { uv: [14, 0, 16, 6], texture: '#0' },
                        west: { uv: [14, 0, 16, 6], texture: '#0' }`;
  code = code.replaceAll(oldCeilingChainEastWest, newCeilingChainEastWest);

  // 5. Standing sign and Wall sign UV mapping:
  // Standard Minecraft Sign UVs (X=2..14px for 24px wide model):
  // North (front): [1, 1, 7, 7] (X=2..14px)
  // East (right edge): [0.5, 1, 1, 7] (X=1..2px)
  // South (back): [7.5, 1, 13.5, 7] (X=15..27px)
  // West (left edge): [7, 1, 7.5, 7] (X=14..15px)
  const oldSignPattern = `function signRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 8, 7],
                    to: [20, 20, 9],
                    faces: {
                        north: { uv: [0.5, 1, 6.5, 7], texture: '#0' },
                        east: { uv: [0, 1, 0.5, 7], texture: '#0' },
                        south: { uv: [7, 1, 13, 7], texture: '#0' },
                        west: { uv: [6.5, 1, 7, 7], texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
                    },
                },`;

  const newSignPattern = `function signRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 8, 7],
                    to: [20, 20, 9],
                    faces: {
                        north: { uv: [1, 1, 7, 7], texture: '#0' },
                        east: { uv: [0.5, 1, 1, 7], texture: '#0' },
                        south: { uv: [7.5, 1, 13.5, 7], texture: '#0' },
                        west: { uv: [7, 1, 7.5, 7], texture: '#0' },
                        up: { uv: [7, 1, 1, 0], texture: '#0' },
                        down: { uv: [13, 0, 7, 1], texture: '#0' },
                    },
                },`;

  code = code.replace(oldSignPattern, newSignPattern);

  const oldWallSignPattern = `function wallSignRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 4, 17],
                    to: [20, 16, 19],
                    faces: {
                        north: { uv: [0.5, 1, 6.5, 7], texture: '#0' },
                        east: { uv: [0, 1, 0.5, 7], texture: '#0' },
                        south: { uv: [7, 1, 13, 7], texture: '#0' },
                        west: { uv: [6.5, 1, 7, 7], texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
                    },
                },`;

  const newWallSignPattern = `function wallSignRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 4, 17],
                    to: [20, 16, 19],
                    faces: {
                        north: { uv: [1, 1, 7, 7], texture: '#0' },
                        east: { uv: [0.5, 1, 1, 7], texture: '#0' },
                        south: { uv: [7.5, 1, 13.5, 7], texture: '#0' },
                        west: { uv: [7, 1, 7.5, 7], texture: '#0' },
                        up: { uv: [7, 1, 1, 0], texture: '#0' },
                        down: { uv: [13, 0, 7, 1], texture: '#0' },
                    },
                },`;

  code = code.replace(oldWallSignPattern, newWallSignPattern);

  // 6. Force re-population of Sign and HangingSign maps to bind patched renderer functions and include pale_oak/poplar
  const mapRefreshCode = `
    SignRenderers.clear();
    WallSignRenderers.clear();
    HangingSignRenderers.clear();
    WallHangingSignRenderers.clear();
    WoodTypes.forEach(type => {
        SignRenderers.set(\`minecraft:\${type}_sign\`, SpecialRenderers.signRenderer(Identifier.create(type)));
        WallSignRenderers.set(\`minecraft:\${type}_wall_sign\`, SpecialRenderers.wallSignRenderer(Identifier.create(type)));
        HangingSignRenderers.set(\`minecraft:\${type}_hanging_sign\`, SpecialRenderers.hangingSignRenderer(Identifier.create(type)));
        WallHangingSignRenderers.set(\`minecraft:\${type}_wall_hanging_sign\`, SpecialRenderers.wallHangingSignRenderer(type));
    });
`;

  if (!code.includes('SignRenderers.clear()')) {
    code = code.replace(
      "SpecialRenderers.getBlockMesh = getBlockMesh;",
      mapRefreshCode + "\n    SpecialRenderers.getBlockMesh = getBlockMesh;"
    );
  }

  fs.writeFileSync(targetPath, code);
  console.log('Successfully applied Lodestone SpecialRenderer patch!');
} else {
  console.warn('Lodestone SpecialRenderer.js not found, skipping patch.');
}
