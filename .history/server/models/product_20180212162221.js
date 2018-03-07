const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  imagePath: {type: String, required: true},
    
});

module.exports = mongoose.model('video', videoSchema, 'videos');