var fs = require('fs');
var token;, 
    userid = 1362124742, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 20; // how much photos do you want to get
function getAPIkey(callback){
	fs.readFile('../../apikey.txt', function read(err, data) {
		if(err){
			callback(err);
		}
		else{
			callback(null,data);
		}
	}
}

getAPIkey(function(err,key){ 
	token = key;
	$.ajax({
		url: 'https://api.instagram.com/v1/users/self/media/recent', // or /users/self/media/recent for Sandbox
		dataType: 'jsonp',
		type: 'GET',
		data: {access_token: token, count: num_photos},
		success: function(data){
	 		console.log(data);
			for( x in data.data ){
				var $a = $('<a href="'+data.data[x].link+'"target="_blank"></a>');
				var $li = $('<li><img src="'+data.data[x].images.low_resolution.url+'" class="img-responsive img-thumbnail"></li>');
				$a.append($li);
				$a.appendTo('ul.insta-list').hide();
				$('ul.insta-list a').each(function(i){
					if(i<6){
						$(this).show();
					}
				});
				 // data.data[x].images.low_resolution.url - URL of image, 306х306
				// data.data[x].images.thumbnail.url - URL of image 150х150
				// data.data[x].images.standard_resolution.url - URL of image 612х612
				// data.data[x].link - Instagram post URL 
			}
		},
		error: function(data){
			console.log(data); // send the error notifications to console
		}
	});
});




$('.button').click(function(){
	$('ul.insta-list a').each(function(i){
			$(this).fadeIn(600);
	});
	$(this).hide();
});

