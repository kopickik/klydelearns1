'use strict'

const Hapi = require('hapi')
const Path = require('path')
const H2o2 = require('h2o2');

const server = new Hapi.Server()

server.register(H2o2, function (err) {
  if (err) throw err
})

server.connection({
  port: Number(process.argv[2]) || 8080,
  host: 'localhost'
})

server.route({
  method: 'GET',
  path: '/proxy',
  handler: {
    proxy: {
      host: '127.0.0.1',
      port: 65535
    }
  }
})

server.start(function (err) {
  if (err) { throw err }
  console.log(`Server running at: ${server.info.uri}`)
})