import express from "express"
import itemModel from "../../models/itemModel.js"

const addItem=async(req,res)=>{
    try{
        const {name,available,quantity,takenBy,pic}=req.body
        if(!name || !quantity || !pic){
            return res.status(400).json({
                success:false,
                message:"name and quantity need to be mentioned"
            })
        }
        else{
            const newitem=new itemModel({
                name,
                quantity,
                available:available,
                takenBy:takenBy,
                pic
            });

            await newitem.save()

            return res.status(200).json({
                success:true,
                message:"item added successfully",
                newitem
            })
        }
    }
    catch(error){
        console.log("error at add item be")
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const updateItem=async(req,res)=>{
    try{
        const {name,available,quantity,takenBy,itemId}=req.body
        if(!itemId){
            return res.status(400).json({
                success:false,
                message:error.message
            })
        }
        const newitem=await itemModel.findByIdAndUpdate(itemId,{
            name:name,
            available,
            quantity,
            takenBy
        },{new:true})

       if(!newitem){
        return res.status(400).json({
            success:false,
            message:"item not found",
            newitem
        })

       }
        return res.status(200).json({
            success:true,
            message:"item updated successfully",
            newitem
        })

    }
    catch(error){
        console.log("error at updateItem be")
        return res.status(500).json({
            success:false,
            message:error.message
        })

    }
}


const deleteItem=async(req,res)=>{
    try{
        const {itemId}=req.body;
        if(!itemId) {
            return res.status(400).json({
            success:false,
            message:"item id missing"
        })
        }
        const newitem=await itemModel.findByIdAndDelete(itemId)
        if(!newitem){
            return res.status(400).json({
            success:false,
            message:"item not found"
        })

        }
        return res.status(200).json({
            success:true,
            message:"item deleted successfully"
        })
    }
    catch(error){
        console.log("error at delete item be")
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export {deleteItem,addItem,updateItem}
