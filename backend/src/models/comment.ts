
import mongoose, { models,Schema } from "mongoose";



export const commentSchema = new Schema({
    userID: String, 
    comment: String,
    blogID : String,  
    username:String, 
}, 
{timestamps: true}, 
); 


export const Comment = mongoose.model('comment', commentSchema); 
module.exports = Comment; 
