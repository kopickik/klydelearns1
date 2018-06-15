var express = require('express');
var router = express.Router();

const rest = require('rest');

router.get('/', (req, res, next) => {
  rest('http://localhost:9000/api')
  .then(response => response.send(response.entity))
  .catch(error =>   console.error('Problem: ', error.stack))
})

module.exports = router;
