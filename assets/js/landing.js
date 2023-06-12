const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function () {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
});

//  Tap To Top Js
const tapTopBtn = document.querySelector('.tap-to-top-button');
const tapTopTopBox = document.querySelector('.tap-to-top-box');
tapTopBtn?.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    });
});

window.scroll({
    top: 0,
    behavior: 'smooth',
});
window.onscroll = function () {
    if (pageYOffset >= 1000) {
        tapTopTopBox.classList.remove('scale-0');
        tapTopTopBox.classList.add('scale-100');
    } else {
        tapTopTopBox.classList.remove('scale-100');
        tapTopTopBox.classList.add('scale-0');
    }
    myFunction();
};

//  Scroll Active //
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navigation ul li .nav-link');

let current = '';
window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id') == null ? current : section.getAttribute('id');
        }
    });
});
navLi.forEach((el) => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(el.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth',
        });
    });

    window.addEventListener('scroll', () => {
        if (el.getAttribute('href') === `#${current}`) {
            el.classList.add('text-primary');
        } else {
            el.classList.remove('text-primary');
        }
    });
});

// Get the header
const header = document.querySelector('.header-sticky');
const homeSection = document.querySelector('.home-section');

// Get the offset position of the navbar
const sticky = header.clientHeight;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add('fixed');
        header.classList.remove('relative');
        homeSection.setAttribute('style', 'margin-top:' + sticky + 'px');
    } else {
        header.classList.remove('fixed');
        homeSection.removeAttribute('style');
        header.classList.add('relative');
    }
}
