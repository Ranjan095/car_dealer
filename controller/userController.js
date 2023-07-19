/** @format */
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { userModal } = require("../Modals/userModal");

// for Create user
let createUser = async (req, res) => {
  let { name, email, password, isDealer } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (hash) {
        try {
          let newUser = new userModal({
            name,
            password: hash,
            email,
            isDealer,
          });
          await newUser.save();
          res.status(200).send({ msg: "New user has been created" });
        } catch (error) {
          res.status(400).send(error);
        }
      } else {
        res.status(200).send(err);
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// for get all user
let getUser = async (req, res) => {
  try {
    let user = await userModal.find(req.query).populate("salesCar");
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// for login user
let loginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await userModal.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          var token = jwt.sign(
            { author: user.name, authorId: user._id, isDealer: user.isDealer },
            "masai"
          );
          res
            .status(200)
            .send({
              msg: "Login Successful",
              token,
              isDealer: user.isDealer,
              author: user.name,
            });
        } else {
          res.status(400).send({ msg: "Wrong Crendiantial" });
        }
      });
    } else {
      res.status(400).send({ msg: "Please Signup first" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { createUser, getUser, loginUser };
