const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../web_android/node_modules/@mattzh72/lodestone/lib/render/SpecialRenderer.js');

if (fs.existsSync(targetPath)) {
  let code = fs.readFileSync(targetPath, 'utf-8');

  function replaceOrSkip(srcCode, searchPattern, replacement, patchName) {
    if (typeof searchPattern === 'string') {
      if (!srcCode.includes(searchPattern)) {
        console.log(`[patch_lodestone] Skipping or already applied: '${patchName}'`);
        return srcCode;
      }
      return srcCode.replace(searchPattern, replacement);
    } else if (searchPattern instanceof RegExp) {
      if (!searchPattern.test(srcCode)) {
        console.log(`[patch_lodestone] Skipping or already applied: '${patchName}'`);
        return srcCode;
      }
      return srcCode.replace(searchPattern, replacement);
    }
    return srcCode;
  }

  // 1. Add pale_oak and poplar to WoodTypes
  code = replaceOrSkip(
    code,
    /const WoodTypes = \[\s*[\s\S]*?\s*\];/g,
    "const WoodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'mangrove', 'bamboo', 'cherry', 'pale_oak', 'poplar'];",
    "WoodTypes addition"
  );

  // 2. Patch signRenderer for standing bamboo signs
  const oldSignRenderer = `function signRenderer(texture) {
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

  const newSignRenderer = `function signRenderer(texture) {
        const isBamboo = texture.toString().includes('bamboo');
        const northUv = isBamboo ? [0.5, 1, 6.25, 7] : [0.5, 1, 6.5, 7];
        const westUv = isBamboo ? [6.25, 1, 6.75, 7] : [6.5, 1, 7, 7];
        const southUv = isBamboo ? [6.75, 1, 12.5, 7] : [7, 1, 13, 7];
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
                        west: { uv: westUv, texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
                    },
                },`;

  code = replaceOrSkip(code, oldSignRenderer, newSignRenderer, "signRenderer patch");

  // 3. Patch wallSignRenderer for wall bamboo signs
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
        const westUv = isBamboo ? [6.25, 1, 6.75, 7] : [6.5, 1, 7, 7];
        const southUv = isBamboo ? [6.75, 1, 12.5, 7] : [7, 1, 13, 7];
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
                        west: { uv: westUv, texture: '#0' },
                        up: { uv: [6.5, 1, 0.5, 0], texture: '#0' },
                        down: { uv: [12.5, 0, 6.5, 1], texture: '#0' },
                    },
                },`;

  code = replaceOrSkip(code, oldWallSignRenderer, newWallSignRenderer, "wallSignRenderer patch");

  // 4. Replace hangingSignRenderer to fix chain positions, 3D cross quads, and UVs
  if (!code.includes('4.75, 10, 6')) {
    const startHangingIdx = code.indexOf('function hangingSignRenderer(');
    const endHangingIdx = code.indexOf('SpecialRenderers.hangingSignRenderer = hangingSignRenderer;');
    if (startHangingIdx !== -1 && endHangingIdx !== -1) {
      const oldHangingSignRendererFunc = code.substring(startHangingIdx, endHangingIdx);

      const newHangingSignRendererFunc = `function hangingSignRenderer(texture) {
        return (attached, atlas) => {
            if (attached) {
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
                        to: [8, 16, 8],
                        faces: {
                            north: { uv: [14, 0, 16, 6], texture: '#0' },
                            south: { uv: [14, 0, 16, 6], texture: '#0' },
                        },
                    },
                    {
                        from: [4.75, 10, 6],
                        to: [4.75, 16, 10],
                        faces: {
                            east: { uv: [14, 0, 16, 6], texture: '#0' },
                            west: { uv: [14, 0, 16, 6], texture: '#0' },
                        },
                    },
                    {
                        from: [8, 16, 8],
                        to: [14.5, 10, 8],
                        faces: {
                            north: { uv: [14, 0, 16, 6], texture: '#0' },
                            south: { uv: [14, 0, 16, 6], texture: '#0' },
                        },
                    },
                    {
                        from: [11.25, 10, 6],
                        to: [11.25, 16, 10],
                        faces: {
                            east: { uv: [14, 0, 16, 6], texture: '#0' },
                            west: { uv: [14, 0, 16, 6], texture: '#0' },
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
                    to: [4, 16, 8],
                    faces: {
                        north: { uv: [14, 0, 16, 6], texture: '#0' },
                        south: { uv: [14, 0, 16, 6], texture: '#0' },
                    },
                },
                {
                    from: [3, 10, 7],
                    to: [3, 16, 9],
                    faces: {
                        east: { uv: [14, 0, 16, 6], texture: '#0' },
                        west: { uv: [14, 0, 16, 6], texture: '#0' },
                    },
                },
                {
                    from: [12, 10, 8],
                    to: [14, 16, 8],
                    faces: {
                        north: { uv: [14, 0, 16, 6], texture: '#0' },
                        south: { uv: [14, 0, 16, 6], texture: '#0' },
                    },
                },
                {
                    from: [13, 10, 7],
                    to: [13, 16, 9],
                    faces: {
                        east: { uv: [14, 0, 16, 6], texture: '#0' },
                        west: { uv: [14, 0, 16, 6], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }
    `;

      code = code.replace(oldHangingSignRendererFunc, newHangingSignRendererFunc);
    }
  }

  // 5. Replace wallHangingSignRenderer to fix chain positions and UVs
  if (!code.includes('13, 14, 9')) {
    const startWallHangingIdx = code.indexOf('function wallHangingSignRenderer(');
    const endWallHangingIdx = code.indexOf('SpecialRenderers.wallHangingSignRenderer = wallHangingSignRenderer;');
    if (startWallHangingIdx !== -1 && endWallHangingIdx !== -1) {
      const oldWallHangingSignRendererFunc = code.substring(startWallHangingIdx, endWallHangingIdx);

      const newWallHangingSignRendererFunc = `function wallHangingSignRenderer(woodType) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: \`entity/signs/hanging/\${woodType}\`,
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
                    from: [2, 10, 8],
                    to: [4, 14, 8],
                    faces: {
                        north: { uv: [14, 0, 16, 4], texture: '#0' },
                        south: { uv: [14, 0, 16, 4], texture: '#0' },
                    },
                },
                {
                    from: [3, 10, 7],
                    to: [3, 14, 9],
                    faces: {
                        east: { uv: [14, 0, 16, 4], texture: '#0' },
                        west: { uv: [14, 0, 16, 4], texture: '#0' },
                    },
                },
                {
                    from: [12, 10, 8],
                    to: [14, 14, 8],
                    faces: {
                        north: { uv: [14, 0, 16, 4], texture: '#0' },
                        south: { uv: [14, 0, 16, 4], texture: '#0' },
                    },
                },
                {
                    from: [13, 10, 7],
                    to: [13, 14, 9],
                    faces: {
                        east: { uv: [14, 0, 16, 4], texture: '#0' },
                        west: { uv: [14, 0, 16, 4], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }
    `;

      code = code.replace(oldWallHangingSignRendererFunc, newWallHangingSignRendererFunc);
    }
  }

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
    code = replaceOrSkip(
      code,
      "SpecialRenderers.getBlockMesh = getBlockMesh;",
      mapRefreshCode + "\n    SpecialRenderers.getBlockMesh = getBlockMesh;",
      "SignRenderers map refresh"
    );
  }

  fs.writeFileSync(targetPath, code);
  console.log('Successfully applied Lodestone SpecialRenderer patch!');
} else {
  console.warn('Lodestone SpecialRenderer.js not found, skipping patch.');
}
