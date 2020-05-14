const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorsSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
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
    github_link: {
        type: String,
        required: false,
    },
    articles: [{
        type: Schema.Types.ObjectId,
        ref: "Articles"
    }],
    is_active: {
      type: Boolean,
      default: true,
    },
});

const Authors = mongoose.model('Authors', authorsSchema);

module.exports = { Authors, authorsSchema };