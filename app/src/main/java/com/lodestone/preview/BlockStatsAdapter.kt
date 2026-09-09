package com.lodestone.preview

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class BlockStatsAdapter(
    private var statsList: List<Pair<String, Int>>
) : RecyclerView.Adapter<BlockStatsAdapter.StatsViewHolder>() {

    fun updateData(newStats: List<Pair<String, Int>>) {
        statsList = newStats.sortedByDescending { it.second }
        notifyDataSetChanged()
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): StatsViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_block_stats, parent, false)
        return StatsViewHolder(view)
    }

    override fun onBindViewHolder(holder: StatsViewHolder, position: Int) {
        val (name, count) = statsList[position]
        holder.bind(name, count)
    }

    override fun getItemCount(): Int = statsList.size

    class StatsViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private val tvBlockName: TextView = itemView.findViewById(R.id.tv_block_name)
        private val tvBlockCount: TextView = itemView.findViewById(R.id.tv_block_count)

        fun bind(name: String, count: Int) {
            tvBlockName.text = name
            tvBlockCount.text = String.format("%,d", count)
        }
    }
}
