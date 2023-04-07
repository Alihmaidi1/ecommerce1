const env=require("dotenv").config();
const express=require("express");
const app=express();
const port=process.env.PORT||4001;
const cor=require("./config/optionOrigin");
const path=require("path");
const image=require("./routes/images");
const database=require("mongoose");
const log=require("./config/log");
const errorLog=require("./config/errorLog");
const auth=require("./routes/admin/auth");
const role=require("./routes/admin/role");
const Auth = require("./middleware/Auth");
const permission = require("./middleware/permission");
const error=require("./middleware/error");

app.use(express.static(path.join(__dirname,"public")));
app.use(cor);
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(image);
app.use(log)

app.use(auth)
app.use(Auth(process.env.TOKEN_KEY),permission("role"),role)

app.use(errorLog)
app.use(error.notFound)

database.connect(process.env.Database_URL).then(()=>{
    app.listen(port)
    console.log(`app is running in port ${port}`)
}).catch((err)=>{

    console.log(err)
})
database.set("debug",true);