document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const navList = document.getElementById('nav-list');
    const themeToggle = document.getElementById('theme-toggle');

    // --- Data Fetching & Rendering ---
    Promise.all([
        fetch('data/profile.json').then(res => res.json()),
        fetch('data/skills.json').then(res => res.json()),
        fetch('data/projects.json').then(res => res.json()),
        fetch('data/socials.json').then(res => res.json()),
        fetch('data/certifications.json').then(res => res.json()),
        fetch('data/activity.json').then(res => res.json())
    ])
        .then(([profile, skills, projects, socials, certifications, activity]) => {
            renderNav();
            renderHome(profile);
            renderAbout(profile, skills);
            renderProjects(projects);
            renderCertifications(certifications);
            renderActivity(activity);
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
        const sections = ['Home', 'About', 'Projects', 'Certifications', 'Activity', 'Contact'];
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

    function renderHome(profile) {
        const home = document.getElementById('home');
        home.innerHTML = `
            <div class="home-content">
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
                <h2>// PROFILE_OVERVIEW </h2>
                <div class="grid-container">
                    <div class="card profile-card">
                        <h3><i class="fas fa-user-circle"></i> Identity</h3>
                        <p><strong>Full Name:</strong> ${profile.fullName}</p>
                        <p><strong>Designation:</strong> ${profile.tagline}</p>
                        <p style="margin-top: 1rem;">${profile.bio}</p>
                        <div class="skills-container" style="margin-top: 2rem;">
                            <h3>DETECTED_SKILLS:</h3>
                            ${skillsHTML}
                        </div>
                    </div>
                    
                    <div class="card search-card">
                        <h3><i class="fab fa-google"></i> Digital Footprint</h3>
                        <p>Known globally as <strong>RVAKR</strong>. High search visibility for specialized R&D and Open Source contributions.</p>
                        <div class="stat-container" style="margin-top: 1.5rem;">
                            <div class="stat-item">
                                <span class="stat-label">Search Query:</span>
                                <span class="stat-value">"rvakr"</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Indexing Status:</span>
                                <span class="stat-value" style="color: var(--primary-color);">ACTIVE</span>
                            </div>
                        </div>
                        <a href="https://www.google.com/search?q=rvakr" target="_blank" class="project-link" style="margin-top: 2rem;">VIEW_GOOGLE_INDEX -></a>
                    </div>
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    function getIconHTML(social) {
        const platform = social.platform.toLowerCase();
        // Whitelist of standard FontAwesome icons we know work well
        const faPlatforms = ['github', 'linkedin', 'twitter', 'x', 'instagram', 'facebook', 'youtube', 'discord', 'email'];

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

    function renderCertifications(certifications) {
        const section = document.createElement('section');
        section.id = 'certifications';
        section.className = 'section';

        const today = new Date();

        certifications.sort((a, b) => {
            const aIsBadge = a.type === 'badge';
            const bIsBadge = b.type === 'badge';

            const aIsLicensedAndNotExpired = a.isLicensed && (!a.expirationDate || new Date(a.expirationDate) > today);
            const bIsLicensedAndNotExpired = b.isLicensed && (!b.expirationDate || new Date(b.expirationDate) > today);

            // 1. Prioritize Badges
            if (aIsBadge && !bIsBadge) return -1;
            if (!aIsBadge && bIsBadge) return 1;

            // 2. Then Licensed and Not Expired Certificates (if both are not badges)
            if (!aIsBadge && !bIsBadge) {
                if (aIsLicensedAndNotExpired && !bIsLicensedAndNotExpired) return -1;
                if (!aIsLicensedAndNotExpired && bIsLicensedAndNotExpired) return 1;
            }

            // 3. For items within the same category, or if categories are equal, sort by date descending
            const dateA = new Date(a.date || a.expirationDate || '1900-01-01');
            const dateB = new Date(b.date || b.expirationDate || '1900-01-01');
            return dateB.getTime() - dateA.getTime();
        });

        const certificationsHTML = certifications.map(item => {
            const credentialType = item.isLicensed ? 'LICENSED' : 'PARTICIPATION';

            if (item.type === 'badge') {
                return `
                    <div class="card badge-card">
                        <span class="credential-type-tag">${credentialType}</span>
                        <img src="${item.imageUrl}" alt="${item.name}" style="max-width: 100px; margin-bottom: 1rem;">
                        <h3>${item.name}</h3>
                        <p>Issuer: ${item.issuer}</p>
                        ${item.expirationDate ? `<p>Expires: ${item.expirationDate}</p>` : ''}
                        ${item.link ? `<a href="${item.link}" target="_blank" class="project-link">View Badge</a>` : ''}
                    </div>
                `;
            } else if (item.type === 'certificate') {
                return `
                    <div class="card certificate-card">
                        <span class="credential-type-tag">${credentialType}</span>
                        <h3>${item.name}</h3>
                        <p>Issuer: ${item.issuer}</p>
                        <p>Date: ${item.date}</p>
                        ${item.expirationDate ? `<p>Expires: ${item.expirationDate}</p>` : ''}
                        ${item.verificationLink ? `<a href="${item.verificationLink}" target="_blank" class="project-link">Verify Certificate</a>` : ''}
                    </div>
                `;
            }
            return '';
        }).join('');

        section.innerHTML = `
            <div class="container">
                <h2>// CERTIFICATIONS</h2>
                <div class="grid-container">
                    ${certificationsHTML}
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    function renderActivity(activity) {
        const section = document.createElement('section');
        section.id = 'activity';
        section.className = 'section';

        // Using a more reliable GitHub activity graph service
        const githubUsername = activity.github.split('/').pop();
        const githubCalendarImage = `https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react-dark&bg_color=05050a&color=00f3ff&line=bc13fe&point=ff0055&area=true&hide_border=true`;

        section.innerHTML = `
            <div class="container">
                <h2>// ACTIVITY_PULSE</h2>
                <div class="grid-container">
                    <div class="card activity-card">
                        <h3><i class="fab fa-github"></i> GitHub Contribution Graph</h3>
                        <div class="activity-viz-container">
                            <img src="${githubCalendarImage}" alt="GitHub Activity Calendar" class="github-activity-calendar">
                        </div>
                        <p><a href="${activity.github}" target="_blank" class="project-link">VIEW_FULL_PROFILE -></a></p>
                    </div>

                    <div class="card activity-card">
                        <h3><i class="fas fa-calendar-alt"></i> Public Availability</h3>
                        <div class="calendar-wrapper">
                            <iframe src="${activity.availability}" style="border: 0" width="100%" height="300" frameborder="0" scrolling="no"></iframe>
                        </div>
                        <p class="dim">Real-time availability for meetings and collaborations.</p>
                    </div>
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
                <span>${social.label || social.platform}</span>
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