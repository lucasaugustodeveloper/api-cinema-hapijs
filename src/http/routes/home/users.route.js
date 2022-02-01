const Knex = require('../../../config/knex');

const birds = server => {
  server.route({
    path: '/auth',
    method: 'POST',
    handler: async (request, h) => {
      const { username, password } = request.payload;

      const user = await Knex('users')
        .where({
          username,
          password,
        })
        .select('name', 'username', 'guid', 'password')
        .then(result => {
          if (!result || !result.length) {
            return {
              error: true,
              message: 'the specified user was not found!'
            };
          }

          console.log('knex => ', result);

          const { name, username, guid } = result[0];

          return {
            dataCount: result.length,
            data: {
              name,
              username,
              guid
            },
          };
        });

      return user;
    },
  });
};

module.exports = birds;
