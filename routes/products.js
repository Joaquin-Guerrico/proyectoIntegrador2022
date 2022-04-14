var express = require('express');
var router = express.Router();
let productController = require("../controllers/productController")
/* GET home page. */
router.get('/detail', productController.detail);
router.get('/edit', productController.edit);
router.get('/add', productController.add);
router.get('/', productController.index);
router.get('/title/:title', productController.author);
router.get('/:id', productController.show);

module.exports = router;
