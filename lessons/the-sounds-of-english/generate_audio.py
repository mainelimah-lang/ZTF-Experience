#!/usr/bin/env python3
"""
Generate audio files for words in CSV
Based on ZTFBrain audio_service.py
"""

import asyncio
import csv
import os
import sys
from pathlib import Path

try:
    import edge_tts
except ImportError:
    print("❌ edge_tts not installed. Install with: pip install edge-tts")
    sys.exit(1)

# Voice configuration
VOICES = {
    'us': 'en-US-AriaNeural',  # Female US English
    'uk': 'en-GB-LibbyNeural'  # Female British English - Modern
}

async def generate_audio(text: str, output_path: str, voice: str):
    """Generate audio file using Edge TTS"""
    try:
        communicate = edge_tts.Communicate(text=text, voice=voice)
        await communicate.save(output_path)
        return True
    except Exception as e:
        print(f"❌ Error generating {output_path}: {e}")
        return False

async def generate_audio_for_word(word: str, audio_dir: str, locale: str = 'both'):
    """Generate audio for a single word in US and/or UK voice"""
    os.makedirs(audio_dir, exist_ok=True)
    
    # Clean word for filename
    clean_word = word.lower().strip()
    
    tasks = []
    
    if locale in ['us', 'both']:
        us_path = os.path.join(audio_dir, f"{clean_word}.us.mp3")
        if not os.path.exists(us_path):
            tasks.append(('US', generate_audio(word, us_path, VOICES['us'])))
        else:
            print(f"⏭️  Skipping {clean_word}.us.mp3 (already exists)")
    
    if locale in ['uk', 'both']:
        uk_path = os.path.join(audio_dir, f"{clean_word}.uk.mp3")
        if not os.path.exists(uk_path):
            tasks.append(('UK', generate_audio(word, uk_path, VOICES['uk'])))
        else:
            print(f"⏭️  Skipping {clean_word}.uk.mp3 (already exists)")
    
    # Execute tasks
    if tasks:
        results = await asyncio.gather(*[task[1] for task in tasks])
        for (locale_name, _), success in zip(tasks, results):
            if success:
                print(f"✅ Generated {clean_word} ({locale_name})")
    
    return len(tasks) > 0

async def generate_from_csv(csv_path: str, audio_dir: str = 'audios', locale: str = 'both'):
    """Read CSV and generate audio for all words"""
    
    if not os.path.exists(csv_path):
        print(f"❌ CSV file not found: {csv_path}")
        return
    
    print(f"📖 Reading CSV: {csv_path}")
    print(f"🔊 Generating audios in: {audio_dir}")
    print(f"🗣️  Locale: {locale}")
    print("-" * 50)
    
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        words = [row['Word'] for row in reader if row.get('Word')]
    
    print(f"📝 Found {len(words)} words")
    print("-" * 50)
    
    generated_count = 0
    for i, word in enumerate(words, 1):
        print(f"[{i}/{len(words)}] {word}")
        if await generate_audio_for_word(word, audio_dir, locale):
            generated_count += 1
    
    print("-" * 50)
    print(f"✅ Done! Generated audio for {generated_count} words")

def main():
    """Main entry point"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Generate audio files for words in CSV')
    parser.add_argument('csv_file', help='Path to CSV file with Word column')
    parser.add_argument('--output', '-o', default='audios', help='Output directory for audio files (default: audios)')
    parser.add_argument('--locale', '-l', choices=['us', 'uk', 'both'], default='both', 
                        help='Which locale to generate (default: both)')
    
    args = parser.parse_args()
    
    # Run async function
    asyncio.run(generate_from_csv(args.csv_file, args.output, args.locale))

if __name__ == '__main__':
    main()

