const fs = require('fs');
const html = fs.readFileSync('iPhone 18 Pro and iPhone 18 Pro Max - Apple (IN).html', 'utf8');

const regex = /<span class="headline typography-pro-camera-tile-headline">([\s\S]*?)<\/span>[\s\S]*?<span class="copy typography-pro-camera-tile-copy">([\s\S]*?)<\/span>/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('---');
  console.log(m[1].replace(/(<([^>]+)>)/ig, '').trim());
  console.log(m[2].replace(/(<([^>]+)>)/ig, '').trim().replace(/\s+/g, ' '));
}

console.log('\nAPERTURE:');
const apRegex = /<span class="caption-heading">([\s\S]*?)<\/span>([\s\S]*?)<\/p>/gi;
while ((m = apRegex.exec(html)) !== null) {
  console.log('---');
  console.log(m[1].replace(/(<([^>]+)>)/ig, '').trim());
  console.log(m[2].replace(/(<([^>]+)>)/ig, '').trim().replace(/\s+/g, ' '));
}
