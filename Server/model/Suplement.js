const mongoose = require("mongoose");

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
const GymProd = mongoose.model("GymProduct", GymProSchema);

// Export the model
module.exports = GymProd;
