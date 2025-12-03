const { AppError } = require("../utils/AppError");
const asyncHandler = require("express-async-handler");
const isAdmin = asyncHandler(async (req, res, next) => {
  const role = req.user.role;

  if (role !== "admin") {
    throw new AppError("you are not authorized", 403);
  }

  next();
});

module.exports = { isAdmin };
