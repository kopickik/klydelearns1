'use strict'

const Hapi = require('hapi')
const Inert = require('inert')

const server = new Hapi.Server();

server.register(Inert, function (err) {
  if (err) throw err
})

server.connection({
  port: Number(process.argv[2]) || 8080,
  host: 'localhost'
})

server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: './index.html'
  }
})

server.start(function (err) {
  if (err) { throw err }
  console.log(`Server running at: ${server.info.uri}`)
})