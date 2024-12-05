import mongoose from 'mongoose';

const GymProductSchema = new mongoose.Schema({
  ProductName: {
    type: String,
    required: true
},
Price: {
    type: String,
    required: true
},
Information: {
    type: String,
    required: true
}
});

export default mongoose.model("Product", GymProductSchema);