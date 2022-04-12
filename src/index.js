/*const DOM = {
    prevSection: document.querySelector(".prev"),
    nextSection: document.querySelector(".next"),
    dotDonate: document.querySelector(".donations-pita"),
    dotAbout: document.querySelector(".about-pita"),
    dotInitial: document.querySelector(".initial-pita"),
    dotHowWorks: document.querySelector(".how-works-pita"),
    dotContact: document.querySelector(".contact-pita")
};

var slideIndex = 3;

(function () {
    DOM.prevSection.addEventListener('click', otherSlide(-1))
    DOM.nextSection.addEventListener('click', otherSlide(1))
    DOM.dotDonate.addEventListener('click', currentSlide(1))
    DOM.dotAbout.addEventListener('click', currentSlide(2))
    DOM.dotInitial.addEventListener('click', currentSlide(3))
    DOM.dotDonate.addEventListener('click', currentSlide(4))
    DOM.dotDonate.addEventListener('click', currentSlide(5))
})();

function otherSlide(index) {
    showSlide(slideIndex += index);
}

function currentSlide(index) {
    showSlide(slideIndex = index);
}

function showSlides(id) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (id > slides.length) {
        slideIndex = 1;
    }

    if (id < 1) {
        slideIndex = slides.length;
    }


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}*/

// var swiper = new Swiper("#main", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: ".dots",
//         clickable: true,
//         },
//     navigation: {
//         nextEl: ".next",
//         prevEl: ".prev",
//         },
//       });