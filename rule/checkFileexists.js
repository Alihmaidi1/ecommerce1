const checkFile=(value,{req})=>{
    return (req.file)?true:false;
}

module.exports=checkFile;