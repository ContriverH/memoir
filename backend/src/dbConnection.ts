import mongoose from "mongoose"
require('dotenv').config(); 

const dbConnection = async function(){

    const  uri = process.env["MONGO_URL"] as string; 
    console.log(uri)
mongoose.connect(
    uri,
    {   useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false,})
 
    console.log("Connected To Database"); 
}  

module.exports = dbConnection;