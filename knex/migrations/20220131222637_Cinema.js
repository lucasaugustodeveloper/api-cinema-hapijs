exports.up = function (knex) {
  return knex
    .schema
    .createTable('cinema', table => {
      table.increments();
      table.string('name', 100);
      table.string('screenshot', 120);
      table.string('address', 100);
      table.string('photo', 14);
      table.integer('seat_capacity');
      table.text('details')
    });
};

exports.down = function (knex) {
  return knex
    .schema
    .dropTable('cinema');
};
