var data = require('../db/data');
// var db = require('../db/models');
var hasher = require ('bcryptjs');
const db = require('../database/models');

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
        console.log(req.body);
       
    },
    
    
        profile: (req,res) =>{
            res.render("profile",{ user: data})
        // function(req, res) {
        //     db.User.findByPk(req.session.user.id, { include: [ { association: 'users' } ] })
        //         .then(function (user) {
        //             res.render('profile', { user });
        //         })
        //         .catch((error) => {
        //             res.send(error)
        //         });
        },

    edit: (req,res) =>{
        res.render('profile-edit', { user: data.userInfo});
    },

    login: (req,res) =>{
        res.render("login")
    },
    
     access: function(req, res, next) {
        db.User.findOne({ where: { username: req.body.username }})
            .then(function(user) {
                        if (user.password == req.body.password) {
          res.redirect('/')
        } else {
          throw Error('Su usuario y/o contraseña son incorrectos')
        }
            })
            .catch(function (err) {
                next(err)
            })
    },
};
module.exports = controlador
// access: function(req,res){
//         const user= db.User.findOne({where: {username: req.body.username}})
//         if (user.password == req.body.password) {
//           res.redirect('/')
//         } else {
//           throw Error('Su usuario y/o contraseña son incorrectos')
//         }
//       },