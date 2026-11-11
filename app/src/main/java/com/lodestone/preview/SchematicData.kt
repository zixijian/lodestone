package com.lodestone.preview

import java.io.ByteArrayInputStream
import java.io.DataInputStream
import java.nio.ByteBuffer
import java.nio.ByteOrder

/**
 * Compact schematic data model.
 * Uses 1D primitive array (IntArray or ShortArray) to store voxel blockstate IDs.
 * Index format: (y * sizeZ + z) * sizeX + x
 */
data class ParsedBlockState(
    val name: String,
    val properties: Map<String, String> = emptyMap()
)

data class SchematicRegion(
    val name: String,
    val sizeX: Int,
    val sizeY: Int,
    val sizeZ: Int,
    val posX: Int = 0,
    val posY: Int = 0,
    val posZ: Int = 0,
    val palette: List<ParsedBlockState>,
    val blockIndices: IntArray // length = sizeX * sizeY * sizeZ
) {
    inline fun getBlockIndex(x: Int, y: Int, z: Int): Int {
        if (x !in 0 until sizeX || y !in 0 until sizeY || z !in 0 until sizeZ) return 0
        return blockIndices[(y * sizeZ + z) * sizeX + x]
    }

    inline fun getBlockState(x: Int, y: Int, z: Int): ParsedBlockState? {
        val idx = getBlockIndex(x, y, z)
        return palette.getOrNull(idx)
    }
}

data class ParsedSchematic(
    val regions: List<SchematicRegion>,
    val totalVolume: Long
)

object SchematicParser {

    /**
     * Parses .litematic, .schem, .nbt, or .mcstructure (including Bedrock/litemapy).
     */
    fun parse(bytes: ByteArray, fileName: String = ""): ParsedSchematic {
        val lowerName = fileName.lowercase()
        return when {
            lowerName.endsWith(".litematic") -> parseLitematic(bytes)
            lowerName.endsWith(".schem") || lowerName.endsWith(".schematic") -> parseSchem(bytes)
            lowerName.endsWith(".mcstructure") -> parseMcStructure(bytes)
            lowerName.endsWith(".nbt") -> parseVanillaNbt(bytes)
            else -> {
                // Auto-detect by inspecting NBT structure
                try {
                    val root = NbtReader.read(bytes)
                    if (root.get("Regions") != null) {
                        parseLitematicRoot(root)
                    } else if (root.get("Schematic") != null || root.get("Width") != null || root.get("Blocks") != null) {
                        parseSchemRoot(root)
                    } else if (root.get("size") != null && root.get("blocks") != null) {
                        parseVanillaNbtRoot(root)
                    } else {
                        // Fallback to Bedrock little-endian NBT check
                        parseMcStructure(bytes)
                    }
                } catch (e: Exception) {
                    try {
                        parseMcStructure(bytes)
                    } catch (e2: Exception) {
                        throw IllegalArgumentException("Unrecognized schematic format: ${e.message}", e)
                    }
                }
            }
        }
    }

    fun parseLitematic(bytes: ByteArray): ParsedSchematic {
        val root = NbtReader.read(bytes)
        return parseLitematicRoot(root)
    }

