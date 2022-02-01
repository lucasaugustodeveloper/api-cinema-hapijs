exports.up = function (knex) {
  return knex
    .schema
    .createTable('customers', table => {
      table.increments();

      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users');

      table.string('phone', 14).nullable();

      table.string('credit_card', 40);

      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex
    .schema
    .dropTable('customers');
};
