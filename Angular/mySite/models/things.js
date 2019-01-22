var mongoose = require('mongoose');



var ReviewSchema = new mongoose.Schema({
  name:{
     type: String,
      minlength: [3,"Your name needs to be three characters long"],
      required: 'First name is required',
  },
  review: {
        type: String,
        minlength: [3, "review must be longer than two characters"],
        required: 'review is required',
  },
  rating: {
        type: Number,
        required: 'rating is required',
  },

})

var RestaurantSchema = new mongoose.Schema({
  name: {
      type: String,
      minlength: [2,"Your name is NOT a single letter"],
      required: 'First name is required',
  },

  cuisine: {
      type: String,
      default: '',
      minlength: [3, 'cuisine msut be atleast 3 characters'],
      required: 'cuisine is required'
  },
  reviews: [ReviewSchema],
  completed: {
      type: Boolean,
      default: false,
  }
}, {timestamps: true });


var Review = mongoose.model('Review', ReviewSchema)
var Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = {
  restaurant: Restaurant,
  review: Review,
}