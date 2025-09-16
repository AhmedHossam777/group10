const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = async (userId) => {
  const payload = { id: userId };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const verify = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { generateToken, verify };