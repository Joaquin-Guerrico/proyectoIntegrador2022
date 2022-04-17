var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")
/* GET home page. */
router.get('/detail', productController.detail);
router.get('/product-edit', productController.edit);
router.get('/product-add', productController.add);
router.get('/', productController.products);

module.exports = router;
