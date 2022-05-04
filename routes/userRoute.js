const express = require("express");

const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
    const newuser = new User(req.body)
    // console.log(req.body);
    try {
        const user = await User.findOne({...req.body})
        // console.log(newuser);
        if (user) {
            res.send("ALREADY REGISTERD");
        }
        else {
            const user = await newuser.save();
            res.send("registered");
        }
    } catch (error) {
        return res.status(404).json({ message: "not registerd" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email, password: password })
        if (user) {
            res.send(user);
        }
        else {
            return res.status(400).json({ message: "LOGIN FAILED" });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;
