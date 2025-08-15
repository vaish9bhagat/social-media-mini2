const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("connected to DB")
    }).catch((err)=>{
        console.log("failed to connect",err);

    })
}

module.exports=connectDB;