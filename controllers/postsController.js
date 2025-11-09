const { Post } = require("../model/Post");
const { AppError } = require("../utils/AppError");
const asyncHandler = require("express-async-handler");

const createPost = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  // let postData = {req.body, user:userId}
  let postData = { ...req.body, user: userId };

  // create post in database
  const post = await Post.create(postData);

  // send response
  res.status(201).json({
    message: "post created successfully",
    post,
  });
});

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate("user");

  res.status(200).json({
    message: "all posts",
    posts,
  });
});

const getOnePost = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const post = await Post.findById(id).populate({
    path: "user",
    select: "name",
  });

  if (!post) {
    throw new AppError("post not found", 404);
  }

  res.status(200).json({
    message: "get one post",
    post,
  });
});

const updatePost = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;

  const updatedPost = await Post.findByIdAndUpdate(id, data, { new: true });
  if (!updatedPost) {
    throw new AppError("post not found", 404);
  }
  res.status(200).json({
    message: "post updated successfully",
    updatedPost,
  });
});

const deletePost = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const deletedPost = await Post.findByIdAndDelete(id);
  if (!deletedPost) {
    throw new AppError("post not found", 404);
  }
  res.status(204);
});

module.exports = {
  createPost,
  getOnePost,
  getAllPosts,
  deletePost,
  updatePost,
};

// 200 -> ok -> get, patch request
// 201 -> created -> post request
// 204 -> no content -> deleted: doesn't display any data or response
// 300 -> server redirect
// 400 -> bad request
// 401 -> unauthorized
// 404 -> not found
// 500 -> server error
