const { log } = require('debug/src/browser');
const objectData = require('./data')

function randomNum () {
    return Math.floor(Math.random() * objectData.drinks.length);
}

function getRandomDrink () {
    return objectData.drinks[randomNum()];
}

function findDrinksById (id) {
    for (let i = 0; i < objectData.drinks.length; i++) {
        if (objectData.drinks[i].id == id) {
            return objectData.drinks[i];
        }
    }
    return undefined;
}

function findDrinksBy (criteria) {
    let drinks = [];
    for (let i = 0; i < objectData.drinks.length; i++) {
        Object.keys(criteria).forEach(key => {
            console.log(criteria[key]);
            if (
                objectData.drinks[i][key] 
                && (objectData.drinks[i][key].toUpperCase() == criteria[key].toUpperCase()
                || objectData.drinks[i][key].toUpperCase().includes(criteria[key]))
                ) {
                drinks.push(objectData.drinks[i]);
            }
        });
    }
    return drinks;
}

function getAll () {    return objectData.drinks;
}

module.exports = {
    getAll,
    getRandomDrink,
    findDrinksBy,
    findDrinksById
}
console.log(objectData.drinks );