import os
from rembg import remove

colors = ['silver', 'black', 'glacier', 'burgundy']
views = ['full', 'close-up', 'side']

for color in colors:
    for view in views:
        input_file = f"public/{color}/18-pro-{color}-{view}.webp"
        output_file = f"public/{color}/trans_18-pro-{color}-{view}.png"
        
        if os.path.exists(input_file):
            print(f"Processing {input_file} with rembg API...", flush=True)
            try:
                with open(input_file, 'rb') as i:
                    input_data = i.read()
                
                output_data = remove(input_data)
                
                with open(output_file, 'wb') as o:
                    o.write(output_data)
                    
                print(f"Saved {output_file}", flush=True)
            except Exception as e:
                print(f"Failed {input_file}: {e}", flush=True)
        else:
            print(f"Missing {input_file}", flush=True)
