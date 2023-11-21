const express = require('express');
const router = express.Router();

const userAccount_controller = require("../controllers/userAccountcontroller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //make this the homepage with user messages 
});

//get request for sign up form must be before any route that uses id
router.get('/sign-up', userAccount_controller.sign_up_get)

//post request after created user
router.post('/sign-up',userAccount_controller.sign_up_post)

module.exports = router;
