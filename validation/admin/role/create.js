const {check}=require("express-validator");
const handleError=require("../../../util/helper");
const unique=require("../../../rule/uniquedb");
const checkPermission=require("../../../rule/checkPermission");
exports.store=[
    check("name").exists().withMessage("name is require").custom( unique("Role","name")),
    check("permissions").isArray().withMessage("permissions should be array").custom(checkPermission).withMessage("permission is not correct"),
     handleError.handleValidation


];