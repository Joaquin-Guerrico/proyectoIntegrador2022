var db = require('../database/models')

const controlador= {

    edit : (req,res)=>{
        console.log(req.session.user);
        if (!req.session.user ){
            throw Error('No esta autorizado para navegar en esta sección, porfavor inicie sesion o cree una nueva.')
        }
        db.Productos.findByPk(req.params.id)
        .then((drinks) => {
            res.render("product-edit", {drinks});
        })
        .catch((error)=>{
            res.send(error);
        }) 
    },

    update: (req,res) => {
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
        if (!req.session.user){
            throw Error('No esta autorizado para navegar en esta sección, porfavor inicie sesion o cree una nueva.')
        }
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


    products:async (req, res, next) => {
         db.Productos.findAll(
            { include:{all: true, nested: true},
            order: [ ['created_at', 'DESC']]
        })
        .then( (data) =>{
           res.render('products', {drinks: data});
        })
      
       .catch( (error)=> {
         res.send(error);
         })
       },

    
    detail:(req, res, next) =>{

        let relations = {
            order: [['comments','created_at', 'DESC']],
            include: {
                all: true,
                nested: true
            }
        }

        db.Productos.findByPk(req.params.id, relations)
        .then( (data) =>{
            res.render('products-detail', {drinks: data});
        })
        
       .catch( (error)=> {
         res.send(error);
         })
       },

    delete: (req,res) =>{
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
