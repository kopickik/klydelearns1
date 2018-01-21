/* MEET PIPE */
const fs = require('fs')

module.exports = fs.createReadStream(process.argv[2])
  .pipe(process.stdout)