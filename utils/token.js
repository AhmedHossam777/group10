const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = async (userId) => {
  const payload = { id: userId };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YzViMmQ0ODMwNTExODFiNjhkMzA4NCIsImlhdCI6MTc1OTI0Njc3NywiZXhwIjoxNzU5ODUxNTc3fQ.JJ0TKe374p_Ivl-39P6SnKHhwsi8VYm0GEy6V3E3b6M
};

const verify = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { generateToken, verify };