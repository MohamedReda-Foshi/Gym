import mongoose from 'mongoose';
// Define Schema

 
const GymProSchema = new mongoose.Schema({
  ProductName: { type: String, required: true },
  Price: { type: Number, required: true },
  StorageNumber: { type: Number, default: 50 },
  Information: { type: String, required: true },

});
// Create a model
const GymProduct = mongoose.model("GymProducts", GymProSchema);

// Export the model
export default GymProduct;

