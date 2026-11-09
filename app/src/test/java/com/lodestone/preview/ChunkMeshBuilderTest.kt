package com.lodestone.preview

import org.junit.Assert.*
import org.junit.Test

class ChunkMeshBuilderTest {

    @Test
    fun testFaceUVResolution() {
        // Without atlas file loaded in local JVM unit test, getFaceUV returns default or matched coordinate
        val uvGrassTop = AtlasManager.getFaceUV("grass_block", 0)
        assertNotNull(uvGrassTop)
        assertEquals(4, uvGrassTop.size)

        val uvGrassSide = AtlasManager.getFaceUV("grass_block", 2)
        assertNotNull(uvGrassSide)
        assertEquals(4, uvGrassSide.size)

        val uvFurnaceFront = AtlasManager.getFaceUV("furnace", 3, mapOf("facing" to "north"))
        assertNotNull(uvFurnaceFront)

        val uvOakLogTop = AtlasManager.getFaceUV("oak_log", 0, mapOf("axis" to "y"))
        assertNotNull(uvOakLogTop)
    }

    @Test
    fun testOpacityAndFluidDetection() {
        assertTrue(AtlasManager.isOpaque("stone"))
        assertTrue(AtlasManager.isOpaque("minecraft:cobblestone"))
        assertFalse(AtlasManager.isOpaque("air"))
        assertFalse(AtlasManager.isOpaque("glass"))
        assertFalse(AtlasManager.isOpaque("water"))
        assertFalse(AtlasManager.isOpaque("oak_stairs"))
        assertFalse(AtlasManager.isOpaque("oak_slab"))

        assertTrue(AtlasManager.isFluid("water"))
        assertTrue(AtlasManager.isFluid("lava"))
        assertFalse(AtlasManager.isFluid("stone"))
    }
}
