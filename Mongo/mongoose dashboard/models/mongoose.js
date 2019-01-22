var mongoose = require('mongoose');

var MongooseSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: '',
  },
  age:{
  	type: Number,
  	default: 1,
  },
  name:{
  	type: String,
  	default: '',
  }
}, {timestamps: true });

var Mongoose = mongoose.model('Mongoose', MongooseSchema);
module.exports = Mongoose;