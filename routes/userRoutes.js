const express = require("express");

const router = express.Router();
const {
  getAllUsers,
  updateUser,
  createUser,
  getOneUser,
  deleteUser,
} = require("../controllers/usersController");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getOneUser).patch(updateUser).delete(deleteUser);

module.exports = router;