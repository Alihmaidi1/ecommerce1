const sharp=require("sharp");
const path=require("path");
const helper=require("../util/helper");
exports.addImage=async(req,res,next)=>{

    try{

        let name= helper.filename(req.file,"public/temp");
        const image=await sharp(req.file.buffer).resize(400,400).toFile(name);
        res.status(200).json({name})
        console.log(req.body.name)

    }catch(err){


        res.status(400).json({message:"we have error"})

    }

}