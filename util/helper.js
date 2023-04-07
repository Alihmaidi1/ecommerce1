const path=require("path");
const {validationResult}=require("express-validator");
const jwt=require("jsonwebtoken");
// const redis=require("../config/redis");
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


exports.generateToken=async(id,secret,time)=>{

    let token=jwt.sign({id:id},secret,{expiresIn:time});
    // if(secret==process.env.TOKEN_KEY){ //cache only token ... not refresh token

    //     await redis.set(token,id);
    //     await redis.expire(token,3600);

    // }
    return token;

}



