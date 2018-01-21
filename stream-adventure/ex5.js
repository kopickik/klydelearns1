/* LINES */
const through = require('through2')
const split = require('split2')

let lineNumber = 1

process.stdin
  .pipe(split())
  .pipe(through(function (line, _, next) {
    this.push(lineNumber % 2 === 0
      ? line.toString().toUpperCase()+'\n'
      : line.toString().toLowerCase()+'\n'
    )
    lineNumber++
    next()
  }))
  .pipe(process.stdout)