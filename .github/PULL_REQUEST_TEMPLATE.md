<!--
Thanks for the PR. Please fill in the sections below.
See CONTRIBUTING.md for the full workflow.
-->

## What

<!-- One or two sentences. What does this change? -->

## Why

<!-- One or two sentences. Why is this change worth making? -->

## Pages affected

<!-- e.g. /, /careers.html, /insights/the-decay-tax.html, all 12 /applications/* -->

## Screenshots / before-after

<!-- For any visual change. Drag-drop images directly. -->

## Checklist

- [ ] Tested locally with `python3 -m http.server 8090`
- [ ] No console errors in the affected pages
- [ ] If CSS or JS changed: `?v=...` cache-bust query string bumped on every
      affected page
- [ ] If visible-page wording changed: corresponding JSON-LD blocks
      updated to match
- [ ] Accessibility unchanged or improved (focus states, ARIA, touch
      targets, `prefers-reduced-motion`)
- [ ] No financial figures, valuations, or commercial timelines added
- [ ] No "first-of-its-kind / breakthrough / revolutionary / moonshot"
      framing introduced
- [ ] No peer comparisons against named companies, labs, or programmes
- [ ] Constitution grep returns zero matches:
      `grep -rEi "revolutionary|breakthrough|first-of-its-kind|moonshot|guaranteed" .`
