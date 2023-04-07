const express=require("express");
const router=express.Router();
const role=require("../../controller/admin/role");
const storeValidation=require("../../validation/admin/role/create");
const updateValidation=require("../../validation/admin/role/update");
const getValidation=require("../../validation/admin/role/get");
// const cache=require("../../config/cacheRedis");

router.post("/role/store",storeValidation.store,role.store).
put("/role/update",updateValidation.update,role.update).
get("/role/get/:id",getValidation.get,role.get).
get("/role/all",role.all).
delete("/role/delete",getValidation.get,role.delete)


module.exports=router;
