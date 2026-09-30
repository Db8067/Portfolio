document.addEventListener('DOMContentLoaded', () => {
    // Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-toggle i');
    const links = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('ri-menu-line');
            menuIcon.classList.add('ri-close-line');
        } else {
            menuIcon.classList.remove('ri-close-line');
            menuIcon.classList.add('ri-menu-line');
        }
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('ri-close-line');
            menuIcon.classList.add('ri-menu-line');
        });
    });

    // Nav Glass effect on scroll (thicker blur when scrolled)
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(5, 5, 5, 0.7)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(5, 5, 5, 0.5)';
            nav.style.boxShadow = 'none';
        }
    });

    /* =========================================
       GSAP Animations
    ========================================= */
    gsap.registerPlugin(ScrollTrigger);

    // Initial Load Animations for Hero Section
    const tl = gsap.timeline();

    tl.from('.glass-nav', {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.hero-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=0.4")
    .from('.greeting', { opacity: 0, y: 20, duration: 0.5 }, "-=0.6")
    .from('.name', { opacity: 0, y: 20, duration: 0.5 }, "-=0.4")
    .from('.role', { opacity: 0, y: 20, duration: 0.5 }, "-=0.4")
    .from('.tagline', { opacity: 0, y: 20, duration: 0.5 }, "-=0.4")
    .from('.hero-cta .btn', { 
        opacity: 0, 
        y: 20, 
        stagger: 0.1, 
        duration: 0.5 
    }, "-=0.4")
    .from('.social-links a', { 
        opacity: 0, 
        scale: 0, 
        stagger: 0.1, 
        duration: 0.4, 
        ease: 'back.out(1.7)' 
    }, "-=0.4");

    // Scroll Animations for all sections
    const scrollElements = document.querySelectorAll('.scroll-anim');

    scrollElements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%", // Trigger when top of element hits 85% of viewport
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Staggered animation for project cards
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
    });

    // Timeline staggered animation
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.timeline',
            start: "top 80%",
        },
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
    });
});
