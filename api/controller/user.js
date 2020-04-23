var Story=require('../model/EmployeeModel') // schema
var Person=require('../model/EmployeeModel')
const mongoose = require('mongoose');


module.exports.register=(req,res)=>{
	name= req.body.name;
	age =req.body.age;
	title=req.body.title;

	const author = new Person.Person({
		_id: new mongoose.Types.ObjectId(),
		name: name,
		age: age
	  })
	  
	  author.save(function (err) {
		if (err) return handleError(err);
	  
		const story1 = new Story.Story({
		  title: title,
		  author: author._id    
		});
	  
		story1.save(function (err) {
		  if (err) return handleError(err);
		  
		});
	  });
}

module.exports.populate=(req,res)=>{
	//console.log(module.exports)
	Story.Story.
  findOne({title:req.body.title}).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    
  });
}