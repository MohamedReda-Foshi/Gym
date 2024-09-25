const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

app.use(express.json());

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
const GymProd = require("./model/Suplement");
const UserAdminModel = require("./model/AdmUser");

app.get("/Product", async (req, res) => {
 
    const products = await GymProd.find();
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
