const express = require('express');
const router = express.Router();
const { TweetsController } = require('../controller');
const { TweetsValidator } = require('../validators')

router.post('/tweets', TweetsValidator.create, TweetsController.create);
router.get('/tweets', TweetsController.find);
router.get('/tweets/:id', TweetsController.findById);
router.patch('/tweets/:id', TweetsController.findByIdAndUpdate);
router.delete('/tweets/:id', TweetsController.findByIdAndDelete);

module.exports = router;