import mongoose from "mongoose"


const dbConnection = async function(){
const uri = "mongodb+srv://nishi:V7aITb2ycJRIA6Jo@cluster0.zjfve.mongodb.net/golang?retryWrites=true&w=majority";
mongoose.connect(
    uri,
    {   useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false,})
 
    console.log("Connected To Database"); 
}  

module.exports = dbConnection ; 
