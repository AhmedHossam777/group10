const express = require("express");

const app = express();
const userRouter = require("./routes/userRoutes");
const { connectDB } = require("./config/connectDb");

app.use(express.json());

app.use((req, res, next) => {
  console.log("hello, from backend");
  next();
});

app.use("/users", userRouter);

const port = 3000;

connectDB();
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});