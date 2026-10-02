import sharp from 'sharp';
async function processImage(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i]; const g = data[i + 1]; const b = data[i + 2];
    if (r > 240 && g > 240 && b > 240) { data[i + 3] = 0; }
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } }).png().toFile(outputPath);
}
async function main() {
  await processImage('public/apple-music.jpg', 'public/apple-music-trans.png');
  await processImage('public/health-tracker.jpg', 'public/health-tracker-trans.png');
}
main().catch(console.error);
