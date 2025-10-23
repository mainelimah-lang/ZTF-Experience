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
    card.className = "card";
    card.href = it.link || "#";
    card.target = "_blank";
    card.style.textDecoration = "none";
    card.style.color = "inherit";

    const img = document.createElement("img");
    img.className = "thumb";
    img.alt = it.title || `Lesson ${idx+1}`;
    if (it.cover) img.src = it.cover;
    card.appendChild(img);

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
