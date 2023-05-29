$('[lang="es"]').hide();

$('.lang-switch').change(function () {
  var lang = $(this).val();
  $('[lang]').hide();
  switch (lang) {
    case 'en':
      $('[lang="en"]').show();
      break;
    case 'es':
      $('[lang="es"]').show();
      break;
    default:
      $('[lang="en"]').show();
  }
});
