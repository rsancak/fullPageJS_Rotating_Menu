$(document).ready(function () {
  new fullpage('#fullpage', {
    verticalCentered: false,
    css3: true,
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    anchors: ['page-anchor-1', 'page-anchor-2', 'page-anchor-3', 'page-anchor-4', 'page-anchor-5'],
    onLeave: function (origin, destination, direction) {
      var rotating = $('#rotating');
      $('.page-name').removeClass('actived');
      $('#page-name-' + (destination.index + 1)).addClass('actived');
      if (0 === destination.index) {
        rotating.css('transform', 'rotate(0deg)');
      } else {
        rotating.css('transform', 'rotate(-' + 22.5 * (destination.index) + 'deg)');
      }
    }
  });
});