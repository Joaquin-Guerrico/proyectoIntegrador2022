var data = require('../db/data');
const controlador = {
    register: (req,res) =>{
        res.render("register")
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