const express = require("express");
const router = express.Router();

const message_controller = require("../controllers/messagecontroller")
const userAccount_controller = require("../controllers/userAccountcontroller");

// const requireLogin = (req,res,next) => {
//     if(!req.session.loggedIn) {
//         res.redirect("/login")
//     } else {
//         next();
//     }
// }

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


//update user must match user unless is admin 
router.get('/user/:id/update',userAccount_controller.account_update_get)

//after update user post request
router.post('/user/:id/update',userAccount_controller.account_update_post)

//individual user
router.get('/user/:id',userAccount_controller.user_detail)

//user list 
router.get('/users', userAccount_controller.user_list)



//MESSAGE ROUTES 
//get request to create a message must be before any route that uses id
router.get('/message/create', message_controller.message_create_get)

//post request after created message
router.post('/message/create',message_controller.message_create_post)

//message list 
router.get('/messages', message_controller.message_list)

//individual message might not need
router.get('/message/:id',message_controller.message_detail)

//delete message must match user unless is admin 
router.get('/message/:id/delete',message_controller.message_delete_get)

//after deletion post request 
router.post('/message/:id/delete',message_controller.message__delete_post)

//update message must match user unless is admin 
router.get('/message/:id/update',message_controller.message_update_get)

//after update post request
router.post('/message/:id/update',message_controller.message_update_post)

module.exports = router;
