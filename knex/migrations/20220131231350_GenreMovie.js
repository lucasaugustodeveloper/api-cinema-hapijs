exports.up = function (knex) {
  return knex
    .schema
    .createTable('genre_movie', table => {
      table.integer('movie_id')
        .unsigned()
        .references('id')
        .inTable('movies');

      table.integer('genre_id')
        .unsigned()
        .references('id')
        .inTable('genres');
    });
};

exports.down = function (knex) {
  return knex
    .schema
    .dropTable('genre_movie');
};
