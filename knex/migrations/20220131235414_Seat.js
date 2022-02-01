exports.up = function (knex) {
  return knex
    .schema
    .createTable('seats', table => {
      table.increments();
      table.integer('rows').comment('row number for room');
      table.integer('number').comment('seat number for room and row');
      table.enum('state', ['available', 'booked'])
        .default('available');
      table
        .integer('booking_id')
        .unsigned()
        .references('id')
        .inTable('bookings');
    });
};

exports.down = function (knex) {
  return knex
    .schema
    .dropTable('seats');
};
