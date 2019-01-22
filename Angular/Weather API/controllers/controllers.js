var Import = require('../models/weather');

module.exports = {
  cakes: function(req, res){
    Import['cake'].find({}, function(err,cakes){
      res.json({err: err, cakes: cakes});
    });
  },
  new: function(req, res){
    console.log('notcreated')
    var cake = new Import['cake']({name: req.body.name, image: req.body.url});
    cake.save(function(err, cake) {
      console.log('created')
      res.json({err: err, cake: cake});
    });
  },
  newComment: function(req, res){
    console.log('messagenotcreated')
    var comment = new Import['comment']({rating: req.body.rating, comment: req.body.comment});
    comment.save(function(err, cake) {
      Import['cake'].findByIdAndUpdate(req.params.id,{$push: {comments:comment}}, function(err,cake){})
      console.log('createdmessge')

      res.json({err: err, cake: cake});
    });

  },
  cake_id: function(req, res){
    Import['cake'].findById(req.params.id, function(err,cake){
      res.json({err: err, cake: cake});
    });
  },
  cake_update_id: function(req, res){
    console.log("enterUpdate")
    Import['cake'].findByIdAndUpdate(req.params.id, {title: req.body.title, description: req.body.description}, function(err,cake){
      console.log('updated')
      console.log(req.params)
      console.log(req.body)
      res.json({err: err, cake: cake});
    });
  },
  createCake: function(req, res){
    Cake.create({}, function(err, ninjas){
      console.log('cake created');
      });
  }
}