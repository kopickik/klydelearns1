/* HTTP SERVER */
const http = require('http')
const through = require('through2')
const fs = require('fs')
const split = require('split2')

let PORT = process.argv[2] || 8000

function write (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}

function end (done) {
  fs.createWriteStream('post.txt', done)
  done()
}

let server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(split())
      .pipe(through(write, end))
  }
  res.end()
})

server.listen(PORT)