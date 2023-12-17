const Account = require("../models/userAccount")
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


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
            res.redirect("/board")
        }

    })    
]

//DELETE
//handle delete on post 
exports.message_delete_post = asyncHandler(async (req,res,next) => {
    const message = await Message.findById(req.params.id);
    if(!message){
        res.redirect("/board");
    } else {
        await Message.findByIdAndDelete(req.params.id);
        res.redirect("/board")
    }
    
})
