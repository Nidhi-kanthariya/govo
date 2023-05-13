var swiper = new Swiper(".product-slides", {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    infinite: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: { 
        0: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 15,
        },
        471: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        991:{
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1095:{
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1199:{
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1399:{
            slidesPerView: 2,
            spaceBetween: 15,
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
