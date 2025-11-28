const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const port=process.env.PORT || 3001;

app.use(express.json());
// www.google/pages
const users=[{id:"1",uname:"admin",password:"1234"}]
app.get("/users",(req,res)=>{
    try{
        res.status(200).json({
            message:"user find successfully",users
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
})

app.get("/user/:id",(req,res)=>{
    try{
        const id=req.params.id;
        const user=users.find(u=>u.id===id);
        if(!user){
            return res.status(400).json({
                message:"cant get user"
            })
        }
        return res.status(200).json({
            success:true,
            user:user
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
})

app.post("/add",(req,res)=>{
    try{
        const newUser={
            id:users.length+1,
            ...req.body
        }
        users.push(newUser)
        return res.status(200).json({
            message:"user added"
        })
    }
    catch(error){
        res.status(500).json({
            messag:"failed to add user"
        })
    }
})

app.listen(port,()=>{
    console.log(`server is listening at the port ${port}`);
})