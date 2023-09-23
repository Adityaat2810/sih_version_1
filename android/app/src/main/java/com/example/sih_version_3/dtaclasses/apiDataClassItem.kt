import android.os.Parcel
import android.os.Parcelable

data class apiDataClassItem(
    val __v: Int,
    val _id: String,
    val category: String,
    val createdAt: String,
    val image: String,
    val link: String,
    val name: String,
    val updatedAt: String
) : Parcelable {
    constructor(parcel: Parcel) : this(
        parcel.readInt(),
        parcel.readString() ?: "",
        parcel.readString() ?: "",
        parcel.readString() ?: "",
        parcel.readString() ?: "",
        parcel.readString() ?: "",
        parcel.readString() ?: "",
        parcel.readString() ?: ""
    )

    override fun writeToParcel(parcel: Parcel, flags: Int) {
        parcel.writeInt(__v)
        parcel.writeString(_id)
        parcel.writeString(category)
        parcel.writeString(createdAt)
        parcel.writeString(image)
        parcel.writeString(link)
        parcel.writeString(name)
        parcel.writeString(updatedAt)
    }

    override fun describeContents(): Int {
        return 0
    }

    companion object CREATOR : Parcelable.Creator<apiDataClassItem> {
        override fun createFromParcel(parcel: Parcel): apiDataClassItem {
            return apiDataClassItem(parcel)
        }

        override fun newArray(size: Int): Array<apiDataClassItem?> {
            return arrayOfNulls(size)
        }
    }
}
