// Scroll down arrow
document.querySelector('.scroll-down').onclick = () => {
    document.getElementById('section-one').scrollIntoView({behavior:'smooth'});
};

// Carousel
let index = 0;
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

document.querySelector('.arrow.right').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.arrow.left').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel(){
    track.style.transform = `translateX(-${index * 100}%)`;
}


// Mobile Menu Toggle

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Optional: close menu when link clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
