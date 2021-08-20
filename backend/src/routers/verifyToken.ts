import { NextFunction,Request,Response } from "express";

const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const verifyToken = async (req:Request,res:Response,next:NextFunction)=>{
    const requestTokenHeader = req.header("Authorization");
    //Checking For Availability of Token
    if(!requestTokenHeader) return res.status(401).json({message : "Not Authorization Token Found"});
    //Checking For Formatting Of Token .
    if(!requestTokenHeader.startsWith("Bearer ")) return res.status(401).json({message : "Token does not start with proper format"});
    try{
        //Extracting Actual Token
        const token = requestTokenHeader.substring(7);
        //verifying Details
        const jwtDetails = await jwt.verify(token , Buffer.from("secretkey", 'base64'));
        await userModel.findOne({
            username : jwtDetails.sub
        });
        next();
    }catch (e) {
        console.log(e);
        res.status(400).json({message : "Invalid Token"});
    }
}

module.exports = verifyToken;