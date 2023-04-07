const {check}=require("express-validator");
const handleError=require("../../../util/helper");
const exists=require("../../../rule/existsdb");
exports.get=[
    check("id").exists().withMessage("id is require").custom(exists("Role","_id")),
    handleError.handleValidation


];