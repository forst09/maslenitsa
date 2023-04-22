'use strict';
document.addEventListener('DOMContentLoaded', function () {
    //open mobile menu
    let burger = document.getElementById('burger');
    let mobileMenu = document.getElementsByClassName('mobile-menu');
    if (burger) {
        burger.addEventListener('click', function () {
            mobileMenu[0].classList.add('active');
            document.querySelector('body').classList.add('not-scroll');
        });
    }

    //close mobile menu
    let close = document.getElementById('closeMobile');
    if (close) {
        close.addEventListener('click', function () {
            mobileMenu[0].classList.remove('active');
            document.querySelector('body').classList.remove('not-scroll');
        });
    }

    //accordion
    document.querySelectorAll('.accordion').forEach((item) => {
        item.addEventListener('click', function () {
            const content = item.querySelector('.accordion__text');
            if (item.classList.contains('accordion--active')) {
                item.classList.remove('accordion--active');
                content.style.maxHeight = null;
                item.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
            }
            else {
                const parent = item.closest('section');
                const currentAccordions = parent.querySelectorAll('.accordion');
                currentAccordions.forEach((item) => {
                    item.classList.remove('accordion--active');
                    item.querySelector('.accordion__text').style.maxHeight = null;
                    item.setAttribute('aria-expanded', false);
                    item.querySelector('.accordion__text').setAttribute('aria-hidden', true);
                });
                item.classList.add('accordion--active');
                content.style.maxHeight = content.scrollHeight + 'px';
                item.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
            }
        })
    });

    //form validation
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    async function formSend(e) {
        e.preventDefault();
        formValidate(form);
    }

    function formValidate(form) {
        let formRequired = document.querySelectorAll('.js-required');
        formRequired.forEach((item) => {
            formRemoveError(item);
            let itemType = item.getAttribute('type');
            if (item.value === '') {
                item.setAttribute('placeholder', 'Заполните поле')
                formAddError(item);
            }
            else if (itemType == 'email') {
                if (emailTest(item)) {
                    item.value = '';
                    item.setAttribute('placeholder', 'Некорректный email');
                    formAddError(item);
                }
            }
            else if (itemType == 'checkbox' && item.checked == false) {
                formAddError(item);
            }
        });
    }

    function formAddError(input) {
        input.classList.add('error');
    }

    function formRemoveError(input) {
        input.classList.remove('error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

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

