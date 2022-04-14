var drinks = require('../db/data');

const controller = {
    index: function(req, res) {
        if (Object.keys(req.query).length !== 0) return res.send(drinks.findDrinksBy(req.query));
        res.render('drinks_index', { drinks: drinks.getAll() });
    },
    author: function(req, res) {
        const result = drinks.findDrinksBy({'title': req.params.title});
        res.render('drinks_index', { drinks: result });
    },
    show: function(req, res) {
        res.render('drinks_show', { drinks: drinks.findDrinksById(req.params.id)});
    }
};
module.exports = controller;