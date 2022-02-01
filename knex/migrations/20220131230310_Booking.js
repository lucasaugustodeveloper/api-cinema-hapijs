exports.up = function (knex) {
  return knex
    .schema
    .createTable('bookings', table => {
      table.increments();

      table.integer('customer_id')
        .unsigned()
        .references('id')
        .inTable('customers');

      table.integer('movie_showing_time_id')
        .unsigned()
        .references('id')
        .inTable('movie_showing_times')
        .comment('que filmes eles verão');

      table.dateTime('made_date')
        .comment('Quando foi feito');

      table.integer('seat_count')
        .comment('número de assentos reservados');
    });
};

exports.down = function (knex) {
  return knex
    .schema
    .dropTable('bookings');
};
