import { skills } from './data.js';

const skillIcons = {
  code: '<svg viewBox="0 0 24 24"><path d="m8 18-6-6 6-6 1.5 1.5L5 12l4.5 4.5zm8 0 6-6-6-6-1.5 1.5L19 12l-4.5 4.5z"/></svg>',
  sheet: '<svg viewBox="0 0 24 24"><path d="M5 3h10l4 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm9 1v4h4M7 11h10v2H7zm0 4h10v2H7z"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 20h16v2H4zm1-2h2V9H5zm5 0h2V5h-2zm5 0h2V11h-2z"/></svg>',
  database: '<svg viewBox="0 0 24 24"><path d="M12 2C7.03 2 3 3.79 3 6v12c0 2.21 4.03 4 9 4s9-1.79 9-4V6c0-2.21-4.03-4-9-4zm0 2c4.42 0 7 1.34 7 2s-2.58 2-7 2-7-1.34-7-2 2.58-2 7-2zm-7 6.5c1.8 1.46 4.58 2.5 7 2.5s5.2-1.04 7-2.5V16c-1.8 1.46-4.58 2.5-7 2.5s-5.2-1.04-7-2.5z"/></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="m12 1 2.5 7.5L22 11l-7.5 2.5L12 21l-2.5-7.5L2 11l7.5-2.5z"/></svg>',
  brain: '<svg viewBox="0 0 24 24"><path d="M8 4a4 4 0 0 0-4 4v1a4 4 0 0 0 2 3.46V13a3 3 0 0 0 3 3h1v2h2v-2h1a3 3 0 0 0 3-3v-1.54A4 4 0 0 0 20 9V8a4 4 0 0 0-4-4h-2v2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1v-2H10v2H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2V4zm-1 8v1h10v-1z"/></svg>',
  trend: '<svg viewBox="0 0 24 24"><path d="M4 16l5-5 4 4 7-9 2 2-9 12-4-4-5 5z"/></svg>',
  git: '<svg viewBox="0 0 24 24"><path d="M6.5 7A2.5 2.5 0 1 1 6.5 2a2.5 2.5 0 0 1 0 5zm5 6.5A2.5 2.5 0 1 1 11.5 11a2.5 2.5 0 0 1 0 5zm-9 6A2.5 2.5 0 1 1 2.5 17a2.5 2.5 0 0 1 0 5zm14 0A2.5 2.5 0 1 1 16.5 17a2.5 2.5 0 0 1 0 5zm-1-13.5h2.5A2.5 2.5 0 0 1 20 9.5v2.5h-2V9.5a.5.5 0 0 0-.5-.5H7.5a.5.5 0 0 0-.5.5V12H5V9.5A2.5 2.5 0 0 1 7.5 7h2.5V5H7.5V3h2.5v2h3V3h2.5v2z"/></svg>',
  stats: '<svg viewBox="0 0 24 24"><path d="M3 20h18v2H3zm2-2h2V9H5zm5 0h2V5h-2zm5 0h2V11h-2zm5 0h2V7h-2z"/></svg>',
  table: '<svg viewBox="0 0 24 24"><path d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5zm2 2V7h14v-.5H5zm0 4V11h5v-.5H5zm7 0V11h7v-.5h-7zm-7 4V15h5v-.5H5zm7 0V15h7v-.5h-7z"/></svg>',
  math: '<svg viewBox="0 0 24 24"><path d="M7 4h2v3h3v2H9v3H7V9H4V7h3zm6 0h7v2h-7zm0 6h7v2h-7zm-2 6 2-2 2 2-2 2zm7-5h2v8h-2z"/></svg>',
  filter: '<svg viewBox="0 0 24 24"><path d="M4 5h16v2H4zm3 7h10v2H7zm3 7h4v2h-4z"/></svg>',
  dashboard: '<svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zm9 0h7v4h-7zm-9 9h7v7H4zm9 0h7v7h-7z"/></svg>',
  html: '<svg viewBox="0 0 24 24"><path d="M4 3h16l-1.5 16L12 21l-6.5-2L4 3zm3.3 4.2 1.1 9.7 4.6 1.5 4.6-1.5 1.1-9.7H7.3zm5.7 2.3v5.5h2.1l-.3 2.1-1.8.6-1.8-.6-.2-2.1h1.5V9.5h-4.4l.4-2.3h7.1l-.3 2.3z"/></svg>',
  css: '<svg viewBox="0 0 24 24"><path d="M4 3h16l-1.5 16.2L12 21l-6.5-1.8L4 3zm3.2 5.2h9.6l-.3 2.2-4.8 2.1-4.7-2.1.2-2.2zm9.1 5.1-1.3 5.3-4.9 1.6-4.8-1.6-.7-3.1h2.2l.3 1.5 2.9 1 2.9-1 .6-2.8H7.5l-.4-2.1h9.6z"/></svg>',
  js: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3zm4 4.5h10v1.5H7zm0 5h10v1.5H7zm0 5h7v1.5H7z"/></svg>'
};

function getSkillIcon(iconName) {
  return skillIcons[iconName] || skillIcons.code;
}

export function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  const expanded = document.getElementById('skillsExpanded');
  const toggleButton = document.querySelector('[data-target="skillsExpanded"]');

  if (!grid || !expanded || !toggleButton) return;

  const initialSkills = skills.slice(0, 7);
  grid.innerHTML = initialSkills
    .map(
      (skill) => `
        <article class="skill-card reveal">
          <div class="skill-top">
            <div class="skill-icon">${getSkillIcon(skill.icon)}</div>
            <h4>${skill.name}</h4>
          </div>
          <p>${skill.description}</p>
        </article>
      `
    )
    .join('');

  expanded.innerHTML = skills
    .map(
      (skill) => `
        <article class="skill-card reveal">
          <div class="skill-top">
            <div class="skill-icon">${getSkillIcon(skill.icon)}</div>
            <h4>${skill.name}</h4>
          </div>
          <p>${skill.description}</p>
        </article>
      `
    )
    .join('');

  toggleButton.addEventListener('click', () => {
    const isHidden = expanded.classList.toggle('hidden');
    toggleButton.textContent = isHidden ? 'View All Skills →' : 'Show Less';
    toggleButton.setAttribute('aria-expanded', String(!isHidden));
  });
}
