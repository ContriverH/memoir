import mongoose from "mongoose";
import comments from "./comments";
const comments = mongoose.model(comments);

const postSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: comments,
    }
})

module.exports = mongoose.model("posts", postSchema);