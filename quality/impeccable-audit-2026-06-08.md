# Two Birds Innovation — /impeccable Audit Report

**Date:** 2026-06-08
**Sprint:** S-TBI-IMPECCABLE
**Method:** Dual assessment — LLM design review (Assessment A) + code scan (Assessment B)
**Register:** Brand (company website — design IS the product)

---

## Technical Health Score

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 3/4 | Skip link ✅, aria-label on nav ✅, aria-expanded on mobile toggle ✅. Counter animation lacked prefers-reduced-motion (FIXED). Nav toggle min touch target added (FIXED). |
| 2 | Performance | 3/4 | System fonts (L1 sovereign — no preload needed). No external CDN for CSS/JS. Counter animation scroll-triggered. |
| 3 | Responsive Design | 3/4 | Two breakpoints (768px + 420px). Counter grid 4→2, pricing 2→1. Touch targets correct on mobile via CSS. |
| 4 | Theming | 2/4 | Good token system (--space-*, --teal-*) in :root. Phase-3 CSS had 13 hardcoded hex values in property values (FIXED → var(--teal-400) / var(--teal-300)). Inline style block on hero tagline + #work-with-us section (needs CSS extraction — deferred). |
| 5 | Anti-Patterns | 1/4 | Counter grid = hero-metric template (4× big number + small label). Three identical card grid patterns (problem-card, tool-card, why-card — each tolerable alone, together signals template assembly). |
| **Total** | | **12/20** | **Acceptable — significant design work needed** |

---

## Design Health Score (Nielsen's 10 Heuristics)

| # | Heuristic | Score | Evidence |
|---|-----------|-------|---------|
| 1 | Visibility of System Status | 3/4 | Counter animation shows progress; mobile nav state tracked via aria-expanded. prefers-reduced-motion now respected. |
| 2 | Match System / Real World | 3/4 | CAD pricing, geographic anchor (Southwestern Ontario), service names clear. |
| 3 | User Control and Freedom | 3/4 | Skip link, scroll-based nav, multiple contact paths (Cal.com, email, phone, LinkedIn). |
| 4 | Consistency and Standards | 2/4 | Three card types (problem/tool/why) use structurally identical markup and style. Inline style pollution in #work-with-us. |
| 5 | Error Prevention | 3/4 | No forms; external links have `rel="noopener"`. Fallback email + phone if cal.com down. |
| 6 | Recognition Rather than Recall | 3/4 | Nav labels and CTA labels clear ("Book a Free Call", "Start an Audit"). |
| 7 | Flexibility and Efficiency | 3/4 | Skip link for keyboard users; multiple paths to contact. |
| 8 | Aesthetic and Minimalist Design | 2/4 | Hero-metric counter grid (4× identical). Three section-level identical card patterns. #work-with-us visually disconnected from surrounding dark sections (different background approach). |
| 9 | Help Recognise / Recover Errors | 3/4 | No forms. Fallback contact info present. |
| 10 | Help and Documentation | 2/4 | FAQ covers 5 common objections. No service detail page. No pricing comparison beyond current page. |
| **Total** | | **27/40** | **Acceptable** |

---

## Anti-Patterns Verdict

**BORDERLINE FAIL (2 tells)**

1. **Hero-metric template.** `.counter-card` repeats big number (3rem, 800 weight, teal) + small label × 4. This IS the banned pattern: "big number, small label, supporting stats." The content is real (actual module counts) but the visual treatment is the SaaS dashboard cliché.

2. **Identical card grid × 3.** Problem section (3×), Tools section (4×), Why section (3×) all use the exact same card base: `rgba(white, 0.04)` background + `rgba(white, 0.1)` border + hover lift. Each alone is tolerable; three in sequence signals template assembly.

---

## Fixes Applied in This Sprint

| Fix | Files | Severity |
|-----|-------|---------|
| `prefers-reduced-motion` check in counter animation — skips animation, sets final value directly | `js/main.js` | P2 |
| Nav toggle `min-height: 44px; min-width: 44px` (WCAG 2.5.5 touch target) | `css/style.css` | P2 |
| 13× hardcoded `#2dd4bf` → `var(--teal-400)`, 4× `#5eead4` → `var(--teal-300)` in Phase-3 CSS | `css/style.css` | P3 |

---

## Remaining Issues — Needs Aaron Input

### Needs Shape Approval (design decisions)

**S-TBI-COUNTER-REDESIGN** — Hero-metric counter redesign
- Current: 4× identical big-number counter cards
- Problem: textbook SaaS hero-metric template (absolute ban)
- Direction options: (A) replace with a prose section listing portfolio evidence with links, (B) keep the 4 facts but as a table/list rather than big-number cards, (C) use counters with more visual variety (different sizes/weights)
- No right answer without Aaron's preference on brand voice vs visual punch trade-off

**S-TBI-CARD-DIFFERENTIATION** — Differentiate 3 card grids
- Problem-card, tool-card, why-card all use the same visual structure
- Requires design decision: which section warrants cards vs list vs table vs no-card layout
- Cannot be done autonomously without knowing which section Aaron prioritises

### P3 — Autonomous (no approval needed)

- **Inline style extraction**: `#work-with-us` section (line 240–251) uses full inline styles. Extract to `.section-work-with-us` CSS class. No visual change, just code hygiene.

---

## Positive Findings

1. **Schema.org is excellent.** FAQPage + LocalBusiness JSON-LD, both complete with proper fields. Rare for a single-page site.
2. **Zero border-left violations** (checked full CSS — no side-stripe ban violations).
3. **System font stack** — L1 sovereign. No external font call, no FOUT risk.
4. **Skip link present and styled.** First focusable element, correct WCAG 2.4.1 implementation.
5. **FAQ with `<details>/<summary>`** — native accessible accordion, no JS focus-trap needed.
6. **Contact section provides 4 paths**: cal.com booking, email, phone, LinkedIn.
7. **OG image, canonical, robots, lang="en-CA"** — all present and correct.

---

## Recommended Next Sprints (priority order)

1. **Aaron decision**: counter redesign (hero-metric ban) — provide options above, Aaron picks direction
2. **Aaron decision**: card grid differentiation — which section changes first?
3. `S-TBI-INLINE-EXTRACT` — P3, autonomous, 15 min: extract #work-with-us inline styles to CSS class
4. Re-run `/impeccable audit` after counter + card redesign — target: 15/20 technical, 32/40 Nielsen
