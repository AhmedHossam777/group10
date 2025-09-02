const express = require("express");

const postRouter = express.Router();
const {
  updatePost,
  deletePost,
  getOnePost,
  getAllPosts,
  createPost,
} = require("../controllers/postsController");

postRouter.route("/").get(getAllPosts).post(createPost);
postRouter.route("/:id").get(getOnePost).patch(updatePost).delete(deletePost);

module.exports = postRouter;