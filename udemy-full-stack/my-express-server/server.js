//jshint esversion;6

const express = require("express");

 const app = express();

 app.get("/", function(req,res){
   res.send("<h1>Hello, world!</h1>");
 });

 app.get("/contact", function(req,res){
   res.send("Contact me at: sebkaug@gmail.com");
 });

 app.get("/about", function(req,res){
   res.send("I am working towards becoming a full stack development");
 });


 app.listen(3000, function(){
   console.log("Server has started on port 3000");
 });
