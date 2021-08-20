
import mongoose, { models,Schema } from "mongoose";


interface Blog {
    title: string; 
    snippet: string; 
    body: string; 
}


const blogSchema = new Schema<Blog>({
    title: {
        type: String,
        required: true
    },
    snippet : {
        type : String, 
        required: false
    }, 
    body: {
        type: String, 
        required : false, 
    }, 
    like: {
        type: Number, 
        required: false, 
    }, 
    read : {
        type: Number, 
        required: false, 
    },
    comments:[
        {
            type: new Schema({
            userID: String, 
            comment: String, 
            username:String, 
        }, 
        {timestamps: true}, 
        )
        , required: false
    }
    ]
}  , {timestamps: true }); 

export const Blog = mongoose.model<Blog>('Blog', blogSchema); 
module.exports = Blog; 
