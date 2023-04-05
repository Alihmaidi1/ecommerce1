const path=require("path");
const {validationResult}=require("express-validator");
const jwt=require("jsonwebtoken");

exports.filename=(file,folder)=>{

    return `${folder}/${Date.now()}${path.extname(file.originalname)}`
    
}


exports.handleValidation= (req,res,next)=>{
    
    
    let error= validationResult(req);    
    if(!error.isEmpty()){
        error=error.array().map(object=>object.msg)
        return res.status(422).json(error)
    }

    next()
}


exports.generateToken=(id,secret,time)=>{

    return jwt.sign({id:id},secret,{expiresIn:time});


}

