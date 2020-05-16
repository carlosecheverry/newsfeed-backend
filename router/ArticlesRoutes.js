const express = require('express');
const router = express.Router();
const { ArticlesController } = require('../controller');
const { ArticlesValidator } = require('../validators');

router.post('/articles', ArticlesValidator.create, ArticlesController.create );
router.get('/articles', ArticlesController.find);
router.get('/articles/:id', ArticlesController.findById);
router.patch('/articles/:id', ArticlesController.findByIdAndUpdate);
router.delete('/articles/:id', ArticlesController.findByIdAndDelete);

module.exports = router;