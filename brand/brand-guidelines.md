# Two Birds Innovation — Brand Guidelines

**Version:** 1.0 (proposal) · **Date:** 2026-07-18 · **Author:** Fable brand sprint (S-TBI-BRAND-GUIDELINES)
**Status:** PROPOSAL awaiting Aaron's taste sign-off (DESIGN GATE). Nothing here changes the live site until approved.
**Scope:** Two Birds Innovation, the consulting brand (`two-birds-innovation` repo). Product sub-brands (DCC, Clarity, Career Coach, KevsCasa) keep their own identities per `v2-lab/css/tokens.css` header notes.

---

## 1. The Recommendation — teal vs a distinct brand colour

**Aaron's question:** does the current teal/emerald work as THE brand colour, or should the mark be a distinct colour that stands apart from generic "AI-default blue"?

**Recommendation: KEEP teal as the primary brand accent — and PAIR it with a warm amber secondary. Two birds, two colours. Confidence: 80%.**

### Why keep teal (not swap it out)

1. **Teal is not the generic-AI colour.** The documented "everyone looks the same" trap in 2025–26 AI branding is specifically **blue-to-purple gradients, glowing orbs, and neural-net geometry** — observers now mentally filter out purple-gradient AI pages as "generic AI sauce" ([Indie Hackers — The AI Purple Problem](https://www.indiehackers.com/post/the-ai-purple-problem-why-every-ai-brand-looks-the-same-6cb0aa2a02); [Mayk — Why AI branding makes your startup look generic](https://themayk.com/why-ai-branding-makes-your-startup-look-generic-and-how-to-fix-it/); [Metabrand — Branding for AI Startups 2026](https://www.metabrand.digital/learn/branding-for-ai-startups-trends)). Teal sits meaningfully off that axis: it reads *calm, clear, operational* rather than *cosmic AI*. Aaron's instinct ("don't be AI-default blue") is correct — but teal already isn't that colour. Swapping it would spend real brand equity to fix a problem the brand doesn't have.
2. **Teal is already deployed equity.** The live site, favicon, OG card, grants pages, and the v2-lab "Signal" token system (`v2-lab/css/tokens.css`, WCAG AA/AAA verified 2026-07-03) are all teal-on-deep-navy. A wholesale hue change would orphan all of that days after the v2 identity work was completed.
3. **Teal has verified accessibility headroom on the navy.** `#2DD4BF` on `#0c0a1d` = **10.48:1** (AAA); the whole ramp works (see Section 4). Most "distinctive" candidate hues (coral, warm red) fail or barely pass on this background — e.g. burnt orange `#E8590C` manages only 5.45:1.

### Why add a warm second colour (this is the actual fix)

Aaron's real concern is **warmth and humanity** — "operations + AI, human-first", not cold-tech. Research on consultancy branding says exactly this: warm accents (orange/amber family) signal *creativity, warmth, accessibility* and are what differentiate human-scale consultancies from corporate cool-blue sameness ([LaunchAdvisor — Warm vs Cool Brand Colors for Consultants](https://www.launchadvisor.co/guides/warm-vs-cool-brand-colors-consulting-any-type); [Ebaq Design — Consultancy Branding Examples 2026](https://www.ebaqdesign.com/blog/consultancy-branding)). The 2026 counter-trend to AI-slop branding is "organic elements, warm palettes, clean typography — no gradients, no glowing orbs, just look credible" ([Mayk](https://themayk.com/why-ai-branding-makes-your-startup-look-generic-and-how-to-fix-it/); [Logotouse — Tech Logo Trends 2026](https://www.logotouse.com/post/tech-company-logo-trends)).

The brand is literally named **Two Birds**. Give it two colours:

- **Teal bird — the system.** AI, automation, process, clarity. (`#2DD4BF` family)
- **Amber bird — the human.** Warmth, judgment, operations, the person you actually hire. (`#F0B429` family)

`#F0B429` on the navy = **10.46:1** (AAA) — nearly identical contrast strength to the teal, so the two birds are visually equal partners. Bonus: `#F0B429` is *already in the system* as the v2 dark-theme focus ring, so this promotes an existing token rather than inventing a new colour. Amber stays a **secondary** (~10% of colour surface): the icon mark's second bird, key highlights, "human touch" moments. Teal keeps buttons, links, and interactive chrome.

**What was considered and rejected:**
- **Full swap to a warm hue (coral/orange/gold primary):** maximum differentiation, but destroys deployed equity, and warm hues have weaker text-contrast headroom on the navy (burnt orange 5.45:1 vs teal 10.48:1). Would also collide with DCC's warm palette (`--dcc-warm #F4A261`), muddying the family. ~15% the right call.
- **Do nothing (teal only):** safe, but leaves the warmth/humanity gap Aaron named unaddressed, and the single-hue system is built on Tailwind's *default* teal ramp (`teal-400/500` are stock Tailwind values) — fine functionally, but "framework default" is its own quiet genericness. ~5% the right call.

**One honest caveat:** teal *is* common in SaaS generally. The differentiation in this system comes from the **pairing** (teal + amber on deep navy is rare), the typography (Space Grotesk + IBM Plex Sans — already distinct from every other Two Birds product), and an original two-bird mark — not from the teal alone.

---

## 2. Brand Essence and Positioning

**One line:** Two Birds Innovation is a human-first AI-and-operations consultancy — one Canadian operator who builds working systems, not decks.

**Positioning pillars** (grounded in the mentor-committee persona files at `C:\twobirds\two-birds-portfolio\hal-stack\personas\mentor-committee\`):

1. **Accessible, not technical-gatekeeping.** Kyle Balmer's stated brand promise — *"not technical? this will still work"* (`kyle-aiwithkyle.md`) — is the register for Two Birds client copy. SME owners in Southwestern Ontario should never feel lectured at.
2. **Anti-hype practitioner.** Nate B. Jones' positioning — the contrarian practitioner for "people who are tired of AI hype and want someone to tell them what actually matters" (`nate-b-jones.md`) — matches the trustworthy-not-hypey brief. The brand never promises magic; it shows shipped systems (HAL Stack, DCC, Clarity) as proof.
3. **Deliberate stand-out, not drift.** Dorie Clark's frame — reinvention as a *deliberate* brand move, building a following around ideas already held, monetising proof already built (`dorie-clark.md`) — is why this brand system exists at all: the consulting positioning is built on the portfolio's existing proof.
4. **Solo-founder honest scale.** Sabrina Ramonov's solo-founder principles (`sabrina-ramonov.md`): the brand presents as one excellent operator with leverage, not a fake "we". [NEEDS SOURCE — her files confirm solo-founder principles exist but the specific "never fake a team" phrasing is an extrapolation.]

**Voice:** Canadian English. Plain, specific, calm. Evidence over adjectives. Warm but never cute. See `hal-stack/protocols/voice-check.md` for the banned-word list — it applies to all brand copy.

**Personality in five words:** grounded · clear · warm · capable · Canadian.

---

## 3. Logo System

### 3.1 Wordmark

- **Text:** `Two Birds Innovation` (or short form `Two Birds` where space demands).
- **Typeface:** Space Grotesk, weight 600–700, tight tracking (−0.02em) — matching the v2 "Signal" display face. (Current live site renders the wordmark in the system stack; the proposal is to standardize on Space Grotesk as the brand face.)
- **Colour:** on dark — white `#FFFFFF` with "Birds" optionally in teal `#2DD4BF`; on light — ink `#14202E` with "Birds" optionally in deep teal `#0B665C`. Never gradient text.

### 3.2 Icon mark — "Two Birds" concept (original, no stock/IP)

**Concept in one line:** *one continuous stroke that splits into two birds in flight — a teal bird and an amber bird — rising together from a single origin point ("two birds, one stone").*

Construction: two simple swallow-like chevron forms — each bird is a single bent stroke (a wide, shallow "check-mark" wing shape), the lower bird teal, the upper bird amber, offset diagonally so their wingtips nearly touch, implying shared motion up-and-to-the-right (growth, without a chart cliché). Geometric, flat, no gradients in the mark itself, legible at 16 px.

**Inline SVG direction (proposal artwork, viewBox 0 0 64 64):**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Two Birds Innovation mark">
  <!-- lower bird — teal (the system) -->
  <path d="M8 44 L26 32 L44 40 L30 44 Z" fill="#2DD4BF"/>
  <!-- upper bird — amber (the human) -->
  <path d="M20 28 L38 16 L56 24 L42 28 Z" fill="#F0B429"/>
</svg>
```

(These are placeholder geometry values sketching the construction — final curves should be drawn with soft-bent single strokes rather than hard polygons; the composition, palette, and diagonal relationship are the spec.)

**Lockups:**
- **Horizontal:** mark at left, wordmark at right, gap = height of one bird stroke.
- **Stacked:** mark centred above wordmark (for square/social contexts).
- **Mark alone:** favicons, avatars, watermarks — only once the mark has been established alongside the wordmark on the site.

### 3.3 Mono treatments

- **On dark, one-colour:** both birds white, or both teal.
- **On light, one-colour:** both birds ink `#14202E`, or both deep teal `#0B665C`.
- **Never:** amber-only on white (contrast fails), colour-swapped birds (amber below teal), gradients, outlines, drop shadows.

---

## 4. Colour System

All ratios computed with WCAG 2.x relative luminance (verified this sprint; v2 values cross-checked against the verified table in `v2-lab/css/tokens.css`).

### 4.1 Core palette

| Role | Name | Hex | Notes |
|---|---|---|---|
| Primary surface (dark) | Deep Space Navy | `#0c0a1d` | Live-site page background (`--space-900`). v2 equivalent `#0B1120`. |
| Raised surface (dark) | Space 800 / 700 | `#13102e` / `#1a1640` | Section and card fills on dark. |
| Primary accent | Signal Teal | `#2DD4BF` | THE brand accent. Buttons, links, active states, teal bird. |
| Accent (deep) | Teal 500 | `#14B8A6` | Solid fills, borders on dark. |
| Accent (text-safe, light bg) | Deep Teal | `#0B665C` | Links/accent **text on light** (6.49:1 on `#F7F9FC`). Never use `#2DD4BF` as text on light — 2.02:1, banned. |
| Secondary accent | Warm Amber | `#F0B429` | The human counterpoint. Amber bird, highlights, focus rings on dark. ~10% of colour surface, max. |
| Amber (text-safe, light bg) | Deep Amber | `#92400E` | Amber-family **text on light** (6.72:1 on `#F7F9FC`). `#F0B429` itself is never text on light. |
| Light surface | Cloud | `#F7F9FC` | Light-theme page background (v2). White `#FFFFFF` for cards. |
| Ink | `#14202E` | Text on light (15.6:1 AAA). |
| Text on dark | `#d1d5db` body / `#FFFFFF` headings | 13.24:1 / 19.5:1. |
| Muted on dark | `#9ca3af` | 7.68:1 AAA. `#6b7280` (4.03:1) is **large-text/decorative only** on the navy — it fails AA for body text. |

### 4.2 Verified contrast (key pairs, on Deep Space Navy `#0c0a1d`)

| Foreground | Ratio | Verdict |
|---|---|---|
| Signal Teal `#2DD4BF` | 10.48:1 | AAA |
| Teal 500 `#14B8A6` | 7.83:1 | AAA |
| Warm Amber `#F0B429` | 10.46:1 | AAA |
| Body grey `#d1d5db` | 13.24:1 | AAA |
| White | 19.50:1 | AAA |
| Navy text on teal button `#2DD4BF` | 10.48:1 | AAA |
| Navy text on amber chip `#F0B429` | 10.46:1 | AAA |

### 4.3 Usage rules

- **Ratio:** navy/neutral surfaces ≈ 70–80% · teal ≈ 15–25% · amber ≤ 10%. Amber is punctuation, not paint.
- **Dark background (default brand context):** teal for all interactive elements; amber only for emphasis moments (one per viewport, roughly), the mark's second bird, and focus indicators.
- **Light background (documents, invoices, print):** ink text, Deep Teal `#0B665C` links/accents, Deep Amber `#92400E` sparingly. Bright teal and bright amber are **fill/decoration only** on light — never text.
- **Semantic colours** (from the portfolio design system, `two-birds-portfolio/design/DESIGN-SYSTEM.md`): success `#2D6A4F`, error `#E63946`, warning `#F4A261` — unchanged; keep semantic hues out of brand moments so amber never reads as "warning".
- **No gradients** in the logo mark or text. The favicon's existing subtle teal gradient is grandfathered until the bird mark replaces it (Section 6).

---

## 5. Typography

| Role | Face | Licence | Where |
|---|---|---|---|
| Display / headings / wordmark | **Space Grotesk** (variable 300–700) | SIL OFL — self-hosted (`v2-lab/fonts/`) | v2 identity, brand materials |
| Body / UI | **IBM Plex Sans** (variable 100–700 + italic) | SIL OFL — self-hosted | v2 identity, brand materials |
| Fallback stack | `'Segoe UI', 'Helvetica Neue', Arial, sans-serif` | system | always declared |

- The **current live v1 site uses the system font stack only** (no licensing issue — sovereignty L1, flagged for completeness). The v2 "Signal" pairing above is the brand-forward direction and is already licensed, self-hosted, and distinct from every other Two Birds product (DCC = Merriweather/Source Sans 3, Clarity = Fraunces/Inter, etc. — per `tokens.css` header).
- **Hierarchy:** display sizes per the v2 fluid scale (`--step-0` … `--step-4` in `tokens.css`). Headings Space Grotesk 600–700, tight (−0.02em); body IBM Plex Sans 400, line-height 1.6–1.7; UI labels 500.
- **Never:** more than two families in one artefact; fake bolds; all-caps body copy; proprietary web fonts (sovereignty rule).

---

## 6. Favicon and App-Icon Spec

**Current state:** `images/favicon.svg` exists (S-TBI-FAVICON, commit 22fad58) — a "TB" monogram in teal gradient on a navy rounded square, wired into all six live pages. It is a competent interim mark.

**Proposed end state:** replace the TB monogram with the **two-bird mark** once Aaron approves it:

- **Master:** SVG, birds on navy `#0c0a1d` rounded square (radius ≈ 22% of width), birds occupying ~64% of the tile width, optically centred.
- **Files:** `favicon.svg` (primary, theme-independent because the navy tile carries its own background); `favicon-32.png`, `favicon-16.png` (raster fallbacks — at 16 px, thicken bird strokes ~15% for legibility); `apple-touch-icon.png` 180×180 (navy tile, no transparency); `icon-512.png` for any future manifest.
- **HTML:** keep the existing `<link rel="icon" type="image/svg+xml" href="images/favicon.svg">` line — a drop-in file swap, zero page edits.
- **Dark-tab check:** the navy tile ensures visibility on both light and dark browser chrome; never ship a transparent-background favicon with navy birds.

---

## 7. Spacing, Clearspace, Minimum Sizes

- **Clearspace:** on all sides of any lockup, keep clear space ≥ the height of one bird stroke (≈ the cap-height of the wordmark's "T"). Nothing enters this zone — no text, rules, or edges.
- **Minimum sizes:** icon mark alone — 16 px (favicon floor); horizontal lockup — 120 px wide digital / 30 mm print; below that, use the mark alone.
- **Grid:** brand layouts use the v2 4 px spacing scale (`--s1`–`--s12` in `tokens.css`); cards radius 12 px (`--radius`), containers 1100–1120 px.
- **Placement default:** mark or lockup top-left; one brand moment per surface (don't repeat the mark in header *and* hero *and* footer at full colour — footer may use the mono treatment).

## 8. Do / Don't

**Do**
- Use teal for every interactive element; keep amber rare so it stays meaningful.
- Put the birds on navy or white/cloud only.
- Use the text-safe deep variants (`#0B665C`, `#92400E`) for any coloured text on light backgrounds.
- Keep photography/illustration warm and human (real people, real workplaces) — never robot/circuit-brain clip art ([Mayk](https://themayk.com/why-ai-branding-makes-your-startup-look-generic-and-how-to-fix-it/)).
- Write like a person; run voice-check on anything external.

**Don't**
- No blue-purple gradients, glowing orbs, neural-net meshes, or "sparkle AI" iconography — the documented generic-AI trap.
- No gradient text, no glassmorphism (per `DESIGN.md` colour strategy).
- No bright teal `#2DD4BF` or bright amber `#F0B429` as text on light surfaces.
- No recolouring the birds (they are teal + amber, in that spatial order), no outlining, no shadows, no rotation.
- No third accent colour. Two birds, two colours.

---

## 9. Sources and Research

**Internal (extracted, not guessed):**
- `C:\twobirds\two-birds-innovation\css\style.css` — live v1 palette (`--space-*`, `--teal-*`, greys).
- `C:\twobirds\two-birds-innovation\v2-lab\css\tokens.css` — v2 "Signal" identity, fonts, verified WCAG table.
- `C:\twobirds\two-birds-innovation\DESIGN.md`, `PRODUCT.md` — committed colour strategy, component rules.
- `C:\twobirds\two-birds-portfolio\design\DESIGN-SYSTEM.md` — portfolio-wide April 2026 system (its `#2EC4B6` secondary is the same teal family; its `#FF9F1C` accent orange is the precedent for a warm secondary — 9.50:1 on navy, also viable if Aaron prefers a more orange lean).
- `C:\twobirds\two-birds-innovation\images\favicon.svg` — current interim favicon.
- Mentor personas: `hal-stack\personas\mentor-committee\{kyle-aiwithkyle,nate-b-jones,dorie-clark,sabrina-ramonov}.md`.

**External:**
- [The AI Purple Problem — Indie Hackers](https://www.indiehackers.com/post/the-ai-purple-problem-why-every-ai-brand-looks-the-same-6cb0aa2a02)
- [Why AI branding makes your startup look generic — Mayk](https://themayk.com/why-ai-branding-makes-your-startup-look-generic-and-how-to-fix-it/)
- [Branding for AI Startups: 2026 Trends — Metabrand](https://www.metabrand.digital/learn/branding-for-ai-startups-trends)
- [Warm vs Cool Brand Colors for Consultants — LaunchAdvisor](https://www.launchadvisor.co/guides/warm-vs-cool-brand-colors-consulting-any-type)
- [Consultancy Branding Examples 2026 — Ebaq Design](https://www.ebaqdesign.com/blog/consultancy-branding)
- [Tech Company Logo Trends 2026 — Logotouse](https://www.logotouse.com/post/tech-company-logo-trends)
- [Consulting Website Examples for Solo Consultants — Melisa Liberman](https://www.melisaliberman.com/blog/consulting-website-examples)

---

## Decisions awaiting Aaron

1. **Approve/reject the teal + amber two-bird direction** (Section 1). If rejected, the fallback question is: teal-only (status quo) or a full warm-hue rebrand?
2. **Approve the icon-mark concept** (Section 3.2) before any final SVG drawing sprint.
3. **Amber shade preference:** `#F0B429` (golden, already a v2 token) vs `#FF9F1C` (more orange, the April 2026 portfolio accent). Both pass AAA on the navy.
4. **Favicon swap timing:** keep TB monogram until the bird mark is drawn and approved, then drop-in replace.
5. **Standardize the live v1 site on Space Grotesk/IBM Plex** (currently system stack) — a separate build sprint if approved.
