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
    loop: true,
    initialSlide: 2,
    cssMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

