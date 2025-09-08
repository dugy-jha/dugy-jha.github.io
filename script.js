document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 1. Header Style on Scroll
    const handleScroll = () => {
        if (window.scrollY > 10) {
            header.classList.add('glass-effect', 'shadow-md');
        } else {
            header.classList.remove('glass-effect', 'shadow-md');
        }
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    });

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile menu on link click
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // 4. Intersection Observer for Animations
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stagger children if the container is a stagger container
                if (entry.target.classList.contains('reveal-stagger')) {
                    const children = entry.target.children;
                    for (let i = 0; i < children.length; i++) {
                        children[i].style.transitionDelay = `${i * 0.15}s`;
                    }
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(elem => {
        observer.observe(elem);
    });

    // 5. Active Navigation Link Highlighting on Scroll
    const sections = document.querySelectorAll('section[id]');
    const handleActiveLink = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) { // Adjusted offset
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', handleActiveLink);
    
    // Initial check
    handleScroll();
    handleActiveLink();
});
