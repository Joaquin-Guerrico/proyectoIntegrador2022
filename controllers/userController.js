var data = require('../db/data');
// var db = require('../db/models');
var hasher = require ('bcryptjs');
const db = require('../database/models');
const res = require('express/lib/response');

const controlador = {
    register: (req,res) =>{
        res.render("register")
    },

    store :  function (req, res) {
        if (!req.body.email) { throw Error ('Not email provided.') }
        const hashedpassword = hasher.hashSync(req.body.password, 10);
        db.User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        })
        .then (() => {
        res.redirect ('/');
        })  
        .catch( (error) =>{
            res.send(error);
        })
    },
    
    profile: (req, res) => {
        res.render('profile', { user: data});
    },
    
    login: (req,res) =>{
        res.render("login")
    },
    edit: (req,res) =>{
        res.render('profile-edit', { user: data.userInfo});
    },
};
module.exports = controlador