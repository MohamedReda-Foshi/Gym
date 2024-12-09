import asyncHandler from 'express-async-handler';
import AdminUser from '../model/AdmUser.js';






// Fetch all products


// Get admin user
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

// Create admin user
export const postAdmUser = asyncHandler ( async(req, res) => {
    
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



// Delete admin user
/*
export const deleteAdmUser = asyncHandler(async (req, res) => {
    try {
        const AdmUser = await AdminUser.findByIdAndDelete(req.params.id);

        if (!AdmUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

*/

// Update admin user






// get user








