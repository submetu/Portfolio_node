var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('work', { title: 'Express', path: req.baseUrl });
});
router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	if(id === 'treehouse_search'){
		res.render('treehouse_search', { title: 'Express', path: req.baseUrl });
	}
  
});

module.exports = router;
