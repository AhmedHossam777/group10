const { AppError } = require("../utils/AppError");
const asyncHandler = require("express-async-handler");
const { verify } = require("../utils/token");

const auth = asyncHandler(async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    throw new AppError("token is required", 401);
  }

  const payload = await verify(token);
  if (!payload) {
    throw new AppError("token is invalid", 401);
  }

  req.user = payload;

  next();
});

module.exports = { auth };