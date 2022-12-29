const mongoose = require('mongoose');
let detail = mongoose.Schema({
    brandName : {
        type: String
    }, 
    brandIconUrl: String, 
    links: [
        {
            label: String,
            url: String
        },
    ],
});

module.exports = mongoose.model("Detail", detail);