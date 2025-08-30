const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const url = process.env.DB_URL;
  try {
    await mongoose.connect(url);
    console.log("mongo DB connect successfully");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connectDB };