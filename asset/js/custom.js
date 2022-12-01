+function ($) {
    // $(".menu_btn").click(function() {
    //     $("body").toggleClass("addPnnl");
    //     $(".overlay").click(function() {
    //         $("body").removeClass("addPnnl");
    //     })
    // });
    //   $('.dd_box a').on('click',function(event){
    //     var $anchor = $(this);
    //     $('html, body').animate({
    //       scrollTop: $($anchor.attr('href')).offset().top + "px"
    //     }, 1000);
    //     event.preventDefault();
    //  });
    $(document).ready(function () {
        if ($(window).width() < 992) {
            $(".d_down > a").click(function () {
                $('.dd_box').slideUp();
                $(".d_down > a").removeClass("up");
                if ($(this).parent(".d_down").find(".dd_box").css('display') == 'none') {
                    $(this).parent(".d_down").find(".dd_box").slideDown();
                    $(this).addClass("up");
                } else {
                    $(this).parent(".d_down").find(".dd_box").slideUp();
                    $(this).removeClass("up");
                }
            });
            $(".sub_menu > a").click(function () {
                $('.dd_menu').slideUp();
                $(".sub_menu > a").removeClass("up");
                if ($(this).parent(".sub_menu").find(".dd_menu").css('display') == 'none') {
                    $(this).parent(".sub_menu").find(".dd_menu").slideDown();
                    $(this).addClass("up");
                } else {
                    $(this).parent(".sub_menu").find(".dd_menu").slideUp();
                    $(this).removeClass("up");
                }
            });
        }
    });


    $('.stock_cntnr').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

    jQuery(document).ready(function ($) {
        $('.my-news-ticker').AcmeTicker({
            type: 'marquee',
            /*horizontal/horizontal/Marquee/type*/
            direction: 'left',
            /*up/down/left/right*/
            speed: 0.05,
            /*true/false/number*/
            /*For vertical/horizontal 600*/ /*For marquee 0.05*/ /*For typewriter 50*/
            controls: {
                toggle: $('.acme-news-ticker-pause'),
                /*Can be used for horizontal/horizontal/typewriter*/
                /*not work for marquee*/
            }
        });
    })
    // jQuery(document).ready(function ($) {
    //     function openNav() {
    //         document.getElementById("mySidenav").style.width = "250px";
    //     }

    //     function closeNav() {
    //         document.getElementById("mySidenav").style.width = "0";
    //     }
    // })
    $(window).on('load resize orientationchange', function () {
        $('.trade_with_us_cntnr').each(function () {
            var $carousel = $(this);
            if ($(window).width() > 991) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            }
            else {
                if (!$carousel.hasClass('slick-initialized')) {
                    $('.trade_with_us_cntnr').slick({
                        dots: true,
                        infinite: true,
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                }
                            }
                        ]
                    });
                }
            }
        });
    });


    new WOW().init();

}(jQuery);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}