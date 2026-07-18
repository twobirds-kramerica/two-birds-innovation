# Two Birds Innovation — Brand Guidelines

**Version:** 1.1 (proposal) · **Date:** 2026-07-18 · **Author:** Fable brand sprint (S-TBI-BRAND-GUIDELINES)
**Status:** PROPOSAL awaiting Aaron's taste sign-off (DESIGN GATE). Nothing here changes the live site until approved.
**Scope:** Two Birds Innovation, the consulting brand (`two-birds-innovation` repo). Product sub-brands (DCC, Clarity, Career Coach, KevsCasa) keep their own identities per `v2-lab/css/tokens.css` header notes.
**v1.1 revision:** incorporates Aaron's corrections — the real existing chevron logo (`two-birds-portfolio\assets\logos\two-birds\two-birds-logo.svg`), the new "2B" logo direction, the hard NO-TBI/TB rule, and the blue-vs-teal colour reconciliation. The v1.0 "swallow-bird" mark is superseded (see 3.5).

---

## 0. HARD RULE — never "TBI", never a "TB" monogram

The abbreviation **TBI reads as "Traumatic Brain Injury."** The brand must never be compressed to "TBI" or a "TB" lettermark — not in logos, favicons, filenames shown to clients, social handles, or copy. Approved short forms: **Two Birds** (words) or **2B** (the numeral form, Section 3.3).

**The current live favicon (`images/favicon.svg`) is a teal "TB" monogram and is flagged for REPLACEMENT** (Section 6). It stays only until an approved successor exists.

---

## 1. The Brand-Colour Decision — logo blue vs site teal

**The central open decision.** Aaron's real, existing logo (Section 3.1) is built on **#0066CC blue**. The live site, favicon, OG card, and v2 "Signal" token system are built on **teal (#14b8a6 / #2DD4BF)**. These are two different cool hues that do not currently cohere — measured directly: teal `#2dd4bf` on the logo blue `#0066CC` is **2.99:1** (they cannot sit on each other), and the logo blue on the site's navy `#0c0a1d` is **3.50:1** (passes only the 3:1 UI-component minimum, fails as text). The v1.0 draft of this document recommended "keep teal + add amber" **without having seen the logo** — the logo blue is real evidence that recommendation lacked. The honest framing is a three-way choice:

