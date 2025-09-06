const express = require("express");

const app = express();
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postsRoutes");
const { connectDB } = require("./config/connectDb");

app.use(express.json());

app.use((req, res, next) => {
  console.log("hello, from backend");
  next();
});

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

connectDB();

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});