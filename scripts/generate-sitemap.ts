// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
// Blog entries (slug + lastmod) are derived automatically from src/data/blogPosts.ts,
// so every new blog post gets indexed in the sitemap with no extra work — similar to
// how Yoast SEO auto-populates the sitemap on WordPress.

import { readFileSync, writeFileSync, statSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://staywelladjusted.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  lastmod?: string;
}

const today = new Date().toISOString().slice(0, 10);

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
  { path: "/health-starts-here", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/chiropractic-care", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/spinal-decompression", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/dual-shockwave", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/saatva-mattress-partner", changefreq: "monthly", priority: "0.6", lastmod: today },
  { path: "/meet-the-team", changefreq: "monthly", priority: "0.7", lastmod: today },
  { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: today },
  { path: "/special", changefreq: "monthly", priority: "0.9", lastmod: today },
  { path: "/contact-us", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/about-us", changefreq: "monthly", priority: "0.6", lastmod: today },
  { path: "/review-us", changefreq: "monthly", priority: "0.6", lastmod: today },
  { path: "/chiropractor-arlington-tx", changefreq: "monthly", priority: "0.9", lastmod: today },
  { path: "/chiropractor-loveland-co", changefreq: "monthly", priority: "0.9", lastmod: today },
  { path: "/chiropractor-greeley-co", changefreq: "monthly", priority: "0.9", lastmod: today },
  { path: "/chiropractor-fort-collins-co", changefreq: "monthly", priority: "0.9", lastmod: today },
  { path: "/chiropractor-erie-co", changefreq: "monthly", priority: "0.9", lastmod: today },
  { path: "/schedule-an-appointment-new-patient-special-offer", changefreq: "monthly", priority: "0.9", lastmod: today },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3", lastmod: today },
];

// Parse src/data/blogPosts.ts directly via regex so we don't have to resolve
// the file's image-asset imports at script time. Each post block is matched as
// { slug: "...", ... date: "Month D, YYYY", ... }
function extractBlogEntries(): SitemapEntry[] {
  const file = readFileSync(resolve("src/data/blogPosts.ts"), "utf8");
  const re = /slug:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"/g;
  const fileMtime = statSync(resolve("src/data/blogPosts.ts")).mtime
    .toISOString()
    .slice(0, 10);

  const entries: SitemapEntry[] = [];
  const seen = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(file)) !== null) {
    const [, slug, dateStr] = m;
    if (seen.has(slug)) continue;
    seen.add(slug);

    const parsed = new Date(dateStr);
    const lastmod = isNaN(parsed.getTime())
      ? fileMtime
      : parsed.toISOString().slice(0, 10);

    entries.push({
      path: `/blog/${slug}`,
      changefreq: "monthly",
      priority: "0.7",
      lastmod,
    });
  }
  return entries;
}

const entries: SitemapEntry[] = [...staticEntries, ...extractBlogEntries()];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
