const {check}=require("express-validator");

const checkFile=require("../rule/checkFileexists");
const handleError=require("../util/helper");
exports.imageValidation=[
    check("image").custom(checkFile).withMessage("the file is required"),
    handleError.handleValidation

];