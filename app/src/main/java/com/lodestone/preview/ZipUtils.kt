package com.lodestone.preview

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.graphics.Rect
import android.util.Log
import org.json.JSONObject
import java.io.File
import java.io.FileOutputStream

object ZipUtils {

    fun generateCustomAtlas(context: Context, targetDir: File) {
        try {
            val assetManager = context.assets
            val atlasStream = assetManager.open("web/default-pack/atlas.png")
            val baseAtlasBitmap = BitmapFactory.decodeStream(atlasStream)?.copy(Bitmap.Config.ARGB_8888, true)
            atlasStream.close()

            if (baseAtlasBitmap == null) {
                Log.e("ZipUtils", "Failed to decode default atlas.png from assets")
                return
            }

            val jsonStream = assetManager.open("web/default-pack/assets.json")
            val jsonString = jsonStream.bufferedReader().use { it.readText() }
            jsonStream.close()

            val jsonObject = JSONObject(jsonString)
            val texturesObj = jsonObject.optJSONObject("textures") ?: return

            val canvas = Canvas(baseAtlasBitmap)

            val keys = texturesObj.keys()
            while (keys.hasNext()) {
                val texKey = keys.next()
                val coords = texturesObj.getJSONArray(texKey)
                if (coords.length() < 4) continue

                val u = coords.getInt(0)
                val v = coords.getInt(1)
                val du = coords.getInt(2)
                val dv = coords.getInt(3)

                val candidateFiles = listOf(
                    File(targetDir, "assets/minecraft/textures/$texKey.png"),
                    File(targetDir, "textures/$texKey.png"),
                    File(targetDir, "$texKey.png")
                )

                val texFile = candidateFiles.firstOrNull { it.exists() && it.isFile }
                if (texFile != null) {
                    try {
                        val customBm = BitmapFactory.decodeFile(texFile.absolutePath)
                        if (customBm != null) {
                            val srcRect = Rect(0, 0, customBm.width, customBm.height)
                            val dstRect = Rect(u, v, u + du, v + dv)
                            canvas.drawBitmap(customBm, srcRect, dstRect, null)
                            customBm.recycle()
                        }
                    } catch (e: Exception) {
                        Log.e("ZipUtils", "Failed to blit custom texture $texKey", e)
                    }
                }
            }

            val outFile = File(targetDir, "atlas.png")
            FileOutputStream(outFile).use { outStream ->
                baseAtlasBitmap.compress(Bitmap.CompressFormat.PNG, 100, outStream)
            }
            baseAtlasBitmap.recycle()

            File(targetDir, "assets.json").writeText(jsonString)

            Log.d("ZipUtils", "Successfully generated custom resource pack atlas.png")
        } catch (e: Exception) {
            Log.e("ZipUtils", "Error generating custom atlas", e)
        }
    }
}
