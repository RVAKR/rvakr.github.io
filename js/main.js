import { 
  PROFILE as profile, 
  SKILLS_DATA as skillsData, 
  PROJECTS_DATA as projectsData, 
  CONTRIBUTIONS_DATA as contributionsData, 
  CERTIFICATIONS_DATA as certificationsData, 
  SOCIALS_DATA as socialsData 
} from './data.js';

// Theme Management
let theme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', theme);

function updateThemeIcon() {
  const themeBtns = document.querySelectorAll('#themeToggle, .theme-toggle-btn');
  themeBtns.forEach(btn => {
    btn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    btn.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  });
}

// Background Canvas Particles
const canvas = document.getElementById('bg-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    initParticles();
  }

  function initParticles() {
    particles = [];
    const cnt = w > 768 ? 55 : 25;
    for (let i = 0; i < cnt; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.5,
        c: Math.random() > 0.5 ? '#00f3ff' : '#bc13fe'
      });
    }
  }

  function animateBG() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.fillStyle = p.c;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let distSq = dx * dx + dy * dy;
        if (distSq < 18000) {
          ctx.strokeStyle = `rgba(0, 243, 255, ${Math.max(0, 1 - Math.sqrt(distSq) / 135) * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateBG);
  }

  window.addEventListener('resize', resize);
  resize();
  animateBG();
}

// UI Event Handlers
document.addEventListener('DOMContentLoaded', () => {
  updateThemeIcon();

  // Theme Toggles
  const themeBtns = document.querySelectorAll('#themeToggle, .theme-toggle-btn');
  themeBtns.forEach(btn => {
    btn.onclick = () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateThemeIcon();
    };
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.onclick = () => {
      mainNav.classList.toggle('open');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (mainNav.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    };

    // Close menu on outside click or nav link click
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target) && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // Footer Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Footer Social Links
  const footerSocial = document.getElementById('footerSocial');
  if (footerSocial && socialsData) {
    const emailItem = profileData?.email ? [{
      platform: "Direct Email",
      url: `mailto:${profileData.email}`,
      icon: "fas fa-envelope",
      cls: "email",
      action: "Send Email"
    }] : [];

    const allFooterLinks = [...socialsData.filter(s => s.url), ...emailItem];

    footerSocial.innerHTML = allFooterLinks
      .map(s => `
        <a href="${s.url}" ${s.url.startsWith('mailto:') ? '' : 'target="_blank" rel="noopener noreferrer"'} class="social-icon ${s.cls}" aria-label="${s.platform}" title="${s.platform} — ${s.action || 'Follow'}">
          <i class="${s.icon}"></i>
        </a>
      `).join('');
  }

  // Scroll Progress Bar
  const scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) {
        scrollProgress.style.width = (winScroll / height) * 100 + '%';
      }
    });
  }

  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // Hero Typed Text Animation
  const typed = document.getElementById('typedRole');
  if (typed) {
    const roles = [
      "Data Engineer · Solutions For Anything Data",
      "Platform Engineer · AWS, GCP, Azure, Databricks",
      "Microservices Developer · FastAPI & Flask",
      "AI Developer · AI-Ready Architecture & LLMs",
      "AWS Certified Data Engineer"
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function typeLoop() {
      const currentRole = roles[roleIdx];
      
      if (isDeleting) {
        typed.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typingSpeed = 40;
      } else {
        typed.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typingSpeed = 90;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        typingSpeed = 1800; // Pause at end of text
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingSpeed = 400; // Pause before new word
      }

      setTimeout(typeLoop, typingSpeed);
    }

    typeLoop();
  }
});

export { profile, skillsData, projectsData, contributionsData, certificationsData, socialsData };
