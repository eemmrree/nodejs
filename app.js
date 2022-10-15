const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/api/products',(req,res)=>{
    res.send('products')
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})