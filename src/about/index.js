import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

new Swiper('.news-swiper', {
    slidesPerView: '5',
    spaceBetween: 20,
    centeredSlides: false,
    simulateTouch: false,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});