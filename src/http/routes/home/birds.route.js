const Knex = require('../../../config/knex');

const birds = server => {
  server.route({
    path: '/birds',
    method: 'GET',
    handler: async (request, h) => {
      const birds = await Knex('birds')
        .where({
          isPublic: true,
        })
        .select('name', 'species', 'pictures_url')
        .then(result => {
          if (!result || !result.length) {
            return {
              error: true,
              message: 'no public bird found!'
            };
          }

          return {
            dataCount: result.length,
            data: result,
          };
        });

      return birds;
    },
  });
};

module.exports = birds;
