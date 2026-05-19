// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://staywelladjusted.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/health-starts-here", changefreq: "monthly", priority: "0.8" },
  { path: "/chiropractic-care", changefreq: "monthly", priority: "0.8" },
  { path: "/spinal-decompression", changefreq: "monthly", priority: "0.8" },
  { path: "/dual-shockwave", changefreq: "monthly", priority: "0.8" },
  { path: "/saatva-mattress-partner", changefreq: "monthly", priority: "0.6" },
  { path: "/meet-the-team", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/special", changefreq: "monthly", priority: "0.9" },
  { path: "/contact-us", changefreq: "monthly", priority: "0.8" },
  { path: "/about-us", changefreq: "monthly", priority: "0.6" },
  { path: "/review-us", changefreq: "monthly", priority: "0.6" },
  { path: "/chiropractor-arlington-tx", changefreq: "monthly", priority: "0.9" },
  { path: "/chiropractor-loveland-co", changefreq: "monthly", priority: "0.9" },
  { path: "/chiropractor-greeley-co", changefreq: "monthly", priority: "0.9" },
  { path: "/chiropractor-fort-collins-co", changefreq: "monthly", priority: "0.9" },
  { path: "/chiropractor-erie-co", changefreq: "monthly", priority: "0.9" },
  { path: "/schedule-an-appointment-new-patient-special-offer", changefreq: "monthly", priority: "0.9" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
];

const blogSlugs = [
  "how-often-should-you-see-a-chiropractor",
  "signs-your-body-is-shutting-down-from-stress",
  "can-you-regain-muscle-that-has-atrophied",
  "do-chiropractors-recommend-decompression-for-neck-or-low-back",
  "what-age-can-you-start-seeing-a-chiropractor",
  "corrective-chiropractic-care-for-long-term-wellness",
  "what-to-consider-when-selecting-a-chiropractor",
  "why-children-should-see-a-chiropractor",
  "the-benefits-of-seeing-a-chiropractor-for-neck-pain",
  "how-chiropractic-care-helps-with-numbness-and-tingling",
  "how-to-reduce-muscle-inflammation-quickly",
];

const entries: SitemapEntry[] = [
  ...staticEntries,
  ...blogSlugs.map((slug) => ({
    path: `/blog/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
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
