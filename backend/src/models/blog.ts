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
}  , {timestamps: true }); 

export const Blog = mongoose.model<Blog>('Blog', blogSchema); 
module.exports = Blog; 
