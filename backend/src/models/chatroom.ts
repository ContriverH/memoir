
import mongoose, { models,Schema } from "mongoose";



export const  chatroom = new Schema({
    chatID: String, 
    messages: [String] ,
    blogID : String,  
    username:String, 
}, 
{timestamps: true}, 
); 


export const Chatroom = mongoose.model('chatroom', chatroom); 
module.exports = Chatroom; 
