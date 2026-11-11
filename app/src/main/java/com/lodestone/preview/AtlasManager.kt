package com.lodestone.preview

import android.content.Context
import org.json.JSONObject
import java.io.InputStream

/**
 * Texture atlas coordinate and metadata resolver.
 * Handles exact Minecraft block textures, directional faces (top/bottom/side/front),
 * opacity flags, and fluid detection.
 */
object AtlasManager {

    // Raw sprite pixel coordinates: name -> [x, y, w, h]
    private val spritePixels = HashMap<String, FloatArray>()
    private val spriteCoords = HashMap<String, FloatArray>() // name -> [uMin, vMin, uMax, vMax]

    // Precompiled block models
    data class FaceDefinition(
        val texture: String,
        val u0: Float,
        val v0: Float,
        val u1: Float,
        val v1: Float,
        val cull: Boolean,
        val tint: Boolean
    )

    data class ElementDefinition(
        val from: FloatArray, // [x, y, z] in [0..16]
        val to: FloatArray,   // [x, y, z] in [0..16]
        val rot: FloatArray?, // [originX, originY, originZ, axisIdx (0=x,1=y,2=z), angleDeg]
        val faces: Map<String, FaceDefinition> // "up", "down", "north", "south", "east", "west"
    )

    data class VariantDefinition(
        val rotX: Int,
        val rotY: Int,
        val elements: List<ElementDefinition>
    )

    // blockName -> (variantKey -> VariantDefinition)
    private val blockModels = HashMap<String, Map<String, VariantDefinition>>()
    private var isLoaded = false
    private const val ATLAS_SIZE = 2048f

