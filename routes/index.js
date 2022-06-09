var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")
var db = require('../database/models')
/* GET home page. */
router.get('/', indexController.index);
router.get('/search-results', indexController.search);

  //Para traer uno solo por id :
 router.get('/productos/:id', indexController.detalle);


module.exports = router;
