var db = require('../database/models')
const { Op } = require("sequelize");

const controlador = {

   index: (req, res,) => {
        db.Productos.findAll({ include:{all: true, nested: true},
          order: [ ['created_at', 'DESC']]
      })
        .then( (data) =>{
           res.render('index', {drinks: data});
           
        })
      
       .catch( (error)=> {
         res.send(error);
         })
       },
       

    search :  (req,res,next)=>{
      db.Productos.findAll({include:{all: true, nested: true},
        where:{
          [Op.or]: [
          { title: { [Op.like]: '%' + req.query.search + '%' } },      
          { description: { [Op.like]: '%' + req.query.search + '%' }}  
        ]}
        
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
