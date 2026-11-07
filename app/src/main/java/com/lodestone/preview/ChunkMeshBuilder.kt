package com.lodestone.preview

import java.nio.ByteBuffer
import java.nio.ByteOrder

/**
 * Builds 3D geometry with 16x16x16 chunk partitioning and neighbor face culling.
 * Yields compact vertex/index buffers ready for Filament renderables.
 */
class ChunkMeshBuilder {

    data class MeshData(
        val positions: FloatArray,
        val uvs: FloatArray,
        val colors: FloatArray,
        val indices: IntArray
    )

    private val positions = FloatArrayList(16384)
    private val uvs = FloatArrayList(16384)
    private val colors = FloatArrayList(16384)
    private val indices = IntArrayList(24576)

    fun clear() {
        positions.clear()
        uvs.clear()
        colors.clear()
        indices.clear()
    }

    /**
     * Builds chunk mesh for region slice or whole chunk.
     * minY and maxY filter layer slicing.
     */
    fun buildChunkMesh(
        region: SchematicRegion,
        chunkX: Int,
        chunkY: Int,
        chunkZ: Int,
        minY: Int = 0,
        maxY: Int = Int.MAX_VALUE
    ): MeshData? {
        clear()

        val startX = chunkX * 16
        val endX = minOf(startX + 16, region.sizeX)
        val startY = chunkY * 16
        val endY = minOf(startY + 16, region.sizeY)
        val startZ = chunkZ * 16
        val endZ = minOf(startZ + 16, region.sizeZ)

        if (startY > maxY || endY - 1 < minY) return null

        for (y in startY until endY) {
            if (y !in minY..maxY) continue
            for (z in startZ until endZ) {
                for (x in startX until endX) {
                    val blockIdx = region.getBlockIndex(x, y, z)
                    if (blockIdx == 0) continue // air
                    val state = region.palette.getOrNull(blockIdx) ?: continue
                    val name = state.name
                    if (name == "minecraft:air" || name == "air") continue

                    val isOpaque = AtlasManager.isOpaque(name)
                    val isFluid = AtlasManager.isFluid(name)

                    // Get texture coordinates
                    val texName = name.removePrefix("minecraft:")
                    val uv = AtlasManager.getUV(texName)

                    // Face culling: Check 6 neighbors
                    // +Y (Top)
                    if (shouldRenderFace(region, x, y + 1, z, isOpaque, isFluid, maxY)) {
                        addQuad(
                            x.toFloat(), (y + 1).toFloat(), z.toFloat(),
                            (x + 1).toFloat(), (y + 1).toFloat(), z.toFloat(),
                            (x + 1).toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                            x.toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                            uv, 1.0f, name, state.properties
                        )
                    }
                    // -Y (Bottom)
                    if (shouldRenderFace(region, x, y - 1, z, isOpaque, isFluid, maxY)) {
                        addQuad(
                            x.toFloat(), y.toFloat(), (z + 1).toFloat(),
                            (x + 1).toFloat(), y.toFloat(), (z + 1).toFloat(),
                            (x + 1).toFloat(), y.toFloat(), z.toFloat(),
                            x.toFloat(), y.toFloat(), z.toFloat(),
                            uv, 0.5f, name, state.properties
                        )
                    }
                    // +Z (South)
                    if (shouldRenderFace(region, x, y, z + 1, isOpaque, isFluid, maxY)) {
                        addQuad(
                            x.toFloat(), y.toFloat(), (z + 1).toFloat(),
                            (x + 1).toFloat(), y.toFloat(), (z + 1).toFloat(),
                            (x + 1).toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                            x.toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                            uv, 0.8f, name, state.properties
                        )
                    }
                    // -Z (North)
                    if (shouldRenderFace(region, x, y, z - 1, isOpaque, isFluid, maxY)) {
                        addQuad(
                            (x + 1).toFloat(), y.toFloat(), z.toFloat(),
                            x.toFloat(), y.toFloat(), z.toFloat(),
                            x.toFloat(), (y + 1).toFloat(), z.toFloat(),
                            (x + 1).toFloat(), (y + 1).toFloat(), z.toFloat(),
                            uv, 0.8f, name, state.properties
                        )
                    }
                    // +X (East)
                    if (shouldRenderFace(region, x + 1, y, z, isOpaque, isFluid, maxY)) {
                        addQuad(
                            (x + 1).toFloat(), y.toFloat(), (z + 1).toFloat(),
                            (x + 1).toFloat(), y.toFloat(), z.toFloat(),
                            (x + 1).toFloat(), (y + 1).toFloat(), z.toFloat(),
                            (x + 1).toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                            uv, 0.6f, name, state.properties
                        )
                    }
                    // -X (West)
                    if (shouldRenderFace(region, x - 1, y, z, isOpaque, isFluid, maxY)) {
                        addQuad(
                            x.toFloat(), y.toFloat(), z.toFloat(),
                            x.toFloat(), y.toFloat(), (z + 1).toFloat(),
                            x.toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                            x.toFloat(), (y + 1).toFloat(), z.toFloat(),
                            uv, 0.6f, name, state.properties
                        )
                    }
                }
            }
        }

        if (positions.size == 0) return null
        return MeshData(positions.toArray(), uvs.toArray(), colors.toArray(), indices.toArray())
    }

