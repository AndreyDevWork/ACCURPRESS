import $ from "jquery";
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {
    $('.action .action__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.action .arrow-left'),
        nextArrow: $('.action .arrow-right'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });


    $('.partner .action__slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: $('.partner .arrow-left'),
        nextArrow: $('.partner .arrow-right')
    });

    $('.product .product__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.product .arrow-left'),
        nextArrow: $('.product .arrow-right')
    });
});