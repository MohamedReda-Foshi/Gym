import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv';
import { connect }  from "./config/database.js";


import Product from './routes/Product.js';
import AdminUser from './routes/AdminUser.js';
import User from './routes/User.js';
import Auth from './routes/authrouter.js';

dotenv.config();

const app = express();


const corsOptions = {
  origin: 'http://localhost:3000',  // Change this to the domain where your frontend is running
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
//new passowrld okrVBONWz2iDElfd
//"mongodb+srv://redafoshi11:JCV0dbhGgXrxEchjhiTK@cluster0.jn6aciz.mongodb.net/Product?retryWrites=true&w=majority&appName=Cluster0"


// Connect to database

await connect();


//import modle product



// Routes

app.use('/api',Product)
app.use('/api',AdminUser)
app.use('/api',User)

app.use('/auth',Auth)


//improt modle user

// Your POST route (assuming Express.js is already set up)
// Home routes

app.get("/", (req, res) => {
  res.send(" home page");
});
export default app;