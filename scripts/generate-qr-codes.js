const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const BASE_URL = 'https://mrghostguy.github.io/judgement-by-ai';
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'docs', 'qr-codes', 'judgement-by-ai.png');
const META_OUT = path.join(ROOT, 'docs', 'creation.json');

const qrData = {
  title: 'Judgement by AI',
  url: BASE_URL + '/',
  description: 'Five rounds, one local AI judge, 75 ways to die.',
  iconUrl: '',
  themeColor: '#FE5000'
};

(async () => {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(META_OUT, JSON.stringify(qrData, null, 2) + '\n', 'utf8');
  await QRCode.toFile(OUT, JSON.stringify(qrData), {
    width: 600,
    margin: 2,
    errorCorrectionLevel: 'M',
    color: { dark: '#000000', light: '#FFFFFF' }
  });
  console.log('Created R1 creation QR:', OUT);
  console.log('Payload:', JSON.stringify(qrData));
})().catch(err => {
  console.error(err);
  process.exit(1);
});
