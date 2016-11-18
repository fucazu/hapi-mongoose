const Hapi = require('hapi')

module.exports = function (db) {
  const server = new Hapi.Server()
  server.connection({
    host: 'localhost',
    port: 8000
  })

  // Add the route
  server.route([{
    method: 'GET',
    path: '/hello',
    handler: (request, reply) => {
      return reply('hello world')
    }
  }, {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      return reply('raiz da API')
    }
  }])

  // Start the server
  server.start((err) => {
    if (err) {
      throw err
    }
    console.log('Server running at:', server.info.uri)
  })
  return server
}
