package com.lodestone.preview

import java.io.ByteArrayInputStream
import java.io.DataInputStream
import java.io.InputStream
import java.util.zip.GZIPInputStream
import java.util.zip.InflaterInputStream

/**
 * Fast, lightweight zero-dependency streaming NBT reader for Minecraft schematics.
 * Supports GZIP, DEFLATE, and uncompressed streams.
 */
object NbtReader {

    const val TAG_END: Byte = 0
    const val TAG_BYTE: Byte = 1
    const val TAG_SHORT: Byte = 2
    const val TAG_INT: Byte = 3
    const val TAG_LONG: Byte = 4
    const val TAG_FLOAT: Byte = 5
    const val TAG_DOUBLE: Byte = 6
    const val TAG_BYTE_ARRAY: Byte = 7
    const val TAG_STRING: Byte = 8
    const val TAG_LIST: Byte = 9
    const val TAG_COMPOUND: Byte = 10
    const val TAG_INT_ARRAY: Byte = 11
    const val TAG_LONG_ARRAY: Byte = 12

    sealed class NbtTag
    data class TagByte(val value: Byte) : NbtTag()
    data class TagShort(val value: Short) : NbtTag()
    data class TagInt(val value: Int) : NbtTag()
    data class TagLong(val value: Long) : NbtTag()
    data class TagFloat(val value: Float) : NbtTag()
    data class TagDouble(val value: Double) : NbtTag()
    data class TagByteArray(val value: ByteArray) : NbtTag()
    data class TagString(val value: String) : NbtTag()
    data class TagList(val tagType: Byte, val value: List<NbtTag>) : NbtTag()
    data class TagCompound(val value: Map<String, NbtTag>) : NbtTag() {
        fun get(key: String): NbtTag? = value[key]
        fun getCompound(key: String): TagCompound? = value[key] as? TagCompound
        fun getList(key: String): TagList? = value[key] as? TagList
        fun getString(key: String): String? = (value[key] as? TagString)?.value
        fun getInt(key: String, default: Int = 0): Int = (value[key] as? TagInt)?.value ?: (value[key] as? TagShort)?.value?.toInt() ?: default
        fun getShort(key: String, default: Short = 0): Short = (value[key] as? TagShort)?.value ?: (value[key] as? TagInt)?.value?.toShort() ?: default
        fun getByteArray(key: String): ByteArray? = (value[key] as? TagByteArray)?.value
        fun getIntArray(key: String): IntArray? = (value[key] as? TagIntArray)?.value
        fun getLongArray(key: String): LongArray? = (value[key] as? TagLongArray)?.value
    }
    data class TagIntArray(val value: IntArray) : NbtTag()
    data class TagLongArray(val value: LongArray) : NbtTag()

    fun read(bytes: ByteArray): TagCompound {
        val stream = getDecompressedStream(bytes)
        val dataInput = DataInputStream(stream)
        val rootType = dataInput.readByte()
        if (rootType != TAG_COMPOUND) {
            throw IllegalArgumentException("Root tag must be Compound (10), got $rootType")
        }
        val rootName = dataInput.readUTF() // read root name
        return readCompoundPayload(dataInput)
    }

    private fun getDecompressedStream(bytes: ByteArray): InputStream {
        if (bytes.size >= 2 && bytes[0] == 0x1F.toByte() && bytes[1] == 0x8B.toByte()) {
            return GZIPInputStream(ByteArrayInputStream(bytes), 65536)
        }
        // Test zlib DEFLATE
        if (bytes.size >= 2 && (bytes[0].toInt() and 0x0F == 0x08) && ((bytes[0].toInt() and 0xFF) * 256 + (bytes[1].toInt() and 0xFF)) % 31 == 0) {
            return InflaterInputStream(ByteArrayInputStream(bytes))
        }
        return ByteArrayInputStream(bytes)
    }

    private fun readTagPayload(type: Byte, input: DataInputStream): NbtTag {
        return when (type) {
            TAG_BYTE -> TagByte(input.readByte())
            TAG_SHORT -> TagShort(input.readShort())
            TAG_INT -> TagInt(input.readInt())
            TAG_LONG -> TagLong(input.readLong())
            TAG_FLOAT -> TagFloat(input.readFloat())
            TAG_DOUBLE -> TagDouble(input.readDouble())
            TAG_BYTE_ARRAY -> {
                val len = input.readInt()
                val arr = ByteArray(len)
                input.readFully(arr)
                TagByteArray(arr)
            }
            TAG_STRING -> TagString(input.readUTF())
            TAG_LIST -> {
                val itemType = input.readByte()
                val len = input.readInt()
                val list = ArrayList<NbtTag>(len)
                for (i in 0 until len) {
                    list.add(readTagPayload(itemType, input))
                }
                TagList(itemType, list)
            }
            TAG_COMPOUND -> readCompoundPayload(input)
            TAG_INT_ARRAY -> {
                val len = input.readInt()
                val arr = IntArray(len)
                for (i in 0 until len) {
                    arr[i] = input.readInt()
                }
                TagIntArray(arr)
            }
            TAG_LONG_ARRAY -> {
                val len = input.readInt()
                val arr = LongArray(len)
                for (i in 0 until len) {
                    arr[i] = input.readLong()
                }
                TagLongArray(arr)
            }
            else -> throw IllegalArgumentException("Unknown NBT tag type: $type")
        }
    }

    private fun readCompoundPayload(input: DataInputStream): TagCompound {
        val map = HashMap<String, NbtTag>()
        while (true) {
            val type = input.readByte()
            if (type == TAG_END) break
            val name = input.readUTF()
            val tag = readTagPayload(type, input)
            map[name] = tag
        }
        return TagCompound(map)
    }
}
