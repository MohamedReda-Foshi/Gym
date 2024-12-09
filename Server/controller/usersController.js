


import asyncHandler from 'express-async-handler';
import Users from '../model/User.js';





// Fetch all products


// Get admin user
export const getUsers = asyncHandler(async (req,res)=>{

    try{
        console.log("user are requested");
        const User= await Users.find();
        console.log("user are found" );
        res.status(200).json(User);
    }catch(e){
        console.log("error while fetching user", e.message);
        res.status(500).json({message: e.message})
    }
});

// Create admin user
export const postUsers = asyncHandler ( async(req, res) => {
    
    try{

        console.log("create a AdmUser");
        const User=req.body;
        const newUser = new Users(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch(error){
        res.status(400).json({message: error.message});
    }

});


// login user
export const login = asyncHandler ( async(req, res) => {

   try{
    
        res.status(200).send("Welcome to username");        
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

// logout user
export const logout =asyncHandler(async (req,res)=>{
    try{
        res.status(200).send("logout");
    }catch(error){
        res.status(400).json({message: error.message});
    }
});




// login withe google account
export const google = asyncHandler ( async(req, res) => {

   try{

        res.status(200).send("google.com");       
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});





