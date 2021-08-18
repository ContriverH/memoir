import { json } from 'body-parser';
import express from 'express'; 
import mongoose from "mongoose"
var bodyParser = require("body-parser"); 
const uri = "mongodb+srv://nishi:V7aITb2ycJRIA6Jo@cluster0.zjfve.mongodb.net/golang?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser : true, useUnifiedTopology:true})
 
const db = mongoose.connection; 
db.on('error', console.error.bind(console,'connection error: ')); 
db.once('open',function(){
       console.log("connected"); 
}); 
// create application/x-www-form-urlencoded parser
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const Blog = require('./models/blog'); 
const User = require("./models/user"); 
const app = express(); 
var jsonParser = bodyParser.json(); 
app.listen(3003, ()=>{
    console.log("listening on port :", 3003);
});
app.post("/blogs", jsonParser,async (req, res) => {
    console.log("+++++++++" + req.toString() + req.body.title +  "+++++++++++++++++")

	const post = new Blog({
		"title": req.body.title,
		"snippet": req.body.content,
        "body": req.body.body, 
	})
	await post.save()
	res.send(post)
}); 

app.post('/register', jsonParser,async (req, res)=>{
    console.log(req.body.uesr); 
    var user = new User({
        "username": req.body.username, 
        "email": req.body.email, 
        "password": req.body.password, 
    }); 
    await user.save(user); 
    res.send(user); 
}) ; 

app.post('/login',jsonParser,async (req,res)=>{
    console.log(req.body.username); 
    var x =await User.findOne({"username": req.body.username} );
    if(x == null){
        res.send("user not found");
    }
    res.send(x); 
}); 




app.get('/users', async (req,res)=>{
    var user =await User.find()
    res.send(user);
 }); 


// to get a single blog by its id ... 
app.get('/search-single-blog', async (req,res)=>{
   const x= await Blog.findById(req.body); 
   res.send(x); 
}); 


app.get('/all-blogs', async (req,res)=>{
   const x = await Blog.find();
   res.send(x); 
});
// analysing the request and response 
// tempering req
// jwt can be modified 
// mechanism is manipulated > dos id paramater BAC....
// WAY BACK , GITHUB , Directory fuzzing , Google Dorks 
// exif metadata : Stored images file upload functions 
// csrf .. token can be removed, another account token can be used.
// multifactor authentication 
// wayback urls 
// github recon = juicy information 
// 