package com.lodestone.preview

import java.nio.ByteBuffer
import java.nio.ByteOrder

/**
 * Builds 3D geometry with 16x16x16 chunk partitioning and neighbor face culling.
 * Resolves face-specific UVs (top/bottom/sides/front) for full fidelity.
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
                    val props = state.properties

                    if (isFluid) {
                        buildFluidBlock(region, x, y, z, name, props, maxY)
                    } else {
                        buildSolidBlock(region, x, y, z, name, props, isOpaque, maxY)
                    }
                }
            }
        }

        if (positions.size == 0) return null
        return MeshData(positions.toArray(), uvs.toArray(), colors.toArray(), indices.toArray())
    }

    private fun buildSolidBlock(
        region: SchematicRegion,
        x: Int,
        y: Int,
        z: Int,
        name: String,
        props: Map<String, String>,
        isOpaque: Boolean,
        maxY: Int
    ) {
        // Handle slabs
        val clean = name.removePrefix("minecraft:")
        if (clean.endsWith("_slab") && !clean.contains("double")) {
            val type = props["type"] ?: "bottom"
            val y0 = if (type == "top") (y + 0.5f) else y.toFloat()
            val y1 = if (type == "top") (y + 1f) else (y + 0.5f)

            // Top
            val uvTop = AtlasManager.getFaceUV(name, 0, props)
            addQuad(
                x.toFloat(), y1, z.toFloat(),
                (x + 1).toFloat(), y1, z.toFloat(),
                (x + 1).toFloat(), y1, (z + 1).toFloat(),
                x.toFloat(), y1, (z + 1).toFloat(),
                uvTop, 1.0f, name, props
            )
            // Bottom
            val uvBot = AtlasManager.getFaceUV(name, 1, props)
            addQuad(
                x.toFloat(), y0, (z + 1).toFloat(),
                (x + 1).toFloat(), y0, (z + 1).toFloat(),
                (x + 1).toFloat(), y0, z.toFloat(),
                x.toFloat(), y0, z.toFloat(),
                uvBot, 0.5f, name, props
            )
            // Sides
            val uvSide = AtlasManager.getFaceUV(name, 2, props)
            // South
            addQuad(
                x.toFloat(), y0, (z + 1).toFloat(),
                (x + 1).toFloat(), y0, (z + 1).toFloat(),
                (x + 1).toFloat(), y1, (z + 1).toFloat(),
                x.toFloat(), y1, (z + 1).toFloat(),
                uvSide, 0.8f, name, props
            )
            // North
            addQuad(
                (x + 1).toFloat(), y0, z.toFloat(),
                x.toFloat(), y0, z.toFloat(),
                x.toFloat(), y1, z.toFloat(),
                (x + 1).toFloat(), y1, z.toFloat(),
                uvSide, 0.8f, name, props
            )
            // East
            addQuad(
                (x + 1).toFloat(), y0, (z + 1).toFloat(),
                (x + 1).toFloat(), y0, z.toFloat(),
                (x + 1).toFloat(), y1, z.toFloat(),
                (x + 1).toFloat(), y1, (z + 1).toFloat(),
                uvSide, 0.6f, name, props
            )
            // West
            addQuad(
                x.toFloat(), y0, z.toFloat(),
                x.toFloat(), y0, (z + 1).toFloat(),
                x.toFloat(), y1, (z + 1).toFloat(),
                x.toFloat(), y1, z.toFloat(),
                uvSide, 0.6f, name, props
            )
            return
        }

        // Full cubes / standard blocks
        // +Y (Top, face 0)
        if (shouldRenderFace(region, x, y + 1, z, isOpaque, false, maxY)) {
            val uvTop = AtlasManager.getFaceUV(name, 0, props)
            addQuad(
                x.toFloat(), (y + 1).toFloat(), z.toFloat(),
                (x + 1).toFloat(), (y + 1).toFloat(), z.toFloat(),
                (x + 1).toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                x.toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                uvTop, 1.0f, name, props
            )
        }
        // -Y (Bottom, face 1)
        if (shouldRenderFace(region, x, y - 1, z, isOpaque, false, maxY)) {
            val uvBot = AtlasManager.getFaceUV(name, 1, props)
            addQuad(
                x.toFloat(), y.toFloat(), (z + 1).toFloat(),
                (x + 1).toFloat(), y.toFloat(), (z + 1).toFloat(),
                (x + 1).toFloat(), y.toFloat(), z.toFloat(),
                x.toFloat(), y.toFloat(), z.toFloat(),
                uvBot, 0.5f, name, props
            )
        }
        // +Z (South, face 2)
        if (shouldRenderFace(region, x, y, z + 1, isOpaque, false, maxY)) {
            val uvSouth = AtlasManager.getFaceUV(name, 2, props)
            addQuad(
                x.toFloat(), y.toFloat(), (z + 1).toFloat(),
                (x + 1).toFloat(), y.toFloat(), (z + 1).toFloat(),
                (x + 1).toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                x.toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                uvSouth, 0.8f, name, props
            )
        }
        // -Z (North, face 3)
        if (shouldRenderFace(region, x, y, z - 1, isOpaque, false, maxY)) {
            val uvNorth = AtlasManager.getFaceUV(name, 3, props)
            addQuad(
                (x + 1).toFloat(), y.toFloat(), z.toFloat(),
                x.toFloat(), y.toFloat(), z.toFloat(),
                x.toFloat(), (y + 1).toFloat(), z.toFloat(),
                (x + 1).toFloat(), (y + 1).toFloat(), z.toFloat(),
                uvNorth, 0.8f, name, props
            )
        }
        // +X (East, face 4)
        if (shouldRenderFace(region, x + 1, y, z, isOpaque, false, maxY)) {
            val uvEast = AtlasManager.getFaceUV(name, 4, props)
            addQuad(
                (x + 1).toFloat(), y.toFloat(), (z + 1).toFloat(),
                (x + 1).toFloat(), y.toFloat(), z.toFloat(),
                (x + 1).toFloat(), (y + 1).toFloat(), z.toFloat(),
                (x + 1).toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                uvEast, 0.6f, name, props
            )
        }
        // -X (West, face 5)
        if (shouldRenderFace(region, x - 1, y, z, isOpaque, false, maxY)) {
            val uvWest = AtlasManager.getFaceUV(name, 5, props)
            addQuad(
                x.toFloat(), y.toFloat(), z.toFloat(),
                x.toFloat(), y.toFloat(), (z + 1).toFloat(),
                x.toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                x.toFloat(), (y + 1).toFloat(), z.toFloat(),
                uvWest, 0.6f, name, props
            )
        }
    }

    private fun getFluidHeight(region: SchematicRegion, fx: Int, fy: Int, fz: Int): Float {
        if (fx !in 0 until region.sizeX || fy !in 0 until region.sizeY || fz !in 0 until region.sizeZ) {
            return -1f
        }
        val idx = region.getBlockIndex(fx, fy, fz)
        if (idx == 0) return -1f
        val state = region.palette.getOrNull(idx) ?: return -1f
        if (!AtlasManager.isFluid(state.name)) return -1f

        // If block above is also fluid, this column is full 1.0 (16/16)
        if (fy + 1 < region.sizeY) {
            val aboveIdx = region.getBlockIndex(fx, fy + 1, fz)
            if (aboveIdx > 0) {
                val aboveState = region.palette.getOrNull(aboveIdx)
                if (aboveState != null && AtlasManager.isFluid(aboveState.name)) {
                    return 1.0f
                }
            }
        }

        val levelStr = state.properties["level"] ?: "0"
        val level = levelStr.toIntOrNull() ?: 0
        if (level >= 8) return 1.0f
        // Minecraft fluid levels: 0 is highest (8/9), 7 is lowest (1/9)
        val table = floatArrayOf(
            14.2f / 16f, 12.5f / 16f, 10.5f / 16f, 9.0f / 16f,
            7.0f / 16f, 5.3f / 16f, 3.7f / 16f, 1.9f / 16f
        )
        return table.getOrElse(level and 7) { 14.2f / 16f }
    }

    private fun getCornerFluidHeight(
        region: SchematicRegion,
        x: Int,
        y: Int,
        z: Int,
        cornerCols: Array<IntArray>,
        defH: Float
    ): Float {
        var sum = 0f
        var count = 0
        var maxH = -1f
        var hasFull = false

        for (col in cornerCols) {
            val h = getFluidHeight(region, col[0], y, col[1])
            if (h >= 0f) {
                sum += h
                count++
                if (h > maxH) maxH = h
                if (h >= 1.0f) hasFull = true
            }
        }
        if (count == 0) return defH
        if (hasFull) return 1.0f
        val avg = sum / count
        return minOf(avg, if (maxH >= 0f) maxH else defH)
    }

    private fun buildFluidBlock(
        region: SchematicRegion,
        x: Int,
        y: Int,
        z: Int,
        name: String,
        props: Map<String, String>,
        maxY: Int
    ) {
        val aboveIdx = if (y + 1 < region.sizeY) region.getBlockIndex(x, y + 1, z) else 0
        val aboveState = region.palette.getOrNull(aboveIdx)
        val isAboveFluid = aboveState != null && AtlasManager.isFluid(aboveState.name)

        val defaultH = if (isAboveFluid) 1.0f else {
            val lvl = props["level"]?.toIntOrNull() ?: 0
            if (lvl >= 8) 1.0f else (14.2f / 16f)
        }

        val hNW: Float
        val hNE: Float
        val hSE: Float
        val hSW: Float

        if (isAboveFluid) {
            hNW = 1.0f; hNE = 1.0f; hSE = 1.0f; hSW = 1.0f
        } else {
            hNW = getCornerFluidHeight(region, x, y, z, arrayOf(intArrayOf(x - 1, z - 1), intArrayOf(x - 1, z), intArrayOf(x, z - 1), intArrayOf(x, z)), defaultH)
            hNE = getCornerFluidHeight(region, x, y, z, arrayOf(intArrayOf(x, z - 1), intArrayOf(x + 1, z - 1), intArrayOf(x, z), intArrayOf(x + 1, z)), defaultH)
            hSE = getCornerFluidHeight(region, x, y, z, arrayOf(intArrayOf(x, z), intArrayOf(x + 1, z), intArrayOf(x, z + 1), intArrayOf(x + 1, z + 1)), defaultH)
            hSW = getCornerFluidHeight(region, x, y, z, arrayOf(intArrayOf(x - 1, z), intArrayOf(x, z), intArrayOf(x - 1, z + 1), intArrayOf(x, z + 1)), defaultH)
        }

        val fx0 = x.toFloat()
        val fx1 = (x + 1).toFloat()
        val fz0 = z.toFloat()
        val fz1 = (z + 1).toFloat()
        val fy0 = y.toFloat()

        // Top face
        if (!isAboveFluid) {
            val uvTop = AtlasManager.getFaceUV(name, 0, props)
            // Corners: SW(fx0, fz1), SE(fx1, fz1), NE(fx1, fz0), NW(fx0, fz0)
            addQuad(
                fx0, fy0 + hSW, fz1,
                fx1, fy0 + hSE, fz1,
                fx1, fy0 + hNE, fz0,
                fx0, fy0 + hNW, fz0,
                uvTop, 1.0f, name, props
            )
        }

        // Bottom face
        if (shouldRenderFace(region, x, y - 1, z, false, true, maxY)) {
            val uvBot = AtlasManager.getFaceUV(name, 1, props)
            addQuad(
                fx0, fy0, fz1,
                fx1, fy0, fz1,
                fx1, fy0, fz0,
                fx0, fy0, fz0,
                uvBot, 0.5f, name, props
            )
        }

        // South face (+Z)
        if (shouldRenderFace(region, x, y, z + 1, false, true, maxY)) {
            val uvSide = AtlasManager.getFaceUV(name, 2, props)
            addQuad(
                fx0, fy0, fz1,
                fx1, fy0, fz1,
                fx1, fy0 + hSE, fz1,
                fx0, fy0 + hSW, fz1,
                uvSide, 0.8f, name, props
            )
        }

        // North face (-Z)
        if (shouldRenderFace(region, x, y, z - 1, false, true, maxY)) {
            val uvSide = AtlasManager.getFaceUV(name, 3, props)
            addQuad(
                fx1, fy0, fz0,
                fx0, fy0, fz0,
                fx0, fy0 + hNW, fz0,
                fx1, fy0 + hNE, fz0,
                uvSide, 0.8f, name, props
            )
        }

        // East face (+X)
        if (shouldRenderFace(region, x + 1, y, z, false, true, maxY)) {
            val uvSide = AtlasManager.getFaceUV(name, 4, props)
            addQuad(
                fx1, fy0, fz1,
                fx1, fy0, fz0,
                fx1, fy0 + hNE, fz0,
                fx1, fy0 + hSE, fz1,
                uvSide, 0.6f, name, props
            )
        }

        // West face (-X)
        if (shouldRenderFace(region, x - 1, y, z, false, true, maxY)) {
            val uvSide = AtlasManager.getFaceUV(name, 5, props)
            addQuad(
                fx0, fy0, fz0,
                fx0, fy0, fz1,
                fx0, fy0 + hSW, fz1,
                fx0, fy0 + hNW, fz0,
                uvSide, 0.6f, name, props
            )
        }
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

        val clean = blockName.removePrefix("minecraft:")
        if (clean.contains("redstone_wire")) {
            val power = props["power"]?.toIntOrNull() ?: 0
            val pNorm = power / 15f
            cr = (0.4f + 0.6f * pNorm) * lightMult
            cg = (0.05f * pNorm) * lightMult
            cb = 0f
        } else if (clean.contains("water")) {
            cr *= 0.24f
            cg *= 0.46f
            cb *= 0.89f
        } else if (clean == "grass_block" && uv[0] == AtlasManager.getFaceUV("grass_block", 0)[0]) {
            // Grass block top grass tint (foliage green)
            cr *= 0.54f
            cg *= 0.77f
            cb *= 0.35f
        } else if (clean.contains("leaves")) {
            cr *= 0.45f
            cg *= 0.70f
            cb *= 0.25f
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
