package com.lodestone.preview

import android.Manifest
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.Environment
import android.provider.Settings
import android.view.View
import android.widget.Toast
import androidx.activity.OnBackPressedCallback
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.PopupMenu
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.LinearLayoutManager
import com.lodestone.preview.databinding.ActivityMainBinding
import java.io.File

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    private val openDocumentLauncher = registerForActivityResult(
        ActivityResultContracts.OpenDocument()
    ) { uri: Uri? ->
        uri?.let {
            openPreviewActivity(it, null)
        }
    }

    private val openPackLauncher = registerForActivityResult(
        ActivityResultContracts.OpenDocument()
    ) { uri: Uri? ->
        uri?.let { processResourcePackImport(it) }
    }

    private fun processResourcePackImport(uri: Uri) {
        try {
            contentResolver.openInputStream(uri)?.use { inputStream ->
                val tempDir = File(cacheDir, "temp_pack")
                if (tempDir.exists()) tempDir.deleteRecursively()
                tempDir.mkdirs()

                var hasValidStructure = false
                java.util.zip.ZipInputStream(inputStream).use { zipIn ->
                    var entry = zipIn.nextEntry
                    while (entry != null) {
                        val entryName = entry.name
                        if (entryName.startsWith("assets/") || entryName == "pack.mcmeta" || entryName.endsWith("assets.json")) {
                            hasValidStructure = true
                        }
                        val outFile = File(tempDir, entryName)
                        if (!outFile.canonicalPath.startsWith(tempDir.canonicalPath)) {
                            throw SecurityException("Zip Slip vulnerability detected in resource pack")
                        }
                        if (entry.isDirectory) {
                            outFile.mkdirs()
                        } else {
                            outFile.parentFile?.mkdirs()
                            outFile.outputStream().use { zipIn.copyTo(it) }
                        }
                        zipIn.closeEntry()
                        entry = zipIn.nextEntry
                    }
                }

                if (!hasValidStructure) {
                    tempDir.deleteRecursively()
                    Toast.makeText(this, "无效的材质包格式 (未找到 assets 文件夹或 pack.mcmeta)", Toast.LENGTH_LONG).show()
                    return
                }

                val targetDir = File(filesDir, "custom_resource_pack")
                if (targetDir.exists()) targetDir.deleteRecursively()
                tempDir.renameTo(targetDir)

                Toast.makeText(this, "材质包导入成功！", Toast.LENGTH_SHORT).show()
                updateResourcePackStatus()
            }
        } catch (e: Exception) {
            Toast.makeText(this, "材质包导入失败: ${e.message}", Toast.LENGTH_LONG).show()
        }
    }

    private fun updateResourcePackStatus() {
        val packDir = File(filesDir, "custom_resource_pack")
        if (packDir.exists() && packDir.list()?.isNotEmpty() == true) {
            binding.tvPackSubtitle.text = "自定义材质包已加载"
            binding.tvPackSubtitle.setTextColor(ContextCompat.getColor(this, R.color.solarized_green))
        } else {
            binding.tvPackSubtitle.text = "默认材质包 (Minecraft 1.21.x)"
            binding.tvPackSubtitle.setTextColor(ContextCompat.getColor(this, R.color.solarized_base0))
        }
    }

    private fun resetDefaultResourcePack() {
        val packDir = File(filesDir, "custom_resource_pack")
        if (packDir.exists()) {
            packDir.deleteRecursively()
        }
        updateResourcePackStatus()
        Toast.makeText(this, R.string.toast_pack_reset, Toast.LENGTH_SHORT).show()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Setup Buttons and Actions
        binding.btnSaf.setOnClickListener {
            openDocumentLauncher.launch(arrayOf("*/*"))
        }

        binding.cardOpenFile.setOnClickListener {
            openDocumentLauncher.launch(arrayOf("*/*"))
        }

        binding.btnImportPack.setOnClickListener {
            openPackLauncher.launch(arrayOf("application/zip", "application/x-zip-compressed", "*/*"))
        }

        binding.btnResetPack.setOnClickListener {
            resetDefaultResourcePack()
        }

        binding.btnMenu.setOnClickListener { view ->
            showPopupMenu(view)
        }

        updateResourcePackStatus()
    }

    override fun onResume() {
        super.onResume()
        updateResourcePackStatus()
    }

    private fun showPopupMenu(anchorView: View) {
        val popupMenu = PopupMenu(this, anchorView)
        popupMenu.menu.add(0, 1, 0, R.string.menu_usage)
        popupMenu.menu.add(0, 2, 1, R.string.menu_about)
        popupMenu.menu.add(0, 3, 2, R.string.menu_oss)
        popupMenu.menu.add(0, 4, 3, R.string.menu_exit)

        popupMenu.setOnMenuItemClickListener { item ->
            when (item.itemId) {
                1 -> showTextDialog(getString(R.string.usage_title), getString(R.string.usage_content))
                2 -> showTextDialog(getString(R.string.about_title), getString(R.string.about_content))
                3 -> showTextDialog(getString(R.string.oss_title), getString(R.string.oss_content))
                4 -> finishAffinity()
            }
            true
        }
        popupMenu.show()
    }

    private fun showTextDialog(title: String, content: String) {
        AlertDialog.Builder(this)
            .setTitle(title)
            .setMessage(content)
            .setPositiveButton(R.string.dialog_ok) { dialog, _ -> dialog.dismiss() }
            .show()
    }

    private fun openPreviewActivity(fileUri: Uri?, filePath: String?) {
        val intent = Intent(this, PreviewActivity::class.java).apply {
            if (fileUri != null) {
                data = fileUri
                addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
            }
            if (filePath != null) {
                putExtra("file_path", filePath)
            }
        }
        startActivity(intent)
    }
}
