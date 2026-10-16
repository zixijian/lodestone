const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../web_android/node_modules/@mattzh72/lodestone/lib/render/SpecialRenderer.js');

if (fs.existsSync(targetPath)) {
  let code = fs.readFileSync(targetPath, 'utf-8');

  // 1. Update WoodTypes list
  code = code.replace(
    /const WoodTypes = \[\s*[\s\S]*?\s*\];/g,
    "const WoodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'mangrove', 'bamboo', 'cherry', 'pale_oak', 'poplar'];"
  );

  // 2. Standard sign & wall sign UV mapping (North: [0.5, 1, 6.5, 7], South: [7, 1, 13, 7])
  const signRendererCode = `function signRenderer(texture) {
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
                },
                {
                    from: [7, -6, 7],
                    to: [9, 8, 9],
                    faces: {
                        north: { uv: [0.5, 8, 1, 15], texture: '#0' },
                        east: { uv: [0, 8, 0.5, 15], texture: '#0' },
                        south: { uv: [1.5, 8, 2, 15], texture: '#0' },
                        west: { uv: [1, 8, 1.5, 15], texture: '#0' },
                        up: { uv: [1, 8, 0.5, 7], texture: '#0' },
                        down: { uv: [1.5, 7, 1, 8], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  const wallSignRendererCode = `function wallSignRenderer(texture) {
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
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/function signRenderer\(texture\) \{[\s\S]*?\n    \}/, signRendererCode);
  code = code.replace(/function wallSignRenderer\(texture\) \{[\s\S]*?\n    \}/, wallSignRendererCode);

  // 3. Hanging sign renderer with 45-degree crossed chain planes (y=10 to y=16) and exact UVs
  const hangingSignRendererCode = `function hangingSignRenderer(texture) {
        return (attached, atlas) => {
            if (attached) {
                return new BlockModel(undefined, {
                    0: texture.withPrefix('entity/signs/hanging/').toString(),
                }, [
                    {
                        from: [1, 0, 7],
                        to: [15, 10, 9],
                        faces: {
                            north: { uv: [0.5, 8, 7.5, 13], texture: '#0' },
                            east: { uv: [0, 8, 0.5, 13], texture: '#0' },
                            south: { uv: [8, 8, 15, 13], texture: '#0' },
                            west: { uv: [7.5, 8, 8, 13], texture: '#0' },
                            up: { uv: [0.5, 7, 7.5, 8], texture: '#0' },
                            down: { uv: [7.5, 13, 14.5, 14], texture: '#0' },
                        },
                    },
                    {
                        from: [2, 10, 8],
                        to: [14, 16, 8],
                        faces: {
                            north: { uv: [14, 0, 16, 6], texture: '#0' },
                            south: { uv: [16, 0, 14, 6], texture: '#0' },
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
                        north: { uv: [0.5, 8, 7.5, 13], texture: '#0' },
                        east: { uv: [0, 8, 0.5, 13], texture: '#0' },
                        south: { uv: [8, 8, 15, 13], texture: '#0' },
                        west: { uv: [7.5, 8, 8, 13], texture: '#0' },
                        up: { uv: [0.5, 7, 7.5, 8], texture: '#0' },
                        down: { uv: [7.5, 13, 14.5, 14], texture: '#0' },
                    },
                },
                {
                    from: [1.5, 10, 8],
                    to: [4.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: {
                        north: { uv: [14, 0, 16, 6], texture: '#0' },
                        south: { uv: [16, 0, 14, 6], texture: '#0' },
                    },
                },
                {
                    from: [3, 10, 6.5],
                    to: [3, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: {
                        east: { uv: [14, 0, 16, 6], texture: '#0' },
                        west: { uv: [16, 0, 14, 6], texture: '#0' },
                    },
                },
                {
                    from: [11.5, 10, 8],
                    to: [14.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: {
                        north: { uv: [14, 0, 16, 6], texture: '#0' },
                        south: { uv: [16, 0, 14, 6], texture: '#0' },
                    },
                },
                {
                    from: [13, 10, 6.5],
                    to: [13, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: {
                        east: { uv: [14, 0, 16, 6], texture: '#0' },
                        west: { uv: [16, 0, 14, 6], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  const wallHangingSignRendererCode = `function wallHangingSignRenderer(woodType) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: \`entity/signs/hanging/\${woodType}\`,
            }, [
                {
                    from: [1, 0, 7],
                    to: [15, 10, 9],
                    faces: {
                        north: { uv: [0.5, 8, 7.5, 13], texture: '#0' },
                        east: { uv: [0, 8, 0.5, 13], texture: '#0' },
                        south: { uv: [8, 8, 15, 13], texture: '#0' },
                        west: { uv: [7.5, 8, 8, 13], texture: '#0' },
                        up: { uv: [0.5, 7, 7.5, 8], texture: '#0' },
                        down: { uv: [7.5, 13, 14.5, 14], texture: '#0' },
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
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: {
                        north: { uv: [14, 0, 16, 6], texture: '#0' },
                        south: { uv: [16, 0, 14, 6], texture: '#0' },
                    },
                },
                {
                    from: [3, 10, 6.5],
                    to: [3, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: {
                        east: { uv: [14, 0, 16, 6], texture: '#0' },
                        west: { uv: [16, 0, 14, 6], texture: '#0' },
                    },
                },
                {
                    from: [11.5, 10, 8],
                    to: [14.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: {
                        north: { uv: [14, 0, 16, 6], texture: '#0' },
                        south: { uv: [16, 0, 14, 6], texture: '#0' },
                    },
                },
                {
                    from: [13, 10, 6.5],
                    to: [13, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: {
                        east: { uv: [14, 0, 16, 6], texture: '#0' },
                        west: { uv: [16, 0, 14, 6], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/function hangingSignRenderer\(texture\) \{[\s\S]*?\n    \}/, hangingSignRendererCode);
  code = code.replace(/function wallHangingSignRenderer\(woodType\) \{[\s\S]*?\n    \}/, wallHangingSignRendererCode);

  // 4. Force re-population of Sign and HangingSign maps to bind patched renderer functions and include pale_oak/poplar
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
