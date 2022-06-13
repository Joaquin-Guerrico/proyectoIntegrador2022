
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
       

    search : (req, res) => {
        res.render("search-results");
      } ,
      productos: (req,res)=>{
        db.Productos.findAll()
        .then( (data) =>{
           res.render('productos', {drinks: data});
        })
      
       .catch( (error)=> {
         res.send(error);
         })
    }
       
      
  }
  
module.exports = controlador;
