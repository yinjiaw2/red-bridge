# RedBridge Consulting — External Platform SEO Tasks

These tasks cannot be done in code. Complete them manually in their respective platforms after deploying to `redbridge-consulting.com.au`.

---

## 1. Google Search Console (GSC)

**Priority: Critical — do this first after going live on the final domain.**

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add `redbridge-consulting.com.au` as a new property (use "Domain" type, not URL prefix)
3. Verify ownership via Cloudflare DNS TXT record
4. Submit the sitemap: `https://redbridge-consulting.com.au/sitemap.xml`
5. Monitor weekly:
   - Coverage report → fix any "Error" or unexpected "Excluded" URLs
   - Core Web Vitals report → resolve any "Poor" URLs
   - Search Performance → track impressions, CTR, average position for target keywords

---

## 2. Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add `redbridge-consulting.com.au`
3. Import settings from GSC (Bing supports this directly — saves time)
4. Submit sitemap: `https://redbridge-consulting.com.au/sitemap.xml`

---

## 3. Google Analytics 4 (GA4)

**Your GA4 ID `G-B7DWL6EMN4` is already wired in the code.**

1. In GA4 → Admin → Data Streams → confirm your stream is active for `redbridge-consulting.com.au`
2. Set up Conversions:
   - Mark `page_view` as active
   - Create a `generate_lead` conversion for booking form submissions
3. Link GA4 to Google Ads (if running paid campaigns)
4. Enable Enhanced Measurement (automatic scroll, outbound click, file download tracking)

---

## 4. Meta Events Manager (Pixel + CAPI)

**Your Pixel ID `1603950367696460` is already wired in the code.**

