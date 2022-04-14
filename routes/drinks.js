var express = require('express');
var router = express.Router();
var controller = require('../controllers/drinks');

router.get('/', controller.index);
router.get('/title/:title', controller.title);
router.get('/:id', controller.show);

module.exports = router;
