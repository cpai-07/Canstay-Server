const express = require("express");

const router = express.Router();


const userController = require("../controllers/UserController");

router.route("/register").post(userController.userRegister);

router.route("/login").post(userController.userLogin);

module.exports = router;
