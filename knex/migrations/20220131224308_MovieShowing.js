exports.up = function (knex) {
  return knex
    .schema
    .createTable('movie_showings', table => {
      table.increments();

      table.integer('cinema_id')
        .unsigned()
        .references('id')
        .inTable('cinema');

      table.integer('movie_id')
        .unsigned()
        .references('id')
        .inTable('movies');

      table.integer('room_id')
        .unsigned()
        .references('id')
        .inTable('rooms');

      table.date('show_date');

      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex
    .schema
    .dropTable('movie_showings')
};
