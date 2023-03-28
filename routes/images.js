const express=require("express");
const storage=require("../config/fileSystem");
const router=express.Router();
const imageController=require("../controller/image");
const imageValidation=require("../validation/image");

router.post("/addimage",storage.single("image"),imageValidation.imageValidation,imageController.addImage);


module.exports=router;