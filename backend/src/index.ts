import express from 'express'; 
import { func } from 'joi';
const session = require('express-session'); 
const dbConfig = require("./dbConnection"); 
const router = require("./routers/routers")
const app = express(); 
 
app.use(express.json());

dbConfig(); 
app.use("/",router); 

app.listen(3003, ()=>{
    console.log("listening on port :", 3003);
});