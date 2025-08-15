const express = require("express");
const { registercontroller, logincontroller, logoutcontroller } = require("../controllers/auth.controller");
const authmiddleware = require("../middlewares/auth.middelware");

const router = express.Router();

router.post("/register", registercontroller);

router.post("/login", logincontroller);

router.post("/logout", logoutcontroller)

module.exports = router;