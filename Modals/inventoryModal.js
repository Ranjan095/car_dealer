/** @format */
let mongoose = require("mongoose");

let inventorySchema = mongoose.Schema(
  {
    major_scratches: { type: Number, required: true },
    original_paint: { type: String, required: true },
    no_of_accidents_report: { type: Number, required: true },
    no_of_previous_buyers: { type: Number, required: true },
    registration_place: { type: String, required: true },
    kms_on_odometer: { type: Number, required: true },
    year: { type: Number, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    discription: { type: String, required: true },
    modal: {  type: String, required: true  },
    author: { type:String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { versionKey: false }
);

let InventoryModel = mongoose.model("inventory", inventorySchema);

module.exports = { InventoryModel };
