exports.up = function (knex) {
  return knex
    .schema
    .createTable('genres', table => {
      table.increments();
      table.string('name', 100);
    });
};

exports.down = function (knex) {
  return knex
    .schema
    .dropTable('genres');
};
