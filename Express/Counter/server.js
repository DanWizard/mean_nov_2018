
var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);

var session = require('express-session');

var app = express();

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
  count: 0
}))

app.get('/', function(request, response) {
  request.session.count += 1;

   response.render("home", request.session);
})
// this is the line that tells our server to use the "/static" folder for static content
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.post("/reset", function (request, response){
    request.session.count = 0
    response.redirect('/');
})