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

  // 2. Remove 2/3 scale in ceiling hangingSignRenderer & wallHangingSignRenderer & signRenderer & wallSignRenderer inside getBlockMesh
  code = code.replace(
    /mat4\.scale\(t,\s*t,\s*\[2\s*\/\s*3,\s*2\s*\/\s*3,\s*2\s*\/\s*3\]\);\s*\n\s*mat4\.translate\(t,\s*t,\s*\[-8,\s*-8,\s*-8\]\);\s*\n\s*mesh\.merge\(hangingSignRenderer/g,
    "mat4.translate(t, t, [-8, -8, -8]);\n            mesh.merge(hangingSignRenderer"
  );

  code = code.replace(
    /mat4\.scale\(t,\s*t,\s*\[2\s*\/\s*3,\s*2\s*\/\s*3,\s*2\s*\/\s*3\]\);\s*\n\s*mat4\.translate\(t,\s*t,\s*\[-8,\s*-8,\s*-8\]\);\s*\n\s*mesh\.merge\(wallHangingSignRenderer/g,
    "mat4.translate(t, t, [-8, -8, -8]);\n            mesh.merge(wallHangingSignRenderer"
  );

  code = code.replace(
    /mat4\.scale\(t,\s*t,\s*\[2\s*\/\s*3,\s*2\s*\/\s*3,\s*2\s*\/\s*3\]\);\s*\n\s*mat4\.translate\(t,\s*t,\s*\[-8,\s*-8,\s*-8\]\);\s*\n\s*mesh\.merge\(signRenderer/g,
    "mat4.translate(t, t, [-8, -8, -8]);\n            mesh.merge(signRenderer"
  );

  code = code.replace(
    /mat4\.scale\(t,\s*t,\s*\[2\s*\/\s*3,\s*2\s*\/\s*3,\s*2\s*\/\s*3\]\);\s*\n\s*mat4\.translate\(t,\s*t,\s*\[-8,\s*-8,\s*-8\]\);\s*\n\s*mesh\.merge\(wallSignRenderer/g,
    "mat4.translate(t, t, [-8, -8, -8]);\n            mesh.merge(wallSignRenderer"
  );

  // 3. Precise 1:1 Scale Model & UV mapping for Standing Signs and Wall Signs (32x32 texture scale: pixel / 2)
  const newSignRendererFunc = `function signRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [0, 7, 7],
                    to: [16, 15, 9],
                    faces: {
                        north: { uv: [1, 1, 8, 5], texture: '#0' },
                        east: { uv: [0, 1, 1, 5], texture: '#0' },
                        south: { uv: [9, 1, 16, 5], texture: '#0' },
                        west: { uv: [8, 1, 9, 5], texture: '#0' },
                        up: { uv: [1, 0, 8, 1], texture: '#0' },
                        down: { uv: [8, 0, 15, 1], texture: '#0' },
                    },
                },
                {
                    from: [7, 0, 7],
                    to: [9, 7, 9],
                    faces: {
                        north: { uv: [1, 5, 2, 12], texture: '#0' },
                        east: { uv: [2, 5, 3, 12], texture: '#0' },
                        south: { uv: [3, 5, 4, 12], texture: '#0' },
                        west: { uv: [0, 5, 1, 12], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/function signRenderer\(texture\) \{[\s\S]*?\n    \}/g, newSignRendererFunc);

  const newWallSignRendererFunc = `function wallSignRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [0, 4.5, 14],
                    to: [16, 12.5, 16],
                    faces: {
                        north: { uv: [1, 1, 8, 5], texture: '#0' },
                        east: { uv: [0, 1, 1, 5], texture: '#0' },
                        south: { uv: [9, 1, 16, 5], texture: '#0' },
                        west: { uv: [8, 1, 9, 5], texture: '#0' },
                        up: { uv: [1, 0, 8, 1], texture: '#0' },
                        down: { uv: [8, 0, 15, 1], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/function wallSignRenderer\(texture\) \{[\s\S]*?\n    \}/g, newWallSignRendererFunc);

  // 4. Precise UV mapping for Ceiling and Wall Hanging Signs (32x32 texture scale: pixel / 2)
  const newHangingSignRendererFunc = `function hangingSignRenderer(texture) {
        return (attached, atlas) => {
            const chainFacesNormal = {
                north: { uv: [16, 0, 14, 6], texture: '#0' },
                south: { uv: [14, 0, 16, 6], texture: '#0' },
            };
            const chainFacesCross = {
                east: { uv: [14, 0, 16, 6], texture: '#0' },
                west: { uv: [16, 0, 14, 6], texture: '#0' },
            };
            if (attached) {
                return new BlockModel(undefined, {
                    0: texture.withPrefix('entity/signs/hanging/').toString(),
                }, [
                    {
                        from: [1, 0, 7],
                        to: [15, 10, 9],
                        faces: {
                            north: { uv: [1, 8, 8, 13], texture: '#0' },
                            east: { uv: [0, 8, 1, 13], texture: '#0' },
                            south: { uv: [9, 8, 16, 13], texture: '#0' },
                            west: { uv: [8, 8, 9, 13], texture: '#0' },
                            up: { uv: [1, 7, 8, 8], texture: '#0' },
                            down: { uv: [8, 7, 15, 8], texture: '#0' },
                        },
                    },
                    {
                        from: [1.5, 10, 8],
                        to: [4.5, 16, 8],
                        rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                        faces: chainFacesNormal,
                    },
                    {
                        from: [3, 10, 6.5],
                        to: [3, 16, 9.5],
                        rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                        faces: chainFacesCross,
                    },
                    {
                        from: [11.5, 10, 8],
                        to: [14.5, 16, 8],
                        rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                        faces: chainFacesNormal,
                    },
                    {
                        from: [13, 10, 6.5],
                        to: [13, 16, 9.5],
                        rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                        faces: chainFacesCross,
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
                        north: { uv: [1, 8, 8, 13], texture: '#0' },
                        east: { uv: [0, 8, 1, 13], texture: '#0' },
                        south: { uv: [9, 8, 16, 13], texture: '#0' },
                        west: { uv: [8, 8, 9, 13], texture: '#0' },
                        up: { uv: [1, 7, 8, 8], texture: '#0' },
                        down: { uv: [8, 7, 15, 8], texture: '#0' },
                    },
                },
                {
                    from: [1.5, 10, 8],
                    to: [4.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: chainFacesNormal,
                },
                {
                    from: [3, 10, 6.5],
                    to: [3, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: chainFacesCross,
                },
                {
                    from: [11.5, 10, 8],
                    to: [14.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: chainFacesNormal,
                },
                {
                    from: [13, 10, 6.5],
                    to: [13, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: chainFacesCross,
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/function hangingSignRenderer\(texture\) \{[\s\S]*?\n    \}/g, newHangingSignRendererFunc);

  const newWallHangingSignRendererFunc = `function wallHangingSignRenderer(woodType) {
        return (atlas) => {
            const chainFacesNormal = {
                north: { uv: [16, 0, 14, 6], texture: '#0' },
                south: { uv: [14, 0, 16, 6], texture: '#0' },
            };
            const chainFacesCross = {
                east: { uv: [14, 0, 16, 6], texture: '#0' },
                west: { uv: [16, 0, 14, 6], texture: '#0' },
            };
            return new BlockModel(undefined, {
                0: \`entity/signs/hanging/\${woodType}\`,
            }, [
                {
                    from: [1, 0, 7],
                    to: [15, 10, 9],
                    faces: {
                        north: { uv: [1, 8, 8, 13], texture: '#0' },
                        east: { uv: [0, 8, 1, 13], texture: '#0' },
                        south: { uv: [9, 8, 16, 13], texture: '#0' },
                        west: { uv: [8, 8, 9, 13], texture: '#0' },
                        up: { uv: [1, 7, 8, 8], texture: '#0' },
                        down: { uv: [8, 7, 15, 8], texture: '#0' },
                    },
                },
                {
                    from: [0, 14, 6],
                    to: [16, 16, 10],
                    faces: {
                        north: { uv: [2, 2, 10, 3], texture: '#0' },
                        east: { uv: [0, 2, 2, 3], texture: '#0' },
                        south: { uv: [10, 2, 16, 3], texture: '#0' },
                        west: { uv: [10, 2, 12, 3], texture: '#0' },
                        up: { uv: [2, 0, 10, 2], texture: '#0' },
                        down: { uv: [10, 0, 16, 2], texture: '#0' },
                    },
                },
                {
                    from: [1.5, 10, 8],
                    to: [4.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: chainFacesNormal,
                },
                {
                    from: [3, 10, 6.5],
                    to: [3, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [3, 12, 8] },
                    faces: chainFacesCross,
                },
                {
                    from: [11.5, 10, 8],
                    to: [14.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: chainFacesNormal,
                },
                {
                    from: [13, 10, 6.5],
                    to: [13, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [13, 12, 8] },
                    faces: chainFacesCross,
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/function wallHangingSignRenderer\(woodType\) \{[\s\S]*?\n    \}/g, newWallHangingSignRendererFunc);

  // 5. Force re-population of Sign and HangingSign maps
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
  console.log('Successfully applied updated Lodestone SpecialRenderer patch!');
} else {
  console.warn('Lodestone SpecialRenderer.js not found, skipping patch.');
}
