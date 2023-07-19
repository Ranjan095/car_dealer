/** @format */
let mongoose = require("mongoose");

let dealerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    saleCar: [{ type: mongoose.Schema.Types.ObjectId, ref: "inventory" }],
    //   newCar: { type: mongoose.mongo.Schema.types.ObjectId,ref:"newCar" },
  },
  { versionKey: false, timestamps: true }
);

let dealerModal = mongoose.model("dealer", dealerSchema);

module.exports = { dealerModal };
