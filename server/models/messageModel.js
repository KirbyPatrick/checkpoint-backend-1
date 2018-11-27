let mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    }, 
    message: {
        required: true,
        type: String
    }
});
//always capital letter in the "String" below and is always in the singlular and mongoDB collections are always in 
// the plural.  The below code links our model to the mlab collection. 
module.exports = mongoose.model("Message", schema);