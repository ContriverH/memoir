
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nishi:GkTlJBMbJd3h92EE@cluster0.zjfve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function dbConnection() {
    const c = await client.connect();
    if(c){
        console.log("Connected Successfully")
    }

    const database = client.db('golang'); 
    return database;     
}

dbConnection().catch(console.dir); 