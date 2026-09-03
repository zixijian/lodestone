package com.lodestone.preview

import android.annotation.SuppressLint
import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.view.View
import android.webkit.*
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.webkit.WebViewAssetLoader
import com.google.android.material.bottomsheet.BottomSheetBehavior
import com.lodestone.preview.databinding.ActivityPreviewBinding
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.io.FileInputStream
import java.io.InputStream

class PreviewActivity : AppCompatActivity() {

    private lateinit var binding: ActivityPreviewBinding
    private lateinit var assetLoader: WebViewAssetLoader
    private lateinit var statsAdapter: BlockStatsAdapter
    private var fileUri: Uri? = null

    // For caching or tracking region options and current indices
    private var regionNamesList: List<String> = emptyList()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Ensure window background is Solarized Dark from the very first frame to prevent white screen flashes
        window.setBackgroundDrawableResource(R.color.solarized_base03)
        window.statusBarColor = getColor(R.color.solarized_base03)
        window.navigationBarColor = getColor(R.color.solarized_base03)

        binding = ActivityPreviewBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.root.setBackgroundColor(getColor(R.color.solarized_base03))
        binding.webviewRenderer.setBackgroundColor(getColor(R.color.solarized_base03))

        fileUri = intent.data

        // Setup bottom sheet
        val bottomSheetLayout = binding.bottomSheetRoot.bottomSheetLayout
        val bottomSheetBehavior = BottomSheetBehavior.from(bottomSheetLayout)

        // Define a custom peek height in pixels (64dp)
        val density = resources.displayMetrics.density
        bottomSheetBehavior.peekHeight = (64 * density).toInt()

        // Setup stats recycler
        statsAdapter = BlockStatsAdapter(emptyList())
        binding.bottomSheetRoot.rvStatistics.layoutManager = LinearLayoutManager(this)
        binding.bottomSheetRoot.rvStatistics.adapter = statsAdapter

        // Setup Web Asset Loader to map assets folder safely
        assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        setupWebView()

        // Float Buttons Listeners
        binding.fabCameraMode.setOnClickListener {
            binding.webviewRenderer.evaluateJavascript("toggleCameraView();", null)
        }

        binding.fabResetCamera.setOnClickListener {
            binding.webviewRenderer.evaluateJavascript("resetCamera();", null)
        }

        binding.fabRegionSwitch.setOnClickListener {
            showRegionSelector()
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun setupWebView() {
        val webSettings = binding.webviewRenderer.settings
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webSettings.allowFileAccess = true

        // Force Solarized Dark background on WebView before loading content
        binding.webviewRenderer.setBackgroundColor(getColor(R.color.solarized_base03))

        // Force dynamic cache clearing to prevent loaded model glitches
        binding.webviewRenderer.clearCache(true)
        deleteDatabase("webview.db")
        deleteDatabase("webviewCache.db")

        binding.webviewRenderer.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView?,
                request: WebResourceRequest?
            ): WebResourceResponse? {
                val url = request?.url ?: return null

                // Read local schematic file stream for offline 3D rendering
                if (url.path?.endsWith("/model.litematic") == true) {
                    try {
                        val filePath = intent.getStringExtra("file_path")
                        val file = if (filePath != null) File(filePath) else null
                        val fileSize = file?.length() ?: -1L

                        val stream: InputStream? = if (file != null && file.exists()) {
                            FileInputStream(file)
                        } else {
                            fileUri?.let { uri ->
                                contentResolver.openInputStream(uri)
                            }
                        }

                        if (stream != null) {
                            val responseHeaders = mutableMapOf<String, String>()
                            responseHeaders["Access-Control-Allow-Origin"] = "*"
                            if (fileSize > 0) {
                                responseHeaders["Content-Length"] = fileSize.toString()
                            }

                            return WebResourceResponse(
                                "application/octet-stream",
                                null,
                                200,
                                "OK",
                                responseHeaders,
                                stream
                            )
                        }
                    } catch (e: Exception) {
                        Log.e("Lodestone", "Failed to open schematic stream", e)
                    }
                }

                return assetLoader.shouldInterceptRequest(url)
            }
        }

