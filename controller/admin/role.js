const admin = require("../../models/admin");
const RoleModel = require("../../models/role");

exports.store=async(req,res,next)=>{

    let name=req.body.name;
    let permissions=req.body.permissions;
    let role=await RoleModel.create({
        name:name,
        permissions:permissions
    });
    res.status(200).json(role)

}

exports.update=async(req,res,next)=>{

    let id=req.query.id;
    let name=req.query.name;
    let permissions=req.query.permissions;
    let role=await RoleModel.findByIdAndUpdate(id,{name,permissions});
    res.status(200).json(role)


}
exports.get=async(req,res,next)=>{

    let id=req.params.id;
    let role=await RoleModel.findById(id).lean({getters:true});

    role.admins=await admin.find({role:id}).select("-role")    
    res.status(200).json({role})


}


exports.all=async (req,res,next)=>{


    let roles=await RoleModel.find().populate("admins");
    res.status(200).json(roles)
}


exports.delete=async(req,res,next)=>{

    let id=req.query.id;
    let role=await RoleModel.findByIdAndDelete(id)
    res.status(200).json({message:"the role was deleted successfully"});

}