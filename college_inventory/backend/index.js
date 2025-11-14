import express from "express"
import mongodb from "mongodb"
import dotenv from "dotenv"
import cors from "cors"

import adminRouter from "./router/adminRouter.js"
import teacherRouter from "./router/teacherRouter.js"

dotenv.config();
const app=express()

app.use(cors())
app.use(express.json())
