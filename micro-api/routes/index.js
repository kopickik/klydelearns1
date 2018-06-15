var express = require('express');
var router = express.Router();

/* GET API. */
router.get('/', function(req, res, done) {
  let data = {
    title: 'Dave Brubeck & Co.',
    somedata: ['some', 'headers', 'keys', 'and ', 'stuff']
  }
  res.render('api-index', data, () => console.log('data loaded.'))
  done()
});

module.exports = router;
