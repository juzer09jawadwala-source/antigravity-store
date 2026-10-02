import sharp from 'sharp';
async function trimImage(inputPath, outputPath) {
  try {
    await sharp(inputPath).trim().toFile(outputPath);
    console.log('Trimmed', inputPath);
  } catch (e) {
    console.error('Error trimming', inputPath, e);
  }
}
async function main() {
  await trimImage('public/apple-music-trans.png', 'public/apple-music-trimmed.png');
  await trimImage('public/health-tracker-trans.png', 'public/health-tracker-trimmed.png');
}
main();