1. Log in to [business.facebook.com](https://business.facebook.com) → Events Manager
2. Select your Pixel → verify PageView events are firing after deployment
3. Use the "Test Events" tool to confirm real-time event receipt
4. **Important — CAPI token**: The `META_PIXEL_CAPI_TOKEN` in your `.env` may be a short-lived user access token. For production, generate a **System User Access Token** (does not expire):
   - Business Settings → System Users → Create System User → Generate Token (select `ads_management` + `ads_read` permissions)
   - Replace the token in your Cloudflare/hosting environment variables
5. Configure **Aggregated Event Measurement** (required for iOS 14+ tracking):
   - Events Manager → Aggregated Event Measurement → Configure Web Events
   - Add your top 8 events in priority order: `PageView`, `Lead`, `Contact`, `ViewContent`, etc.
6. Test with Meta Pixel Helper Chrome extension

---

## 5. Google Business Profile

1. Go to [business.google.com](https://business.google.com)
2. Claim or create the listing for **RedBridge Consulting**
3. Verify via postcard, phone, or email
4. Complete the full profile:
   - Business name: RedBridge Consulting
   - Category: Immigration Consultant / Career Counselor
   - Address: Level 9, Tower 3, 18-38 Siddeley Street, Docklands VIC 3008
   - Phone: 03 9961 7301
   - Website: `https://redbridge-consulting.com.au`
   - Hours: Add your opening hours
   - Add photos: office exterior, team, logo
5. Post updates regularly (minimum monthly)
6. Respond to all reviews (positive and negative) within 48 hours

---

## 6. Cloudflare Pages Build Configuration (CRITICAL — fix before deploy)

The build was failing because of a wrong root directory setting and a deprecated adapter. Both are now fixed in the codebase. Update these settings in Cloudflare Pages → your project → Settings → Build & Deploy:

| Setting | Old value (broken) | New value |
|---|---|---|
| **Root directory** | *(empty)* | `red-bridge-ui` |
| **Build command** | `npx @cloudflare/next-on-pages@1` | `npm run build:cloudflare` |
| **Output directory** | `.vercel/output/static` | `.open-next` |
| **Node.js version** | any | 20.x |

### Environment Variables (add in Cloudflare Pages → Settings → Environment Variables)

These must be added manually — they are NOT read from the `.env` file:

| Variable | Value | Environment |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | `G-B7DWL6EMN4` | Production + Preview |
| `NEXT_PUBLIC_META_PIXEL_ID` | `1603950367696460` | Production + Preview |
| `META_PIXEL_CAPI_TOKEN` | *(your CAPI token from .env)* | Production only |
| `NEXT_PUBLIC_BOOKING_SHEET_URL` | *(your Google Sheets URL from .env)* | Production + Preview |

### Domain Setup (after build is green)

1. **DNS**: In Cloudflare DNS, add a CNAME pointing `redbridge-consulting.com.au` to your Pages project URL
2. **Custom domain**: Cloudflare Pages → Custom domains → Add `redbridge-consulting.com.au`
3. **HTTPS**: Enabled automatically by Cloudflare Pages
4. **www redirect**: Add a Cloudflare Redirect Rule: `www.redbridge-consulting.com.au` → `redbridge-consulting.com.au` (301)

### Post-deploy checks

5. **Caching**: Enable Cloudflare caching for static assets
6. **Speed → Minification**: Enable HTML, CSS, JS minification
7. **Analytics**: Enable Cloudflare Web Analytics as a secondary privacy-first analytics source

---

## 7. Social Media Profile Consistency

Ensure the following are consistent with the website NAP (Name, Address, Phone):

| Platform | Profile | Action |
|---|---|---|
| Facebook | [RedBridge Consulting](https://www.facebook.com/people/RedBridge-Consulting/61587635078885/) | Add full address, phone, website URL |
| Instagram | [@redbridgeconsulting](https://www.instagram.com/redbridgeconsulting/) | Add website URL in bio |
| Xiaohongshu (RedNote) | Existing profile | Ensure consistent business name |
| LinkedIn | Create if not exists | Add company page with full description |

---

## 8. Australian Business Directory Citations

List RedBridge on these directories for local SEO authority:

- **Yellow Pages AU** — [yellowpages.com.au](https://www.yellowpages.com.au)
- **True Local** — [truelocal.com.au](https://www.truelocal.com.au)
- **Hot Frog AU** — [hotfrog.com.au](https://www.hotfrog.com.au)
- **Yelp AU** — [yelp.com.au](https://www.yelp.com.au)
- **StartLocal** — [startlocal.com.au](https://www.startlocal.com.au)

Use identical NAP on each:
- Name: RedBridge Consulting
- Address: Level 9, Tower 3, 18-38 Siddeley Street, Docklands VIC 3008
- Phone: 03 9961 7301

---

## 9. Rich Results Testing (post-launch)

After going live on `redbridge-consulting.com.au`:

| Tool | URL | What to check |
|---|---|---|
| Google Rich Results Test | search.google.com/test/rich-results | FAQ schema on `/services/faq`, Organization on homepage |
| Schema.org Validator | validator.schema.org | Organization + WebSite schemas |
| Facebook Sharing Debugger | developers.facebook.com/tools/debug | OG tags on each page |
| Twitter Card Validator | cards-dev.twitter.com/validator | Twitter card on each page |
| PageSpeed Insights | pagespeed.web.dev | Core Web Vitals for mobile and desktop |

---

## 10. Rank Tracking Setup

Set up keyword rank tracking in Ahrefs, Semrush, or a free alternative (Google Search Console Performance tab):

**Target keywords (priority):**
- `skilled migration consultant Melbourne`
- `482 visa employer sponsorship Melbourne`
- `190 visa Victoria state nomination`
- `189 visa Australia consultant`
- `international student career Australia`
- `migration consultant Docklands`
- `employer sponsored visa 482 Sydney`
- `澳洲移民顾问` (Chinese: Australia migration consultant)
- `澳洲就业 482签证` (Chinese: Australia employment 482 visa)

---

## 11. OG Image (Recommended Future Task)

The current OG image uses the RedBridge logo (160×44px). For best social sharing previews on Facebook, LinkedIn, and iMessage, create a **1200×630px branded image** that includes:
- RedBridge logo
- Tagline: "Australia Skilled Migration & Career Launch"
- Background: branded red (#b3131b) or hero photo from the site

Replace `/rb-logo.png` references in the metadata with the new image path once ready.

---

*Document generated: 2026-04-22. Review after each major site update.*
