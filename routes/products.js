var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")
/* GET home page. */
router.get('/detail', productController.detail);
router.get('/edit', productController.edit);
router.get('/add', productController.add);
router.get('/', productController.products);

module.exports = router;
