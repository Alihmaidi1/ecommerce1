const mongoose = require("mongoose");

const rule=(model,name,expect=false)=>async(value,{req})=>{
    
    let count;
    if(expect){

        let id=req.query.id;
        count=await mongoose.model(model).count({[name]:value}).where("_id").ne(id);


    }else{

        count=await mongoose.model(model).count({[name]:value})

    }
    
    if(count!=0){
        throw new Error(`the ${name} is not unique in our database`);
    }

    
}


module.exports=rule;