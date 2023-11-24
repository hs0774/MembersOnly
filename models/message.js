const { DateTime } = require("luxon");
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title:{type:String,minLength:1,maxLength:100},
    timestamp:{type:Date,default:Date.now},
    content:{type:String,minLength:1,maxLength:500},
    author:{type:Schema.Types.ObjectId,ref:"Account",required:true},
})

MessageSchema.virtual("url").get(function(){
    return `board/message/${this._id}`
})
MessageSchema.virtual("date_formatted").get(function () {
    return DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATE_MED);
  });
module.exports = mongoose.model('Message',MessageSchema)