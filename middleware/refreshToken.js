const jwt=require("jsonwebtoken");
module.exports=(type)=>{

    return (req,res,next)=>{

        let refreshToken=req.body.refreshToken;
        if(!refreshToken){
    
            res.status(401).json({message:"refreshToken not found"})
        }
        
        let token=refreshToken.split(" ")[1];
        if(!token){

            res.status(401).json({message:"refreshToken format is not correct "})
        }
        try{

            let user=jwt.verify(token,type);    
            
            req.user=user
            return next()

        }catch(ex){

            res.status(401).json({message:"Invalid refreshToken"})

        }
        
    }


}
