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

  // 3. Update signRenderer function for 32x32 sign texture atlas (Standing sign: shifted 1px / 0.5 UV up)
  const newSignRenderer = `function signRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 8, 7],
                    to: [20, 20, 9],
                    faces: {
                        north: { uv: [0, 0.0, 12, 6.0], texture: '#0' },
                        east: { uv: [12, 0.0, 13, 6.0], texture: '#0' },
                        south: { uv: [0, 8.0, 12, 14.0], texture: '#0' },
                        west: { uv: [12, 8.0, 13, 14.0], texture: '#0' },
                        up: { uv: [0, 0.0, 12, 0.5], texture: '#0' },
                        down: { uv: [0, 6.0, 12, 6.5], texture: '#0' },
                    },
                },
                {
                    from: [7, -6, 7],
                    to: [9, 8, 9],
                    faces: {
                        north: { uv: [14, 8, 15, 15], texture: '#0' },
                        east: { uv: [15, 8, 16, 15], texture: '#0' },
                        south: { uv: [14, 8, 15, 15], texture: '#0' },
                        west: { uv: [15, 8, 16, 15], texture: '#0' },
                        up: { uv: [14, 7.5, 15, 8], texture: '#0' },
                        down: { uv: [15, 7.5, 16, 8], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/    function signRenderer\(texture\) \{[\s\S]*?\n    \}\n    SpecialRenderers\.signRenderer = signRenderer;/g, `    ${newSignRenderer}\n    SpecialRenderers.signRenderer = signRenderer;`);

  // 4. Update wallSignRenderer function for 32x32 sign texture atlas (Wall sign: shifted 1px / 0.5 UV down)
  const newWallSignRenderer = `function wallSignRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 4, 17],
                    to: [20, 16, 19],
                    faces: {
                        north: { uv: [0, 1.0, 12, 7.0], texture: '#0' },
                        east: { uv: [12, 1.0, 13, 7.0], texture: '#0' },
                        south: { uv: [0, 9.0, 12, 15.0], texture: '#0' },
                        west: { uv: [12, 9.0, 13, 15.0], texture: '#0' },
                        up: { uv: [0, 0.5, 12, 1.0], texture: '#0' },
                        down: { uv: [0, 7.0, 12, 7.5], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/    function wallSignRenderer\(texture\) \{[\s\S]*?\n    \}\n    SpecialRenderers\.wallSignRenderer = wallSignRenderer;/g, `    ${newWallSignRenderer}\n    SpecialRenderers.wallSignRenderer = wallSignRenderer;`);

  // 5. Update hangingSignRenderer function for 32x32 hanging sign texture atlas
  const newHangingSignRenderer = `function hangingSignRenderer(texture) {
        return (attached, atlas) => {
            const chainRingFull = [14, 4, 16, 6];
            const chainRingTop2 = [14, 4, 16, 5];
            const chainRingBot2 = [14, 5, 16, 6];

            if (attached) {
                return new BlockModel(undefined, {
                    0: texture.withPrefix('entity/signs/hanging/').toString(),
                }, [
                    {
                        from: [1, 0, 7],
                        to: [15, 10, 9],
                        faces: {
                            south: { uv: [1, 8, 8, 13], texture: '#0' },
                            west: { uv: [0, 8, 1, 13], texture: '#0' },
                            north: { uv: [9, 8, 16, 13], texture: '#0' },
                            east: { uv: [8, 8, 9, 13], texture: '#0' },
                            up: { uv: [1, 7, 8, 8], texture: '#0' },
                            down: { uv: [1, 7, 8, 8], texture: '#0' },
                        },
                    },
                    // Left vertical chain: 3 orthogonal planar rings (Bottom y=10..12, Middle y=11..15 full ring, Top y=14..16)
                    {
                        from: [2, 10, 8],
                        to: [4, 12, 8],
                        faces: {
                            north: { uv: chainRingBot2, texture: '#0' },
                            south: { uv: chainRingBot2, texture: '#0' },
                        },
                    },
                    {
                        from: [3, 11, 7],
                        to: [3, 15, 9],
                        faces: {
                            east: { uv: chainRingFull, texture: '#0' },
                            west: { uv: chainRingFull, texture: '#0' },
                        },
                    },
                    {
                        from: [2, 14, 8],
                        to: [4, 16, 8],
                        faces: {
                            north: { uv: chainRingTop2, texture: '#0' },
                            south: { uv: chainRingTop2, texture: '#0' },
                        },
                    },
                    // Right vertical chain: 3 orthogonal planar rings (Bottom y=10..12, Middle y=11..15 full ring, Top y=14..16)
                    {
                        from: [12, 10, 8],
                        to: [14, 12, 8],
                        faces: {
                            north: { uv: chainRingBot2, texture: '#0' },
                            south: { uv: chainRingBot2, texture: '#0' },
                        },
                    },
                    {
                        from: [13, 11, 7],
                        to: [13, 15, 9],
                        faces: {
                            east: { uv: chainRingFull, texture: '#0' },
                            west: { uv: chainRingFull, texture: '#0' },
                        },
                    },
                    {
                        from: [12, 14, 8],
                        to: [14, 16, 8],
                        faces: {
                            north: { uv: chainRingTop2, texture: '#0' },
                            south: { uv: chainRingTop2, texture: '#0' },
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
                        south: { uv: [1, 8, 8, 13], texture: '#0' },
                        west: { uv: [0, 8, 1, 13], texture: '#0' },
                        north: { uv: [9, 8, 16, 13], texture: '#0' },
                        east: { uv: [8, 8, 9, 13], texture: '#0' },
                        up: { uv: [1, 7, 8, 8], texture: '#0' },
                        down: { uv: [1, 7, 8, 8], texture: '#0' },
                    },
                },
                // Left chain: 2 orthogonal planar rings (lower y=10..14, upper y=12..16)
                {
                    from: [3, 10, 6.5],
                    to: [3, 14, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: {
                        east: { uv: chainRingFull, texture: '#0' },
                        west: { uv: chainRingFull, texture: '#0' },
                    },
                },
                {
                    from: [1.5, 12, 8],
                    to: [4.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [3, 14, 8] },
                    faces: {
                        north: { uv: chainRingFull, texture: '#0' },
                        south: { uv: chainRingFull, texture: '#0' },
                    },
                },
                // Right chain: 2 orthogonal planar rings (lower y=10..14, upper y=12..16)
                {
                    from: [13, 10, 6.5],
                    to: [13, 14, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: {
                        east: { uv: chainRingFull, texture: '#0' },
                        west: { uv: chainRingFull, texture: '#0' },
                    },
                },
                {
                    from: [11.5, 12, 8],
                    to: [14.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [13, 14, 8] },
                    faces: {
                        north: { uv: chainRingFull, texture: '#0' },
                        south: { uv: chainRingFull, texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/    function hangingSignRenderer\(texture\) \{[\s\S]*?\n    \}\n    SpecialRenderers\.hangingSignRenderer = hangingSignRenderer;/g, `    ${newHangingSignRenderer}\n    SpecialRenderers.hangingSignRenderer = hangingSignRenderer;`);

  // 6. Update wallHangingSignRenderer function for 32x32 hanging sign texture atlas
  const newWallHangingSignRenderer = `function wallHangingSignRenderer(woodType) {
        return (atlas) => {
            const chainRingTop3 = [14, 4, 16, 5.5];
            const chainRingBot3 = [14, 4.5, 16, 6];

            return new BlockModel(undefined, {
                0: \`entity/signs/hanging/\${woodType}\`,
            }, [
                {
                    from: [1, 0, 7],
                    to: [15, 10, 9],
                    faces: {
                        south: { uv: [1, 8, 8, 13], texture: '#0' },
                        west: { uv: [0, 8, 1, 13], texture: '#0' },
                        north: { uv: [9, 8, 16, 13], texture: '#0' },
                        east: { uv: [8, 8, 9, 13], texture: '#0' },
                        up: { uv: [1, 7, 8, 8], texture: '#0' },
                        down: { uv: [1, 7, 8, 8], texture: '#0' },
                    },
                },
                {
                    from: [0, 14, 6],
                    to: [16, 16, 10],
                    faces: {
                        north: { uv: [0, 4, 8, 6], texture: '#0' },
                        east: { uv: [8, 0, 10, 2], texture: '#0' },
                        south: { uv: [0, 6, 8, 8], texture: '#0' },
                        west: { uv: [8, 2, 10, 4], texture: '#0' },
                        up: { uv: [0, 0, 8, 2], texture: '#0' },
                        down: { uv: [0, 2, 8, 4], texture: '#0' },
                    },
                },
                // Left chain: 2 orthogonal planar rings (lower y=10..13, upper y=11..14)
                {
                    from: [3, 10, 6.5],
                    to: [3, 13, 9.5],
                    faces: {
                        east: { uv: chainRingBot3, texture: '#0' },
                        west: { uv: chainRingBot3, texture: '#0' },
                    },
                },
                {
                    from: [1.5, 11, 8],
                    to: [4.5, 14, 8],
                    faces: {
                        north: { uv: chainRingTop3, texture: '#0' },
                        south: { uv: chainRingTop3, texture: '#0' },
                    },
                },
                // Right chain: 2 orthogonal planar rings (lower y=10..13, upper y=11..14)
                {
                    from: [13, 10, 6.5],
                    to: [13, 13, 9.5],
                    faces: {
                        east: { uv: chainRingBot3, texture: '#0' },
                        west: { uv: chainRingBot3, texture: '#0' },
                    },
                },
                {
                    from: [11.5, 11, 8],
                    to: [14.5, 14, 8],
                    faces: {
                        north: { uv: chainRingTop3, texture: '#0' },
                        south: { uv: chainRingTop3, texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/    function wallHangingSignRenderer\(woodType\) \{[\s\S]*?\n    \}\n    SpecialRenderers\.wallHangingSignRenderer = wallHangingSignRenderer;/g, `    ${newWallHangingSignRenderer}\n    SpecialRenderers.wallHangingSignRenderer = wallHangingSignRenderer;`);

  // Force re-population of Sign and HangingSign maps to bind patched renderer functions and include pale_oak/poplar
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
