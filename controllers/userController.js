var data = require('../db/data');
let controlador = {
    register: (req,res) =>{
        res.render("register")
    },
    // profile: (req,res) =>{
    //     res.render("profile")
    // },
    profile: function(req, res) {
        res.render('profile', { user: data.userInfo});
    },
    login: (req,res) =>{
        res.render("login")
    },
    edit: (req,res) =>{
        res.render("profile-edit")
    },
    showUser: function (req, res) {
        let user = '/images/users/messi.jpg';
        return res.render ('imagen', { picture: user})
    }
    
};
module.exports = controlador 

console.log(data.userInfo);