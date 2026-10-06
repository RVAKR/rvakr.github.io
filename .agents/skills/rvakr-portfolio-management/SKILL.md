---
name: rvakr-portfolio-management
description: Maintenance, content synchronization, theme engineering, and GitHub Pages deployment workflows for the RVAKR Data Platform Engineering portfolio (rvakr.github.io / rvakr.boreddy.com). Use whenever modifying, updating, or maintaining the portfolio codebase.
---

# RVAKR Portfolio Management & Maintenance Skill

This skill documents the end-to-end architecture, content synchronization rules, styling constraints, and GitHub Pages deployment protocols for the **RVAKR Senior Data Platform Engineer** portfolio website.

---

## 1. Core Architecture & File Mapping

The portfolio is structured as a zero-build, ultra-fast **Vanilla ES6 Module** multi-page platform:

| Path | Purpose | Key Components |
| :--- | :--- | :--- |
| `index.html` | Homepage | Hero, typing animation, stats strip, recognitions callout, 4 core pillars, builds highlight |
| `pages/about.html` | About & Profile | Summary, 4 architecture pillars, career chronology (Softcrylic, Bolt Tech, TCS, Trio Vision), education |
| `pages/skills.html` | Technical Skills | Interactive SVG Knowledge Graph (12-node constellation), domain categories, proficiency meters |
| `pages/projects.html` | Builds & Solutions | 100+ TB Medallion Lakehouse case study, ~95% Less Code framework, ChoiceBase, PyConnector |
| `pages/certifications.html` | Badges & Honors | Recognitions & Client Awards (“Lone Wolf”, “On the Spot”), licensed badges (AWS, Databricks, PyPI), specializations |
| `pages/contact.html` | Contact Hub | Inquiry fast-select, direct priority inbox, instant DM channels, social directory |
| `css/style.css` | Universal Design System | Custom properties (`--bg`, `--primary`), Dark/Light mode overrides, mobile responsive breakpoints |
| `js/data.js` | Single Source of Truth | Master data objects (`PROFILE`, `EXPERIENCE_DATA`, `SKILLS_DATA`, `PROJECTS_DATA`, `RECOGNITIONS_DATA`, `SOCIALS_DATA`) |
| `js/graph.js` | Constellation Graph Engine | SVG rendering, dynamic halo pulses, edge topological connectors, floating cyber tooltips |
| `js/main.js` | App Controller | Theme toggle, mobile drawer navigation, typing animation |
| `.nojekyll` | GitHub Pages Directive | Bypasses Jekyll build processing to serve raw static assets directly with accurate MIME types |
| `CNAME` | Custom Domain | Configured to `rvakr.boreddy.com` |

---

## 2. Engineering Positioning & Metric Guidelines

When updating copy, achievements, or resumes, always enforce these grounded metrics:

1. **Data Volume & Scale**:
   - `100+ TB across 5+ million tables (built to scale to 10M)`.
   - Never write repetitive "2M+ tables" in isolation — ground it as part of the multi-cluster Lakehouse platform.
2. **Metadata-Driven Automation**:
   - `Templated ~70% of scripts via metadata-driven automation (~95% code reduction, +40% team delivery speed)`.
   - Replaced 2,000+ lines of redundant code with ~100 lines of configuration across 22 customers and 400+ silver tables.
3. **Distributed Architecture**:
   - `Multi-Cluster & Multi-Cloud Platforms` (AWS, Databricks, Azure, GCP).
4. **Honors & Recognitions**:
   - **“Lone Wolf” Title**: Conferred by *Client Leadership* (do not attach vendor/employer company names). Conferred for single-handed platform design and rapid rollout.
   - **“On the Spot” Recognition**: Conferred by *Senior Management* (do not attach employer company names). Conferred for rapid resolution of critical production pipelines and multi-region AWS Glue ingestion across US, UK, and Japan.
5. **Education**:
   - `B.Tech in Mechanical Engineering` · `Mechanical Engineering Graduate` · `Graduated 2020` (No CGPA, no college address).

---

## 3. Theme & CSS Styling Guardrails

1. **Dark Theme**:
   - Surface: `#090b14` and `#101322`.
   - Accents: Electric Cyan `#00d2ff`, Cyber Violet `#a855f7`, Rose Coral `#f43f5e`, Emerald `#10b981`.
   - Avoid raw glaring neon (`#00f3ff` with heavy text-shadow) to protect readability.
2. **Light Theme**:
   - High Contrast Slate-900 typography (`--text: #0f172a`, `--text-dim: #334155`).
   - Cards render on crisp `#ffffff` with subtle borders (`rgba(148, 163, 184, 0.35)`).
   - Knowledge Graph SVG switches to a clean light slate gradient with white circular node fills and dark text.
3. **Syntax Validation Rules**:
   - **NEVER** nest `@supports` or `@media` queries inside CSS selector blocks (e.g. inside `.back-to-top`). Always keep at-rules at the top level or use vendor-prefixed properties (`-webkit-backdrop-filter`).
   - Run `node -c js/*.js` before committing to catch syntax errors.

---

## 4. Web Analytics Integration (GA4)

The site integrates Google Analytics 4 (`gtag.js`) across all HTML `<head>` blocks with no UI performance overhead or third-party counter dependencies.

---

## 5. Deployment & Verification Workflow

---

## 5. Deployment & Verification Workflow

```bash
# 1. Verify JavaScript syntax
node -c js/data.js ; node -c js/graph.js ; node -c js/main.js

# 2. Stage all modifications
git add -A

# 3. Commit with descriptive message
git commit -m "Update portfolio: <description>"

# 4. Push to GitHub Pages
git push origin master

# 5. Verify live site:
# If stylesheets appear cached, perform a hard refresh (Ctrl + F5 or Cmd + Shift + R)
```
