const Role=require("../models/role");
const permissions=require("../config/permissions");
const Admin=require("../models/admin");
const bcrypt=require("bcrypt");
const createSuperAdmin=async()=>{

    try{
        const role=await Role.create({
            name:"super Admin",
            permissions:JSON.stringify(permissions)
        });

        const admin=Admin.create({
            name:"ali hmaidi",
            email:"alihmaidi095@gmail.com",
            password:bcrypt.hashSync("ali450892",10),
            role_id:role.id
        });


    }catch(err){

        console.log(err)
    }
    
}

module.exports=createSuperAdmin;

