const home = server => {
  server.route({
    path: '/',
    method: 'GET',
    handler: (request, h) => {
      return ({
        version: '0.1.0',
        message: 'Enjoy the silence...'
      });
    },
  });
};

module.exports = home;
