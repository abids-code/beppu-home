import type { APIContext } from 'astro';

// Every page is public. The sitemap URL follows the configured site (see astro.config.mjs).
export function GET(context: APIContext) {
  const sitemap = new URL('sitemap-index.xml', context.site).href;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
