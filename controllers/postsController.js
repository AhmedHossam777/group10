const { Post } = require("../model/Post");

const createPost = async (req, res) => {
  try {
    const postData = req.body;

    const post = await Post.create(postData);

    console.log("created post: ", post);
    res.status(201).json({
      message: "post created successfully",
      post,
    });
  } catch (e) {
    console.log(e);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      message: "all posts",
      posts,
    });
  } catch (e) {
    console.log(e);
  }
};

// http://localhost:3000/posts/:id
const getOnePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);

    res.status(200).json({
      message: "get one post",
      post,
    });
  } catch (e) {
    console.log(e);
  }
};

const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const updatedPost = await Post.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
      message: "post updated successfully",
      updatedPost,
    });
  } catch (e) {
    console.log(e);
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(id);

    res.status(204).json({
      message: "post deleted successfully",
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createPost,
  getOnePost,
  getAllPosts,
  deletePost,
  updatePost,
};