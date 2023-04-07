const express=require("express");
const router=express.Router();
const auth=require("../../controller/admin/auth");
const loginValidation=require("../../validation/admin/auth/login");
const checkRefreshToken=require("../../middleware/refreshToken");
const checkToken=require("../../middleware/Auth");
router.post("/login",loginValidation.login,auth.login);
router.post("/admin/refreshToken",checkRefreshToken(process.env.REFRESH_TOKEN_KEY),auth.refreshtoken);
router.post("/admin/logout",checkToken(process.env.TOKEN_KEY),auth.logout);

module.exports=router;
