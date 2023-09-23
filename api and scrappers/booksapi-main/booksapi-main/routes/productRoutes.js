
const express = require('express');
const router=express.Router();

const Product=require('../models/bookSchema')
const {getProducts,
    getProduct,
    getByCategory,
    createProduct,
    updateProduct,
deleteproduct}=require('../controller/Controller')


//get data 
router.get('/product',getProducts)


// specific product
router.get('/product/:id',getProduct)

//by Category
router.get('/category/:categoryId',getByCategory)

//post data 
router.post('/product',createProduct)

//updtae things
router.put('/product/:id',updateProduct)

//delete ap product
router.delete('/product/:id',deleteproduct)

module.exports=router;