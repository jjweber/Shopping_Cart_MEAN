const mongoose = require('mongoose');
const bcrypt =require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

userSchema.methods.encrypt

module.exports = mongoose.model('User', userSchema);