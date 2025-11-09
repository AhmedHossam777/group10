const express = require("express");
const { auth } = require("../middlewares/auth");

const postRouter = express.Router();
const {
  updatePost,
  deletePost,
  getOnePost,
  getAllPosts,
  createPost,
} = require("../controllers/postsController");

postRouter.route("/").get(getAllPosts).post(auth, createPost);

postRouter.route("/:id").get(getOnePost).patch(updatePost).delete(deletePost);

module.exports = postRouter;
