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
  card.className = 'dict-entry';
  
  // Build pronunciations side by side
  let pronunciationHTML = '<div class="dict-phonetics-container">';
  
  // US pronunciation
  if (entry.transcription_us) {
    pronunciationHTML += `
      <div class="dict-phonetic-item">
        <span style="font-size: 18px;">🇺🇸</span>
        ${entry.audio_us ? `<button class="audio-btn" onclick="playAudio('${entry.audio_us}')" title="Play US pronunciation">🔈</button>` : ''}
        <span class="dict-phonetic">${entry.transcription_us}</span>
      </div>
    `;
  }
  
  // UK pronunciation
  if (entry.transcription_uk) {
    pronunciationHTML += `
      <div class="dict-phonetic-item">
        <span style="font-size: 18px;">🇬🇧</span>
        ${entry.audio_uk ? `<button class="audio-btn" onclick="playAudio('${entry.audio_uk}')" title="Play UK pronunciation">🔈</button>` : ''}
        <span class="dict-phonetic">${entry.transcription_uk}</span>
      </div>
    `;
  }
  
  pronunciationHTML += '</div>';
  
  card.innerHTML = `
    <div class="dict-word-line">
      <div class="dict-emoji">${entry.emoji}</div>
      <h2 class="dict-word">${entry.word}</h2>
    </div>
    
    ${pronunciationHTML}
    
    <div class="dict-section">
      <div class="dict-section-title">🇧🇷</div>
      <div class="dict-translation">${entry.literal_translation}</div>
    </div>
    
    <div class="dict-section">
      <div class="dict-definition">${entry.contextual_translation}</div>
    </div>
    
    ${entry.category ? `
      <div class="dict-category">
        Category: ${entry.category}
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
