const { Tweets } = require('../models/Tweets');
const bcrypt = require('bcrypt');

module.exports = {
  create: (body) => {
    const newTweet = new Tweets(body);
    return newTweet.save();
  },
  find: () => Tweets.find({ is_active: true }),
  findById: (id) => Tweets.findById(id),
  update: (tweet, body) => {
    Object.assign(tweet, body);
    return tweet.save();
  },
}
