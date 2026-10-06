// js/graph.js - Interactive SVG Knowledge Graph & Constellation Engine
import { SKILLS_DATA as skillsData } from './data.js';

(() => {
  const svg = document.getElementById('skillGraphSvg');
  if (!svg || !Array.isArray(skillsData) || skillsData.length === 0) return;

  // Set responsive viewBox
  const vbWidth = 980;
  const vbHeight = 490;
  svg.setAttribute('viewBox', `0 0 ${vbWidth} ${vbHeight}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  // Clear previous content
  svg.innerHTML = '';

  // Defined Constellation Layout positions (normalized for 980x490 viewBox)
  const nodePositions = {
    'aws': { x: 200, y: 95, color: '#00f3ff', glow: 'rgba(0,243,255,0.45)', monogram: 'AWS' },
    'databricks': { x: 490, y: 65, color: '#bc13fe', glow: 'rgba(188,19,254,0.45)', monogram: 'DTB' },
    'gcp-azure': { x: 780, y: 95, color: '#00f3ff', glow: 'rgba(0,243,255,0.45)', monogram: 'CLD' },
    'ingestion': { x: 120, y: 230, color: '#00ff9d', glow: 'rgba(0,255,157,0.45)', monogram: 'ING' },
    'spark': { x: 320, y: 180, color: '#00ff9d', glow: 'rgba(0,255,157,0.45)', monogram: 'SPK' },
    'python': { x: 660, y: 180, color: '#ff0055', glow: 'rgba(255,0,85,0.45)', monogram: 'PY' },
    'ai-rag': { x: 860, y: 230, color: '#bc13fe', glow: 'rgba(188,19,254,0.45)', monogram: 'AI' },
    'governance': { x: 490, y: 235, color: '#00f3ff', glow: 'rgba(0,243,255,0.45)', monogram: 'GOV' },
    'sql': { x: 190, y: 370, color: '#00f3ff', glow: 'rgba(0,243,255,0.45)', monogram: 'SQL' },
    'airflow': { x: 360, y: 395, color: '#00ff9d', glow: 'rgba(0,255,157,0.45)', monogram: 'AIR' },
    'fastapi': { x: 620, y: 395, color: '#bc13fe', glow: 'rgba(188,19,254,0.45)', monogram: 'API' },
    'devops': { x: 790, y: 370, color: '#ff0055', glow: 'rgba(255,0,85,0.45)', monogram: 'OPS' }
  };

  const nodes = skillsData.map((s) => {
    const pos = nodePositions[s.id] || { x: 490, y: 245, color: '#00f3ff', glow: 'rgba(0,243,255,0.4)', monogram: s.name.substring(0, 3).toUpperCase() };
    return {
      ...s,
      x: pos.x,
      y: pos.y,
      r: 23,
      monogram: pos.monogram || s.name.substring(0, 3).toUpperCase(),
      color: pos.color,
      glow: pos.glow
    };
  });

  // Logical architectural connections grounded in Resume and Experience
  const edges = [
    { source: 'aws', target: 'databricks', label: 'Cloud Lakehouse' },
    { source: 'aws', target: 'ingestion', label: 'S3 / Glue Ingestion' },
    { source: 'ingestion', target: 'databricks', label: 'Auto Loader / Fivetran' },
    { source: 'databricks', target: 'spark', label: 'Delta Engine' },
    { source: 'databricks', target: 'gcp-azure', label: 'Multi-Cloud Fabric' },
    { source: 'databricks', target: 'governance', label: 'Unity Catalog' },
    { source: 'spark', target: 'python', label: 'PySpark Distributed' },
    { source: 'spark', target: 'sql', label: 'Spark SQL & DLT' },
    { source: 'spark', target: 'airflow', label: 'DAG Batch / Streaming' },
    { source: 'python', target: 'fastapi', label: 'Microservices & APIs' },
    { source: 'python', target: 'ai-rag', label: 'LLM & Embeddings' },
    { source: 'fastapi', target: 'devops', label: 'Docker Container' },
    { source: 'devops', target: 'aws', label: 'Terraform IaC' },
    { source: 'airflow', target: 'devops', label: 'CI/CD Workflows' },
    { source: 'ai-rag', target: 'databricks', label: 'Vector Stores & Data' },
    { source: 'sql', target: 'governance', label: 'Row-Level Security & Masking' },
    { source: 'sql', target: 'fastapi', label: 'Database Layer' },
    { source: 'gcp-azure', target: 'devops', label: 'Multi-Cloud Deploy' },
    { source: 'governance', target: 'aws', label: 'Disaster Recovery' }
  ];

  // Create SVG Defs for gradients & filters
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

  // Filter for glowing effects
  const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
  filter.setAttribute('id', 'nodeGlow');
  filter.setAttribute('x', '-50%');
  filter.setAttribute('y', '-50%');
  filter.setAttribute('width', '200%');
  filter.setAttribute('height', '200%');
  filter.innerHTML = `
    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
    <feMerge>
      <feMergeNode in="coloredBlur"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  `;
  defs.appendChild(filter);

  // Gradient for edges
  const edgeGrad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  edgeGrad.setAttribute('id', 'edgeGradient');
  edgeGrad.setAttribute('x1', '0%');
  edgeGrad.setAttribute('y1', '0%');
  edgeGrad.setAttribute('x2', '100%');
  edgeGrad.setAttribute('y2', '100%');
  edgeGrad.innerHTML = `
    <stop offset="0%" stop-color="#00f3ff" stop-opacity="0.6"/>
    <stop offset="100%" stop-color="#bc13fe" stop-opacity="0.6"/>
  `;
  defs.appendChild(edgeGrad);

  svg.appendChild(defs);

  // Group for edges
  const edgesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  edgesGroup.setAttribute('class', 'graph-edges');
  svg.appendChild(edgesGroup);

  // Draw Edges
  edges.forEach(({ source, target, label }) => {
    const na = nodes.find(n => n.id === source);
    const nb = nodes.find(n => n.id === target);
    if (!na || !nb) return;

    const edgeG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    edgeG.setAttribute('class', 'edge-group');
    edgeG.setAttribute('data-source', source);
    edgeG.setAttribute('data-target', target);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', na.x);
    line.setAttribute('y1', na.y);
    line.setAttribute('x2', nb.x);
    line.setAttribute('y2', nb.y);
    line.setAttribute('stroke', 'rgba(0, 243, 255, 0.22)');
    line.setAttribute('stroke-width', '1.6');
    line.setAttribute('stroke-dasharray', '4 3');
    line.setAttribute('class', 'graph-edge-line');
    edgeG.appendChild(line);

    edgesGroup.appendChild(edgeG);
  });

  // Group for nodes
  const nodesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  nodesGroup.setAttribute('class', 'graph-nodes');
  svg.appendChild(nodesGroup);

  // Tooltip element reference
  let tooltipEl = document.getElementById('graphTooltip');
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'graphTooltip';
    tooltipEl.className = 'graph-tooltip';
    document.body.appendChild(tooltipEl);
  }

  // Draw Nodes
  nodes.forEach(n => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${n.x},${n.y})`);
    g.setAttribute('class', 'graph-node');
    g.setAttribute('data-id', n.id);
    g.setAttribute('cursor', 'pointer');

    // Pulsing outer halo
    const halo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    halo.setAttribute('r', n.r + 7);
    halo.setAttribute('fill', 'none');
    halo.setAttribute('stroke', n.color);
    halo.setAttribute('stroke-width', '1');
    halo.setAttribute('opacity', '0.35');
    halo.setAttribute('class', 'node-halo');
    g.appendChild(halo);

    // Main Circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', n.r);
    circle.setAttribute('fill', '#0b1224');
    circle.setAttribute('stroke', n.color);
    circle.setAttribute('stroke-width', '2.2');
    circle.setAttribute('filter', 'url(#nodeGlow)');
    circle.setAttribute('class', 'node-circle');
    g.appendChild(circle);

    // Inner monogram text inside circle
    const iconText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    iconText.setAttribute('x', '0');
    iconText.setAttribute('y', '4.5');
    iconText.setAttribute('text-anchor', 'middle');
    iconText.setAttribute('fill', '#ffffff');
    iconText.setAttribute('font-family', "'Orbitron', sans-serif");
    iconText.setAttribute('font-size', '10');
    iconText.setAttribute('font-weight', '700');
    iconText.setAttribute('letter-spacing', '0.5px');
    iconText.setAttribute('pointer-events', 'none');
    iconText.textContent = n.monogram;
    g.appendChild(iconText);

    // Background pill for label
    const labelText = n.name;
    const labelWidth = Math.max(68, labelText.length * 7.2);
    const labelPill = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    labelPill.setAttribute('x', -labelWidth / 2);
    labelPill.setAttribute('y', n.r + 7);
    labelPill.setAttribute('width', labelWidth);
    labelPill.setAttribute('height', '18');
    labelPill.setAttribute('rx', '9');
    labelPill.setAttribute('fill', 'rgba(10, 16, 30, 0.88)');
    labelPill.setAttribute('stroke', 'rgba(255, 255, 255, 0.15)');
    labelPill.setAttribute('stroke-width', '1');
    g.appendChild(labelPill);

    // Label Text
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', '0');
    label.setAttribute('y', n.r + 19.5);
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('fill', '#e0e7ff');
    label.setAttribute('font-family', "'Rajdhani', sans-serif");
    label.setAttribute('font-size', '11.5');
    label.setAttribute('font-weight', '600');
    label.setAttribute('pointer-events', 'none');
    label.textContent = labelText;
    g.appendChild(label);

    // Hover & Click Interactions
    const activateNode = (e) => {
      // Scale node & brighten halo
      circle.setAttribute('r', n.r + 4);
      circle.setAttribute('stroke-width', '3.2');
      halo.setAttribute('r', n.r + 13);
      halo.setAttribute('opacity', '0.8');

      // Highlight connected lines
      document.querySelectorAll('.edge-group').forEach(eg => {
        const src = eg.getAttribute('data-source');
        const tgt = eg.getAttribute('data-target');
        const line = eg.querySelector('line');
        if (src === n.id || tgt === n.id) {
          line.setAttribute('stroke', n.color);
          line.setAttribute('stroke-width', '2.8');
          line.setAttribute('stroke-dasharray', 'none');
          line.setAttribute('opacity', '1');
        } else {
          line.setAttribute('opacity', '0.1');
        }
      });

      // Show rich Cyber Tooltip
      if (tooltipEl) {
        tooltipEl.innerHTML = `
          <div class="tt-header">
            <span class="tt-title">${n.name}</span>
            <span class="tt-badge" style="background:${n.glow}; border:1px solid ${n.color}; color:${n.color};">${n.category}</span>
          </div>
          <div class="tt-rating-row">
            <span>Proficiency:</span>
            <strong style="color:${n.color}; font-family:var(--font-mono);">${n.rating}/10</strong>
          </div>
          <div class="tt-bar"><div class="tt-bar-fill" style="width:${n.rating * 10}%; background:${n.color};"></div></div>
          <p class="tt-desc">${n.description}</p>
        `;
        positionTooltip(e);
        tooltipEl.classList.add('show');
      }
    };

    const resetNode = () => {
      circle.setAttribute('r', n.r);
      circle.setAttribute('stroke-width', '2.2');
      halo.setAttribute('r', n.r + 7);
      halo.setAttribute('opacity', '0.35');

      // Reset all lines
      document.querySelectorAll('.edge-group line').forEach(line => {
        line.setAttribute('stroke', 'rgba(0, 243, 255, 0.22)');
        line.setAttribute('stroke-width', '1.6');
        line.setAttribute('stroke-dasharray', '4 3');
        line.setAttribute('opacity', '1');
      });

      if (tooltipEl) {
        tooltipEl.classList.remove('show');
      }
    };

    const positionTooltip = (e) => {
      if (!tooltipEl) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const ttWidth = 280;
      let left = clientX + 16;
      let top = clientY + 16;

      if (left + ttWidth > window.innerWidth) {
        left = clientX - ttWidth - 16;
      }
      if (top + 160 > window.innerHeight) {
        top = clientY - 160;
      }

      tooltipEl.style.left = `${Math.max(10, left)}px`;
      tooltipEl.style.top = `${Math.max(10, top)}px`;
    };

    g.addEventListener('mouseenter', activateNode);
    g.addEventListener('mousemove', positionTooltip);
    g.addEventListener('mouseleave', resetNode);
    g.addEventListener('touchstart', (e) => { activateNode(e); }, { passive: true });

    nodesGroup.appendChild(g);
  });
})();
