import express from 'express'; 
const dbConfig = require("./dbConnection"); 
const router = require("./routers/routers")
const app = express(); 

app.use(express.json());

dbConfig(); 

app.use("/",router); 

app.listen(3003, ()=>{
    console.log("listening on port :", 3003);
});