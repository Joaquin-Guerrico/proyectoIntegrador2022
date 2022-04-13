var express = require('express');
var router = express.Router();
let productController = require("../controllers/productController")
/* GET home page. */
router.get('/', productController.detail);
router.get('/edit', productController.edit);

module.exports = router;
