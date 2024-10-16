import express from "express";
import GymProducts from "../model/Suplement.js";

const proapp = express();

// Middleware to parse JSON request bodies
proapp.use(express.json());







// Get a limited number of products
proapp.get("/Product", async (req, res) => {
  const products = await GymProducts.find().limit(3);
  res.json(products);
});

// Get all products
proapp.get("/Allproducts", async (req, res) => {
  const products = await GymProducts.find();
  res.json(products);
});









// Add a product
proapp.post("/creatproduct", async (req, res) => {
  console.log("Request body:", req.body); // Log the request body
  
  const { name, price, info } = req.body;  // Parsing from the request body

  if (!name || !price || !info) {
    return res.status(400).json({ error: "Missing product information" });
  }

  try {
    const newProduct = await GymProducts.create({
      ProductName: name,
      Price: price,
      StorageNumber: 50,
      Information: info,
    });
    
    res.json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error); // Log the error
    res.status(500).json({ error: "Error creating product" });
  }
});

export default proapp;
