const express = require("express");

const {
  getAllUsers,
  updateUser,
  signup,
  getOneUser,
  deleteUser,
  login,
} = require("../controllers/usersController");

const userRouter = express.Router();

userRouter.route("/").get(getAllUsers).post(signup);
userRouter.route("/:id").get(getOneUser).patch(updateUser).delete(deleteUser);

userRouter.route("/auth/login").post(login);

module.exports = userRouter;