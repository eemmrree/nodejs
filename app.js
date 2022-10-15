const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("middleware 1 run");
    next();
});

app.use((req,res,next)=>{
    console.log("middleware 2 run");
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000,()=>{
    console.log('listening on port 3000')
});