/** @format */

let mongoose = require("mongoose");
let express = require("express");
const { dealerModal } = require("../Modals/dealerModal");
const bcrypt = require("bcrypt");
const {
  createDealer,
  getDealer,
  loginDealer,
} = require("../controller/dealerController");

let dealerRoute = express.Router();

// API for create dealer
dealerRoute.post("/create", createDealer);

// API for get all dealer
dealerRoute.get("/", getDealer);

// APi for login dealer
dealerRoute.post("/login", loginDealer);

module.exports = { dealerRoute };
