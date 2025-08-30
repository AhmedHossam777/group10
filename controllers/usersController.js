const Users = require("../model/User");
const { User } = require("../model/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    message: "get all users",
    users,
  });
};

const getOneUser = async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;

  const user = await User.findById(id);
  if (!user) {
    res.status(404).json({
      message: "user not found",
    });
  }

  res.status(200).json({
    message: "users fetched successfully",
    user,
  });
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "user created successfully",
      user,
    });
  } catch (e) {
    console.log(e);
  }
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);

  const user = Users.find((u) => u.id === id);
  if (!user) {
    res.status(404).json({
      message: "user not found",
    });
  }

  const { name, age } = req.body;
  user.name = name || user.name;
  user.age = age || user.age;

  res.status(200).json({
    message: "user updated successfully",
    user,
  });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  const userIndex = Users.findIndex((u) => u.id === id);
  if (userIndex === -1) {
    res.status(404).json({
      message: "user not found",
    });
  }

  const deletedUser = Users.splice(userIndex, 1);
  res.status(204).json(deletedUser);
};

module.exports = {
  getAllUsers,
  getOneUser,
  deleteUser,
  createUser,
  updateUser,
};