import sharp from 'sharp';
import fs from 'fs';

async function main() {
  const colors = ['silver', 'black', 'glacier', 'burgundy'];
  const views = ['full', 'close-up', 'side'];

  for (const color of colors) {
    for (const view of views) {
      const file = `trans_18-pro-${color}-${view}.png`;
      const input = `public/${color}/${file}`;
      const output = `public/${color}/temp_${file}`;
      
      if (fs.existsSync(input)) {
        console.log(`Trimming ${input}...`);
        try {
          await sharp(input)
            .trim()
            .toFile(output);
          console.log(`Saved ${output}`);
          fs.renameSync(output, input); // rename back to original trans_
        } catch (e) {
          console.error(`Error on ${input}:`, e);
        }
      }
    }
  }
}

main();
