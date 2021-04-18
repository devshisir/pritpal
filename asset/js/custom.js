$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');

    

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 1) sticky.addClass('animate__animated animate__slideInDown fixed');
        else sticky.removeClass('animate__animated animate__slideInDown fixed');
      });

















    
});