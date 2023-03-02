document.addEventListener('DOMContentLoaded', function () {
    //open mobile menu
    let burger = document.getElementById('burger');
    let mobileMenu = document.getElementsByClassName('mobile-menu');
    if (burger) {
        burger.addEventListener('click', function () {
            mobileMenu[0].classList.add('active');
        });
    }

    //close mobile menu
    let close = document.getElementById('closeMobile');
    if (close) {
        close.addEventListener('click', function () {
            mobileMenu[0].classList.remove('active');
        });
    }

    //swiper gallery
    const swiperGallery = new Swiper('.gallery__swiper', {
        loop: true,
        pagination: {
            el: '.gallery__swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.gallery__swiper-next',
            prevEl: '.gallery__swiper-prev',
        },
    })
});

