const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userAccountSchema = new Schema ({
   firstname:{type:String,minLength:1,maxLength:20,required:true},
   lastname:{type:String,minLength:1,maxLength:20,required:true},
   email:{type:String,match:/^\S+@\S+\.\S+$/,required:true,unique:true},
   password:{type:String,minLength:8,required:true},
   messages:[{type:Schema.Types.ObjectId,ref:"Message"}],
   member:{type:Boolean,default:false},
   admin:{type:Boolean},
})

userAccountSchema.virtual("fullame").get(function () {
    // To avoid errors in cases where an author does not have either a family name or first name
    // We want to make sure we handle the exception by returning an empty string for that case
    let fullname = "";
    if (this.firstname && this.lastname) {
      fullname = `${this.firstname}, ${this.lastname}`;
    }
  
    return fullname;
  });

userAccountSchema.virtual("url").get(function(){
    return `/board/user/${this._id}`
})

module.exports = mongoose.model('Account',userAccountSchema);

//preHook?