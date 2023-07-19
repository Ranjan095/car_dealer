/** @format */

let mongoose = require("mongoose");
let express = require("express");
const { dealerAuth } = require("../Middleware/dealerAuth");
const { userAuth } = require("../Middleware/userAuth");
const { InventoryModel } = require("../Modals/inventoryModal");
const { userModal } = require("../Modals/userModal");
const {
  inventoryCreate,
  getInventory,
  deleteInventory,
  updateInventory,
} = require("../controller/inventoryController");

let inventoryRoute = express.Router();

// API for create inventory
inventoryRoute.post("/create", dealerAuth, inventoryCreate);

// API for get all inventory
inventoryRoute.get("/", getInventory);

// API for update inventory
inventoryRoute.patch("/update/:id", dealerAuth, updateInventory);

// API for delete inventory
inventoryRoute.delete("/delete/:id", dealerAuth, deleteInventory);

module.exports = { inventoryRoute };
