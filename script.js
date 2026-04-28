document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Apply Falling Pattern Background to #services
    applyFallingPattern('services');

    // Apply Dotted Surface Background to footer
    applyDottedSurfaceFooter('contact');
});

function applyFallingPattern(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // We want the pattern to sit behind the content, so we create a background wrapper
    container.style.position = 'relative';
    container.style.overflow = 'hidden';

    const color = 'rgba(255, 255, 255, 0.5)';
    const backgroundColor = '#0a0a0a'; // matches bg-dark
    const duration = 150; // seconds

    const patterns = [
        `radial-gradient(4px 100px at 0px 235px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 235px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 117.5px, ${color} 100%, transparent 150%)`,
        `radial-gradient(4px 100px at 0px 252px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 252px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 126px, ${color} 100%, transparent 150%)`,
        `radial-gradient(4px 100px at 0px 150px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 150px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 75px, ${color} 100%, transparent 150%)`,
        `radial-gradient(4px 100px at 0px 253px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 253px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 126.5px, ${color} 100%, transparent 150%)`,
        `radial-gradient(4px 100px at 0px 204px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 204px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 102px, ${color} 100%, transparent 150%)`,
        `radial-gradient(4px 100px at 0px 134px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 134px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 67px, ${color} 100%, transparent 150%)`,
        `radial-gradient(4px 100px at 0px 179px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 179px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 89.5px, ${color} 100%, transparent 150%)`,
        `radial-gradient(4px 100px at 0px 299px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 299px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 149.5px, ${color} 100%, transparent 150%)`,
        `radial-gradient(4px 100px at 0px 215px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 215px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 107.5px, ${color} 100%, transparent 150%)`,
        `radial-gradient(4px 100px at 0px 281px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 281px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 140.5px, ${color} 100%, transparent 150%)`,
        `radial-gradient(4px 100px at 0px 158px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 158px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 79px, ${color} 100%, transparent 150%)`,
        `radial-gradient(4px 100px at 0px 210px, ${color}, transparent)`,
        `radial-gradient(4px 100px at 300px 210px, ${color}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px 105px, ${color} 100%, transparent 150%)`
    ].join(', ');

    const backgroundSizes = [
        '300px 235px', '300px 235px', '300px 235px',
        '300px 252px', '300px 252px', '300px 252px',
        '300px 150px', '300px 150px', '300px 150px',
        '300px 253px', '300px 253px', '300px 253px',
        '300px 204px', '300px 204px', '300px 204px',
        '300px 134px', '300px 134px', '300px 134px',
        '300px 179px', '300px 179px', '300px 179px',
        '300px 299px', '300px 299px', '300px 299px',
        '300px 215px', '300px 215px', '300px 215px',
        '300px 281px', '300px 281px', '300px 281px',
        '300px 158px', '300px 158px', '300px 158px',
        '300px 210px', '300px 210px', '300px 210px'
    ].join(', ');

    const startPositions = '0px 220px, 3px 220px, 151.5px 337.5px, 25px 24px, 28px 24px, 176.5px 150px, 50px 16px, 53px 16px, 201.5px 91px, 75px 224px, 78px 224px, 226.5px 230.5px, 100px 19px, 103px 19px, 251.5px 121px, 125px 120px, 128px 120px, 276.5px 187px, 150px 31px, 153px 31px, 301.5px 120.5px, 175px 235px, 178px 235px, 326.5px 384.5px, 200px 121px, 203px 121px, 351.5px 228.5px, 225px 224px, 228px 224px, 376.5px 364.5px, 250px 26px, 253px 26px, 401.5px 105px, 275px 75px, 278px 75px, 426.5px 180px';
    const endPositions = '0px 6800px, 3px 6800px, 151.5px 6917.5px, 25px 13632px, 28px 13632px, 176.5px 13758px, 50px 5416px, 53px 5416px, 201.5px 5491px, 75px 17175px, 78px 17175px, 226.5px 17301.5px, 100px 5119px, 103px 5119px, 251.5px 5221px, 125px 8428px, 128px 8428px, 276.5px 8495px, 150px 9876px, 153px 9876px, 301.5px 9965.5px, 175px 13391px, 178px 13391px, 326.5px 13540.5px, 200px 14741px, 203px 14741px, 351.5px 14848.5px, 225px 18770px, 228px 18770px, 376.5px 18910.5px, 250px 5082px, 253px 5082px, 401.5px 5161px, 275px 6375px, 278px 6375px, 426.5px 6480px';

    const wrapper = document.createElement('div');
    wrapper.className = 'falling-pattern-wrapper';
    
    const animatedBg = document.createElement('div');
    animatedBg.className = 'falling-pattern-bg';
    animatedBg.style.backgroundColor = backgroundColor;
    animatedBg.style.backgroundImage = patterns;
    animatedBg.style.backgroundSize = backgroundSizes;
    
    // Create CSS animation dynamically
    const styleId = 'falling-pattern-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.innerHTML = `
            @keyframes fall {
                0% { background-position: ${startPositions}; }
                100% { background-position: ${endPositions}; }
            }
            .falling-pattern-wrapper {
                position: absolute;
                inset: 0;
                z-index: 0;
                pointer-events: none;
                opacity: 0;
                animation: fadeInBg 1s ease forwards;
            }
            @keyframes fadeInBg { to { opacity: 1; } }
            .falling-pattern-bg {
                position: absolute;
                inset: 0;
                animation: fall ${duration}s linear infinite;
            }
            .falling-pattern-overlay {
                position: absolute;
                inset: 0;
                backdrop-filter: blur(1em);
                -webkit-backdrop-filter: blur(1em);
                background-image: radial-gradient(circle at 50% 50%, transparent 0, transparent 2px, ${backgroundColor} 2px);
                background-size: 8px 8px;
            }
        `;
        document.head.appendChild(style);
    }

    const overlay = document.createElement('div');
    overlay.className = 'falling-pattern-overlay';

    wrapper.appendChild(animatedBg);
    wrapper.appendChild(overlay);

    // Make sure container content stays above the background
    Array.from(container.children).forEach(child => {
        child.style.position = 'relative';
        child.style.zIndex = '1';
    });

    container.insertBefore(wrapper, container.firstChild);
}

function applyDottedSurfaceFooter(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !window.THREE) return;

    container.style.position = 'relative';
    container.style.overflow = 'hidden';

    const wrapper = document.createElement('div');
    wrapper.style.position = 'absolute';
    wrapper.style.inset = '0';
    wrapper.style.zIndex = '0';
    wrapper.style.pointerEvents = 'none';

    // Add overlay to gently fade out the edges based on the demo component
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '-2.5rem';
    overlay.style.left = '50%';
    overlay.style.transform = 'translateX(-50%)';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.borderRadius = '50%';
    overlay.style.backgroundImage = 'radial-gradient(ellipse at center, rgba(17,17,17,0.1), transparent 50%)';
    overlay.style.filter = 'blur(30px)';
    
    wrapper.appendChild(overlay);

    // Keep container content above background
    Array.from(container.children).forEach(child => {
        child.style.position = 'relative';
        child.style.zIndex = '1';
    });

    container.insertBefore(wrapper, container.firstChild);

    // Three.js setup
    const SEPARATION = 150;
    const AMOUNTX = 40;
    const AMOUNTY = 60;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x111111, 1000, 3000); // 0x111111 matches footer background

    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 1, 10000);
    camera.position.set(0, 355, 1220);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0); 

    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    wrapper.appendChild(renderer.domElement);

    const positions = [];
    const colors = [];
    const geometry = new THREE.BufferGeometry();

    for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
            const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
            const y = 0;
            const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

            positions.push(x, y, z);
            colors.push(0.8, 0.8, 0.8); // 200/255 for dark theme dots
        }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 8,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let count = 0;

    function animate() {
        requestAnimationFrame(animate);

        const positionAttribute = geometry.attributes.position;
        const posArray = positionAttribute.array;

        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                const index = i * 3;
                // Animate Y position with sine waves
                posArray[index + 1] = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
                i++;
            }
        }

        positionAttribute.needsUpdate = true;
        renderer.render(scene, camera);
        count += 0.1;
    }

    function handleResize() {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    window.addEventListener('resize', handleResize);
    animate();
}
