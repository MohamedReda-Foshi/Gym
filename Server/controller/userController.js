import asyncHandler from 'express-async-handler';
import AdminUser from '../model/AdmUser.js';


// Fetch all products


export const getAdmUsers = asyncHandler(async (req,res)=>{

    try{
        console.log("admin user are requested");
        const AdmUser= await AdminUser.find();
        console.log("user are found" );
        res.status(200).json(AdmUser);
    }catch(e){
        console.log("error while fetching user", e.message);
        res.status(500).json({message: e.message})
    }
});

export const postAdmProduct = asyncHandler ( async(req, res) => {
    
    try{

        console.log("create a AdmUser");
        const AdmUser=req.body;
        const newAdmUser = new AdminUser(req.body);
        await newAdmUser.save();
        res.status(201).json(newAdmUser);
    } catch(error){
        res.status(400).json({message: error.message});
    }

});