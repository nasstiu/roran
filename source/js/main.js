$(document).ready(function () {
    $('.members__container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.clients__items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    var filterizd = $('.filtr-container').filterizr({});
    if ($(window).width() <= 960) {
        $(".header__menu").mmenu({
            'offCanvas': {
                position: 'right'
            }
        });
        var API = $(".mm-menu.header__menu").data("mmenu");
        $(".header__sandwich").click(function () {
            API.open();
            API.close();
        });
    }
});
