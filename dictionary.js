/**
 * ZTF Dictionary - Interactive English Learning Dictionary
 */

let dictionaryData = null;
let currentFilter = 'all';
let searchQuery = '';

// Initialize
async function initDictionary() {
  try {
    // Load dictionary data
    const response = await fetch('dictionary-data.json');
    dictionaryData = await response.json();
    
    // Setup filters
    setupFilters();
    
    // Setup search
    setupSearch();
    
    // Initial render
    renderDictionary();
    
    // Initialize theme toggle
    initThemeToggle();
    
  } catch (error) {
    console.error('Error loading dictionary:', error);
    document.getElementById('dictionary-grid').innerHTML = `
      <div class="no-results">
        <div class="no-results-emoji">⚠️</div>
        <h3>Error loading dictionary</h3>
        <p>Please try refreshing the page.</p>
      </div>
    `;
  }
}

function setupFilters() {
  const filtersContainer = document.getElementById('filters');
  
  // Get unique categories
  const categories = new Set();
  categories.add('all');
  categories.add('verbs');
  categories.add('words');
  
  dictionaryData.entries.forEach(entry => {
    if (entry.category) {
      categories.add(entry.category);
    }
  });
  
  // Create filter buttons
  const filterButtons = [
    { id: 'all', label: '🌐 All', count: dictionaryData.total_entries },
    { id: 'verbs', label: '🎯 Verbs', count: dictionaryData.entries.filter(e => e.type === 'verb').length },
    { id: 'words', label: '📝 Words', count: dictionaryData.entries.filter(e => e.type === 'word').length }
  ];
  
  // Add category filters
  const categoryMap = {
    'First Verbs': '🎓',
    'Affricates': '🗣️',
    'Diphthongs': '🎵',
    'Fricatives': '💨',
    'Plosives': '💥',
    'Nasals': '👃',
    'Approximants': '🌊',
    'Vowels': '🅰️'
  };
  
  filterButtons.forEach(filter => {
    const button = document.createElement('button');
    button.className = `filter-btn ${filter.id === 'all' ? 'active' : ''}`;
    button.textContent = `${filter.label} (${filter.count})`;
    button.onclick = () => setFilter(filter.id);
    filtersContainer.appendChild(button);
  });
}

function setupSearch() {
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderDictionary();
  });
}

function setFilter(filterId) {
  currentFilter = filterId;
  
  // Update button states
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Re-render
  renderDictionary();
}

function filterEntries() {
  let filtered = dictionaryData.entries;
  
  // Apply type/category filter
  if (currentFilter !== 'all') {
    if (currentFilter === 'verbs') {
      filtered = filtered.filter(e => e.type === 'verb');
    } else if (currentFilter === 'words') {
      filtered = filtered.filter(e => e.type === 'word');
    } else {
      filtered = filtered.filter(e => e.category === currentFilter);
    }
  }
  
  // Apply search query
  if (searchQuery) {
    filtered = filtered.filter(entry => {
      const word = entry.word.toLowerCase();
      const literal = entry.literal_translation.toLowerCase();
      const contextual = entry.contextual_translation.toLowerCase();
      const category = (entry.category || '').toLowerCase();
      
      return word.includes(searchQuery) ||
             literal.includes(searchQuery) ||
             contextual.includes(searchQuery) ||
             category.includes(searchQuery);
    });
  }
  
  return filtered;
}

function renderDictionary() {
  const grid = document.getElementById('dictionary-grid');
  const statsEl = document.getElementById('stats');
  
  const filtered = filterEntries();
  
  // Update stats
  statsEl.textContent = `Showing ${filtered.length} of ${dictionaryData.total_entries} entries`;
  
  // Clear grid
  grid.innerHTML = '';
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-emoji">🔍</div>
        <h3>No results found</h3>
        <p>Try a different search term or filter.</p>
      </div>
    `;
    return;
  }
  
  // Render cards
  filtered.forEach(entry => {
    const card = createDictionaryCard(entry);
    grid.appendChild(card);
  });
}

function createDictionaryCard(entry) {
  const card = document.createElement('div');
  card.className = 'dict-card';
  
  // Phonetic display - prefer UK, fallback to US
  const phonetic = entry.transcription_uk || entry.transcription_us || '';
  
  card.innerHTML = `
    <div class="dict-header">
      <div class="dict-emoji">${entry.emoji}</div>
      <div class="dict-word">${entry.word}</div>
      <span class="dict-type">${entry.type}</span>
    </div>
    
    ${phonetic ? `<div class="dict-phonetic">${phonetic}</div>` : ''}
    
    <div class="dict-translation">
      <strong>PT:</strong> ${entry.literal_translation}
    </div>
    
    <div class="dict-context">
      ${entry.contextual_translation}
    </div>
    
    ${entry.category ? `
      <div class="dict-category">
        📚 ${entry.category}
      </div>
    ` : ''}
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
document.addEventListener('DOMContentLoaded', initDictionary);

