const express = require('express');
const router = express.Router();
const { AuthorsController } = require('../controller');
const { AuthorsValidator } = require('../validators')

router.post('/authors', AuthorsValidator.create, AuthorsController.create);
router.get('/authors', AuthorsController.find);
router.get('/authors/:id', AuthorsController.findById);
router.patch('/authors/:id', AuthorsController.findByIdAndUpdate);
router.delete('/authors/:id', AuthorsController.findByIdAndDelete);

module.exports = router;