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
        // 1. Try exact Model Definition (supports all Minecraft elements, rotations, UVs, etc.)
        val model = AtlasManager.getBlockModel(name, props)
        if (model != null && model.elements.isNotEmpty()) {
            buildModelElements(region, x, y, z, name, props, model, isOpaque, maxY)
            return
        }

        // 2. Fallback full cube rendering with neighbor culling
        // +Y (Top, face 0) -> [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0]
        if (shouldRenderFace(region, x, y + 1, z, isOpaque, false, maxY)) {
            val uvTop = AtlasManager.getFaceUV(name, 0, props)
            addQuad(
                x.toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                (x + 1).toFloat(), (y + 1).toFloat(), (z + 1).toFloat(),
                (x + 1).toFloat(), (y + 1).toFloat(), z.toFloat(),
                x.toFloat(), (y + 1).toFloat(), z.toFloat(),
                uvTop, 1.0f, name, props
            )
        }
        // -Y (Bottom, face 1) -> [x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]
        if (shouldRenderFace(region, x, y - 1, z, isOpaque, false, maxY)) {
            val uvBot = AtlasManager.getFaceUV(name, 1, props)
            addQuad(
                x.toFloat(), y.toFloat(), z.toFloat(),
                (x + 1).toFloat(), y.toFloat(), z.toFloat(),
                (x + 1).toFloat(), y.toFloat(), (z + 1).toFloat(),
                x.toFloat(), y.toFloat(), (z + 1).toFloat(),
                uvBot, 0.5f, name, props
            )
        }
        // +Z (South, face 2) -> [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]
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
        // -Z (North, face 3) -> [x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0]
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
        // +X (East, face 4) -> [x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1]
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
        // -X (West, face 5) -> [x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]
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

    private fun buildModelElements(
        region: SchematicRegion,
        x: Int,
        y: Int,
        z: Int,
        name: String,
        props: Map<String, String>,
        variant: AtlasManager.VariantDefinition,
        isOpaque: Boolean,
        maxY: Int
    ) {
        val rotX = variant.rotX
        val rotY = variant.rotY

        for (elem in variant.elements) {
            val f0 = elem.from[0]
            val f1 = elem.from[1]
            val f2 = elem.from[2]
            val t0 = elem.to[0]
            val t1 = elem.to[1]
            val t2 = elem.to[2]

            for ((faceName, faceDef) in elem.faces) {
                // Check culling if face reaches outer boundary
                if (faceDef.cull) {
                    val nx = when (faceName) {
                        "west" -> x - 1
                        "east" -> x + 1
                        else -> x
                    }
                    val ny = when (faceName) {
                        "down" -> y - 1
                        "up" -> y + 1
                        else -> y
                    }
                    val nz = when (faceName) {
                        "north" -> z - 1
                        "south" -> z + 1
                        else -> z
                    }
                    if (!shouldRenderFace(region, nx, ny, nz, isOpaque, false, maxY)) {
                        continue
                    }
                }

                val uv = AtlasManager.getSubUV(faceDef.texture, faceDef.u0, faceDef.v0, faceDef.u1, faceDef.v1)
                val light = when (faceName) {
                    "up" -> 1.0f
                    "down" -> 0.5f
                    "north", "south" -> 0.8f
                    else -> 0.6f
                }

                // 4 corners of the quad in [0..16] space
                val (p0, p1, p2, p3) = getElementFaceCorners(faceName, f0, f1, f2, t0, t1, t2)

                // Apply element local rotation (e.g. 45 deg Y for pointed dripstone)
                elem.rot?.let { r ->
                    rotatePoint(p0, r[0], r[1], r[2], r[3].toInt(), r[4])
                    rotatePoint(p1, r[0], r[1], r[2], r[3].toInt(), r[4])
                    rotatePoint(p2, r[0], r[1], r[2], r[3].toInt(), r[4])
                    rotatePoint(p3, r[0], r[1], r[2], r[3].toInt(), r[4])
                }

                // Apply blockstate variant rotation (X and Y rotations around block center [8, 8, 8])
                if (rotX != 0) {
                    rotatePoint(p0, 8f, 8f, 8f, 0, rotX.toFloat())
                    rotatePoint(p1, 8f, 8f, 8f, 0, rotX.toFloat())
                    rotatePoint(p2, 8f, 8f, 8f, 0, rotX.toFloat())
                    rotatePoint(p3, 8f, 8f, 8f, 0, rotX.toFloat())
                }
                if (rotY != 0) {
                    rotatePoint(p0, 8f, 8f, 8f, 1, rotY.toFloat())
                    rotatePoint(p1, 8f, 8f, 8f, 1, rotY.toFloat())
                    rotatePoint(p2, 8f, 8f, 8f, 1, rotY.toFloat())
                    rotatePoint(p3, 8f, 8f, 8f, 1, rotY.toFloat())
                }

                // Translate into world position [x, y, z]
                val wx0 = x + p0[0] / 16f
                val wy0 = y + p0[1] / 16f
                val wz0 = z + p0[2] / 16f

                val wx1 = x + p1[0] / 16f
                val wy1 = y + p1[1] / 16f
                val wz1 = z + p1[2] / 16f

                val wx2 = x + p2[0] / 16f
                val wy2 = y + p2[1] / 16f
                val wz2 = z + p2[2] / 16f

                val wx3 = x + p3[0] / 16f
                val wy3 = y + p3[1] / 16f
                val wz3 = z + p3[2] / 16f

                addQuad(
                    wx0, wy0, wz0,
                    wx1, wy1, wz1,
                    wx2, wy2, wz2,
                    wx3, wy3, wz3,
                    uv, light, name, props
                )

                // For double-sided rendering of flat or cutout components (rails, dripstone, torches)
                if (!isOpaque && !faceDef.cull) {
                    addQuad(
                        wx3, wy3, wz3,
                        wx2, wy2, wz2,
                        wx1, wy1, wz1,
                        wx0, wy0, wz0,
                        uv, light, name, props
                    )
                }
            }
        }
    }

    private fun getElementFaceCorners(
        face: String,
        x0: Float, y0: Float, z0: Float,
        x1: Float, y1: Float, z1: Float
    ): Array<FloatArray> {
        return when (face) {
            "up" -> arrayOf(
                floatArrayOf(x0, y1, z1),
                floatArrayOf(x1, y1, z1),
                floatArrayOf(x1, y1, z0),
                floatArrayOf(x0, y1, z0)
            )
            "down" -> arrayOf(
                floatArrayOf(x0, y0, z0),
                floatArrayOf(x1, y0, z0),
                floatArrayOf(x1, y0, z1),
                floatArrayOf(x0, y0, z1)
            )
            "south" -> arrayOf(
                floatArrayOf(x0, y0, z1),
                floatArrayOf(x1, y0, z1),
                floatArrayOf(x1, y1, z1),
                floatArrayOf(x0, y1, z1)
            )
            "north" -> arrayOf(
                floatArrayOf(x1, y0, z0),
                floatArrayOf(x0, y0, z0),
                floatArrayOf(x0, y1, z0),
                floatArrayOf(x1, y1, z0)
            )
            "east" -> arrayOf(
                floatArrayOf(x1, y0, z1),
                floatArrayOf(x1, y0, z0),
                floatArrayOf(x1, y1, z0),
                floatArrayOf(x1, y1, z1)
            )
            else -> arrayOf( // "west"
                floatArrayOf(x0, y0, z0),
                floatArrayOf(x0, y0, z1),
                floatArrayOf(x0, y1, z1),
                floatArrayOf(x0, y1, z0)
            )
        }
    }

    private fun rotatePoint(p: FloatArray, ox: Float, oy: Float, oz: Float, axis: Int, angleDeg: Float) {
        val rad = Math.toRadians(angleDeg.toDouble())
        val cos = Math.cos(rad).toFloat()
        val sin = Math.sin(rad).toFloat()

        val x = p[0] - ox
        val y = p[1] - oy
        val z = p[2] - oz

        when (axis) {
            0 -> { // X-axis
                p[1] = oy + (y * cos - z * sin)
                p[2] = oz + (y * sin + z * cos)
            }
            1 -> { // Y-axis
                p[0] = ox + (x * cos + z * sin)
                p[2] = oz + (-x * sin + z * cos)
            }
            2 -> { // Z-axis
                p[0] = ox + (x * cos - y * sin)
                p[1] = oy + (x * sin + y * cos)
            }
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
