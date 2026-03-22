// ========================
// Active nav link on scroll
// ========================

const sections = document.querySelectorAll('section[id], footer[id]');
const AllNavLinks = document.querySelectorAll('.nav-links li a');

const observerOptions = {
    root: null,
    rootMargin: '-80px 0px -200px 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const activeId = entry.target.id;

            AllNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));


// ========================
// Hamburger menu
// ========================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
AllNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});