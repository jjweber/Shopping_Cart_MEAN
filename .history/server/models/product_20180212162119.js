const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  imPath: String,
  description: String,
  imageUrl: String,
  videoUrl: String,
  publishedAt: String,
});

module.exports = mongoose.model('video', videoSchema, 'videos');