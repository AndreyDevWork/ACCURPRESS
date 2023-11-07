import $ from "jquery";
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {
    $('.action__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')

    });
});