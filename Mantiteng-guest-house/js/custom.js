$(function () {

   'use strict';

   var isMobile = {
      Android: function () {
         return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
         return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
         return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
   };

   // Main Menu Superfish
   var mainMenu = function () {

      $('#fh5co-primary-menu').superfish({
         delay: 0,
         animation: {
            opacity: 'show'
         },
         speed: 'fast',
         cssArrows: true,
         disableHI: true
      });

   };

   // Offcanvas and cloning of the main menu
   var offcanvas = function () {

      var $clone = $('#fh5co-menu-wrap').clone();
      $clone.attr({
         'id': 'offcanvas-menu'
      });
      $clone.find('> ul').attr({
         'class': '',
         'id': ''
      });

      $('#fh5co-page').prepend($clone);

      // click the burger
      $('.js-fh5co-nav-toggle').on('click', function () {

         if ($('body').hasClass('fh5co-offcanvas')) {
            $('body').removeClass('fh5co-offcanvas');
            $(this).removeClass('active');
         } else {
            $('body').addClass('fh5co-offcanvas');
            $(this).addClass('active');
         }
         // $('body').toggleClass('fh5co-offcanvas');

      });

      $('#offcanvas-menu').css('height', $(window).height());

      $(window).resize(function () {
         var w = $(window);


         $('#offcanvas-menu').css('height', w.height());

         if (w.width() > 769) {
            if ($('body').hasClass('fh5co-offcanvas')) {
               $('body').removeClass('fh5co-offcanvas');
            }
         }

      });

   }


   // Click outside of the Mobile Menu
   var mobileMenuOutsideClick = function () {
      $(document).click(function (e) {
         var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
         if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('fh5co-offcanvas')) {
               $('body').removeClass('fh5co-offcanvas');
            }
         }
      });
   };

   var counter = function () {
      $('.js-counter').countTo({
         formatter: function (value, options) {
            return value.toFixed(options.decimals);
         },
      });
   };

   var contentWayPoint = function () {
      var i = 0;
      $('.animate-box').waypoint(function (direction) {

         if (direction === 'down' && !$(this.element).hasClass('animated')) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function () {

               $('body .animate-box.item-animate').each(function (k) {
                  var el = $(this);
                  setTimeout(function () {
                     el.addClass('fadeInUp animated');
                     el.removeClass('item-animate');
                  }, k * 200, 'easeInOutExpo');
               });

            }, 100);

         }

      }, { offset: '85%' });
   };


   var fullHeight = function () {

      if (!isMobile.any()) {
         $('.js-fullheight').css('height', $(window).height() - $('#fh5co-header').height());
         $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height() - $('#fh5co-header').height());
         });
      }

   };


   //Date Picker

   $('#date-start, #date-end').datepicker();

   [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
      new SelectFx(el);
   });

   var sendmail = function () {

      $('#submit-email').on('click', function () {
         console.log('testing submit email');
         var startDate = $('#date-start').val();
         var endDate = $('#date-end').val();
         if (startDate == "") {
            alert('Please select state date')
            return false
         }

         if (endDate == "") {
            alert('Please select end date')
            return false
         }

         var selected = $('#guest-houses option:selected').val();
         $(this).attr('href', 'mailto:mantiteng@gmail.com?body= Hi Mantiteng Guest house. I want to place a reservation for a ' + selected + ' from ' + startDate + ' to ' + endDate + ' &subject=Booking request for ' + selected)
      });
   }
   var sendMessage = function () {
      $('#submit').on('click', function (e) {
         var name = $('#user-name').val();
         var email = $('#user-email').val();
         var message = $('textarea#user-message').val();
         if (name == "") {
            alert('Please enter a name')
            return false;
         }
         if (email == "") {
            alert('Please enter a email')
            return false;
         }
         if (message == "") {
            alert('Please enter a message')
            return false;
         }
         location.href = 'mailto:mantiteng@gmail.com?body= Hi Mantiteng, My name is ' + name + '. My email address is ' + email + '. ' + message + '&subject=Guest House Enquiries';
      })
   }
   // Tabs

   var tabs = function () {
      $('#hotel-facilities').css('height', $('.tab-content.active').height() + 600);

      $(window).resize(function () {
         $('#hotel-facilities').css('height', $('.tab-content.active').height() + 600);
      });

      $('.tabs-nav > a').on('click', function (e) {

         var tab = $(this).data('tab');

         $('.tabs-nav > a').removeClass('active');
         $(this).addClass('active');

         $('.tab-content').removeClass('active show');

         setTimeout(function () {
            $('.tab-content[data-tab-content="' + tab + '"]').addClass('active');
            $('#hotel-facilities').css('height', $('.tab-content.active').height() + 600);
         }, 200);
         setTimeout(function () {
            $('.tab-content[data-tab-content="' + tab + '"]').addClass('show');
         }, 400);


         e.preventDefault();
      });
   };

   var sliderMain = function () {

      $('#fh5co-hero .flexslider').flexslider({
         animation: "fade",
         slideshowSpeed: 5000,
         directionNav: true,
         start: function () {
            setTimeout(function () {
               $('.slider-text').removeClass('animated fadeInUp');
               $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
            }, 500);
         },
         before: function () {
            setTimeout(function () {
               $('.slider-text').removeClass('animated fadeInUp');
               $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
            }, 500);
         }

      });

      $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
      $(window).resize(function () {
         $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
      });

   };

   // Parallax
   var parallax = function () {
      $(window).stellar();
   };


   $(function () {
      sliderMain();
      tabs();
      mainMenu();
      offcanvas();
      contentWayPoint();
      mobileMenuOutsideClick();
      parallax();
      fullHeight();
      counter();
      sendmail();
      sendMessage();
   });

});

