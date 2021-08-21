import { Request, Response, NextFunction } from "express";
import { Blog } from "../models/blog";
const session = require('express-session'); 
const blogModel = require("../models/blog");
const userModel = require("../models/user");

exports.createBlog = async (req: Request,res: Response,next: NextFunction)=>{
  
    const blog = new blogModel({
       		"title": req.body.title,
	     	"snippet": req.body.snippet,
            "body": req.body.body, 
            "images": req.body.images, 
    });
    await blog.save();
    return res.status(201).json({
        status : "201",
        Message : "Blog Saved", 
    })
}


exports.updateBlog = async (req: Request,res: Response,next: NextFunction)=>{
    
    console.log(req.params);  
    console.log(req.body);
    const blogToUpdate = await blogModel.findById(req.params.id);
     console.log(req.params); 
     if(!req.params.id){
         return res.status(404).json({
             status: "404", 
             message: "Parameter getting null", 
         })
     }
     console.log(blogToUpdate); 
     if(!blogToUpdate) { return res.status(400).json({
         status:"400", 
         Message: "Blog not found", 
     }) ; 
    }
    blogToUpdate.update({
    "title": req.body.title,
    "snippet": req.body.snippet,
    "body": req.body.body, 
    "images": req.body.images, 
    } , function(err: String, result : String){
    if(err){
         return res.status(400).json({
            status:"400", 
            Message: "Blog not found", 
        })}  
    else { 
        console.log(result); 
        return res.status(201).json({
        status : "201",
        Message : "Blog Saved", 
    })
    }
}); 
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

