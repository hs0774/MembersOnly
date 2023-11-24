const express = require('express');
const router = express.Router();

const userAccount_controller = require("../controllers/userAccountcontroller");

/* GET home page. */
// router.get('/', function(req, res, next) {

//   res.render('index', { title: 'Members Only Club' });
// });

router.get("/login", userAccount_controller.log_in_get)

router.post("/login", userAccount_controller.log_in_post)

module.exports = router;