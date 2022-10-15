const express = require("express");
const app = express();

var count = 0;
app.use('/',(req,res,next)=>{
    count++;
    console.log("log-" +count);
    next();
});

app.use('/add-product',(req,res,next)=>{
    res.send('<h1>Hello from express adding product</h1>');
});

app.use('/add-list',(req,res,next)=>{
    res.send('<h1>Hello from express product list</h1>');
});

app.use('/',(req,res,next)=>{
    console.log("middleware run");
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000,()=>{
    console.log('listening on port 3000')
});