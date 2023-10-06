
// Фиксированная шапка
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    let scrollPos = 180;
    let header = document.querySelector('.header');

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

// Burger

const burger = document.querySelector('.header__burger');


if (burger) {
    const menu = document.querySelector('.header__navigation');

    burger.addEventListener('click', function (e) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    })

}