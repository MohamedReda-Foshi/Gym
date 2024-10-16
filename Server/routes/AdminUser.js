import express from "express";
import UserAdminModel from '../model/AdmUser';

const AdminUser=express()


AdminUser.get("/AdminUser", async (req, res) => {
    const UserAdmin = await UserAdminModel.find();
    res.json(UserAdmin);
  });
  

  
  export default AdminUser;