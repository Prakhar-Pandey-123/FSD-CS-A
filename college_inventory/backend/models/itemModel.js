import mongoose from "mongoose"

const itemSchema=new mongoose.Schema({
    name:{type:String, required:true, 
    },
    pic:{
        type:String,required:true
    },
    available:{type:Boolean,default:true,
    },
    quantity:{type:Number,required:true,
    },
    takenBy:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",//it lets u to populate
        default:null
    }]
})

const itemModel=mongoose.model("item",itemSchema)
export default itemModel
