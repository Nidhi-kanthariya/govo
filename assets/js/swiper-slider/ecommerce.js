var swiper = new Swiper(".product-slides", {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    // loop: true,
    // infinite: true,
    // autoplay: {
    //     delay: 1000,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: { 
        0: {
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 15,
        },
        471: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1497: {
            slidesPerView: 3,
            spaceBetween: 27,
        },
        1721: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
