package com.lodestone.preview

import android.content.Context
import android.graphics.BitmapFactory
import android.os.Handler
import android.os.Looper
import android.view.Choreographer
import android.view.MotionEvent
import android.view.ScaleGestureDetector
import android.view.SurfaceHolder
import android.view.SurfaceView
import android.view.View
import com.google.android.filament.*
import com.google.android.filament.gltfio.AssetLoader
import com.google.android.filament.gltfio.FilamentAsset
import com.google.android.filament.gltfio.Gltfio
import com.google.android.filament.gltfio.ResourceLoader
import com.google.android.filament.gltfio.UbershaderProvider
import com.google.threelive.OrbitCameraState
import java.io.InputStream
import java.nio.ByteBuffer
import java.nio.ByteOrder
import kotlin.math.cos
import kotlin.math.sin

/**
 * Native Filament rendering engine for Minecraft schematics.
 * Supports:
 * - Orbit camera (rotate, zoom, pan)
 * - First-Person Flight mode (virtual look & movement)
 * - Layer slicer (minY..maxY)
 * - Day / Night lighting modes
 * - Perspective / Orthographic projection
 * - 32MB streaming chunk generation
 */
class FilamentSchematicEngine(private val context: Context) {

    enum class CameraMode { ORBIT, FLIGHT }

    var cameraMode: CameraMode = CameraMode.ORBIT
    var isNightMode: Boolean = false
        private set
    var isOrthographic: Boolean = false
        private set

    // Slicing bounds
    var sliceMinY: Int = 0
    var sliceMaxY: Int = Int.MAX_VALUE

    // Filament core components
    private val engine: Engine
    private val renderer: Renderer
    private val scene: Scene
    private val filamentView: com.google.android.filament.View
    private val camera: Camera
    private val sunEntity: Int
    private val ambientEntity: Int

    private var surfaceView: SurfaceView? = null
    private var swapChain: SwapChain? = null
    private var viewportWidth = 1
    private var viewportHeight = 1

    private val choreographer = Choreographer.getInstance()
    private var isRendering = false

    // Orbit camera model
    val orbit = OrbitCameraState()

    // Flight camera model
    private var flightPosX = 0.0
    private var flightPosY = 10.0
    private var flightPosZ = 0.0
    private var flightYawDeg = 0.0
    private var flightPitchDeg = 0.0

    // Material and Texture
    private var atlasTexture: Texture? = null
    private var materialInstance: MaterialInstance? = null
    private var templateAsset: FilamentAsset? = null

    // Renderable Chunk Entities & Buffer allocations
    private class ChunkRenderable(
        val entity: Int,
        val vertexBuffer: VertexBuffer,
        val indexBuffer: IndexBuffer
    )
    private val chunkRenderables = mutableListOf<ChunkRenderable>()
    private var currentRegion: SchematicRegion? = null

    private val meshBuilder = ChunkMeshBuilder()

    private val frameCallback = object : Choreographer.FrameCallback {
        override fun doFrame(frameTimeNanos: Long) {
            if (!isRendering) return
            choreographer.postFrameCallback(this)
            renderFrame(frameTimeNanos)
        }
    }

    init {
        Filament.init()
        Gltfio.init()
        engine = Engine.create()
        renderer = engine.createRenderer()
        scene = engine.createScene()
        filamentView = engine.createView()
        camera = engine.createCamera(engine.entityManager.create())
        filamentView.camera = camera
        filamentView.scene = scene

        // Tone mapper & clear options (Solarized Base03: #002b36 or Night: #040810)
        filamentView.colorGrading = ColorGrading.Builder().toneMapper(ToneMapper.PBRNeutralToneMapper()).build(engine)
        updateClearColor()

        // Sunlight
        sunEntity = EntityManager.get().create()
        LightManager.Builder(LightManager.Type.DIRECTIONAL)
            .color(1f, 0.98f, 0.95f)
            .intensity(100_000f)
            .direction(0.6f, -1.0f, -0.8f)
            .castShadows(false)
            .build(engine, sunEntity)
        scene.addEntity(sunEntity)

        // Fill Light
        ambientEntity = EntityManager.get().create()
        LightManager.Builder(LightManager.Type.DIRECTIONAL)
            .color(0.85f, 0.92f, 1.0f)
            .intensity(35_000f)
            .direction(-0.6f, 0.8f, 0.5f)
            .castShadows(false)
            .build(engine, ambientEntity)
        scene.addEntity(ambientEntity)

        initMaterialAndAtlas()
    }