        // Forward JS console logs directly into logcat output
        binding.webviewRenderer.webChromeClient = object : WebChromeClient() {
            override fun onConsoleMessage(consoleMessage: ConsoleMessage?): Boolean {
                consoleMessage?.let {
                    Log.d("LodestoneJS", "[${it.messageLevel()}] ${it.message()} -- From line ${it.lineNumber()} of ${it.sourceId()}")
                }
                return true
            }
        }

        // Bridge communication interfaces
        binding.webviewRenderer.addJavascriptInterface(AndroidJSBridge(), "AndroidHost")

        // Append random query parameter to bypass dynamic WebView file caching aggressively
        val cacheBusterUrl = "https://appassets.androidplatform.net/web/index.html?cb=" + System.currentTimeMillis()
        binding.webviewRenderer.loadUrl(cacheBusterUrl)
    }

    private fun showRegionSelector() {
        val displayList = if (regionNamesList.isEmpty()) listOf("Region1") else regionNamesList
        val items = displayList.toTypedArray()
        AlertDialog.Builder(this)
            .setTitle(R.string.select_region)
            .setItems(items) { _, which ->
                val selectedRegion = items[which]
                binding.webviewRenderer.evaluateJavascript("switchRegion('$selectedRegion');", null)
            }
            .setNegativeButton(R.string.dialog_ok, null)
            .show()
    }

    // Inner class for JS-Android communications
    inner class AndroidJSBridge {

        @JavascriptInterface
        fun onLoadingProgress(state: String) {
            runOnUiThread {
                if (state == "READY") {
                    binding.llLoadingOverlay.visibility = View.VISIBLE
                    binding.tvLoadingStatus.setText(R.string.loading)
                    binding.webviewRenderer.evaluateJavascript("loadLitematic();", null)
                } else if (state == "SUCCESS") {
                    binding.llLoadingOverlay.visibility = View.GONE
                } else if (state.startsWith("DECODING_")) {
                    val pct = state.removePrefix("DECODING_").removeSuffix("%")
                    binding.llLoadingOverlay.visibility = View.VISIBLE
                    binding.tvLoadingStatus.text = "解析数据 $pct%"
                } else if (state.startsWith("RENDERING_")) {
                    // Remove "构建网格" prompt overlay during chunk rendering so 3D model is 100% visible
                    binding.llLoadingOverlay.visibility = View.GONE
                } else if (state.startsWith("ERROR:")) {
                    binding.llLoadingOverlay.visibility = View.GONE
                    Toast.makeText(this@PreviewActivity, state, Toast.LENGTH_LONG).show()
                }
            }
        }

        @JavascriptInterface
        fun onRegionsParsed(regionsJsonStr: String) {
            runOnUiThread {
                try {
                    val array = JSONArray(regionsJsonStr)
                    val list = mutableListOf<String>()
                    for (i in 0 until array.length()) {
                        val regionName = array.getString(i)
                        if (regionName.isNotEmpty() && regionName != "properties" && regionName != "constructor") {
                            list.add(regionName)
                        }
                    }
                    if (list.isEmpty()) {
                        list.add("Region1")
                    }
                    regionNamesList = list
                } catch (e: Exception) {
                    Log.e("Lodestone", "Failed to parse region options JSON", e)
                    regionNamesList = listOf("Region1")
                }
            }
        }

        @JavascriptInterface
        fun onStatisticsUpdated(totalBlocks: Int, statsJsonStr: String) {
            runOnUiThread {
                try {
                    binding.bottomSheetRoot.tvStatsTotal.text = getString(R.string.stats_total, totalBlocks)

                    val list = mutableListOf<Pair<String, Int>>()
                    val obj = JSONObject(statsJsonStr)
                    val keys = obj.keys()
                    while (keys.hasNext()) {
                        val key = keys.next()
                        val count = obj.getInt(key)
                        list.add(Pair(key, count))
                    }
                    statsAdapter.updateData(list)
                } catch (e: Exception) {
                    Log.e("Lodestone", "Failed to parse block statistics JSON", e)
                }
            }
        }
    }
}
