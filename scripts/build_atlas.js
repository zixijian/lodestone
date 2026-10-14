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

// Sort sprites by height descending for optimal shelf packing without gaps
allSprites.sort((a, b) => b.h - a.h || b.w - a.w || a.key.localeCompare(b.key));

const atlasWidth = 2048;
const atlasHeight = 2048; // Lodestone requires a 2048x2048 square canvas
let currentX = 0;
let currentY = 0;
let rowHeight = 0;

const packedSprites = [];

for (const sprite of allSprites) {
  if (currentX + sprite.w > atlasWidth) {
    currentY += rowHeight;
    currentX = 0;
    rowHeight = 0;
  }

  const destX = currentX;
  const destY = currentY;

  packedSprites.push({
    ...sprite,
    destX,
    destY
  });

  currentX += sprite.w;
  if (sprite.h > rowHeight) {
    rowHeight = sprite.h;
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

// Copy pixel data for each sprite
for (const sprite of packedSprites) {
  const srcPng = subAtlasPngs[sprite.subAtlasFile];
  if (!srcPng) continue;

  for (let y = 0; y < sprite.h; y++) {
    for (let x = 0; x < sprite.w; x++) {
      const srcIdx = ((sprite.y + y) * srcPng.width + (sprite.x + x)) * 4;
      const destIdx = ((sprite.destY + y) * atlasWidth + (sprite.destX + x)) * 4;

      masterPng.data[destIdx] = srcPng.data[srcIdx];
      masterPng.data[destIdx + 1] = srcPng.data[srcIdx + 1];
      masterPng.data[destIdx + 2] = srcPng.data[srcIdx + 2];
      masterPng.data[destIdx + 3] = srcPng.data[srcIdx + 3];
    }
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
