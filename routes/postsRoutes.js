const express = require("express");
const { auth } = require("../middlewares/auth");

const postRouter = express.Router();
const {
  updatePost,
  deletePost,
  getOnePost,
  getAllPosts,
  createPost,
  likePost,
  bulkDelete,
} = require("../controllers/postsController");

postRouter
  .route("/")
  .get(getAllPosts)
  .post(auth, createPost)
  .delete(bulkDelete);

postRouter.route("/:id").get(getOnePost).patch(updatePost).delete(deletePost);

postRouter.route("/:id/like").post(auth, likePost);

module.exports = postRouter;
