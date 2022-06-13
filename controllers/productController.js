// var data = require('../db/data');
var db = require('../database/models')

const controlador= {

    edit : (req,res)=>{
        res.render("product-edit")
    },
    add : (req,res)=>{
        res.render("product-add")
    },
    // products: function (req, res) {
    //     res.render('products', {data: data}, );
    // },
    products: function(req, res, next) {
        console.log(req.params);
        db.Productos.findAll()
        .then( (data) =>{
           res.render('products', {drinks: data});
        })
      
       .catch( (error)=> {
         res.send(error);
         })
       },

    detail: function (req, res) {
        
        res.send(req.params.id)

    }
    
};

module.exports = controlador;
