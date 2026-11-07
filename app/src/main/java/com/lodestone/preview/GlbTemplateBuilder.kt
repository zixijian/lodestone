package com.lodestone.preview

import java.nio.ByteBuffer
import java.nio.ByteOrder

/**
 * Creates minimal valid glTF 2.0 binary (GLB) to extract an unlit/textured ubershader MaterialInstance.
 */
object GlbTemplateBuilder {

    private const val JSON = "{\"asset\":{\"version\":\"2.0\"},\"extensionsUsed\":[\"KHR_materials_unlit\"],\"scenes\":[{\"nodes\":[0]}],\"scene\":0,\"nodes\":[{\"mesh\":0}],\"meshes\":[{\"primitives\":[{\"attributes\":{\"POSITION\":0,\"TEXCOORD_0\":1,\"COLOR_0\":2},\"material\":0}]}],\"materials\":[{\"pbrMetallicRoughness\":{\"baseColorFactor\":[1,1,1,1],\"baseColorTexture\":{\"index\":0}},\"doubleSided\":true,\"extensions\":{\"KHR_materials_unlit\":{}}}],\"textures\":[{\"source\":0}],\"images\":[{\"bufferView\":3,\"mimeType\":\"image/png\"}],\"accessors\":[{\"bufferView\":0,\"componentType\":5126,\"count\":3,\"type\":\"VEC3\",\"min\":[0,0,0],\"max\":[1,1,0]},{\"bufferView\":1,\"componentType\":5126,\"count\":3,\"type\":\"VEC2\"},{\"bufferView\":2,\"componentType\":5126,\"count\":3,\"type\":\"VEC4\"}],\"bufferViews\":[{\"buffer\":0,\"byteOffset\":0,\"byteLength\":36},{\"buffer\":0,\"byteOffset\":36,\"byteLength\":24},{\"buffer\":0,\"byteOffset\":60,\"byteLength\":48},{\"buffer\":0,\"byteOffset\":108,\"byteLength\":68}],\"buffers\":[{\"byteLength\":176}]}"

    // 1x1 White PNG
    private val WHITE_PNG = byteArrayOf(
        -119, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82,
        0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0, 31, 21, -60,
        -119, 0, 0, 0, 11, 73, 68, 65, 84, 120, 1, 99, -8, -1, -1, 63,
        0, 5, -2, 2, -2, -90, -85, 98, 109, 0, 0, 0, 0, 73, 69, 78, 68, -82, 66, 96, -126
    )

    fun createGlb(): ByteBuffer {
        val jsonBytes = JSON.toByteArray(Charsets.UTF_8)
        val jsonPadded = (jsonBytes.size + 3) and -4
        val binLength = 176
        val totalLength = 12 + 8 + jsonPadded + 8 + binLength

        val buf = ByteBuffer.allocateDirect(totalLength).order(ByteOrder.LITTLE_ENDIAN)
        // GLB Header
        buf.putInt(0x46546C67) // "glTF"
        buf.putInt(2)          // version 2
        buf.putInt(totalLength)

        // JSON Chunk
        buf.putInt(jsonPadded)
        buf.putInt(0x4E4F534A) // "JSON"
        buf.put(jsonBytes)
        for (i in jsonBytes.size until jsonPadded) {
            buf.put(0x20.toByte()) // space pad
        }

        // BIN Chunk
        buf.putInt(binLength)
        buf.putInt(0x004E4942) // "BIN"
        // 3 VEC3 (36 bytes)
        for (i in 0 until 9) buf.putFloat(0f)
        // 3 VEC2 (24 bytes)
        for (i in 0 until 6) buf.putFloat(0f)
        // 3 VEC4 (48 bytes)
        for (i in 0 until 12) buf.putFloat(1f)
        // PNG bytes (68 bytes)
        buf.put(WHITE_PNG)

        buf.rewind()
        return buf
    }
}
