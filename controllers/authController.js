const asyncHandler = require("express-async-handler");
const { User } = require("../model/User");
const { AppError } = require("../utils/AppError");
const bcrypt = require("bcryptjs");
const { generateToken, verify } = require("../utils/token");
require("dotenv").config();

const signup = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json({
    message: "user created successfully",
    user,
  });
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const exitedUser = await User.findOne({ email: email });

  console.log(exitedUser);

  if (!exitedUser) {
    throw new AppError("wrong email or password", 401);
  }

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

const verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  const payload = await verify(token);
  console.log(payload);
});

module.exports = {
  signup,
  login,
  verifyToken,
};