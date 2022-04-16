const mongoose = require('mongoose');
const express = require('express');

const app = express();
const DATABASE = "mongodb://mymongo:27017/testup"; // mymongo is the name of container

mongoose.connect(
    DATABASE,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
})
.then(()=>{console.log("Database Connected")})
.catch(()=>{console.log("Error in Database Connection")});

app.get("/",(req,res)=>{
    res.json({
        message:"You have reached the root route!"
    });
});

app.get(8000,()=>{
    console.log("Server running on PORT 8000");
})