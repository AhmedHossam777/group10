const express = require("express");

const app = express();

const Users = [
  {
    id: 1,
    name: "ahmed",
    age: 20,
  },
  {
    id: 2,
    name: "mohamed",
    age: 30,
  },
  {
    id: 3,
    name: "ali",
    age: 22,
  },
  {
    id: 4,
    name: "ibrahim",
    age: 30,
  },
];

// get all users
app.get("/users", (req, res) => {
  res.status(200).json({
    message: "get all users",
    Users,
  });
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = Users.find((user) => user.id === id);

  if (!user) {
    res.status(404).json({
      message: "user not found",
    });
  }

  res.status(200).json({
    message: "user fetched successfully",
    user,
  });
});

// get one user

// // read:
// app.get();
//
// // create:
// app.post();
//
// // update:
// app.patch();
//
// // delete:
// app.delete();

const port = 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

//! Status Code:
// GET, POST, PATCH, PUT,DELETE
// status code: HTTP protocol
// 200 -> success(ok), 201 -> created, 204 => no content (delete)
// 300 -> redirect
// 400 -> bad request, 404 -> not found
// 500 -> server error

//! Request Object content:
// req.params
// req.query
// req.headers

// token -> key -> 30 day

//! CRUD operations
// create, read(get), update, delete