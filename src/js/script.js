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

  $(window).scroll(function () {
    var top_of_element = $(".action__btn--js").offset().top;
    var bottom_of_element = $(".action__btn--js").offset().top + $(".action__btn--js").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
      $('.fixed-btn').addClass('fixed-btn--hidden');
    } else {
      $('.fixed-btn').removeClass('fixed-btn--hidden');
    }
  });

});
