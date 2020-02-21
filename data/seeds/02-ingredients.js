
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'lb. of Ground beef', quantity: 1, recipe_id: 1},
        {id: 2, ingredient: 'onion', quantity: 1, recipe_id: 1},
        {id: 3, ingredient: 'Potatoes - large', quantity: 6, recipe_id: 2},
        {id: 4, ingredient: 'cup of Milk', quantity: 1, recipe_id: 2},
        {id: 5, ingredient: 'lb of Ground Turkey', quantity: 1, recipe_id: 3},
        {id: 6, ingredient: 'can of diced tomatoes', quantity: 1, recipe_id: 3},
        {id: 7, ingredient: 'can of black beans', quantity: 1, recipe_id: 3}
      ]);
    });
};
