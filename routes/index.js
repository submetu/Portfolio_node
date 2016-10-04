var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about',function(req,res,next){
	res.send("About page under construction");
});
router.get('/contact',function(req,res,next){
	res.send("Contact page under construction");
});

module.exports = router;
