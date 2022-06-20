
var db = require('../database/models')
const { Op } = require("sequelize");
// var db = require('../db/models');
 
const controlador = {

    index: function(req, res,) {
        db.Productos.findAll()
        .then( (data) =>{
           res.render('index', {drinks: data});
        })
      
       .catch( (error)=> {
         res.send(error);
         })
       },
       

    search :  (req,res,next)=>{
      console.log('buscaste:'+ req.query.search);

      db.Productos.findAll({
        where: [
          { title: { [Op.like]: '%' + req.query.search + '%' } }
        ]
        
      })
      .then( (data) =>{
         res.render('products', {drinks: data});
      })
    
     .catch( (error)=> {
       res.send(error);
       })
  },

       
      
  }
  
module.exports = controlador;
