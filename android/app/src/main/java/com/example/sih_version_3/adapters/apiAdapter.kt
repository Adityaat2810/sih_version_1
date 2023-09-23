import android.app.Activity
import android.content.Intent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.sih_version_3.R
import com.google.android.material.imageview.ShapeableImageView
import com.squareup.picasso.Picasso

class apiAdapter(
    val context: Activity,
    val productArrayList: List<apiDataClassItem>
) : RecyclerView.Adapter<apiAdapter.MyViewHolder>() {

    // Interface for item click listener
    interface OnItemClickListener {
        fun onItemClick(item: apiDataClassItem)
    }

    private var itemClickListener: OnItemClickListener? = null

    fun setOnItemClickListener(listener: OnItemClickListener) {
        itemClickListener = listener
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        val itemView = LayoutInflater.from(context)
            .inflate(R.layout.each_row, parent, false)
        return MyViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return productArrayList.size
    }

    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
        val currentItem = productArrayList[position]
        holder.title.text = currentItem.name
        // image view, image in image view if the image is in the form of a URL
        // use Picasso
        Picasso.get().load(currentItem.image).into(holder.imageView)

        // Set click listener for the item
        holder.itemView.setOnClickListener {
            itemClickListener?.onItemClick(currentItem)
        }
    }

    class MyViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val title: TextView
        val imageView: ShapeableImageView

        init {
            title = itemView.findViewById(R.id.productTitle)
            imageView = itemView.findViewById(R.id.productImage)
        }
    }
}
