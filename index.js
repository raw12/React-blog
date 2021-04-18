const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin-gaurav:raw153@cluster0.tzg71.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ,
                {useNewUrlParser: true}).then(()=> console.log("DB  connected")).catch(err=> console.error(err));


app.get("/" , (req , res) =>{
    res.send("Hello");
})

app.listen(5000);