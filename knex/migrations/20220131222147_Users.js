
exports.up = function (knex) {
  return knex
    .schema
    .createTable('users', table => {
      table.increments();
      table.string('username', 80).notNullable().unique();
      table.string('email', 255).notNullable().unique();
      table.string('password', 60).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex
    .schema
    .dropTable('users');
};
