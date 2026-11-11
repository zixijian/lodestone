const fs = require('fs');
const path = require('path');

const assetsPath = path.join(__dirname, '../app/src/main/assets/web/default-pack/assets.json');
const outputPath = path.join(__dirname, '../app/src/main/assets/web/default-pack/block_models.json');

const assets = JSON.parse(fs.readFileSync(assetsPath, 'utf8'));
const models = assets.models || {};
const blockstates = assets.blockstates || {};
const textures = assets.textures || {};

function resolveModel(modelName, visited = new Set()) {
  if (!modelName) return null;
  const clean = modelName.replace(/^minecraft:/, '');
  if (visited.has(clean)) return null;
  visited.add(clean);
  const m = models[clean];
  if (!m) return null;
  const res = m.parent ? resolveModel(m.parent, visited) : { elements: null, textures: {} };
  if (!res) return null;
  const elements = m.elements || res.elements;
  const texs = { ...res.textures, ...m.textures };
  return { elements, textures: texs };
}

function resolveTextureRef(ref, texs) {
  let cur = ref;
  let d = 0;
  while (cur && cur.startsWith('#') && d < 10) {
    cur = texs[cur.substring(1)];
    d++;
  }
  if (!cur) return null;
  cur = cur.replace(/^minecraft:/, '');
  if (!cur.startsWith('block/') && !cur.startsWith('item/') && !cur.startsWith('entity/')) {
    cur = 'block/' + cur;
  }
  return cur;
}

function extractModelElements(modelName, xRot = 0, yRot = 0) {
  const mod = resolveModel(modelName);
  if (!mod || !mod.elements) return [];
  const elementsData = [];
  for (const elem of mod.elements) {
    const facesData = {};
    for (const fName in elem.faces) {
      const face = elem.faces[fName];
      let tex = resolveTextureRef(face.texture, mod.textures);
      if (tex && !textures[tex]) {
        if (textures['block/' + tex]) tex = 'block/' + tex;
        else if (tex.startsWith('block/') && textures[tex.substring(6)]) tex = tex.substring(6);
      }
      if (tex && textures[tex]) {
        const uv = face.uv || [0, 0, 16, 16];
        facesData[fName] = [
          tex,
          uv[0], uv[1], uv[2], uv[3],
          face.cullface ? 1 : 0,
          face.tintindex !== undefined ? 1 : 0
        ];
      }
    }
    if (Object.keys(facesData).length > 0) {
      elementsData.push({
        f: elem.from,
        t: elem.to,
        r: elem.rotation ? [elem.rotation.origin[0], elem.rotation.origin[1], elem.rotation.origin[2], elem.rotation.axis, elem.rotation.angle] : null,
        faces: facesData,
        x: xRot,
        y: yRot
      });
    }
  }
  return elementsData;
}

const processedBlocks = {};

for (const b in blockstates) {
  const bs = blockstates[b];
  if (bs.variants) {
    const variantsMap = {};
    for (const vKey in bs.variants) {
      let vVal = bs.variants[vKey];
      if (Array.isArray(vVal)) vVal = vVal[0];
      if (!vVal || !vVal.model) continue;
      const elems = extractModelElements(vVal.model, vVal.x || 0, vVal.y || 0);
      if (elems.length > 0) {
        variantsMap[vKey] = {
          x: vVal.x || 0,
          y: vVal.y || 0,
          elems: elems
        };
      }
    }
    if (Object.keys(variantsMap).length > 0) {
      processedBlocks[b] = { type: 'variants', variants: variantsMap };
    }
  } else if (bs.multipart) {
    const parts = [];
    for (const part of bs.multipart) {
      let apply = part.apply;
      if (Array.isArray(apply)) apply = apply[0];
      if (!apply || !apply.model) continue;
      const elems = extractModelElements(apply.model, apply.x || 0, apply.y || 0);
      if (elems.length > 0) {
        parts.push({
          when: part.when || null,
          x: apply.x || 0,
          y: apply.y || 0,
          elems: elems
        });
      }
    }
    if (parts.length > 0) {
      processedBlocks[b] = { type: 'multipart', parts: parts };
    }
  }
}

// Custom definition for signs if missing
const signWoods = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'bamboo', 'crimson', 'warped'];
for (const wood of signWoods) {
  const signNames = [`${wood}_sign`, `${wood}_wall_sign`, `standing_sign`, `wall_sign`];
  for (const sn of signNames) {
    if (!processedBlocks[sn]) {
      const plankTex = textures[`block/${wood}_planks`] ? `block/${wood}_planks` : 'block/oak_planks';
      processedBlocks[sn] = {
        type: 'variants',
        variants: {
          "": {
            x: 0,
            y: 0,
            elems: [
              {
                f: [7, 0, 7], t: [9, 9, 9], r: null,
                faces: {
                  north: [plankTex, 7, 7, 9, 16, 0, 0],
                  south: [plankTex, 7, 7, 9, 16, 0, 0],
                  east: [plankTex, 7, 7, 9, 16, 0, 0],
                  west: [plankTex, 7, 7, 9, 16, 0, 0]
                }
              },
              {
                f: [0, 7, 7], t: [16, 16, 9], r: null,
                faces: {
                  north: [plankTex, 0, 0, 16, 9, 0, 0],
                  south: [plankTex, 0, 0, 16, 9, 0, 0],
                  east: [plankTex, 7, 0, 9, 9, 0, 0],
                  west: [plankTex, 7, 0, 9, 9, 0, 0],
                  up: [plankTex, 0, 7, 16, 9, 0, 0],
                  down: [plankTex, 0, 7, 16, 9, 0, 0]
                }
              }
            ]
          }
        }
      };
    }
  }
}

fs.writeFileSync(outputPath, JSON.stringify(processedBlocks));
console.log('Saved block_models.json! Total blocks:', Object.keys(processedBlocks).length, 'Size:', (fs.statSync(outputPath).size / 1024).toFixed(1), 'KB');
