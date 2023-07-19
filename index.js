/** @format */

let express = require("express");
const { connection } = require("./db");
const { dealerRoute } = require("./Routes/dealerRoute");
const { userRoute } = require("./Routes/userRoute");
const { inventoryRoute } = require("./Routes/inventoryRoute");
require("dotenv").config();
var cors = require('cors')
let app = express();
app.use(cors())
app.use(express.json());

app.use("/user", userRoute);
// app.use("/dealer", dealerRoute);
app.use("/inventory", inventoryRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("DB has been connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`port is running at ${process.env.PORT}`);
});
