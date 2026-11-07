package com.lodestone.preview

import android.content.Context
import org.json.JSONObject
import java.io.InputStream

/**
 * Texture atlas coordinate and metadata resolver.
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

    fun getUV(textureName: String): FloatArray {
        val clean = textureName.removePrefix("minecraft:").removePrefix("block/")
        return spriteCoords[clean] ?: spriteCoords["stone"] ?: floatArrayOf(0f, 0f, 0.05f, 0.05f)
    }

    fun isOpaque(blockName: String): Boolean {
        val clean = blockName.removePrefix("minecraft:")
        if (clean == "air" || clean.endsWith("_air")) return false
        if (clean.contains("glass") || clean.contains("pane")) return false
        if (clean.contains("leaves") || clean.contains("water") || clean.contains("lava")) return false
        if (clean.contains("slab") || clean.contains("stairs") || clean.contains("door") || clean.contains("trapdoor")) return false
        if (clean.contains("fence") || clean.contains("wall") || clean.contains("torch") || clean.contains("carpet")) return false
        if (clean.contains("flower") || clean.contains("grass") || clean.contains("sapling") || clean.contains("rail")) return false
        return true
    }

    fun isFluid(blockName: String): Boolean {
        val clean = blockName.removePrefix("minecraft:")
        return clean == "water" || clean == "flowing_water" || clean == "lava" || clean == "flowing_lava"
    }
}
