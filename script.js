// ================= MOBILE MENU =================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ================= SCROLL DOWN (HOME ONLY) =================

const scrollDown = document.querySelector('.scroll-down');
const sectionOne = document.getElementById('section-one');

if (scrollDown && sectionOne) {
    scrollDown.addEventListener('click', () => {
        sectionOne.scrollIntoView({ behavior: 'smooth' });
    });
}

// ================= CAROUSEL (HOME ONLY) =================

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-item');
const rightArrow = document.querySelector('.arrow.right');
const leftArrow = document.querySelector('.arrow.left');

let index = 0;

if (track && slides.length && rightArrow && leftArrow) {

    rightArrow.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    leftArrow.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }
}
