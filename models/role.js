const mongoose=require("mongoose");
const mongooseLeanGetters = require('mongoose-lean-getters');

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

    },
    admins:{
        type:[

        {
            type:Schema.Types.ObjectId,
            ref:"Admin",
            select:false,
            
            
        },
        
    ],
    select:false
    
}
    


},{
    versionKey:false,
    toJSON:{
        getters:true
        
        
        
},
    id:false
   }
);

Role.plugin(mongooseLeanGetters);
module.exports=mongoose.model("Role",Role);