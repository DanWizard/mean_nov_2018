var people = require('mongoose');

const PeopleSchema = new people.Schema({
  name:{
  	type: String,
  	default: '',
  }
}, {timestamps: true });

var People = people.model('People', PeopleSchema);
module.exports = People