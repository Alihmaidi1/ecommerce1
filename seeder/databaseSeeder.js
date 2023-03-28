const mongoose=require("mongoose");
require("dotenv").config()
const createRole=require("./createSuperAdminSeeder");
mongoose.connect(process.env.Database_URL,{

    autoIndex:true

}).then(async()=>{

    await createRole();
    console.log("Seeder Successfully")
}
)
.catch(()=>console.log("Seeder Not Work"));


