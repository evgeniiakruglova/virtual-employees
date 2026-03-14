// Render filters
const filtersEl = document.querySelector('.filters');
filtersEl.innerHTML = CATEGORIES.map(c =>
  `<button class="filter-btn${c.id === 'all' ? ' active' : ''}" data-filter="${c.id}">${c.label}</button>`
).join('');

// Render table
function renderTable(filter = 'all') {
  const tbody = document.getElementById('skills-body');
  const filtered = filter === 'all' ? SKILLS : SKILLS.filter(s => s.category === filter);

  tbody.innerHTML = filtered.map(skill => {
    const typeLabel = skill.type === 'coming-soon'
      ? '<span style="color:#555;font-size:0.8rem">Скоро</span>'
      : skill.type === 'claude-project'
        ? '<span style="color:#3b82f6;font-size:0.8rem">Claude Project</span>'
        : '<span style="color:#10b981;font-size:0.8rem">Claude Code Skill</span>';

    return `
      <tr data-id="${skill.id}" class="${skill.type === 'coming-soon' ? 'row-dimmed' : ''}">
        <td><span class="skill-name">${skill.name}</span></td>
        <td><span class="skill-desc">${skill.description}</span></td>
        <td><span class="badge badge-${skill.category}">${skill.categoryLabel}</span></td>
        <td>${skill.stream ? `<span class="stream-link">${skill.stream}</span>` : typeLabel}</td>
        <td><span class="row-arrow">&rarr;</span></td>
      </tr>
    `;
  }).join('');
}

renderTable();

// Filter clicks
filtersEl.addEventListener('click', e => {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderTable(e.target.dataset.filter);
});

// Modal elements
const overlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalBadge = document.getElementById('modal-badge');
const modalMeta = document.getElementById('modal-meta');
const modalDetail = document.getElementById('modal-detail');
const sectionInstruction = document.getElementById('section-instruction');
const instructionItems = document.getElementById('instruction-items');
const instructionPreview = document.getElementById('instruction-preview');
const modalCode = document.getElementById('modal-code');
const sectionMaterials = document.getElementById('section-materials');
const materialItems = document.getElementById('material-items');
const sectionSkill = document.getElementById('section-skill');
const skillItems = document.getElementById('skill-items');
const btnCopy = document.getElementById('btn-copy');
const btnDownloadTxt = document.getElementById('btn-download-txt');
const copySuccess = document.getElementById('copy-success');

let currentInstruction = null;
let currentSkill = null;

// File icon SVG
const fileIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
const linkIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
const githubIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`;

// Open modal
document.getElementById('skills-body').addEventListener('click', async e => {
  const row = e.target.closest('tr');
  if (!row) return;

  const skill = SKILLS.find(s => s.id === row.dataset.id);
  if (!skill || skill.type === 'coming-soon') return;

  currentSkill = skill;
  currentInstruction = null;

  // Header
  modalTitle.textContent = skill.name;
  modalBadge.textContent = skill.categoryLabel;
  modalBadge.className = `modal-badge badge-${skill.category}`;

  // Meta
  let metaHtml = '';
  if (skill.stream) metaHtml += `<div class="meta-item"><span class="meta-label">Эфир</span><span class="meta-value">${skill.stream}</span></div>`;
  metaHtml += `<div class="meta-item"><span class="meta-label">Тип</span><span class="meta-value">${skill.type === 'claude-project' ? 'Claude Project' : 'Claude Code Skill'}</span></div>`;
  modalMeta.innerHTML = metaHtml;

  // Detail
  modalDetail.innerHTML = skill.detail;

  // Instruction section
  if (skill.instruction) {
    sectionInstruction.style.display = '';
    instructionItems.innerHTML = `<div class="item-row clickable" id="toggle-instruction">${fileIcon}<span>${skill.instruction.label}</span></div>`;
    instructionPreview.style.display = 'none';
    modalCode.textContent = 'Загрузка...';

    // Load instruction
    try {
      const res = await fetch(skill.instruction.file);
      currentInstruction = await res.text();
      modalCode.textContent = currentInstruction;
    } catch {
      modalCode.textContent = 'Не удалось загрузить.';
    }

    // Toggle preview on click
    document.getElementById('toggle-instruction').onclick = () => {
      instructionPreview.style.display = instructionPreview.style.display === 'none' ? '' : 'none';
    };
  } else {
    sectionInstruction.style.display = 'none';
  }

  // Materials section
  if (skill.materials && skill.materials.length > 0) {
    sectionMaterials.style.display = '';
    materialItems.innerHTML = skill.materials.map(m => {
      if (m.type === 'file') {
        return `<a class="item-row" href="${m.file}" download>${fileIcon}<span>${m.label}</span></a>`;
      } else if (m.type === 'link') {
        return `<a class="item-row" href="${m.url}" target="_blank" rel="noopener">${linkIcon}<span>${m.label}</span></a>`;
      } else {
        return `<div class="item-row dimmed">${fileIcon}<span>${m.label}</span><span class="item-note">в проекте</span></div>`;
      }
    }).join('');
  } else {
    sectionMaterials.style.display = 'none';
  }

  // Skill download section
  if (skill.skillDownload) {
    sectionSkill.style.display = '';
    skillItems.innerHTML = `<a class="item-row" href="${skill.skillDownload.url}" target="_blank" rel="noopener">${githubIcon}<span>${skill.skillDownload.label}</span><span class="item-note">GitHub &rarr;</span></a>`;
  } else {
    sectionSkill.style.display = 'none';
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
});

// Close modal
function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  currentSkill = null;
  currentInstruction = null;
}

document.getElementById('modal-close').addEventListener('click', closeModal);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Copy
btnCopy.addEventListener('click', async () => {
  if (!currentInstruction) return;
  try {
    await navigator.clipboard.writeText(currentInstruction);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = currentInstruction;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  copySuccess.classList.add('show');
  setTimeout(() => copySuccess.classList.remove('show'), 1500);
});

// Download .txt
btnDownloadTxt.addEventListener('click', () => {
  if (!currentInstruction || !currentSkill) return;
  const blob = new Blob([currentInstruction], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${currentSkill.id}-instruction.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// Dimmed rows style
const style = document.createElement('style');
style.textContent = `.row-dimmed { opacity: 0.5; } .row-dimmed:hover { opacity: 0.7; cursor: default; }`;
document.head.appendChild(style);
