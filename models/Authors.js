const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorsSchema = new Schema({
    picture: {
        type: String,
        required: false,
    },
    first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
    },
    biography: {
      type: String,
      required: true,
    },
    location: {
        type: String,
        required: true,
    },
    posts: {
        type: String,
        required: true,
    },
    github_link: {
        type: URL,
        required: false,
    },
    //Add a way to link news to authors
    news: {
        type: ...,
        required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
});

const Authors = mongoose.model('Authors', authorsSchema);

module.exports = { Authors, authorsSchema };