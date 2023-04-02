const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Admin=new Schema({


    name:{

        type:String,
        required:true

    },
    email:{

        type:String,
        required:true,
        unique:true
    },

    password:{

        type:String,
        required:true
    },

    logo:{

        type:String
    },

    role_id:{

        type:mongoose.Types.ObjectId,
        required:true,
        ref:"Role"
    }





});


module.exports=mongoose.model("Admin",Admin);