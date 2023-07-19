/** @format */
let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    salesCar: [{ type: mongoose.Schema.Types.ObjectId, ref: "inventory" }],
    isDealer: { type: Boolean, required: true },
    //   newCar: { type: mongoose.mongo.Schema.types.ObjectId,ref:"newCar" },
  },
  { versionKey: false, timestamps: true }
);

let userModal = mongoose.model("user", userSchema);

module.exports = { userModal };
