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

    private val spriteCoords = HashMap<String, FloatArray>() // name -> [uMin, vMin, uMax, vMax]
    private var isLoaded = false
    private const val ATLAS_SIZE = 2048f

    fun load(context: Context) {
        if (isLoaded) return
        try {
            val jsonStream: InputStream = context.assets.open("web/default-pack/assets.json")
            val jsonString = jsonStream.bufferedReader().use { it.readText() }
            val root = JSONObject(jsonString)
            val textures = root.getJSONObject("textures")
            val keys = textures.keys()
            while (keys.hasNext()) {
                val key = keys.next()
                val arr = textures.getJSONArray(key)
                val x = arr.getInt(0).toFloat()
                val y = arr.getInt(1).toFloat()
                val w = arr.getInt(2).toFloat()
                val h = arr.getInt(3).toFloat()

                // Calculate UVs in [0, 1] range
                val uMin = x / ATLAS_SIZE
                val vMin = y / ATLAS_SIZE
                val uMax = (x + w) / ATLAS_SIZE
                val vMax = (y + h) / ATLAS_SIZE

                val normalizedKey = key.removePrefix("minecraft:").removePrefix("block/")
                spriteCoords[normalizedKey] = floatArrayOf(uMin, vMin, uMax, vMax)
                spriteCoords[key] = floatArrayOf(uMin, vMin, uMax, vMax)
            }
            isLoaded = true
        } catch (e: Exception) {
            e.printStackTrace()
        }
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
            val isAxisY = axis == "y"
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

        // Furnace / Smoker / Blast furnace
        if (name == "furnace" || name == "smoker" || name == "blast_furnace") {
            if (face == 0) return "${name}_top"
            if (face == 1) return "${name}_top"
            val isFront = when (facing) {
                "north" -> face == 3
                "south" -> face == 2
                "west" -> face == 5
                "east" -> face == 4
                else -> face == 3
            }
            if (isFront) {
                val frontCandidate = if (lit) "${name}_front_on" else "${name}_front"
                if (spriteCoords.containsKey(frontCandidate)) return frontCandidate
            }
            return "${name}_side"
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
