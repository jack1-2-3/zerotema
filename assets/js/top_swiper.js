$(function() {
    var swiper = new Swiper('.favorites', {
        spaceBetween: 40,
        slidesPerView: 4,
        speed: 400,
        navigation: {
            nextEl: '.favorites__block .swiper-button-next',
            prevEl: '.favorites__block .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1.1,
                spaceBetween: 15,
                slidesOffsetAfter: 15,
            },
            680: {
                slidesPerView: 1.5,
                spaceBetween: 15,
                slidesOffsetAfter: 15,
            },
            980: {
                slidesPerView: 2.1,
                spaceBetween: 15,
                slidesOffsetAfter: 15,
            },
            1366: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
})

$(function() {
    var swiper = new Swiper('.closeby', {
        spaceBetween: 40,
        slidesPerView: 4,
        speed: 400,
        navigation: {
            nextEl: '.closeby__block .swiper-button-next',
            prevEl: '.closeby__block .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1.1,
                spaceBetween: 15,
                slidesOffsetAfter: 15,
            },
            680: {
                slidesPerView: 1.5,
                spaceBetween: 15,
                slidesOffsetAfter: 15,
            },
            980: {
                slidesPerView: 2.1,
                spaceBetween: 15,
                slidesOffsetAfter: 15,
            },
            1366: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
})

$(function() {
    var swiper = new Swiper('.new', {
        spaceBetween: 40,
        slidesPerView: 4,
        speed: 400,
        navigation: {
            nextEl: '.new__block .swiper-button-next',
            prevEl: '.new__block .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1.1,
                spaceBetween: 15,
                slidesOffsetAfter: 15,
            },
            680: {
                slidesPerView: 1.5,
                spaceBetween: 15,
                slidesOffsetAfter: 15,
            },
            980: {
                slidesPerView: 2.1,
                spaceBetween: 15,
                slidesOffsetAfter: 15,
            },
            1366: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
})

$(function() {
    var swiper = new Swiper('.category', {
        spaceBetween: 40,
        slidesPerView: 6,
        slidesPerGroup: 6,
        speed: 1000,
        navigation: {
            nextEl: '.category__block .swiper-button-next',
            prevEl: '.category__block .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2.75,
                spaceBetween: 15,
                speed: 400,
                slidesPerGroup: 1,
                slidesOffsetAfter: 15,
            },
            680: {
                slidesPerView: 3.75,
                spaceBetween: 15,
                speed: 400,
                slidesPerGroup: 1,
                slidesOffsetAfter: 15,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 15,
                speed: 400,
                slidesPerGroup: 1,
                slidesOffsetAfter: 15,
            }
        }
    });
})

$(function() {
    var swiper = new Swiper('.mv__carousel', {
        spaceBetween: 20,
        slidesPerView: 4.25,
        speed: 400,
        initialSlide: 11,
        navigation: {
            nextEl: '.mv__category .swiper-button-next',
            prevEl: '.mv__category .swiper-button-prev',
        },
        breakpoints: {
            680: {
                slidesPerView: 2.5,
                spaceBetween: 15,
                slidesOffsetAfter: 15,
            },
            980: {
                slidesPerView: 3.5,
                spaceBetween: 15,
                slidesOffsetAfter: 15,
            },
            1920: {
                slidesPerView: 3,
            }
        }
    });
})