require('dotenv').config();
const Hapi = require('@hapi/hapi');
const Knex = require('./src/config/knex');

const routes = require('./src/http/routes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT_APP,
    host: process.env.HOST_APP,
  });

  await server.register(require('hapi-auth-jwt2'));
  server.auth.strategy('jwt', 'jwt', {
    key: process.env.PRIVATE_KEY,
    verifyOptions: {
      algorithms: ['HS256'],
    },
    validate: true,
  });

  // server.auth.default('jwt');

  routes(server);

  await server.start();

  console.log(`Server is running on %s`, server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();

