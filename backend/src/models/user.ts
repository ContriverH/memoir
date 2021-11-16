import mongoose from "mongoose";


const schema = new mongoose.Schema({
    username : {
        type : String ,
        required : true ,
        min : 5 ,
        unique : true
    },
    password : {
        type : String ,
        required : true ,
        min : 5
    },
    email : {
        type : String ,
        required : true ,
        unique : true
    },
    firstName : {
        type : String ,
        required : true
    },
    lastName : {
        type : String ,
        required : false
    },
    countryOfUser : {
        type : String ,
        required : false
    },
    dateOfUserJoining : {
        type : Date ,
        default : Date.now
    },
    blogs: {
        type : String,   // we will store blog ids 
        required: false, 
    },  
});

const User =  mongoose.model("userEntity",schema,"userEntity");
module.exports = User; 
