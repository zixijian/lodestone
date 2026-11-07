package com.lodestone.preview

import org.junit.Assert.*
import org.junit.Test
import java.io.ByteArrayOutputStream
import java.io.DataOutputStream
import java.util.zip.GZIPOutputStream

class SchematicParserTest {

    @Test
    fun testSyntheticLitematicParsing() {
        val sx = 20
        val sy = 10
        val sz = 15
        val volume = sx * sy * sz

        val baos = ByteArrayOutputStream()
        val gzip = GZIPOutputStream(baos)
        val dos = DataOutputStream(gzip)

        // TAG_Compound root
        dos.writeByte(NbtReader.TAG_COMPOUND.toInt())
        dos.writeUTF("TestLitematic")

        // Write Regions compound
        dos.writeByte(NbtReader.TAG_COMPOUND.toInt())
        dos.writeUTF("Regions")

        // Region1
        dos.writeByte(NbtReader.TAG_COMPOUND.toInt())
        dos.writeUTF("Region1")

        // Size
        dos.writeByte(NbtReader.TAG_COMPOUND.toInt())
        dos.writeUTF("Size")
        dos.writeByte(NbtReader.TAG_INT.toInt()); dos.writeUTF("x"); dos.writeInt(sx)
        dos.writeByte(NbtReader.TAG_INT.toInt()); dos.writeUTF("y"); dos.writeInt(sy)
        dos.writeByte(NbtReader.TAG_INT.toInt()); dos.writeUTF("z"); dos.writeInt(sz)
        dos.writeByte(NbtReader.TAG_END.toInt())

        // BlockStatePalette
        dos.writeByte(NbtReader.TAG_LIST.toInt())
        dos.writeUTF("BlockStatePalette")
        dos.writeByte(NbtReader.TAG_COMPOUND.toInt())
        dos.writeInt(2) // 2 states

        // Palette[0] = air
        dos.writeByte(NbtReader.TAG_STRING.toInt()); dos.writeUTF("Name"); dos.writeUTF("minecraft:air")
        dos.writeByte(NbtReader.TAG_END.toInt())

        // Palette[1] = stone
        dos.writeByte(NbtReader.TAG_STRING.toInt()); dos.writeUTF("Name"); dos.writeUTF("minecraft:stone")
        dos.writeByte(NbtReader.TAG_END.toInt())

        // BlockStates: 2 bits per block -> 3000 * 2 = 6000 bits -> 94 longs
        val bitsPerBlock = 2
        val longsCount = (volume * bitsPerBlock + 63) / 64
        dos.writeByte(NbtReader.TAG_LONG_ARRAY.toInt())
        dos.writeUTF("BlockStates")
        dos.writeInt(longsCount)
        for (i in 0 until longsCount) {
            dos.writeLong(0x5555555555555555L) // alternate 01 (stone)
        }

        dos.writeByte(NbtReader.TAG_END.toInt()) // End Region1
        dos.writeByte(NbtReader.TAG_END.toInt()) // End Regions
        dos.writeByte(NbtReader.TAG_END.toInt()) // End Root
        dos.flush()
        gzip.close()

        val parsed = SchematicParser.parse(baos.toByteArray(), "test.litematic")
        assertNotNull(parsed)
        assertEquals(1, parsed.regions.size)
        val reg = parsed.regions[0]
        assertEquals("Region1", reg.name)
        assertEquals(sx, reg.sizeX)
        assertEquals(sy, reg.sizeY)
        assertEquals(sz, reg.sizeZ)
        assertEquals(2, reg.palette.size)
        assertEquals("minecraft:stone", reg.palette[1].name)
        assertEquals(volume, reg.blockIndices.size)
        assertEquals(1, reg.blockIndices[0]) // stone
    }
}
