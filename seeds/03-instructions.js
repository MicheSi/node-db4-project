
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, recipe_id: 1, step_number: '1', step_instructions: 'Mix all ingredients in a bowl.'},
        {id: 2, recipe_id: 1, step_number: '2', step_instructions: 'Form into loaf shape and place into pan.'},
        {id: 3, recipe_id: 1, step_number: '3', step_instructions: 'Bake at 400 degrees for 1 hour.'},
        {id: 4, recipe_id: 2, step_number: '1', step_instructions: 'Wash, peel and cut potatoes.'},
        {id: 5, recipe_id: 2, step_number: '2', step_instructions: 'Cover potatoes in pot with cold water and boil for 45 minutes.'},
        {id: 6, recipe_id: 2, step_number: '3', step_instructions: 'Cream potatoes with a mixer, slowly adding milk to potatoes.'},
        {id: 7, recipe_id: 3, step_number: '1', step_instructions: 'Brown turkey in a pan.'},
        {id: 8, recipe_id: 3, step_number: '2', step_instructions: 'Add cooked turkey to slow cooker with beans and tomatoes and cook on low for 6 hours.'}
      ]);
    });
};
