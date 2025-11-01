#!/usr/bin/env python3
"""
ZTF Dictionary Builder
Combines multiple CSV databases into a unified dictionary JSON
"""

import csv
import json
from pathlib import Path
from typing import List, Dict

def process_verbs_csv(csv_path: Path) -> List[Dict]:
    """Process your_first_verbs.csv"""
    entries = []
    audio_dir = csv_path.parent / 'audios'
    
    with open(csv_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Build audio paths
            verb_slug = row['infinitive_verb'].strip().lower().replace(' ', '-')
            audio_us = f'lessons/your-first-verbs/audios/{verb_slug}.us.mp3'
            audio_uk = f'lessons/your-first-verbs/audios/{verb_slug}.uk.mp3'
            
            entry = {
                'word': row['infinitive_verb'].strip(),
                'emoji': row['Emoji'].strip(),
                'type': 'verb',
                'category': 'First Verbs',
                'transcription_us': row['infinitive_phonetic_us'].strip(),
                'transcription_uk': row['infinitive_phonetic_uk'].strip(),
                'literal_translation': row['literal_translation'].strip(),
                'contextual_translation': row['contextual_translation'].strip(),
                'audio_us': audio_us,
                'audio_uk': audio_uk,
                'source': 'your_first_verbs'
            }
            entries.append(entry)
    
    return entries

def process_sounds_csv(csv_path: Path) -> List[Dict]:
    """Process the_sounds_of_english.csv"""
    entries = []
    
    with open(csv_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Build audio paths
            word_slug = row['Word'].strip().lower().replace(' ', '-')
            audio_us = f'lessons/the-sounds-of-english/audios/{word_slug}.us.mp3'
            audio_uk = f'lessons/the-sounds-of-english/audios/{word_slug}.uk.mp3'
            
            entry = {
                'word': row['Word'].strip(),
                'emoji': row['Emoji'].strip(),
                'type': 'word',
                'category': row['Category'].strip(),
                'transcription_us': row['Transcription'].strip(),
                'transcription_uk': row['Transcription_UK'].strip(),
                'symbol': row['Symbol'].strip() if 'Symbol' in row else '',
                'literal_translation': row['Literal_Translation'].strip(),
                'contextual_translation': row['Contextual_Translation'].strip(),
                'audio_us': audio_us,
                'audio_uk': audio_uk,
                'order': int(row['Order']) if row['Order'].strip() else 0,
                'source': 'the_sounds_of_english'
            }
            entries.append(entry)
    
    return entries

def build_dictionary():
    """Main function to build the dictionary"""
    base_path = Path(__file__).parent
    
    # Database sources
    sources = [
        {
            'path': base_path / 'lessons/your-first-verbs/your_first_verbs.csv',
            'processor': process_verbs_csv,
            'name': 'Your First Verbs'
        },
        {
            'path': base_path / 'lessons/the-sounds-of-english/the_sounds_of_english.csv',
            'processor': process_sounds_csv,
            'name': 'The Sounds of English'
        }
    ]
    
    all_entries = []
    stats = {}
    
    # Process each source
    for source in sources:
        if source['path'].exists():
            print(f"📚 Processing: {source['name']}...")
            entries = source['processor'](source['path'])
            all_entries.extend(entries)
            stats[source['name']] = len(entries)
            print(f"   ✅ Added {len(entries)} entries")
        else:
            print(f"   ⚠️  Not found: {source['path']}")
    
    # Sort by word alphabetically
    all_entries.sort(key=lambda x: x['word'].lower())
    
    # Create output
    output = {
        'version': '1.0.0',
        'generated': 'November 2025',
        'total_entries': len(all_entries),
        'sources': list(stats.keys()),
        'stats': stats,
        'entries': all_entries
    }
    
    # Write to JSON
    output_path = base_path / 'dictionary-data.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print(f"\n✅ Dictionary built successfully!")
    print(f"📊 Total entries: {len(all_entries)}")
    print(f"💾 Output: {output_path}")
    print(f"\n📈 Breakdown:")
    for name, count in stats.items():
        print(f"   • {name}: {count} entries")
    
    return output

if __name__ == '__main__':
    build_dictionary()

