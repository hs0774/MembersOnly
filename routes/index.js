const express = require('express');
const router = express.Router();

const userAccount_controller = require("../controllers/userAccountcontroller");

router.get("/login", userAccount_controller.log_in_get)

router.post("/login", userAccount_controller.log_in_post)

module.exports = router;