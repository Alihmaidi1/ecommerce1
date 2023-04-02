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
app.use(express.static(path.join(__dirname,"public")));
app.use(cor);
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(image);
app.use(log)
app.use("/hello",(req,res,next)=>{

    res.status(200).json("hello")
    res.end()

})
app.use("/hello1",(req,res,next)=>{

    throw new Error("this is a error message")
})
app.use(errorLog)
database.connect(process.env.Database_URL).then(()=>{
    app.listen(port)
    console.log(`app is running in port ${port}`)
}).catch((err)=>{

    console.log(err)
})