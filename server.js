//Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

require('dotenv').config()

var app = express();
//setup express app to handle data parsing from post requests in db.js
app.use(express.json());
// app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//render homepage
app.use("/", express.static(path.join(__dirname,"public")));
//when using require('x') method, the file called JS attempt to locate x.js, x.json, x.index.js file 
//routes for /api/users and /api/products
//to create users, use postman to make a post request at /api/users
app.use("/api", require("./routes/api").route);

module.exports = app.listen(2678, function(){console.log("Server started at http://localhost:2678")});