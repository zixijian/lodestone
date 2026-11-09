package com.lodestone.preview

import org.junit.Assert.*
import org.junit.Test
import java.io.ByteArrayOutputStream
import java.io.DataOutputStream
import java.util.zip.GZIPOutputStream

class LargeSchematicStressTest {

    @Test
    fun testLarge32MbSchematicSimulation() {
        // Test parsing and mesh building for a large volume schematic (e.g. 100x64x100 = 640,000 blocks)
        val sx = 100
        val sy = 64
        val sz = 100
        val volume = sx * sy * sz

        val palette = listOf(
            ParsedBlockState("minecraft:air"),
            ParsedBlockState("minecraft:stone"),
            ParsedBlockState("minecraft:glass"),
            ParsedBlockState("minecraft:water")
        )

        val blockIndices = IntArray(volume)
        // Populate varied blocks
        for (y in 0 until sy) {
            for (z in 0 until sz) {
                for (x in 0 until sx) {
                    if (y == 0 || (x + y + z) % 7 == 0) {
                        blockIndices[(y * sz + z) * sx + x] = 1 + ((x + y + z) % 3)
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
        println("Generated large schematic mesh: $totalQuads quads in $elapsed ms")
        assertTrue("Mesh generation should complete in reasonable time (< 3000ms)", elapsed < 3000)
        assertTrue("Quads should be generated", totalQuads > 0)
    }
}
