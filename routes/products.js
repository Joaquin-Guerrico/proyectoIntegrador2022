var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController");
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });



/* GET home page. */
router.get('/', productController.products);

router.get('/product-edit/:id', productController.edit);
router.post('/product-edit/:id', upload.single('cover'), productController.update);

router.get('/product-add', productController.add);
//router.post('/product-add', productController.store);
router.post('/product-add', upload.single('cover'), productController.store);




router.get('/:id',productController.detail);

router.post('/:id/delete', productController.delete);
router.post('/:id/comment', productController.comment);


module.exports = router;
