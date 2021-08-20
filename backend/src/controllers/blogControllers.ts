import { Request, Response, NextFunction } from "express";

const blogModel = require("../models/blog");
import { Blog } from "../models/blog"; 
exports.createBlog = async (req: Request,res: Response,next: NextFunction)=>{

    const blog = new blogModel({
       		"title": req.body.title,
	     	"snippet": req.body.snippet,
           "body": req.body.body, 
    });
    await blog.save();
    return res.status(201).json({
        status : "201",
        Message : "Blog Saved", 
    })
}

exports.listall = async (req: Request,res: Response,next: NextFunction)=>{
    const x =  await blogModel.find(); 
    return res.status(201).json(x); 
}

exports.searchByTitle = async (req: Request,res: Response,next: NextFunction)=>{
    console.log(req.body); 
     const blogs =  await blogModel.findOne({"title": req.body.title}); 
      if(!blogs){
          return res.status(400).json({
            status : "400",
            Message : "Blog not found", 
        }); 
    }   
    return res.status(201).json(blogs); 
}

