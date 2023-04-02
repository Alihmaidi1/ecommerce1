const express=require("express");
const storage=require("../config/fileSystem");
const router=express.Router();
const imageController=require("../controller/image");
const imageValidation=require("../validation/image");

router.post("/addimage",storage.single("image"),imageValidation.imageValidation,imageController.addImage);
router.get("/test1",(req,res,next)=>{
    const name=req.body;
    res.status(200).json({name:name})
    console.log(name)
});


module.exports=router;