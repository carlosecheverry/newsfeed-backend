const express = require('express');
const router = express.Router();
const { FeedsController } = require('../controller');
const { FeedsValidator } = require('../validators')

router.post('/feeds', FeedsValidator.create, FeedsController.create);
router.get('/feeds', FeedsController.find);
router.get('/feeds/:id', FeedsController.findById);
router.patch('/feeds/:id', FeedsController.findByIdAndUpdate);
router.delete('/feeds/:id', FeedsController.findByIdAndDelete);

module.exports = router;