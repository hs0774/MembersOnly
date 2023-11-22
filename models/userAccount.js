const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userAccountSchema = new Schema ({
   firstname:{type:String,minLength:1,maxLength:20,required:true},
   lastname:{type:String,minLength:1,maxLength:20,required:true},
   email:{type:String,match:/^\S+@\S+\.\S+$/,required:true,unique:true},
   password:{type:String,minLength:8,required:true},
   messages:[{type:Schema.Types.ObjectId,ref:"Message"}],
   member:{type:Boolean,default:false},
   admin:{type:Boolean,default:false},
})

userAccountSchema.virtual("fullname").get(function(){ 
    return `${this.firstName} ${this.lastName}`
})

userAccountSchema.virtual("url").get(function(){
    return `/board/account/${this._id}`
})

module.exports = mongoose.model('Account',userAccountSchema);

//preHook?