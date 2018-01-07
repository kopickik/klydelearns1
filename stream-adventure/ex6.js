const concat = require('concat-stream')

process.stdin
  .pipe(concat(function(wordBuffer) {
    var word = wordBuffer.toString().split('').reverse().join('')
    console.log(word)
  }))
