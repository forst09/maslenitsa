/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    //open mobile menu\r\n    let burger = document.getElementById('burger');\r\n    let mobileMenu = document.getElementsByClassName('mobile-menu');\r\n    if (burger) {\r\n        burger.addEventListener('click', function () {\r\n            mobileMenu[0].classList.add('active');\r\n            document.querySelector('body').classList.add('not-scroll');\r\n        });\r\n    }\r\n\r\n    //close mobile menu\r\n    let close = document.getElementById('closeMobile');\r\n    if (close) {\r\n        close.addEventListener('click', function () {\r\n            mobileMenu[0].classList.remove('active');\r\n            document.querySelector('body').classList.remove('not-scroll');\r\n        });\r\n    }\r\n\r\n    //accordion\r\n    document.querySelectorAll('.accordion').forEach((item) => {\r\n        item.addEventListener('click', function () {\r\n            const content = item.querySelector('.accordion__text');\r\n            if (item.classList.contains('accordion--active')) {\r\n                item.classList.remove('accordion--active');\r\n                content.style.maxHeight = null;\r\n                item.setAttribute('aria-expanded', false);\r\n                content.setAttribute('aria-hidden', true);\r\n            }\r\n            else {\r\n                const parent = item.closest('section');\r\n                const currentAccordions = parent.querySelectorAll('.accordion');\r\n                currentAccordions.forEach((item) => {\r\n                    item.classList.remove('accordion--active');\r\n                    item.querySelector('.accordion__text').style.maxHeight = null;\r\n                    item.setAttribute('aria-expanded', false);\r\n                    item.querySelector('.accordion__text').setAttribute('aria-hidden', true);\r\n                });\r\n                item.classList.add('accordion--active');\r\n                content.style.maxHeight = content.scrollHeight + 'px';\r\n                item.setAttribute('aria-expanded', true);\r\n                content.setAttribute('aria-hidden', false);\r\n            }\r\n        })\r\n    });\r\n\r\n    //form validation\r\n    const form = document.getElementById('form');\r\n    form.addEventListener('submit', formSend);\r\n    async function formSend(e) {\r\n        e.preventDefault();\r\n        formValidate(form);\r\n    }\r\n\r\n    function formValidate(form) {\r\n        let formRequired = document.querySelectorAll('.js-required');\r\n        formRequired.forEach((item) => {\r\n            formRemoveError(item);\r\n            let itemType = item.getAttribute('type');\r\n            if (item.value === '') {\r\n                item.setAttribute('placeholder', 'Заполните поле')\r\n                formAddError(item);\r\n            }\r\n            else if (itemType == 'email') {\r\n                if (emailTest(item)) {\r\n                    item.value = '';\r\n                    item.setAttribute('placeholder', 'Некорректный email');\r\n                    formAddError(item);\r\n                }\r\n            }\r\n            else if (itemType == 'checkbox' && item.checked == false) {\r\n                formAddError(item);\r\n            }\r\n        });\r\n    }\r\n\r\n    function formAddError(input) {\r\n        input.classList.add('error');\r\n    }\r\n\r\n    function formRemoveError(input) {\r\n        input.classList.remove('error');\r\n    }\r\n\r\n    function emailTest(input) {\r\n        return !/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,8})+$/.test(input.value);\r\n    }\r\n\r\n    //show more btn \r\n    const btnShowMore = document.querySelector('.rools__btn');\r\n    const accordions = document.querySelectorAll('.accordion');\r\n\r\n    btnShowMore.addEventListener('click', function () {\r\n        if (this.classList.contains('show')) {\r\n            this.classList.remove('show');\r\n            this.textContent = 'Загрузить ещё';\r\n            accordions.forEach(item => {\r\n                if (item.style.display == 'flex') {\r\n                    item.style.display = 'none';\r\n                }\r\n            })\r\n        }\r\n        else {\r\n            this.classList.add('show');\r\n            this.textContent = 'Свернуть';\r\n            accordions.forEach(item => {\r\n                if (window.getComputedStyle(item).display == 'none') {\r\n                    item.style.display = 'flex';\r\n                }\r\n            })\r\n        }\r\n\r\n    })\r\n\r\n    //swiper gallery\r\n    const swiperGallery = new Swiper('.gallery__swiper', {\r\n        loop: true,\r\n        slidesPerView: 'auto',\r\n        spaceBetween: 10,\r\n        pagination: {\r\n            el: '.gallery__swiper-pagination',\r\n            type: 'fraction',\r\n        },\r\n        navigation: {\r\n            nextEl: '.gallery__swiper-next',\r\n            prevEl: '.gallery__swiper-prev',\r\n        },\r\n        // breakpoints: {\r\n        //     1240: {\r\n        //         centeredSlides: true,\r\n        //         spaceBetween: 60,\r\n        //     }\r\n        // }\r\n    })\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack://designagency/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;