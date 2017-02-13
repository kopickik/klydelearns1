'use strict'

require('seneca')().use('./ex8').listen({
    port: process.argv[2],
    host: '127.0.0.1'
})
