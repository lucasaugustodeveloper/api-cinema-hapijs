const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    migrations: {
      tableName: 'knex_migrations',
      directory: './knex/migrations',
    },
    seeds: {
      tableName: 'knex_seeds',
      directory: './knex/seeds',
    },
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      charset: 'utf8',
    },
  },
};
