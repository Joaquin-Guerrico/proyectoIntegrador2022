// var drinks = require('../db/drinks');
var data = require('../db/data');
 
let controlador = {

    index: function (req, res) {
        res.render('index', {drinks: data.drinks});
    },
    search : function(req, res) {
        res.render("search-results");
      }     
  }

module.exports = controlador
