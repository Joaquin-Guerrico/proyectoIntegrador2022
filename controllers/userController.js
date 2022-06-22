// var data = require('../db/data');
var hasher = require ('bcryptjs');
var db = require('../database/models')

const controlador = {
    register: (req,res) =>{
        res.render("register")
    },

    store :  function (req, res) {
        if (!req.body.email) { throw Error ('Not email provided.') }
        const hashedpassword = hasher.hashSync(req.body.password, 10);
        db.User.create({
        username: req.body.username,
        password: hashedpassword,
        email: req.body.email,
        
        })
        .then (() => {
        res.redirect ('/');
        })  
        .catch( (error) =>{
            res.send(error);
        })
       
    },
    
    profile:
        function(req, res) {
            db.User.findByPk(req.session.user.id, { include: [ { association: 'products' } ] })
                .then(function (user) {
                    res.render('profile', { user });
                })
                .catch((error) => {
                    res.send(error)
                });
        },

    edit: (req,res) =>{
        res.render('profile-edit');
    },

    edit : (req,res)=>{
        db.User.findByPk(req.params.id)
        .then((drinks)=>{
            res.render("profile-edit", {drinks});
        })
        .catch((error)=>{
            res.send(error);
        }) 
    },

    update: function(req,res){
        if (req.file) req.body.img = (req.file.path).replace('public', '');
        db.User.update(req.body, {where: { id: req.params.id }})
        .then((drinks) => {
            if(req.body.username){
                req.session.user.username = req.body.username
            }
            res.redirect('/');
        })
        .catch((error)=>{
            res.send(error);
        })
    },

    login: function(req, res) {
        res.render('login', { title: 'Login'});
    },

    access: function(req, res, next) {
        db.User.findOne({ where: { username: req.body.username }})
            .then(function(user) {
                if (!user) throw Error('User not found.')
                if (hasher.compareSync(req.body.password, user.password)) {
                    req.session.user = user ;
                    if (req.body.rememberme) {
                        res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 7 })
                    }
                    res.redirect('/');
                } else {
                    throw Error('Su usuario y/o contraseña son incorrectos')
                }
            })
            .catch(function (err) {
                next(err)
            })
    },
    logout:function (req,res,next) {
        req.session.user = null;
        res.clearCookie('userId');
        res.redirect('/')
    }
};
module.exports = controlador
