import express from "express"
import {deleteItem,addItem,updateItem}  from "../controllers/admin/adminControllers.js"
import { authMiddleware, isAdmin } from "../middlewares/authAdmin.js";

const adminRouter=express.Router()

adminRouter.post("/delete-item",authMiddleware,isAdmin,deleteItem);
adminRouter.post("/add-item",authMiddleware,isAdmin,addItem);
adminRouter.post("/update-item",authMiddleware,isAdmin,updateItem);

export default adminRouter
