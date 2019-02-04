'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server();

server.connection({
  port: Number(process.argv[2]) || 8080,
  host: 'localhost'
})

server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => { reply('Hello hapi.')}
})

server.start(function (err) {
  if (err) { throw err }
  console.log(`Server running at: ${server.info.uri}`)
})