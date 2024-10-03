import mongoose from 'mongoose';
// Define Schema

 
const GymProSchema = new mongoose.Schema({
  ProductName: {
    ProductName: String, 
  },
  Price: {
    Price: Number,
  },
  StorageNumber: {
    StorageNumber: Number,
  },
  Information: {
    Information: String,
  },
});
// Create a model
const GymProducts = mongoose.model("GymProduct", GymProSchema);

// Export the model
export default GymProducts;

