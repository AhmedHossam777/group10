const express = require("express");

const {
  getAllUsers,
  updateUser,
  getOneUser,
  deleteUser,
  getMyAccount,
} = require("../controllers/usersController");
const { auth } = require("../middlewares/auth");

const userRouter = express.Router();

userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").get(getOneUser).patch(updateUser).delete(deleteUser);

userRouter.route("/my/account").get(auth, getMyAccount);

module.exports = userRouter;