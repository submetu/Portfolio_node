var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',path:req.path });
});
router.get('/home_automation', function(req, res, next) {
  res.render('home_automation',{ title: 'Express', path:req.path});
});
router.get('/about',function(req,res,next){
	res.render('about', { title: 'Express', path: req.path });
});
router.get('/contact',function(req,res,next){
	res.render('contact', { title: 'Express', path: req.path });
});
router.get('/photos',function(req,res,next){
	res.render('photos', { title: 'Express', path: req.path });
});

module.exports = router;
