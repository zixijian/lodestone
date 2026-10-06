package com.lodestone.preview

import android.content.Context
import android.net.Uri
import java.io.File
import java.io.FileOutputStream
import java.io.InputStream
import java.util.zip.ZipEntry
import java.util.zip.ZipInputStream

object ZipUtils {

    data class ValidationResult(
        val isValid: Boolean,
        val errorMessage: String? = null
    )

    fun validateSchematicFile(context: Context, uri: Uri): ValidationResult {
        val contentResolver = context.contentResolver

        // Check file header / magic bytes or extension
        val inputStream = try {
            contentResolver.openInputStream(uri) ?: return ValidationResult(false, "无法读取选中的投影文件。")
        } catch (e: Exception) {
            return ValidationResult(false, "读取选中的文件失败: ${e.localizedMessage}")
        }

        val header = ByteArray(2)
        val readBytes = try {
            inputStream.use { it.read(header, 0, 2) }
        } catch (e: Exception) {
            0
        }

        // GZIP magic header bytes: 0x1F, 0x8B
        val isGzip = readBytes >= 2 && header[0] == 0x1F.toByte() && header[1] == 0x8B.toByte()
        // Uncompressed NBT Compound start byte: 0x0A
        val isUncompressedNbt = readBytes >= 1 && header[0] == 0x0A.toByte()

        if (!isGzip && !isUncompressedNbt) {
            return ValidationResult(
                false,
                "无效的投影文件！请选择扩展名为 .litematic 或 .schematic 的标准投影文件。"
            )
        }

        return ValidationResult(true)
    }

    fun validateAndExtractResourcePack(context: Context, uri: Uri): ValidationResult {
        val contentResolver = context.contentResolver

        // Check if stream opens
        val inputStream: InputStream = try {
            contentResolver.openInputStream(uri) ?: return ValidationResult(false, "无法读取选择的文件。")
        } catch (e: Exception) {
            return ValidationResult(false, "文件读取失败: ${e.localizedMessage}")
        }

        var hasPackMcmeta = false
        var hasAssetsDir = false

        try {
            ZipInputStream(inputStream).use { zipStream ->
                var entry: ZipEntry? = zipStream.nextEntry
                while (entry != null) {
                    val name = entry.name.lowercase()
                    if (name.endsWith("pack.mcmeta")) {
                        hasPackMcmeta = true
                    }
                    if (name.contains("assets/")) {
                        hasAssetsDir = true
                    }
                    zipStream.closeEntry()
                    if (hasPackMcmeta || hasAssetsDir) {
                        break
                    }
                    entry = zipStream.nextEntry
                }
            }
        } catch (e: Exception) {
            return ValidationResult(false, "无效的 ZIP 压缩包格式，请确认是否为正确的材质包。")
        }

        if (!hasPackMcmeta && !hasAssetsDir) {
            return ValidationResult(
                false,
                "无效的材质包！压缩包内必须包含 pack.mcmeta 文件或 assets/ 资源目录。"
            )
        }

        // Extract valid resource pack to internal storage directory
        val targetDir = File(context.filesDir, "custom_pack")
        if (targetDir.exists()) {
            targetDir.deleteRecursively()
        }
        targetDir.mkdirs()

        try {
            contentResolver.openInputStream(uri)?.use { stream ->
                ZipInputStream(stream).use { zipStream ->
                    var entry = zipStream.nextEntry
                    val buffer = ByteArray(8192)
                    while (entry != null) {
                        val outFile = File(targetDir, entry.name)
                        val canonicalTarget = targetDir.canonicalPath
                        val canonicalOut = outFile.canonicalPath
                        if (!canonicalOut.startsWith(canonicalTarget)) {
                            // Prevent Zip Slip vulnerability
                            zipStream.closeEntry()
                            entry = zipStream.nextEntry
                            continue
                        }
                        if (entry.isDirectory) {
                            outFile.mkdirs()
                        } else {
                            outFile.parentFile?.mkdirs()
                            FileOutputStream(outFile).use { out ->
                                var bytesRead = zipStream.read(buffer)
                                while (bytesRead != -1) {
                                    out.write(buffer, 0, bytesRead)
                                    bytesRead = zipStream.read(buffer)
                                }
                            }
                        }
                        zipStream.closeEntry()
                        entry = zipStream.nextEntry
                    }
                }
            }
        } catch (e: Exception) {
            return ValidationResult(false, "解压材质包失败: ${e.localizedMessage}")
        }

        return ValidationResult(true)
    }
}
