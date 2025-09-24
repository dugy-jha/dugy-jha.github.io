// Liquid Ether Effect - Vanilla JavaScript Implementation
// Assumes THREE is loaded globally from CDN

class LiquidEther {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            mouseForce: 20,
            cursorSize: 100,
            isViscous: false,
            viscous: 30,
            iterationsViscous: 32,
            iterationsPoisson: 32,
            dt: 0.014,
            BFECC: true,
            resolution: 0.5,
            isBounce: false,
            colors: ['#5227FF', '#FF9FFC', '#B19EEF'],
            autoDemo: true,
            autoSpeed: 0.5,
            autoIntensity: 2.2,
            takeoverDuration: 0.25,
            autoResumeDelay: 3000,
            autoRampDuration: 0.6,
            ...options
        };

        this.mouse = {
            x: 0,
            y: 0,
            oldX: 0,
            oldY: 0,
            diffX: 0,
            diffY: 0,
            isAutoActive: false,
            autoIntensity: this.options.autoIntensity
        };

        this.autoDriver = {
            enabled: this.options.autoDemo,
            active: false,
            current: new THREE.Vector2(0, 0),
            target: new THREE.Vector2(),
            lastTime: performance.now(),
            activationTime: 0,
            speed: this.options.autoSpeed,
            resumeDelay: this.options.autoResumeDelay,
            rampDurationMs: this.options.autoRampDuration * 1000
        };

        this.lastUserInteraction = performance.now();
        this.isVisible = true;
        this.isRunning = false;

        this.init();
    }

    init() {
        // Set container styles
        this.container.style.position = 'relative';
        this.container.style.overflow = 'hidden';

        // Initialize Three.js
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.autoClear = false;
        this.renderer.setClearColor(new THREE.Color(0x000000), 0);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();

        // Add canvas to container
        this.renderer.domElement.style.width = '100%';
        this.renderer.domElement.style.height = '100%';
        this.renderer.domElement.style.display = 'block';
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.left = '0';
        this.renderer.domElement.style.pointerEvents = 'none';
        this.container.appendChild(this.renderer.domElement);

        // Initialize dimensions
        this.resize();

        // Create framebuffers and shaders
        this.createFramebuffers();
        this.createShaders();

        // Set up event listeners
        this.setupEventListeners();

        // Start rendering
        this.start();
    }

    createFramebuffers() {
        const type = this.getFloatType();
        const opts = {
            type,
            depthBuffer: false,
            stencilBuffer: false,
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            wrapS: THREE.ClampToEdgeWrapping,
            wrapT: THREE.ClampToEdgeWrapping
        };

        this.fbos = {
            vel_0: new THREE.WebGLRenderTarget(this.fboWidth, this.fboHeight, opts),
            vel_1: new THREE.WebGLRenderTarget(this.fboWidth, this.fboHeight, opts),
            vel_viscous0: new THREE.WebGLRenderTarget(this.fboWidth, this.fboHeight, opts),
            vel_viscous1: new THREE.WebGLRenderTarget(this.fboWidth, this.fboHeight, opts),
            div: new THREE.WebGLRenderTarget(this.fboWidth, this.fboHeight, opts),
            pressure_0: new THREE.WebGLRenderTarget(this.fboWidth, this.fboHeight, opts),
            pressure_1: new THREE.WebGLRenderTarget(this.fboWidth, this.fboHeight, opts)
        };
    }

    createShaders() {
        // Shader sources
        const vertexShader = `
            attribute vec3 position;
            varying vec2 uv;
            void main() {
                uv = position.xy * 0.5 + 0.5;
                gl_Position = vec4(position, 1.0);
            }
        `;

        const colorFragmentShader = `
            precision highp float;
            uniform sampler2D velocity;
            uniform sampler2D palette;
            varying vec2 uv;
            void main() {
                vec2 vel = texture2D(velocity, uv).xy;
                float lenv = clamp(length(vel), 0.0, 1.0);
                vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
                gl_FragColor = vec4(c, lenv);
            }
        `;

        const advectionShader = `
            precision highp float;
            uniform sampler2D velocity;
            uniform float dt;
            uniform vec2 fboSize;
            varying vec2 uv;
            void main() {
                vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
                vec2 vel = texture2D(velocity, uv).xy;
                vec2 uv2 = uv - vel * dt * ratio;
                vec2 newVel = texture2D(velocity, uv2).xy;
                gl_FragColor = vec4(newVel, 0.0, 0.0);
            }
        `;

        const externalForceShader = `
            precision highp float;
            uniform vec2 force;
            uniform vec2 center;
            uniform vec2 scale;
            varying vec2 uv;
            void main() {
                vec2 circle = (uv - center) / scale;
                float d = 1.0 - min(length(circle), 1.0);
                d *= d;
                gl_FragColor = vec4(force * d, 0.0, 1.0);
            }
        `;

        // Create palette texture
        this.paletteTex = this.makePaletteTexture(this.options.colors);

        // Create materials
        this.materials = {
            color: new THREE.RawShaderMaterial({
                vertexShader,
                fragmentShader: colorFragmentShader,
                transparent: true,
                depthWrite: false,
                uniforms: {
                    velocity: { value: null },
                    palette: { value: this.paletteTex }
                }
            }),
            advection: new THREE.RawShaderMaterial({
                vertexShader,
                fragmentShader: advectionShader,
                uniforms: {
                    velocity: { value: null },
                    dt: { value: this.options.dt },
                    fboSize: { value: new THREE.Vector2(this.fboWidth, this.fboHeight) }
                }
            }),
            externalForce: new THREE.RawShaderMaterial({
                vertexShader,
                fragmentShader: externalForceShader,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                uniforms: {
                    force: { value: new THREE.Vector2(0, 0) },
                    center: { value: new THREE.Vector2(0.5, 0.5) },
                    scale: { value: new THREE.Vector2(0.1, 0.1) }
                }
            })
        };

        // Create geometry and meshes
        this.geometry = new THREE.PlaneGeometry(2, 2);
        this.meshes = {
            color: new THREE.Mesh(this.geometry, this.materials.color),
            advection: new THREE.Mesh(this.geometry, this.materials.advection),
            externalForce: new THREE.Mesh(this.geometry, this.materials.externalForce)
        };

        this.scene.add(this.meshes.color);
    }

    makePaletteTexture(colors) {
        const arr = colors.length === 1 ? [colors[0], colors[0]] : colors;
        const w = arr.length;
        const data = new Uint8Array(w * 4);
        
        for (let i = 0; i < w; i++) {
            const c = new THREE.Color(arr[i]);
            data[i * 4 + 0] = Math.round(c.r * 255);
            data[i * 4 + 1] = Math.round(c.g * 255);
            data[i * 4 + 2] = Math.round(c.b * 255);
            data[i * 4 + 3] = 255;
        }
        
        const tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
        tex.magFilter = THREE.LinearFilter;
        tex.minFilter = THREE.LinearFilter;
        tex.wrapS = THREE.ClampToEdgeWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.generateMipmaps = false;
        tex.needsUpdate = true;
        return tex;
    }

    getFloatType() {
        const isIOS = /(iPad|iPhone|iPod)/i.test(navigator.userAgent);
        return isIOS ? THREE.HalfFloatType : THREE.FloatType;
    }

    setupEventListeners() {
        // Mouse events
        this.container.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.container.addEventListener('mouseenter', this.onMouseEnter.bind(this));
        this.container.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        
        // Touch events
        this.container.addEventListener('touchstart', this.onTouchStart.bind(this));
        this.container.addEventListener('touchmove', this.onTouchMove.bind(this));
        this.container.addEventListener('touchend', this.onTouchEnd.bind(this));

        // Window events
        window.addEventListener('resize', this.onResize.bind(this));
        document.addEventListener('visibilitychange', this.onVisibilityChange.bind(this));

        // Intersection Observer
        this.intersectionObserver = new IntersectionObserver(
            entries => {
                const entry = entries[0];
                this.isVisible = entry.isIntersecting && entry.intersectionRatio > 0;
                if (this.isVisible && !document.hidden) {
                    this.start();
                } else {
                    this.pause();
                }
            },
            { threshold: [0, 0.01, 0.1] }
        );
        this.intersectionObserver.observe(this.container);
    }

    onMouseMove(event) {
        const rect = this.container.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        
        this.mouse.x = x * 2 - 1;
        this.mouse.y = -(y * 2 - 1);
        
        this.lastUserInteraction = performance.now();
        if (this.autoDriver.active) {
            this.autoDriver.active = false;
            this.mouse.isAutoActive = false;
        }
    }

    onMouseEnter() {
        this.mouseInside = true;
    }

    onMouseLeave() {
        this.mouseInside = false;
    }

    onTouchStart(event) {
        if (event.touches.length === 1) {
            this.onMouseMove(event.touches[0]);
        }
    }

    onTouchMove(event) {
        if (event.touches.length === 1) {
            this.onMouseMove(event.touches[0]);
        }
    }

    onTouchEnd() {
        this.mouseInside = false;
    }

    onResize() {
        if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => this.resize(), 100);
    }

    onVisibilityChange() {
        if (document.hidden) {
            this.pause();
        } else if (this.isVisible) {
            this.start();
        }
    }

    resize() {
        const rect = this.container.getBoundingClientRect();
        this.width = Math.max(1, Math.floor(rect.width));
        this.height = Math.max(1, Math.floor(rect.height));
        
        // Update renderer size
        this.renderer.setSize(this.width, this.height, false);
        
        // Update FBO sizes
        this.fboWidth = Math.max(1, Math.round(this.options.resolution * this.width));
        this.fboHeight = Math.max(1, Math.round(this.options.resolution * this.height));
        
        // Recreate framebuffers
        if (this.fbos) {
            Object.values(this.fbos).forEach(fbo => fbo.dispose());
            this.createFramebuffers();
        }
        
        // Update shader uniforms
        if (this.materials) {
            this.materials.advection.uniforms.fboSize.value.set(this.fboWidth, this.fboHeight);
        }
    }

    updateAutoDriver() {
        if (!this.autoDriver.enabled) return;
        
        const now = performance.now();
        const idle = now - this.lastUserInteraction;
        
        if (idle < this.autoDriver.resumeDelay) {
            if (this.autoDriver.active) {
                this.autoDriver.active = false;
                this.mouse.isAutoActive = false;
            }
            return;
        }
        
        if (this.mouseInside) {
            if (this.autoDriver.active) {
                this.autoDriver.active = false;
                this.mouse.isAutoActive = false;
            }
            return;
        }
        
        if (!this.autoDriver.active) {
            this.autoDriver.active = true;
            this.autoDriver.current.set(this.mouse.x, this.mouse.y);
            this.autoDriver.lastTime = now;
            this.autoDriver.activationTime = now;
            this.pickNewTarget();
        }
        
        this.mouse.isAutoActive = true;
        
        let dtSec = (now - this.autoDriver.lastTime) / 1000;
        this.autoDriver.lastTime = now;
        if (dtSec > 0.2) dtSec = 0.016;
        
        const dir = new THREE.Vector2().subVectors(this.autoDriver.target, this.autoDriver.current);
        const dist = dir.length();
        
        if (dist < 0.01) {
            this.pickNewTarget();
            return;
        }
        
        dir.normalize();
        
        let ramp = 1;
        if (this.autoDriver.rampDurationMs > 0) {
            const t = Math.min(1, (now - this.autoDriver.activationTime) / this.autoDriver.rampDurationMs);
            ramp = t * t * (3 - 2 * t);
        }
        
        const step = this.autoDriver.speed * dtSec * ramp;
        const move = Math.min(step, dist);
        this.autoDriver.current.addScaledVector(dir, move);
        
        this.mouse.x = this.autoDriver.current.x;
        this.mouse.y = this.autoDriver.current.y;
    }

    pickNewTarget() {
        const margin = 0.2;
        this.autoDriver.target.set(
            (Math.random() * 2 - 1) * (1 - margin),
            (Math.random() * 2 - 1) * (1 - margin)
        );
    }

    update() {
        // Update auto driver
        this.updateAutoDriver();
        
        // Calculate mouse velocity
        this.mouse.diffX = this.mouse.x - this.mouse.oldX;
        this.mouse.diffY = this.mouse.y - this.mouse.oldY;
        this.mouse.oldX = this.mouse.x;
        this.mouse.oldY = this.mouse.y;
        
        if (this.mouse.isAutoActive) {
            this.mouse.diffX *= this.mouse.autoIntensity;
            this.mouse.diffY *= this.mouse.autoIntensity;
        }
        
        // Advection step
        this.renderer.setRenderTarget(this.fbos.vel_1);
        this.materials.advection.uniforms.velocity.value = this.fbos.vel_0.texture;
        const advectionScene = new THREE.Scene();
        advectionScene.add(this.meshes.advection);
        this.renderer.render(advectionScene, this.camera);
        
        // External force step
        if (Math.abs(this.mouse.diffX) > 0.001 || Math.abs(this.mouse.diffY) > 0.001) {
            this.renderer.setRenderTarget(this.fbos.vel_1);
            this.materials.externalForce.uniforms.force.value.set(
                this.mouse.diffX * this.options.mouseForce,
                this.mouse.diffY * this.options.mouseForce
            );
            this.materials.externalForce.uniforms.center.value.set(
                this.mouse.x * 0.5 + 0.5,
                -this.mouse.y * 0.5 + 0.5
            );
            this.materials.externalForce.uniforms.scale.value.set(
                this.options.cursorSize / this.width,
                this.options.cursorSize / this.height
            );
            const forceScene = new THREE.Scene();
            forceScene.add(this.meshes.externalForce);
            this.renderer.render(forceScene, this.camera);
        }
        
        // Swap buffers
        [this.fbos.vel_0, this.fbos.vel_1] = [this.fbos.vel_1, this.fbos.vel_0];
        
        // Render to screen
        this.renderer.setRenderTarget(null);
        this.materials.color.uniforms.velocity.value = this.fbos.vel_0.texture;
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        if (!this.isRunning) return;
        
        this.update();
        this.animationFrame = requestAnimationFrame(() => this.render());
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.render();
    }

    pause() {
        this.isRunning = false;
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
    }

    dispose() {
        // Stop rendering
        this.pause();
        
        // Remove event listeners
        this.container.removeEventListener('mousemove', this.onMouseMove);
        this.container.removeEventListener('mouseenter', this.onMouseEnter);
        this.container.removeEventListener('mouseleave', this.onMouseLeave);
        this.container.removeEventListener('touchstart', this.onTouchStart);
        this.container.removeEventListener('touchmove', this.onTouchMove);
        this.container.removeEventListener('touchend', this.onTouchEnd);
        window.removeEventListener('resize', this.onResize);
        document.removeEventListener('visibilitychange', this.onVisibilityChange);
        
        // Disconnect observers
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
        }
        
        // Dispose Three.js resources
        if (this.fbos) {
            Object.values(this.fbos).forEach(fbo => fbo.dispose());
        }
        if (this.materials) {
            Object.values(this.materials).forEach(material => material.dispose());
        }
        if (this.geometry) {
            this.geometry.dispose();
        }
        if (this.paletteTex) {
            this.paletteTex.dispose();
        }
        if (this.renderer) {
            this.renderer.dispose();
            this.renderer.domElement.remove();
        }
    }
}

// Export for use
window.LiquidEther = LiquidEther;
