/**
 * ZTF Dictionary - Interactive English Learning Dictionary
 */

let dictionaryData = null;
let searchQuery = '';

// Initialize
async function initDictionary() {
  try {
    // Load dictionary data
    const response = await fetch('dictionary-data.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    dictionaryData = await response.json();
    console.log('Dictionary loaded:', dictionaryData.total_entries, 'entries');
    
    // Setup search
    setupSearch();
    
    // Show initial state
    showInitialState();
    
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

function showInitialState() {
  const grid = document.getElementById('dictionary-grid');
  const statsEl = document.getElementById('stats');
  
  statsEl.textContent = ''; // Remove the stats message
  
  grid.innerHTML = `
    <div class="no-results">
      <div class="no-results-emoji">🔍</div>
      <h3>Start typing to search</h3>
      <p>Search across ${dictionaryData.total_entries} words, verbs and translations</p>
    </div>
  `;
}

function setupSearch() {
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    
    if (searchQuery.length === 0) {
      showInitialState();
    } else {
      renderDictionary();
    }
  });
}

function filterEntries() {
  if (!searchQuery) return [];
  
  return dictionaryData.entries.filter(entry => {
    const word = entry.word.toLowerCase();
    
    // Exact match only on the word itself
    return word === searchQuery;
  });
}

function renderDictionary() {
  const grid = document.getElementById('dictionary-grid');
  const statsEl = document.getElementById('stats');
  
  const filtered = filterEntries();
  
  // Update stats
  statsEl.textContent = `${filtered.length} result${filtered.length !== 1 ? 's' : ''} found`;
  
  // Clear grid
  grid.innerHTML = '';
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-emoji">😕</div>
        <h3>No results found</h3>
        <p>Try a different search term</p>
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
  
  // Audio controls
  const hasAudio = entry.audio_us || entry.audio_uk;
  let audioHTML = '';
  
  if (hasAudio) {
    audioHTML = `
      <div class="audio-controls">
        ${entry.audio_us ? `<button class="audio-btn" onclick="playAudio('${entry.audio_us}')">🇺🇸 US</button>` : ''}
        ${entry.audio_uk ? `<button class="audio-btn" onclick="playAudio('${entry.audio_uk}')">🇬🇧 UK</button>` : ''}
      </div>
    `;
  }
  
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
    
    ${audioHTML}
    
    ${entry.category ? `
      <div class="dict-category">
        📚 ${entry.category}
      </div>
    ` : ''}
  `;
  
  return card;
}

// Audio player
let currentAudio = null;

function playAudio(audioPath) {
  // Stop current audio if playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  
  // Create and play new audio
  currentAudio = new Audio(audioPath);
  currentAudio.play().catch(error => {
    console.warn('Audio playback failed:', error);
    // Silently fail if audio doesn't exist
  });
}

// Make playAudio globally accessible
window.playAudio = playAudio;

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
