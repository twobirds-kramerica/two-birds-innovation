# Two Birds Innovation — Design System

**Generated:** 2026-06-08 (S-TBI-IMPECCABLE audit + S-TBI-INLINE-EXTRACT)
**Register:** Brand (company website — design IS the product)
**Theme:** Deep space — dark navy background, teal accents, light grey text

---

## Colour Tokens

All tokens defined in `css/style.css :root`.

| Token | Value | Use |
|-------|-------|-----|
| `--space-900` | `#0c0a1d` | Page background |
| `--space-800` | `#13102e` | Section backgrounds (Results, FAQ) |
| `--space-700` | `#1a1640` | Cards, inputs |
| `--space-600` | `#252050` | Hover states, deep card fills |
| `--teal-500` | `#14b8a6` | Primary brand — buttons, badges, borders |
| `--teal-400` | `#2dd4bf` | Hover/active teal, logo, links |
| `--teal-300` | `#5eead4` | Light teal — link hover states |
| `--teal-200` | `#99f6e4` | Reserved (unused currently) |
| `--teal-100` | `#ccfbf1` | Reserved (unused currently) |
| `--white` | `#ffffff` | H1/H2, card headings, button text |
| `--grey-300` | `#d1d5db` | Body text |
| `--grey-400` | `#9ca3af` | Secondary text, card subheadings |
| `--grey-500` | `#6b7280` | Muted text (price-term, footer, contact-note) |

### Colour Strategy: Committed

One saturated colour (teal) carries 30–40% of the visual surface. Dark navy dominates; teal punctuates interactive elements, headings, and borders. No gradient text. No glassmorphism (sticky header blur is functional, not decorative).

### Colour Usage Notes

- **On dark backgrounds:** text is `--grey-300` (body), `--white` (headings), `--grey-400` (secondary)
- **On teal elements:** text is `--space-900` (dark for contrast)
- **Links:** `--teal-400`; hover: `--teal-300` + underline
- **Card borders:** `rgba(255,255,255,0.06)` (neutral, recedes); featured card: `2px solid var(--teal-500)`

---

## Typography

| Property | Value |
|----------|-------|
| Font family | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif` |
| Base size | `17px` |
| Line height | `1.7` |
| Sovereignty | L1 — system fonts only, no external network call |

### Scale

| Element | Size | Weight |
|---------|------|--------|
| h1 (hero) | `3.2rem` (mobile: 2.2rem → 1.8rem) | 800 |
| h2 (sections) | `2rem` (mobile: 1.5rem → 1.6rem) | 700 |
| h3 (cards) | `1.1–1.3rem` | 600 |
| Body | `17px` | 400 |
| Small/meta | `0.9rem` | 400 |
| Buttons | `1rem` | 600 |
| Featured badge | `0.8rem` | 700 |

---

## Spacing

| Token/Usage | Value |
|-------------|-------|
| Section padding | `80px 0` (mobile: 60px → 3rem → 2rem) |
| Container max-width | `1100px` (wide: 1200px) |
| Container padding | `0 24px` (mobile: 0 16px → 0 12px) |
| Card border-radius | `12px` (`--radius`) |
| Card padding | `32–40px` (desktop), `20–28px` (mobile) |
| Grid gap | `24–32px` (desktop), `16px` (mobile) |
| Button padding | `14px 28px` (standard), `18px 40px` (large) |

---

## Components

### Buttons

```css
/* Primary */
.btn-primary { background: var(--teal-500); color: var(--space-900); border-radius: 8px; }
.btn-primary:hover { background: var(--teal-400); transform: translateY(-1px); }

/* Secondary (ghost) */
.btn-secondary { background: transparent; color: var(--teal-400); border: 2px solid var(--teal-500); }

