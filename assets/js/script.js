
$(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50 && $(window).width() > 767) {
            $('.nav-link').addClass('snap');
            $('.navbar').addClass('color-nav');
        } else {
            $('.nav-link').removeClass('snap');
            $('.navbar').removeClass('color-nav');
        }

        if($('.navbar-nav').is(":visible") &&  $(window).width() < 768 ) {
            $('.navbar-toggler').click(); 
            $('.navbar').removeClass('color-nav');
        }
    });

    $('.navbar-toggler').click(()=>{
        // if($(document).scrollTop() < 50) {
            $('.navbar').toggleClass('color-nav');
        // }
    });

});
  