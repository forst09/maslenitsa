'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

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

    //show more btn 
    const btnShowMore = document.querySelector('.rools__btn');
    const accordions = document.querySelectorAll('.accordion');

    btnShowMore.addEventListener('click', function () {
        if (this.classList.contains('show')) {
            this.classList.remove('show');
            this.textContent = 'Загрузить ещё';
            accordions.forEach(item => {
                if (item.style.display == 'flex') {
                    item.style.display = 'none';
                }
            })
        }
        else {
            this.classList.add('show');
            this.textContent = 'Свернуть';
            accordions.forEach(item => {
                if (window.getComputedStyle(item).display == 'none') {
                    item.style.display = 'flex';
                }
            })
        }

    })

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
        breakpoints: {
            640: {
                spaceBetween: 15,
            },
            1300: {
                centeredSlides: true,
                spaceBetween: 60,
            }
        }
    })

    //gsap
    if (window.innerWidth >= 1300) {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();
        tl.fromTo('.main-title', {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        })
            .fromTo('.main__text-text', {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1
            }, 0.3)
            .fromTo('.main__btn', {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1
            }, 0.6)
            .fromTo('.main__date', {
                x: -50,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 1
            }, 0.9)
            .fromTo('.logo', {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1
            }, 1)
            .fromTo('.navigation__item', {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1,
                stagger: 0.15
            }, 1);

        gsap.from('.quote', {
            scrollTrigger: {
                trigger: '.main',
                start: 'bottom 80%',
                end: 'bottom 10%',
                scrub: 3
            },
            x: '100vw',
        });

        gsap.from('.info__text', {
            scrollTrigger: {
                trigger: '.quote',
                start: 'bottom 80%',
                end: 'bottom 10%',
                scrub: 2
            },
            x: '100%',
        })
        gsap.from('.info__photo', {
            scrollTrigger: {
                trigger: '.quote',
                start: 'bottom 80%',
                end: 'bottom 10%',
                scrub: 2
            },
            x: '-100%',
        })
        gsap.from('.gallery__swiper', {
            scrollTrigger: {
                trigger: '.info',
                start: 'bottom 80%',
                end: 'bottom 10%',
                scrub: 2
            },
            y: 100,
            opacity: 0
        })
        gsap.from('.massmedia__scroll', {
            scrollTrigger: {
                trigger: '.gallery',
                start: 'bottom 80%',
                end: 'bottom 10%',
                scrub: 2
            },
            x: '-100%',
        })
        gsap.from('.price', {
            scrollTrigger: {
                trigger: '.massmedia',
                start: 'bottom 80%',
                end: 'bottom 10%',
                scrub: 1
            },
            y: 200,
        })
        gsap.from('.accordion', {
            scrollTrigger: {
                trigger: '.rools',
                start: 'top 80%',
                end: 'top 10%',
                scrub: 1
            },
            y: 100,
            opacity: 0,
            stagger: 0.15
        })

        gsap.from('.video__text', {
            scrollTrigger: {
                trigger: '.rools',
                start: 'bottom 50%',
                end: 'bottom 20%',
                scrub: 1
            },
            x: '100%',
            opacity: 0
        })
        gsap.from('.video-js', {
            scrollTrigger: {
                trigger: '.rools',
                start: 'bottom 50%',
                end: 'bottom 20%',
                scrub: 1
            },
            y: 200,
            opacity: 0
        })

        gsap.from('.buy', {
            scrollTrigger: {
                trigger: '.video',
                start: 'bottom 80%',
                end: 'bottom 40%',
                scrub: 2
            },
            x: '-100%',
        })
        gsap.from('.footer', {
            scrollTrigger: {
                trigger: '.video',
                start: 'bottom 80%',
                end: 'bottom 40%',
                scrub: 2
            },
            x: '100%',
        })
    }
});

