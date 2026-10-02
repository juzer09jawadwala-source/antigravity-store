import os
from PIL import Image

def convert_to_webp():
    try:
        img = Image.open('public/apple-in-hero.jpg')
        if img.mode != 'RGBA' and img.mode != 'RGB':
            img = img.convert('RGB')
        img.save('public/apple-in-hero.webp', 'webp', quality=85, method=6)
        print("Converted!")
    except Exception as e:
        print(f"Failed to convert: {e}")

if __name__ == "__main__":
    convert_to_webp()
