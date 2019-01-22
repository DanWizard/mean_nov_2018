
var express = require("express");
console.log("Let's find out what express is", express);


var app = express();
console.log("Let's find out what app is", app);

var session = require('express-session');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
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


// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.post("/show", function (request, response){
  request.session.name = request.body.name
  request.session.Location = request.body.Location
  request.session.Language = request.body.Language
  request.session.comment = request.body.comment
  console.log(request.session)
    response.render('display', request.session);
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})  