var swiper = new Swiper(".mySwiper", {
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
});


