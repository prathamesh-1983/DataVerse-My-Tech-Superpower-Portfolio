import { projects } from './data.js';

function renderProjectIllustration() {
  return `
    <svg viewBox="0 0 300 150" aria-hidden="true">
      <defs>
        <linearGradient id="projGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00d9ff" />
          <stop offset="100%" stop-color="#8b35ff" />
        </linearGradient>
      </defs>
      <rect x="18" y="12" width="264" height="118" rx="14" fill="rgba(10,20,36,0.9)" stroke="rgba(100,140,255,0.22)"/>
      <rect x="32" y="90" width="26" height="26" rx="6" fill="#00d9ff" opacity="0.72" />
      <rect x="68" y="70" width="26" height="46" rx="6" fill="#8b35ff" opacity="0.7" />
      <rect x="104" y="52" width="26" height="64" rx="6" fill="#00d9ff" opacity="0.7" />
      <rect x="140" y="64" width="26" height="52" rx="6" fill="#8b35ff" opacity="0.65" />
      <rect x="176" y="42" width="26" height="74" rx="6" fill="#00d9ff" opacity="0.7" />
      <rect x="212" y="58" width="26" height="58" rx="6" fill="#8b35ff" opacity="0.72" />
      <path d="M32 94 L74 72 L114 58 L148 65 L184 46 L224 60 L248 54" fill="none" stroke="url(#projGrad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="74" cy="72" r="4" fill="#00d9ff" />
      <circle cx="184" cy="46" r="4" fill="#8b35ff" />
    </svg>
  `;
}

export function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const expanded = document.getElementById('projectsExpanded');
  const toggleButton = document.querySelector('[data-target="projectsExpanded"]');
  const modal = document.getElementById('projectModal');

  if (!grid || !expanded || !toggleButton || !modal) return;

  const initialProjects = projects.slice(0, 3);

  const renderCard = (project) => `
    <article class="project-card reveal" tabindex="0" data-project-id="${project.id}" aria-label="Open project ${project.title}">
      <div class="project-visual">${renderProjectIllustration()}</div>
      <div class="project-body">
        <span class="project-meta">${project.category}</span>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <div class="project-footer">
          <button type="button" class="link-button" aria-label="Open details for ${project.title}">
            <svg viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14zm-1 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8h-2v8H5V7h8z"/></svg>
          </button>
        </div>
      </div>
    </article>
  `;

  grid.innerHTML = initialProjects.map(renderCard).join('');
  expanded.innerHTML = projects.map(renderCard).join('');

  const projectCards = [...document.querySelectorAll('.project-card')];
  projectCards.forEach((card) => {
    const openDetails = () => {
      const projectId = Number(card.dataset.projectId || 0);
      const project = projects.find((item) => item.id === projectId);
      if (!project) return;

      modal.innerHTML = `
        <div class="project-modal-card" role="document">
          <div class="project-modal-header">
            <h4 id="projectModalTitle">${project.title}</h4>
            <button type="button" class="modal-close" aria-label="Close project details">×</button>
          </div>
          <div class="project-modal-body">
            <div class="meta">${project.category}</div>
            <p>${project.details}</p>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">View project</a>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.classList.add('modal-open');

      const closeBtn = modal.querySelector('.modal-close');
      closeBtn?.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
      });

      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.classList.add('hidden');
          document.body.classList.remove('modal-open');
        }
      }, { once: true });
    };

    card.addEventListener('click', (event) => {
      if (event.target.closest('.link-button')) {
        event.stopPropagation();
        openDetails();
        return;
      }
      openDetails();
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDetails();
      }
    });
  });

  toggleButton.addEventListener('click', () => {
    const isHidden = expanded.classList.toggle('hidden');
    toggleButton.textContent = isHidden ? 'View All Projects →' : 'Show Less';
    toggleButton.setAttribute('aria-expanded', String(!isHidden));
  });
}
