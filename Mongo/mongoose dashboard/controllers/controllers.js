var Mongoose = require('../models/mongoose');

module.exports = {

  display: function(req, res){
    mongoose = Mongoose.find({}, function(err, mongoose) {
    	console.log(mongoose)
        res.render('home', {mongoose:mongoose});
    });
  },
  displayOne: function(req, res){
  	mongoose = Mongoose.findById(req.params.id, function(err, mongoose){
  		console.log(mongoose)
  		res.render('view', {mongoose:mongoose})
  	})
  },
  edit: function(req, res){
  	mongoose = Mongoose.findById(req.params.id, function(err, mongoose){
  		console.log(mongoose)
  		res.render('edit', {mongoose:mongoose})
  	})
  },
  edited: function(req, res){
  	query = {_id: req.params.id}
  	Mongoose.findOneAndUpdate(query, {$set:{name:req.body.name, age:req.body.age}}, function(err, mongoose){
  		if(err){
  			console.log('hello',err)
  		}
  		else{
  			res.redirect('/');
  		}
  		
  	})
  },
  displayNew: function(req, res){
  	res.render('new')
  },
  new: function(req, res){
  	Mongoose.create({name: req.body.name, age: req.body.age}, function(err, mongoose){
  		res.redirect('/')
  	})
  },
  delete: function(req, res){
  	Mongoose.deleteOne({_id: req.params.id}, function(err, mongoose){
  		res.redirect('/')
  	})
  }
}