
var data = require('../db/data');
var base = require ('../database/config/config.js')
//var route = require ('../routes/index')


// var db = require('../db/models');
 
const controlador = {

    index:  (req, res) => {
        res.render('index', {drinks: data.drinks});
    },
    search : (req, res) => {
        res.render("search-results");
      } ,
       
      
  }
  
module.exports = controlador;
