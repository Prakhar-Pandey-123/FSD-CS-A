import express from "express"
import {lendItem,itemSubmit} from "../controllers/teacher/teacherControllers.js"
import { authMiddleware, isTeacher } from "../middlewares/authAdmin.js"

const teacherRouter=express.Router()

teacherRouter.post("/lend-item",authMiddleware,isTeacher,lendItem);
teacherRouter.post("/item-submit",authMiddleware,isTeacher,itemSubmit);
export default teacherRouter
