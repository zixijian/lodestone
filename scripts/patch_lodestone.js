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
  // Standard Minecraft Hanging Sign UVs:
  // North (front): [0.5, 8, 4, 13] (X=2..16px in 32px texture space)
  // East (right edge): [0, 8, 0.5, 13] (X=0..2px)
  // South (back): [4.5, 8, 8, 13] (X=18..32px)
  // West (left edge): [4, 8, 4.5, 13] (X=16..18px)
  // Up: [0.5, 7, 4, 8], Down: [4, 13, 7.5, 14]
  const boardPattern = /north:\s*\{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*east:\s*\{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*south:\s*\{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*west:\s*\{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*up:\s*\{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*down:\s*\{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \}/g;

  const newBoardUv = `north: { uv: [0.5, 8, 4, 13], texture: '#0' },
                        east: { uv: [0, 8, 0.5, 13], texture: '#0' },
                        south: { uv: [4.5, 8, 8, 13], texture: '#0' },
                        west: { uv: [4, 8, 4.5, 13], texture: '#0' },
                        up: { uv: [0.5, 7, 4, 8], texture: '#0' },
                        down: { uv: [4, 13, 7.5, 14], texture: '#0' }`;

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
  // Standard Minecraft Sign UVs:
  // North (front): [0.5, 1, 6.5, 7] (X=2..26px)
  // East (right edge): [0, 1, 0.5, 7] (X=0..2px)
  // South (back): [7, 1, 13, 7] (X=28..52px)
  // West (left edge): [6.5, 1, 7, 7] (X=26..28px)
  // Up: [6.5, 1, 0.5, 0], Down: [12.5, 0, 6.5, 1]
  const signPattern = /function signRenderer\(texture\) \{\s*return \(atlas\) => \{\s*return new BlockModel\(undefined, \{\s*0: texture\.withPrefix\('entity\/signs\/'\)\.toString\(\),\s*\}, \[\s*\{\s*from: \[-4, 8, 7\],\s*to: \[20, 20, 9\],\s*faces: \{\s*north: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*east: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*south: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*west: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*up: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*down: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*\},\s*\},/g;

  const newSignRenderer = `function signRenderer(texture) {
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

  code = code.replace(signPattern, newSignRenderer);

  const wallSignPattern = /function wallSignRenderer\(texture\) \{\s*return \(atlas\) => \{\s*return new BlockModel\(undefined, \{\s*0: texture\.withPrefix\('entity\/signs\/'\)\.toString\(\),\s*\}, \[\s*\{\s*from: \[-4, 4, 17\],\s*to: \[20, 16, 19\],\s*faces: \{\s*north: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*east: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*south: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*west: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*up: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*down: \{ uv: \[\d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?, \d+(?:\.\d+)?\], texture: '#0' \},\s*\},\s*\},/g;

  const newWallSignRenderer = `function wallSignRenderer(texture) {
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

  code = code.replace(wallSignPattern, newWallSignRenderer);

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
