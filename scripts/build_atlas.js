const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { PNG } = require('pngjs');

const repoDir = '/tmp/atlas_repo';
const repoUrl = 'https://github.com/zixijian/atlas.git';

// Ensure atlas repo is available on branch xekr
if (!fs.existsSync(repoDir)) {
  console.log('Cloning atlas repository (branch xekr) from', repoUrl);
  execSync(`git clone -b xekr ${repoUrl} ${repoDir}`, { stdio: 'inherit' });
} else {
  console.log('Updating atlas repository on branch xekr...');
  execSync(`git -C ${repoDir} fetch origin xekr && git -C ${repoDir} checkout xekr && git -C ${repoDir} pull origin xekr`, { stdio: 'inherit' });
}

function parseTxt(filename) {
  const content = fs.readFileSync(path.join(repoDir, filename), 'utf-8');
  const entries = [];
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const parts = trimmed.split('\t');
    if (parts.length < 5) continue;
    const rawKey = parts[0];
    let x = parseInt(parts[1].split('=')[1], 10);
    let y = parseInt(parts[2].split('=')[1], 10);
    const w = parseInt(parts[3].split('=')[1], 10);
    const h = parseInt(parts[4].split('=')[1], 10);

    // zixijian/atlas sub-atlas images (.png_0.png) include a 1px extrusion padding around each sprite.
    x += 1;
    y += 1;

    let key = rawKey;
    if (key.startsWith('minecraft:')) {
      key = key.substring(10);
    }
    entries.push({ key, rawKey, x, y, w, h });
  }
  return entries;
}

const txtFiles = fs.readdirSync(repoDir).filter(f => f.endsWith('.txt')).sort();
let allSprites = [];
const seenKeys = new Set();

txtFiles.forEach(txtFile => {
  const pngFile = txtFile.replace(/\.txt$/, '_0.png');
  if (!fs.existsSync(path.join(repoDir, pngFile))) {
    console.warn(`Warning: missing PNG file ${pngFile} for metadata ${txtFile}`);
    return;
  }
  const entries = parseTxt(txtFile);
  entries.forEach(entry => {
    if (seenKeys.has(entry.key)) {
      return;
    }
    // Filter to retain block, item, and entity textures relevant for 3D world rendering
    if (
      entry.key.startsWith('block/') ||
      entry.key.startsWith('item/') ||
      entry.key.startsWith('entity/')
    ) {
      seenKeys.add(entry.key);
      allSprites.push({
        subAtlasFile: pngFile,
        ...entry
      });
    }
  });
});

console.log(`Parsed ${allSprites.length} filtered texture sprites.`);

// Sort sprites by cell height descending for optimal shelf packing with 1px padding
const pad = 1;
allSprites.sort((a, b) => (b.h + pad * 2) - (a.h + pad * 2) || (b.w + pad * 2) - (a.w + pad * 2) || a.key.localeCompare(b.key));

const atlasWidth = 2048;
const atlasHeight = 2048; // Fits easily within 2048x2048 canvas

let currentX = 0;
let currentY = 0;
let rowHeight = 0;

const packedSprites = [];

for (const sprite of allSprites) {
  const cellW = sprite.w + pad * 2;
  const cellH = sprite.h + pad * 2;

  if (currentX + cellW > atlasWidth) {
    currentY += rowHeight;
    currentX = 0;
    rowHeight = 0;
  }

  const destX = currentX + pad;
  const destY = currentY + pad;

  packedSprites.push({
    ...sprite,
    destX,
    destY,
    cellX: currentX,
    cellY: currentY,
    cellW,
    cellH
  });

  currentX += cellW;
  if (cellH > rowHeight) {
    rowHeight = cellH;
  }
}

const packedContentHeight = currentY + rowHeight;
console.log(`Master Atlas dimensions: ${atlasWidth} x ${atlasHeight} (packed content height: ${packedContentHeight})`);

// Cache sub-atlas PNG images in memory
const subAtlasPngs = {};
txtFiles.forEach(txtFile => {
  const pngFile = txtFile.replace(/\.txt$/, '_0.png');
  if (fs.existsSync(path.join(repoDir, pngFile))) {
    const buffer = fs.readFileSync(path.join(repoDir, pngFile));
    subAtlasPngs[pngFile] = PNG.sync.read(buffer);
  }
});

// Create 2048x2048 master PNG canvas
const masterPng = new PNG({ width: atlasWidth, height: atlasHeight });

