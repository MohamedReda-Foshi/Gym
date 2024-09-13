
const express=require("express")

const mongoose=require("mongoose")

mongoose
    .connect("mongodb://localhost:27017/Gymdatab")
    .then(()=>{
        console.log("Connected to MongoDB")
    }).catch((err)=>{
        console.log(err);
    })

const app=express()

app.get("/",(req,res)=>{
    res.send("the home page")
})


app.listen("3000",()=>{
    console.log("Server is run in port 3000")
})