import express from "express"
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";

const authMiddleware=async(req,res,next)=>{
    try {
        const token=req.headers.token;
        if(!token){
            return res.status(400).json({
                success:false,
                message:"token is missing in be"
            })
        }
        const verified=jwt.verify(token,process.env.JWT_SECRET);

        const user=await userModel.findById(verified.userId);
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user not found in authMidlleware"
            })
        }
        req.user=user
        
        next();
        
    } catch (error) {
        console.log("error in authMIDLLER WARE, in be")
         return res.status(500).json({
                success:false,
                message:error.message
            })
        
    }
    
}

const isAdmin=async(req,res,next)=>{
    
    const role=req.user.role;
    if(role!=="admin"){
        return res.status(400).json({
            success:false,
            message:"not an admin"
        })
    }
    next();
}
const isTeacher=async(req,res,next)=>{
    const role=req.user.role
    if(role!=="teacher"){
         return res.status(400).json({
            success:false,
            message:"not a teacher"
        })
    }
    next()
}

export {isAdmin,isTeacher,authMiddleware}