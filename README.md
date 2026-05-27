# asplfusion.com

The corporate website for **Agnira Sanlayan Pvt. Ltd. (ASPL Fusion)** — an
applied plasma and neutron-systems company working on accelerator-based BNCT,
domestic medical-isotope production, and industrial neutron applications,
within India's established regulatory and safety frameworks.

Live at **<https://asplfusion.com>**. Served by GitHub Pages from `main`.

## Stack

Zero build step, zero CDN dependencies. Hand-coded so the site loads cleanly
behind enterprise and government firewalls (it previously did not, when it
used Tailwind / Font Awesome CDNs).

- HTML5 / CSS3 / vanilla ES6
- Single external dependency: IBM Plex Sans (Google Fonts)
- Contact and application forms: [Formspree](https://formspree.io) +
  Google reCAPTCHA v3
- Structured data: JSON-LD (Organization, Article, Service, FAQPage,
  BreadcrumbList, JobPosting)

## Local development

```bash
python3 -m http.server 8090 --directory .
```

Open <http://localhost:8090>. No build step — edit a file and refresh.

## Layout

```
/                       Homepage (mission, applications, technology, team, FAQ, contact)
/insights/              Long-form notes on neutron science and applied infrastructure
/applications/          12 application landing pages (BNCT, medical isotopes, NDE, etc.)
/about/positioning.html "What we are / what we are not"
/about/national-context.html  India's regulatory and policy frameworks
/media/                 Press briefing
/careers.html           Dynamic ATS — loads jobs/active/*.json
/jobs/active/           Active job postings (JSON-driven)
/data/team.json         Structured team bios (powers the team modal)
```

## Key files

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `style.css` | Full design system (CSS custom properties in `:root`) |
| `script.js` | Particle animation, cookie consent, contact form, scroll reveal, counters |
| `careers.js` | Dynamic job loader + application modal + JobPosting JSON-LD injection |
| `team-modal.js` | Team-card click → bio modal |
| `reading-progress.js` | Scroll progress bar on insights articles |
| `sitemap.xml`, `robots.txt`, `CNAME`, `humans.txt` | Hosting / SEO |

## Editorial constraints

Content on this site is written against an internal Narrative Constitution.
Three rules that affect anyone editing copy:

1. **No "first of its kind / breakthrough / revolutionary / moonshot"** framing.
2. **No financial figures, valuations, return projections, or commercial
   timelines.** Those live in private investor materials, not on the public
   site.
3. **No peer comparisons** against named companies, labs, or national programmes.

A site-wide grep enforces the first two; CI would too if there were CI.

## Brand

- Colors: Navy `#133E68`, Blue `#1577BA`, Teal `#3BBFBF`, Dark `#0B1F33`
- Typography: IBM Plex Sans (Latin subset, weights 300–700)
- Tone: restrained, engineering-led, institutional

## Accessibility

- WCAG 2.1 AA target
- Skip-to-main link on every page
- `prefers-reduced-motion` respected (animations and transitions opt-in)
- Focus-visible outlines (2px teal)
- Focus trap + restoration on modal open/close
- Touch targets ≥ 44×44 on mobile
- Inline SVG icons (no emoji-as-icon, no icon fonts)
- 330+ ARIA attributes site-wide
- Full keyboard navigation

## Deploying

GitHub Pages auto-publishes from `main` within roughly 30 seconds of a push.
Apex domain `asplfusion.com` is configured via the `CNAME` file.

Stylesheet and script references carry a `?v=…` query string. Bump it in
the same commit as any CSS or JS change so visitors with cached assets see
the new version immediately.

## Project links

- Company: <https://asplfusion.com>
- Contact: <info@asplfusion.com>
- Careers: <https://asplfusion.com/careers.html>

## License

Site content (text, images, design, structured data) © Agnira Sanlayan
Pvt. Ltd. All rights reserved.

The repository is public so the site can be served by GitHub Pages. It is
not an invitation to copy the content or fork the site.
