const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedsSchema = new Schema({
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

const Feeds = mongoose.model('Feeds', feedsSchema);

module.exports = { Feeds, feedsSchema };