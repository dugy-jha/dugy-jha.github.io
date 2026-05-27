# Contributing to asplfusion.com

Thanks for taking the time to consider a change to the ASPL Fusion website.

## Workflow

The `main` branch is **protected**. Only the project owner pushes directly.
Everyone else uses the fork → branch → pull request flow:

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally.
3. Create a feature branch off `main`:
   ```bash
   git checkout -b descriptive-branch-name
   ```
4. Make your changes. Run the site locally to verify:
   ```bash
   python3 -m http.server 8090
   ```
   Open <http://localhost:8090>.
5. Commit with a clear message describing **why**, not just **what**.
6. Push your branch to your fork.
7. Open a **pull request** against `dugy-jha/dugy-jha.github.io:main`.
   The PR template will appear automatically.

Pull requests need **1 approving review** from the project owner before
they can be merged. Force pushes to `main` and branch deletion are
disabled.

## What kinds of contributions are welcome

| Welcome | Please discuss first |
|---|---|
| Typo fixes | New pages |
| Broken-link fixes | Voice / tone changes |
| Accessibility improvements (a11y) | Adding financial figures, valuations, or commercial timelines |
| Performance improvements (LCP, CLS) | Peer comparisons against named companies / labs |
| Schema.org / SEO refinements | "First-of-its-kind / breakthrough / revolutionary / moonshot" framing |
| Editorial sharpening within the existing voice | Removing any of the above guardrails |

If your change touches **copy**, the [Editorial constraints](README.md#editorial-constraints)
section of the README applies. The site sits within an internal Narrative
Constitution — changes that breach it cannot be merged regardless of
review.

## Coding conventions

- **Zero-dependency**. No frameworks, no build steps, no CDN libraries.
  Hand-coded HTML / CSS / vanilla ES6. If a change needs a build tool,
  open an issue first to discuss.
- **CSS**: use the design tokens in `:root` (`--navy`, `--blue`, `--teal`,
  `--sp-*`, `--t-*`). Don't introduce magic numbers without a token.
- **Accessibility**: every interactive element needs a visible focus
  state; touch targets ≥ 44×44 on mobile; images need `alt`; respect
  `prefers-reduced-motion`.
- **Cache-bust**: when `style.css` or any `*.js` changes, bump the
  `?v=…` query string across the site in the same commit.
- **JSON-LD**: if visible page wording changes, mirror the change in
  any corresponding JSON-LD blocks (Article, Service, FAQPage,
  BreadcrumbList, JobPosting).

## Commit messages

- Imperative subject line, ≤ 72 chars: "Fix broken canonical on /media/"
  not "Fixed broken canonical".
- A short body explaining the **why** when it isn't obvious from the diff.
- No need for trailers — squash-merge handles attribution.

## Reporting issues

Open a GitHub issue. Include:
- The page URL where you saw the problem.
- What you expected vs what you saw.
- Browser, OS, viewport width if relevant (especially for a11y / layout
  bugs).

## Contact

For questions that don't fit an issue or PR: <info@asplfusion.com>.
