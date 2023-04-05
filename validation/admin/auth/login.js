const {check}=require("express-validator");
const handleError=require("../../../util/helper");
const existsdb=require("../../../rule/existsdb");
exports.login=[
    check("email").exists().withMessage("email is require").isEmail().withMessage("this field should be email"),
    handleError.handleValidation


];