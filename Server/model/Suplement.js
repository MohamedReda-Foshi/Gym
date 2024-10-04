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
const GymProduct = mongoose.model("GymProducts", GymProSchema);

// Export the model
export default GymProduct;