    fun load(context: Context) {
        if (isLoaded) return
        try {
            // 1. Load textures
            val jsonStream: InputStream = context.assets.open("web/default-pack/assets.json")
            val jsonString = jsonStream.bufferedReader().use { it.readText() }
            val root = JSONObject(jsonString)
            val textures = root.getJSONObject("textures")
            val keys = textures.keys()
            while (keys.hasNext()) {
                val key = keys.next()
                val arr = textures.getJSONArray(key)
                val x = arr.getDouble(0).toFloat()
                val y = arr.getDouble(1).toFloat()
                val w = arr.getDouble(2).toFloat()
                val h = arr.getDouble(3).toFloat()

                val pix = floatArrayOf(x, y, w, h)
                val uMin = x / ATLAS_SIZE
                val vMin = y / ATLAS_SIZE
                val uMax = (x + w) / ATLAS_SIZE
                val vMax = (y + h) / ATLAS_SIZE
                val uv = floatArrayOf(uMin, vMin, uMax, vMax)

                val norm = key.removePrefix("minecraft:")
                val stripBlock = norm.removePrefix("block/")

                spritePixels[key] = pix
                spritePixels[norm] = pix
                spritePixels[stripBlock] = pix
                if (!key.startsWith("block/")) {
                    spritePixels["block/$key"] = pix
                }

                spriteCoords[key] = uv
                spriteCoords[norm] = uv
                spriteCoords[stripBlock] = uv
                if (!key.startsWith("block/")) {
                    spriteCoords["block/$key"] = uv
                }
            }

            // 2. Load precompiled block models if present
            try {
                val bmStream: InputStream = context.assets.open("web/default-pack/block_models.json")
                val bmString = bmStream.bufferedReader().use { it.readText() }
                val bmRoot = JSONObject(bmString)
                val bKeys = bmRoot.keys()
                while (bKeys.hasNext()) {
                    val bName = bKeys.next()
                    val bObj = bmRoot.getJSONObject(bName)
                    val varKeys = bObj.keys()
                    val variantMap = HashMap<String, VariantDefinition>()

                    while (varKeys.hasNext()) {
                        val vKey = varKeys.next()
                        val vObj = bObj.getJSONObject(vKey)
                        val rotX = vObj.optInt("x", 0)
                        val rotY = vObj.optInt("y", 0)
                        val elemsArr = vObj.getJSONArray("elems")
                        val elemList = ArrayList<ElementDefinition>(elemsArr.length())

                        for (i in 0 until elemsArr.length()) {
                            val elObj = elemsArr.getJSONObject(i)
                            val fArr = elObj.getJSONArray("f")
                            val from = floatArrayOf(fArr.getDouble(0).toFloat(), fArr.getDouble(1).toFloat(), fArr.getDouble(2).toFloat())
                            val tArr = elObj.getJSONArray("t")
                            val to = floatArrayOf(tArr.getDouble(0).toFloat(), tArr.getDouble(1).toFloat(), tArr.getDouble(2).toFloat())

                            var rot: FloatArray? = null
                            if (elObj.has("r") && !elObj.isNull("r")) {
                                val rArr = elObj.getJSONArray("r")
                                val ox = rArr.getDouble(0).toFloat()
                                val oy = rArr.getDouble(1).toFloat()
                                val oz = rArr.getDouble(2).toFloat()
                                val axisStr = rArr.getString(3)
                                val axisIdx = when (axisStr) {
                                    "x" -> 0f
                                    "z" -> 2f
                                    else -> 1f // "y"
                                }
                                val angle = rArr.getDouble(4).toFloat()
                                rot = floatArrayOf(ox, oy, oz, axisIdx, angle)
                            }

                            val facesObj = elObj.getJSONObject("faces")
                            val faceNames = facesObj.keys()
                            val faceMap = HashMap<String, FaceDefinition>()

                            while (faceNames.hasNext()) {
                                val fn = faceNames.next()
                                val fData = facesObj.getJSONArray(fn)
                                val tex = fData.getString(0)
                                val u0 = fData.getDouble(1).toFloat()
                                val v0 = fData.getDouble(2).toFloat()
                                val u1 = fData.getDouble(3).toFloat()
                                val v1 = fData.getDouble(4).toFloat()
                                val cull = fData.getInt(5) == 1
                                val tint = fData.getInt(6) == 1

                                faceMap[fn] = FaceDefinition(tex, u0, v0, u1, v1, cull, tint)
                            }

                            elemList.add(ElementDefinition(from, to, rot, faceMap))
                        }

                        variantMap[vKey] = VariantDefinition(rotX, rotY, elemList)
                    }

                    val cleanB = bName.removePrefix("minecraft:")
                    blockModels[cleanB] = variantMap
                }
            } catch (e: Exception) {
                e.printStackTrace()
            }

            isLoaded = true
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    /**
     * Retrieves the resolved model elements for a block with matching properties.
     */
    fun getBlockModel(blockName: String, properties: Map<String, String>): VariantDefinition? {
        var clean = blockName.removePrefix("minecraft:")
        if (clean.contains("[")) clean = clean.substringBefore("[")

        val variants = blockModels[clean] ?: return null
        if (variants.isEmpty()) return null

        // 1. Try exact match on properties
        if (properties.isNotEmpty()) {
            for ((key, variant) in variants) {
                if (key.isEmpty()) continue
                val pairs = key.split(",")
                var allMatch = true
                for (p in pairs) {
                    val kv = p.split("=")
                    if (kv.size == 2) {
                        val propVal = properties[kv[0]]
                        if (propVal != null && propVal != kv[1]) {
                            allMatch = false
                            break
                        }
                    }
                }
                if (allMatch) return variant
            }
        }

        // 2. Return default variant or first variant
        return variants[""] ?: variants["normal"] ?: variants.values.firstOrNull()
    }

    /**
     * Computes the exact sub-UV in atlas coordinates [u0, v0, u1, v1]
     * for a model face using its element uv [0..16] bounds.
     */
    fun getSubUV(textureName: String, u0: Float, v0: Float, u1: Float, v1: Float): FloatArray {
        val pix = spritePixels[textureName]
            ?: spritePixels[textureName.removePrefix("minecraft:")]
            ?: spritePixels["block/" + textureName.removePrefix("minecraft:")]
            ?: spritePixels["block/stone"]
            ?: floatArrayOf(0f, 0f, 16f, 16f)

        val ax = pix[0]
        val ay = pix[1]
        val aw = pix[2]
        val ah = pix[3]

        val finalU0 = (ax + (u0 / 16f) * aw) / ATLAS_SIZE
        val finalV0 = (ay + (v0 / 16f) * ah) / ATLAS_SIZE
        val finalU1 = (ax + (u1 / 16f) * aw) / ATLAS_SIZE
        val finalV1 = (ay + (v1 / 16f) * ah) / ATLAS_SIZE

        return floatArrayOf(finalU0, finalV0, finalU1, finalV1)
    }

    /**
     * Resolves UV coordinates for a specific block face.
     * face: 0=+Y(top), 1=-Y(bottom), 2=+Z(south), 3=-Z(north), 4=+X(east), 5=-X(west)
     */
    fun getFaceUV(blockName: String, face: Int, properties: Map<String, String> = emptyMap()): FloatArray {
        var clean = blockName.removePrefix("minecraft:")
        // Remove state bracket if present (e.g. stone[axis=y])
        if (clean.contains("[")) {
            clean = clean.substringBefore("[")
        }

        val facing = properties["facing"] ?: "north"
        val axis = properties["axis"] ?: "y"
        val lit = properties["lit"] == "true"
        val half = properties["half"] ?: "bottom"

        val resolvedName = resolveFaceTextureName(clean, face, facing, axis, lit, half)
        return spriteCoords[resolvedName]
            ?: spriteCoords[clean]
            ?: spriteCoords["stone"]
            ?: floatArrayOf(0f, 0f, 0.05f, 0.05f)
    }

    fun getUV(textureName: String): FloatArray {
        val clean = textureName.removePrefix("minecraft:").removePrefix("block/")
        return spriteCoords[clean] ?: spriteCoords["stone"] ?: floatArrayOf(0f, 0f, 0.05f, 0.05f)
    }

    private fun resolveFaceTextureName(
        name: String,
        face: Int,
        facing: String,
        axis: String,
        lit: Boolean,
        half: String
    ): String {
        // Grass block
        if (name == "grass_block") {
            return when (face) {
                0 -> "grass_block_top"
                1 -> "dirt"
                else -> "grass_block_side"
            }
        }

        // Dirt path
        if (name == "dirt_path") {
            return when (face) {
                0 -> "dirt_path_top"
                1 -> "dirt"
                else -> "dirt_path_side"
            }
        }

        // Podzol / Mycelium
        if (name == "podzol") {
            return when (face) {
                0 -> "podzol_top"
                1 -> "dirt"
                else -> "podzol_side"
            }
        }
        if (name == "mycelium") {
            return when (face) {
                0 -> "mycelium_top"
                1 -> "dirt"
                else -> "mycelium_side"
            }
        }

        // Logs and Wood
        if (name.endsWith("_log") || name.endsWith("_wood") || name.endsWith("_stem") || name.endsWith("_hyphae")) {
            val isTopFace = when (axis) {
                "x" -> face == 4 || face == 5
                "z" -> face == 2 || face == 3
                else -> face == 0 || face == 1
            }
            if (isTopFace) {
                val topCandidate = "${name}_top"
                if (spriteCoords.containsKey(topCandidate)) return topCandidate
            }
            if (spriteCoords.containsKey(name)) return name
        }

        // Directional blocks with front/side/top: Furnace, Smoker, Blast Furnace, Dispenser, Dropper, Observer
        if (name == "furnace" || name == "smoker" || name == "blast_furnace" ||
            name == "dispenser" || name == "dropper" || name == "observer") {
            val isFront = when (facing) {
                "north" -> face == 3
                "south" -> face == 2
                "west" -> face == 5
                "east" -> face == 4
                "up" -> face == 0
                "down" -> face == 1
                else -> face == 3
            }
            if (isFront) {
                val frontCand = if (lit) "${name}_front_on" else "${name}_front"
                if (spriteCoords.containsKey(frontCand)) return frontCand
            }
            if (face == 0) {
                val topCand = "${name}_top"
                if (spriteCoords.containsKey(topCand)) return topCand
            }
            if (face == 1) {
                val botCand = "${name}_bottom"
                if (spriteCoords.containsKey(botCand)) return botCand
            }
            val sideCand = "${name}_side"
            if (spriteCoords.containsKey(sideCand)) return sideCand
            return name
        }

        // Pistons
        if (name == "piston" || name == "sticky_piston") {
            val isFront = when (facing) {
                "up" -> face == 0
                "down" -> face == 1
                "north" -> face == 3
                "south" -> face == 2
                "west" -> face == 5
                "east" -> face == 4
                else -> face == 0
            }
            if (isFront) {
                return if (name == "sticky_piston") "piston_top_sticky" else "piston_top"
            }
            val isBack = when (facing) {
                "up" -> face == 1
                "down" -> face == 0
                "north" -> face == 2
                "south" -> face == 3
                "west" -> face == 4
                "east" -> face == 5
                else -> face == 1
            }
            if (isBack) return "piston_bottom"
            return "piston_side"
        }

        // Crafting table
        if (name == "crafting_table") {
            return when (face) {
                0 -> "crafting_table_top"
                1 -> "oak_planks"
                2, 3 -> "crafting_table_front"
                else -> "crafting_table_side"
            }
        }

        // TNT
        if (name == "tnt") {
            return when (face) {
                0 -> "tnt_top"
                1 -> "tnt_bottom"
                else -> "tnt_side"
            }
        }

        // Bookshelf
        if (name == "bookshelf") {
            return if (face == 0 || face == 1) "oak_planks" else "bookshelf"
        }

        // Chiseled / Cut Sandstone & Red Sandstone
        if (name.contains("sandstone")) {
            if (face == 0) {
                val topCand = "${name}_top"
                if (spriteCoords.containsKey(topCand)) return topCand
            }
            if (face == 1) {
                val botCand = "${name}_bottom"
                if (spriteCoords.containsKey(botCand)) return botCand
            }
        }

        // Quartz Block
        if (name == "quartz_block" || name == "chiseled_quartz_block") {
            if (face == 0) return "quartz_block_top"
            if (face == 1) return "quartz_block_bottom"
            return if (name == "chiseled_quartz_block") "chiseled_quartz_block" else "quartz_block_side"
        }

        // Deepslate
        if (name == "deepslate") {
            return if (face == 0 || face == 1) "deepslate_top" else "deepslate"
        }

        // Stonecutter
        if (name == "stonecutter") {
            return when (face) {
                0 -> "stonecutter_top"
                1 -> "stonecutter_bottom"
                else -> "stonecutter_side"
            }
        }

        // Daylight detector
        if (name.startsWith("daylight_detector")) {
            return if (face == 0) "${name}_top" else "${name}_side"
        }

        // Piston & Sticky Piston
        if (name == "piston" || name == "sticky_piston") {
            if (face == 0) return if (name == "sticky_piston") "piston_top_sticky" else "piston_top"
            if (face == 1) return "piston_bottom"
            return "piston_side"
        }

        // Water and Lava fluids
        if (name == "water" || name == "flowing_water") {
            return "water_still"
        }
        if (name == "lava" || name == "flowing_lava") {
            return "lava_still"
        }

        // Doors
        if (name.endsWith("_door")) {
            val part = if (half == "upper" || half == "top") "top" else "bottom"
            val cand = "${name}_$part"
            if (spriteCoords.containsKey(cand)) return cand
        }

        // Trapdoors
        if (name.endsWith("_trapdoor")) {
            if (spriteCoords.containsKey(name)) return name
        }

        // Slabs and Stairs mapping to base planks/stone/bricks
        if (name.endsWith("_slab") || name.endsWith("_stairs")) {
            val baseName = name.removeSuffix("_slab").removeSuffix("_stairs")
            // Try baseName (e.g. oak_planks for oak_slab)
            if (spriteCoords.containsKey(baseName)) return baseName
            val withPlanks = "${baseName}_planks"
            if (spriteCoords.containsKey(withPlanks)) return withPlanks
            val withBricks = "${baseName}_bricks"
            if (spriteCoords.containsKey(withBricks)) return withBricks
        }

        // Redstone wire
        if (name == "redstone_wire") {
            return "redstone_dust_line0"
        }

        // Direct key lookup check
        if (spriteCoords.containsKey(name)) return name

        return name
    }

    fun isOpaque(blockName: String): Boolean {
        var clean = blockName.removePrefix("minecraft:")
        if (clean.contains("[")) clean = clean.substringBefore("[")

        if (clean == "air" || clean.endsWith("_air")) return false
        if (clean.contains("glass") || clean.contains("pane")) return false
        if (clean.contains("leaves") || clean.contains("water") || clean.contains("lava")) return false
        if (clean.contains("slab") || clean.contains("stairs") || clean.contains("door") || clean.contains("trapdoor")) return false
        if (clean.contains("fence") || clean.contains("wall") || clean.contains("torch") || clean.contains("carpet")) return false
        if (clean.contains("flower") || clean.contains("grass") || clean.contains("sapling") || clean.contains("rail")) return false
        if (clean.contains("lantern") || clean.contains("chain") || clean.contains("hopper") || clean.contains("rod")) return false
        if (clean.contains("sign") || clean.contains("bed") || clean.contains("cauldron") || clean.contains("bell")) return false
        return true
    }

    fun isFluid(blockName: String): Boolean {
        var clean = blockName.removePrefix("minecraft:")
        if (clean.contains("[")) clean = clean.substringBefore("[")
        return clean == "water" || clean == "flowing_water" || clean == "lava" || clean == "flowing_lava"
    }
}
