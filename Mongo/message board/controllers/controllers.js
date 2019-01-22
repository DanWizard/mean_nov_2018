var Imports = require('../models/users');

module.exports = {

  display: function(req, res){
    messages = Imports[1].find({}, function(err, messages){
      console.log(messages)
      res.render('home', {messages: messages}) 
    })

     
  },
  add: function(req, res){
    console.log('inside add')
    user = Imports[0].create({name: req.body.name}, function(err, user){
      console.log('inside user function')
        m = new Imports[1]({
           content : req.body.message,
           user : user
         });
        m.save(function(err){
          if(err){
            // if there is an error upon saving, use console.log to see what is in the err object 
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/');
          }
          else {
            res.redirect('/');
          }
        });
    })
    
    }
}