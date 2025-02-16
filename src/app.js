//express module import krliya
const express = require("express");

//express ke saare functionalities ko app main daal diya
const app = express();


//automatic port ke liye otherwise manual
const port = process.env.PORT || 4000;

//home page servicing
app.get('/',(req,res) =>{
    res.send("heloo from sachin");
});

// server bna rhe h

app.listen(port ,(req,res)=>{
    console.log("server ban gya h guys");
});