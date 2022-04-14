
var drinks = require('../db/drinks');

const controlador= {
    
    detail : (req,res)=>{
        res.render("product")
    },
    edit : (req,res)=>{
        res.render("product-edit")
    },
    add : (req,res)=>{
        res.render("product-add")
    },
    products: function(req, res) {
        if (Object.keys(req.query).length !== 0) return res.send(drinks.findDrinksBy(req.query));
        res.render('products', { drinks: drinks.getAll() });
    },
    author: function(req, res) {
        const result = drinks.findDrinksBy({'title': req.params.title});
        res.render('drinks_index', { drinks: result });
    },
    show: function(req, res) {
        res.render('drinks_show', { drinks: drinks.findDrinksById(req.params.id)});
    }
};

module.exports = controlador;