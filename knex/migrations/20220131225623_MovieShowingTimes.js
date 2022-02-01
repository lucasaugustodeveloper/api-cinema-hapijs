exports.up = function (knex) {
  return knex
    .schema
    .createTable('movie_showing_times', table => {
      table.increments();

      table.integer('movie_showing_id')
        .unsigned()
        .references('id')
        .inTable('movie_showings');

      table.string('hour_to_show', 23);
    });
};

exports.down = function (knex) {
  return knex
    .schema
    .dropTable('movie_showing_times');
};
