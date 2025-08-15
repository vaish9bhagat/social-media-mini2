const express = require("express");
const multer = require("multer");
const authmiddleware = require("../middlewares/auth.middelware");
const { createpostcontroller, showpostcontroller } = require("../controllers/post.controller");

const uploads = multer({ storage: multer.memoryStorage() })

const router = express.Router();

router.post("/createpost", uploads.single("file"), authmiddleware, createpostcontroller);

router.get("/allposts", authmiddleware, showpostcontroller);


module.exports = router;