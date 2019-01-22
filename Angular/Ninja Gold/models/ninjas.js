var mongoose = require('mongoose');

var NinjaSchema = new mongoose.Schema({
  title: {
      type: String,
      minlength: [2,"Your name is NOT a single letter"],
      required: 'First name is required',
  },
  description: {
      type: String,
      default: '',
  },
  completed: {
      type: Boolean,
      default: false,
  }
}, {timestamps: true });

var Ninja = mongoose.model('Ninja', NinjaSchema);
module.exports = Ninja;