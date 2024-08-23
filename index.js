//   REST API P-1 (13)

const express = require("express");
const app = express();
const port = 8000;
// const fs = require("fs");

const { connectDB } = require("./connection.js");
const { logReqRes } = require("./middlewares/index.js");
const userRouter = require("./routes/user.js");

//  Connecting to mongoose
connectDB("mongodb://127.0.0.1:27017/app-1");

// MIDDLEWARE - Plugin

app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("./log.txt"));

//  ROUTES

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Server Started Successfully at ${port}!`);
});
