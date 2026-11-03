import { navItems } from './data.js';

const icons = {
  home: '<svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>',
  user: '<svg viewBox="0 0 24 24"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z"/></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24"><path d="M10 4h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4V6a2 2 0 0 1 2-2zm2 3h2V6h-2z"/></svg>',
  trophy: '<svg viewBox="0 0 24 24"><path d="M7 4h10v2h2a2 2 0 0 1 2 2v2a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V8a2 2 0 0 1 2-2h2zm0 2v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V6zm-1 12h12v2H6zm3 3h6v2H9z"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5zm2.2-.5 6.8 5.3 6.8-5.3H5.2z"/></svg>'
};

export function initNavigation() {
  const nav = document.getElementById('sidebarNav');
  if (!nav) return;

  nav.innerHTML = navItems.map((item) => `
    <button class="nav-link" type="button" data-section="${item.id}" aria-label="Go to ${item.label}">
      <span class="nav-icon">${icons[item.icon] || icons.home}</span>
      <span>${item.label}</span>
    </button>
  `).join('');

  const links = [...nav.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('section[id]')];

  links.forEach((link) => {
    link.addEventListener('click', () => {
      const targetId = link.dataset.section;
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      const sidebar = document.querySelector('.sidebar');
      if (sidebar && sidebar.classList.contains('is-open')) {
        sidebar.classList.remove('is-open');
      }
      const toggle = document.querySelector('.mobile-menu-toggle');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const setActiveLink = (id) => {
    links.forEach((link) => {
      const active = link.dataset.section === id;
      link.classList.toggle('active', active);
      if (active) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver((entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visibleEntry) {
      setActiveLink(visibleEntry.target.id);
    }
  }, {
    threshold: [0.22, 0.5, 0.8],
    rootMargin: '-8% 0px -25% 0px'
  });

  sections.forEach((section) => observer.observe(section));

  const toggle = document.querySelector('.mobile-menu-toggle');
  const sidebar = document.querySelector('.sidebar');

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      const expanded = sidebar.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  setActiveLink('home');
}
