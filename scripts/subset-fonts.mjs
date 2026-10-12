/* global console */
// 사이트에 실제로 쓰인 글자만 남긴 woff2 서브셋을 public/fonts에 생성한다.
// 파일명에 내용 해시를 붙이고 index.html, src/index.css의 참조를 함께 갱신한다.
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import subsetFont from 'subset-font';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/fonts');
const referenceFiles = ['index.html', 'src/index.css'].map((file) => path.join(root, file));

const fonts = [
  { source: 'src/shared/fonts/fontData/Gowun_Dodum/GowunDodum-Regular.ttf', name: 'gowun-dodum' },
  { source: 'src/shared/fonts/fontData/Klee_One/KleeOne-Regular.ttf', name: 'klee-one' },
];

const collectFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return collectFiles(fullPath);
    return /\.(json|tsx?)$/.test(entry.name) ? [fullPath] : [];
  });

const collectText = () => {
  const chars = new Set();
  for (const file of [...collectFiles(path.join(root, 'src')), path.join(root, 'index.html')]) {
    for (const char of fs.readFileSync(file, 'utf8')) chars.add(char);
  }
  // 동적으로 들어올 수 있는 기본 ASCII는 항상 포함한다
  for (let code = 0x20; code < 0x7f; code += 1) chars.add(String.fromCharCode(code));
  return [...chars].sort().join('');
};

const text = collectText();

for (const { source, name } of fonts) {
  const subset = await subsetFont(fs.readFileSync(path.join(root, source)), text, { targetFormat: 'woff2' });
  const hash = createHash('sha256').update(subset).digest('hex').slice(0, 8);
  const fileName = `${name}-${hash}.woff2`;

  for (const file of fs.readdirSync(outDir)) {
    if (file.startsWith(`${name}-`) && file.endsWith('.woff2') && file !== fileName) {
      fs.unlinkSync(path.join(outDir, file));
    }
  }
  fs.writeFileSync(path.join(outDir, fileName), subset);

  const pattern = new RegExp(`/fonts/${name}-[\\w-]+\\.woff2`, 'g');
  for (const file of referenceFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const updated = content.replace(pattern, `/fonts/${fileName}`);
    if (updated !== content) fs.writeFileSync(file, updated);
  }

  console.log(`${fileName} (${(subset.length / 1024).toFixed(0)}KB)`);
}
