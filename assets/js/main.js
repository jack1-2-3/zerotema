'use strict';
// header
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

// scroll observer
window.addEventListener('DOMContentLoaded', function () {
    new ScrollObserver('.js_scroll', function (el, inview) {
        if (inview) {
            el.classList.add('js_scroll-active');
        }
    });
});
