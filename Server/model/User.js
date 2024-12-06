import mongoose from 'mongoose';

const UseSchema =new mongoose.Schema({
    AdUserName:{
        type:String,
    },
    AdUserLastName:{
        type:String,
    },

    Email:{
        type:String,
    },
    Passworld:{
        type:String,
    },

});

const UseSchemaModel=mongoose.model("user",UseSchema);

export default UseSchemaModel;