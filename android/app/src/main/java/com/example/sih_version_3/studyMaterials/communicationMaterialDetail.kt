package com.example.sih_version_3.studyMaterials

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import apiDataClassItem
import com.example.sih_version_3.R
import com.example.sih_version_3.databinding.ActivityCommunicationMaterialDetailBinding
import com.squareup.picasso.Picasso

class communicationMaterialDetail : AppCompatActivity() {
    private lateinit var binding:ActivityCommunicationMaterialDetailBinding

    override fun onCreate(savedInstanceState: Bundle?) {

        binding  = ActivityCommunicationMaterialDetailBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        // Receiving activity
        val receivedIntent = intent
        val receivedData = receivedIntent.getParcelableExtra<apiDataClassItem>("item")

        if (receivedData != null) {
            // You have received the data, and you can use it as needed
            val name = receivedData.name
            val category = receivedData.category
            val link = receivedData.link
            val image = receivedData.image


            binding.link.loadUrl(link)
            Picasso.get().load(image).into(binding.Image)
            binding.category.text = name
            binding.name.text = name



            // Access other properties as needed
        } else {
            // Handle the case where the data is not received properly
            Toast.makeText(this ,"Bhad mai jaa ",Toast.LENGTH_SHORT).show()

        }

    }
}