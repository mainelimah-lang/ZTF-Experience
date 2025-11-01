# 🌐 ZTF Universe Hub - Documentation

> **Updated:** November 1, 2025  
> **Location:** `/home/maine/ZTF-Experience/`  
> **Live URL:** https://mainelimah-lang.github.io/ZTF-Experience/

---

## 📁 Structure

```
/home/maine/ZTF-Experience/
├── index.html              # ⭐ NEW: Main Hub (landing page)
├── hub.js                  # ⭐ NEW: Hub navigation logic
├── course.html             # ✏️ RENAMED: (was index.html) English Course
├── dictionary.html         # ⭐ NEW: Dictionary (placeholder)
├── podcast.html            # ⭐ NEW: Podcast (placeholder)
├── script.js               # Course page logic
├── style.css               # ✏️ UPDATED: Added hub styles
├── theme.css               # Theme system
├── data.json               # Course lessons data
└── lessons/                # 25+ English lessons
```

---

## 🎯 Navigation Flow

```
┌─────────────────────────────────────────┐
│        index.html (Hub)                 │
│  ┌─────────────────────────────────┐   │
│  │  🎓 ZTF Experience English      │   │ ──> course.html
│  │  📖 ZTF Dictionary              │   │ ──> dictionary.html (Coming Soon)
│  │  🎙️ ZTF Podcast                │   │ ──> podcast.html (Coming Soon)
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## 🎨 Features

### Hub Page (`index.html`)
- ✅ **Grid Layout**: 3 cards with sections
- ✅ **Available/Unavailable States**: Visual distinction
- ✅ **"Coming Soon" Badge**: For unreleased sections
- ✅ **Dark/Light Theme**: Persisted in localStorage
- ✅ **Responsive Design**: Mobile-friendly
- ✅ **Hover Effects**: Smooth transitions

### Section Pages
- ✅ **Back to Hub Link**: Easy navigation
- ✅ **Consistent Design**: Same header/footer/theme
- ✅ **Theme Sync**: Theme persists across pages

---

## 📊 Hub Sections Configuration

Edit `hub.js` to add/modify sections:

```javascript
const hubSections = [
  {
    id: 'experience',
    title: 'ZTF Experience English Course',
    description: '📚 Complete English course...',
    link: 'course.html',
    available: true,        // ✅ Active
    emoji: '🎓',
    order: 1
  },
  {
    id: 'dictionary',
    title: 'ZTF Dictionary',
    description: '📖 Comprehensive English dictionary...',
    link: 'dictionary.html',
    available: false,       // 🚧 Coming Soon
    emoji: '📖',
    order: 2
  },
  // Add more sections...
];
```

---

## 🔧 Customization

### Adding New Sections

1. **Create the HTML page** (e.g., `grammar.html`)
2. **Add entry to `hub.js`**:
```javascript
{
  id: 'grammar',
  title: 'ZTF Grammar Guide',
  description: '📝 Master English grammar rules',
  link: 'grammar.html',
  available: true,
  emoji: '📝',
  order: 4
}
```
3. **Set `available: true`** when ready to launch

### Styling

- **Hub-specific styles**: Located in `style.css` under `/* Hub-specific styles */`
- **Global theme**: Defined in `theme.css` and `style.css` CSS variables
- **Colors**:
  - `--bg`: Background color
  - `--paper`: Text color
  - `--card`: Card background
  - `--muted`: Muted text

---

## 🚀 Deployment

This site is published via GitHub Pages:

1. **Make changes** in `/home/maine/ZTF-Experience/`
2. **Commit and push** to `mainelimah-lang/ZTF-Experience` repository
3. **GitHub Pages** automatically deploys changes
4. **Live at:** https://mainelimah-lang.github.io/ZTF-Experience/

### Sync to Monorepo (Optional)

To sync changes to the monorepo:

```bash
cd /home/maine/ztf-universe/apps/ztf-learning
./scripts/sync-experience.sh
```

---

## 🎯 Next Steps

### To Activate Dictionary/Podcast:

1. Build the actual content pages
2. In `hub.js`, change `available: false` to `available: true`
3. Commit and push changes

### Adding More Sections:

- Grammar Guide
- Vocabulary Builder
- Speaking Practice
- Writing Workshop
- Cultural Insights

---

## 📝 File Changes Summary

| File | Status | Description |
|------|--------|-------------|
| `index.html` | 🆕 NEW | Hub landing page |
| `hub.js` | 🆕 NEW | Hub navigation logic |
| `course.html` | ✏️ RENAMED | English course (was index.html) |
| `dictionary.html` | 🆕 NEW | Dictionary placeholder |
| `podcast.html` | 🆕 NEW | Podcast placeholder |
| `style.css` | ✏️ UPDATED | Added hub & back-link styles |

---

**ZTF Universe** - Expanding the learning ecosystem. 🌟

