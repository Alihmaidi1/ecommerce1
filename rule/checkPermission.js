const permissions = require("../config/permissions");

const checkPermissions=(value)=>{
    
    for(let i=0;i<value.length;i++){


        if(!permissions.includes(value[i]))
        return false;


    }

    return true;

}

module.exports=checkPermissions;