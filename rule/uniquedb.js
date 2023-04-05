const mongoose = require("mongoose");

const rule=(model,name)=>async(value)=>{
    
    let count=await mongoose.model(model).count({[name]:value})
    if(count!=0){
        throw new Error(`the ${name} is not unique in our database`);
    }

    
}


module.exports=rule;