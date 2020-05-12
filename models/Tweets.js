const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetsSchema = new Schema({
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
});

const Tweets = mongoose.model('Tweets', tweetsSchema);

module.exports = { Tweets, tweetsSchema };