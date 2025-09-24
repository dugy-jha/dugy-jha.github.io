// Gooey Nav Effect - Vanilla JavaScript Implementation
class GooeyNav {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            animationTime: 600,
            particleCount: 15,
            particleDistances: [90, 10],
            particleR: 100,
            timeVariance: 300,
            colors: [1, 2, 3, 1, 2, 3, 1, 4],
            initialActiveIndex: 0,
            ...options
        };

        this.activeIndex = this.options.initialActiveIndex;
        this.navRef = null;
        this.filterRef = null;
        this.textRef = null;

        this.init();
    }

    init() {
        // Create the gooey nav container structure
        this.container.classList.add('gooey-nav-container');
        
        // Find the existing nav element
        this.navRef = this.container.querySelector('nav ul');
        if (!this.navRef) {
            console.error('No nav ul element found in container');
            return;
        }

        // Create effect elements
        this.filterRef = document.createElement('span');
        this.filterRef.className = 'effect filter';
        this.container.appendChild(this.filterRef);

        this.textRef = document.createElement('span');
        this.textRef.className = 'effect text';
        this.container.appendChild(this.textRef);

        // Set up event listeners
        this.setupEventListeners();

        // Initialize active state
        this.updateActiveState(this.activeIndex);
    }

    noise(n = 1) {
        return n / 2 - Math.random() * n;
    }

    getXY(distance, pointIndex, totalPoints) {
        const angle = ((360 + this.noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
        return [distance * Math.cos(angle), distance * Math.sin(angle)];
    }

    createParticle(i) {
        const d = this.options.particleDistances;
        const r = this.options.particleR;
        const t = this.options.animationTime * 2 + this.noise(this.options.timeVariance * 2);
        let rotate = this.noise(r / 10);
        
        return {
            start: this.getXY(d[0], this.options.particleCount - i, this.options.particleCount),
            end: this.getXY(d[1] + this.noise(7), this.options.particleCount - i, this.options.particleCount),
            time: t,
            scale: 1 + this.noise(0.2),
            color: this.options.colors[Math.floor(Math.random() * this.options.colors.length)],
            rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
        };
    }

    makeParticles(element) {
        const bubbleTime = this.options.animationTime * 2 + this.options.timeVariance;
        element.style.setProperty('--time', `${bubbleTime}ms`);

        for (let i = 0; i < this.options.particleCount; i++) {
            const p = this.createParticle(i);
            element.classList.remove('active');

            setTimeout(() => {
                const particle = document.createElement('span');
                const point = document.createElement('span');
                particle.classList.add('particle');
                particle.style.setProperty('--start-x', `${p.start[0]}px`);
                particle.style.setProperty('--start-y', `${p.start[1]}px`);
                particle.style.setProperty('--end-x', `${p.end[0]}px`);
                particle.style.setProperty('--end-y', `${p.end[1]}px`);
                particle.style.setProperty('--time', `${p.time}ms`);
                particle.style.setProperty('--scale', `${p.scale}`);
                particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
                particle.style.setProperty('--rotate', `${p.rotate}deg`);

                point.classList.add('point');
                particle.appendChild(point);
                element.appendChild(particle);
                
                requestAnimationFrame(() => {
                    element.classList.add('active');
                });
                
                setTimeout(() => {
                    try {
                        element.removeChild(particle);
                    } catch {
                        // Do nothing
                    }
                }, p.time);
            }, 30);
        }
    }

    updateEffectPosition(element) {
        if (!this.filterRef || !this.textRef) return;
        
        const containerRect = this.container.getBoundingClientRect();
        const pos = element.getBoundingClientRect();

        const styles = {
            left: `${pos.x - containerRect.x}px`,
            top: `${pos.y - containerRect.y}px`,
            width: `${pos.width}px`,
            height: `${pos.height}px`
        };
        
        Object.assign(this.filterRef.style, styles);
        Object.assign(this.textRef.style, styles);
        this.textRef.innerText = element.innerText;
    }

    updateActiveState(index) {
        const items = this.navRef.querySelectorAll('li');
        
        // Remove active class from all items
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update effect position
        const activeItem = items[index];
        if (activeItem) {
            this.updateEffectPosition(activeItem);
            this.textRef.classList.add('active');
        }
    }

    handleClick(event, index) {
        const liEl = event.currentTarget.closest('li');
        if (!liEl || this.activeIndex === index) return;

        this.activeIndex = index;
        this.updateEffectPosition(liEl);

        // Clear existing particles
        const particles = this.filterRef.querySelectorAll('.particle');
        particles.forEach(p => this.filterRef.removeChild(p));

        // Reset text animation
        this.textRef.classList.remove('active');
        void this.textRef.offsetWidth; // Force reflow
        this.textRef.classList.add('active');

        // Create new particles
        this.makeParticles(this.filterRef);

        // Update active states
        this.updateActiveState(index);
    }

    setupEventListeners() {
        const items = this.navRef.querySelectorAll('li');
        
        items.forEach((item, index) => {
            const link = item.querySelector('a');
            if (link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleClick(e, index);
                    // Navigate after animation
                    setTimeout(() => {
                        window.location.href = link.getAttribute('href');
                    }, this.options.animationTime);
                });

                link.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.handleClick(e, index);
                        setTimeout(() => {
                            window.location.href = link.getAttribute('href');
                        }, this.options.animationTime);
                    }
                });
            }
        });

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const items = this.navRef.querySelectorAll('li');
                const activeItem = items[this.activeIndex];
                if (activeItem) {
                    this.updateEffectPosition(activeItem);
                }
            }, 100);
        });
    }

    destroy() {
        // Remove event listeners and clean up
        if (this.filterRef) this.filterRef.remove();
        if (this.textRef) this.textRef.remove();
        this.container.classList.remove('gooey-nav-container');
    }
}

// Export for use
window.GooeyNav = GooeyNav;
