var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")
var db = require('../database/models')
/* GET home page. */
router.get('/', indexController.index);
router.get('/search-results', indexController.search);

router.get('/valen', function(req, res, next) {
  db.Productos.findAll()
  .then( (data) =>{
    //  res.send(data); 
     res.render('productstry', {drinks: data});
  })

 .catch( (error)=> {
   res.send(error);
   })
 });

  //Para traer uno solo por id :
 router.get('/productos/:id', function(req, res, next) {
  db.Productos.findByPk(req.params.id)
  .then( (data) =>{
     res.send(data); 
  })
  
 .catch( (error)=> {
   res.send(error);
   })
 });


module.exports = router;
