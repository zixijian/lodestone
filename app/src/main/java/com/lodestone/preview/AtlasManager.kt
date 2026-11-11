package com.lodestone.preview

import android.content.Context
import org.json.JSONObject
import java.io.InputStream

/**
 * Texture atlas coordinate and metadata resolver.
 * Handles exact Minecraft block textures, directional faces (top/bottom/side/front),
 * opacity flags, multipart models (redstone wire, fences, walls), and fluid detection.
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
        val faces: Map<String, FaceDefinition>, // "up", "down", "north", "south", "east", "west"
        val rotX: Int = 0,
        val rotY: Int = 0
    )

    data class VariantDefinition(
        val rotX: Int,
        val rotY: Int,
        val elements: List<ElementDefinition>
    )

    data class MultipartCondition(
        val orConditions: List<Map<String, String>>
    )

    data class MultipartPart(
        val whenCond: MultipartCondition?,
        val rotX: Int,
        val rotY: Int,
        val elements: List<ElementDefinition>
    )

    sealed class BlockModelDefinition {
        data class Variants(val variants: Map<String, VariantDefinition>) : BlockModelDefinition()
        data class Multipart(val parts: List<MultipartPart>) : BlockModelDefinition()
    }

    // blockName -> BlockModelDefinition
    private val blockModels = HashMap<String, BlockModelDefinition>()
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
                    val type = bObj.optString("type", "variants")

                    if (type == "multipart") {
                        val partsArr = bObj.getJSONArray("parts")
                        val partsList = ArrayList<MultipartPart>(partsArr.length())
                        for (i in 0 until partsArr.length()) {
                            val partObj = partsArr.getJSONObject(i)
                            val rotX = partObj.optInt("x", 0)
                            val rotY = partObj.optInt("y", 0)
                            val whenObj = partObj.optJSONObject("when")
                            val condition = parseCondition(whenObj)
                            val elems = parseElements(partObj.getJSONArray("elems"), rotX, rotY)
                            partsList.add(MultipartPart(condition, rotX, rotY, elems))
                        }
                        blockModels[bName.removePrefix("minecraft:")] = BlockModelDefinition.Multipart(partsList)
                    } else {
                        val varObj = if (bObj.has("variants")) bObj.getJSONObject("variants") else bObj
                        val varKeys = varObj.keys()
                        val variantMap = HashMap<String, VariantDefinition>()

                        while (varKeys.hasNext()) {
                            val vKey = varKeys.next()
                            val vDefObj = varObj.getJSONObject(vKey)
                            val rotX = vDefObj.optInt("x", 0)
                            val rotY = vDefObj.optInt("y", 0)
                            val elemList = parseElements(vDefObj.getJSONArray("elems"), rotX, rotY)
                            variantMap[vKey] = VariantDefinition(rotX, rotY, elemList)
                        }

                        val cleanB = bName.removePrefix("minecraft:")
                        blockModels[cleanB] = BlockModelDefinition.Variants(variantMap)
                    }
                }
            } catch (e: Exception) {
                e.printStackTrace()
            }

            isLoaded = true
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    private fun parseCondition(whenObj: JSONObject?): MultipartCondition? {
        if (whenObj == null) return null
        val orList = ArrayList<Map<String, String>>()
        if (whenObj.has("OR")) {
            val orArr = whenObj.getJSONArray("OR")
            for (i in 0 until orArr.length()) {
                val condObj = orArr.getJSONObject(i)
                val map = HashMap<String, String>()
                val it = condObj.keys()
                while (it.hasNext()) {
                    val k = it.next()
                    map[k] = condObj.getString(k)
                }
                orList.add(map)
            }
        } else {
            val map = HashMap<String, String>()
            val it = whenObj.keys()
            while (it.hasNext()) {
                val k = it.next()
                map[k] = whenObj.getString(k)
            }
            orList.add(map)
        }
        return MultipartCondition(orList)
    }

    private fun parseElements(elemsArr: org.json.JSONArray, defRotX: Int, defRotY: Int): List<ElementDefinition> {
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

            val elRotX = elObj.optInt("x", defRotX)
            val elRotY = elObj.optInt("y", defRotY)
            elemList.add(ElementDefinition(from, to, rot, faceMap, elRotX, elRotY))
        }
        return elemList
    }

    /**
     * Retrieves the resolved model elements for a block with matching properties.
     */
    fun getBlockModel(blockName: String, properties: Map<String, String>): VariantDefinition? {
        var clean = blockName.removePrefix("minecraft:")
        if (clean.contains("[")) clean = clean.substringBefore("[")

        val modelDef = blockModels[clean] ?: return null

        when (modelDef) {
            is BlockModelDefinition.Multipart -> {
                val combinedElements = ArrayList<ElementDefinition>()
                for (part in modelDef.parts) {
                    if (matchMultipartCondition(part.whenCond, properties)) {
                        combinedElements.addAll(part.elements)
                    }
                }
                if (combinedElements.isEmpty() && modelDef.parts.isNotEmpty()) {
                    combinedElements.addAll(modelDef.parts[0].elements)
                }
                return VariantDefinition(0, 0, combinedElements)
            }
            is BlockModelDefinition.Variants -> {
                val variants = modelDef.variants
                if (variants.isEmpty()) return null

                // Complete properties with defaults (e.g. facing, shape, half, delay)
                val mergedProps = HashMap(getDefaultBlockProperties(clean))
                mergedProps.putAll(properties)

                // 1. Try score-based best match
                var bestVariant: VariantDefinition? = null
                var maxScore = -1

                for ((key, variant) in variants) {
                    if (key.isEmpty()) {
                        if (maxScore < 0) {
                            maxScore = 0
                            bestVariant = variant
                        }
                        continue
                    }
                    val pairs = key.split(",")
                    var matchedCount = 0
                    var mismatch = false

                    for (p in pairs) {
                        val kv = p.split("=")
                        if (kv.size == 2) {
                            val propVal = mergedProps[kv[0]]
                            if (propVal != null) {
                                if (propVal == kv[1]) {
                                    matchedCount++
                                } else {
                                    mismatch = true
                                    break
                                }
                            }
                        }
                    }

                    if (!mismatch && matchedCount > maxScore) {
                        maxScore = matchedCount
                        bestVariant = variant
                    }
                }

                if (bestVariant != null) return bestVariant
                return variants[""] ?: variants["normal"] ?: variants.values.firstOrNull()
            }
        }
    }

    private fun matchMultipartCondition(cond: MultipartCondition?, props: Map<String, String>): Boolean {
        if (cond == null || cond.orConditions.isEmpty()) return true
        for (orClause in cond.orConditions) {
            var allMatch = true
            for ((key, expectedVal) in orClause) {
                val actual = props[key] ?: getDefaultPropertyForBlock(key)
                val allowed = expectedVal.split("|")
                if (!allowed.contains(actual)) {
                    allMatch = false
                    break
                }
            }
            if (allMatch) return true
        }
        return false
    }

    private fun getDefaultPropertyForBlock(key: String): String {
        return when (key) {
            "east", "west", "north", "south" -> "none"
            "up" -> "true"
            "down" -> "true"
            "power" -> "0"
            "facing" -> "north"
            "half" -> "bottom"
            "shape" -> "straight"
            "lit" -> "false"
            "powered" -> "false"
            "delay" -> "1"
            "locked" -> "false"
            "mode" -> "compare"
            "extended" -> "false"
            else -> ""
        }
    }

    private fun getDefaultBlockProperties(cleanName: String): Map<String, String> {
        val defaults = HashMap<String, String>()
        if (cleanName.contains("stairs")) {
            defaults["facing"] = "north"
            defaults["half"] = "bottom"
            defaults["shape"] = "straight"
        } else if (cleanName.contains("slab")) {
            defaults["type"] = "bottom"
        } else if (cleanName == "repeater") {
            defaults["facing"] = "north"
            defaults["delay"] = "1"
            defaults["locked"] = "false"
            defaults["powered"] = "false"
        } else if (cleanName == "comparator") {
            defaults["facing"] = "north"
            defaults["mode"] = "compare"
            defaults["powered"] = "false"
        } else if (cleanName == "piston" || cleanName == "sticky_piston") {
            defaults["facing"] = "north"
            defaults["extended"] = "false"
        } else if (cleanName == "observer" || cleanName == "dispenser" || cleanName == "dropper") {
            defaults["facing"] = "north"
            defaults["powered"] = "false"
        } else if (cleanName.contains("door")) {
            defaults["facing"] = "north"
            defaults["half"] = "lower"
            defaults["hinge"] = "left"
            defaults["open"] = "false"
            defaults["powered"] = "false"
        } else if (cleanName.contains("trapdoor")) {
            defaults["facing"] = "north"
            defaults["half"] = "bottom"
            defaults["open"] = "false"
            defaults["powered"] = "false"
        } else if (cleanName.contains("fence") || cleanName.contains("wall")) {
            defaults["east"] = "none"
            defaults["west"] = "none"
            defaults["north"] = "none"
            defaults["south"] = "none"
            defaults["up"] = "true"
        }
        return defaults
    }

    /**
     * Computes the exact sub-UV in atlas coordinates [u0, v0, u1, v1]
     * for a model face using its element uv [0..16] bounds.
     */
    fun getSubUV(textureName: String, u0: Float, v0: Float, u1: Float, v1: Float): FloatArray {
        val pix = spritePixels[textureName]
            ?: spritePixels[textureName.removePrefix("minecraft:")]
            ?: spritePixels["block/" + textureName.removePrefix("minecraft:")]
            ?: spritePixels["block/stone_bricks"]
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
        if (clean.contains("[")) {
            clean = clean.substringBefore("[")
        }

        val facing = properties["facing"] ?: "north"
        val axis = properties["axis"] ?: "y"
        val lit = properties["lit"] == "true"
        val half = properties["half"] ?: "bottom"

        val resolvedName = resolveFaceTextureName(clean, face, facing, axis, lit, half)
        return spriteCoords[resolvedName]
            ?: spriteCoords["block/$resolvedName"]
            ?: spriteCoords[clean]
            ?: spriteCoords["block/$clean"]
            ?: spriteCoords["block/stone_bricks"]
            ?: spriteCoords["block/stone"]
            ?: floatArrayOf(0f, 0f, 0.05f, 0.05f)
    }

    fun getUV(textureName: String): FloatArray {
        val clean = textureName.removePrefix("minecraft:").removePrefix("block/")
        return spriteCoords[clean]
            ?: spriteCoords["block/$clean"]
            ?: spriteCoords["block/stone_bricks"]
            ?: spriteCoords["block/stone"]
            ?: floatArrayOf(0f, 0f, 0.05f, 0.05f)
    }

    private fun resolveFaceTextureName(
        name: String,
        face: Int,
        facing: String,
        axis: String,
        lit: Boolean,
        half: String
    ): String {
        // Stone bricks and stone variants
        if (name == "stone_bricks" || name.contains("stone_brick")) {
            if (name == "mossy_stone_bricks") return "block/mossy_stone_bricks"
            if (name == "cracked_stone_bricks") return "block/cracked_stone_bricks"
            if (name == "chiseled_stone_bricks") return "block/chiseled_stone_bricks"
            return "block/stone_bricks"
        }

        // Smooth stone
        if (name == "smooth_stone" || name == "smooth_stone_slab") {
            return "block/smooth_stone"
        }

        // Grass block
        if (name == "grass_block") {
            return when (face) {
                0 -> "block/grass_block_top"
                1 -> "block/dirt"
                else -> "block/grass_block_side"
            }
        }

        // Dirt path
        if (name == "dirt_path") {
            return when (face) {
                0 -> "block/dirt_path_top"
                1 -> "block/dirt"
                else -> "block/dirt_path_side"
            }
        }

        // Podzol / Mycelium
        if (name == "podzol") {
            return when (face) {
                0 -> "block/podzol_top"
                1 -> "block/dirt"
                else -> "block/podzol_side"
            }
        }
        if (name == "mycelium") {
            return when (face) {
                0 -> "block/mycelium_top"
                1 -> "block/dirt"
                else -> "block/mycelium_side"
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
                if (spriteCoords.containsKey("block/$topCandidate")) return "block/$topCandidate"
                if (spriteCoords.containsKey(topCandidate)) return topCandidate
            }
            if (spriteCoords.containsKey("block/$name")) return "block/$name"
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
                if (spriteCoords.containsKey("block/$frontCand")) return "block/$frontCand"
            }
            if (face == 0) {
                val topCand = "${name}_top"
                if (spriteCoords.containsKey("block/$topCand")) return "block/$topCand"
            }
            if (face == 1) {
                val botCand = "${name}_bottom"
                if (spriteCoords.containsKey("block/$botCand")) return "block/$botCand"
            }
            val sideCand = "${name}_side"
            if (spriteCoords.containsKey("block/$sideCand")) return "block/$sideCand"
            return "block/$name"
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
                return if (name == "sticky_piston") "block/piston_top_sticky" else "block/piston_top"
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
            if (isBack) return "block/piston_bottom"
            return "block/piston_side"
        }

        // Crafting table
        if (name == "crafting_table") {
            return when (face) {
                0 -> "block/crafting_table_top"
                1 -> "block/oak_planks"
                2, 3 -> "block/crafting_table_front"
                else -> "block/crafting_table_side"
            }
        }

        // TNT
        if (name == "tnt") {
            return when (face) {
                0 -> "block/tnt_top"
                1 -> "block/tnt_bottom"
                else -> "block/tnt_side"
            }
        }

        // Bookshelf
        if (name == "bookshelf") {
            return if (face == 0 || face == 1) "block/oak_planks" else "block/bookshelf"
        }

        // Redstone components
        if (name == "repeater") {
            return if (lit) "block/repeater_on" else "block/repeater"
        }
        if (name == "comparator") {
            return if (lit) "block/comparator_on" else "block/comparator"
        }
        if (name == "redstone_torch" || name == "redstone_wall_torch") {
            return if (lit) "block/redstone_torch" else "block/redstone_torch_off"
        }
        if (name == "redstone_block") {
            return "block/redstone_block"
        }
        if (name == "redstone_wire") {
            return "block/redstone_dust_line0"
        }

        // Water and Lava fluids
        if (name == "water" || name == "flowing_water") {
            return "block/water_still"
        }
        if (name == "lava" || name == "flowing_lava") {
            return "block/lava_still"
        }

        // Doors
        if (name.endsWith("_door")) {
            val part = if (half == "upper" || half == "top") "top" else "bottom"
            val cand = "${name}_$part"
            if (spriteCoords.containsKey("block/$cand")) return "block/$cand"
        }

        // Slabs and Stairs mapping to base planks/stone/bricks
        if (name.endsWith("_slab") || name.endsWith("_stairs")) {
            val baseName = name.removeSuffix("_slab").removeSuffix("_stairs")
            if (spriteCoords.containsKey("block/$baseName")) return "block/$baseName"
            val withPlanks = "${baseName}_planks"
            if (spriteCoords.containsKey("block/$withPlanks")) return "block/$withPlanks"
            val withBricks = "${baseName}_bricks"
            if (spriteCoords.containsKey("block/$withBricks")) return "block/$withBricks"
        }

        // Direct key lookup check
        if (spriteCoords.containsKey("block/$name")) return "block/$name"
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
        if (clean.contains("wire") || clean.contains("repeater") || clean.contains("comparator") || clean.contains("lever") || clean.contains("button")) return false
        return true
    }

    fun isFluid(blockName: String): Boolean {
        var clean = blockName.removePrefix("minecraft:")
        if (clean.contains("[")) clean = clean.substringBefore("[")
        return clean == "water" || clean == "flowing_water" || clean == "lava" || clean == "flowing_lava"
    }
}
