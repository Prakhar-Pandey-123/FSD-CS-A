import express from "express"
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"

const signUp=async (req,res)=>{
    try{
        const {name,role,age,gender,email,password}=req.body
        if(!name || !password || !email){
            return res.status(400).json({
                success:false,
                message:"every field is required"
            })
        }
        const olduser=await userModel.findOne({
            email:email
        })

        if(olduser){
             return res.status(400).json({
                success:false,
                message:"user already exists"
            })
        }
        const salt=await bcrypt.genSalt(10);
        const hashedpassword=await bcrypt.hash(password,salt);

        const newuser=await userModel.create({
            name,
            password:hashedpassword,
            email,gender,age, role
        })

        const token=jwt.sign({userId:newuser._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        );
        

         return res.status(200).json({
                success:true,
                message:"created the user",
                user:newuser,
                token
            })
        
    }
    catch(error){
        console.log("error in signup in be")
         return res.status(500).json({
                success:false,
                message:error.message
            })

    }
}


const login=async(req,res)=>{
    try{
        const {email, password}=req.body
        if(!email || !password)
             return res.status(400).json({
                success:false,
                message:"every field is required"
            })
        else{
            const user=await userModel.findOne({ email
            })
            if(!user){
                return res.status(400).json({
                    success:false,
                    message:"user not found"
                })
            }

            const isMatch=await bcrypt.compare(password,user.password);
            if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Wrong password"
            });
        }
                        
                const token=jwt.sign({userId:user._id},
                    process.env.JWT_SECRET,
                    {expiresIn:'7d'}
                );

                return res.status(200).json({
                    success:true,
                    message:"successfully logged in ",
                    token
                })
        }
    }
    catch(error){
        console.log("error in login in be")
         return res.status(500).json({
                success:false,
                message:error.message
            })
    }
}
export {login,signUp}