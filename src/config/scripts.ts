/**
 * Central snippet manager (WordPress-style "insert headers and footers").
 *
 * Add any third-party script (GTM, Meta Pixel, chat widget, etc.) HERE and
 * choose where it should run. No backend, no external service — everything
 * lives in this repository so it travels with the code.
 *
 * scope.type:
 *   "all"       -> every page of the site
 *   "blogposts" -> only /blog/:slug article pages
 *   "pages"     -> only the routes listed in scope.paths (exact pathnames)
 *
 * Set `enabled: false` to switch a snippet off without deleting it.
 */

export type SnippetScope =
  | { type: "all" }
  | { type: "blogposts" }
  | { type: "pages"; paths: string[] };

export interface Snippet {
  /** Unique id — also used to de-duplicate injected nodes. */
  id: string;
  /** Human label, only for your own reference. */
  label: string;
  enabled: boolean;
  scope: SnippetScope;
  /** Raw HTML injected into <head> (scripts, meta, link, style). */
  head?: string;
  /** Raw HTML injected at the very start of <body> (GTM noscript, etc.). */
  bodyStart?: string;
  /** Raw HTML injected at the end of <body>. */
  bodyEnd?: string;
}

/**
 * Handy list of the site's routes, so you can copy/paste exact paths
 * into a `{ type: "pages", paths: [...] }` scope.
 */
export const SITE_PATHS: string[] = [
  "/",
  "/health-starts-here",
  "/chiropractic-care",
  "/spinal-decompression",
  "/massage-therapy",
  "/massage-therapy-schedule-erie",
  "/dual-shockwave",
  "/saatva-mattress-partner",
  "/privacy-policy",
  "/meet-the-team",
  "/blog",
  "/special",
  "/contact-us",
  "/about-us",
  "/review-us",
  "/thank-you-careers-erie-co",
  "/chiropractor-arlington-tx",
  "/chiropractor-loveland-co",
  "/chiropractor-greeley-co",
  "/chiropractor-fort-collins-co",
  "/chiropractor-erie-co",
  "/schedule-an-appointment-new-patient-special-offer",
  "/schedule-existing-patients-erie-co",
  "/links",
  "/start",
  "/workplace-wellness",
  "/history",
  "/our-technique",
  "/careers",
  "/book-an-event",
  "/custom-foot-orthotics",
  "/sports-physicals",
  "/workshops",
  "/live-stream",
];

export const snippets: Snippet[] = [
  {
    // NOTE: this GTM tag is now hard-coded in index.html so it is present in the
    // raw HTML source (view-source) of every page, exactly like WordPress HFCM.
    // Kept here (disabled) only as reference — do NOT re-enable, it would duplicate.
    id: "gtm-mrm6p7sw",
    label: "Google Tag Manager (GTM-MRM6P7SW) — served from index.html",
    enabled: false,
    scope: { type: "all" },
    head: `<!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MRM6P7SW');</script><!-- End Google Tag Manager -->`,
    bodyStart: `<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRM6P7SW" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->`,
  },
];

export function snippetMatchesPath(snippet: Snippet, pathname: string): boolean {
  if (!snippet.enabled) return false;

  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  switch (snippet.scope.type) {
    case "all":
      return true;
    case "blogposts":
      return path.startsWith("/blog/");
    case "pages":
      return snippet.scope.paths.some(
        (p) => (p.length > 1 ? p.replace(/\/+$/, "") : p) === path,
      );
    default:
      return false;
  }
}
