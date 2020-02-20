
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Meatloaf'},
        {id: 2, name: 'Mashed Potatoes'},
        {id: 3, name: 'Turkey Chili'}
      ]);
    });
};
