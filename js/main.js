$(function(){
    'use strict';

    //Adjust Slider
    var winH      = $(window).height(),
        upperNavH = $('.upper-nav').innerHeight(),
        navbarH   = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height( winH - (upperNavH + navbarH));

});