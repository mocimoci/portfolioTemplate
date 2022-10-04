$(window).on('load',function(){
    $("#splash-logo").delay(500).fadeOut('slow');
    
    $("#splash").delay(500).fadeOut('slow',function(){
        $('body').addClass('appear');
    });
    $('.splashbg').on('animationend', function() {    
    });
        
});