const Role=require("../models/role");
const permissions=require("../config/permissions");
const Admin=require("../models/admin");
const createSuperAdmin=async()=>{

    try{
        const role=await Role.create({
            name:"super Admin",
            permissions:permissions
        });
        const admin=Admin.create({
            name:"ali hmaidi",
            email:"alihmaidi095@gmail.com",
            password:"ali450892",
            role:role._id
        });
        


    }catch(err){

        console.log(err)
    }
    
}

module.exports=createSuperAdmin;

