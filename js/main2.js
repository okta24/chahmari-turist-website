(function ($) {


  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled affix', $(this).scrollTop() > $nav.height());
    $nav.toggleClass('navbar_trasparent', $(this).scrollTop() < $nav.height());
  });

 $("#myNav").affix({
        offset: { 
            top: $(".header").outerHeight(true)  /* Set top offset equal to header outer height including margin */
        }
    });

$(".carousel1 .item").hover(function(){
    $(this).toggleClass("b_s_b_sh");
  });
$(".cart_item_content ").hover(function(){
    $(this).toggleClass("b_s_b_sh");
  });
 /* zoom light box*/

$(".gallery-3").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find(
                        'img');
                }
            }
        });

/* zoom light box*/



/*vertical tab*/

$("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });


/*vertical tab*/
/*7777777777777777777*/
 $('.carousel_5').carousel();
/*7777777777777777777*/
/*66666666666666666666666666*/

$('.slider-3').on('init', function(event, slick){
   var $items = slick.$dots.find('li');
   $items.addClass('transparent-circle');
   $items.find('button').remove();
});


$('.slider-3').slick({
            fade: true,
            autoplay: true,
            dots: true,
            dotsClass: 'slick-dots',

        });
/*66666666666666666666666666*/
/*555555555555555555555555555*/
$('.slider-6').on('init', function(event, slick){
   var $items = slick.$dots.find('li');
   $items.addClass('transparent-circle');
   $items.find('button').remove();
});


$('.slider-6').slick({
            fade: true,
            autoplay: true,
            dots: true,
            dotsClass: 'slick-dots',

        });
$('.slider-talar').on('init', function(event, slick){
   var $items = slick.$dots.find('li');
   $items.addClass('transparent-circle');
   $items.find('button').remove();
});


$('.slider-talar').slick({
            fade: true,
            autoplay: true,
            dots: true,
            dotsClass: 'slick-dots',

        });
/*555555555555555555555555555*/

AOS.init({
  duration: 800,
  easing: 'slide'
});

/*owl-carousel1*/
// loader
  var loader = function() {
    setTimeout(function() { 
      if($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

var carousel = (function() {
$('.carousel1').owlCarousel({
      loop: false,
      items:1,
      margin: 30,
      stagePadding: 10,
      nav: true,
      navText: ['<span class="fa fa-caret-left  ">', '<span class="fa fa-caret-right">'],
      responsive:{
        0:{
          items: 1
        },
        600:{
          items: 2
        },
        1000:{
          items: 3
        }
      }
    });

/*$('.carousel2').owlCarousel({
      loop: false,
      items:1,
      margin: 30,
      stagePadding: 10,
      nav: true,
      navText: ['<span class="fa fa-caret-left  ">', '<span class="fa fa-caret-right">'],
      responsive:{
        0:{
          items: 1
        },
        600:{
          items: 2
        },
        1000:{
          items: 3
        }
      }
    });*/
 });  



 carousel();

/*owl-carousel1*/

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  items:3,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});


/*$('.carousel').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 150,
            itemMargin: 5
        });*/

$('.carousel-2').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

})(jQuery);