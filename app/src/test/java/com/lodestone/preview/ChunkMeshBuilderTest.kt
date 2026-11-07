package com.lodestone.preview

import org.junit.Assert.*
import org.junit.Test

class ChunkMeshBuilderTest {

    @Test
    fun testFaceCullingAndLayerSlicing() {
        val palette = listOf(
            ParsedBlockState("minecraft:air"),
            ParsedBlockState("minecraft:stone")
        )
        // 2x2x2 solid stone cube
        val sx = 2
        val sy = 2
        val sz = 2
        val volume = sx * sy * sz
        val blockIndices = IntArray(volume) { 1 } // all stone

        val region = SchematicRegion("TestCube", sx, sy, sz, 0, 0, 0, palette, blockIndices)
        val builder = ChunkMeshBuilder()

        // 1. Full cube mesh
        val fullMesh = builder.buildChunkMesh(region, 0, 0, 0, 0, 1)
        assertNotNull(fullMesh)
        // An external 2x2x2 cube has 24 exposed external quads (6 faces * 4 sub-quads) = 24 quads
        // 24 quads * 4 vertices = 96 vertices
        assertEquals(96, fullMesh!!.positions.size / 3)
        // Internal shared faces (12 internal quad faces) must be culled!
        // 24 quads * 6 indices = 144 indices
        assertEquals(144, fullMesh.indices.size)

        // 2. Layer slicing: slice only bottom layer y=0
        val slicedMesh = builder.buildChunkMesh(region, 0, 0, 0, 0, 0)
        assertNotNull(slicedMesh)
        // Bottom layer y=0 now exposes top faces of y=0 towards y=1 because y=1 is sliced out!
        assertTrue(slicedMesh!!.positions.size > 0)
    }
}
