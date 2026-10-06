# RVAKR Portfolio - React-based Personal Website

A modern, interactive portfolio website built with React (via CDN), React Router for multi-page navigation, and custom CSS. Features include dynamic skill visualization, theme toggle, and responsive design.

## 🚀 Quick Start

### Local Development
```bash
# Navigate to the project directory
 cd i:\rvakr.github.io

# Open index.html in browser (no build required!)
 start chrome http://localhost:8080

# Or use Python server (recommended)
 python -m http.server 8080 --bind 127.0.0.1

# Then visit: http://localhost:8080
```

### Features
- **Multi-page navigation** with React Router
- **Interactive skill visualization** on landing page
- **Dynamic connections** between related skills
- **Theme toggle** (dark/light mode)
- **Responsive design** for all devices
- **Smooth animations** and transitions
- **Real-time scroll progress** indicator
- **Terminal CLI interface** for fun interactions

### File Structure
```
rvakr.github.io/
├── index.html              # Landing page
├── about.html              # About section
├── skills.html             # Skills page
├── projects.html           # Projects page
├── contributions.html      # Contributions page
├── certifications.html      # Certifications page
├── contact.html            # Contact page
├── css/style.css           # Shared styles
├── data/*.json             # JSON data files
├── images/                 # Images and certificates
└── README.md              # This documentation
```

### Navigation
All pages are interconnected:
- Header navigation links
- Footer links back to home
- Smooth scroll transitions
- Browser history support

### Technologies Used
- React 18 (via CDN)
- React Router 6
- Babel Standalone
- Custom CSS with CSS variables
- FontAwesome & Devicons
- Canvas animations
- LocalStorage for theme persistence

### Deployment
```bash
# For GitHub Pages, simply push the folder contents
 git add .
 git commit -m "Update portfolio"
 git push origin master

# GitHub Pages will serve index.html automatically
```

### Contact
- Email: contactmail.br@gmail.com
- GitHub: https://github.com/rvakr
- LinkedIn: https://linkedin.com/in/rvakr

---
*Built with ❤️ by RVAKR (Reddy Veera Akhil Kumar Reddy)*