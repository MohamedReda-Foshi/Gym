import mongoose from 'mongoose';

const UsAdmSchema =new mongoose.Schema({
    AdUserFirstName:{
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

const UserAdminModel=mongoose.model("AdminUser",UsAdmSchema);

export default UserAdminModel;