var $root= $('html, body');
var $introduction=$('<h1 class="tlt display-2">Hi, I\'m Subhan. I\'m a Maker and a Web Developer</h1>');
$introduction.prependTo('div.home-main div.container-fluid').hide();
//TEXTILATION
$(function () {
    $introduction.show();
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
// $('#view-more').click(function(){
//     window.open ('work.html','_self',false)
// });

$('.view.view-tenth').click(function(){
    if (window.matchMedia("(max-width: 800px)").matches) {
        $('a.test').attr("href","");
    } 
});

$('#reset').on('click',function(){
    $('#Email').val("");
    $('#message').val("");
});




