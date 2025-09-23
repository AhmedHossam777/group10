const express = require("express");

const { login, signup } = require("./../controllers/authController");

const authRouter = express.Router();

authRouter.route("/signup").post(signup);
authRouter.route("/login").post(login);
module.exports = authRouter;