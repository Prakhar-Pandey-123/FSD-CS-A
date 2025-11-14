import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{
        type:String,required:true },
    role:{
        type:String,enum:["admin","teacher"],default:"admin"},
    age:{
        type:Number,default:25
    },
    password:{type:String,required:true,
    },
    gender:{type:String,
        enum:["male","female","rather not say"],default:"male"
    },
    email:{
        type:String,required:true,unique:true
    }
})

const userModel=mongoose.model("user",userSchema)
export default userModel;