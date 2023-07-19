/** @format */
let express = require("express");

const bcrypt = require("bcrypt");
const {
  createUser,
  getUser,
  loginUser,
} = require("../controller/userController");

let userRoute = express.Router();

// API for create user
userRoute.post("/create", createUser);

// API for get all user
userRoute.get("/", getUser);

// APi for login user
userRoute.post("/login", loginUser);

module.exports = { userRoute };
