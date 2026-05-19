<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <title>Sitemap — Well Adjusted Chiropractic</title>
        <style>
          body { font-family: -apple-system, Segoe UI, Roboto, sans-serif; background: #faf8f3; color: #2b2b2b; margin: 0; padding: 2rem; }
          .wrap { max-width: 1100px; margin: 0 auto; background: #fff; border: 1px solid #e6dfce; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,.04); }
          header { background: #c1a062; color: #fff; padding: 1.5rem 2rem; }
          header h1 { margin: 0; font-size: 1.4rem; letter-spacing: .02em; }
          header p { margin: .25rem 0 0; opacity: .9; font-size: .9rem; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: .75rem 1rem; text-align: left; border-bottom: 1px solid #f0ead9; font-size: .92rem; }
          th { background: #f7f1e1; font-weight: 600; color: #5a4a25; text-transform: uppercase; font-size: .75rem; letter-spacing: .05em; }
          tr:hover td { background: #fdfaf1; }
          a { color: #8a6b2a; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .count { font-variant-numeric: tabular-nums; color: #6b6b6b; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <header>
            <h1>XML Sitemap</h1>
            <p class="count"><xsl:value-of select="count(s:urlset/s:url)"/> URLs</p>
          </header>
          <table>
            <thead>
              <tr><th>#</th><th>URL</th><th>Change frequency</th><th>Priority</th></tr>
            </thead>
            <tbody>
              <xsl:for-each select="s:urlset/s:url">
                <tr>
                  <td class="count"><xsl:value-of select="position()"/></td>
                  <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                  <td><xsl:value-of select="s:changefreq"/></td>
                  <td><xsl:value-of select="s:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
