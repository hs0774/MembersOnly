const express = require("express");
const router = express.Router();

const message_controller = require("../controllers/messagecontroller")
const userAccount_controller = require("../controllers/userAccountcontroller");


/* board home page, what will this be? . */
router.get('/', userAccount_controller.index)

//ACCOUNT ROUTES 

//user list 
router.get('/users', userAccount_controller.user_list)

//individual user
router.post('/user/:id/',userAccount_controller.user_detail)

//update user must match user unless is admin 
router.get('/user/:id/update',userAccount_controller.account_update_get)

//after update user post request
router.post('/user/:id/update',userAccount_controller.account_update_post)


//MESSAGE ROUTES 
//get request to create a message must be before any route that uses id
router.get('/message/create', message_controller.message_create_get)

//post request after created message
router.post('/message/create',message_controller.message_create_post)

//message list 
router.get('/messages', message_controller.message_list)

//individual message might not need
router.post('/message/:id/',message_controller.message_detail)

//delete message must match user unless is admin 
router.get('/message/:id/delete',message_controller.message_delete_get)

//after deletion post request 
router.post('/message/:id/delete',message_controller.message__delete_post)

//update message must match user unless is admin 
router.get('/message/:id/update',message_controller.message_update_get)

//after update post request
router.post('/message/:id/update',message_controller.message_update_post)

module.exports = router;
