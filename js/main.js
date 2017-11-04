$(function(){
    'use strict';

    //Adjust Slider
    var winH      = $(window).height(),
        upperNavH = $('.upper-nav').innerHeight(),
        navbarH   = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height( winH - (upperNavH + navbarH));

    // Start Featured Work shuffle-images
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if( $(this).data('class') === 'all' ) {
            $('.featured-work .shuffle-images img').css('opacity', 1);
        }
        else {
            $('.featured-work .shuffle-images img').css('opacity', 0.1);
            $($(this).data('class')).css('opacity', 1);
        }
    });

});