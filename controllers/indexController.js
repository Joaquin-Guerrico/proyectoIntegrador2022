// var drinks = require('../db/drinks');
var data = require('../db/data');
 
const controlador = {

    index:  (req, res) => {
        res.render('index', {drinks: data.drinks});
    },
    search : (req, res) => {
        res.render("search-results");
      }     
  }

module.exports = controlador