    private fun parseLitematicRoot(root: NbtReader.TagCompound): ParsedSchematic {
        val regionsTag = root.getCompound("Regions")
            ?: throw IllegalArgumentException("Missing 'Regions' tag in litematic")

        val regionsList = mutableListOf<SchematicRegion>()
        var totalVolume = 0L

        for ((regionName, regTag) in regionsTag.value) {
            val regCompound = regTag as? NbtReader.TagCompound ?: continue
            val sizeCompound = regCompound.getCompound("Size") ?: continue
            val sx = Math.abs(sizeCompound.getInt("x"))
            val sy = Math.abs(sizeCompound.getInt("y"))
            val sz = Math.abs(sizeCompound.getInt("z"))
            if (sx <= 0 || sy <= 0 || sz <= 0) continue

            val posCompound = regCompound.getCompound("Position")
            val px = posCompound?.getInt("x") ?: 0
            val py = posCompound?.getInt("y") ?: 0
            val pz = posCompound?.getInt("z") ?: 0

            val paletteTag = regCompound.getList("BlockStatePalette") ?: continue
            val palette = mutableListOf<ParsedBlockState>()
            for (item in paletteTag.value) {
                val itemCompound = item as? NbtReader.TagCompound ?: continue
                val rawName = itemCompound.getString("Name") ?: "minecraft:air"
                val name = if (rawName.startsWith("minecraft:")) rawName else "minecraft:$rawName"
                val props = mutableMapOf<String, String>()
                itemCompound.getCompound("Properties")?.value?.forEach { (k, v) ->
                    if (v is NbtReader.TagString) props[k] = v.value
                }
                palette.add(ParsedBlockState(name, props))
            }
            if (palette.isEmpty()) {
                palette.add(ParsedBlockState("minecraft:air"))
            }

            val volume = sx * sy * sz
            totalVolume += volume
            val blockIndices = IntArray(volume)
            val blockStates = regCompound.getLongArray("BlockStates")

            if (blockStates != null && blockStates.isNotEmpty()) {
                val bitsPerBlock = Math.max(2, 32 - Integer.numberOfLeadingZeros(Math.max(1, palette.size - 1)))
                val mask = (1L shl bitsPerBlock) - 1L

                // Detect Continuous vs Padded packing
                val expectedContinuousLongs = ((volume.toLong() * bitsPerBlock) + 63) / 64
                val isContinuous = blockStates.size.toLong() == expectedContinuousLongs

                if (isContinuous) {
                    var bitIndex = 0L
                    for (i in 0 until volume) {
                        val startLong = (bitIndex ushr 6).toInt()
                        val bitOffset = (bitIndex and 63L).toInt()
                        var value = (blockStates[startLong] ushr bitOffset) and mask
                        if (bitOffset + bitsPerBlock > 64 && startLong + 1 < blockStates.size) {
                            val bitsFromNext = (bitOffset + bitsPerBlock) - 64
                            val nextPart = (blockStates[startLong + 1] and ((1L shl bitsFromNext) - 1L)) shl (64 - bitOffset)
                            value = value or nextPart
                        }
                        // Litematica indexing is: x + z * sizeX + y * (sizeX * sizeZ)
                        val x = i % sx
                        val remaining = i / sx
                        val z = remaining % sz
                        val y = remaining / sz
                        val standardIdx = (y * sz + z) * sx + x
                        blockIndices[standardIdx] = (value and mask).toInt()
                        bitIndex += bitsPerBlock
                    }
                } else {
                    // Padded packing (1.16+)
                    val blocksPerLong = 64 / bitsPerBlock
                    for (i in 0 until volume) {
                        val longIndex = i / blocksPerLong
                        val bitOffset = (i % blocksPerLong) * bitsPerBlock
                        val value = if (longIndex < blockStates.size) {
                            (blockStates[longIndex] ushr bitOffset) and mask
                        } else 0L
                        val x = i % sx
                        val remaining = i / sx
                        val z = remaining % sz
                        val y = remaining / sz
                        val standardIdx = (y * sz + z) * sx + x
                        blockIndices[standardIdx] = value.toInt()
                    }
                }
            }

            regionsList.add(SchematicRegion(regionName, sx, sy, sz, px, py, pz, palette, blockIndices))
        }

        return ParsedSchematic(regionsList, totalVolume)
    }

    fun parseSchem(bytes: ByteArray): ParsedSchematic {
        val root = NbtReader.read(bytes)
        return parseSchemRoot(root)
    }

    private fun parseSchemRoot(rootRaw: NbtReader.TagCompound): ParsedSchematic {
        val root = rootRaw.getCompound("Schematic") ?: rootRaw
        val sx = root.getShort("Width").toInt()
        val sy = root.getShort("Height").toInt()
        val sz = root.getShort("Length").toInt()
        val volume = sx * sy * sz
        val blockIndices = IntArray(volume)
        val palette = mutableListOf<ParsedBlockState>()

        // Sponge / WorldEdit schematic (palette map)
        val paletteCompound = root.getCompound("Palette")
        if (paletteCompound != null) {
            val paletteMap = mutableMapOf<Int, ParsedBlockState>()
            for ((entry, idTag) in paletteCompound.value) {
                val id = (idTag as? NbtReader.TagInt)?.value ?: (idTag as? NbtReader.TagByte)?.value?.toInt() ?: 0
                val blockName: String
                val props = mutableMapOf<String, String>()
                if (entry.contains("[")) {
                    blockName = entry.substringBefore("[")
                    val propStr = entry.substringAfter("[").substringBefore("]")
                    propStr.split(",").forEach {
                        val kv = it.split("=")
                        if (kv.size == 2) props[kv[0]] = kv[1]
                    }
                } else {
                    blockName = entry
                }
                paletteMap[id] = ParsedBlockState(blockName, props)
            }
            val maxId = paletteMap.keys.maxOrNull() ?: 0
            for (i in 0..maxId) {
                palette.add(paletteMap[i] ?: ParsedBlockState("minecraft:air"))
            }

            // Read varint BlockData
            val blockData = root.getByteArray("BlockData")
            if (blockData != null) {
                var index = 0
                var byteOffset = 0
                while (byteOffset < blockData.size && index < volume) {
                    var value = 0
                    var varintLength = 0
                    while (true) {
                        val b = blockData[byteOffset++].toInt()
                        value = value or ((b and 0x7F) shl (varintLength * 7))
                        varintLength++
                        if ((b and 0x80) == 0) break
                    }
                    blockIndices[index++] = value
                }
            }
        } else {
            // Legacy MCEdit schematic
            val blocks = root.getByteArray("Blocks") ?: ByteArray(0)
            val data = root.getByteArray("Data") ?: ByteArray(0)
            palette.add(ParsedBlockState("minecraft:air"))
            palette.add(ParsedBlockState("minecraft:stone"))
            for (i in 0 until minOf(volume, blocks.size)) {
                val bId = blocks[i].toInt() and 0xFF
                blockIndices[i] = if (bId != 0) 1 else 0
            }
        }

        val region = SchematicRegion("Main", sx, sy, sz, 0, 0, 0, palette, blockIndices)
        return ParsedSchematic(listOf(region), volume.toLong())
    }

