var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var nconf = require('nconf');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',path:req.path });
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
router.post('/emailPost',function(req,res,next){
	
	var user_name = nconf.get('user_name');
	var password = nconf.get('password');
	var smtpTransport = nodemailer.createTransport("SMTP",{
	    service: "Gmail",
	    auth: {
	        user:user_name,
	        pass: password
	    }
	});

	var mailOptions = {
		to : 'sub.metu@gmail.com',
		from : req.body.email,
		subject:req.body.email,
		text : req.body.message
	}
	 console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
	     if(error){
		console.log(error.stack);
	         res.sendStatus(400);
	     }
	     else{
	        res.sendStatus(200);
	     }
	});
});
// router.post('/test',function(req,res,next){
// 	res.end('Test suceeded');
// });
module.exports = router;

