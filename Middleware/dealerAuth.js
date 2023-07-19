/** @format */
var jwt = require("jsonwebtoken");
let dealerAuth = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    try {
      var decoded = jwt.verify(token?.split(" ")[1], "masai");
      if (decoded) {
        // console.log(decoded);
        if (decoded.isDealer) {
          (req.body.author = decoded.author),
            (req.body.authorId = decoded.authorId);
          next();
        } else {
          res.status(400).send({ msg: "Your are not Dealer" });
        }
      } else {
        res.status(400).send({ msg: "Please Login First-2 " });
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    res.status(400).send({ msg: "Please Login first-1" });
  }
};
module.exports = { dealerAuth };
