
$(function() {
    
    $(window).scroll(function() {
        if($('.navbar-nav').is(":visible") && $(window).width() < 767) {
            $('.navbar-toggler').click(); 
        }
    });

});
  