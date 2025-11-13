/**
 * ZTF Universe Hub - Main Navigation
 */

const hubSections = [
  {
    id: 'experience',
    title: 'ZTF Experience English Course',
    description: '📚 Complete English course with grammar lessons, audio exercises, and interactive content',
    link: 'course.html',
    available: true,
    emoji: '🎓',
    order: 1
  },
  {
    id: 'dictionary',
    title: 'ZTF Dictionary',
    description: '📚 Comprehensive English dictionary with pronunciations, examples, and translations',
    link: 'dictionary.html',
    available: true,
    emoji: '📚',
    order: 2
  },
  {
    id: 'homework',
    title: 'ZTF Homework',
    description: '📝 Practice exercises and assignments to reinforce your learning',
    link: 'homework.html',
    available: true,
    emoji: '📝',
    order: 3
  },
  {
    id: 'podcast',
    title: 'ZTF Podcast',
    description: '🎙️ Listen and learn with engaging English podcasts for all levels',
    link: 'podcast.html',
    available: false,
    emoji: '🎙️',
    order: 4
  }
];

function initHub() {
  const grid = document.getElementById('hub-grid');
  
  // Sort by order
  const sorted = [...hubSections].sort((a, b) => a.order - b.order);
  
  sorted.forEach(section => {
    const card = createHubCard(section);
    grid.appendChild(card);
  });
  
  // Initialize theme toggle
  initThemeToggle();
}

function createHubCard(section) {
  const card = document.createElement('a');
  card.className = `card ${section.available ? 'available' : 'unavailable'}`;
  
  if (section.available) {
    card.href = section.link;
  } else {
    card.style.cursor = 'not-allowed';
    card.onclick = (e) => {
      e.preventDefault();
      return false;
    };
  }
  
  card.innerHTML = `
    <div class="card-emoji">${section.emoji}</div>
    <div class="card-content">
      <h2 class="card-title">${section.title}</h2>
      <p class="card-description">${section.description}</p>
      ${!section.available ? '<span class="badge unavailable-badge">Coming Soon</span>' : ''}
    </div>
  `;
  
  return card;
}

function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('.theme-icon');
  const root = document.documentElement;
  
  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);
  icon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
  
  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    
    root.setAttribute('data-theme', next);
    icon.textContent = next === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('theme', next);
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initHub);

