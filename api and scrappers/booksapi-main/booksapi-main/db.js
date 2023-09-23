require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL

//install mongodb mongose express nodemon
//for nodeon in vite remove module in packagejson
//remove <> in username password
//?after this your databse naeme
async function connectToMongoDB() {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    console.log("Connected to MongoDB..at last");
   
    

}
  catch(err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}
module.exports = connectToMongoDB;
