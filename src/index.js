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
    /* navigation: {
        prevEl: ".swiper-button-prev",
    }, */
    navigation: {
        nextEl: ".swiper-button-up",
        prevEl: ".swiper-button-down",
    }
});

const swipeUpLeft = document.querySelector(".swiper-button-up");

(function () {
    swipeUpLeft.addEventListener('click', changeProps) //swiper2.navigation.nextEl
    //swipeUpLeft.addEventListener('keydown', changeProps)
})();

let svgLeft = document.querySelector(".svg-up-down");
let titleLeft = document.querySelector(".infoSwipeUp")

function changeProps() {

    svgLeft.classList.toggle("rotate");
    titleLeft.textContent = "Pulsa para salir";
}
