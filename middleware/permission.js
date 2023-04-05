const Admin=require("../models/admin");
module.exports=(permission)=>{

    return async(req,res,next)=>{

        let id=req.user.id;
        let admin=await Admin.findById(id).populate("role");
        let permissions=admin.role.permissions;
        if(permissions.indexOf(permission)!=-1){

            return next()
        }

        res.status(403).json({message:"you dont have permission to do this action"})
        

    }



}