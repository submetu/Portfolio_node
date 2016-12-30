var $root= $('html, body');
var $introduction=$('<h1 class="tlt display-2">Hi, I\'m Subhan. I\'m a developer</h1>');

//TEXTILATION
$(document).ready(function(){ 
$introduction.prependTo('div.home-main div.container-fluid')
    $('.tlt').textillate(
        { in: { 
                sync: false,
                delay: 12
              },
         callback: function () {
            $introduction.show();
         }
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
//EMAIL FORM

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

$('#Email').on('input',function(){
    console.log('hi');
    if(validateEmail($(this).val())){
        $("#send").prop("disabled", false);
        $('#Email-error').text("");
    }
    else{
        $("#send").prop("disabled", true);
        $('#Email-error').text('Please enter a valid email');
    }
});

$('#atSign').on('click',function(){
    $('form').show();
    $('#sentMessageDialogue').css('display','none');
    $('#cantSentMessageDialogue').css('display','none');
    $("#send").prop("disabled", true);
    $('#Email').val("");
    $('#message').val("");
});


$('#email-form').on('submit',function(event){
    event.preventDefault();
    $('button').addClass('disabled');
    $('#Email,#message').attr('disabled','true');
    var email = $('#Email').val();
    var message = $('#message').val();
    $.post('http://subhannaeem.com/emailPost',{email:email,message:message},function(data){
        $('form').hide();
        $('button').removeClass('disabled');
        $('#Email,#message').removeAttr('disabled');
        $('#sentMessageDialogue').css('display','block');
        
    }).fail(function(response) {
        $('button').removeClass('disabled');
        $('#Email,#message').removeAttr('disabled');
        $('#cantSentMessageDialogue').css('display','block');
    });
});

$('#reset').on('click',function(){
    $('#Email').val("");
    $('#message').val("");
});

