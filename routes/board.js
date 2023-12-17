const express = require("express");
const router = express.Router();

const message_controller = require("../controllers/messagecontroller")
const userAccount_controller = require("../controllers/userAccountcontroller");

/* board home page, what will this be? . */
router.get('/', userAccount_controller.index)

//ACCOUNT ROUTES 

//get request for sign up form must be before any route that uses id
router.get('/user/sign_up', userAccount_controller.sign_up_get)

//post request after created user
router.post('/user/sign_up',userAccount_controller.sign_up_post)

//let user become a member get
router.get('/user/member',userAccount_controller.account_activate_get)

//let user become a member post 
router.post('/user/member',userAccount_controller.account_activate_post);

//let user login in get 
router.get("/login", userAccount_controller.log_in_get)

//let user login post 
router.post("/login", userAccount_controller.log_in_post)

router.post("/logout", userAccount_controller.log_out_post)

//MESSAGE ROUTES 
//get request to create a message must be before any route that uses id
router.get('/message/create', message_controller.message_create_get)

//post request after created message
router.post('/message/create',message_controller.message_create_post)

//after deletion post request 
router.post('/message/:id/delete',message_controller.message_delete_post)

module.exports = router;
