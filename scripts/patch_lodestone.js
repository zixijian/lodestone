const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../web_android/node_modules/@mattzh72/lodestone/lib/render/SpecialRenderer.js');

if (fs.existsSync(targetPath)) {
  let code = fs.readFileSync(targetPath, 'utf8');

  // 1. Extend WoodTypes array with 'pale_oak' and 'poplar'
  if (!code.includes("'pale_oak'") || !code.includes("'poplar'")) {
    code = code.replace(
      /const WoodTypes = \[([\s\S]*?)\];/,
      (match, p1) => {
        const types = p1.split(',').map(s => s.trim().replace(/'/g, '')).filter(Boolean);
        if (!types.includes('pale_oak')) types.push('pale_oak');
        if (!types.includes('poplar')) types.push('poplar');
        return `const WoodTypes = [${types.map(t => `'${t}'`).join(', ')}];`;
      }
    );
  }

  // 2. Override getBlockMesh for double chests (DO NOT return empty mesh for signs!)
  const newGetBlockMeshFunc = `function getBlockMesh(block, atlas) {
        const blockName = block.name;
        if (blockName.includes('chest') && !blockName.includes('ender')) {
            const chestType = block.getProperty('type');
            if (chestType === 'left' || chestType === 'right') {
                return new Mesh();
            }
        }
        let renderer = SignRenderers.get(block.name);
        if (renderer) {
            return renderer(atlas);
        }
        renderer = WallSignRenderers.get(block.name);
        if (renderer) {
            return renderer(atlas);
        }
        renderer = HangingSignRenderers.get(block.name);
        if (renderer) {
            const attached = block.getProperty('attached') === 'true';
            return renderer(attached, atlas);
        }
        renderer = WallHangingSignRenderers.get(block.name);
        if (renderer) {
            return renderer(atlas);
        }
        return undefined;
    }`;

  code = code.replace(/function getBlockMesh\(block, atlas\) \{[\s\S]*?\n    \}/g, newGetBlockMeshFunc);

  // 3. Precise UV mapping for Standing Signs (Board: 14x8x2, Post: 2x8x2, UV strictly bounded within 0..16)
  const newSignRendererFunc = `function signRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [1, 8, 7],
                    to: [15, 16, 9],
                    faces: {
                        north: { uv: [1, 1, 15, 9], texture: '#0' },
                        east: { uv: [0, 1, 1, 9], texture: '#0' },
                        south: { uv: [1, 9, 15, 16], texture: '#0' },
                        west: { uv: [15, 1, 16, 9], texture: '#0' },
                        up: { uv: [1, 0, 15, 1], texture: '#0' },
                        down: { uv: [1, 15, 15, 16], texture: '#0' },
                    },
                },
                {
                    from: [7, 0, 7],
                    to: [9, 8, 9],
                    faces: {
                        north: { uv: [1, 8, 2, 16], texture: '#0' },
                        east: { uv: [2, 8, 3, 16], texture: '#0' },
                        south: { uv: [3, 8, 4, 16], texture: '#0' },
                        west: { uv: [0, 8, 1, 16], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/function signRenderer\(texture\) \{[\s\S]*?\n    \}/g, newSignRendererFunc);

  // 4. Wall Signs (Board: 14x8x2, UV strictly bounded within 0..16)
  const newWallSignRendererFunc = `function wallSignRenderer(texture) {
        return (atlas) => {
            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/').toString(),
            }, [
                {
                    from: [1, 4.5, 14],
                    to: [15, 12.5, 16],
                    faces: {
                        north: { uv: [1, 1, 15, 9], texture: '#0' },
                        east: { uv: [0, 1, 1, 9], texture: '#0' },
                        south: { uv: [1, 9, 15, 16], texture: '#0' },
                        west: { uv: [15, 1, 16, 9], texture: '#0' },
                        up: { uv: [1, 0, 15, 1], texture: '#0' },
                        down: { uv: [1, 15, 15, 16], texture: '#0' },
                    },
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/function wallSignRenderer\(texture\) \{[\s\S]*?\n    \}/g, newWallSignRendererFunc);

  // 5. Precise UV mapping for Ceiling Hanging Signs (Board: 14x10x2, Chains: Y 10..16, 45° X-shaped cross planes)
  const newHangingSignRendererFunc = `function hangingSignRenderer(texture) {
        return (attached, atlas) => {
            const chainFacesNormal = {
                north: { uv: [14, 0, 16, 6], texture: '#0' },
                south: { uv: [14, 0, 16, 6], texture: '#0' },
            };
            const chainFacesCross = {
                east: { uv: [14, 0, 16, 6], texture: '#0' },
                west: { uv: [14, 0, 16, 6], texture: '#0' },
            };
            const elements = [
                {
                    from: [1, 0, 7],
                    to: [15, 10, 9],
                    faces: {
                        north: { uv: [1, 6, 15, 16], texture: '#0' },
                        east: { uv: [0, 6, 1, 16], texture: '#0' },
                        south: { uv: [1, 6, 15, 16], texture: '#0' },
                        west: { uv: [15, 6, 16, 16], texture: '#0' },
                        up: { uv: [1, 4, 15, 6], texture: '#0' },
                        down: { uv: [1, 15, 15, 16], texture: '#0' },
                    },
                },
            ];

            if (attached) {
                elements.push(
                    {
                        from: [1.5, 10, 8],
                        to: [4.5, 16, 8],
                        rotation: { angle: 45, axis: 'y', origin: [3, 13, 8] },
                        faces: chainFacesNormal,
                    },
                    {
                        from: [3, 10, 6.5],
                        to: [3, 16, 9.5],
                        rotation: { angle: 45, axis: 'y', origin: [3, 13, 8] },
                        faces: chainFacesCross,
                    },
                    {
                        from: [11.5, 10, 8],
                        to: [14.5, 16, 8],
                        rotation: { angle: 45, axis: 'y', origin: [13, 13, 8] },
                        faces: chainFacesNormal,
                    },
                    {
                        from: [13, 10, 6.5],
                        to: [13, 16, 9.5],
                        rotation: { angle: 45, axis: 'y', origin: [13, 13, 8] },
                        faces: chainFacesCross,
                    }
                );
            } else {
                elements.push(
                    {
                        from: [1.5, 10, 8],
                        to: [4.5, 16, 8],
                        rotation: { angle: 45, axis: 'y', origin: [3, 13, 8] },
                        faces: chainFacesNormal,
                    },
                    {
                        from: [3, 10, 6.5],
                        to: [3, 16, 9.5],
                        rotation: { angle: 45, axis: 'y', origin: [3, 13, 8] },
                        faces: chainFacesCross,
                    },
                    {
                        from: [11.5, 10, 8],
                        to: [14.5, 16, 8],
                        rotation: { angle: 45, axis: 'y', origin: [13, 13, 8] },
                        faces: chainFacesNormal,
                    },
                    {
                        from: [13, 10, 6.5],
                        to: [13, 16, 9.5],
                        rotation: { angle: 45, axis: 'y', origin: [13, 13, 8] },
                        faces: chainFacesCross,
                    }
                );
            }

            return new BlockModel(undefined, {
                0: texture.withPrefix('entity/signs/hanging/').toString(),
            }, elements).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/function hangingSignRenderer\(texture\) \{[\s\S]*?\n    \}/g, newHangingSignRendererFunc);

  // 6. Wall Hanging Signs (Board: 14x10x2, Bar: 16x2x4, Chains wrapping over horizontal top bar Y: 10..16, 45° X-shaped cross planes)
  const newWallHangingSignRendererFunc = `function wallHangingSignRenderer(woodType) {
        return (atlas) => {
            const chainFacesNormal = {
                north: { uv: [14, 0, 16, 6], texture: '#0' },
                south: { uv: [14, 0, 16, 6], texture: '#0' },
            };
            const chainFacesCross = {
                east: { uv: [14, 0, 16, 6], texture: '#0' },
                west: { uv: [14, 0, 16, 6], texture: '#0' },
            };
            return new BlockModel(undefined, {
                0: \`entity/signs/hanging/\${woodType}\`,
            }, [
                {
                    from: [1, 0, 7],
                    to: [15, 10, 9],
                    faces: {
                        north: { uv: [1, 6, 15, 16], texture: '#0' },
                        east: { uv: [0, 6, 1, 16], texture: '#0' },
                        south: { uv: [1, 6, 15, 16], texture: '#0' },
                        west: { uv: [15, 6, 16, 16], texture: '#0' },
                        up: { uv: [1, 4, 15, 6], texture: '#0' },
                        down: { uv: [1, 15, 15, 16], texture: '#0' },
                    },
                },
                {
                    from: [0, 14, 6],
                    to: [16, 16, 10],
                    faces: {
                        north: { uv: [0, 2, 16, 4], texture: '#0' },
                        east: { uv: [0, 2, 4, 4], texture: '#0' },
                        south: { uv: [0, 2, 16, 4], texture: '#0' },
                        west: { uv: [12, 2, 16, 4], texture: '#0' },
                        up: { uv: [0, 0, 16, 4], texture: '#0' },
                        down: { uv: [0, 0, 16, 4], texture: '#0' },
                    },
                },
                {
                    from: [1.5, 10, 8],
                    to: [4.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [3, 13, 8] },
                    faces: chainFacesNormal,
                },
                {
                    from: [3, 10, 6.5],
                    to: [3, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [3, 13, 8] },
                    faces: chainFacesCross,
                },
                {
                    from: [11.5, 10, 8],
                    to: [14.5, 16, 8],
                    rotation: { angle: 45, axis: 'y', origin: [13, 13, 8] },
                    faces: chainFacesNormal,
                },
                {
                    from: [13, 10, 6.5],
                    to: [13, 16, 9.5],
                    rotation: { angle: 45, axis: 'y', origin: [13, 13, 8] },
                    faces: chainFacesCross,
                },
            ]).getMesh(atlas, Cull.none());
        };
    }`;

  code = code.replace(/function wallHangingSignRenderer\(woodType\) \{[\s\S]*?\n    \}/g, newWallHangingSignRendererFunc);

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
  console.log('Successfully applied updated Lodestone SpecialRenderer patch!');
} else {
  console.warn('Lodestone SpecialRenderer.js not found, skipping patch.');
}
