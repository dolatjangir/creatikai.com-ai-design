export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://creatikai.com/</loc>
    <lastmod>2026-07-27T10:13:40+00:00</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0000</priority>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}