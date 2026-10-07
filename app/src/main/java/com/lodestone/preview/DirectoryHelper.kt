package com.lodestone.preview

import java.io.File

object DirectoryHelper {
    private val standardFolders = setOf("Download", "Documents", "DCIM", "Pictures", "Music", "Movies")
    private val standardSubFolders = mapOf(
        "Download" to setOf("Telegram", "WeChat", "Browser"),
        "Documents" to setOf("WPS", "Reader"),
        "DCIM" to setOf("Camera", "Screenshots"),
        "Pictures" to setOf("Screenshots", "Instagram"),
        "Music" to setOf("Playlists"),
        "Movies" to setOf("Video")
    )

    fun isItemDirectory(file: File): Boolean {
        if (file.isDirectory) return true

        val name = file.name
        val parent = file.parentFile
        if (parent != null) {
            val parentName = parent.name
            // Check if it's a first-level standard folder
            if (standardFolders.contains(name)) {
                return true
            }
            // Check if it's a second-level standard folder
            if (standardFolders.contains(parentName)) {
                val allowedSubs = standardSubFolders[parentName]
                if (allowedSubs != null && allowedSubs.contains(name)) {
                    return true
                }
            }
        }
        return false
    }

    fun getMockSubFiles(currentDir: File, rootDir: File): List<File> {
        val currentNorm = currentDir.canonicalPath.removeSuffix("/")
        val rootNorm = rootDir.canonicalPath.removeSuffix("/")

        if (currentNorm == rootNorm) {
            // Root level: return all first-level standard folders
            return standardFolders.map { File(currentDir, it) }
        }

        // Check if currentDir is one of standard folders
        val parent = currentDir.parentFile
        if (parent != null) {
            val parentNorm = parent.canonicalPath.removeSuffix("/")
            if (parentNorm == rootNorm) {
                val dirName = currentDir.name
                val subs = standardSubFolders[dirName]
                if (subs != null) {
                    return subs.map { File(currentDir, it) }
                }
            }
        }

        return emptyList()
    }
}
