const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/',(req,res,next)=>{
    console.log("middleware run");
    res.sendFile(path.join(__dirname,'../','views','index.html'))
});

module.exports = router;