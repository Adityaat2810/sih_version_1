package com.example.sih_version_3.api

import apiDataClassItem
import com.example.sih_version_3.dtaclasses.apiDataClass
import retrofit2.Call
import retrofit2.http.GET

interface communicationApiInterface {

    @GET("product")     // end point of an api
    fun getProductData(): Call<List<apiDataClassItem>>
}