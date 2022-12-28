const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const   PORT = process.env.PORT;

const main = require('./src/routes/main');



const app = express();

app.use('/main', main);

//template engine (ejs)
app.set('view engine', 'ejs');




app.listen(PORT || 3000, ()=>{
    console.log("listening on port " + PORT); 
})