    fun parseVanillaNbt(bytes: ByteArray): ParsedSchematic {
        val root = NbtReader.read(bytes)
        return parseVanillaNbtRoot(root)
    }

    private fun parseVanillaNbtRoot(root: NbtReader.TagCompound): ParsedSchematic {
        val sizeList = root.getList("size")
            ?: throw IllegalArgumentException("Missing 'size' list in Vanilla structure NBT")
        val sx = (sizeList.value.getOrNull(0) as? NbtReader.TagInt)?.value ?: 1
        val sy = (sizeList.value.getOrNull(1) as? NbtReader.TagInt)?.value ?: 1
        val sz = (sizeList.value.getOrNull(2) as? NbtReader.TagInt)?.value ?: 1
        val volume = sx * sy * sz
        val blockIndices = IntArray(volume)

        val palette = mutableListOf<ParsedBlockState>()
        val paletteList = root.getList("palette")
        if (paletteList != null) {
            for (item in paletteList.value) {
                val c = item as? NbtReader.TagCompound ?: continue
                val name = c.getString("Name") ?: "minecraft:air"
                val props = mutableMapOf<String, String>()
                c.getCompound("Properties")?.value?.forEach { (k, v) ->
                    if (v is NbtReader.TagString) props[k] = v.value
                }
                palette.add(ParsedBlockState(name, props))
            }
        }

        val blocksList = root.getList("blocks")
        if (blocksList != null) {
            for (item in blocksList.value) {
                val b = item as? NbtReader.TagCompound ?: continue
                val pos = b.getList("pos") ?: continue
                val state = b.getInt("state")
                val x = (pos.value.getOrNull(0) as? NbtReader.TagInt)?.value ?: 0
                val y = (pos.value.getOrNull(1) as? NbtReader.TagInt)?.value ?: 0
                val z = (pos.value.getOrNull(2) as? NbtReader.TagInt)?.value ?: 0
                if (x in 0 until sx && y in 0 until sy && z in 0 until sz) {
                    val idx = (y * sz + z) * sx + x
                    blockIndices[idx] = state
                }
            }
        }

        val region = SchematicRegion("Structure", sx, sy, sz, 0, 0, 0, palette, blockIndices)
        return ParsedSchematic(listOf(region), volume.toLong())
    }

    fun parseMcStructure(bytes: ByteArray): ParsedSchematic {
        // Bedrock .mcstructure is Little-Endian NBT with format_version header
        val stream = ByteArrayInputStream(bytes)
        // Check for 4-byte header or Little Endian NBT tag (TAG_COMPOUND = 10)
        val dataInput = DataInputStream(stream)
        var formatVersion = dataInput.readInt()
        if (formatVersion == 1 || formatVersion == 2 || formatVersion == 3) {
            // Little Endian format version
        } else {
            stream.reset()
        }

        val root = readLittleEndianNbt(stream)
        val sizeList = root.getList("size") ?: throw IllegalArgumentException("Missing 'size' in mcstructure")
        val sx = (sizeList.value.getOrNull(0) as? NbtReader.TagInt)?.value ?: 1
        val sy = (sizeList.value.getOrNull(1) as? NbtReader.TagInt)?.value ?: 1
        val sz = (sizeList.value.getOrNull(2) as? NbtReader.TagInt)?.value ?: 1
        val volume = sx * sy * sz
        val blockIndices = IntArray(volume)

        val structureCompound = root.getCompound("structure") ?: root
        val blockIndicesTag = structureCompound.getList("block_indices")
        val primaryLayer = blockIndicesTag?.value?.firstOrNull() as? NbtReader.TagList
        val rawIndices = primaryLayer?.value?.map { (it as? NbtReader.TagInt)?.value ?: 0 } ?: emptyList()

        val paletteCompound = structureCompound.getCompound("palette")?.getCompound("default")
        val paletteList = paletteCompound?.getList("block_palette")
        val palette = mutableListOf<ParsedBlockState>()
        palette.add(ParsedBlockState("minecraft:air"))

        if (paletteList != null) {
            for (p in paletteList.value) {
                val c = p as? NbtReader.TagCompound ?: continue
                val name = c.getString("name") ?: "minecraft:air"
                palette.add(ParsedBlockState(name))
            }
        }

        for (i in 0 until minOf(volume, rawIndices.size)) {
            val idx = rawIndices[i]
            blockIndices[i] = if (idx >= 0 && idx + 1 < palette.size) idx + 1 else 0
        }

        val region = SchematicRegion("BedrockStructure", sx, sy, sz, 0, 0, 0, palette, blockIndices)
        return ParsedSchematic(listOf(region), volume.toLong())
    }

