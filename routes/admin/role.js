const express=require("express");
const router=express.Router();
const role=require("../../controller/admin/role");
const storeValidation=require("../../validation/admin/role/create");
router.post("/role/store",storeValidation.store,role.store);
module.exports=router;
