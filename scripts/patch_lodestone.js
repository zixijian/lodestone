const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../web_android/node_modules/@mattzh72/lodestone/lib/render/SpecialRenderer.js');

if (fs.existsSync(targetPath)) {
  let code = fs.readFileSync(targetPath, 'utf-8');

  // 1. Add pale_oak and poplar to WoodTypes
  code = code.replace(
    "const WoodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'mangrove', 'bamboo', 'cherry'];",
    "const WoodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'mangrove', 'bamboo', 'cherry', 'pale_oak', 'poplar'];"
  );

  // 2. Remove 2/3 scale in ceiling hangingSignRenderer inside getBlockMesh
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
  fs.writeFileSync(targetPath, code);
  console.log('Successfully applied Lodestone SpecialRenderer patch!');
} else {
  console.warn('Lodestone SpecialRenderer.js not found, skipping patch.');
}