    private fun readLittleEndianNbt(stream: ByteArrayInputStream): NbtReader.TagCompound {
        val type = stream.read()
        if (type != 10) throw IllegalArgumentException("Expected compound root in LE NBT, got $type")
        readLittleEndianString(stream) // root name
        return readLittleEndianCompound(stream)
    }

    private fun readLittleEndianShort(stream: ByteArrayInputStream): Short {
        val b1 = stream.read()
        val b2 = stream.read()
        return ((b2 shl 8) or b1).toShort()
    }

    private fun readLittleEndianInt(stream: ByteArrayInputStream): Int {
        val b1 = stream.read()
        val b2 = stream.read()
        val b3 = stream.read()
        val b4 = stream.read()
        return (b4 shl 24) or (b3 shl 16) or (b2 shl 8) or b1
    }

    private fun readLittleEndianLong(stream: ByteArrayInputStream): Long {
        val low = readLittleEndianInt(stream).toLong() and 0xFFFFFFFFL
        val high = readLittleEndianInt(stream).toLong() and 0xFFFFFFFFL
        return (high shl 32) or low
    }

    private fun readLittleEndianString(stream: ByteArrayInputStream): String {
        val len = readLittleEndianShort(stream).toInt() and 0xFFFF
        val buf = ByteArray(len)
        stream.read(buf, 0, len)
        return String(buf, Charsets.UTF_8)
    }

    private fun readLittleEndianCompound(stream: ByteArrayInputStream): NbtReader.TagCompound {
        val map = HashMap<String, NbtReader.NbtTag>()
        while (true) {
            val type = stream.read()
            if (type <= 0) break
            val name = readLittleEndianString(stream)
            val tag = readLittleEndianPayload(type.toByte(), stream)
            map[name] = tag
        }
        return NbtReader.TagCompound(map)
    }

    private fun readLittleEndianPayload(type: Byte, stream: ByteArrayInputStream): NbtReader.NbtTag {
        return when (type) {
            NbtReader.TAG_BYTE -> NbtReader.TagByte(stream.read().toByte())
            NbtReader.TAG_SHORT -> NbtReader.TagShort(readLittleEndianShort(stream))
            NbtReader.TAG_INT -> NbtReader.TagInt(readLittleEndianInt(stream))
            NbtReader.TAG_LONG -> NbtReader.TagLong(readLittleEndianLong(stream))
            NbtReader.TAG_FLOAT -> {
                val intBits = readLittleEndianInt(stream)
                NbtReader.TagFloat(java.lang.Float.intBitsToFloat(intBits))
            }
            NbtReader.TAG_DOUBLE -> {
                val longBits = readLittleEndianLong(stream)
                NbtReader.TagDouble(java.lang.Double.longBitsToDouble(longBits))
            }
            NbtReader.TAG_BYTE_ARRAY -> {
                val len = readLittleEndianInt(stream)
                val arr = ByteArray(len)
                stream.read(arr, 0, len)
                NbtReader.TagByteArray(arr)
            }
            NbtReader.TAG_STRING -> NbtReader.TagString(readLittleEndianString(stream))
            NbtReader.TAG_LIST -> {
                val itemType = stream.read().toByte()
                val len = readLittleEndianInt(stream)
                val list = ArrayList<NbtReader.NbtTag>(len)
                for (i in 0 until len) {
                    list.add(readLittleEndianPayload(itemType, stream))
                }
                NbtReader.TagList(itemType, list)
            }
            NbtReader.TAG_COMPOUND -> readLittleEndianCompound(stream)
            NbtReader.TAG_INT_ARRAY -> {
                val len = readLittleEndianInt(stream)
                val arr = IntArray(len)
                for (i in 0 until len) arr[i] = readLittleEndianInt(stream)
                NbtReader.TagIntArray(arr)
            }
            NbtReader.TAG_LONG_ARRAY -> {
                val len = readLittleEndianInt(stream)
                val arr = LongArray(len)
                for (i in 0 until len) arr[i] = readLittleEndianLong(stream)
                NbtReader.TagLongArray(arr)
            }
            else -> NbtReader.TagByte(0)
        }
    }
}
