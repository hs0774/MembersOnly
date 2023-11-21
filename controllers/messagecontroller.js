const Account = require("../models/userAccount")
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


//READ
//Display list of all users 
exports.message_list = asyncHandler(async (req,res,next) => {
    res.send('message list coming soon');
})

//display list of single user 
exports.message_detail = asyncHandler(async (req,res,next) => {
    res.send(`message ${req.params.id} details coming soon`);
})


//CREATE
//display sign up form on get
exports.message_create_get = asyncHandler(async (req,res,next) => {
    res.send("form will be created soon ");
})

//handle sign up on post
exports.message_create_post = asyncHandler(async (req,res,next) => {
    res.send('post request of message form coming soon ')
}) 

//DELETE
//display delete form on get 
exports.message_delete_get = asyncHandler(async (req,res,next) => {
    res.send("delete form will be created soon")
})

//handle delete on post 
exports.message__delete_post = asyncHandler(async (req,res,next) => {
    res.send("delete post will be created soon")
})

//UPDATE
//display user info update on get 
exports.message_update_get = asyncHandler(async (req,res,next) => {
    res.send('message update form coming soon')
})

//handle user info update on post 
exports.message_update_post = asyncHandler(async (req,res,next) => {
    res.send('message update post coming soon')
})