/* Profile CTA (pill) */
.btn-profile { background: white; color: #0f1a30; border-radius: 50px; padding: 0.85rem 2.5rem; }
```

Touch targets: `min-height: 44px` enforced on mobile via `.btn` override.

### Cards

Three card patterns share the same base: `rgba(255,255,255,0.04)` background + `1px rgba(255,255,255,0.1)` border + `border-radius: 12px` + hover `border-color: var(--teal-400); transform: translateY(-2px)`.

**Warning:** `.problem-card`, `.tool-card`, `.why-card` are structurally identical — this was flagged in the /impeccable audit as approaching the identical card grid anti-pattern. Future sprints should differentiate at least one pattern.

### Pricing Cards

Contained in `.pricing-card` (space-700 bg, 1px neutral border) or `.pricing-card.featured` (2px teal-500 border + `.featured-badge` chip). Price: white, 2.8rem, 800 weight. No side-stripe border violations.

### FAQ Accordion

Native `<details>/<summary>`. Custom `::after` content (`+` / `−`) replaces browser default. Summary: white, 1.05rem, 600 weight. Body: grey-400.

### Counter Cards

`.counter-card` with `.counter-number` (3rem, 800, teal-400) + `.counter-label` (0.9rem, grey-400). Animated on scroll entry via `setInterval` in `js/main.js` — respects `prefers-reduced-motion` (skips to final value).

**Warning:** 4× identical counter cards = hero-metric template (impeccable absolute ban). Aaron shape decision required.

### Navigation

- Desktop: horizontal flex nav, grey-400 links, teal-400 on hover
- Mobile (≤768px): hidden nav slides in on `.nav-toggle` click, `aria-expanded` synced
- Nav toggle: `44×44px` minimum touch target (WCAG 2.5.5)
- Sticky header: `rgba(12,10,29,0.92)` + `backdrop-filter: blur(12px)` — functional, not decorative

---

## Motion

| Property | Value |
|----------|-------|
| Button hover | `transform: translateY(-1px)`, `0.2s` |
| Card hover | `transform: translateY(-2px)`, `0.3s` (border-color), `0.2s` (transform) |
| Nav transition | Skip link `top 0.2s ease` |
| Scroll behaviour | `scroll-behavior: smooth` on `html` |
| Counter animation | `setInterval` 1500ms, respects `prefers-reduced-motion` |

Ease-out preferred. No bounce, no elastic.

---

## Schema and SEO

- `FAQPage` JSON-LD (5 questions)
- `LocalBusiness` JSON-LD (name, founder, address, priceRange, email, phone)
- OG tags: title, description, type, url, locale, image (1200×630)
- `lang="en-CA"`, `canonical`, `robots: index, follow`
- Skip link: `<a href="#main">` → `<main id="main">` (WCAG 2.4.1)

---

## Anti-Pattern Status (from /impeccable audit 2026-06-08)

| Pattern | Status |
|---------|--------|
| Side-stripe borders | ✅ None found |
| Gradient text | ✅ None found |
| Glassmorphism | ✅ None (sticky header blur is functional) |
| Hero-metric template | ⚠️ Counter grid — needs Aaron shape decision |
| Identical card grids | ⚠️ 3× same card base — needs differentiation |
| Border-left ban | ✅ None found |

---

## §9 Consulting IA — Phase 2 Blueprint

**Status:** Draft — Phase 1 research complete 2026-06-19. Blocked on Aaron inputs (see checklist below). Do not build Phase 2 until Aaron approves.

### Phase 2 Section Order

| # | Section | Rationale |
|---|---------|-----------|
| 1 | Hero (split) | Keep existing layout; update copy with outcome-first framing |
| 2 | Problem / Context | "You've been told to do something with AI" — validates the visitor's situation before pitching |
| 3 | What You Get | Two fixed-price services with prices visible; remove ambiguity |
| 4 | How It Works | 3-step process (Discovery → Audit → Deliverable); reduces anxiety for institutional buyers |
| 5 | Results / Case Studies | Named outcome or anonymised sector + metric; P0 trust signal for B2G |
| 6 | Who We Serve | Library/nonprofit + SWON SME; geographic anchor |
| 7 | Pricing | $2,500 CAD flat + $4,000/month; NHSP/grant alignment language |
| 8 | Data Safety | 2-line Canadian data sovereignty statement; PIPEDA/MFIPPA language |
| 9 | FAQ | Existing 5 questions + new: "Is my data stored?", "Do you work with library boards?", "What if I need to justify this to a funder?" |
| 10 | CTA Strip | Primary + secondary; risk-reduction copy beneath |
| 11 | Footer | Unchanged |

### CTA Hierarchy

- **Primary CTA:** "Book a Discovery Call" (Calendly link, 30 min, free)
- **Secondary CTA:** "See our work" (links to DCC, KevsCasa, Career Coach as build-proof)
- **Near-CTA risk reduction (below primary button):** "Fixed price. 30-day delivery. No contract."
- **Hero sub-CTA:** Same primary CTA; do not add a second action in the hero

### Gap-to-Priority Table (from customer-positioning-draft.md)

| Gap | Current site | Priority |
|-----|-------------|---------|
| No case study / outcome section | Missing entirely | P0 — institutional buyers will not proceed without this |
| No "How it works" process section | Missing | P0 — fixed-price audit needs step-by-step to reduce anxiety |
| No pricing transparency | Missing | P1 — librarians and nonprofit PDs need a number before contacting |
| No "Is my data safe?" signal | Missing | P1 — PIPEDA and MFIPPA sensitivity for library/nonprofit audience |
| No grant/NHSP language | Missing | P1 — connects $2,500 audit to existing budget lines |
| No Canadian data sovereignty statement | Missing | P2 — reinforces L1-L3 stack posture as a feature |
| Counter grid is hero-metric template | ⚠️ Present | P2 — impeccable ban; needs Aaron shape decision |
| Hero CTA missing risk-reduction copy | Partial | P2 — add "Fixed price. 30-day delivery. No contract." near CTA |

### Phase 2 Blocked-On (Aaron inputs required before build)

| # | Item | Who | Priority |
|---|------|-----|---------|
| 1 | 1 named client outcome or pilot reference (even anonymised sector + metric) | Aaron | P0 |
| 2 | Aaron photo for bio section | Aaron | P1 |
| 3 | NHSP/CanCode grant alignment language approved | Aaron | P1 |
| 4 | Pricing confirmed public ($2,500 and $4K/month publishable?) | Aaron decision | P1 |
| 5 | "Is my data safe?" 2-line answer | Aaron | P1 |
| 6 | Counter grid direction: (A) single bold stat + context, (B) outcomes list, or (C) delete | Aaron | P2 |
| 7 | Phase 2 IA order approved (this section) | Aaron | Gate |

### Voice Rules for Phase 2 Copy

Do:
- Geographic anchor: "Southwestern Ontario" named explicitly
- Outcome-first: "Your team saves 4 hours a week" not "We leverage cutting-edge AI"
- Build proof: link to DCC, KevsCasa, Clarity as delivery evidence
- Fixed-price framing: "Scoped. Delivered. Done."

Avoid:
- "Cutting-edge," "leverage," "synergy," "transformative," "next-level"
- Americanisms ("defense" → "defence", "program" → "programme" in educational contexts)
- "AI pioneer" or any unverifiable superlative
- Toronto-scale enterprise language
- Passive claims: "we help organisations" → "Aaron builds" / "your team gets"
