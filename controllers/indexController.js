
var db = require('../database/models')
var op = db.Sequelize.Op;


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
      db.Productos.findAll({ 
      where: {
            [op.or]: [
              { title: { [op.like]: "%"+req.query.criteria+"%"} },
              { id: { [op.like]: "%"+req.query.criteria+"%"} }
            ]
        },
    }).then((data) =>{
            res.render('search-results', { drinks:data });
        })
        .catch( (error)=> {
          res.send(error);
          })
  }}
  
module.exports = controlador;
