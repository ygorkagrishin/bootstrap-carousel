$(document).ready(() => {
  $('#modal').modal({
    backdrop: false,
    show: true
  });
});

$(window).load(() => {
  $('#modal .btn').click(() => {
    setTimeout(() => {
      if (!$('#modal').hasClass('hide'))
        $('#modal').modal('hide');

      $('.carousel').carousel();
    }, 5000);
  });
});