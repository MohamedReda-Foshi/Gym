import { Router } from 'express';
import { getProduct, getProducts , postProduct} from '../controller/productController.js';

// Middleware to parse JSON request bodies


const router = Router();

// Get a limited number of products
router.get('/product', getProduct);
// post a product
router.post('/createproduct', postProduct);

// Get all products
router.get("/products",getProducts);











// Add a product




export default router;

/*
router.post("/creatproduct", async (req, res) => {
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
*/
