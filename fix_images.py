from PIL import Image
import os

# Reference ratio from iPhone 18 Pro image (1323 x 1592)
REF_W, REF_H = 1323, 1592
TARGET_H = 1592  # Match height
TARGET_W = 1323  # Match width

def remove_white_bg_and_resize(input_path, output_path):
    """Remove white/near-white background and place phone on transparent canvas matching 18 Pro ratio."""
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    
    # Make white/near-white pixels transparent
    # Use a threshold - pixels close to white become transparent
    threshold = 240
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r >= threshold and g >= threshold and b >= threshold:
                pixels[x, y] = (r, g, b, 0)  # fully transparent
    
    # Now crop to the bounding box of non-transparent content
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    
    # Get the cropped phone dimensions
    phone_w, phone_h = img.size
    print(f"  After crop: {phone_w}x{phone_h}")
    
    # Scale the phone to fit within the target canvas while preserving aspect ratio
    # We want the phone to fill most of the height
    scale_factor = (TARGET_H * 0.85) / phone_h  # Use 85% of canvas height
    new_phone_w = int(phone_w * scale_factor)
    new_phone_h = int(phone_h * scale_factor)
    
    img = img.resize((new_phone_w, new_phone_h), Image.LANCZOS)
    
    # Create transparent canvas matching 18 Pro dimensions
    canvas = Image.new("RGBA", (TARGET_W, TARGET_H), (0, 0, 0, 0))
    
    # Center the phone on the canvas
    paste_x = (TARGET_W - new_phone_w) // 2
    paste_y = (TARGET_H - new_phone_h) // 2
    canvas.paste(img, (paste_x, paste_y), img)
    
    # Save as PNG (webp doesn't always preserve alpha well for all viewers)
    canvas.save(output_path, "PNG")
    print(f"  Saved: {output_path} ({TARGET_W}x{TARGET_H})")

# Process each image
images = {
    'public/17.webp': 'public/17.png',
    'public/17e.webp': 'public/17e.png',
    'public/air.webp': 'public/air.png',
    'public/iphone-card-40-duo-202609.webp': 'public/iphone-card-40-duo-202609.png',
}

for src, dst in images.items():
    print(f"Processing {src}...")
    remove_white_bg_and_resize(src, dst)

print("\nDone! All images processed.")
