// var data = require('../db/data');
var hasher = require ('bcryptjs');
const { DATE } = require('sequelize');
var db = require('../database/models')

const controlador = {
    register: (req,res) =>{
        res.render("register")
    },

    store : async  function (req, res, next) {
        let nac=  new Date(req.body.date);
        let hoy = new Date();
        let resta= hoy.getTime() - nac.getTime();
        let edad=Math.round(resta/ (1000*60*60*24))
        console.log('la edad es'+ edad);
        try{
        if (!req.body.username) { throw Error ('Nombre de usuario es requerido.') }
        if (!req.body.email) { throw Error ('Email es requerido') }
        if (!req.body.password) { throw Error ('Contraseña es requerida') }
        if (req.body.password.length < 4) { throw Error ('Contraseña muy corta.') }
        if (!req.body.date) { throw Error ('Fecha de nacimiento es requerida.') }
        if (edad < 6570  ) { throw Error ('Debes ser mayor de 18 años.') }

        const usado =  await db.User.findOne({where: {email: req.body.email}})
        if (usado) {throw Error('Ya hay una cuenta registrada con ese email.')}
        } catch (err){
               return res.render('register',{error: err.message});      
        }

        if (req.file) req.body.img = (req.file.path).replace('public', '');
        const hashedpassword = hasher.hashSync(req.body.password, 10);
        db.User.create({
        username: req.body.username,
        password: hashedpassword,
        email: req.body.email,
        birthday:req.body.date,
        img: req.body.img

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
            db.User.findByPk(req.params.id, { include: [ { association: 'products' },
        {
            association:'comments'
        } ] })
                .then(function (usuario) {
                   // res.send(usuario)
                    res.render('profile', { usuario });
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


// access: function(req, res, next) {
//     db.User.findOne({ where: { username: req.body.username }})
//         .then(function(user) {
//             if (!user) throw Error('User not found.')
//             if (hasher.compareSync(req.body.password, user.password)) {
//                 req.session.user = user ;
//                 if (req.body.rememberme) {
//                     res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 7 })
//                 }
//                 res.redirect('/');
//             } else {
//                 throw Error('Su usuario y/o contraseña son incorrectos')
//             }
//         })
//         .catch(function (err) {
//             next(err)
//         })
// },