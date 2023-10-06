const swiper = new Swiper('.slider__swiper', {
    // Optional parameters

    slidesPerView: 1,
    spaceBetween: 35,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 2500,
    },


    breakpoints: {
        561: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
        1025: {
            slidesPerView: 2,
            spaceBetween: 35,
        },
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
