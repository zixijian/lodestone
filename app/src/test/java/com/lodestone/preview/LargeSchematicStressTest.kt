package com.lodestone.preview

import org.junit.Assert.*
import org.junit.Test
import java.io.ByteArrayOutputStream
import java.io.DataOutputStream
import java.util.zip.GZIPOutputStream

class LargeSchematicStressTest {

    @Test
    fun testLarge32MbSchematicSimulation() {
        // Test parsing and mesh building for a large volume schematic (e.g. 128x64x128 = 1,048,576 blocks)
        val sx = 128
        val sy = 64
        val sz = 128
        val volume = sx * sy * sz

        val palette = listOf(
            ParsedBlockState("minecraft:air"),
            ParsedBlockState("minecraft:stone"),
            ParsedBlockState("minecraft:grass_block"),
            ParsedBlockState("minecraft:oak_log", mapOf("axis" to "y")),
            ParsedBlockState("minecraft:glass"),
            ParsedBlockState("minecraft:water")
        )

        val blockIndices = IntArray(volume)
        for (y in 0 until sy) {
            for (z in 0 until sz) {
                for (x in 0 until sx) {
                    if (y == 0 || (x + y + z) % 5 == 0) {
                        blockIndices[(y * sz + z) * sx + x] = 1 + ((x + y + z) % 5)
                    }
                }
            }
        }

        val region = SchematicRegion("LargeRegion", sx, sy, sz, 0, 0, 0, palette, blockIndices)
        val builder = ChunkMeshBuilder()

        val start = System.currentTimeMillis()
        val chunksX = (sx + 15) / 16
        val chunksY = (sy + 15) / 16
        val chunksZ = (sz + 15) / 16

        var totalQuads = 0
        for (cy in 0 until chunksY) {
            for (cz in 0 until chunksZ) {
                for (cx in 0 until chunksX) {
                    val mesh = builder.buildChunkMesh(region, cx, cy, cz, 0, sy)
                    if (mesh != null) {
                        totalQuads += mesh.indices.size / 6
                    }
                }
            }
        }
        val elapsed = System.currentTimeMillis() - start
        println("Generated 1,000,000+ block schematic mesh: $totalQuads quads in $elapsed ms")
        assertTrue("Mesh generation should complete in reasonable time (< 5000ms)", elapsed < 5000)
        assertTrue("Quads should be generated", totalQuads > 0)
    }

    @Test
    fun testLitematicaSyntheticFileParse() {
        val sx = 30
        val sy = 20
        val sz = 30
        val volume = sx * sy * sz

        val bout = ByteArrayOutputStream()
        val gz = GZIPOutputStream(bout)
        val out = DataOutputStream(gz)

        // Write minimal NBT Compound with Regions
        out.writeByte(NbtReader.TAG_COMPOUND.toInt())
        out.writeUTF("TestLitematic")

        out.writeByte(NbtReader.TAG_COMPOUND.toInt())
        out.writeUTF("Regions")

        out.writeByte(NbtReader.TAG_COMPOUND.toInt())
        out.writeUTF("Main")

        // Size
        out.writeByte(NbtReader.TAG_COMPOUND.toInt())
        out.writeUTF("Size")
        out.writeByte(NbtReader.TAG_INT.toInt())
        out.writeUTF("x"); out.writeInt(sx)
        out.writeByte(NbtReader.TAG_INT.toInt())
        out.writeUTF("y"); out.writeInt(sy)
        out.writeByte(NbtReader.TAG_INT.toInt())
        out.writeUTF("z"); out.writeInt(sz)
        out.writeByte(NbtReader.TAG_END.toInt())

        // Palette
        out.writeByte(NbtReader.TAG_LIST.toInt())
        out.writeUTF("BlockStatePalette")
        out.writeByte(NbtReader.TAG_COMPOUND.toInt())
        out.writeInt(2) // 2 entries

        // palette[0] = air
        out.writeByte(NbtReader.TAG_STRING.toInt())
        out.writeUTF("Name"); out.writeUTF("minecraft:air")
        out.writeByte(NbtReader.TAG_END.toInt())

        // palette[1] = stone
        out.writeByte(NbtReader.TAG_STRING.toInt())
        out.writeUTF("Name"); out.writeUTF("minecraft:stone")
        out.writeByte(NbtReader.TAG_END.toInt())

        // BlockStates (empty long array for test)
        out.writeByte(NbtReader.TAG_LONG_ARRAY.toInt())
        out.writeUTF("BlockStates")
        out.writeInt(0)

        // End Main
        out.writeByte(NbtReader.TAG_END.toInt())
        // End Regions
        out.writeByte(NbtReader.TAG_END.toInt())
        // End Root
        out.writeByte(NbtReader.TAG_END.toInt())

        out.flush()
        gz.finish()

        val bytes = bout.toByteArray()
        val parsed = SchematicParser.parse(bytes, "test.litematic")
        assertEquals(1, parsed.regions.size)
        assertEquals("Main", parsed.regions[0].name)
        assertEquals(sx, parsed.regions[0].sizeX)
        assertEquals(sy, parsed.regions[0].sizeY)
        assertEquals(sz, parsed.regions[0].sizeZ)
    }
}
