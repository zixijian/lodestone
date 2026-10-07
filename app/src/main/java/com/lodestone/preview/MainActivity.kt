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
    private lateinit var fileAdapter: FileAdapter
    private var currentDirectory: File = Environment.getExternalStorageDirectory()
    private val rootDirectory: File = Environment.getExternalStorageDirectory()

    private val requestPermissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { isGranted ->
        if (isGranted) {
            onPermissionGranted()
        } else {
            Toast.makeText(this, R.string.toast_permission_needed, Toast.LENGTH_SHORT).show()
        }
    }

    private val requestAllFilesPermissionLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            if (Environment.isExternalStorageManager()) {
                onPermissionGranted()
            } else {
                Toast.makeText(this, R.string.toast_permission_needed, Toast.LENGTH_SHORT).show()
            }
        }
    }

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

    // Intercept back gesture/press to go up in directory hierarchy until root, then exit activity safely
    private val onBackPressedCallback = object : OnBackPressedCallback(true) {
        override fun handleOnBackPressed() {
            val currentNorm = currentDirectory.canonicalPath.removeSuffix("/")
            val rootNorm = rootDirectory.canonicalPath.removeSuffix("/")
            if (currentNorm != rootNorm) {
                navigateUp()
            } else {
                finish()
            }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Register custom back press handler
        onBackPressedDispatcher.addCallback(this, onBackPressedCallback)

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

        binding.btnGrantPermission.setOnClickListener {
            requestStoragePermission()
        }

        updateResourcePackStatus()
        checkPermissions()
    }

    override fun onResume() {
        super.onResume()
        // Always display directories under internal storage, whether permission is granted or not
        if (hasStoragePermission()) {
            binding.permissionBanner.visibility = View.GONE
        } else {
            binding.permissionBanner.visibility = View.VISIBLE
        }
        loadFilesOfCurrentDirectory()
    }

    private fun isSubDirectoryOfRoot(child: File): Boolean {
        val rootNorm = rootDirectory.canonicalPath.removeSuffix("/")
        var parent: File? = child
        while (parent != null) {
            if (parent.canonicalPath.removeSuffix("/") == rootNorm) {
                return true
            }
            parent = parent.parentFile
        }
        return false
    }

    private fun checkPermissions() {
        if (hasStoragePermission()) {
            binding.permissionBanner.visibility = View.GONE
        } else {
            binding.permissionBanner.visibility = View.VISIBLE
        }
        loadFilesOfCurrentDirectory()
    }

    private fun hasStoragePermission(): Boolean {
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            Environment.isExternalStorageManager()
        } else {
            ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.READ_EXTERNAL_STORAGE
            ) == PackageManager.PERMISSION_GRANTED
        }
    }

    private fun requestStoragePermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            try {
                val intent = Intent(Settings.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION).apply {
                    data = Uri.parse("package:$packageName")
                }
                requestAllFilesPermissionLauncher.launch(intent)
            } catch (e: Exception) {
                val intent = Intent(Settings.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION)
                requestAllFilesPermissionLauncher.launch(intent)
            }
        } else {
            requestPermissionLauncher.launch(Manifest.permission.READ_EXTERNAL_STORAGE)
        }
    }

    private fun onPermissionGranted() {
        Toast.makeText(this, R.string.toast_permission_success, Toast.LENGTH_SHORT).show()
        binding.permissionBanner.visibility = View.GONE
        loadFilesOfCurrentDirectory()
    }

    private fun navigateToDirectory(directory: File) {
        if (isSubDirectoryOfRoot(directory)) {
            currentDirectory = directory
            // Save last visited
            getSharedPreferences("lodestone_pref", Context.MODE_PRIVATE)
                .edit()
                .putString("last_visited_dir", currentDirectory.absolutePath)
                .apply()
            loadFilesOfCurrentDirectory()
        }
    }

    private fun navigateUp() {
        val currentNorm = currentDirectory.canonicalPath.removeSuffix("/")
        val rootNorm = rootDirectory.canonicalPath.removeSuffix("/")
        if (currentNorm == rootNorm) {
            Toast.makeText(this, R.string.already_highest, Toast.LENGTH_SHORT).show()
        } else {
            currentDirectory.parentFile?.let {
                navigateToDirectory(it)
            }
        }
    }

    private fun loadFilesOfCurrentDirectory() {
        // Unused directory loader removed as file list browser was removed from main screen
    }

    private fun getRelativePathString(directory: File): String {
        val rootPath = rootDirectory.canonicalPath.removeSuffix("/")
        val currentPath = directory.canonicalPath.removeSuffix("/")
        return if (currentPath.startsWith(rootPath)) {
            val rel = currentPath.substring(rootPath.length)
            if (rel.isEmpty()) "/" else rel
        } else {
            "/"
        }
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
