$(document).ready(function(){

  var fixedHeader = $('#fixedHeader');

  $(window).on('scroll', function() {

    var skillsOffsetTop = $('#skills').offset().top;

    if ($(window).scrollTop() >= skillsOffsetTop) {

      fixedHeader.css('margin-top', 0);

    } else if ($(window).scrollTop() <= skillsOffsetTop/2) {

      fixedHeader.css('margin-top', '-110px');
    }
  })

});
