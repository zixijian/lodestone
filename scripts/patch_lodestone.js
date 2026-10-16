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

  // 3. Replace hangingSignRenderer function
  const hangingSignRendererPattern = /function hangingSignRenderer\(texture\) \{\s*return \(attached, atlas\) => \{[\s\S]*?SpecialRenderers\.hangingSignRenderer = hangingSignRenderer;/g;

  const newHangingSignRenderer = `function hangingSignRenderer(texture) {
        return (attached, atlas) => {
            if (attached) {
                return new BlockModel(undefined, {
                    0: texture.withPrefix('entity/signs/hanging/').toString(),
                }, [
                    {
                        from: [1, 0, 7],
                        to: [15, 10, 9],
                        faces: {
                            north: { uv: [4.0, 4.0, 0.5, 6.5], texture: '#0' },
                            east: { uv: [0, 4.0, 0.5, 6.5], texture: '#0' },
                            south: { uv: [7.5, 4.0, 11.0, 6.5], texture: '#0' },
                            west: { uv: [4.0, 4.0, 4.5, 6.5], texture: '#0' },
                            up: { uv: [0.5, 3.5, 4.0, 4.0], texture: '#0' },
                            down: { uv: [4.0, 6.5, 7.5, 7.0], texture: '#0' },
                        },
                    },
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
                {
                    from: [1, 0, 7],
                    to: [15, 10, 9],
                    faces: {
                        north: { uv: [4.0, 4.0, 0.5, 6.5], texture: '#0' },
                        east: { uv: [0, 4.0, 0.5, 6.5], texture: '#0' },
                        south: { uv: [7.5, 4.0, 11.0, 6.5], texture: '#0' },
                        west: { uv: [4.0, 4.0, 4.5, 6.5], texture: '#0' },
                        up: { uv: [0.5, 3.5, 4.0, 4.0], texture: '#0' },
                        down: { uv: [4.0, 6.5, 7.5, 7.0], texture: '#0' },
                    },
                },
                // Left chain - lower section (Y=10..13) rotated +45 deg
                {
                    from: [1.5, 10, 8],
                    to: [4.5, 13, 8],
                    rotation: { origin: [3, 11.5, 8], axis: 'y', angle: 45 },
                    faces: {
                        north: { uv: [16, 3, 14, 6], texture: '#0' },
                        south: { uv: [14, 3, 16, 6], texture: '#0' },
                    },
                },
                // Left chain - upper section (Y=13..16) rotated -45 deg
                {
                    from: [1.5, 13, 8],
                    to: [4.5, 16, 8],
                    rotation: { origin: [3, 14.5, 8], axis: 'y', angle: -45 },
                    faces: {
                        north: { uv: [16, 0, 14, 3], texture: '#0' },
                        south: { uv: [14, 0, 16, 3], texture: '#0' },
                    },
                },
                // Right chain - lower section (Y=10..13) rotated +45 deg
                {
                    from: [11.5, 10, 8],
                    to: [14.5, 13, 8],
                    rotation: { origin: [13, 11.5, 8], axis: 'y', angle: 45 },
                    faces: {
                        north: { uv: [16, 3, 14, 6], texture: '#0' },
                        south: { uv: [14, 3, 16, 6], texture: '#0' },
                    },
                },
                // Right chain - upper section (Y=13..16) rotated -45 deg
                {
                    from: [11.5, 13, 8],
                    to: [14.5, 16, 8],
                    rotation: { origin: [13, 14.5, 8], axis: 'y', angle: -45 },
                    faces: {
                        north: { uv: [16, 0, 14, 3], texture: '#0' },
                        south: { uv: [14, 0, 16, 3], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }
    SpecialRenderers.hangingSignRenderer = hangingSignRenderer;`;

  code = code.replace(hangingSignRendererPattern, newHangingSignRenderer);

  // 4. Replace wallHangingSignRenderer
  const wallHangingSignRendererPattern = /function wallHangingSignRenderer\(woodType\) \{\s*return \(atlas\) => \{[\s\S]*?SpecialRenderers\.wallHangingSignRenderer = wallHangingSignRenderer;/g;

  const newWallHangingSignRenderer = `function wallHangingSignRenderer(woodType) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: \`entity/signs/hanging/\${woodType}\`,
            }, [
                {
                    from: [1, 0, 7],
                    to: [15, 10, 9],
                    faces: {
                        north: { uv: [4.0, 4.0, 0.5, 6.5], texture: '#0' },
                        east: { uv: [0, 4.0, 0.5, 6.5], texture: '#0' },
                        south: { uv: [7.5, 4.0, 11.0, 6.5], texture: '#0' },
                        west: { uv: [4.0, 4.0, 4.5, 6.5], texture: '#0' },
                        up: { uv: [0.5, 3.5, 4.0, 4.0], texture: '#0' },
                        down: { uv: [4.0, 6.5, 7.5, 7.0], texture: '#0' },
                    },
                },
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
                {
                    from: [1.5, 10, 8],
                    to: [4.5, 16, 8],
                    rotation: { origin: [3, 13, 8], axis: 'y', angle: 45 },
                    faces: {
                        north: { uv: [16, 0, 14, 6], texture: '#0' },
                        south: { uv: [14, 0, 16, 6], texture: '#0' },
                    },
                },
                {
                    from: [11.5, 10, 8],
                    to: [14.5, 16, 8],
                    rotation: { origin: [13, 13, 8], axis: 'y', angle: -45 },
                    faces: {
                        north: { uv: [16, 0, 14, 6], texture: '#0' },
                        south: { uv: [14, 0, 16, 6], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }
    SpecialRenderers.wallHangingSignRenderer = wallHangingSignRenderer;`;

  code = code.replace(wallHangingSignRendererPattern, newWallHangingSignRenderer);

  // 5. Replace signRenderer & wallSignRenderer
  const signPattern = /function signRenderer\(texture\) \{\s*return \(atlas\) => \{[\s\S]*?SpecialRenderers\.signRenderer = signRenderer;/g;

  const newSignRenderer = `function signRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 8, 7],
                    to: [20, 20, 9],
                    faces: {
                        north: { uv: [7.0, 1.0, 1.0, 7.0], texture: '#0' },
                        east: { uv: [0, 1, 0.5, 7], texture: '#0' },
                        south: { uv: [7.0, 1.0, 13.0, 7.0], texture: '#0' },
                        west: { uv: [6.5, 1, 7, 7], texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
                    },
                },
                {
                    from: [-1, 0, 7],
                    to: [1, 8, 9],
                    faces: {
                        north: { uv: [0.5, 7, 1, 9], texture: '#0' },
                        east: { uv: [0, 7, 0.5, 9], texture: '#0' },
                        south: { uv: [1.5, 7, 2, 9], texture: '#0' },
                        west: { uv: [1, 7, 1.5, 9], texture: '#0' },
                        down: { uv: [1, 9, 0.5, 9.5], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }
    SpecialRenderers.signRenderer = signRenderer;`;

  code = code.replace(signPattern, newSignRenderer);

  const wallSignPattern = /function wallSignRenderer\(texture\) \{\s*return \(atlas\) => \{[\s\S]*?SpecialRenderers\.wallSignRenderer = wallSignRenderer;/g;

  const newWallSignRenderer = `function wallSignRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 4, 17],
                    to: [20, 16, 19],
                    faces: {
                        north: { uv: [7.0, 1.0, 1.0, 7.0], texture: '#0' },
                        east: { uv: [0, 1, 0.5, 7], texture: '#0' },
                        south: { uv: [7.0, 1.0, 13.0, 7.0], texture: '#0' },
                        west: { uv: [6.5, 1, 7, 7], texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }
    SpecialRenderers.wallSignRenderer = wallSignRenderer;`;

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
