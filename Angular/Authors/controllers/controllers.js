var Author = require('../models/authors');

module.exports = {
  authors: function(req, res){
    Author.find({}, function(err,authors){
      res.json({err: err, authors: authors});
    });
  },
  new: function(req, res){
    console.log('notcreated')
    console.log(req.body)
    var author = new Author({name: req.body.name});
    author.save(function(err, author) {
      console.log('created')
      res.json({err: err, author: author});
    });
  },
  delete: function(req, res){
    Author.findByIdAndRemove(req.params.id, function(err,author){
      res.json({err: err, author: author});
    });
  },
  author_id: function(req, res){
    Author.findById(req.params.id, function(err,author){
      res.json({err: err, author: author});
    });
  },
  author_update_id: function(req, res){
    console.log("enterUpdate")
    Author.findOneAndUpdate({ _id:req.params.id},{$set:{name:req.body.name} }, function(err,author){
      console.log('updated')
      console.log(req.params)
      console.log(req.body)
      res.json({err: err, author: author});
    })
  },
}