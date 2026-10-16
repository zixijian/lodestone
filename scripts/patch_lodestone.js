const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../web_android/node_modules/@mattzh72/lodestone/lib/render/SpecialRenderer.js');

if (fs.existsSync(targetPath)) {
  let code = fs.readFileSync(targetPath, 'utf-8');

  // Normalize line endings to \n for consistent matching
  const hasCRLF = code.includes('\r\n');
  if (hasCRLF) {
    code = code.replace(/\r\n/g, '\n');
  }

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

  // 3. Fix hanging sign board UV sampling (shift v from 7..12 to 6..11)
  code = code.replace(
    /north:\s*\{\s*uv:\s*\[0\.5,\s*7,\s*4,\s*12\],\s*texture:\s*'#0'\s*\},\s*\n\s*east:\s*\{\s*uv:\s*\[0,\s*7,\s*0\.5,\s*12\],\s*texture:\s*'#0'\s*\},\s*\n\s*south:\s*\{\s*uv:\s*\[4\.5,\s*7,\s*8,\s*12\],\s*texture:\s*'#0'\s*\},\s*\n\s*west:\s*\{\s*uv:\s*\[4,\s*7,\s*4\.5,\s*12\],\s*texture:\s*'#0'\s*\},\s*\n\s*up:\s*\{\s*uv:\s*\[4,\s*7,\s*0\.5,\s*6\],\s*texture:\s*'#0'\s*\},\s*\n\s*down:\s*\{\s*uv:\s*\[7\.5,\s*6,\s*4,\s*7\],\s*texture:\s*'#0'\s*\}/g,
    `north: { uv: [0.5, 6, 4, 11], texture: '#0' },
                        east: { uv: [0, 6, 0.5, 11], texture: '#0' },
                        south: { uv: [4.5, 6, 8, 11], texture: '#0' },
                        west: { uv: [4, 6, 4.5, 11], texture: '#0' },
                        up: { uv: [4, 6, 0.5, 5], texture: '#0' },
                        down: { uv: [7.5, 5, 4, 5.5], texture: '#0' }`
  );

  // 4. Fix attached = true chain geometry (split single stretched quad into left and right chain quads)
  code = code.replace(
    /\{\s*\n\s*from:\s*\[2,\s*10,\s*8\],\s*\n\s*to:\s*\[14,\s*16,\s*8\],\s*\n\s*faces:\s*\{\s*\n\s*north:\s*\{\s*uv:\s*\[3\.5,\s*3,\s*6\.5,\s*6\],\s*texture:\s*'#0'\s*\},\s*\n\s*south:\s*\{\s*uv:\s*\[3\.5,\s*3,\s*6\.5,\s*6\],\s*texture:\s*'#0'\s*\},\s*\n\s*\},\s*\n\s*\},/g,
    `{
                        from: [3, 10, 8],
                        to: [5, 16, 8],
                        faces: {
                            north: { uv: [14, 0, 16, 6], texture: '#0' },
                            south: { uv: [14, 0, 16, 6], texture: '#0' },
                        },
                    },
                    {
                        from: [4, 10, 7],
                        to: [4, 16, 9],
                        faces: {
                            east: { uv: [14, 0, 16, 6], texture: '#0' },
                            west: { uv: [14, 0, 16, 6], texture: '#0' },
                        },
                    },
                    {
                        from: [11, 10, 8],
                        to: [13, 16, 8],
                        faces: {
                            north: { uv: [14, 0, 16, 6], texture: '#0' },
                            south: { uv: [14, 0, 16, 6], texture: '#0' },
                        },
                    },
                    {
                        from: [12, 10, 7],
                        to: [12, 16, 9],
                        faces: {
                            east: { uv: [14, 0, 16, 6], texture: '#0' },
                            west: { uv: [14, 0, 16, 6], texture: '#0' },
                        },
                    },`
  );

  // 5. Chain texture UV mapping for attached = false & wall hanging signs
  code = code.replace(/uv:\s*\[0,\s*3,\s*0\.75,\s*6\]/g, 'uv: [14, 0, 16, 6]');
  code = code.replace(/uv:\s*\[1\.5,\s*3,\s*2\.25,\s*6\]/g, 'uv: [14, 0, 16, 6]');

  // 6. Adjust Bamboo sign UV mapping in signRenderer and wallSignRenderer
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
        const isBamboo = texture.toString().includes('bamboo');
        const northUv = isBamboo ? [0.5, 1, 6.25, 7] : [0.5, 1, 6.5, 7];
        const southUv = isBamboo ? [7, 1, 12.25, 7] : [7, 1, 13, 7];
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 8, 7],
                    to: [20, 20, 9],
                    faces: {
                        north: { uv: northUv, texture: '#0' },
                        east: { uv: [0, 1, 0.5, 7], texture: '#0' },
                        south: { uv: southUv, texture: '#0' },
                        west: { uv: [6.5, 1, 7, 7], texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
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
        const isBamboo = texture.toString().includes('bamboo');
        const northUv = isBamboo ? [0.5, 1, 6.25, 7] : [0.5, 1, 6.5, 7];
        const southUv = isBamboo ? [7, 1, 12.25, 7] : [7, 1, 13, 7];
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 4, 17],
                    to: [20, 16, 19],
                    faces: {
                        north: { uv: northUv, texture: '#0' },
                        east: { uv: [0, 1, 0.5, 7], texture: '#0' },
                        south: { uv: southUv, texture: '#0' },
                        west: { uv: [6.5, 1, 7, 7], texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
                    },
                },`;

  code = code.replace(oldWallSignPattern, newWallSignPattern);

  // 7. Force re-population of Sign and HangingSign maps to bind patched renderer functions and include pale_oak/poplar
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

  if (hasCRLF) {
    code = code.replace(/\n/g, '\r\n');
  }

  fs.writeFileSync(targetPath, code);
  console.log('Successfully applied Lodestone SpecialRenderer patch!');
} else {
  console.warn('Lodestone SpecialRenderer.js not found, skipping patch.');
}
