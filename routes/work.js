var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('work', { title: 'Express', path: req.baseUrl });
});
router.get('/:id', function(req, res, next) {
  res.render('index', { title: 'Express', path: req.baseUrl });
});

module.exports = router;
