import express from "express"
import itemModel from "../../models/itemModel.js";
import userModel from "../../models/userModel.js";

const lendItem=async(req,res)=>{
    try{
        const {itemId,userId}=req.body;
        if(!itemId || !userId){
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            })
        }
        const item=await itemModel.findById(itemId);
        if(!item || item.available===false || item.quantity<=0){
            return res.status(400).json({
                success:false,
                message:"item not available"
            })
        }
        const teacher=await userModel.findById(userId);
        if(!teacher){
            return res.status(400).json({
                success:false,
                message:"teacher not found"
            })
        }

        item.quantity=item.quantity-1;
        if(item.quantity===0) 
            item.available=false;
        item.takenBy.push(userId);
        await item.save();

         return res.status(200).json({
                success:true,
                message:"lended item successfully",
                item
            })
    }
    catch(error){
        console.log("error in lenditem")
         return res.status(500).json({
                success:false,
                message:error.message
            })
    }
}

const itemSubmit=async(req,res)=>{
    try {
        const {itemId,userId}=req.body;
        if(!itemId || !userId){
            return res.status(400).json({
            success:false,
            message:"ALL FILEDS ARE REQ IN itemsubmit"
        })
    }
    
        const item=await itemModel.findById(itemId);
        if(!item){
            return res.status(500).json({
            success:false,
            message:"item not found in be"
        })
    }
        const user=await userModel.findById(userId);
        if(!user){
             return res.status(400).json({
            success:false,
            message:"user not found in be"
        })
        }
        // if user didnt lend the item then he cant submit it

        if(!item.takenBy.includes(userId)){
            return res.status(400).json({
                success:false,
                message:"user has not borrowed the item"
            })
        }
        item.quantity=item.quantity+1;
        item.available=true;
        item.takenBy.pull(userId);
        await item.save();

         return res.status(200).json({
            success:true,
            message:"item submitted",
            item
        })

        
    } catch (error) {
        console.log("item submit me error")
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export {lendItem,itemSubmit}
