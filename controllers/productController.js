var data = require('../db/data');
// var db = require('../db/models');

const controlador= {

    edit : (req,res)=>{
        res.render("product-edit")
    },
    add : (req,res)=>{
        res.render("product-add")
    },
    products: function (req, res) {
        res.render('products', {data: data}, );
    },
    
};

module.exports = controlador;
