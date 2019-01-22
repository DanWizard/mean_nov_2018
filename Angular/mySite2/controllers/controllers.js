var Import = require('../models/things');

module.exports = {
  restaurants: function(req, res){
    Import['restaurant'].find({}, function(err,restaurants){
      res.json({err: err, restaurants: restaurants});
    });
  },
  new: function(req, res){
    console.log('notcreated')
    var restaurant = new Import['restaurant']({name: req.body.name, cuisine: req.body.cuisine});
    restaurant.save(function(err, restaurant) {
      console.log('created')
      res.json({err: err, restaurant: restaurant});
    });
  },
  newReview: function(req, res){
    console.log('messagenotcreated')
    var review = new Import['review']({rating: req.body.star, review: req.body.review, name: req.body.name});
    review.save(function(err, restaurant) {
      Import['restaurant'].findByIdAndUpdate(req.params.id,{$push: {reviews:review}}, function(err,restaurant){})
      console.log('createdmessge')

      res.json({err: err, restaurant: restaurant});
    });

  },
  restaurant_id: function(req, res){
    Import['restaurant'].findById(req.params.id, function(err,restaurant){
      res.json({err: err, restaurant: restaurant});
    });
  },
  restaurant_update_id: function(req, res){
    console.log("enterUpdate")
    Import['restaurant'].findByIdAndUpdate(req.params.id, {name: req.body.name, cuisine: req.body.cuisine}, function(err,restaurant){
      console.log('updated')
      console.log(req.params)
      console.log(req.body)
      res.json({err: err, restaurant: restaurant});
    });
  },
  createCake: function(req, res){
    restaurant.create({}, function(err, ninjas){
      console.log('restaurant created');
      });
  },
  delete: function(req, res){
    Import['restaurant'].findByIdAndRemove(req.params.id, function(err,product){
      res.json({err: err, product: product});
    });
  },
}