const mongoose = require("mongoose");

const postschema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    }
})

const postmodel = mongoose.model("posts", postschema);
module.exports = postmodel;