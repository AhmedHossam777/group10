const express = require("express");

const {
  login,
  signup,
  verifyToken,
} = require("./../controllers/authController");

const authRouter = express.Router();

authRouter.route("/signup").post(signup);
authRouter.route("/login").post(login);
authRouter.route("/verify").get(verifyToken);
module.exports = authRouter;