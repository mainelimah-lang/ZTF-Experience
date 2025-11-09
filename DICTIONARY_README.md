# 📖 ZTF Dictionary - Documentation

> **Version:** 1.0.0  
> **Entries:** 417 words and verbs  
> **Live URL:** https://mainelimah-lang.github.io/ZTF-Experience/dictionary.html

---

## 🎯 Overview

The ZTF Dictionary is an interactive English learning dictionary that combines multiple CSV databases into a unified, searchable interface.

### Current Sources:
- ✅ **Your First Verbs** (150 entries) - `lessons/your-first-verbs/your_first_verbs.csv`
- ✅ **The Sounds of English** (267 entries) - `lessons/the-sounds-of-english/the_sounds_of_english.csv`

**Total:** 417 entries

---

## 🏗️ Architecture

```
Dictionary System
├── build-dictionary.py          # Python script to process CSVs
├── dictionary-data.json         # Generated unified dictionary (5634 lines)
├── dictionary.html              # Interface page
├── dictionary.js                # Search & filter logic
└── [CSV sources]                # Original databases
    ├── your_first_verbs.csv
    └── the_sounds_of_english.csv
```

---

## 📊 Data Structure

### CSV Format Requirements

Each CSV source should have these fields (exact column names may vary):

#### For Verbs (your_first_verbs.csv):
```csv
Emoji,infinitive_verb,infinitive_phonetic_us,infinitive_phonetic_uk,literal_translation,contextual_translation
🔓,To access,/tə ˈæk.ses/,/tə ˈæk.ses/,"acessar, entrar",Description here...
```

#### For Words (the_sounds_of_english.csv):
```csv
Order,Emoji,Word,Transcription,Transcription_UK,Symbol,Category,Literal_Translation,Contextual_Translation
265,🌉,Bridge,/brɪdʒ/,/brɪdʒ/,/dʒ/,Affricates,"ponte, ligação",Description here...
```

### Unified JSON Output (dictionary-data.json):

```json
{
  "version": "1.0.0",
  "generated": "November 2025",
  "total_entries": 417,
  "sources": ["Your First Verbs", "The Sounds of English"],
  "entries": [
    {
      "word": "To access",
      "emoji": "🔓",
      "type": "verb",
      "category": "First Verbs",
      "transcription_us": "/tə ˈæk.ses/",
      "transcription_uk": "/tə ˈæk.ses/",
      "literal_translation": "acessar, entrar, obter",
      "contextual_translation": "Chegar ou usar algo...",
      "source": "your_first_verbs"
    }
  ]
}
```

---

## 🔄 Adding New Databases

### Step 1: Prepare Your CSV

Ensure your CSV has:
- ✅ UTF-8 encoding (or UTF-8 with BOM)
- ✅ Proper column headers
- ✅ Emoji, Word, Phonetics, Translations

### Step 2: Update `build-dictionary.py`

Add a new processor function:

```python
def process_new_database_csv(csv_path: Path) -> List[Dict]:
    """Process your_new_database.csv"""
    entries = []
    
    with open(csv_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            entry = {
                'word': row['Word'].strip(),
                'emoji': row['Emoji'].strip(),
                'type': 'word',  # or 'verb', 'phrase', etc.
                'category': row['Category'].strip(),
                'transcription_us': row['Transcription_US'].strip(),
                'transcription_uk': row['Transcription_UK'].strip(),
                'literal_translation': row['Literal_PT'].strip(),
                'contextual_translation': row['Context_PT'].strip(),
                'source': 'your_new_database'
            }
            entries.append(entry)
    
    return entries
```

Add to sources list:

```python
sources = [
    # ... existing sources ...
    {
        'path': base_path / 'lessons/new-section/new_database.csv',
        'processor': process_new_database_csv,
        'name': 'New Database Name'
    }
]
```

### Step 3: Rebuild Dictionary

```bash
cd /home/maine/ZTF-Experience
python3 build-dictionary.py
```

Output:
```
📚 Processing: Your First Verbs...
   ✅ Added 150 entries
📚 Processing: The Sounds of English...
   ✅ Added 267 entries
📚 Processing: New Database Name...
   ✅ Added 120 entries

✅ Dictionary built successfully!
📊 Total entries: 537
```

### Step 4: Test & Deploy

```bash
# Test locally (open dictionary.html in browser)

# Commit changes
git add dictionary-data.json build-dictionary.py
git commit -m "feat: Add [New Database] to dictionary (+XXX entries)"
git push origin main
```

---

## 🎨 Features

### 🔍 Search
- Real-time search across:
  - Word names
  - Literal translations
  - Contextual translations
  - Categories

### 🎯 Filters
- **All** - Show everything
- **Verbs** - Only verbs
- **Words** - Only words
- **Categories** - Affricates, Diphthongs, Fricatives, etc.

### 📱 Interface
- Responsive grid layout
- Card-based design with emojis
- Dark/Light theme support
- Phonetic transcriptions (US & UK)
- Portuguese translations

---

## 🛠️ Maintenance

### Updating Existing Entries

1. Edit the source CSV files
2. Run `python3 build-dictionary.py`
3. Commit and push

### Adding New Categories

The dictionary automatically detects categories from your CSV data. No code changes needed!

### Performance

- JSON file size: ~300KB (417 entries)
- Load time: < 100ms
- Search: Instant (client-side)
- Filters: Instant (no server required)

---

## 📈 Statistics

| Metric | Value |
|--------|-------|
| **Total Entries** | 417 |
| **Verbs** | 150 |
| **Words** | 267 |
| **Categories** | 8+ |
| **JSON Size** | ~300KB |
| **CSV Sources** | 2 |

---

## 🎯 Future Enhancements

### Planned:
- [ ] Audio pronunciations for each word
- [ ] Example sentences
- [ ] Conjugation tables for verbs
- [ ] Favorite/bookmark system
- [ ] Export to Anki/Flashcards
- [ ] Offline PWA support

### Potential Data Sources:
- [ ] Your First Phrases
- [ ] Advanced Verbs
- [ ] Idioms & Expressions
- [ ] Business English
- [ ] Academic Vocabulary

---

## 🐛 Troubleshooting

### CSV not loading?
- Check encoding (must be UTF-8 or UTF-8-sig)
- Verify column names match processor function
- Look for special characters in data

### Empty dictionary?
- Run `python3 build-dictionary.py` to regenerate
- Check console for errors
- Verify `dictionary-data.json` exists

### Search not working?
- Clear browser cache
- Check JavaScript console for errors
- Verify dictionary.js is loaded

---

## 📝 Example: Adding "Your First Phrases"

```python
# In build-dictionary.py

def process_phrases_csv(csv_path: Path) -> List[Dict]:
    entries = []
    with open(csv_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            entry = {
                'word': row['Phrase'].strip(),
                'emoji': row['Emoji'].strip(),
                'type': 'phrase',
                'category': 'First Phrases',
                'transcription_us': row['Phonetic_US'].strip(),
                'transcription_uk': row['Phonetic_UK'].strip(),
                'literal_translation': row['PT_Literal'].strip(),
                'contextual_translation': row['PT_Context'].strip(),
                'source': 'your_first_phrases'
            }
            entries.append(entry)
    return entries

# Add to sources:
{
    'path': base_path / 'lessons/your-first-phrases/phrases.csv',
    'processor': process_phrases_csv,
    'name': 'Your First Phrases'
}
```

---

**ZTF Dictionary** - Building a comprehensive English learning resource. 📚✨







