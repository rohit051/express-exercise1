const express=require('express');
var Emp=require("./emp_schema");

var router =express.Router();

//Post Request
router.post('/',function(req,res){
	var emp = new Emp({
		emp_id:req.body.emp_id,
		emp_name:req.body.emp_name,
		phone:req.body.phone,
		email:req.body.email,
		password:req.body.password
	});
	emp.save(function(err){
if(err) res.json({err:err.errmsg});
else res.json({Msg:"successfully Stored"});
	});
})

//Get Request TO find All Data
router.get('/',function(req,res){
		Emp.find({},function(err,data){
			if(err) res.send({});
			else res.json(data);
	});
});

//Get Request to find single data
router.get('/empid/:empid',function(req,res){
	Emp.find({emp_id:req.params.empid},function(err,data){
		if(err) res.send(err);
		else res.json(data);
	});
});

//Delete request to delete a single data
router.delete('/empid/:empid',function(req,res){
	Emp.deleteOne({emp_id:req.params.empid},function(err){
		if(err) res.send(err);
		else res.json({Msg:req.params.empid +" is successfully deleted"});
	});
});

//Delete request to delete All data
router.delete('/',function(req,res){
	Emp.deleteMany({},function(err){
		if(err) res.send(err);
		else res.json({Msg:"All data is successfully deleted"});
	});
});

//Put Request to update a single data
router.put('/empid/:empid',function(req,res){
	Emp.updateOne({emp_id:req.params.empid},
	{
		$set:{
				emp_name:req.body.emp_name,
				phone:req.body.phone,
				email:req.body.email,
				password:req.body.password

			}
	},function(err){
		if(err) res.send(err);
		else res.json({Msg:req.params.empid + " is successfully updated."});

		});
});

module.exports=router;