
const Product=require('../models/bookSchema')
const asyncHandler=require('express-async-handler')

//get all products 
const getProducts = asyncHandler(async(req,res)=>{
    try{
        const products= await Product.find({ })
        res.status(200).json(products)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
    
})

//get single product 
const getProduct =asyncHandler(async(req,res)=>{
    try{
        const {id}=req.params
        const product= await Product.findById(id)
        res.status(200).json(product)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const getByCategory =asyncHandler(async(req,res)=>{
    try{
        const {categoryId}=req.params
        const product = await Product.find({category:{$regex:categoryId}});
        res.status(200).json(product)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

// create a product
const createProduct=asyncHandler(async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)

    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

//update aproduct 

const updateProduct =asyncHandler( async(req,res)=>{

    try{

        const {id}=req.params
        const product= await Product.findByIdAndUpdate(id ,req.body);
        //we cannot find product for update
        if(!product){
            res.status(404);
            throw new Error('cannot find product with id '+id);
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct)


    }catch(error){
        res.status(500)
        throw new Error(error.message)

    }
})

// delete product 
const deleteproduct = asyncHandler(async(req,res)=>{
    try{

        const {id}=req.params
        const product= await Product.findByIdAndDelete(id );

        if(!product){
            return res.status(404).json({message:'cannot find product with id '+id})
        }

        res.status(200).json()


    }catch{

        res.status(500)
        throw new Error(error.message)

    }
})



module.exports={
    getProducts,
    getProduct,
    getByCategory,
    createProduct ,
    updateProduct,
    deleteproduct

}