    private fun shouldRenderFace(
        region: SchematicRegion,
        nx: Int,
        ny: Int,
        nz: Int,
        curOpaque: Boolean,
        curFluid: Boolean,
        maxY: Int
    ): Boolean {
        if (ny > maxY) return true
        if (nx !in 0 until region.sizeX || ny !in 0 until region.sizeY || nz !in 0 until region.sizeZ) {
            return true
        }
        val neighborIdx = region.getBlockIndex(nx, ny, nz)
        if (neighborIdx == 0) return true
        val neighborState = region.palette.getOrNull(neighborIdx) ?: return true
        val neighborName = neighborState.name
        if (neighborName == "minecraft:air" || neighborName == "air") return true

        val neighborOpaque = AtlasManager.isOpaque(neighborName)
        if (neighborOpaque) return false

        if (curFluid) {
            return !AtlasManager.isFluid(neighborName)
        }
        return true
    }

    private fun addQuad(
        x0: Float, y0: Float, z0: Float,
        x1: Float, y1: Float, z1: Float,
        x2: Float, y2: Float, z2: Float,
        x3: Float, y3: Float, z3: Float,
        uv: FloatArray,
        lightMult: Float,
        blockName: String,
        props: Map<String, String>
    ) {
        val baseIndex = positions.size / 3

        positions.add(x0); positions.add(y0); positions.add(z0)
        positions.add(x1); positions.add(y1); positions.add(z1)
        positions.add(x2); positions.add(y2); positions.add(z2)
        positions.add(x3); positions.add(y3); positions.add(z3)

        val u0 = uv[0]
        val v0 = uv[1]
        val u1 = uv[2]
        val v1 = uv[3]

        uvs.add(u0); uvs.add(v1)
        uvs.add(u1); uvs.add(v1)
        uvs.add(u1); uvs.add(v0)
        uvs.add(u0); uvs.add(v0)

        // Calculate tint (redstone / water / foliage)
        var cr = lightMult
        var cg = lightMult
        var cb = lightMult
        val ca = 1.0f

        if (blockName.contains("redstone_wire")) {
            val power = props["power"]?.toIntOrNull() ?: 0
            val pNorm = power / 15f
            cr = (0.4f + 0.6f * pNorm) * lightMult
            cg = (0.05f * pNorm) * lightMult
            cb = 0f
        } else if (blockName.contains("water")) {
            cr *= 0.24f
            cg *= 0.46f
            cb *= 0.89f
        }

        for (i in 0 until 4) {
            colors.add(cr)
            colors.add(cg)
            colors.add(cb)
            colors.add(ca)
        }

        // 2 triangles: 0, 1, 2 and 0, 2, 3
        indices.add(baseIndex)
        indices.add(baseIndex + 1)
        indices.add(baseIndex + 2)
        indices.add(baseIndex)
        indices.add(baseIndex + 2)
        indices.add(baseIndex + 3)
    }
}

// Lightweight primitive float array list
class FloatArrayList(capacity: Int = 1024) {
    var data = FloatArray(capacity)
    var size = 0

    fun add(element: Float) {
        if (size == data.size) {
            val next = FloatArray(data.size * 2)
            System.arraycopy(data, 0, next, 0, size)
            data = next
        }
        data[size++] = element
    }

    fun clear() {
        size = 0
    }

    fun toArray(): FloatArray {
        val result = FloatArray(size)
        System.arraycopy(data, 0, result, 0, size)
        return result
    }
}

// Lightweight primitive int array list
class IntArrayList(capacity: Int = 1024) {
    var data = IntArray(capacity)
    var size = 0

    fun add(element: Int) {
        if (size == data.size) {
            val next = IntArray(data.size * 2)
            System.arraycopy(data, 0, next, 0, size)
            data = next
        }
        data[size++] = element
    }

    fun clear() {
        size = 0
    }

    fun toArray(): IntArray {
        val result = IntArray(size)
        System.arraycopy(data, 0, result, 0, size)
        return result
    }
}
