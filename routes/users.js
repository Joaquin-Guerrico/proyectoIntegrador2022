const { Router } = require('express');
var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
/* GET profile listing. */
router.get('/', userController.profile);
router.get('/profile', userController.profile);


router.get('/login', userController.login );
router.get('/profile-edit', userController.edit);
router.get('/register', userController.register);


module.exports = router;