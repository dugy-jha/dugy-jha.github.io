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

    // Hero headline animation
    const headline = document.getElementById('hero-headline');
    if (headline && !isMobile()) { // Disable on mobile
        const originalText = headline.textContent;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let interval = null;

        const animateText = () => {
            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                headline.textContent = originalText.split('')
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        // Re-trigger animation on hover (optional)
        headline.addEventListener('mouseover', animateText);
        
        // Initial animation
        animateText();
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
                            <a href="news.html" class="btn btn-primary">Back to News</a>
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
});
