/** @format */

const { dealerModal } = require("../Modals/dealerModal");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

// for Create Dealer
let createDealer = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (hash) {
    try {
      let dealer = new dealerModal({ name, email, password: hash });
      await dealer.save();
      // console.log(dealer);
      res.status(200).send({
        msg: "Your Account has been created Now You can sale your car",
      });
    } catch (error) {
      res.status(400).send(error)
    }
      } else {
        res.status(400).send(err);
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// for get all dealer
let getDealer = async (req, res) => {
  try {
    let dealers = await dealerModal.find(req.query); //.populate("saleCar");
    res.status(200).send(dealers);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// for login dealer
let loginDealer = async (req, res) => {
  let { email, password } = req.body;
  try {
    let dealer = await dealerModal.findOne({ email });
    if (dealer) {
      bcrypt.compare(password, dealer.password, function (err, result) {
        if (result) {
          var token = jwt.sign(
            { author: dealer.name, email: dealer.email },
            "masai"
          );
          res.status(200).send({ msg: "Login Successful",token });
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

module.exports = { createDealer, getDealer, loginDealer };
