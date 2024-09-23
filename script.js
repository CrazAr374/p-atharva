document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Changing text animation
    const changingText = document.querySelector('.changing-text');
    const texts = ['Web Developer', 'AIML Learner', 'Developer'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            changingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            changingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 50;
            setTimeout(typeText, 1000); // Pause at the end of the word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 100;
            setTimeout(typeText, 500); // Pause before starting the next word
        } else {
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText(); // Initial call

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
            // Reset form after submission
            contactForm.reset();
        });
    }

    // Add any additional JavaScript functionality here
    gsap.registerPlugin(ScrollTrigger);

    // Navbar animation
    gsap.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Hero section animation
    gsap.from('.hero-text h1, .hero-text h2, .hero-text h3, .hero-text p', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero-image', {
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    // About section animation
    gsap.from('.about-container', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.about-me',
            start: 'top 80%'
        }
    });

    // Skills animation
    gsap.from('.skills-row', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 80%'
        }
    });

    // Projects animation
    gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 80%'
        }
    });

    // Education timeline animation
    gsap.from('.timeline-item', {
        opacity: 0,
        x: (index, target) => index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.education',
            start: 'top 80%'
        }
    });

    // Contact section animation
    gsap.from('.contact-form, .contact-map', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%'
        }
    });

    // Footer animation
    gsap.from('.footer-content, .footer-bottom', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%'
        }
    });
});
