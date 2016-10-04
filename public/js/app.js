var $root= $('html, body');
var $introduction=$('<h1 class="tlt">My name is Subhan Naeem and I\'m a web developer</h1>');
$('div.home-main div.container-fluid').prepend($introduction);
//TEXTILATION
$(function () {
    $('.tlt').textillate(
        { in: { 
                sync: false,
                delay: 12
              },
        }
    );
})

$('.home-main a').hide();
$('.home-main a').fadeIn(2000);

//SCROLL ANIMATION
$('.home-main a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
    return false;
});
$('.recent-work .get-in-touch a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
    return false;
});
$('#view-more').click(function(){
    window.open ('work.html','_self',false)
});



