/* var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 1,
    //spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}); */

const swiper = new Swiper(".mySwiper", {
    cssMode: true,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
const swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

