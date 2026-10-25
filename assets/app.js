// Menu mobile

const menuOpenButton = document.querySelector('#btn_open_menu');
const menuCloseButton = document.querySelector('#btn_close_menu');

menuOpenButton.addEventListener("click", () => {

    document.body.classList.toggle("show_mobile_menu");
})

menuCloseButton.addEventListener("click", () => { menuOpenButton.click()})


// carrousel swipper

const swiper = new Swiper('.slider_wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }

});