
import mongoose, { models,Schema } from "mongoose";



export const messageSchema = new Schema({
    userID: String, 
    text: String,
    chatID : String,  
      
},  
{timestamps: true}, 
); 


export const Message = mongoose.model('message', messageSchema); 
module.exports = Message; 
