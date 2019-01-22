var mongoose = require('mongoose');



var CommentSchema = new mongoose.Schema({
  comment: {
        type: String,
        minlength: [2, "Comment must be longer than two characters"],
        required: 'Comment is required',
  },
  rating: {
        type: Number,
        required: 'rating is required',
  },

})

var CakeSchema = new mongoose.Schema({
  name: {
      type: String,
      minlength: [2,"Your name is NOT a single letter"],
      required: 'First name is required',
  },

  image: {
      type: String,
      default: '',
  },
  comments: [CommentSchema],
  completed: {
      type: Boolean,
      default: false,
  }
}, {timestamps: true });


var Comment = mongoose.model('Comment', CommentSchema)
var Cake = mongoose.model('Cake', CakeSchema);
module.exports = {
  cake: Cake,
  comment: Comment,
}