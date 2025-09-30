const asyncHandler = require("express-async-handler");
const { User } = require("../model/User");
const { AppError } = require("../utils/AppError");
const bcrypt = require("bcryptjs");
const { generateToken, verify } = require("../utils/token");
require("dotenv").config();

const signup = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const existedUser = await User.findOne({ email: email });

  if (existedUser) {
    throw new AppError("user already existed", 400);
  }

  const user = await User.create(req.body);

  res.status(201).json({
    message: "user created successfully",
    user,
  });
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const exitedUser = await User.findOne({ email: email });

  if (!exitedUser) {
    throw new AppError("wrong email or password", 401);
  }

  //* true or flase
  const isCorrectPassword = await bcrypt.compare(password, exitedUser.password);
  if (!isCorrectPassword) {
    throw new AppError("wrong email or password", 401);
  }

  const token = await generateToken(exitedUser._id);

  res.status(200).json({
    message: "you logged in successfully",
    token,
  });
});

module.exports = {
  signup,
  login,
};