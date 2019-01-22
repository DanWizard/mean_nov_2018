var user = require('mongoose');

const UserSchema = new user.Schema({
  name:{
  	type: String,
  	default: '',
    required: [true, 'Must include name']
  }
}, {timestamps: true });

const MessageSchema = new user.Schema({
  content:{
    type: String,
    default: '',
    required: [true, 'Must include message']
  },
  user: UserSchema
}, {timestamps: true });

var User = user.model('User', UserSchema);
var Message = user.model('Message', MessageSchema)
module.exports = [User, Message] 