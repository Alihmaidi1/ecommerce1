const {check}=require("express-validator");
const handleError=require("../../../util/helper");
const unique=require("../../../rule/uniquedb");
const exists=require("../../../rule/existsdb");
const checkPermission=require("../../../rule/checkPermission");

exports.update=[
    check("id").exists().withMessage("id is require").custom(exists("Role","_id")),
    check("name").exists().withMessage("name is require").custom(unique("Role","name",true)),
    check("permissions").isArray().withMessage("permissions should be array").custom(checkPermission).withMessage("permission is not correct"),
     handleError.handleValidation


];