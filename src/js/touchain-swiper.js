import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

new Swiper(".video-swiper", {

  loop: true,

  autoplay: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});