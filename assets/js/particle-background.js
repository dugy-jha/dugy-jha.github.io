import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';

export function createParticleBackground(container) {
    let scene, camera, renderer, particles, clock;
    let mouseX = 0, mouseY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    function init() {
        scene = new THREE.Scene();
        clock = new THREE.Clock();

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;

        const material = new THREE.PointsMaterial({
            color: 0x54a0ff,
            size: 2,
            blending: THREE.AdditiveBlending,
            transparent: true,
            sizeAttenuation: true,
        });

        const geometry = new THREE.BufferGeometry();
        const particleCount = 5000;
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() * 2000) - 1000;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        document.addEventListener('mousemove', onDocumentMouseMove, false);
        window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        const delta = clock.getDelta();
        
        camera.position.x += (mouseX - camera.position.x) * 0.0005;
        camera.position.y += (-mouseY - camera.position.y) * 0.0005;
        camera.lookAt(scene.position);

        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.001;

        renderer.render(scene, camera);
    }

    init();
    animate();
}
