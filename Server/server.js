import express from "express";
import mongoose from "mongoose" ;
import GymProducts from './model/Suplement.js';
import UserAdminModel from './model/AdmUser.js'; // Convert this to import
import cors from "cors"



const app = express();
const port = 5000;

const corsOptions = {
  origin: 'http://localhost:3000',  // Change this to the domain where your frontend is running
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
//new passowrld okrVBONWz2iDElfd
//"mongodb+srv://redafoshi11:JCV0dbhGgXrxEchjhiTK@cluster0.jn6aciz.mongodb.net/Product?retryWrites=true&w=majority&appName=Cluster0"
mongoose
  .connect("mongodb://localhost:27017/Gymdatab")
  .then(() => {
    app.listen(port, () => {
        console.log(`Server is run in port ${port} `);
  });
  console.log("Connected !");
})

  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });


//import modle product

app.get("/Product", async (req, res) => {
 
    const products = await GymProducts.find();
    res.json(products);
    console.log(products);
    
});

app.get("/AdminUser", async (req, res) => {
  const UserAdmin = await UserAdminModel.find();
  res.json(UserAdmin);
  console.log(UserAdmin);
});

//improt modle user

// Your POST route (assuming Express.js is already set up)

app.get("/", (req, res) => {
  res.send(" home page");
});
