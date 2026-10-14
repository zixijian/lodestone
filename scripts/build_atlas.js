const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { PNG } = require('pngjs');

const repoDir = '/tmp/atlas_repo';
const repoUrl = 'https://github.com/zixijian/atlas.git';

// Ensure atlas repo is available
if (!fs.existsSync(repoDir)) {
  console.log('Cloning atlas repository from', repoUrl);
  execSync(`git clone ${repoUrl} ${repoDir}`, { stdio: 'inherit' });
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
    const x = parseInt(parts[1].split('=')[1], 10);
    const y = parseInt(parts[2].split('=')[1], 10);
    const w = parseInt(parts[3].split('=')[1], 10);
    const h = parseInt(parts[4].split('=')[1], 10);

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
    // Avoid duplicate key entries (e.g. missingno in multiple sub-atlases)
    if (seenKeys.has(entry.key)) {
      return;
    }
    seenKeys.add(entry.key);
    allSprites.push({
      subAtlasFile: pngFile,
      ...entry
    });
  });
});

console.log(`Parsed ${allSprites.length} unique texture sprites.`);

// Sort sprites by height descending for optimal shelf packing
allSprites.sort((a, b) => b.h - a.h || b.w - a.w || a.key.localeCompare(b.key));

const atlasWidth = 2048;
const atlasHeight = 2048; // Standard 2048x2048 square canvas
const pad = 2; // 2px gutter padding between sprites to prevent texture filtering bleed

let currentX = pad;
let currentY = pad;
let rowHeight = 0;

const packedSprites = [];

for (const sprite of allSprites) {
  const totalW = sprite.w + pad * 2;
  const totalH = sprite.h + pad * 2;

  if (currentX + totalW > atlasWidth) {
    currentY += rowHeight;
    currentX = pad;
    rowHeight = 0;
  }

  const destX = currentX + pad;
  const destY = currentY + pad;

  packedSprites.push({
    ...sprite,
    destX,
    destY
  });

  currentX += totalW;
  if (totalH > rowHeight) {
    rowHeight = totalH;
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

// Copy pixel data for each sprite with edge clamping/extrusion into gutter padding
for (const sprite of packedSprites) {
  const srcPng = subAtlasPngs[sprite.subAtlasFile];
  if (!srcPng) continue;

  // 1. Copy exact inner sprite pixels
  for (let y = 0; y < sprite.h; y++) {
    for (let x = 0; x < sprite.w; x++) {
      const [r, g, b, a] = getPixel(srcPng, sprite.x + x, sprite.y + y);
      setPixel(masterPng, sprite.destX + x, sprite.destY + y, r, g, b, a);
    }
  }

  // 2. Extrude border pixels into gutter padding to prevent edge alpha bleed
  for (let p = 1; p <= pad; p++) {
    // Top and Bottom padding rows
    for (let x = 0; x < sprite.w; x++) {
      const topPx = getPixel(srcPng, sprite.x + x, sprite.y);
      setPixel(masterPng, sprite.destX + x, sprite.destY - p, ...topPx);

      const botPx = getPixel(srcPng, sprite.x + x, sprite.y + sprite.h - 1);
      setPixel(masterPng, sprite.destX + x, sprite.destY + sprite.h - 1 + p, ...botPx);
    }

    // Left and Right padding columns
    for (let y = 0; y < sprite.h; y++) {
      const leftPx = getPixel(srcPng, sprite.x, sprite.y + y);
      setPixel(masterPng, sprite.destX - p, sprite.destY + y, ...leftPx);

      const rightPx = getPixel(srcPng, sprite.x + sprite.w - 1, sprite.y + y);
      setPixel(masterPng, sprite.destX + sprite.w - 1 + p, sprite.destY + y, ...rightPx);
    }

    // Corner padding pixels
    const topLeft = getPixel(srcPng, sprite.x, sprite.y);
    setPixel(masterPng, sprite.destX - p, sprite.destY - p, ...topLeft);

    const topRight = getPixel(srcPng, sprite.x + sprite.w - 1, sprite.y);
    setPixel(masterPng, sprite.destX + sprite.w - 1 + p, sprite.destY - p, ...topRight);

    const botLeft = getPixel(srcPng, sprite.x, sprite.y + sprite.h - 1);
    setPixel(masterPng, sprite.destX - p, sprite.destY + sprite.h - 1 + p, ...botLeft);

    const botRight = getPixel(srcPng, sprite.x + sprite.w - 1, sprite.y + sprite.h - 1);
    setPixel(masterPng, sprite.destX + sprite.w - 1 + p, sprite.destY + sprite.h - 1 + p, ...botRight);
  }
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

console.log('Updating assets.json at', outputAssetsJsonPath);
const assetsData = JSON.parse(fs.readFileSync(outputAssetsJsonPath, 'utf-8'));
assetsData.textures = newTextures;
fs.writeFileSync(outputAssetsJsonPath, JSON.stringify(assetsData));

console.log('Atlas build completed successfully!');
