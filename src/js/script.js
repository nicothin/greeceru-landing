$(document).ready(function() {

  // карусель отзывов
  $('#feedback-slider').owlCarousel({
    responsive: {
      0: {
        autoWidth: true,
        loop: true,
      },
      1170: {
        autoWidth: false,
        items: 3,
        loop: true,
      },
    }
  });
  $('#feedback-slider-next').on('click', function (e) {
    e.preventDefault();
    $('#feedback-slider').trigger('next.owl.carousel');
  });
  $('#feedback-slider-prev').on('click', function (e) {
    e.preventDefault();
    $('#feedback-slider').trigger('prev.owl.carousel');
  });

});
