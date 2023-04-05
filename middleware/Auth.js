const jwt=require("jsonwebtoken");
module.exports=(type)=>{

    return (req,res,next)=>{

        let headerAuth=req.get("Authorization");
        if(!headerAuth){
    
            res.status(401).json({message:"token not found"})
        }
        
        let token=headerAuth.split(" ")[1];
        if(!token){

            res.status(401).json({message:"token format is not correct "})
        }
        try{

            let user=jwt.verify(token,type);    
            
            req.user=user
            return next()

        }catch(ex){

            res.status(401).json({message:"Invalid token"})

        }
        
    }


}
