const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    }
    ,
    password: {
        type: String,
        required: true
    }
})
const usermodel = mongoose.model("users", userschema);
module.exports = usermodel;