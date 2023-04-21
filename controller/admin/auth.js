const role=require("../../models/role");
const admin=require("../../models/admin");
const util=require("../../util/helper");
const redis=require("../../config/redis");
exports.login=async(req,res,next)=>{

    
    let email=req.body.email;
    let password=req.body.password;
    let user=await admin.login(email,password);
    if(user!=null)
    {
        let token=await util.generateToken(user.id,process.env.TOKEN_KEY,"1h");
        let refreshToken=await util.generateToken(user.id,process.env.REFRESH_TOKEN_KEY,"1d");

        res.status(200).json({refreshToken,token,user})    
    }else{

        res.status(401).json({message:"the email or password is not correct"})

    }




}


exports.refreshtoken=(req,res,next)=>{

    let token=util.generateToken(req.user.id,process.env.TOKEN_KEY,"1h");        
    let refreshToken=util.generateToken(req.user.id,process.env.REFRESH_TOKEN_KEY,"1d");        
    res.status(200).json({refreshToken,token})    




}


exports.logout=async(req,res,next)=>{


        let token=req.get("Authorization").split(" ")[1];
        await redis.del(token)
        
        res.status(200).json({message:"you are logout successfully"})



}