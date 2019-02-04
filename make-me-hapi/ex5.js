'use strict'

const Hapi = require('hapi')
const Path = require('path')
const Vision = require('vision')

const server = new Hapi.Server()

server.register(Vision, function (err) {
  if (err) throw err
})

server.connection({
  port: Number(process.argv[2]) || 8080,
  host: 'localhost'
})

server.views({
  engines: {
    html: require('handlebars')
  },
  path: Path.join(__dirname, 'templates')
})

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'index.html'
  }
})

server.start(function (err) {
  if (err) { throw err }
  console.log(`Server running at: ${server.info.uri}`)
})