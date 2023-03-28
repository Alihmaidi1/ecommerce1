const env=require("dotenv").config();
const express=require("express");
const app=express();
const port=process.env.PORT||4001;
const cors=require("cors");
const corOption=require("./config/optionOrigin");
const path=require("path");
const image=require("./routes/images");
const database=require("mongoose");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(cors(corOption));
app.use(image);

database.connect(process.env.Database_URL).then(()=>{

    app.listen(port)

}).catch(()=>{

    console.log("we have error")
})