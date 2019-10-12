
$(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.nav-link').addClass('snap');
            $('.navbar').addClass('color-nav');
        } else {
            $('.nav-link').removeClass('snap');
            $('.navbar').removeClass('color-nav');
        }
    });

    $('.navbar-toggler').click(()=>{
        if($(document).scrollTop() < 50) {
            // if($('.navbar').hasClass('color-nav')) {
            //     $('.navbar').removeClass('color-nav');
            // } else {
            //     $('.navbar').addClass('color-nav');
            // }
            $('.navbar').toggleClass('color-nav');
        }
    });
});
  