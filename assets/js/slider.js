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
