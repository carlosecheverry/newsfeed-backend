const { UsersService, TweetsService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const tweet = await TweetsService.create(req.body);
      res.status(201).send(tweet)
    } catch (err) {
      res.status(400).send({ message: 'Error creating tweet', err }); 
    }
  },
  find: async (req, res) => {
    try {
      const tweets = await TweetsService.find();
      res.status(200).send(tweets)
    } catch (err) {
      res.status(404).send({ message: 'Tweets not found', err });
    }
  },
  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const tweet = await TweetsService.findById(id);
      res.status(200).send(tweet)
    } catch (err) {
      res.status(404).send({ message: 'Tweet not found', err });
    }
  },
  findByIdAndUpdate: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const tweet = await TweetsService.findById(id);
      const updatedTweet = await TweetsService.update(tweet, body);
      res.status(200).send(updatedTweet)
    } catch (err) {
      res.status(404).send({ message: 'Tweet not found', err });
    }
  },
  findByIdAndDelete: async (req, res) => {
    const { id } = req.params;
    try {
      const tweet = await TweetsService.findById(id);
      await TweetsService.update(tweet, { is_active: false });
      res.status(204).send();
    } catch (err) {
      res.status(404).send({ message: 'Error deleting tweet', err });
    }
  },
}