#!/usr/bin/env python3
import csv
import time
import requests
from bs4 import BeautifulSoup

CAMBRIDGE_URL = "https://dictionary.cambridge.org/dictionary/english/"
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def fetch_uk_phonetic(word):
    """Fetch UK phonetic transcription from Cambridge Dictionary"""
    try:
        url = f"{CAMBRIDGE_URL}{word.lower().replace(' ', '-')}"
        response = requests.get(url, headers=HEADERS, timeout=10)
        
        if response.status_code != 200:
            print(f"  ❌ HTTP {response.status_code} for {word}")
            return None
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Look for UK pronunciation
        uk_pron = soup.find('span', class_='uk')
        if uk_pron:
            ipa_span = uk_pron.find('span', class_='ipa')
            if ipa_span:
                phonetic = ipa_span.get_text(strip=True)
                return f"/{phonetic}/"
        
        print(f"  ⚠️  UK phonetic not found for {word}")
        return None
        
    except Exception as e:
        print(f"  ❌ Error fetching {word}: {e}")
        return None

def main():
    # Read CSV
    with open('the_sounds_of_english.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
    
    print(f"📚 Total words: {len(rows)}")
    
    # Count words without UK transcription
    needs_uk = [r for r in rows if not r.get('Transcription_UK', '').strip()]
    print(f"🔍 Words needing UK transcription: {len(needs_uk)}\n")
    
    updated = 0
    skipped = 0
    
    for i, row in enumerate(rows, 1):
        word = row['Word']
        
        # Skip if already has UK transcription
        if row.get('Transcription_UK', '').strip():
            continue
        
        print(f"[{i}/{len(rows)}] Fetching: {word}")
        
        uk_phonetic = fetch_uk_phonetic(word)
        
        if uk_phonetic:
            row['Transcription_UK'] = uk_phonetic
            print(f"  ✅ {uk_phonetic}")
            updated += 1
        else:
            skipped += 1
        
        # Rate limiting
        time.sleep(1.5)
    
    # Write updated CSV
    with open('the_sounds_of_english.csv', 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['Order', 'Emoji', 'Word', 'Transcription', 'Transcription_UK', 'Symbol', 'Category', 'Literal_Translation', 'Contextual_Translation']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    
    print(f"\n{'='*50}")
    print(f"✅ Updated: {updated}")
    print(f"⏭️  Skipped: {skipped}")
    print(f"📊 Total: {len(rows)}")
    print(f"{'='*50}")

if __name__ == '__main__':
    main()





