var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController");
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });



/* GET home page. */
router.get('/product-edit', productController.edit);
router.get('/product-add', productController.add);
router.post('/product-add', productController.store);
router.post('/product-add', upload.single('cover'), productController.store);

router.get('/', productController.products);
router.get('/:id',productController.detail);


module.exports = router;
