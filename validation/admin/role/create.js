const {check}=require("express-validator");
const handleError=require("../../../util/helper");
const unique=require("../../../rule/uniquedb");
exports.store=[
    check("name").exists().withMessage("name is require").custom( unique("Role","name")),
     handleError.handleValidation


];