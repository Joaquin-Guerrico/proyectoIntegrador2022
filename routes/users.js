const { Router } = require('express');
var express = require('express');
var router = express.Router();
let userController = require("../controllers/userController")
/* GET users listing. */
router.get('/', userController.profile);
router.get('/profile', userController.profile);


router.get('/login', userController.login );
router.get('./edit', userController.edit)

module.exports = router;
