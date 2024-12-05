import express from "express";
import UserAdminModel from '../model/AdmUser.js';

const AdminUser=express()

AdminUser.use(express.json());


AdminUser.get("/adminuser", async (req, res) => {
    const UserAdmin = await UserAdminModel.find();
    res.json(UserAdmin);
  });


AdminUser.get("/addadminuser",(req,res)=>{
  res.send("test")
  const {Email,Passworld}=req.body
  
   res.json({Email,Passworld})  
})

  

  
  export default AdminUser;