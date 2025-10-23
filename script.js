// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const savedTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', savedTheme);
themeIcon.textContent = savedTheme === 'light' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeIcon.textContent = newTheme === 'light' ? '🌙' : '☀️';
});

// Load lessons
async function boot(){
  const grid = document.getElementById("grid");
  const res = await fetch("data.json");
  const items = await res.json();

  const frag = document.createDocumentFragment();

  items.forEach((it, idx) => {
    const card = document.createElement("a");
    card.className = it.available === false ? "card unavailable" : "card";
    card.href = it.available === false ? "#" : (it.link || "#");
    card.style.textDecoration = "none";
    card.style.color = "inherit";

    const thumbContainer = document.createElement("div");
    thumbContainer.className = "thumb-container";
    
    // Add badge for unavailable lessons
    if (it.available === false) {
      const badge = document.createElement("div");
      badge.className = "badge";
      badge.textContent = "Em breve";
      thumbContainer.appendChild(badge);
    }
    
    const img = document.createElement("img");
    img.className = "thumb";
    img.alt = it.title || `Lesson ${idx+1}`;
    if (it.cover) img.src = it.cover;
    
    thumbContainer.appendChild(img);
    card.appendChild(thumbContainer);

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = it.title || `Lesson ${idx+1}`;
    body.appendChild(title);

    card.appendChild(body);
    frag.appendChild(card);
  });

  grid.innerHTML = "";
  grid.appendChild(frag);
}
boot();
