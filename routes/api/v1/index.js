const express = require("express");

const router = express.Router();

router.use("/person", require("./persons"));
router.use("/items", require("./items"));

module.exports = router;
