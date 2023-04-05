const role=require("../../models/role");
const admin=require("../../models/admin");
const util=require("../../util/helper");
exports.login=async(req,res,next)=>{

    
    let email=req.body.email;
    let password=req.body.password;
    let user=await admin.login(email,password);
    if(user!=null)
    {
        let token=util.generateToken(user.id,process.env.TOKEN_KEY,"1h");        
        let refreshToken=util.generateToken(user.id,process.env.REFRESH_TOKEN_KEY,"1d");        
        res.status(200).json({refreshToken,token,user})    
    }else{

        res.status(401).json({message:"the email or password is not correct"})

    }




}