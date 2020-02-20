
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable().index();
  })
  .createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('ingredient', 255).notNullable();
        tbl.float('quantity').notNullable();

        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
  })
  .createTable('instructions', tbl => {
        tbl.increments();

        tbl.integer('step_number')
            .unsigned()
            .notNullable();
        tbl.text('step_instructions').notNullable();

        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
