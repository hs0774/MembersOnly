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
    res.render("create_message");
})

//handle sign up on post
exports.message_create_post = [
    body("title")
        .trim()
        .isLength({ min: 1, max: 100 })
        .withMessage("Title is required and must be between 1 to 100 characters.")
        .escape(),
    body("messageContent")
        .optional()
        .trim()
        .isLength({ min:1,max: 500 })
        .withMessage("Message should not exceed 500 characters.")
        .escape(),
    asyncHandler(async (req,res,next) => {
        const errors = validationResult(req);
        const user = await Account.findOne({email: req.session.email}) 

        const newMessage = new Message ({
            title:req.body.title,
            timestamp:Date.now(),
            content:req.body.messageContent,
            author: user._id,
        })

        if(!errors.isEmpty()){
            res.render("create_message", {
                title:req.body.title,
                messageContent:req.body.messageContent,
            })
        } else {
            await newMessage.save(),
            res.redirect("/")
        }

    })    
]

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