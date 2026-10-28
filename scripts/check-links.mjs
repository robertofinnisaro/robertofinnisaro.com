// Checks every internal href/src in the built site (dist/) resolves to a
// generated file. Run after `npm run build`: `npm run check-links`.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const distDir = new URL('../dist/', import.meta.url).pathname;

if (!existsSync(distDir)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

function listHtmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return listHtmlFiles(path);
    return path.endsWith('.html') ? [path] : [];
  });
}

// dist/a/b/index.html -> /a/b/
function pageUrl(file) {
  const path = '/' + relative(distDir, file).split(sep).join('/');
  return path.endsWith('index.html') ? path.slice(0, -'index.html'.length) : path;
}

function targetExists(pathname) {
  const path = join(distDir, decodeURIComponent(pathname));
  if (pathname.endsWith('/')) return existsSync(join(path, 'index.html'));
  return (
    (existsSync(path) && statSync(path).isFile()) ||
    existsSync(join(path, 'index.html')) ||
    existsSync(`${path}.html`)
  );
}

const linkPattern = /\s(?:href|src)="([^"]+)"/g;
const broken = [];
let checked = 0;

for (const file of listHtmlFiles(distDir)) {
  const from = pageUrl(file);
  const html = readFileSync(file, 'utf8');

  for (const [, raw] of html.matchAll(linkPattern)) {
    // Skip external schemes (https:, mailto:, data:), protocol-relative URLs
    // and same-page anchors.
    if (/^[a-z][a-z0-9+.-]*:/i.test(raw) || raw.startsWith('//') || raw.startsWith('#')) {
      continue;
    }

    const { pathname } = new URL(raw, `https://site.invalid${from}`);
    checked += 1;

    if (!targetExists(pathname)) broken.push({ from, raw, pathname });
  }
}

if (broken.length > 0) {
  console.error(`Found ${broken.length} broken internal link(s):\n`);
  for (const { from, raw, pathname } of broken) {
    const resolved = raw === pathname ? '' : ` (resolves to ${pathname})`;
    console.error(`  ${from} -> ${raw}${resolved}`);
  }
  process.exit(1);
}

console.log(`All ${checked} internal links resolve.`);
