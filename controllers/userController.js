var user = require ('../db/data')
let controlador = {
    register: (req,res) =>{
        res.render("register")
    },
    profile: (req,res) =>{
        res.render("profile")
    },
    login: (req,res) =>{
        res.render("/login")
    },
    edit: (req,res) =>{
        res.render("profile-edit")
    }
};
module.exports = controlador