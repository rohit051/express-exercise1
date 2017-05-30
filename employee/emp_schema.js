var mongoose=require('mongoose')

var Schema=mongoose.Schema;

// Create Employee Schema
var empschema=new Schema({
emp_id:{type:String,required:true,unique:true},
emp_name:String,
phone:Number,
password:{type:String,required:true},
email:String
});

var employee=mongoose.model('emp_data',empschema);
module.exports=employee;