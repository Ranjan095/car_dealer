/** @format */

// For create inventory
const { InventoryModel } = require("../Modals/inventoryModal");
const { userModal } = require("../Modals/userModal");

let inventoryCreate = async (req, res) => {
  let { authorId } = req.body;
  try {
    let newInventory = new InventoryModel(req.body);
    await newInventory.save();
    await userModal.findByIdAndUpdate(authorId, {
      $push: { salesCar: newInventory._id },
    });
    // console.log(authorId);
    res.status(200).send("new inventory has been created");
  } catch (error) {
    res.status(400).send(error);
  }
};

// For get all inventory
let getInventory = async (req, res) => {
  try {
    let cars = await InventoryModel.find();
    res.status(200).send(cars);
  } catch (error) {
    res.status(400).send(error);
  }
};

// for update inventory by id
let updateInventory = async (req, res) => {
  let { id } = req.params;
  try {
    await InventoryModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "inventory has been updated" });
  } catch (error) {
    res.status(200).send(error);
  }
};

// for delete inventory by id
let deleteInventory = async (req, res) => {
    let { authorId } = req.body;
  let { id } = req.params;
  try {
    await InventoryModel.findByIdAndDelete({ _id: id }, req.body);
    await userModal.findByIdAndUpdate(authorId, { $pull: { salesCar: id } });
    res.status(200).send({ msg: "inventory has been deleted" });
  } catch (error) {
    res.status(200).send(error);
  }
};

module.exports = {
  inventoryCreate,
  getInventory,
  updateInventory,
  deleteInventory,
};
