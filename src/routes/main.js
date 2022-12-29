const express = require('express');
const mongoose = require('mongoose');
const main = express.Router();
const Detail = require('../models/Detail');


main.get('/',async (req, res)=>{
    // res.send("main home");
    const details = await Detail.findOne({"_id": "63acec2aae98a73e8dfa8b99"});
    console.log(details);

    res.render("index", {
        detailsOfDb : details 
    })
});

main.get('/gallery', (req, res)=>{
    res.send('gallery');
})



module.exports = main;