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
        required:true

    },
    admins:[

        {

            id:{

                required:true,
                type:mongoose.Types.ObjectId,
                ref:"Admin"
            }

        }

    ]


});


module.exports=mongoose.model("Role",Role);