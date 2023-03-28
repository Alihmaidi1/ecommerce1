const Sequelize=require("sequelize");
const sequelize=new Sequelize("ecomm","ecomm","password",{dialect:"mysql",host:"localhost"});
module.exports=sequelize;