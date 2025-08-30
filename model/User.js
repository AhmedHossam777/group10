const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String },
    password: { type: String },
  },
  {
    versionKey: false,
  },
);

const User = mongoose.model("User", userSchema);

module.exports = { User };