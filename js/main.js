document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const navList = document.getElementById('nav-list');
    const themeToggle = document.getElementById('theme-toggle');

    // --- Data Fetching & Rendering ---
    Promise.all([
        fetch('data/profile.json').then(res => res.json()),
        fetch('data/skills.json').then(res => res.json()),
        fetch('data/projects.json').then(res => res.json()),
        fetch('data/socials.json').then(res => res.json())
    ])
        .then(([profile, skills, projects, socials]) => {
            renderNav();
            renderHero(profile);
            renderAbout(profile, skills);
            renderProjects(projects);
            renderContact(socials);
            renderFooter(socials);

            // Handle Hash Navigation (Refresh/Direct Link)
            if (window.location.hash) {
                const targetId = window.location.hash.substring(1);
                // Wait slightly for DOM to settle
                setTimeout(() => {
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        // Use instant scroll for restoration
                        targetElement.scrollIntoView();
                    }
                }, 300);
            }
        })
        .catch(err => console.error('Error loading data:', err));

    function renderNav() {
        const sections = ['Hero', 'Projects', 'Contact', 'About'];
        sections.forEach(sec => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${sec.toLowerCase()}`;
            a.textContent = sec;
            a.className = 'nav-link';
            a.addEventListener('click', () => {
                document.querySelector('nav').classList.remove('active');
            });
            li.appendChild(a);
            navList.appendChild(li);
        });
    }

    function renderHero(profile) {
        const hero = document.getElementById('hero');
        hero.innerHTML = `
            <div class="hero-content">
                <h4 class="greeting">HELLO WORLD, I AM</h4>
                <h1 class="glitch" data-text="${profile.name}">${profile.name}</h1>
                <p class="tagline">${profile.tagline}</p>
                <a href="#projects" class="btn-main">EXPLORE WORK</a>
            </div>
        `;
    }

    function renderAbout(profile, skills) {
        const section = document.createElement('section');
        section.id = 'about';
        section.className = 'section';

        const skillsHTML = skills.map(skill => `<span class="tech-tag">${skill}</span>`).join('');

        section.innerHTML = `
            <div class="container">
                <h2>// ABOUT ME </h2>
                <div class="grid-container" style="grid-template-columns: 1fr;">
                    <div class="card">
                        <p>${profile.bio}</p>
                        <div class="skills-container" style="margin-top: 2rem;">
                            <h3>DETECTED_SKILLS:</h3>
                            ${skillsHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    function getIconHTML(social) {
        const platform = social.platform.toLowerCase();
        // Whitelist of standard FontAwesome icons we know work well
        const faPlatforms = ['github', 'linkedin', 'twitter', 'x', 'instagram', 'facebook', 'youtube', 'discord'];

        if (faPlatforms.includes(platform)) {
            return `<i class="${social.icon}"></i>`;
        } else {
            // For others (Databricks, HackerRank, LeetCode, etc.), fetch from Simple Icons CDN
            // We use the CSS mask technique to allow recoloring (hover effects)
            return `<span class="dynamic-icon" style="--url: url('https://cdn.simpleicons.org/${platform}')"></span>`;
        }
    }

    function renderProjects(projects) {
        const section = document.createElement('section');
        section.id = 'projects';
        section.className = 'section';

        const projectsHTML = projects.map(project => {
            const stack = project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('');

            let linksHTML = `<a href="${project.projectUrl}" target="_blank" class="project-link">VIEW_PROJECT -></a>`;

            if (project.isPublic && project.sourceUrl) {
                linksHTML += `<a href="${project.sourceUrl}" target="_blank" class="project-link source-link">SOURCE_CODE -></a>`;
            }

            return `
                <div class="card project-card">
                    <span class="project-category">${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack" style="margin: 1rem 0;">${stack}</div>
                    <div class="project-links">
                        ${linksHTML}
                    </div>
                </div>
            `;
        }).join('');

        section.innerHTML = `
            <div class="container">
                <h2>// PROJECT_LOGS</h2>
                <div class="grid-container">
                    ${projectsHTML}
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    function renderContact(socials) {
        const section = document.createElement('section');
        section.id = 'contact';
        section.className = 'section';

        const socialLinksHTML = socials.map(social => `
            <a href="${social.url}" target="_blank" class="social-card">
                ${getIconHTML(social)}
                <span>${social.platform}</span>
            </a>
        `).join('');

        section.innerHTML = `
            <div class="container">
                <h2>// ESTABLISH_UPLINK</h2>
                <div class="contact-grid">
                    <div class="card contact-card">
                        <h3>DIRECT_CONNECTION</h3>
                        <p>Initialize communication channel.</p>
                        <a href="mailto:contactmail.br@gmail.com" class="email-link">contactmail.br@gmail.com</a>
                    </div>
                    <div class="social-grid">
                        ${socialLinksHTML}
                    </div>
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    function renderFooter(socials) {
        document.getElementById('year').textContent = new Date().getFullYear();
        const socialContainer = document.getElementById('social-links');

        socials.forEach(social => {
            const a = document.createElement('a');
            a.href = social.url;
            a.target = '_blank';
            a.innerHTML = getIconHTML(social);
            a.style.color = 'var(--text-color)';
            a.style.fontSize = '1.5rem';
            a.style.margin = '0 1rem';
            a.style.transition = 'color 0.3s';
            a.onmouseover = () => a.style.color = 'var(--primary-color)';
            a.onmouseout = () => a.style.color = 'var(--text-color)';

            // Ensure SVG inherits color
            const svg = a.querySelector('svg');
            if (svg) {
                svg.style.fill = 'currentColor';
                svg.style.verticalAlign = 'middle';
            }

            socialContainer.appendChild(a);
        });
    }

    // --- Interaction Logic ---

    // Mobile Menu
    document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('active');
    });

    // Theme Toggle
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    // --- Canvas Background Animation ---
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
    }

    function initParticles() {
        particles = [];
        const count = width > 768 ? 100 : 50;
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2,
                color: Math.random() > 0.5 ? '#00f3ff' : '#bc13fe'
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            // Connect nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.strokeStyle = `rgba(0, 243, 255, ${1 - dist / 150})`;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
});
