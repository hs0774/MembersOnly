const Account = require("../models/userAccount")
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


//HOMEPAGE
exports.index = asyncHandler(async (req,res,next) => {
    res.send("Homepage not created yet")
})

//READ
//Display list of all users 
exports.user_list = asyncHandler(async (req,res,next) => {
    res.send('user list coming soon');
})

//display list of single user 
exports.user_detail = asyncHandler(async (req,res,next) => {
    res.send(`user ${req.params.id} details coming soon`);
})


//CREATE
//display sign up form on get
exports.sign_up_get = asyncHandler(async (req,res,next) => {
    res.render("sign-up");
})

//handle sign up on post
exports.sign_up_post = asyncHandler(async (req,res,next) => {
    res.send('post request of sign up form coming soon ')
}) 

//UPDATE
//display user info update on get 
exports.account_update_get = asyncHandler(async (req,res,next) => {
    res.send('account update form coming soon')
})

//handle user info update on post 
exports.account_update_post = asyncHandler(async (req,res,next) => {
    res.send('account update post coming soon')
})
