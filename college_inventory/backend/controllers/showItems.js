import express from "express"
import itemModel from "../models/itemModel.js"

const showAllItems=async(req,res)=>{
    try{
        const allItems=await itemModel.find()
        if(allItems.length===0){
            return res.status(400).json({
                success:false,
                message:"no item added yet"
            })
        }
         return res.status(200).json({
                success:true,
                message:"showing all the items",
                allItems
            })

    }
    catch(error){
        console.log("error in showItem in be")
         return res.status(500).json({
                success:false,
                message:error.message
            })
    }
}

const showOneItem=async(req,res)=>{
    try{
        const {itemId}=req.body;
        if(!itemId){
            return res.status(400).json({
                success:false,
                message:"item id is required"
            })
        }
        const item=await itemModel.findById(itemId);
        if(!item){
            return res.status(400).json({
                success:false,
                message:"item not found"
            })
        }
        else{
            return res.status(200).json({
                success:true,
                message:"item  found",
                item,
            })
        }
    }
    catch(error){
        console.log("error in showoneitem in be ")
        return res.status(500).json({
                success:false,
                message:error.message
            })
    }
}
export {showOneItem,showAllItems};