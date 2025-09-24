document.addEventListener('DOMContentLoaded', () => {
    // Utility to check for mobile viewport
    const isMobile = () => window.innerWidth <= 768;

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuButton.setAttribute('aria-expanded', !expanded);
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Check for saved theme preference or use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Apply theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    }
    
    // Toggle theme
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            
            // Save preference
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Navbar scroll effect
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.5rem 0';
                navbar.style.boxShadow = 'var(--shadow-md)';
            } else {
                navbar.style.padding = '1rem 0';
                navbar.style.boxShadow = 'var(--shadow-sm)';
            }
        });
    }
    
    // Contact form handling
    const contactForm = document.querySelector('form[action*="formspree"]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const statusMessage = document.createElement('div');
            statusMessage.className = 'status-message';
            
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            }
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    statusMessage.textContent = 'Message sent successfully!';
                    statusMessage.className = 'status-message success';
                    contactForm.reset();
                } else {
                    statusMessage.textContent = data.error || 'There was an error sending your message.';
                    statusMessage.className = 'status-message error';
                }
            } catch (error) {
                statusMessage.textContent = 'Network error. Please try again.';
                statusMessage.className = 'status-message error';
            }
            
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
            
            // Add the status message after the form
            contactForm.after(statusMessage);
            
            // Remove the status message after 5 seconds
            setTimeout(() => {
                statusMessage.remove();
            }, 5000);
        });
    }
    
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu && mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        mobileMenuButton.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    });
    
    // Intersection Observer for animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }


    // Count-up animation
    const countUpElements = document.querySelectorAll('.count-up');
    const countUpObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const endValue = parseInt(el.getAttribute('data-value'), 10);
                const duration = 2000; // 2 seconds
                let startTime = null;

                function animateCount(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const current = Math.min(Math.floor(progress / duration * endValue), endValue);
                    el.textContent = current.toLocaleString();

                    if (progress < duration) {
                        requestAnimationFrame(animateCount);
                    } else {
                        el.textContent = endValue.toLocaleString();
                    }
                }

                requestAnimationFrame(animateCount);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    countUpElements.forEach(el => {
        countUpObserver.observe(el);
    });

    // Magnetic button effect
    if (!isMobile()) { // Disable on mobile
        const magneticButtons = document.querySelectorAll('.cta-button, .learn-more-button');
        magneticButtons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = button.getBoundingClientRect();
                const x = clientX - left - width / 2;
                const y = clientY - top - height / 2;

                button.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }

    // Spotlight card effect
    if (!isMobile()) { // Disable on mobile
        const spotlightCards = document.querySelectorAll('.spotlight-card');
        spotlightCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = card.getBoundingClientRect();
                const x = e.clientX - left;
                const y = e.clientY - top;
                card.style.setProperty('--spotlight-x', `${x}px`);
                card.style.setProperty('--spotlight-y', `${y}px`);
            });
        });
    }

    // FAQ Page Logic
    const faqContainer = document.querySelector('.faq-main-content');
    if (faqContainer) {
        const questions = faqContainer.querySelectorAll('.faq-question');
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isActive = question.classList.contains('active');

                // Close all other open answers
                questions.forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = null;
                });

                // Open or close the clicked answer
                if (!isActive) {
                    question.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });
    }

    // News Page Logic
    const newsGrid = document.getElementById('news-grid');
    if (newsGrid) {
        const articleTemplate = document.getElementById('article-template');
        const articlePageTemplate = document.getElementById('article-page-template');
        const categoryFilters = document.querySelectorAll('#category-filters a');
        let articles = [];

        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        }

        function parseFrontMatter(content) {
            const frontMatterRegex = /---\r?\n([\s\S]*?)\r?\n---/;
            const match = content.match(frontMatterRegex);
            
            if (!match) return { content };
            
            const frontMatter = {};
            const frontMatterText = match[1];
            
            const lines = frontMatterText.split('\n');
            for (const line of lines) {
                const colonIndex = line.indexOf(':');
                if (colonIndex !== -1) {
                    const key = line.slice(0, colonIndex).trim();
                    let value = line.slice(colonIndex + 1).trim();
                    
                    if (value.startsWith('"') && value.endsWith('"')) {
                        value = value.slice(1, -1);
                    }
                    
                    frontMatter[key] = value;
                }
            }
            
            const contentWithoutFrontMatter = content.replace(match[0], '').trim();
            
            return {
                ...frontMatter,
                content: contentWithoutFrontMatter
            };
        }

        async function loadArticles() {
            try {
                const response = await fetch('https://api.github.com/repos/dugy-jha/dugy-jha.github.io/contents/_posts');
                if (!response.ok) throw new Error('Failed to fetch articles directory');
                
                const files = await response.json();
                const markdownFiles = files.filter(file => file.name.endsWith('.md'));
                
                const articlePromises = markdownFiles.map(async file => {
                    const fileResponse = await fetch(file.download_url);
                    if (!fileResponse.ok) throw new Error(`Failed to fetch ${file.name}`);
                    
                    const content = await fileResponse.text();
                    const parsedArticle = parseFrontMatter(content);
                    
                    return {
                        slug: file.name.replace('.md', ''),
                        title: parsedArticle.title,
                        date: parsedArticle.date,
                        author: parsedArticle.author,
                        image: parsedArticle.image || 'assets/images/placeholder-person.svg',
                        summary: parsedArticle.summary,
                        category: parsedArticle.category,
                        content: parsedArticle.content
                    };
                });
                
                articles = await Promise.all(articlePromises);
                articles.sort((a, b) => new Date(b.date) - new Date(a.date));
                
                checkForArticleParameter();
            } catch (error) {
                console.error('Error loading articles:', error);
                newsGrid.innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-triangle"></i>
                        <p>Sorry, we couldn't load the latest articles. Please try again later.</p>
                    </div>
                `;
            }
        }

        function displayArticles(articlesToShow) {
            newsGrid.innerHTML = '';
            
            if (articlesToShow.length === 0) {
                newsGrid.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <p>No articles found in this category. Please check back later.</p>
                    </div>
                `;
                return;
            }
            
            articlesToShow.forEach(article => {
                const template = document.importNode(articleTemplate.content, true);
                
                const link = template.querySelector('.news-link');
                link.href = `?article=${article.slug}`;
                
                const image = template.querySelector('.news-image img');
                image.src = article.image;
                image.alt = article.title;
                
                const category = template.querySelector('.news-category');
                category.textContent = article.category;
                
                const title = template.querySelector('.news-title');
                title.textContent = article.title;
                
                const date = template.querySelector('.news-date');
                date.textContent = formatDate(article.date);
                
                const author = template.querySelector('.news-author');
                author.textContent = article.author;
                
                const summary = template.querySelector('.news-summary');
                summary.textContent = article.summary;
                
                newsGrid.appendChild(template);
            });
        }

        function displayArticlePage(article) {
            newsGrid.innerHTML = '';
            
            const template = document.importNode(articlePageTemplate.content, true);
            
            const category = template.querySelector('.article-category');
            category.textContent = article.category;
            
            const title = template.querySelector('.article-title');
            title.textContent = article.title;
            
            const date = template.querySelector('.article-date');
            date.textContent = formatDate(article.date);
            
            const author = template.querySelector('.article-author');
            author.textContent = article.author;
            
            const image = template.querySelector('.article-featured-image img');
            image.src = article.image;
            image.alt = article.title;
            
            const body = template.querySelector('.article-body');
            if (window.marked) {
                body.innerHTML = marked.parse(article.content);
            } else {
                body.textContent = article.content;
            }
            
            newsGrid.appendChild(template);
            document.title = `${article.title} | ASPL Fusion`;
            document.querySelector('.news-filters').style.display = 'none';
        }

        function checkForArticleParameter() {
            const urlParams = new URLSearchParams(window.location.search);
            const articleSlug = urlParams.get('article');
            
            if (articleSlug) {
                const article = articles.find(a => a.slug === articleSlug);
                if (article) {
                    displayArticlePage(article);
                } else {
                    newsGrid.innerHTML = `
                        <div class="error-message">
                            <i class="fas fa-exclamation-triangle"></i>
                            <p>Sorry, we couldn't find the article you're looking for.</p>
                            <a href="pages/news.html" class="btn btn-primary">Back to News</a>
                        </div>
                    `;
                }
            } else {
                displayArticles(articles);
            }
        }

        categoryFilters.forEach(filter => {
            filter.addEventListener('click', function(e) {
                e.preventDefault();
                
                categoryFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                if (category === 'all') {
                    displayArticles(articles);
                } else {
                    const filteredArticles = articles.filter(article => article.category === category);
                    displayArticles(filteredArticles);
                }
            });
        });

        window.addEventListener('popstate', () => {
            checkForArticleParameter();
        });

        loadArticles();
    }
    
    // Cookie Consent Banner
    function initCookieConsent() {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            showCookieBanner();
        }
    }
    
    function showCookieBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-banner-content">
                <div class="cookie-banner-text">
                    <h3>We value your privacy</h3>
                    <p>We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <a href="pages/privacy.html">Privacy Policy</a> to learn more.</p>
                </div>
                <div class="cookie-banner-actions">
                    <button class="cookie-button cookie-button-secondary" onclick="rejectCookies()">Reject All</button>
                    <button class="cookie-button cookie-button-primary" onclick="acceptCookies()">Accept All</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);
        
        // Add show class after a small delay for animation
        setTimeout(() => {
            banner.classList.add('show');
        }, 100);
    }
    
    window.acceptCookies = function() {
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        hideCookieBanner();
        // Initialize analytics or other cookie-dependent services here
    };
    
    window.rejectCookies = function() {
        localStorage.setItem('cookieConsent', 'rejected');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        hideCookieBanner();
        // Disable analytics or other cookie-dependent services here
    };
    
    function hideCookieBanner() {
        const banner = document.querySelector('.cookie-banner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }
    
    // Initialize cookie consent on page load
    initCookieConsent();

    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (scrollToTopBtn) {
        // Show/hide scroll to top button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Set active navigation state
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('href').split('/').pop();
            
            // Handle index.html and pages/index.html cases
            if ((currentPage === 'index.html' || currentPage === '') && linkPage === 'index.html') {
                link.classList.add('active');
            } else if (currentPage === linkPage) {
                link.classList.add('active');
            }
        });
    }

    // Set active navigation on page load
    setActiveNavLink();

    // Initialize Liquid Ether effect on homepage
    const liquidEtherContainer = document.getElementById('liquid-ether-container');
    if (liquidEtherContainer && typeof LiquidEther !== 'undefined') {
        // Wait for Three.js to load
        const initLiquidEther = () => {
            if (typeof THREE !== 'undefined') {
                const liquidEther = new LiquidEther(liquidEtherContainer, {
                    colors: ['#5227FF', '#FF9FFC', '#B19EEF'],
                    mouseForce: 20,
                    cursorSize: 100,
                    resolution: 0.5,
                    dt: 0.014,
                    BFECC: true,
                    isViscous: false,
                    viscous: 30,
                    iterationsViscous: 32,
                    iterationsPoisson: 32,
                    isBounce: false,
                    autoDemo: true,
                    autoSpeed: 0.5,
                    autoIntensity: 2.2,
                    takeoverDuration: 0.25,
                    autoResumeDelay: 1000,
                    autoRampDuration: 0.6,
                    className: '',
                    style: {}
                });
            } else {
                // Retry if Three.js isn't loaded yet
                setTimeout(initLiquidEther, 100);
            }
        };
        initLiquidEther();
    }

    // Initialize Gooey Nav effect
    const navContainer = document.getElementById('mobile-menu');
    if (navContainer && typeof GooeyNav !== 'undefined') {
        // Determine initial active index based on current page
        let initialActiveIndex = 0;
        const currentPath = window.location.pathname;
        const navLinks = navContainer.querySelectorAll('nav ul li a');
        
        navLinks.forEach((link, index) => {
            const href = link.getAttribute('href');
            if (currentPath.includes('index.html') || currentPath === '/' || currentPath === '') {
                initialActiveIndex = -1; // No active item on homepage
            } else if (href && currentPath.includes(href.replace('pages/', ''))) {
                initialActiveIndex = index;
            }
        });

        const gooeyNav = new GooeyNav(navContainer, {
            animationTime: 600,
            particleCount: 15,
            particleDistances: [90, 10],
            particleR: 100,
            timeVariance: 300,
            colors: [1, 2, 3, 1, 2, 3, 1, 4],
            initialActiveIndex: initialActiveIndex
        });
    }

    // FAQ Toggle Functionality
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle expanded state
            this.setAttribute('aria-expanded', !isExpanded);
            content.setAttribute('aria-hidden', isExpanded);
            
            // Toggle content visibility
            if (!isExpanded) {
                content.classList.remove('hidden');
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                content.style.maxHeight = '0';
                setTimeout(() => {
                    content.classList.add('hidden');
                }, 300);
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });

    // Counter animation for stats
    function animateCounters() {
        const counters = document.querySelectorAll('.count-up');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
    }

    // Intersection Observer for counter animation
    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }

    // Form validation
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            const value = input.value.trim();
            const fieldName = input.name || input.id || 'field';
            
            // Remove existing error styling
            input.classList.remove('error');
            const existingError = input.parentNode.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            // Check if field is empty
            if (!value) {
                showFieldError(input, `${fieldName} is required`);
                isValid = false;
                return;
            }
            
            // Email validation
            if (input.type === 'email' && !validateEmail(value)) {
                showFieldError(input, 'Please enter a valid email address');
                isValid = false;
                return;
            }
            
            // Phone validation (basic)
            if (input.type === 'tel' && value.length < 10) {
                showFieldError(input, 'Please enter a valid phone number');
                isValid = false;
                return;
            }
        });
        
        return isValid;
    }

    function showFieldError(input, message) {
        input.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        input.parentNode.appendChild(errorDiv);
    }

    // Add form validation to all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                // Scroll to first error
                const firstError = this.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
            }
        });
    });
});