### Option 1 — Align the site to the logo blue (#0066CC becomes brand primary)
- Honours the existing mark exactly as drawn; one-hue brand, no tension.
- White on `#0066CC` = 5.57:1 (AA) — the logo itself is accessible as-is.
- **Against:** `#0066CC` is close to default corporate/AI blue — the very "AI-baseline blue" genericness Aaron named as his fear ([Indie Hackers — AI Purple Problem](https://www.indiehackers.com/post/the-ai-purple-problem-why-every-ai-brand-looks-the-same-6cb0aa2a02); [Mayk](https://themayk.com/why-ai-branding-makes-your-startup-look-generic-and-how-to-fix-it/)). It also under-performs on the dark navy the site is built on (3.50:1), forcing either a light-site redesign or a lightened blue (`#4D94E0` reaches 6.16:1 on navy) for UI use.

### Option 2 — Coexistence: blue logo-primary, teal interface-accent
- The mark always lives on its own blue tile (the tile is part of the mark), while the site keeps teal for links/buttons.
- Zero migration; both survive.
- **Against:** blue tile + teal chrome are adjacent cool hues at 2.99:1 against each other — side by side (header logo next to teal nav links) they read as *almost matching*, which looks like an accident rather than a system. This is the weakest option long-term.

### Option 3 — Evolve the logo palette to the brand surfaces (LEAN, ~55–60% confidence)
- Keep the chevron geometry (or the new 2B mark) exactly, but move the tile from `#0066CC` to **Deep Space Navy `#0c0a1d`** with the starfield retained, chevrons staying white (19.5:1) with an optional teal ball accent. The mark then belongs to the same world as the site, OG card, and v2 identity — one navy-and-teal universe.
- Directly answers the stated fear: exits default-blue territory entirely.
- **Against:** it modifies Aaron's real logo, which is genuinely his taste call, not the agent's — hence only a lean, presented with the other two options live. If Aaron is attached to the blue, Option 1 done wholeheartedly beats Option 2's halfway state.

### Where amber stands now
The v1.0 warmth argument still holds *independently of this decision*: a warm secondary (amber `#F0B429`, 10.46:1 on navy — or the portfolio's `#FF9F1C`, 9.50:1) remains the documented differentiator for human-scale consultancies ([LaunchAdvisor](https://www.launchadvisor.co/guides/warm-vs-cool-brand-colors-consulting-any-type); [Ebaq Design](https://www.ebaqdesign.com/blog/consultancy-branding)) and maps cleanly onto "human-first". It is now positioned as an **optional warmth accent** to layer onto whichever base wins — note it fails on the logo blue (2.99:1), a further point against Option 2's split world.

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

### 3.1 The current mark — the chevron logo (heritage, real, in use)

**Source of truth:** `C:\twobirds\two-birds-portfolio\assets\logos\two-birds\two-birds-logo.svg` (V05).

**What it is:** two white chevron "birds" on a `#0066CC` blue rounded square (rx 180 on a 1024 grid) over a faint white starfield (28 low-opacity cosmos dots). Each bird is a single polyline (stroke `#FFFFFF`, width 52, round caps/joins) with **34 px white balls** at key vertices: the upper bird points right (`210,195 → 550,335 → 210,475`, balls at origin and apex), the lower bird points left (`814,549 → 474,689 → 814,829`, balls at apex and tail) — two birds facing each other in opposed flight. This IS the brand's real mark today and appears in the board and lockups as such.

**Rules for the chevron mark:**
- The tile (rounded square + starfield) is part of the mark — never extract the chevrons onto arbitrary backgrounds without the mono treatment below.
- Never recolour the chevrons individually, remove the balls, change stroke weight, or drop the starfield while keeping the blue.
- Mono treatments: all-white chevrons+balls on navy `#0c0a1d` or on `#0066CC`; all-ink `#14202E` on light — always with round caps preserved.
- Minimum size: 24 px tile (balls merge into strokes below that — acceptable; below 16 px use the favicon cut, Section 6).

### 3.2 Wordmark

- **Text:** `Two Birds Innovation` (short form `Two Birds` — never TBI/TB, Section 0).
- **Typeface:** Space Grotesk 600–700, tracking −0.02em (v2 "Signal" display face). Current live site renders the wordmark in the system stack; standardizing on Space Grotesk is part of this proposal.
- **Colour:** on dark — white, "Birds" optionally in teal `#2DD4BF`; on light — ink `#14202E`, "Birds" optionally deep teal `#0B665C` (or deep blue if Option 1 wins). Never gradient text.

### 3.3 NEW DIRECTION for exploration — the "2B" mark

**Aaron's brief:** the numeral **2** + a letter **B** where the B is creatively stylized to read as **two birds** — e.g. a B rotated onto its side, or the B's two bowls formed from two bird silhouettes — with "Innovation" set underneath. "2B" is also the sanctioned short form (Section 0 kills TB/TBI; 2B is the compliant compression). Three sketch-level concept directions (original geometry, no stock; final art is a later drawing sprint — the board renders all three so Aaron can react):

**Concept A — "Sideways B / two birds aloft."** The B rotates 90° so its two bowls point upward: two arcs side by side on a shared baseline stroke — which is exactly the classic two-humped "gliding bird" silhouette, twice. Reads as "2" + an abstract two-bird glyph; the wittiest version, closest to Aaron's stated idea. Risk: rotated-B legibility — the "B-ness" must survive; the baseline stroke and bowl proportions carry it.

**Concept B — "Bird-bowl B."** An upright, fully legible B whose two bowls are each drawn as a bird in profile — the bowl's outer curve is the bird's back/wing, with a small beak notch where each bowl meets the spine. Most conservative and most legible at small sizes; the birds are discovered on second look (good brand-story mechanics).

**Concept C — "Chevron-heritage 2B."** The B's two bowls are formed from the two chevron-birds of the current logo (complete with their vertex balls), bent into bowl arcs against a straight spine. Bridges heritage mark → new mark in one glyph; strongest continuity, most complex to draw well.

**Lockup for all three:** `2B` glyph pair, with `INNOVATION` set underneath in Space Grotesk 500, letterspaced (+0.18em), width-matched to the 2B. Stacked is the primary lockup; horizontal (`2B` + `Two Birds Innovation` wordmark) is secondary.

### 3.4 Lockup rules
- **Stacked (primary for 2B):** mark centred above `INNOVATION` caption per 3.3.
- **Horizontal:** mark left, wordmark right, gap = one chevron stroke-width (or one 2B stem-width).
- **Mark alone:** favicons, avatars, watermarks.

### 3.5 Superseded — v1.0 "swallow-bird" exploration
The v1.0 draft of this document proposed an invented two-swallow mark (two rising bent-stroke birds, teal + amber). It was drawn **without knowledge of the real chevron logo** and is hereby demoted to *early exploration, superseded* — kept in git history only. It is not a live option unless Aaron explicitly revives it.

---

## 4. Colour System

All ratios computed with WCAG 2.x relative luminance (verified this sprint; v2 values cross-checked against `v2-lab/css/tokens.css`).

### 4.1 Core palette

| Role | Name | Hex | Notes |
|---|---|---|---|
| **Logo blue (heritage)** | Bird Blue | `#0066CC` | The real logo tile. White on it = 5.57:1 (AA). On site navy = 3.50:1 (UI-minimum only, fails as text). On white = 5.57:1 (AA as text). Status: subject of the Section 1 decision. |
| Logo blue (UI-safe on dark) | Sky Blue | `#4D94E0` | 6.16:1 on navy — the text-safe lightened blue if Option 1/2 wins. |
| Primary surface (dark) | Deep Space Navy | `#0c0a1d` | Live-site page background (`--space-900`). v2 equivalent `#0B1120`. |
| Raised surface (dark) | Space 800 / 700 | `#13102e` / `#1a1640` | Section and card fills on dark. |
| Site accent | Signal Teal | `#2DD4BF` | Current interactive accent. 10.48:1 on navy (AAA). **2.99:1 on Bird Blue — never place teal on the blue tile.** |
| Accent (deep) | Teal 500 | `#14B8A6` | Solid fills, borders on dark (7.83:1). |
| Accent (text-safe, light bg) | Deep Teal | `#0B665C` | Links/accent **text on light** (6.49:1 on `#F7F9FC`). Never `#2DD4BF` as text on light (2.02:1 — banned). |
| Optional warmth accent | Warm Amber | `#F0B429` | 10.46:1 on navy (AAA). Fails on Bird Blue (2.99:1). ≤10% of colour surface. Alternative: portfolio orange `#FF9F1C` (9.50:1 on navy). |
| Amber (text-safe, light bg) | Deep Amber | `#92400E` | 6.72:1 on `#F7F9FC`. `#F0B429` is never text on light. |
| Light surface | Cloud | `#F7F9FC` | Light-theme background (v2). White `#FFFFFF` for cards. |
| Ink | — | `#14202E` | Text on light (15.6:1 AAA). |
| Text on dark | — | `#d1d5db` body / `#FFFFFF` headings | 13.24:1 / 19.5:1. |
| Muted on dark | — | `#9ca3af` | 7.68:1 AAA. `#6b7280` (4.03:1) is large-text/decorative only. |

### 4.2 Usage rules
- **Until Section 1 is decided:** the chevron logo appears only on its own blue tile or in mono; the site keeps teal. Do not mix blue and teal in one composition beyond logo-on-page.
- **Dark backgrounds:** teal for interactive elements; amber (if adopted) for emphasis only, roughly one moment per viewport.
- **Light backgrounds (documents, print):** ink text; Deep Teal `#0B665C` links; Bird Blue `#0066CC` is text-safe on white (5.57:1) for logo-adjacent headings if Option 1/2 wins. Bright teal/amber are fill-only on light.
- **Semantic colours** (portfolio system): success `#2D6A4F`, error `#E63946`, warning `#F4A261` — keep semantic hues out of brand moments.
- **No gradients** in any mark or text.

---

## 5. Typography

| Role | Face | Licence | Where |
|---|---|---|---|
| Display / headings / wordmark | **Space Grotesk** (variable 300–700) | SIL OFL — self-hosted (`v2-lab/fonts/`) | v2 identity, brand materials |
| Body / UI | **IBM Plex Sans** (variable 100–700 + italic) | SIL OFL — self-hosted | v2 identity, brand materials |
| Fallback stack | `'Segoe UI', 'Helvetica Neue', Arial, sans-serif` | system | always declared |

- The **current live v1 site uses the system font stack only** (no licensing issue — sovereignty L1, flagged for completeness). The v2 "Signal" pairing is the brand-forward direction: licensed, self-hosted, distinct from every other Two Birds product (per `tokens.css` header).
- **Hierarchy:** v2 fluid scale (`--step-0`…`--step-4`). Headings Space Grotesk 600–700 tight; body IBM Plex Sans 400, line-height 1.6–1.7; the `INNOVATION` caption in 2B lockups is Space Grotesk 500, +0.18em letterspacing.
- **Never:** more than two families per artefact; fake bolds; all-caps body copy; proprietary web fonts.

---

## 6. Favicon and App-Icon Spec

**Current state — flagged for REPLACEMENT:** `images/favicon.svg` (S-TBI-FAVICON, commit 22fad58) is a teal **"TB" monogram — prohibited under Section 0** (TBI/TB rule). It remains live only until a successor is approved; the successor is a required outcome of this proposal, not optional polish.

**Successor spec (two compliant routes):**
- **Route 1 — 2B favicon (preferred if a 2B concept is approved):** the winning 2B glyph, white (or white + teal accent) on a navy `#0c0a1d` rounded-square tile (radius ≈ 22%), glyph ≈ 64% of tile width, optically centred. At 16 px, thicken strokes ~15%.
- **Route 2 — chevron favicon (available immediately):** the two chevron-birds + balls from the real logo, on their tile — blue `#0066CC` or navy per the Section 1 outcome; starfield dropped below 48 px (invisible noise at favicon scale).
- **Files:** `favicon.svg` (primary; the tile carries its own background — theme-independent), `favicon-32.png`, `favicon-16.png`, `apple-touch-icon.png` 180×180 (no transparency), `icon-512.png`.
- **HTML:** existing `<link rel="icon" type="image/svg+xml" href="images/favicon.svg">` line stays — drop-in file swap, zero page edits.
- **Never:** TB/TBI lettermarks; transparent backgrounds with dark glyphs.

---

## 7. Spacing, Clearspace, Minimum Sizes

- **Clearspace:** ≥ one chevron stroke-width (52/1024 of tile size) around the chevron mark; ≥ one stem-width around a 2B glyph; ≥ cap-height of "T" around the wordmark. Nothing enters this zone.
- **Minimum sizes:** chevron tile 24 px (favicon cut below); 2B glyph 20 px; horizontal lockup 120 px wide digital / 30 mm print — below that, mark alone.
- **Grid:** v2 4 px spacing scale (`--s1`–`--s12`); cards radius 12 px; containers 1100–1120 px.
- **Placement default:** mark or lockup top-left; one full-colour brand moment per surface (footer may go mono).

## 8. Do / Don't

**Do**
- Show the chevron logo on its own tile (blue today; navy if Option 3 wins) or in approved mono.
- Use teal for interactive elements on the dark site; keep any amber rare so it stays meaningful.
- Use text-safe deep variants (`#0B665C`, `#92400E`, `#4D94E0` on dark) for coloured text.
- Keep photography/illustration warm and human — never robot/circuit-brain clip art ([Mayk](https://themayk.com/why-ai-branding-makes-your-startup-look-generic-and-how-to-fix-it/)).
- Write like a person; run voice-check on anything external.

**Don't**
- **Never "TBI", never a "TB" monogram — anywhere** (Section 0). Approved compressions: "Two Birds", "2B".
- Never place teal or amber on the Bird Blue tile (both 2.99:1 — fails).
- No blue-purple gradients, glowing orbs, neural-net meshes, "sparkle AI" iconography.
- No gradient text, no glassmorphism (per `DESIGN.md`).
- No bright teal `#2DD4BF` or bright amber `#F0B429` as text on light surfaces.
- Don't redraw, unbevel, or de-ball the chevron birds; don't drop the starfield while keeping the blue tile.
- No third accent colour beyond the eventual base + one warmth accent.

---

## 9. Sources and Research

**Internal (extracted, not guessed):**
- `C:\twobirds\two-birds-portfolio\assets\logos\two-birds\two-birds-logo.svg` — **the real current logo** (V05 chevrons, `#0066CC`, starfield).
- `C:\twobirds\two-birds-innovation\css\style.css` — live v1 palette (`--space-*`, `--teal-*`, greys).
- `C:\twobirds\two-birds-innovation\v2-lab\css\tokens.css` — v2 "Signal" identity, fonts, verified WCAG table.
- `C:\twobirds\two-birds-innovation\DESIGN.md`, `PRODUCT.md` — committed colour strategy, component rules.
- `C:\twobirds\two-birds-portfolio\design\DESIGN-SYSTEM.md` — April 2026 portfolio system (`#FF9F1C` warm-accent precedent).
- `C:\twobirds\two-birds-innovation\images\favicon.svg` — current TB-monogram favicon (flagged for replacement).
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

1. **The colour decision (Section 1):** Option 1 (site aligns to logo blue) vs Option 2 (coexistence) vs Option 3 (evolve logo tile to navy — the stated lean, ~55–60%). This decision gates most others.
2. **2B concept pick (Section 3.3):** Concept A (sideways-B birds) vs B (bird-bowl B) vs C (chevron-heritage 2B) vs none (keep chevron mark as sole logo). Winner gets a final drawing sprint.
3. **Warmth accent:** adopt amber (`#F0B429` vs `#FF9F1C`) as secondary, or stay two-neutral-plus-one-hue.
4. **Favicon successor route (Section 6):** 2B glyph vs chevron tile — replacement of the TB monogram itself is not optional (Section 0).
5. **Standardize the live v1 site on Space Grotesk/IBM Plex** (currently system stack) — separate build sprint if approved.
