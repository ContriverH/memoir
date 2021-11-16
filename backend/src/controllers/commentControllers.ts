import { Request, Response, NextFunction } from "express";
const session = require('express-session'); 
const blogModel = require("../models/blog");
const userModel = require("../models/user");
const commentModel = require("../models/comment");

exports.createComment = async (req: Request, res: Response) => {
    console.log("ok- passed");
    const comment = new commentModel({
        "userID": req.body.userID, 
        "comment": req.body.comment,
        "blogID" :req.body.blogID,  
        "username":req.body.username,
    })
    await comment.save();
    return res.status(201).json({
        status: '201',
        message: 'comment saved'
    })
}

exports.deleteComment = async (req: Request, res: Response) => {
    let comment;
    try {
        comment = await commentModel.findById(req.body.commentID);
        if (comment.userId == req.body.userID) {
            await comment.remove();
            res.status(201).json({
                message: "comment deleted"
            });
        }
    } catch {
        if (comment != null) {
            res.status(201).json({
                message: "User not found"
            })
        } else {
            res.status(201).json({
                message: "Comment not deleted"
            })
        }
    }
}