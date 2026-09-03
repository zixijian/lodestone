package com.lodestone.preview

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import java.io.File

class FileAdapter(
    private var files: List<File>,
    private val onItemClick: (File) -> Unit
) : RecyclerView.Adapter<FileAdapter.FileViewHolder>() {

    fun updateData(newFiles: List<File>) {
        files = newFiles.sortedWith(compareBy({ !DirectoryHelper.isItemDirectory(it) }, { it.name.lowercase() }))
        notifyDataSetChanged()
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): FileViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_file, parent, false)
        return FileViewHolder(view)
    }

    override fun onBindViewHolder(holder: FileViewHolder, position: Int) {
        val file = files[position]
        holder.bind(file, onItemClick)
    }

    override fun getItemCount(): Int = files.size

    class FileViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private val ivIcon: ImageView = itemView.findViewById(R.id.iv_icon)
        private val tvName: TextView = itemView.findViewById(R.id.tv_name)
        private val tvInfo: TextView = itemView.findViewById(R.id.tv_info)

        fun bind(file: File, onItemClick: (File) -> Unit) {
            tvName.text = file.name
            if (DirectoryHelper.isItemDirectory(file)) {
                ivIcon.setImageResource(android.R.drawable.ic_menu_directions)
                tvInfo.text = itemView.context.getString(R.string.folder_tag)
            } else {
                ivIcon.setImageResource(android.R.drawable.ic_menu_gallery)
                val size = file.length()
                tvInfo.text = formatFileSize(size)
            }

            itemView.setOnClickListener { onItemClick(file) }
        }

        private fun formatFileSize(size: Long): String {
            val context = itemView.context
            return when {
                size < 1024 -> context.getString(R.string.file_size_bytes, size.toString())
                size < 1024 * 1024 -> context.getString(R.string.file_size_kb, size.toDouble() / 1024.0)
                else -> context.getString(R.string.file_size_mb, size.toDouble() / (1024.0 * 1024.0))
            }
        }
    }
}
