const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("middleware run");
    res.send('<h1>Hello from express</h1>');
});

module.exports = router;