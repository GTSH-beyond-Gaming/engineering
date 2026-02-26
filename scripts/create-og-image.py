#!/usr/bin/env python3
"""Create OG-Image with logo and branding"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

# Paths
BASE = Path(__file__).parent.parent / "public"
LOGO = BASE / "logo.webp"
OUTPUT = BASE / "og-image.webp"

# OG dimensions
WIDTH, HEIGHT = 1200, 630

# Brand colors
BG_COLOR = (10, 10, 15)  # Near black
PRIMARY = (255, 102, 0)  # Orange
TEXT_COLOR = (255, 255, 255)

def create_og_image():
    # Create base image
    img = Image.new('RGB', (WIDTH, HEIGHT), BG_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Add gradient overlay effect (simple)
    for y in range(HEIGHT):
        alpha = int(20 * (1 - y / HEIGHT))
        draw.line([(0, y), (WIDTH, y)], fill=(PRIMARY[0], PRIMARY[1], PRIMARY[2], alpha))
    
    # Load and place logo
    logo = Image.open(LOGO)
    logo_size = 200
    logo = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    
    # Center logo horizontally, upper third vertically
    logo_x = (WIDTH - logo_size) // 2
    logo_y = 120
    
    # Handle transparency
    if logo.mode == 'RGBA':
        img.paste(logo, (logo_x, logo_y), logo)
    else:
        img.paste(logo, (logo_x, logo_y))
    
    # Add text
    try:
        title_font = ImageFont.truetype("arial.ttf", 56)
        subtitle_font = ImageFont.truetype("arial.ttf", 28)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Title
    title = "GTSH Engineering"
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_w = title_bbox[2] - title_bbox[0]
    draw.text(((WIDTH - title_w) // 2, 360), title, fill=TEXT_COLOR, font=title_font)
    
    # Subtitle
    subtitle = "Websites | Automation | KI"
    sub_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    sub_w = sub_bbox[2] - sub_bbox[0]
    draw.text(((WIDTH - sub_w) // 2, 440), subtitle, fill=PRIMARY, font=subtitle_font)
    
    # Tagline
    tagline = "Lokale KI-Loesungen fuer KMU in Thueringen"
    tag_bbox = draw.textbbox((0, 0), tagline, font=subtitle_font)
    tag_w = tag_bbox[2] - tag_bbox[0]
    draw.text(((WIDTH - tag_w) // 2, 500), tagline, fill=(180, 180, 180), font=subtitle_font)
    
    # Add subtle border
    draw.rectangle([(20, 20), (WIDTH-20, HEIGHT-20)], outline=PRIMARY, width=2)
    
    # Save
    img.save(OUTPUT, 'WEBP', quality=90)
    print(f"OK: {OUTPUT}")

if __name__ == "__main__":
    create_og_image()
