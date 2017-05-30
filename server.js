const express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

var emp=require("./employee/emp_route");
var movie=require("./movies/movie_route");

var app=express();
app.use(bodyParser.urlencoded({extended:false}))

// Create DB Connection
mongoose.connect('mongodb://localhost/mymovies')

//for Employee Route
app.use('/employee',emp);

//for movies Route
app.use('/movie',movie);

//Start server at port 8080
app.listen(8080,function(){
	console.log('server started at : 8080');
});
