const Users = require("../model/User");

const getAllUsers = (req, res) => {
  res.status(200).json({
    message: "get all users",
    Users,
  });
};

const getOneUser = (req, res) => {
  console.log(req.params.id);
  const id = parseInt(req.params.id);

  const user = Users.find((user) => user.id === id);

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

const createUser = (req, res) => {
  console.log(req.body);
  const user = req.body;

  Users.push(user);
  res.status(201).json({
    message: "user created successfully",
    Users,
  });
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