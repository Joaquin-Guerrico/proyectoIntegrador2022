
var db = require('../database/models')


// var db = require('../db/models');
 
const controlador = {

    index: function(req, res, next) {
        db.Productos.findAll()
        .then( (data) =>{
           res.render('index', {drinks: data});
        })
      
       .catch( (error)=> {
         res.send(error);
         })
       },

    detalle:function(req, res, next) {
        db.Productos.findByPk(req.params.id)
        .then( (data) =>{
           res.send(data); 
        })
        
       .catch( (error)=> {
         res.send(error);
         })
       },

    search : (req, res) => {
        res.render("search-results");
      } ,
       
      
  }
  
module.exports = controlador;
