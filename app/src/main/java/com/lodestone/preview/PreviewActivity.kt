package com.lodestone.preview

import android.content.res.ColorStateList
import android.net.Uri
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.google.android.material.bottomsheet.BottomSheetBehavior
import com.lodestone.preview.databinding.ActivityPreviewBinding
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.io.File
import java.io.FileInputStream
import java.io.InputStream

class PreviewActivity : AppCompatActivity() {

    private lateinit var binding: ActivityPreviewBinding
    private lateinit var engine: FilamentSchematicEngine
    private lateinit var statsAdapter: BlockStatsAdapter
    private lateinit var bottomSheetBehavior: BottomSheetBehavior<View>

    private var parsedSchematic: ParsedSchematic? = null
    private var activeRegion: SchematicRegion? = null
    private var fileUri: Uri? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityPreviewBinding.inflate(layoutInflater)
        setContentView(binding.root)

        initEngine()
        initViews()
        loadSchematicAsync()
    }

    private fun initEngine() {
        engine = FilamentSchematicEngine(this)
        val rendererView = engine.createView(this)
        binding.flRendererContainer.addView(rendererView)
    }

    private fun initViews() {
        // Bottom Sheet for Block Statistics
        bottomSheetBehavior = BottomSheetBehavior.from(binding.bottomSheetRoot.root)
        bottomSheetBehavior.state = BottomSheetBehavior.STATE_COLLAPSED
        bottomSheetBehavior.peekHeight = (64 * resources.displayMetrics.density).toInt()

        statsAdapter = BlockStatsAdapter(emptyList())
        binding.bottomSheetRoot.rvStatistics.apply {
            layoutManager = LinearLayoutManager(this@PreviewActivity)
            adapter = statsAdapter
        }

        // Camera mode toggle (Orbit / Flight)
        binding.btnCameraMode.setOnClickListener {
            if (engine.cameraMode == FilamentSchematicEngine.CameraMode.ORBIT) {
                engine.cameraMode = FilamentSchematicEngine.CameraMode.FLIGHT
                binding.btnCameraMode.imageTintList = ColorStateList.valueOf(ContextCompat.getColor(this, R.color.solarized_magenta))
                Toast.makeText(this, R.string.view_flight, Toast.LENGTH_SHORT).show()
            } else {
                engine.cameraMode = FilamentSchematicEngine.CameraMode.ORBIT
                binding.btnCameraMode.imageTintList = ColorStateList.valueOf(ContextCompat.getColor(this, R.color.solarized_cyan))
                Toast.makeText(this, R.string.view_orbit, Toast.LENGTH_SHORT).show()
            }
        }

        // Projection mode toggle (Perspective / Orthographic)
        binding.btnProjectionMode.setOnClickListener {
            val isOrtho = engine.toggleCameraProjection()
            binding.btnProjectionMode.imageTintList = ColorStateList.valueOf(
                ContextCompat.getColor(this, if (isOrtho) R.color.solarized_green else R.color.solarized_blue)
            )
        }

        // Reset camera
        binding.btnResetCamera.setOnClickListener {
            engine.resetCamera()
        }

        // Day / Night toggle
        binding.btnDayNight.setOnClickListener {
            val isNight = engine.toggleDayNight()
            binding.btnDayNight.imageTintList = ColorStateList.valueOf(
                ContextCompat.getColor(this, if (isNight) R.color.solarized_violet else R.color.solarized_orange)
            )
        }

        // Region selector
        binding.btnRegionSwitch.setOnClickListener {
            showRegionSelector()
        }

        // Layer Slicer Slider
        binding.sliderLayer.addOnChangeListener { _, value, fromUser ->
            if (fromUser) {
                val currentY = value.toInt()
                val reg = activeRegion ?: return@addOnChangeListener
                binding.tvLayerLabel.text = getString(R.string.layer_slice, currentY, reg.sizeY)
                engine.updateLayerSlice(0, currentY)
            }
        }
    }

    private fun loadSchematicAsync() {
        binding.tvLoadingIndicator.visibility = View.VISIBLE
        binding.tvLoadingIndicator.text = getString(R.string.loading)

        var filePath = intent.getStringExtra("file_path")
        val uriString = intent.getStringExtra("file_uri")
        fileUri = if (uriString != null) Uri.parse(uriString) else null
        if (fileUri == null && intent.data != null) {
            fileUri = intent.data
        }
        if (filePath == null && fileUri != null && fileUri?.scheme == "file") {
            filePath = fileUri?.path
        }

        // Try to query display name from content resolver if available
        var resolvedName: String? = null
        if (fileUri != null && fileUri?.scheme == "content") {
            try {
                contentResolver.query(fileUri!!, arrayOf(android.provider.OpenableColumns.DISPLAY_NAME), null, null, null)?.use { cursor ->
                    if (cursor.moveToFirst()) {
                        val nameIdx = cursor.getColumnIndex(android.provider.OpenableColumns.DISPLAY_NAME)
                        if (nameIdx >= 0) resolvedName = cursor.getString(nameIdx)
                    }
                }
            } catch (_: Exception) {}
        }
        val fileName = intent.getStringExtra("file_name")
            ?: resolvedName
            ?: (if (filePath != null) File(filePath).name else "model.litematic")

        lifecycleScope.launch(Dispatchers.IO) {
            try {
                val bytes = readSchematicBytes(filePath, fileUri)
                withContext(Dispatchers.Main) {
                    binding.tvLoadingIndicator.text = "解析数据..."
                }

                val schematic = SchematicParser.parse(bytes, fileName)
                parsedSchematic = schematic

                withContext(Dispatchers.Main) {
                    onSchematicLoaded(schematic)
                }
            } catch (e: Exception) {
                e.printStackTrace()
                withContext(Dispatchers.Main) {
                    binding.tvLoadingIndicator.visibility = View.GONE
                    Toast.makeText(this@PreviewActivity, "加载失败: ${e.message}", Toast.LENGTH_LONG).show()
                }
            }
        }
    }

    private fun readSchematicBytes(filePath: String?, uri: Uri?): ByteArray {
        val stream: InputStream = if (filePath != null && File(filePath).exists()) {
            FileInputStream(File(filePath))
        } else if (uri != null) {
            contentResolver.openInputStream(uri) ?: throw IllegalArgumentException("Cannot open URI stream for: $uri")
        } else {
            throw IllegalArgumentException("No file source provided (filePath and intent data are both null)")
        }
        return stream.use { it.readBytes() }
    }

    private fun onSchematicLoaded(schematic: ParsedSchematic) {
        binding.tvLoadingIndicator.visibility = View.GONE
        if (schematic.regions.isEmpty()) {
            Toast.makeText(this, R.string.no_regions, Toast.LENGTH_SHORT).show()
            return
        }

        switchRegion(schematic.regions[0])
    }

    private fun switchRegion(region: SchematicRegion) {
        activeRegion = region

        // Update layer slider range
        binding.sliderLayer.valueFrom = 0.0f
        binding.sliderLayer.valueTo = region.sizeY.toFloat()
        binding.sliderLayer.value = region.sizeY.toFloat()
        binding.tvLayerLabel.text = getString(R.string.layer_slice, region.sizeY, region.sizeY)

        // Render region in Filament
        binding.tvLoadingIndicator.visibility = View.VISIBLE
        binding.tvLoadingIndicator.text = "构建网格..."

        lifecycleScope.launch(Dispatchers.Default) {
            // Calculate block statistics
            val statsMap = mutableMapOf<String, Int>()
            var totalBlocks = 0
            for (i in 0 until region.blockIndices.size) {
                val idx = region.blockIndices[i]
                if (idx > 0) {
                    val state = region.palette.getOrNull(idx)
                    if (state != null && state.name != "minecraft:air" && state.name != "air") {
                        val name = state.name
                        statsMap[name] = (statsMap[name] ?: 0) + 1
                        totalBlocks++
                    }
                }
            }

            withContext(Dispatchers.Main) {
                engine.loadRegion(region) { progress ->
                    binding.tvLoadingIndicator.text = "构建网格 $progress%"
                }
                binding.tvLoadingIndicator.visibility = View.GONE

                // Update bottom sheet statistics
                binding.bottomSheetRoot.tvStatsTotal.text = getString(R.string.stats_total, totalBlocks)
                val statsList = statsMap.map { Pair(it.key, it.value) }.sortedByDescending { it.second }
                statsAdapter.updateData(statsList)
            }
        }
    }

    private fun showRegionSelector() {
        val schematic = parsedSchematic ?: return
        if (schematic.regions.isEmpty()) return

        val regionNames = schematic.regions.map { it.name }.toTypedArray()
        AlertDialog.Builder(this)
            .setTitle(R.string.select_region)
            .setItems(regionNames) { _, which ->
                switchRegion(schematic.regions[which])
            }
            .setNegativeButton(R.string.dialog_ok, null)
            .show()
    }

    override fun onResume() {
        super.onResume()
        engine.startRendering()
    }

    override fun onPause() {
        super.onPause()
        engine.stopRendering()
    }

    override fun onDestroy() {
        engine.destroy()
        super.onDestroy()
    }
}
