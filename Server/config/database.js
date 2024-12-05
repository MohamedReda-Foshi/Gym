import mongoose from "mongoose" ;
import dotenv from "dotenv";
import Product from '../routes/Product.js';
import app from '../server.js'; 



dotenv.config();



export function  connect ()
{
    mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
      console.log("Database connected!");    
  

  
    // Start the server after a successful connection.
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port `,process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
};
