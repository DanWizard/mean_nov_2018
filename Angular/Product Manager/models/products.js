var mongoose = require('mongoose');



var ProductSchema = new mongoose.Schema({
  title: {
        type: String,
        minlength: [2, "Comment must be longer than two characters"],
        required: 'Comment is required',
  },
  price:{
  	type: Number,
  	required: 'price is required'
  },
  url:{
  	type: String,
  	minlength:[2, "url must me longer than 2 character"],
  	required: 'url is required'
  } 

})

var Product = mongoose.model('Product', ProductSchema)
module.exports = Product