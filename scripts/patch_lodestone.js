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

  // 3. Fix signRenderer
  const signRendererStart = code.indexOf('function signRenderer(texture) {');
  const signRendererEnd = code.indexOf('SpecialRenderers.signRenderer = signRenderer;');
  if (signRendererStart !== -1 && signRendererEnd !== -1) {
    const newSignCode = `function signRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 8, 7],
                    to: [20, 20, 9],
                    faces: {
                        north: { uv: [6.5, 1, 0.5, 7], texture: '#0' },
                        east: { uv: [0, 1, 0.5, 7], texture: '#0' },
                        south: { uv: [7, 1, 13, 7], texture: '#0' },
                        west: { uv: [6.5, 1, 7, 7], texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
                    },
                },
                {
                    from: [7, -6, 7],
                    to: [9, 8, 9],
                    faces: {
                        north: { uv: [1, 8, 0.5, 15], texture: '#0' },
                        east: { uv: [0, 8, 0.5, 15], texture: '#0' },
                        south: { uv: [1.5, 8, 2, 15], texture: '#0' },
                        west: { uv: [1, 8, 1.5, 15], texture: '#0' },
                        up: { uv: [1, 8, 0.5, 7], texture: '#0' },
                        down: { uv: [1.5, 7, 1, 8], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }\n    `;
    code = code.substring(0, signRendererStart) + newSignCode + code.substring(signRendererEnd);
  }

  // 4. Fix wallSignRenderer
  const wallSignRendererStart = code.indexOf('function wallSignRenderer(texture) {');
  const wallSignRendererEnd = code.indexOf('SpecialRenderers.wallSignRenderer = wallSignRenderer;');
  if (wallSignRendererStart !== -1 && wallSignRendererEnd !== -1) {
    const newWallSignCode = `function wallSignRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 4, 17],
                    to: [20, 16, 19],
                    faces: {
                        north: { uv: [6.5, 1, 0.5, 7], texture: '#0' },
                        east: { uv: [0, 1, 0.5, 7], texture: '#0' },
                        south: { uv: [7, 1, 13, 7], texture: '#0' },
                        west: { uv: [6.5, 1, 7, 7], texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }\n    `;
    code = code.substring(0, wallSignRendererStart) + newWallSignCode + code.substring(wallSignRendererEnd);
  }

  // 5. Fix hangingSignRenderer
  const hangingSignRendererStart = code.indexOf('function hangingSignRenderer(texture) {');
  const hangingSignRendererEnd = code.indexOf('SpecialRenderers.hangingSignRenderer = hangingSignRenderer;');
  if (hangingSignRendererStart !== -1 && hangingSignRendererEnd !== -1) {
    const newHangingSignCode = `function hangingSignRenderer(texture) {
        return (attached, atlas) => {
            const boardElement = {
                from: [1, 0, 7],
                to: [15, 10, 9],
                faces: {
                    north: { uv: [7.5, 8, 0.5, 13], texture: '#0' },
                    east: { uv: [0, 8, 0.5, 13], texture: '#0' },
                    south: { uv: [8, 8, 15, 13], texture: '#0' },
                    west: { uv: [4, 8, 4.5, 13], texture: '#0' },
                    up: { uv: [0.5, 7, 4, 8], texture: '#0' },
                    down: { uv: [4, 13, 7.5, 14], texture: '#0' },
                },
            };
            if (attached) {
                return new BlockModel(undefined, {
                    0: texture.withPrefix('entity/signs/hanging/').toString(),
                }, [
                    boardElement,
                    {
                        from: [2, 10, 8],
                        to: [14, 16, 8],
                        faces: {
                            north: { uv: [16, 0, 14, 6], texture: '#0' },
                            south: { uv: [14, 0, 16, 6], texture: '#0' },
                        },
                    },
                ]).getMesh(atlas, Cull.none());
            }
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/hanging/').toString(),
            }, [
                boardElement,
                // Left chain - 45 deg crossed planes (X-shape) y=10..16
                {
                    from: [1.5, 10, 8],
                    to: [4.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: {
                        north: { uv: [16, 0, 14, 6], texture: '#0' },
                        south: { uv: [14, 0, 16, 6], texture: '#0' },
                    },
                },
                {
                    from: [3, 10, 6.5],
                    to: [3, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: {
                        east: { uv: [16, 0, 14, 6], texture: '#0' },
                        west: { uv: [14, 0, 16, 6], texture: '#0' },
                    },
                },
                // Right chain - 45 deg crossed planes (X-shape) y=10..16
                {
                    from: [11.5, 10, 8],
                    to: [14.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: {
                        north: { uv: [16, 0, 14, 6], texture: '#0' },
                        south: { uv: [14, 0, 16, 6], texture: '#0' },
                    },
                },
                {
                    from: [13, 10, 6.5],
                    to: [13, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: {
                        east: { uv: [16, 0, 14, 6], texture: '#0' },
                        west: { uv: [14, 0, 16, 6], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }\n    `;
    code = code.substring(0, hangingSignRendererStart) + newHangingSignCode + code.substring(hangingSignRendererEnd);
  }

  // 6. Fix wallHangingSignRenderer
  const wallHangingSignRendererStart = code.indexOf('function wallHangingSignRenderer(woodType) {');
  const wallHangingSignRendererEnd = code.indexOf('SpecialRenderers.wallHangingSignRenderer = wallHangingSignRenderer;');
  if (wallHangingSignRendererStart !== -1 && wallHangingSignRendererEnd !== -1) {
    const newWallHangingSignCode = `function wallHangingSignRenderer(woodType) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: \`entity/signs/hanging/\${woodType}\`,
            }, [
                // Board
                {
                    from: [1, 0, 7],
                    to: [15, 10, 9],
                    faces: {
                        north: { uv: [7.5, 8, 0.5, 13], texture: '#0' },
                        east: { uv: [0, 8, 0.5, 13], texture: '#0' },
                        south: { uv: [8, 8, 15, 13], texture: '#0' },
                        west: { uv: [4, 8, 4.5, 13], texture: '#0' },
                        up: { uv: [0.5, 7, 4, 8], texture: '#0' },
                        down: { uv: [4, 13, 7.5, 14], texture: '#0' },
                    },
                },
                // Horizontal Bar (y=14..16)
                {
                    from: [0, 14, 6],
                    to: [16, 16, 10],
                    faces: {
                        north: { uv: [1, 2, 5, 3], texture: '#0' },
                        east: { uv: [0, 2, 1, 3], texture: '#0' },
                        south: { uv: [6, 2, 10, 3], texture: '#0' },
                        west: { uv: [5, 2, 6, 3], texture: '#0' },
                        up: { uv: [5, 2, 1, 0], texture: '#0' },
                        down: { uv: [9, 0, 5, 2], texture: '#0' },
                    },
                },
                // Left chain - 45 deg crossed planes below bar (y=10..14)
                {
                    from: [1.5, 10, 8],
                    to: [4.5, 14, 8],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: {
                        north: { uv: [16, 2, 14, 6], texture: '#0' },
                        south: { uv: [14, 2, 16, 6], texture: '#0' },
                    },
                },
                {
                    from: [3, 10, 6.5],
                    to: [3, 14, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: {
                        east: { uv: [16, 2, 14, 6], texture: '#0' },
                        west: { uv: [14, 2, 16, 6], texture: '#0' },
                    },
                },
                // Right chain - 45 deg crossed planes below bar (y=10..14)
                {
                    from: [11.5, 10, 8],
                    to: [14.5, 14, 8],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: {
                        north: { uv: [16, 2, 14, 6], texture: '#0' },
                        south: { uv: [14, 2, 16, 6], texture: '#0' },
                    },
                },
                {
                    from: [13, 10, 6.5],
                    to: [13, 14, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: {
                        east: { uv: [16, 2, 14, 6], texture: '#0' },
                        west: { uv: [14, 2, 16, 6], texture: '#0' },
                    },
                },
                // Left chain wrapping bands around horizontal bar (y=14..16)
                {
                    from: [1.5, 14, 5.9],
                    to: [4.5, 16, 5.9],
                    faces: {
                        north: { uv: [16, 0, 14, 2], texture: '#0' },
                        south: { uv: [14, 0, 16, 2], texture: '#0' },
                    },
                },
                {
                    from: [1.5, 14, 10.1],
                    to: [4.5, 16, 10.1],
                    faces: {
                        north: { uv: [16, 0, 14, 2], texture: '#0' },
                        south: { uv: [14, 0, 16, 2], texture: '#0' },
                    },
                },
                // Right chain wrapping bands around horizontal bar (y=14..16)
                {
                    from: [11.5, 14, 5.9],
                    to: [14.5, 16, 5.9],
                    faces: {
                        north: { uv: [16, 0, 14, 2], texture: '#0' },
                        south: { uv: [14, 0, 16, 2], texture: '#0' },
                    },
                },
                {
                    from: [11.5, 14, 10.1],
                    to: [14.5, 16, 10.1],
                    faces: {
                        north: { uv: [16, 0, 14, 2], texture: '#0' },
                        south: { uv: [14, 0, 16, 2], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }\n    `;
    code = code.substring(0, wallHangingSignRendererStart) + newWallHangingSignCode + code.substring(wallHangingSignRendererEnd);
  }

  // 7. Force re-population of Sign and HangingSign maps
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
