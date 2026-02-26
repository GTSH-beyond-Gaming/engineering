#!/usr/bin/env python3
"""Convert Gallery PNGs to WebP"""
import os
from pathlib import Path
from PIL import Image

GALLERY_DIR = Path(__file__).parent.parent / "public" / "gallery"
QUALITY = 85

def convert_png_to_webp():
    count = 0
    saved_bytes = 0
    
    for png_file in GALLERY_DIR.rglob("*.png"):
        webp_file = png_file.with_suffix(".webp")
        
        try:
            with Image.open(png_file) as img:
                # Convert to RGB if RGBA (WebP supports both but RGB is smaller)
                if img.mode == 'RGBA':
                    img.save(webp_file, "WEBP", quality=QUALITY, lossless=False)
                else:
                    img.save(webp_file, "WEBP", quality=QUALITY)
            
            old_size = png_file.stat().st_size
            new_size = webp_file.stat().st_size
            saved_bytes += old_size - new_size
            
            # Delete original PNG
            png_file.unlink()
            count += 1
            print(f"OK: {png_file.name} -> {webp_file.name}")
            
        except Exception as e:
            print(f"ERR: {png_file.name}: {e}")
    
    print(f"\nKonvertiert: {count} Bilder")
    print(f"Gespart: {saved_bytes / 1024 / 1024:.1f} MB")

if __name__ == "__main__":
    print("Konvertiere Gallery PNGs zu WebP...\n")
    convert_png_to_webp()
    print("\nFertig!")
