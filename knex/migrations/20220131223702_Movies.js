exports.up = function (knex) {
  return knex
    .schema
    .createTable('movies', table => {
      table.increments();

      table.string('name', 120);

      table.string('director', 100);

      table.string('screenshot', 100).notNullable();

      table.text('movie_synopsis');

      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex
    .schema
    .dropTable('movies');
};