function setPixel(png, x, y, r, g, b, a) {
  if (x < 0 || y < 0 || x >= png.width || y >= png.height) return;
  const idx = (y * png.width + x) * 4;
  png.data[idx] = r;
  png.data[idx + 1] = g;
  png.data[idx + 2] = b;
  png.data[idx + 3] = a;
}

function getPixel(srcPng, x, y) {
  const idx = (y * srcPng.width + x) * 4;
  return [
    srcPng.data[idx],
    srcPng.data[idx + 1],
    srcPng.data[idx + 2],
    srcPng.data[idx + 3]
  ];
}

// Copy pixel data for each sprite with 1px edge extrusion (dilation)
for (const sprite of packedSprites) {
  const srcPng = subAtlasPngs[sprite.subAtlasFile];
  if (!srcPng) continue;

  // 1. Copy main sprite pixels
  for (let y = 0; y < sprite.h; y++) {
    for (let x = 0; x < sprite.w; x++) {
      const [r, g, b, a] = getPixel(srcPng, sprite.x + x, sprite.y + y);
      setPixel(masterPng, sprite.destX + x, sprite.destY + y, r, g, b, a);
    }
  }

  // 2. Extrude top & bottom edge borders
  for (let x = 0; x < sprite.w; x++) {
    const topPixel = getPixel(srcPng, sprite.x + x, sprite.y);
    setPixel(masterPng, sprite.destX + x, sprite.destY - 1, ...topPixel);

    const bottomPixel = getPixel(srcPng, sprite.x + x, sprite.y + sprite.h - 1);
    setPixel(masterPng, sprite.destX + x, sprite.destY + sprite.h, ...bottomPixel);
  }

  // 3. Extrude left & right edge borders
  for (let y = 0; y < sprite.h; y++) {
    const leftPixel = getPixel(srcPng, sprite.x, sprite.y + y);
    setPixel(masterPng, sprite.destX - 1, sprite.destY + y, ...leftPixel);

    const rightPixel = getPixel(srcPng, sprite.x + sprite.w - 1, sprite.y + y);
    setPixel(masterPng, sprite.destX + sprite.w, sprite.destY + y, ...rightPixel);
  }

  // 4. Fill 4 corners
  const topLeft = getPixel(srcPng, sprite.x, sprite.y);
  setPixel(masterPng, sprite.destX - 1, sprite.destY - 1, ...topLeft);

  const topRight = getPixel(srcPng, sprite.x + sprite.w - 1, sprite.y);
  setPixel(masterPng, sprite.destX + sprite.w, sprite.destY - 1, ...topRight);

  const bottomLeft = getPixel(srcPng, sprite.x, sprite.y + sprite.h - 1);
  setPixel(masterPng, sprite.destX - 1, sprite.destY + sprite.h, ...bottomLeft);

  const bottomRight = getPixel(srcPng, sprite.x + sprite.w - 1, sprite.y + sprite.h - 1);
  setPixel(masterPng, sprite.destX + sprite.w, sprite.destY + sprite.h, ...bottomRight);
}

// Target output files
const outputAtlasPath = path.join(__dirname, '../web_android/public/default-pack/atlas.png');
const outputAssetsJsonPath = path.join(__dirname, '../web_android/public/default-pack/assets.json');

console.log('Writing master atlas PNG to', outputAtlasPath);
const masterBuffer = PNG.sync.write(masterPng);
fs.writeFileSync(outputAtlasPath, masterBuffer);

// Build new textures dictionary for assets.json
const newTextures = {};
packedSprites.forEach(sprite => {
  newTextures[sprite.key] = [sprite.destX, sprite.destY, sprite.w, sprite.h];
});

const woodTypes = ["acacia", "bamboo", "birch", "cherry", "crimson", "dark_oak", "jungle", "mangrove", "oak", "pale_oak", "poplar", "spruce", "warped"];
woodTypes.forEach(w => {
  const blockSign = newTextures["block/" + w + "_sign"];
  if (blockSign) {
    newTextures["entity/signs/" + w] = blockSign;
  }
  const blockHanging = newTextures["block/" + w + "_hanging_sign"];
  if (blockHanging) {
    newTextures["entity/signs/hanging/" + w] = blockHanging;
  }
});

console.log('Updating assets.json at', outputAssetsJsonPath);
const assetsData = JSON.parse(fs.readFileSync(outputAssetsJsonPath, 'utf-8'));
assetsData.textures = newTextures;
assetsData.atlasWidth = atlasWidth;
assetsData.atlasHeight = atlasHeight;

fs.writeFileSync(outputAssetsJsonPath, JSON.stringify(assetsData));

console.log('Atlas build completed successfully!');
