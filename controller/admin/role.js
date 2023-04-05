const RoleModel = require("../../models/role");

exports.store=async(req,res,next)=>{

    let name=req.body.name;
    let permissions=req.body.permissions;
    let role=await RoleModel.create({
        name:name,
        permissions:JSON.stringify(permissions)
    });
    res.status(200).json(role)

}