const express = require("express");

const {
  getAllUsers,
  updateUser,
  createUser,
  getOneUser,
  deleteUser,
} = require("../controllers/usersController");

const userRouter = express.Router();

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getOneUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;