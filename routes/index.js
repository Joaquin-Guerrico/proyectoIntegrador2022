var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")
var db = require('../database/models')
/* GET home page. */
router.get('/', indexController.index);
router.get('/search-results', indexController.search);
router.get('/productos', function(req, res, next) {
    db.Product.findAll()
    .then(function (data) {
       res.send(data);
       
    })
   .catch(function (error) {
     res.send(error);
     
   })
   
  });


module.exports = router;
