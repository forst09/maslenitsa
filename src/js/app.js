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

    //accordion
    document.querySelectorAll('.accordion').forEach((item) => {
        item.addEventListener('click', function () {
            if (item.classList.contains('accordion--active')) {
                item.classList.remove('accordion--active');
            }
            else {
                const parent = item.closest('section');
                const currentAccordions = parent.querySelectorAll('.accordion');
                currentAccordions.forEach((item) => {
                    item.classList.remove('accordion--active');
                });
                item.classList.add('accordion--active');
            }
        })
    });

    //swiper gallery
    const swiperGallery = new Swiper('.gallery__swiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
            el: '.gallery__swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.gallery__swiper-next',
            prevEl: '.gallery__swiper-prev',
        },
        // breakpoints: {}
    })
});

