var Ninja = require('../models/ninjas');

module.exports = {
  createNinja: function(req, res){
    Ninja.create({}, function(err, ninjas){
      res.json({ninjas: ninjas}); 
    });
  },
  addGold: function(req, res){
    Ninja.findOne().sort({created_at: -1}).set({gold: gold}).exec(function(err, post){ 
      console.log('Ninja updated')});
  }
}