


import asyncHandler from 'express-async-handler';
import Users from '../model/User.js';
import bcrypt from "bcrypt"



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
        const {email, password} =res.body;
        if(email, password){
            return res.status(400).json({message:"the email or passworld is error (is already exists)"});
        } 
        const existingUser = await Users.findOne({email});
        if(!existingUser){
            return res.status(400).json({message:"the email or passworld is error (is already exists)"});
        }

        // password
        const PasswordMatch = await bcrypt.hash(password,existingUser,password)

        const newUser = new Users({ email, password: hackedPassword });
        

        // check if password matches
        if(PasswordMatch){
            res.status(200).json({message:"login successful"});
        }else{
            return res.status(400).json({message:"pass are Password Match(PasswordMatch)"});
        }


        await newUser.save();
        // Save the new user and give him id and password 
        
        res.status(201).json({
            message: "User registered successfully!",
            user: { id: newUser._id, email: newUser.email },
        });


   }catch(error){
    res.status(400).json({message: error.message});
    }
});

// logout user
export const logout =asyncHandler(async (req,res)=>{
    try{
        res.status(200).send("logout");
    }catch(error){
        res.status(500).json({message: error.message});
    }
});



// register user 

export const register = asyncHandler (async (req,res)=>{
    try{
        const { email, password }=req.body;
        // find data for email and password 
               // check if user is already exist
            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required." });
            }
                
            const existingUser = await Users.findOne({ email });
            
            if (existingUser) {
                return res.status(400).json({ message: "Password or Email is wrong (Email already in use)." });
            }

                    // Hash password
                const hackedPassword =await bcrypt.hash(password,10);

                    // Create and save the new user
                const newUser = new Users({ email, password: hackedPassword });
                await newUser.save();
                // Save the new user and give him id and password 
                
                res.status(201).json({
                    message: "User registered successfully!",
                    user: { id: newUser._id, email: newUser.email },
                });
    }
    // handle errors 
    catch(error){
        res.status(500).send({message: error.message});
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





