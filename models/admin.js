const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const bcrypt=require("bcrypt");
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
        required:true,
        set:(pass)=>bcrypt.hashSync(pass,10)
    
    },

    logo:{

        type:String
    },

    role:{

        type:mongoose.Types.ObjectId,
        ref:"Role"
    },       

},{
    versionKey:false,
    toJSON:{

        transform:(doc,ret)=>{
            delete ret.password;
            return ret;
        }

    }
});

Admin.statics.login=async function login(email,password){

    
    let user= await this.findOne({email}).populate("role");
    if(user!=null&&bcrypt.compareSync(password,user.password)){
        return user;
    }

    return null;


}




module.exports=mongoose.model("Admin",Admin);