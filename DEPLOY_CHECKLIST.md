# Richie Reach - Pre-Deploy and Post-Deploy Checklist

## Before deploying (run these checks)

- [ ] npm run build completes with zero errors
- [ ] All 38 indexable pages return 200 in local dev (31 prompt baseline + 4 new support pages + 2 existing alternatives + blog index)
- [ ] No noindex tags on any page (checked in DEPLOYMENT_SAFETY_AUDIT.md)
- [ ] All canonical URLs use https://www.richiereach.tech (checked in DEPLOYMENT_SAFETY_AUDIT.md)
- [ ] sitemap.xml accessible at /sitemap.xml and lists all URLs
- [ ] robots.txt accessible at /robots.txt and references www sitemap URL
- [ ] llms.txt accessible at /llms.txt
- [ ] www redirect working (richiereach.tech -> www.richiereach.tech)
- [ ] OG image loads at /images/hero-image.jpg
- [ ] JSON-LD scripts visible in page source for homepage and how-it-works
- [ ] Author byline "By Sayudh Mukherjee" visible on all blog posts
- [ ] No em dashes remaining in any content (search codebase for the em dash character)
- [ ] Core Web Vitals: run Lighthouse on homepage, score 85+ on Performance
- [ ] IndexNow key file accessible at /[key].txt
- [ ] scripts/submit-indexnow.ts ready to run post-deploy

## Day 1 post-deploy actions

- [ ] Verify Google Search Console property for www.richiereach.tech (if not already done: add DNS TXT record via domain registrar)
- [ ] Submit sitemap: Search Console > Sitemaps > https://www.richiereach.tech/sitemap.xml
- [ ] Manually request indexing for Tier 1 URLs (see public/deploy-indexing-order.json)
- [ ] Verify Bing Webmaster Tools property at https://www.bing.com/webmasters (Bing covers Bing, DuckDuckGo, and several AI search engines)
- [ ] Submit sitemap to Bing: Webmaster Tools > Sitemaps
- [ ] Post one LinkedIn post from personal profile announcing the site. Include the URL https://www.richiereach.tech in the post body. This creates a public indexed link that accelerates Google discovery.

## Day 4-7 post-deploy actions

- [ ] Check Search Console Coverage report for Tier 1 URLs
- [ ] Manually request indexing for Tier 2 URLs (see public/deploy-indexing-order.json)
- [ ] Check for any Crawled - currently not indexed warnings in Coverage report. If present, it usually means page quality or internal link depth issue.

## Day 14 post-deploy actions

- [ ] Check which Tier 3 blog posts Google discovered via sitemap
- [ ] For any Tier 3 posts still not indexed after 14 days, submit manually
- [ ] Check Bing indexed status for core pages
- [ ] Search "Richie Reach" in Google incognito and note position of richiereach.tech

## Other search engines to submit to

Yandex (covers Eastern Europe, some AI use): https://webmaster.yandex.com - submit sitemap.

IndexNow protocol (covers Bing, Yandex, Seznam simultaneously): the key file is in public/ and scripts/submit-indexnow.ts is ready for manual post-deploy submission.

DuckDuckGo: Uses Bing's index. No separate submission needed.

Perplexity: Crawls the web. No separate submission. Ensure ClaudeBot and PerplexityBot are allowed in robots.txt.

ChatGPT Search: Uses search partners and web retrieval. Bing submission and public citations help discovery.

Claude: Anthropic crawls via Claude-SearchBot. It is already allowed in robots.txt.
