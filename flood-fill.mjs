import sharp from 'sharp';
import fs from 'fs';

async function floodFillTransparent(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const c = info.channels;
  
  // Create a visited array
  const visited = new Uint8Array(w * h);
  
  // Stack for flood fill
  const stack = [];
  
  // Helper to push to stack
  const push = (x, y) => {
    if (x >= 0 && x < w && y >= 0 && y < h) {
      if (visited[y * w + x] === 0) {
        stack.push([x, y]);
        visited[y * w + x] = 1;
      }
    }
  };

  // Start from the four corners
  push(0, 0);
  push(w - 1, 0);
  push(0, h - 1);
  push(w - 1, h - 1);
  
  while (stack.length > 0) {
    const [x, y] = stack.pop();
    const idx = (y * w + x) * c;
    
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    
    // If it's near white (the background is usually #f4f4f4 or #ffffff)
    // We can be generous with the threshold because the phone body is bounded by darker edges
    if (r > 230 && g > 230 && b > 230) {
      data[idx + 3] = 0; // Transparent
      
      // Add neighbors
      push(x + 1, y);
      push(x - 1, y);
      push(x, y + 1);
      push(x, y - 1);
    }
  }

  // Save the result, trimmed
  await sharp(data, {
    raw: {
      width: w,
      height: h,
      channels: c
    }
  })
  .trim()
  .png()
  .toFile(outputPath);
}

async function main() {
  const colors = ['black', 'silver', 'glacier', 'burgundy'];
  const views = ['full', 'close-up', 'side'];
  
  for (const color of colors) {
    for (const view of views) {
      const input = `public/${color}/18-pro-${color}-${view}.webp`;
      const output = `public/${color}/trans_18-pro-${color}-${view}.png`;
      if (fs.existsSync(input)) {
        console.log(`Flood filling ${input}...`);
        try {
          await floodFillTransparent(input, output);
          console.log(`Saved ${output}`);
        } catch (e) {
          console.error(`Error on ${input}:`, e);
        }
      }
    }
  }
}

main().catch(console.error);
