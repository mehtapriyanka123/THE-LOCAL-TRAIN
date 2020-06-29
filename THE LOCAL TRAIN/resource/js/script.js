$(document).ready(function()
{
  // for sticky naigation
  $('.js--section-intro').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  }, {
    offset: '60px;'
  });

   //videos-type
   $('#videolink').magnificPopup({
     type:'iframe',
     iframe: {

        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: 'v=',

            src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
          },
          vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: '//player.vimeo.com/video/%id%?autoplay=1'
          },
          gmaps: {
            index: '//maps.google.',
            src: '%id%&output=embed'
          }

        },

        srcAction: 'iframe_src',

      }
   });
   $('.vidd').magnificPopup({
     delegate: 'a',
     type:'iframe',
     iframe: {

        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: 'v=',

            src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
          },
          vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: '//player.vimeo.com/video/%id%?autoplay=1'
          },
          gmaps: {
            index: '//maps.google.',
            src: '%id%&output=embed'
          }

        },

        srcAction: 'iframe_src',

      }
   });

   /* Mobile navigation */
   $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon i');

       nav.slideToggle(200);

       if (icon.hasClass('ion-navicon-round')) {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round');
       } else {
           icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round');
       }
   });

});
