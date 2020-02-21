const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('ingredients as i')
        .join('recipes as r', 'r.id', 'i.recipe_id')
        .select('i.id', 'r.name', 'i.ingredient', 'i.quantity')
        .where('i.recipe_id', id);
}

function getInstructions(id) {
    return db('instructions as i')
        .join('recipes as r', 'r.id', 'i.recipe_id')
        .select('i.id', 'r.name','i.step_number', 'i.step_instructions')
        .where('i.recipe_id', id)
}