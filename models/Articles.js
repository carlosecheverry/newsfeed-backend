const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  category: [
    {
      type: String,
      required: true,
    },
  ],
  is_active: {
    type: Boolean,
    default: true,
  },
});

const Articles = mongoose.model("Articles", articlesSchema);

module.exports = { Articles, articlesSchema };
