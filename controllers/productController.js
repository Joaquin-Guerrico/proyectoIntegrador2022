var db = require('../database/models')

const controlador= {

    edit : (req,res)=>{
        db.Productos.findByPk(req.params.id)
        .then((drinks)=>{
            res.render("product-edit", {drinks});
        })
        .catch((error)=>{
            res.send(error);
        }) 
    },

    update: function(req,res){
        if (req.file) req.body.cover = (req.file.path).replace('public', '');
        db.Productos.update(req.body, {where: { id: req.params.id }})
        .then((drinks) => {
            res.redirect('/');
        })
        .catch((error)=>{
            res.send(error);
        })
    },

    add : (req,res)=>{
        res.render("product-add")
    },

    store: (req, res)=>{
       req.body.user_id = req.session.user.id;   //indica a la base de datos que el producto le pertenece a ese user
        if (req.file) req.body.cover = (req.file.path).replace("public", "");
        db.Productos.create (req.body)
        .then (() =>{
            res.redirect('/')
        })
        .catch ((error)=>{
        res.send(error);
        })   
    },

    comment: (req, res)=>{
        let productId = req.params.id
        let comentario ={
            product_id: productId,
            user_id:req.session.user.id,
            comment: req.body.comentario,
            created_at: Date.now()
        }

        db.Comment.create(comentario)
        .then (() =>{
            res.redirect('/products/'+productId)
        })
        .catch ((error)=>{
        res.send(error);
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
        db.Productos.findByPk(req.params.id,{
            include:[{
                association:'comments',
                include:{association:'author'}
            },
        {
            association : 'owner'
        }]
        })
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
