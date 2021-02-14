'use strict'
// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 200,
//   // gutter: 35

// });

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  gutter: 30,
  horizontalOrder: true
});

// слайдер

$(document).ready(function(){
  $('.slider_wrapper').slick({
    infinite: true,
    speed: 100,
    fade: true,
    cssEase: 'linear',
    // autoplay: true,
    prevArrow: '<img class="prev" src="img/top_155.png" alt="1"></img>',
    nextArrow: '<img class="next" src="img/down_156.png" alt="2"></img>',
    dots: true,
    // asNavFor:
    // dotsClass: 'square',
  });
});






