import express from 'express'; 
const session = require('express-session'); 
const dbConfig = require("./dbConnection"); 
const router = require("./routers/routers")
const app = express(); 
 
app.use(express.json());
console.log("dbConfig")
dbConfig(); 
app.use("/",router); 

console.log("router")

app.listen(3003, ()=>{
    console.log("listening on port :", 3003);
});