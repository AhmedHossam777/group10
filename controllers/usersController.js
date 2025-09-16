const { User } = require("../model/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { AppError } = require("../utils/AppError");

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    message: "get all users",
    users,
  });
});

const getOneUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) {
    throw new AppError("user not found", 404);
  }

  res.status(200).json({
    message: "user fetched successfully",
    user,
  });
});

const updateUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;

  const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
  if (!updatedUser) {
    throw new AppError("user not found", 404);
  }
  res.status(200).json({
    message: "user updated successfully",
    updatedUser,
  });
});

const deleteUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const deletedUser = await User.findByIdAndDelete(id);
  if (!deletedUser) {
    throw new AppError("user not found", 404);
  }
  res.status(204).json({
    message: "user deleted successfully",
  });
});

module.exports = {
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
};