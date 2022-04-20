var menu = ['AYÚDANOS', 'ACERCA DE', 'INICIO', 'USO', 'CONTACTO'];

const swiper = new Swiper(".swiper-container", {
    loop: true,
    initialSlide: 2,
    allowTouchMove: false,
    speed: 1000,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    pagination: {
        el: ".swiper-pagination.pagination-bottom, .swiper-pagination.pagination-top",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiper2 = new Swiper(".swiper-container2", {
    //loop: true,
    direction: "vertical",
    spaceBetween: 30,
    allowTouchMove: false,
    speed: 1400,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-down",
        prevEl: ".swiper-button-up",
    }
});


let swipeUpLeft = document.querySelector(".swiper-button-down");
let svgLeft = document.querySelector(".svg-up-down");
let titleLeft = document.querySelector(".infoSwipeUp");

let horizontalPag = document.querySelector("#horizontal-pag");
let titleHeader = document.querySelector(".title");


(function () {
    swipeUpLeft.addEventListener('click', changeProps) //swiper2.navigation.nextEl
    //swipeUpLeft.addEventListener('keydown', changeProps)
    showTitle();
})();



function changeProps() {

    swipeUpLeft.classList.replace(".swiper-button-down", ".swiper-button-up");
    svgLeft.classList.toggle("rotate");
    titleLeft.textContent = "Pulsa para salir";
}

/* function showTitle() {

    if (horizontalPag.querySelectorAll('span.swiper-pagination-bullet-active')[0]) {
        titleHeader.style.visi

    } else if (horizontalPag.querySelectorAll('span.swiper-pagination-bullet-active')[1]) {

    } else if (horizontalPag.querySelectorAll('span.swiper-pagination-bullet-active')[3]) {

    } else if (horizontalPag.querySelectorAll('span.swiper-pagination-bullet-active')[4]) {

    }
} */