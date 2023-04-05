const express=require("express");
const router=express.Router();
const auth=require("../../controller/admin/auth");
const loginValidation=require("../../validation/admin/auth/login");
router.post("/login",loginValidation.login,auth.login);
module.exports=router;
