const express = require("express");
const cookieParser = require("cookie-parser");
const authroutes = require("./routes/auth.routes");
const postroutes = require("./routes/post.routes");
const profileroutes = require("./routes/profile.routes");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use("/auth", authroutes);
app.use("/post", postroutes);
app.use("/user", profileroutes);



module.exports = app;