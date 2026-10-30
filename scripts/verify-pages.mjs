import { build } from 'esbuild';
import { readFile, writeFile, unlink } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// Render every page in both languages to catch component and content errors.
// This complements, but does not replace, visual and interactive browser QA.
const source = await readFile(new URL('../src/main.jsx', import.meta.url), 'utf8');
const entry = source.replace(/createRoot\(document\.getElementById\('root'\)\)\.render\([\s\S]*$/, 'export { App };');
if (entry === source) throw new Error('Could not prepare portfolio verification entry');
const output = resolve('.portfolio-verification.mjs');
const routes = ['/', '/engineering', '/international', '/sustainability', '/activities', '/development', '/career-project'];
try {
  const result = await build({
    stdin: { contents: entry, resolveDir: resolve('src'), loader: 'jsx' },
    bundle: true, platform: 'node', format: 'esm', packages: 'external',
    loader: { '.css': 'empty' }, write: false,
  });
  await writeFile(output, result.outputFiles[0].text);
  const { App } = await import(pathToFileURL(output));
  for (const lang of ['en', 'fr']) {
    globalThis.localStorage = { getItem: () => lang, setItem() {} };
    for (const route of routes) {
      const html = renderToString(React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(App)));
      if (!html.includes('id="main"') || !html.includes('Aya Harrasse')) throw new Error(`Incomplete page: ${lang} ${route}`);
      if (html.includes('[object Object]')) throw new Error(`Unrendered content: ${lang} ${route}`);
      const skipLabel = lang === 'en' ? 'Skip to content' : 'Aller au contenu';
      if (!html.includes(skipLabel)) throw new Error(`Missing translated navigation: ${lang} ${route}`);
      console.log(`PASS ${lang.toUpperCase()} ${route}`);
    }
  }
  console.log('All 14 page/language combinations rendered successfully.');
} finally {
  delete globalThis.localStorage;
  await unlink(output).catch(() => {});
}
