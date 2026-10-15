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

  // 2. Remove 2/3 scale in ceiling hangingSignRenderer & wallHangingSignRenderer inside getBlockMesh
  const oldHanging = `        const hangingSignRenderer = HangingSignRenderers.get(block.getName().toString());
        if (hangingSignRenderer !== undefined) {
            const attached = getStr(block, 'attached', 'false') === 'true';
            const rotation = getInt(block, 'rotation') / 16 * Math.PI * 2;
            const t = mat4.create();
            mat4.translate(t, t, [8, 8, 8]);
            mat4.rotateY(t, t, rotation);
            mat4.scale(t, t, [2 / 3, 2 / 3, 2 / 3]);
            mat4.translate(t, t, [-8, -8, -8]);
            mesh.merge(hangingSignRenderer(attached, atlas).transform(t));
        }`;

  const newHanging = `        const hangingSignRenderer = HangingSignRenderers.get(block.getName().toString());
        if (hangingSignRenderer !== undefined) {
            const attached = getStr(block, 'attached', 'false') === 'true';
            const rotation = getInt(block, 'rotation') / 16 * Math.PI * 2;
            const t = mat4.create();
            mat4.translate(t, t, [8, 8, 8]);
            mat4.rotateY(t, t, rotation);
            mat4.translate(t, t, [-8, -8, -8]);
            mesh.merge(hangingSignRenderer(attached, atlas).transform(t));
        }`;

  code = code.replace(oldHanging, newHanging);

  const oldWallHanging = `        const wallHangingSignRenderer = WallHangingSignRenderers.get(block.getName().toString());
        if (wallHangingSignRenderer !== undefined) {
            const facing = getStr(block, 'facing', 'south');
            const t = mat4.create();
            mat4.translate(t, t, [8, 8, 8]);
            mat4.rotateY(t, t, facing === 'west' ? Math.PI / 2 : facing === 'south' ? Math.PI : facing === 'east' ? Math.PI * 3 / 2 : 0);
            mat4.scale(t, t, [2 / 3, 2 / 3, 2 / 3]);
            mat4.translate(t, t, [-8, -8, -8]);
            mesh.merge(wallHangingSignRenderer(atlas).transform(t));
        }`;

  const newWallHanging = `        const wallHangingSignRenderer = WallHangingSignRenderers.get(block.getName().toString());
        if (wallHangingSignRenderer !== undefined) {
            const facing = getStr(block, 'facing', 'south');
            const t = mat4.create();
            mat4.translate(t, t, [8, 8, 8]);
            mat4.rotateY(t, t, facing === 'west' ? Math.PI / 2 : facing === 'south' ? Math.PI : facing === 'east' ? Math.PI * 3 / 2 : 0);
            mat4.translate(t, t, [-8, -8, -8]);
            mesh.merge(wallHangingSignRenderer(atlas).transform(t));
        }`;

  code = code.replace(oldWallHanging, newWallHanging);

  // 3. Fix chain texture UV mapping and cross-quads in hangingSignRenderer for attached=true
  const oldAttachedChainModel = `            if (attached) {
                return new BlockModel(undefined, {
                    0: texture.withPrefix('entity/signs/hanging/').toString(),
                }, [
                    {
                        from: [1, 0, 7],
                        to: [15, 10, 9],
                        faces: {
                            north: { uv: [0.5, 7, 4, 12], texture: '#0' },
                            east: { uv: [0, 7, 0.5, 12], texture: '#0' },
                            south: { uv: [4.5, 7, 8, 12], texture: '#0' },
                            west: { uv: [4, 7, 4.5, 12], texture: '#0' },
                            up: { uv: [4, 7, 0.5, 6], texture: '#0' },
                            down: { uv: [7.5, 6, 4, 7], texture: '#0' },
                        },
                    },
                    {
                        from: [2, 10, 8],
                        to: [14, 16, 8],
                        faces: {
                            north: { uv: [3.5, 3, 6.5, 6], texture: '#0' },
                            south: { uv: [3.5, 3, 6.5, 6], texture: '#0' },
                        },
                    },
                ]).getMesh(atlas, Cull.none());
            }`;

  const newAttachedChainModel = `            if (attached) {
                return new BlockModel(undefined, {
                    0: texture.withPrefix('entity/signs/hanging/').toString(),
                }, [
                    {
                        from: [1, 0, 7],
                        to: [15, 10, 9],
                        faces: {
                            north: { uv: [0.5, 7, 4, 12], texture: '#0' },
                            east: { uv: [0, 7, 0.5, 12], texture: '#0' },
                            south: { uv: [4.5, 7, 8, 12], texture: '#0' },
                            west: { uv: [4, 7, 4.5, 12], texture: '#0' },
                            up: { uv: [4, 7, 0.5, 6], texture: '#0' },
                            down: { uv: [7.5, 6, 4, 7], texture: '#0' },
                        },
                    },
                    {
                        from: [1.5, 10, 8],
                        to: [4.5, 16, 8],
                        faces: {
                            north: { uv: [0, 3, 0.75, 6], texture: '#0' },
                            south: { uv: [0, 3, 0.75, 6], texture: '#0' },
                        },
                    },
                    {
                        from: [3, 10, 6.5],
                        to: [3, 16, 9.5],
                        faces: {
                            east: { uv: [1.5, 3, 2.25, 6], texture: '#0' },
                            west: { uv: [1.5, 3, 2.25, 6], texture: '#0' },
                        },
                    },
                    {
                        from: [11.5, 10, 8],
                        to: [14.5, 16, 8],
                        faces: {
                            north: { uv: [0, 3, 0.75, 6], texture: '#0' },
                            south: { uv: [0, 3, 0.75, 6], texture: '#0' },
                        },
                    },
                    {
                        from: [13, 10, 6.5],
                        to: [13, 16, 9.5],
                        faces: {
                            east: { uv: [1.5, 3, 2.25, 6], texture: '#0' },
                            west: { uv: [1.5, 3, 2.25, 6], texture: '#0' },
                        },
                    },
                ]).getMesh(atlas, Cull.none());
            }`;

  code = code.replace(oldAttachedChainModel, newAttachedChainModel);

  // 4. Adjust Bamboo sign UV mapping in signRenderer and wallSignRenderer
  const oldSignRenderer = `function signRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 4, 7],
                    to: [20, 16, 9],
                    faces: {
                        north: { uv: [0.5, 1, 6.5, 7], texture: '#0' },
                        east: { uv: [0, 1, 0.5, 7], texture: '#0' },
                        south: { uv: [7, 1, 13, 7], texture: '#0' },
                        west: { uv: [6.5, 1, 7, 7], texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
                    },
                },`;

  const newSignRenderer = `function signRenderer(texture) {
        const isBamboo = texture.toString().includes('bamboo');
        const northUv = isBamboo ? [0.5, 1, 6.25, 7] : [0.5, 1, 6.5, 7];
        const southUv = isBamboo ? [7, 1, 12.75, 7] : [7, 1, 13, 7];
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [-4, 4, 7],
                    to: [20, 16, 9],
                    faces: {
                        north: { uv: northUv, texture: '#0' },
                        east: { uv: [0, 1, 0.5, 7], texture: '#0' },
                        south: { uv: southUv, texture: '#0' },
                        west: { uv: [6.5, 1, 7, 7], texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
                    },
                },`;

  code = code.replace(oldSignRenderer, newSignRenderer);

  const oldWallSignRenderer = `function wallSignRenderer(texture) {
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

  const newWallSignRenderer = `function wallSignRenderer(texture) {
        const isBamboo = texture.toString().includes('bamboo');
        const northUv = isBamboo ? [0.5, 1, 6.25, 7] : [0.5, 1, 6.5, 7];
        const southUv = isBamboo ? [7, 1, 12.75, 7] : [7, 1, 13, 7];
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

  code = code.replace(oldWallSignRenderer, newWallSignRenderer);

  // 5. Force re-population of Sign and HangingSign maps to bind patched renderer functions and include pale_oak/poplar
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
