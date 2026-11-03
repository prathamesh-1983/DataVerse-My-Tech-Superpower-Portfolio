import { profile, skills, projects, faq } from './data.js';

const iconStyle = {
  about: 'success',
  error: 'error',
  default: 'default'
};

const commandHelp = [
  'Available commands:',
  'help      Show all available commands',
  'about     Display my professional introduction',
  'skills    Display my configured technical skills',
  'projects  Display my configured project list',
  'journey   Display my educational and learning journey',
  'superpower Show my core professional strength',
  'contact   Display my configured contact information',
  'clear     Clear terminal output',
  'exit      Close the terminal'
];

export function initTerminal() {
  const overlay = document.getElementById('terminalOverlay');
  const output = document.getElementById('terminalOutput');
  const input = document.getElementById('terminalInput');
  const openTrigger = document.getElementById('launchTerminal');
  const closeButton = document.querySelector('.terminal-close');
  const minimizeButton = document.querySelector('.terminal-minimize');

  if (!overlay || !output || !input) return;

  const appendLine = (text, type = 'default') => {
    const line = document.createElement('div');
    line.className = `line ${type}`;
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  };

  const renderCursor = () => {
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    output.appendChild(cursor);
  };

  const wipeCursor = () => {
    const cursor = output.querySelector('.cursor');
    if (cursor) cursor.remove();
  };

  const appendPrompt = (value) => {
    wipeCursor();
    appendLine(`guest@dataverse:~$ ${value}`, 'command');
    renderCursor();
  };

  const initializeWelcome = () => {
    if (output.dataset.ready === 'true') return;
    appendLine('Welcome to the Superpower Command Center.', 'success');
    appendLine('Type "help" to see all available commands.', 'default');
    appendLine('Try: help, about, skills, projects, contact', 'default');
    output.dataset.ready = 'true';
    renderCursor();
  };

  const closeTerminal = () => {
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    input.value = '';
  };

  const minimizeTerminal = () => {
    const windowNode = overlay.querySelector('.terminal-window');
    if (!windowNode) return;

    const isMinimized = windowNode.classList.toggle('terminal-minimized');
    if (isMinimized) {
      output.style.display = 'none';
      input.parentElement.style.display = 'none';
      windowNode.style.height = '70px';
      minimizeButton.textContent = '▢';
    } else {
      output.style.display = 'block';
      input.parentElement.style.display = 'flex';
      windowNode.style.height = 'min(630px, 78vh)';
      minimizeButton.textContent = '_';
    }
  };

  const openTerminal = () => {
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    initializeWelcome();
    setTimeout(() => input.focus(), 50);
  };

  const executeCommand = (rawValue) => {
    const value = rawValue.trim();
    if (!value) return;

    appendPrompt(value);
    const command = value.toLowerCase();

    if (command === 'help') {
      commandHelp.forEach((item) => appendLine(item, 'default'));
      return;
    }

    if (command === 'about') {
      appendLine(`Name: ${profile.firstName} ${profile.lastName}`, 'success');
      appendLine(`Title: ${profile.title}`, 'default');
      appendLine(`Education: ${profile.education}`, 'default');
      appendLine(profile.about, 'default');
      return;
    }

    if (command === 'skills') {
      appendLine('Technical skills:', 'success');
      skills.forEach((skill) => appendLine(`- ${skill.name}`, 'default'));
      return;
    }

    if (command === 'projects') {
      appendLine('Project list:', 'success');
      projects.forEach((project) => appendLine(`- ${project.title} (${project.category})`, 'default'));
      return;
    }

    if (command === 'journey') {
      appendLine(`Education: ${profile.education}`, 'success');
      appendLine(`Journey: ${profile.learningJourney}`, 'default');
      return;
    }

    if (command === 'superpower') {
      appendLine('My superpower is transforming raw data into meaningful insights.', 'success');
      return;
    }

    if (command === 'contact') {
      appendLine(`Email: ${profile.contact.email}`, 'success');
      appendLine(`LinkedIn: ${profile.contact.linkedin}`, 'default');
      appendLine(`GitHub: ${profile.contact.github}`, 'default');
      appendLine(`Phone: ${profile.contact.phone}`, 'default');
      return;
    }

    if (command === 'clear') {
      output.innerHTML = '';
      initializeWelcome();
      return;
    }

    if (command === 'exit') {
      appendLine('Closing terminal...', 'success');
      setTimeout(closeTerminal, 150);
      return;
    }

    appendLine(`Command not found: "${value}". Type "help" for available commands.`, 'error');
  };

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      executeCommand(input.value);
      input.value = '';
      input.focus();
    }
  });

  if (openTrigger) {
    openTrigger.addEventListener('click', openTerminal);
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeTerminal);
  }

  if (minimizeButton) {
    minimizeButton.addEventListener('click', minimizeTerminal);
  }

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeTerminal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !overlay.classList.contains('hidden')) {
      closeTerminal();
    }
  });

  initializeWelcome();
}

export function openTerminalModal() {
  const overlay = document.getElementById('terminalOverlay');
  if (overlay) {
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    setTimeout(() => {
      const input = document.getElementById('terminalInput');
      if (input) input.focus();
    }, 50);
  }
}
