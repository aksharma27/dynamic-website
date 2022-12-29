const express = require('express');
const mongoose = require('mongoose');
const Detail = require('../models/Detail');


const DetailController = Detail.create({
    brandName : "Abhishek",
    brandIconUrl: "https://avatars.githubusercontent.com/u/83135634?v=4",
    links: [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "Services",
            url:"/services"
        },
        {
            label: "About Us",
            url: "/about"
        },
        {
            label: "Contact Us",
            url: "/contact"  
        },{
            label: "Gallery",
            url: "/gallery"
        }
    ]
});

module.exports = DetailController;