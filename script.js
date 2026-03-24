// Este é o seu arquivo script.js
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, {
    threshold: 0.15 
});

const elementsToAnimate = document.querySelectorAll('.glass-card, .portal-link-card, .title-main');
elementsToAnimate.forEach((el) => observer.observe(el));