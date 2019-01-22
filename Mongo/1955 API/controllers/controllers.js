var People = require('../models/people');

module.exports = {
  display: function(req, res){
     People.find({}, function(err, people){
      console.log(people)
      res.json({list: people})
    })
  },
  add: function(req, res){
    People.create({name: req.params.name}, function(err, people){
      res.json('added')
    })
  },

  remove: function(req,res){
    People.deleteOne({name: req.params.name}, function(err, people){
      res.json('deleted')
    })
  },
  view: function(req, res){
    People.findOne({name: req.params.name}, function(err, people){
      res.json({list: people})
    })
  }
  
}