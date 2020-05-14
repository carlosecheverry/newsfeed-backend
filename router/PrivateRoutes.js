const express = require('express');
const router = express.Router();

router.use(require('./UsersRoutes'));
router.use(require('./RolesRoutes'));
router.use(require('./ArticlesRoutes'));

module.exports = router;