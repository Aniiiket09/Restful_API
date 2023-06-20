const express = require("express");

const router = express.Router();

const personController = require("../../../controllers/api/v1/person_Controller");

router.post("/register", personController.register);
router.post("/login", personController.login);

module.exports = router;
