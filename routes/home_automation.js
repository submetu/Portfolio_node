var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('home_automation', { title: 'Express', path: req.baseUrl });
});
router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	if(id === 'step1'){
		res.render('home_automation_step1', { title: 'Express', path: req.baseUrl });
	}
	
});

module.exports = router;
