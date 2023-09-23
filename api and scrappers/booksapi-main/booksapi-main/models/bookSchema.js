const mongoose = require('mongoose')

const bookSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Plese enter the product name"]
        },
        category:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        },
     
        image:{
            type:String,
            require:false
        }
    },
    {
        timestamps:true
    }
)

const product = mongoose.model('Product',bookSchema);
module.exports=product;