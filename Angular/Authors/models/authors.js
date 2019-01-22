var mongoose = require('mongoose');



var AuthorSchema = new mongoose.Schema({
  name: {
        type: String,
        minlength: [2, "Comment must be longer than two characters"],
        required: 'Comment is required',
  }

})

var Author = mongoose.model('Author', AuthorSchema)
module.exports = Author