const express = require("express");
const authmiddleware = require("../middlewares/auth.middelware");

const router = express.Router();

router.get("/profile", authmiddleware, async (req, res) => {
    const user = req.user;
    return res.json({
        user
    })

})

module.exports = router;