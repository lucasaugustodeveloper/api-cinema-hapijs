exports.up = function (knex) {
  return knex
    .schema
    .createTable('rooms', table => {
      table.increments();
      table
        .integer('cinema_id')
        .unsigned()
        .references('id')
        .inTable('cinema');
      table.integer('rows');
      table.integer('seats');
      table.integer('number');
    });
};

exports.down = function (knex) {
  return knex
    .schema
    .dropTable('rooms');
};
