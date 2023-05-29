$(document).ready(function () {

  // Mostrar y ocultar botón 'volver arriba'

  var btnVolverArriba = $('#btnVolverArriba');

  $(window).on('scroll', function() {

    var skillsOffsetTop = $('#skills').offset().top;

    if ($(window).scrollTop() >= skillsOffsetTop) {

      btnVolverArriba.css('margin-right', 0);

    } else if ($(window).scrollTop() <= skillsOffsetTop/2) {

      btnVolverArriba.css('margin-right', '-60px');
    }
  });




  $(window).on('load', function() {

    $('a.scroll-suave').on('click', function(e) {
      e.preventDefault();
      var headerHeight = $('.fixed-header').outerHeight();
      var seccionOffsetTop = $($(this).attr('href')).offset().top - headerHeight;
      $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 500);
    })

  $('a.scroll-projects').on('click', function(e) {
    e.preventDefault();
    var headerHeight = $('.fixed-header').outerHeight();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - headerHeight;
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 500);
  })

  $('a.scroll-contact').on('click', function(e) {
    e.preventDefault();
    var headerHeight = $('.fixed-header').outerHeight();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - headerHeight;
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 500);
  })
});

});
