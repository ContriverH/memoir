import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    commentId: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        require: true
    }
})

module.exports = mongoose.model("comments", commentSchema);