// var drinks = require('../db/drinks');
var data = require('../db/data');
 
let controlador = {
    index : function(req, res) {
        res.render('index', { title: 'Express' });
      },
    search : function(req, res) {
        res.render("search-results");
      },   
      index: function (req, res) {
        res.render('index', {drinks: data.drinks});
    }
}
module.exports = controlador
console.log(data.drinks[0].title);