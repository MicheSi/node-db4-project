const db = require('../data/db-config');

module.exports = {
    getIngredients,
    getIngredientRecipes
}

function getIngredients() {
    return db('ingredients')
}

function getIngredientRecipes(id) {
    return db('recipes as r')
        .join('ingredients as i', 'r.id', 'i.recipe_id')
        .select('i.ingredient', 'r.name')
        .where('i.id', id)
}

