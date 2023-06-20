const express = require("express");

const router = express.Router();
const itemsController = require("../../../controllers/api/v1/items_controller");
const { log } = require("console");
const { verifyToken } = require("../../../config/middleware");
const passport = require("passport");

// console, log("creeate");
// router.post("/create", itemsController.create);

//- /item/:id/create_item
router.post("/create", itemsController.create_item);

module.exports = router;
