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

        // Setup File RecyclerView
        fileAdapter = FileAdapter(emptyList()) { selectedFile ->
            if (DirectoryHelper.isItemDirectory(selectedFile)) {
                navigateToDirectory(selectedFile)
            } else {
                if (selectedFile.name.endsWith(".litematic", ignoreCase = true)) {
                    openPreviewActivity(null, selectedFile.absolutePath)
                }
            }
        }
        binding.rvFiles.layoutManager = LinearLayoutManager(this)
        binding.rvFiles.adapter = fileAdapter

        // Retrieve last visited directory if exists
        val sharedPreferences = getSharedPreferences("lodestone_pref", Context.MODE_PRIVATE)
        val lastPath = sharedPreferences.getString("last_visited_dir", null)
        if (lastPath != null) {
            val lastDir = File(lastPath)
            if (lastDir.exists() && lastDir.isDirectory && isSubDirectoryOfRoot(lastDir)) {
                currentDirectory = lastDir
            }
        }

        // Setup Buttons and Actions
        binding.btnSaf.setOnClickListener {
            // Open document via SAF
            openDocumentLauncher.launch(arrayOf("*/*"))
        }

        binding.btnMenu.setOnClickListener { view ->
            showPopupMenu(view)
        }

        binding.btnBack.setOnClickListener {
            navigateUp()
        }

        binding.btnGrantPermission.setOnClickListener {
            requestStoragePermission()
        }

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
        binding.tvCurrentPath.text = getRelativePathString(currentDirectory)

        // Attempt to read files
        var filesList = currentDirectory.listFiles()

        // If filesList is null or empty (which happens when permissions are not granted yet),
        // we populate the list with standard system folder names to showcase the directory structure.
        if (filesList == null || filesList.isEmpty()) {
            val mockList = DirectoryHelper.getMockSubFiles(currentDirectory, rootDirectory)
            if (mockList.isNotEmpty()) {
                filesList = mockList.toTypedArray()
            }
        }

        if (filesList != null && filesList.isNotEmpty()) {
            val filteredList = filesList.filter {
                DirectoryHelper.isItemDirectory(it) || it.name.endsWith(".litematic", ignoreCase = true)
            }
            fileAdapter.updateData(filteredList)
            if (filteredList.isEmpty()) {
                binding.tvEmpty.visibility = View.VISIBLE
            } else {
                binding.tvEmpty.visibility = View.GONE
            }
        } else {
            fileAdapter.updateData(emptyList())
            binding.tvEmpty.visibility = View.VISIBLE
        }
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
            }
            if (filePath != null) {
                putExtra("file_path", filePath)
            }
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        }
        startActivity(intent)
    }
}
