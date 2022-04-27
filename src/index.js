var menu = ['AYÚDANOS', 'ACERCA DE', 'INICIO', 'USO', 'CONTACTO'];
var menuDeploy = ['AYÚDANOS', 'ACERCA DE', 'INICIO', 'USO', 'CONTACTO'];

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
        el: ".swiper-pagination.pagination-bottom, .swiper-pagination.pagination-top, .swiper-pagination.pagination-extra",
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

let burguerMenu = document.querySelector("#menu");

burguerMenu.addEventListener("click", openMenu);

function openMenu() {
    document.querySelector("#menu").classList.toggle("deploy");
    document.querySelector(".hamburguer").classList.toggle("completed");
}
