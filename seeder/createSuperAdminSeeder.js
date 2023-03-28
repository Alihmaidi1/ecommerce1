const Role=require("../models/role");
const permissions=require("../config/permissions");


const createSuperAdmin=()=>{

    const superAdminRole=new Role({
        name:"super Admin",
        permissions:JSON.stringify(permissions)
    });
    return superAdminRole.save().then(()=>console.log("saving done")).catch(()=>console.log("error saving"))
    
}

module.exports=createSuperAdmin;

