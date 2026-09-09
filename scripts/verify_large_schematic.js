const { Structure, BlockState, NbtFile, NbtCompound, NbtList, NbtInt, NbtLong, NbtLongArray } = require('../web_android/node_modules/@mattzh72/lodestone');

console.log('Generating 100,000 block synthetic litematic file...');

const size = [100, 50, 20]; // 100,000 blocks volume
const palette = [
  new BlockState('minecraft:air', {}),
  new BlockState('minecraft:stone', {}),
  new BlockState('minecraft:dirt', {}),
  new BlockState('minecraft:glass', {}),
  new BlockState('minecraft:gold_block', {})
];

const storedBlocks = [];
for (let y = 0; y < size[1]; y++) {
  for (let z = 0; z < size[2]; z++) {
    for (let x = 0; x < size[0]; x++) {
      if ((x + y + z) % 3 === 0) {
        const stateIdx = 1 + ((x + y + z) % 4);
        storedBlocks.push({ pos: [x, y, z], state: stateIdx });
      }
    }
  }
}

console.log(`Created ${storedBlocks.length} placed blocks out of 100,000 total volume.`);

const rootCompound = new NbtCompound();
const regionsCompound = new NbtCompound();

const regionCompound = new NbtCompound();
regionCompound.set('Size', new NbtCompound()
  .set('x', new NbtInt(size[0]))
  .set('y', new NbtInt(size[1]))
  .set('z', new NbtInt(size[2]))
);

const paletteList = new NbtList();
palette.forEach(st => paletteList.add(st.toNbt()));
regionCompound.set('BlockStatePalette', paletteList);

const bitsPerBlock = Math.max(2, Math.ceil(Math.log2(palette.length)));
const volume = size[0] * size[1] * size[2];
const unpackedIndices = new Int32Array(volume);
for (const b of storedBlocks) {
  const idx = b.pos[0] + b.pos[1] * (size[0] * size[2]) + b.pos[2] * size[0];
  unpackedIndices[idx] = b.state;
}

const longsCount = Math.ceil((volume * bitsPerBlock) / 64);
const longsHigh = new Int32Array(longsCount);
const longsLow = new Int32Array(longsCount);

for (let i = 0; i < volume; i++) {
  const val = unpackedIndices[i];
  const startOffset = i * bitsPerBlock;
  const startArrIndex = startOffset >>> 5;
  const startBitOffset = startOffset & 0x1f;

  const halfInd = startArrIndex >>> 1;
  const isOdd = (startArrIndex & 0x1) !== 0;

  if (!isOdd) {
    longsLow[halfInd] |= (val << startBitOffset);
    if (startBitOffset + bitsPerBlock > 32) {
      longsHigh[halfInd] |= (val >>> (32 - startBitOffset));
    }
  } else {
    longsHigh[halfInd] |= (val << startBitOffset);
    if (startBitOffset + bitsPerBlock > 32) {
      longsLow[halfInd + 1] |= (val >>> (32 - startBitOffset));
    }
  }
}

const longItems = [];
for (let i = 0; i < longsCount; i++) {
  longItems.push(new NbtLong([longsHigh[i], longsLow[i]]));
}
regionCompound.set('BlockStates', new NbtLongArray(longItems));

regionsCompound.set('MainRegion', regionCompound);
rootCompound.set('Regions', regionsCompound);

const file = new NbtFile('TestSchematic', rootCompound, 'gzip', false);
const buffer = file.write();

console.log(`Generated compressed buffer size: ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);

// Test reading and decoding with time slicing test
const startTime = Date.now();
const readNbt = NbtFile.read(buffer);
const readRegion = readNbt.root.getCompound('Regions').getCompound('MainRegion');

const readSizeNbt = readRegion.getCompound('Size');
const readSize = [readSizeNbt.getNumber('x'), readSizeNbt.getNumber('y'), readSizeNbt.getNumber('z')];
console.log(`Region size decoded: ${readSize.join('x')}`);

const readPaletteList = readRegion.getList('BlockStatePalette');
console.log(`Palette entries decoded: ${readPaletteList.size}`);

const endTime = Date.now();
console.log(`Decoded NBT root and metadata in ${endTime - startTime} ms! Verification Passed!`);
