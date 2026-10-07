package com.lodestone.preview

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.PopupMenu
import com.lodestone.preview.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    private val openDocumentLauncher = registerForActivityResult(
        ActivityResultContracts.OpenDocument()
    ) { uri: Uri? ->
        uri?.let { schematicUri ->
            val result = ZipUtils.validateSchematicFile(this, schematicUri)
            if (result.isValid) {
                openPreviewActivity(schematicUri)
            } else {
                AlertDialog.Builder(this)
                    .setTitle("打开投影文件失败")
                    .setMessage(result.errorMessage ?: "无效的投影文件。")
                    .setPositiveButton(R.string.dialog_ok) { dialog, _ -> dialog.dismiss() }
                    .show()
            }
        }
    }

    private val openResourcePackLauncher = registerForActivityResult(
        ActivityResultContracts.OpenDocument()
    ) { uri: Uri? ->
        uri?.let { packUri ->
            val result = ZipUtils.validateAndExtractResourcePack(this, packUri)
            if (result.isValid) {
                val packName = getFileName(packUri) ?: "Custom Pack"
                getSharedPreferences("app_prefs", Context.MODE_PRIVATE)
                    .edit()
                    .putString("custom_pack_name", packName)
                    .apply()
                updatePackInfoUI()
                Toast.makeText(this, R.string.toast_pack_imported, Toast.LENGTH_SHORT).show()
            } else {
                AlertDialog.Builder(this)
                    .setTitle("材质包导入失败")
                    .setMessage(result.errorMessage ?: "无效的材质包。")
                    .setPositiveButton(R.string.dialog_ok) { dialog, _ -> dialog.dismiss() }
                    .show()
            }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        updatePackInfoUI()

        // Setup Shulkr-style card click listeners
        binding.cardOpenSchematic.setOnClickListener {
            openDocumentLauncher.launch(arrayOf("*/*"))
        }

        binding.cardImportPack.setOnClickListener {
            openResourcePackLauncher.launch(arrayOf("application/zip", "application/x-zip-compressed", "*/*"))
        }

        binding.btnMenu.setOnClickListener { view ->
            showPopupMenu(view)
        }
    }

    private fun updatePackInfoUI() {
        val prefs = getSharedPreferences("app_prefs", Context.MODE_PRIVATE)
        val packName = prefs.getString("custom_pack_name", null)
        if (packName != null) {
            binding.tvPackDesc.text = packName
        } else {
            binding.tvPackDesc.setText(R.string.pack_info_desc)
        }
    }

    private fun getFileName(uri: Uri): String? {
        var name: String? = null
        contentResolver.query(uri, null, null, null, null)?.use { cursor ->
            val nameIndex = cursor.getColumnIndex(android.provider.OpenableColumns.DISPLAY_NAME)
            if (nameIndex != -1 && cursor.moveToFirst()) {
                name = cursor.getString(nameIndex)
            }
        }
        return name
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

    private fun openPreviewActivity(fileUri: Uri) {
        val intent = Intent(this, PreviewActivity::class.java).apply {
            data = fileUri
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        }
        startActivity(intent)
    }
}
