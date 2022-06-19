var db = require('../database/models')

const controlador= {

    edit : (req,res)=>{
        db.Productos.findByPk(req.params.id)
        .then((drinks)=>{
            res.render("product-edit", {drinks});
        })
        .catch((err)=>{
            res.send(err);
        }) 
    },

    update: function(req,res){
        db.Productos.update(req.body, {where: { id: req.params.id }})
        .then((drink) => {
            res.redirect('/');
        })
        .catch((err)=>{
            res.send(err);
        })
    },

    add : (req,res)=>{
        res.render("product-add")
    },

    store: (req, res)=>{
        db.Productos.create (req.body)
        .then (() =>{
            res.redirect('/')
        })
        .catch ((err)=>{
        res.send(err);
        })   
    },


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

    
    detail:function(req, res, next) {
        db.Productos.findByPk(req.params.id)
        .then( (data) =>{
            res.render('products-detail', {drinks: data});
        })
        
       .catch( (error)=> {
         res.send(error);
         })
       },

    delete: function(req,res){
        db.Productos.destroy({where: {id: req.params.id}})
        .then(()=>{
            res.redirect('/');
        })
        .catch((err)=>{
            res.send(err);
        })
    },
    

       
    
};

module.exports = controlador;
