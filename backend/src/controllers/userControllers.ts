const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
const {userRegistrationValidation} = require("../configuration/userValidation");
import {Response, Request, NextFunction} from "express"
exports.userRegistration = async (req: Request,res: Response)=>{

    const {error} = userRegistrationValidation(req.body);
    if(error) return res.status(400).json({message : error.details[0].message});

    const username = req.body.username;

    // const salt = await argon2.genSalt(10);
    const hashedPassword = await argon2.hash(req.body.password);
    const user = new userModel({
        username : username ,
        password : hashedPassword,
        email : req.body.email ,
        firstName : req.body.firstName,
        lastName : req.body.lastName ,
        date : Date.now()
    });
    await user.save();
    
    return res.status(201).json({
        status : "Passed",
        Message : "User Registered",
        username
    })
}

exports.userLogin = async (req: Request,res: Response)=>{
    const userFound  = await userModel.findOne({username : req.body.username});

   if(!userFound) return res.status(400).json({
       status : "Failed",
       message : "User Not Found",
       successfulLogin : false
   });

   const validatePassword = await argon2.verify( userFound.password, req.body.password);
   if(!validatePassword) return res.status(400).json({
       status : "Failed",
       message : "Incorrect Password",
       successfulLogin : false
   });
   const token = await jwt.sign({
       // userID : userFound._id ,
       sub : userFound.username ,
       role : userFound.role
   }, //We basically need to set the sign key in base64 encoding so that it can work with spring boot as spring expects the secret-key to be in that encoding instead of normal UTF-8
       Buffer.from("secretkey", 'base64'),
       {expiresIn: "24h"}
   );// need to replace "secret-key" with process.env.SECRET_KEY and it should of longer length and should be more complex.

 
   res.header("Authorization",token).json({
       jwt : token ,
       successfulLogin : true
   });
}
