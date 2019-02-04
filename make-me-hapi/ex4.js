'use strict'

const Hapi = require('hapi')
const Inert = require('inert')
const Path = require('path')

const server = new Hapi.Server()

server.register(Inert, function (err) {
  if (err) throw err
})

server.connection({
  port: Number(process.argv[2]) || 8080,
  host: 'localhost'
})

server.route({
  path: '/foo/bar/baz/{file}',
  method: 'GET',
  handler: {
    directory: { path: Path.join(__dirname, './public')}
  }
});

server.start(function (err) {
  if (err) { throw err }
  console.log(`Server running at: ${server.info.uri}`)
})