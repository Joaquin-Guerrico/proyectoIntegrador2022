var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")
/* GET home page. */
router.get('/product-edit', productController.edit);
router.get('/product-add', productController.add);
router.get('/', productController.products);
router.get('/detail/:id',productController.detail);


module.exports = router;
