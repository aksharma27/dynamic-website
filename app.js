const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const   PORT = process.env.PORT;
dotenv.config({path : './config.env'});
const main = require('./src/routes/main');
const DB = process.env.DB;
const DetailController = require('./src/controllers/DetailController');



const app = express();
app.use(express.json());
mongoose.connect(DB, ()=>{
    console.log("db connected");
});
// DetailController;

//template engine (ejs)
app.set('view engine', 'ejs');
//static files
app.use('/static', express.static('public'));


// app.get('/', (req, res)=>{
//     res.render('index');
// });
app.get('/gallery', (req, res)=>{
    res.render('gallery');
})


app.use('/main', main);







app.listen(PORT || 3000, ()=>{
    console.log("listening on port " + PORT); 
})



