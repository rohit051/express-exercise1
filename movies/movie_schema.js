var mongoose=require('mongoose');

var Schema=mongoose.Schema;

//Create Movie Schema
var movieschema=new Schema({
movie_id:{type:String,required:true,unique:true},
title:String,
year:String,
released_year:String,
genre:String,
director:String,
actor:String,
plot:String,
poster:String,
imdbid:{type:String,unique:true}
})

var movies=mongoose.model('movie_data',movieschema);
module.exports=movies;
