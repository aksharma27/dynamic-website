const express = require('express');
const main = express.Router();


main.get('/', (req, res)=>{
    res.send("main home")
});

main.get('/gallery', (req, res)=>{
    res.send('gallery');
})



module.exports = main;