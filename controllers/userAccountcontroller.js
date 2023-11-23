const Account = require("../models/userAccount")
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
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
    res.render("sign_up");
})

//handle sign up on post
exports.sign_up_post = [ 
    body("firstname","Must be at least one letter long")
        .trim()
        .isLength({min:1,max:20})
        .escape(),
    body("lastname","Must be at least one letter long")
        .trim()
        .isLength({min:1,max:20})
        .escape(),    
    body("email")
        .isEmail()
        .withMessage("Invalid email format")
        .normalizeEmail()
        .custom(async value => {
            const user = await Account.findOne({email:value});
            if(user){
                throw new Error("Email already in use")
            }
        }),
    body("password", "Password must contain both letters and numbers")
        .isLength({min:8})
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        .withMessage("Password must contain both letters and numbers"),
    body("Cpassword","Passwords do not match")
        .custom((value,{ req }) =>  {
            if (value !== req.body.password) {
                throw new Error("Passwords do not match");
            }
            return true;
        }),  
    asyncHandler(async (req,res,next) => {
        const errors = validationResult(req);
        console.log(req.body)
        const isAdmin = req.body.admin ==='on'? true:false;
        const saltedPassword = await bcrypt.hash(req.body.password,10);
        
        const newAccount = new Account({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email:req.body.email,
            password: saltedPassword,
            messages:[],
            member: isAdmin,
            admin: isAdmin,
        });

        if(!errors.isEmpty()){
            res.render("sign_up", {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                admin: false,
                errors: errors.array(),
            });
            return;            
        } else {
            await newAccount.save();
            if(isAdmin){
            res.redirect(newAccount.url);
            } else {
                res.redirect("/board/user/member")
            }
        }
    }),
]

//UPDATE
//display user info update on get 
exports.account_update_get = asyncHandler(async (req,res,next) => {
    res.send('account update form coming soon')
})

//handle user info update on post 
exports.account_update_post = asyncHandler(async (req,res,next) => {
    res.send('account update post coming soon')
})

exports.account_activate_get = asyncHandler(async (req,res,next) => {
    res.render("account_activate");
})

exports.account_activate_post = asyncHandler(async (req,res,next) => {
    res.send('member confirmation page coming soon')
})

exports.log_in_get = asyncHandler(async (req,res,next) => {
    res.render("login")
})

exports.log_in_post = asyncHandler(async (req,res,next) => {
    
})