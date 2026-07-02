# Two Birds Innovation — Company Site Product Definition
**Last updated:** 2026-06-05 (S-COMPANY-PROFILE)
**Repo:** twobirds-kramerica/two-birds-innovation (GitHub Pages)
**Status:** Live — not yet /impeccable audited (AUDIT.md rigor audit exists from 2026-04-21)

---

## What This Product Is

Public-facing company brand site for Two Birds Innovation. Serves three audiences:
1. **Southwestern Ontario SME owners** — evaluating the AI Workflow Audit (CA$2,500) or Fractional AI Leadership (CA$4,000/month) services
2. **Grant reviewers and institutional partners** — verifying organisational legitimacy, products, and founder background
3. **Library and settlement agency partners** — evaluating DCC and KevsCasa for programme adoption

---

## Design System

**Theme:** "Deep space" — dark background, teal accents, white/light-grey text.

### Colours
| Token | Value | Use |
|-------|-------|-----|
| `--space-900` | `#0c0a1d` | Page background |
| `--space-800` | `#13102e` | Section backgrounds |
| `--space-700` | `#1a1640` | Cards, borders |
| `--space-600` | `#252050` | Hover states |
| `--teal-500` | `#14b8a6` | Primary brand accent |
| `--teal-400` | `#2dd4bf` | Hover/active teal |
| `--teal-300` | `#5eead4` | Light teal text |
| `--grey-300` | `#d1d5db` | Body text |
| `--grey-400` | `#9ca3af` | Secondary text |

### Typography
- **Font family:** System font stack — `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- **No custom web fonts.** Font sovereignty: L1 (no external network call).
- **Base size:** 17px
- **Line height:** 1.7

### Spacing and Layout
- **Container max-width:** 1100px, centred, horizontal padding 1.5rem
- **Border radius:** 12px (`--radius`)
- **Sections:** `padding: 5rem 0` standard; hero `padding: 6rem 0 5rem`

### Components
- `.btn.btn-primary` — teal (`--teal-400`) background, dark text, `border-radius: 50px`, `font-weight: 700`
- `.btn.btn-secondary` — transparent with teal border
- `.pricing-card` — space-700 background, teal border-top on featured card
- `.tool-card` — space-700 background, hover lifts shadow
- `.why-card` / `.problem-card` — same card base
- `.faq-item` — `<details>/<summary>` native accordion, teal left-border on open

---

## Pages

| Page | File | Status |
|------|------|--------|
| Homepage | `index.html` | Live |
| Company profile (grants) | `grants/company-overview.html` | Built 2026-06-05 |

---

## Services Offered

| Service | Price | Format |
|---------|-------|--------|
| AI Workflow Audit | CA$2,500 flat | 30-day engagement, report delivered |
| Fractional AI Leadership | CA$4,000/month | 1 dedicated day/week, month-to-month |

---

## Free Products Featured

| Product | URL | Status |
|---------|-----|--------|
| Clarity | twobirds-kramerica.github.io/clarity/ | Live |
| Digital Confidence Centre | twobirds-kramerica.github.io/digital-confidence/ | Live |
| Career Coach | twobirds-kramerica.github.io/career-coach/ | Live |
| KevsCasa | kevins-apartment-search.pages.dev | Live |

---

## Accessibility Baseline

From AUDIT.md (2026-04-21):
- Skip link present ✅
- `<main>` landmark ✅
- Nav `aria-label` ✅
- `aria-expanded` on mobile nav toggle ✅
- axe-core CI: GitHub Actions `axe-core.yml` present ✅

**Known gaps (open):**
- Dark-theme colour contrast not programmatically verified (axe-core CI will surface)
- No `:focus-visible` styles — relying on browser defaults
- Animated counters do not respect `prefers-reduced-motion`

---

## Sovereignty

| Dependency | Level | Notes |
|-----------|-------|-------|
| GitHub Pages hosting | L2 | Free, swappable to Cloudflare Pages |
| System fonts | L1 | No network call |
| Cal.com booking link | L3 | Outbound link only; no embed |
| axe-core via Cloudflare CDN | L2 | `?qa=true` only; not a prod runtime dep |

---

## Brand Voice

- Direct, honest, no inflation
- Geographic anchor: Southwestern Ontario (not "Canada")
- Differentiator: "without the Toronto price tag"
- Philosophy: Essentialism + Lovability. Do fewer things, make each one matter.
- Motto: "Always forward. Never quit. Grow bravely. Support with care."
- Tone on company profile / grant pages: factual, pre-revenue, no unproven claims

---

## Design Gate Status

| Gate requirement | Status |
|-----------------|--------|
| PRODUCT.md exists | ✅ This file |
| /impeccable audit run this quarter | ✅ Done 2026-07-02 — `AUDIT-impeccable-2026-07-02.md` (scored 14/20; P1 = adopt self-hosted brand fonts; findings documented, not gate-blocking) |
| Shape brief approved (structural redesigns) | N/A — new page, not a structural redesign |
| Fonts verified SIL OFL | ✅ System fonts only — no external font files |
| Dark mode tested on Android Chrome | ❌ Pending Aaron verification |

*Note: `grants/company-overview.html` (S-COMPANY-PROFILE) was built with gate partially cleared (PRODUCT.md created same sprint). /impeccable audit and Android Chrome dark mode test are outstanding — file as Aaron actions.*
