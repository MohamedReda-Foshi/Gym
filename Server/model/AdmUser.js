import mongoose from 'mongoose';

const UsAdmSchema =new mongoose.Schema({
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

const UserAdminModel=mongoose.model("adminUser",UsAdmSchema);

export default UserAdminModel;