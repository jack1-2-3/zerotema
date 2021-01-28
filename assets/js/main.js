// header

// scroll observer
window.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobMenu = document.querySelector('.header_inner');
    hamburger.addEventListener('click', function () {
        mobMenu.classList.toggle('open');
    });

    const headerLinks = document.querySelectorAll('.js_header-link');
    headerLinks.forEach((link) => {
        link.addEventListener('click', function () {
            mobMenu.classList.remove('open');
        });
    });
    new ScrollObserver('.js_scroll', function (el, inview) {
        if (inview) {
            el.classList.add('js_scroll-active');
        }
    });
    new ScrollObserver('.js_swiper', function (el, inview) {
        if (inview) {
            const mySwiper = new Swiper('.swiper-container', {
                // Optional parameters
                loop: true,
                effect: 'fade',
                centeredSlides: true,
                slidesPerView: 1,
                autoplay: true,
                speed: 1000,
                slideActiveClass: 'js_swiper-active',
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                }
            });
        }
    });
});
