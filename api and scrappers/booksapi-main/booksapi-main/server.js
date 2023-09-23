
require('dotenv').config()
const express =require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoutes');
const errorMiddleware=require('./middleware/errorMiddleWare')
const cors = require('cors')

var app=express()

const MONGO_URL = process.env.MONGO_URL

const PORT = process.env.PORT


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



//routes
app.use('/api',productRoute)

app.get('/',(req , res)=>{
   res.send("hello node api ")
})
app.get('/blog',(req , res)=>{
    res.send("hello blog i am adity api ")
})


app.use(errorMiddleware);

const mongoDB = require("./db");
mongoDB();

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  })