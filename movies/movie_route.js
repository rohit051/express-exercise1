const express=require('express');
var Movie=require("./movie_schema");

var router =express.Router();

//post request
router.post('/',function(req,res){
var movie=new Movie({
	movie_id:req.body.movie_id,
	title:req.body.title,
	year:req.body.year,
	released_year:req.body.released_year,
	genre:req.body.genre,
	director:req.body.director,
	actor:req.body.actor,
	plot:req.body.plot,
	poster:req.body.poster,
	imdbid:req.body.imdbid
		});
	movie.save(function(err){
	if(err) res.send(err)
	else res.json({Msg: "Data is successfully stored"});
});
});

//Get request to find a particular data
router.get('/movie/:movie',function(req,res){
Movie.find({movie_id:req.params.movie},function(err,data){
if(err) res.send(err);
else res.json(data);
});
});

//Get request to find all data
router.get('/',function(req,res){
	Movie.find({},function(err,data){
		if(err) res.send(err);
		else res.json(data);
	});
});

// Delete request to delete a particular data
router.delete('/movie/:movie',function(req,res){
	Movie.deleteOne({movie_id:req.params.movie},function(err){
		if(err) res.send(err);
		else res.json({Msg:req.params.movie +" is successfully deleted"})
	});
});

//Delete request to delete all data
router.delete('/',function(req,res){
	Movie.deleteMany({},function(err){
		if(err) res.send(err);
		else res.json({Msg:"All data is successfully Daleted"})
	});
});

//put request to update a particular data
router.put('/movie/:movie',function(req,res){
Movie.updateOne({movie_id:req.params.movie},
{
	$set:{
			title:req.body.title,
			year:req.body.year,
			released_year:req.body.released_year,
			genre:req.body.genre,
			director:req.body.director,
			actor:req.body.actor,
			plot:req.body.plot,
			poster:req.body.poster,
			imdbid:req.body.imdbid
	}
},function(err){
	if(err) res.send(err);
	else res.json({Msg:req.params.movie+" is successfully updated"});
});
});

module.exports=router;