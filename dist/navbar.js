$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
            

        } else {

            $('.navbar').removeClass('active');
            

        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 200) {
            
            $('.triangle_down1').addClass('active');

        } else {

            
            $('.triangle_down1').removeClass('active');

        }
    });
});


