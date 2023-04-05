const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Role=new Schema({

    name:{

        type:String,
        required:true,
        unique:true

    },
    permissions:{

        type:Object,
        required:true,
        get:(permissions)=>JSON.parse(permissions),
        set:(permissions)=>JSON.stringify(permissions)

    }
    


},{
    versionKey:false,
    toJSON:{getters:true},
    id:false
   }
);


module.exports=mongoose.model("Role",Role);