package com.example.sih_version_3.studyMaterials

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import apiAdapter
import apiDataClassItem
import com.example.sih_version_3.R
import com.example.sih_version_3.api.communicationApiInterface
import com.example.sih_version_3.studyMaterials.communicationMaterialDetail
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class communicationMaterial : AppCompatActivity() {

    private lateinit var myAdapter: apiAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_communication_material)

        supportActionBar?.hide()

        val recyclerView = findViewById<RecyclerView>(R.id.recyclerView)

        val retrofitBuilder = Retrofit.Builder()
            .baseUrl("https://books-api-nxnu.onrender.com/api/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(communicationApiInterface::class.java)

        val retrofitData = retrofitBuilder.getProductData()

        retrofitData.enqueue(object : Callback<List<apiDataClassItem>?> {
            override fun onResponse(call: Call<List<apiDataClassItem>?>, response: Response<List<apiDataClassItem>?>) {
                if (response.isSuccessful) {
                    val responseBody = response.body()
                    if (responseBody != null) {
                        val productList = responseBody

                        myAdapter = apiAdapter(this@communicationMaterial, productList)
                        recyclerView.adapter = myAdapter
                        recyclerView.layoutManager = LinearLayoutManager(this@communicationMaterial)

                        myAdapter.setOnItemClickListener(object : apiAdapter.OnItemClickListener {
                            override fun onItemClick(item: apiDataClassItem) {
                                // Create an Intent to open the DetailActivity
                                val intent = Intent(this@communicationMaterial,communicationMaterialDetail::class.java)
                                intent.putExtra("item", item) // Use putExtra for item details
                                startActivity(intent)
                            }
                        })
                    } else {
                        // Handle the case where the response body is null
                        Log.d("ramram", "Response body is null")
                    }
                } else {
                    // Handle the case where the API response is not successful
                    Log.d("ramram", "API call failed with code: ${response.code()}")
                    Toast.makeText(this@communicationMaterial, "API call failed with code: ${response.code()}", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<List<apiDataClassItem>?>, t: Throwable) {
                // Handle API call failure
                Log.d("ramram", "on failure: ${t.message}")
                Toast.makeText(this@communicationMaterial, "on failure: ${t.message}", Toast.LENGTH_SHORT).show()
            }
        })
    }
}
