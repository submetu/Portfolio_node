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
	if(id === 'movie_search'){
		res.render('movie_search', { title: 'Express', path: req.baseUrl });
	}
	if(id === 'tic_tac_toe'){
		res.render('tic_tac_toe', { title: 'Express', path: req.baseUrl });
	}
	if(id === 'interactive_form'){
		res.render('interactive_form', { title: 'Express', path: req.baseUrl });
	} 
	if(id === 'pagination'){
		res.render('pagination', { title: 'Express', path: req.baseUrl });
	}
	if(id === 'content_scraper'){
		res.render('content_scraper',{ title: 'Express', path: req.baseUrl });
	}
});

module.exports = router;
