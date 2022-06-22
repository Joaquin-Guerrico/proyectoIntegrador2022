var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

/* GET profile listing. */
router.get('/detail/:id', userController.profile);

// router.get('/hello', userController.hello)
router.get('/login', userController.login );
router.post('/login', userController.access);
router.get('/logout', userController.logout );

router.get('/profile-edit/:id', userController.edit);
router.post('/profile-edit/:id', upload.single('img'), userController.update);
// router.get('/profile-edit', userController.edit);
router.get('/register', userController.register);

router.post('/register', upload.single('img'), userController.store);

module.exports = router;