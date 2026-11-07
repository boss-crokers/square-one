import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');
const ssrDir = path.resolve(__dirname, 'dist-ssr');

const escapeHtml = (str) =>
    str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

async function prerender() {
    const templatePath = path.join(distDir, 'index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');

    const { render, routesToPrerender } = await import('./dist-ssr/entry-server.js');
    const baseUrl = 'https://squareonehomeinspectors.com';

    for (const route of routesToPrerender) {
        const appHtml = render(route.path);
        const canonicalUrl = `${baseUrl}${route.path === '/' ? '/' : route.path}`;
        const safeTitle = escapeHtml(route.title);
        const safeDesc = escapeHtml(route.description);

        let html = template
            .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
            .replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
            .replace(
                /<meta name="description"[\s\S]*?\/>/,
                `<meta name="description" content="${safeDesc}" />`
            )
            .replace(
                /<link rel="canonical" href="[^"]*" \/>/,
                `<link rel="canonical" href="${canonicalUrl}" />`
            )
            .replace(
                /<meta property="og:url" content="[^"]*" \/>/,
                `<meta property="og:url" content="${canonicalUrl}" />`
            )
            .replace(
                /<meta property="og:title" content="[^"]*" \/>/,
                `<meta property="og:title" content="${safeTitle}" />`
            )
            .replace(
                /<meta property="og:description"[\s\S]*?\/>/,
                `<meta property="og:description" content="${safeDesc}" />`
            )
            .replace(
                /<meta property="twitter:url" content="[^"]*" \/>/,
                `<meta property="twitter:url" content="${canonicalUrl}" />`
            )
            .replace(
                /<meta property="twitter:title" content="[^"]*" \/>/,
                `<meta property="twitter:title" content="${safeTitle}" />`
            )
            .replace(
                /<meta property="twitter:description"[\s\S]*?\/>/,
                `<meta property="twitter:description" content="${safeDesc}" />`
            );

        if (route.jsonLd) {
            const schemaTag = `  <script type="application/ld+json">\n${JSON.stringify(route.jsonLd, null, 2)}\n  </script>\n</head>`;
            html = html.replace('</head>', schemaTag);
        }

        const outPath =
            route.path === '/'
                ? path.join(distDir, 'index.html')
                : path.join(distDir, route.path.slice(1), 'index.html');

        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, html, 'utf-8');
        console.log(`Pre-rendered: ${route.path} -> ${path.relative(__dirname, outPath)}`);
    }

    fs.rmSync(ssrDir, { recursive: true, force: true });
    console.log(`Successfully pre-rendered ${routesToPrerender.length} SEO routes.`);
}

prerender().catch((err) => {
    console.error('Pre-render failed:', err);
    process.exit(1);
});