    private fun initMaterialAndAtlas() {
        AtlasManager.load(context)

        try {
            // Load master atlas texture
            val isStream: InputStream = context.assets.open("web/default-pack/atlas.png")
            val bitmap = BitmapFactory.decodeStream(isStream)
            val w = bitmap.width
            val h = bitmap.height

            val tex = Texture.Builder()
                .width(w)
                .height(h)
                .levels(1)
                .sampler(Texture.Sampler.SAMPLER_2D)
                .format(Texture.InternalFormat.RGBA8)
                .build(engine)

            val byteBuffer = ByteBuffer.allocateDirect(w * h * 4)
            bitmap.copyPixelsToBuffer(byteBuffer)
            byteBuffer.rewind()
            bitmap.recycle()

            tex.setImage(
                engine, 0,
                Texture.PixelBufferDescriptor(byteBuffer, Texture.Format.RGBA, Texture.Type.UBYTE)
            )
            atlasTexture = tex

            // Create Ubershader unlit material instance
            val ubershaderProvider = UbershaderProvider(engine)
            val assetLoader = AssetLoader(engine, ubershaderProvider, EntityManager.get())
            val resourceLoader = ResourceLoader(engine)
            val template = assetLoader.createAsset(GlbTemplateBuilder.createGlb())
            if (template != null) {
                resourceLoader.loadResources(template)
                template.releaseSourceData()
                templateAsset = template
                val baseMi = template.instance?.materialInstances?.firstOrNull()
                if (baseMi != null) {
                    val mi = MaterialInstance.duplicate(baseMi, "minecraft-atlas-mat")
                    if (mi.material.hasParameter("baseColorMap")) {
                        val sampler = TextureSampler(
                            TextureSampler.MinFilter.NEAREST,
                            TextureSampler.MagFilter.NEAREST,
                            TextureSampler.WrapMode.CLAMP_TO_EDGE
                        )
                        mi.setParameter("baseColorMap", tex, sampler)
                    }
                    materialInstance = mi
                }
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    fun createView(context: Context): View {
        surfaceView?.let { return it }
        val sv = SurfaceView(context)
        sv.holder.addCallback(object : SurfaceHolder.Callback {
            override fun surfaceCreated(holder: SurfaceHolder) {
                swapChain?.let { engine.destroySwapChain(it) }
                swapChain = engine.createSwapChain(holder.surface)
                startRendering()
            }

            override fun surfaceChanged(holder: SurfaceHolder, format: Int, width: Int, height: Int) {
                viewportWidth = width.coerceAtLeast(1)
                viewportHeight = height.coerceAtLeast(1)
                filamentView.viewport = Viewport(0, 0, viewportWidth, viewportHeight)
            }

            override fun surfaceDestroyed(holder: SurfaceHolder) {
                stopRendering()
                swapChain?.let {
                    engine.destroySwapChain(it)
                    engine.flushAndWait()
                }
                swapChain = null
            }
        })

        setupTouchEvents(sv)
        surfaceView = sv
        return sv
    }

    fun startRendering() {
        if (!isRendering && swapChain != null) {
            isRendering = true
            choreographer.postFrameCallback(frameCallback)
        }
    }

    fun stopRendering() {
        isRendering = false
        choreographer.removeFrameCallback(frameCallback)
    }

    fun loadRegion(region: SchematicRegion, onProgress: ((Int) -> Unit)? = null) {
        currentRegion = region
        clearChunks()

        val chunksX = (region.sizeX + 15) / 16
        val chunksY = (region.sizeY + 15) / 16
        val chunksZ = (region.sizeZ + 15) / 16
        val totalChunks = chunksX * chunksY * chunksZ
        var processed = 0

        sliceMinY = 0
        sliceMaxY = region.sizeY

        // Set orbit target & bounds
        val centerX = (region.sizeX / 2.0) + region.posX
        val centerY = (region.sizeY / 2.0) + region.posY
        val centerZ = (region.sizeZ / 2.0) + region.posZ
        val radius = Math.sqrt((region.sizeX * region.sizeX + region.sizeY * region.sizeY + region.sizeZ * region.sizeZ).toDouble()) / 2.0

        orbit.setBounds(doubleArrayOf(centerX, centerY, centerZ), Math.max(radius, 5.0))
        orbit.snap()

        flightPosX = centerX
        flightPosY = centerY
        flightPosZ = centerZ + radius * 1.5

        for (cy in 0 until chunksY) {
            for (cz in 0 until chunksZ) {
                for (cx in 0 until chunksX) {
                    val mesh = meshBuilder.buildChunkMesh(region, cx, cy, cz, sliceMinY, sliceMaxY)
                    if (mesh != null) {
                        createChunkRenderable(mesh, region.posX.toFloat(), region.posY.toFloat(), region.posZ.toFloat())
                    }
                    processed++
                    onProgress?.invoke((processed * 100) / totalChunks)
                }
            }
        }
    }

    fun updateLayerSlice(minY: Int, maxY: Int) {
        sliceMinY = minY
        sliceMaxY = maxY
        val region = currentRegion ?: return

        clearChunks()
        val chunksX = (region.sizeX + 15) / 16
        val chunksY = (region.sizeY + 15) / 16
        val chunksZ = (region.sizeZ + 15) / 16

        for (cy in 0 until chunksY) {
            for (cz in 0 until chunksZ) {
                for (cx in 0 until chunksX) {
                    val mesh = meshBuilder.buildChunkMesh(region, cx, cy, cz, sliceMinY, sliceMaxY)
                    if (mesh != null) {
                        createChunkRenderable(mesh, region.posX.toFloat(), region.posY.toFloat(), region.posZ.toFloat())
                    }
                }
            }
        }
    }

    private fun createChunkRenderable(mesh: ChunkMeshBuilder.MeshData, px: Float, py: Float, pz: Float) {
        val mat = materialInstance ?: return
        val vertexCount = mesh.positions.size / 3
        val indexCount = mesh.indices.size
        if (vertexCount == 0 || indexCount == 0) return

        val vb = VertexBuffer.Builder()
            .vertexCount(vertexCount)
            .bufferCount(3)
            .attribute(VertexBuffer.VertexAttribute.POSITION, 0, VertexBuffer.AttributeType.FLOAT3, 0, 12)
            .attribute(VertexBuffer.VertexAttribute.UV0, 1, VertexBuffer.AttributeType.FLOAT2, 0, 8)
            .attribute(VertexBuffer.VertexAttribute.COLOR, 2, VertexBuffer.AttributeType.FLOAT4, 0, 16)
            .build(engine)

        val posBuf = ByteBuffer.allocateDirect(mesh.positions.size * 4).order(ByteOrder.nativeOrder())
        posBuf.asFloatBuffer().put(mesh.positions)
        vb.setBufferAt(engine, 0, posBuf)

        val uvBuf = ByteBuffer.allocateDirect(mesh.uvs.size * 4).order(ByteOrder.nativeOrder())
        uvBuf.asFloatBuffer().put(mesh.uvs)
        vb.setBufferAt(engine, 1, uvBuf)

        val colBuf = ByteBuffer.allocateDirect(mesh.colors.size * 4).order(ByteOrder.nativeOrder())
        colBuf.asFloatBuffer().put(mesh.colors)
        vb.setBufferAt(engine, 2, colBuf)

        val ib = IndexBuffer.Builder()
            .indexCount(indexCount)
            .bufferType(IndexBuffer.Builder.IndexType.UINT)
            .build(engine)

        val idxBuf = ByteBuffer.allocateDirect(indexCount * 4).order(ByteOrder.nativeOrder())
        idxBuf.asIntBuffer().put(mesh.indices)
        ib.setBuffer(engine, idxBuf)

        val entity = EntityManager.get().create()
        RenderableManager.Builder(1)
            .boundingBox(Box(0f, 0f, 0f, 1000f, 1000f, 1000f))
            .geometry(0, RenderableManager.PrimitiveType.TRIANGLES, vb, ib, 0, indexCount)
            .material(0, mat)
            .culling(false)
            .build(engine, entity)

        val tm = engine.transformManager
        val ti = tm.getInstance(entity)
        if (ti != 0) {
            val trs = FloatArray(16)
            trs[0] = 1f; trs[5] = 1f; trs[10] = 1f; trs[15] = 1f
            trs[12] = px; trs[13] = py; trs[14] = pz
            tm.setTransform(ti, trs)
        }

        scene.addEntity(entity)
        chunkRenderables.add(ChunkRenderable(entity, vb, ib))
    }

    private fun clearChunks() {
        for (chunk in chunkRenderables) {
            scene.removeEntity(chunk.entity)
            engine.renderableManager.destroy(chunk.entity)
            EntityManager.get().destroy(chunk.entity)
            engine.destroyVertexBuffer(chunk.vertexBuffer)
            engine.destroyIndexBuffer(chunk.indexBuffer)
        }
        chunkRenderables.clear()
    }

    fun toggleCameraProjection(): Boolean {
        isOrthographic = !isOrthographic
        return isOrthographic
    }

    fun toggleDayNight(): Boolean {
        isNightMode = !isNightMode
        updateClearColor()
        val lm = engine.lightManager
        val sun = lm.getInstance(sunEntity)
        val amb = lm.getInstance(ambientEntity)
        if (isNightMode) {
            if (sun != 0) lm.setIntensity(sun, 12_000f)
            if (amb != 0) lm.setIntensity(amb, 15_000f)
        } else {
            if (sun != 0) lm.setIntensity(sun, 100_000f)
            if (amb != 0) lm.setIntensity(amb, 35_000f)
        }
        return isNightMode
    }

    fun resetCamera() {
        val region = currentRegion ?: return
        val centerX = (region.sizeX / 2.0) + region.posX
        val centerY = (region.sizeY / 2.0) + region.posY
        val centerZ = (region.sizeZ / 2.0) + region.posZ
        val radius = Math.sqrt((region.sizeX * region.sizeX + region.sizeY * region.sizeY + region.sizeZ * region.sizeZ).toDouble()) / 2.0
        orbit.setBounds(doubleArrayOf(centerX, centerY, centerZ), Math.max(radius, 5.0))
        orbit.snap()
    }

    private fun updateClearColor() {
        val bg = if (isNightMode) floatArrayOf(0.016f, 0.031f, 0.063f, 1f) else floatArrayOf(0f, 0.169f, 0.212f, 1f)
        renderer.clearOptions = Renderer.ClearOptions().apply {
            clear = true
            clearColor = bg
        }
    }

    private fun renderFrame(frameTimeNanos: Long) {
        val sc = swapChain ?: return

        if (cameraMode == CameraMode.ORBIT) {
            orbit.step(0.016, System.currentTimeMillis(), false)
            val eye = DoubleArray(3)
            val target = DoubleArray(3)
            orbit.eye(eye)
            orbit.target(target)
            camera.lookAt(eye[0], eye[1], eye[2], target[0], target[1], target[2], 0.0, 1.0, 0.0)
        } else {
            // Flight mode
            val radYaw = Math.toRadians(flightYawDeg)
            val radPitch = Math.toRadians(flightPitchDeg)
            val dirX = -sin(radYaw) * cos(radPitch)
            val dirY = sin(radPitch)
            val dirZ = -cos(radYaw) * cos(radPitch)
            camera.lookAt(
                flightPosX, flightPosY, flightPosZ,
                flightPosX + dirX, flightPosY + dirY, flightPosZ + dirZ,
                0.0, 1.0, 0.0
            )
        }

        val aspect = viewportWidth.toDouble() / viewportHeight
        val far = Math.max(orbit.boundsRadius * 40, 1000.0)

        if (isOrthographic) {
            val dist = orbit.boundsRadius * 1.5
            val halfW = dist * aspect
            val halfH = dist
            camera.setCustomProjection(
                DoubleArray(16).apply {
                    this[0] = 1.0 / halfW
                    this[5] = 1.0 / halfH
                    this[10] = -2.0 / far
                    this[14] = -1.0
                    this[15] = 1.0
                }, 0.1, far
            )
        } else {
            camera.setProjection(orbit.fieldOfViewDeg, aspect, 0.1, far, Camera.Fov.VERTICAL)
        }

        if (renderer.beginFrame(sc, frameTimeNanos)) {
            renderer.render(filamentView)
            renderer.endFrame()
        }
    }

    private fun setupTouchEvents(view: View) {
        var lastX = 0f
        var lastY = 0f

        val scaleDetector = ScaleGestureDetector(context, object : ScaleGestureDetector.SimpleOnScaleGestureListener() {
            override fun onScale(detector: ScaleGestureDetector): Boolean {
                if (cameraMode == CameraMode.ORBIT) {
                    orbit.pinch(detector.scaleFactor.toDouble(), System.currentTimeMillis())
                } else {
                    // In flight mode, pinch moves forward / back
                    val delta = (detector.scaleFactor - 1.0) * 10.0
                    val radYaw = Math.toRadians(flightYawDeg)
                    flightPosX += -sin(radYaw) * delta
                    flightPosZ += -cos(radYaw) * delta
                }
                return true
            }
        })

        view.setOnTouchListener { _, event ->
            scaleDetector.onTouchEvent(event)
            when (event.actionMasked) {
                MotionEvent.ACTION_DOWN -> {
                    lastX = event.x
                    lastY = event.y
                }
                MotionEvent.ACTION_MOVE -> {
                    val dx = (event.x - lastX).toDouble()
                    val dy = (event.y - lastY).toDouble()
                    if (event.pointerCount == 1 && !scaleDetector.isInProgress) {
                        if (cameraMode == CameraMode.ORBIT) {
                            orbit.drag(dx, dy, System.currentTimeMillis())
                        } else {
                            // Flight look
                            flightYawDeg -= dx * 0.2
                            flightPitchDeg = (flightPitchDeg - dy * 0.2).coerceIn(-89.0, 89.0)
                        }
                    } else if (event.pointerCount == 2 && !scaleDetector.isInProgress) {
                        // Pan in orbit mode or fly pan in flight mode
                        if (cameraMode == CameraMode.ORBIT) {
                            // Pan orbit
                            orbit.drag(dx * 0.5, dy * 0.5, System.currentTimeMillis())
                        } else {
                            flightPosY += dy * 0.1
                        }
                    }
                    lastX = event.x
                    lastY = event.y
                }
            }
            true
        }
    }

    fun destroy() {
        stopRendering()
        clearChunks()
        atlasTexture?.let { engine.destroyTexture(it) }
        engine.destroyRenderer(renderer)
        engine.destroyView(filamentView)
        engine.destroyScene(scene)
        engine.destroyCameraComponent(camera.entity)
        EntityManager.get().destroy(camera.entity)
        engine.destroy()
    }
}
