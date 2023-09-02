const swiper = new Swiper('.slider__swiper', {
    // Optional parameters
    
    slidesPerView: 1,
    spaceBetween: 35,
    loop: true,
    stopOnLastSlide: false,
    // autoplay: {
    //     delay: 3000,
    // },


    breakpoints: {
        // 561: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //     spaceBetween: 10,
        // },
        // 768: {
        //     slidesPerView: 3,
        //     slidesPerGroup: 3,
        //     spaceBetween: 10,
        // },

        561: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
        1025: {
            slidesPerView: 2,
            spaceBetween: 35,
                // disableOnInteraction: false,
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

// Фиксированная шапка
// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     let scrollPos = 200;
//     let header = document.querySelector('.header__maxcontainer');

//     if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
//         header.classList.add('active');
//     } else {
//         header.classList.remove('active');
//     }
// }

// Burger

const burger = document.querySelector('.header__burger');


if (burger) {
    const menu = document.querySelector('.header__navigation');

    burger.addEventListener('click', function (e) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    })

}