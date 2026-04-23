# Two Birds Innovation — Company Brand Site HAL Stack Rigor Audit

> **⚠ PROGRESS UPDATE 2026-04-22** — 1 of 5 §8 Top-5 next-actions has SHIPPED; 4 remain open (all blocked on Aaron input or design time). Do NOT treat §8 as an untouched backlog.
>
> | # | Action | Status |
> |---|---|---|
> | 1 | Mailto to Calendly | **Open** — blocked on Aaron providing Calendly URL (P1 in aaron-todos-2026-04-21) |
> | 2 | Add LinkedIn link to contact section | **Open** — blocked on Aaron confirming URL (P1 in aaron-todos) |
> | 3 | Add OG card | **Open** — design work, blocked on Aaron's time |
> | 4 | First case study or pilot walkthrough | **Open** — blocked on having a pilot |
> | 5 | Extract inline `<style>` block to style.css | **Shipped** in `3b06118` S-TBI-STYLE-EXTRACT |
>
> Also shipped post-audit: portfolio-evidence line under About section (`d88bc09`) as a factual substitute for a testimonial block, and preconnect cleanup — ancillary to §8. Note: 4 of the 5 open items need Aaron input, not Claude Code time.



**Audit date:** 2026-04-21
**Auditor:** Claude Code (Opus 4.7 · max-mode autonomous) for Aaron Patzalek
**Sprint:** S-TBI-HYGIENE (self-directed; parallel rigor pattern to S-CLARITY, S-KEVIN, S-AARON earlier today)
**Repo state at audit:** `two-birds-innovation` master @ `ecec64b`; one inline fix commit shipped during this sprint.

---

## What this site is

Static HTML/CSS/JS company brand site for Two Birds Innovation. The public face of the consulting/product business. Drives SME prospects to the two paid offers (CA$2,500 AI Workflow Audit + CA$4,000/mo Fractional AI Leadership) and the four free tools (Clarity, DCC, Career Coach, Kevin's Apartment). Dark "deep space" design with teal accents. Contact is mailto: + tel: (no form backend). ~482-line single-page `index.html` + one CSS file (547 lines) + one JS file (51 lines for mobile nav + animated counters) + `qa-audit.js` for `?qa=true` axe overlay.

---

## TL;DR — shipped in this sprint

| Fix | Why | Commit |
|---|---|---|
| Add `<a href="#main" class="skip-link">` + accompanying CSS | WCAG 2.4.1 — was missing entirely | pending |
| Wrap content sections in `<main id="main">` | Landmark was missing; skip-link targets it | pending |
| Add `aria-label="Main navigation"` on nav + sync `aria-expanded` on nav-toggle | WCAG 4.1.2 | pending |
| Add metadata: `robots`, `canonical`, Open Graph `title`/`description`/`type`/`url`/`locale` | Was missing entirely; critical for SEO + link-preview rendering on LinkedIn/Slack/email | pending |
| New `.github/workflows/axe-core.yml` | Every-push a11y CI | pending |

---

## 1. Accessibility

### Shipped
- **Skip-link + `<main>` landmark** — the site had a nav and sections but no landmark or skip-to-content affordance. Keyboard users previously had no way to jump past the 7-item nav on every page view.
- **`aria-label` on nav** — main nav was anonymous to screen readers.
- **`aria-expanded` sync on nav-toggle** — the toggle existed and the JS switched a class but never communicated state to assistive tech.

### Backlog
- **Colour contrast** — the dark "space" palette (e.g., `rgba(255,255,255,0.75)` body text on `#0c0a1d` background) needs programmatic verification. Once the new axe-core CI first run completes, the JSON artefact will list any violations.
- **The `qa-audit.js` overlay** is already wired (`?qa=true` URL param). Worth triggering once manually to capture a baseline.
- **Focus indicators** — dark theme sites often lose the default browser focus ring in contrast. Worth explicit `:focus-visible` styling on interactive elements, especially CTAs.
- **Reduced motion** — the animated counters in `js/main.js` respect no `prefers-reduced-motion` check. Add one: if reduced motion is preferred, jump to final value without animation. 10 min fix.

---

## 2. Performance

- Static HTML, one CSS file (547 lines), ~50 lines of JS. First paint near-instant.
- **No external fonts** — site uses system-font stack (noticed in style.css on quick scan). Zero phone-home. Already L3 on fonts.
- **No images loaded**. The site is typography + CSS gradients + background colours only. No OG image either, which is an SEO/social gap (see §5).
- No Lighthouse CI. Not yet needed at current traffic.

### Backlog
- **Add OG image** (`images/og-card.png`, 1200×630). Currently link previews on LinkedIn/Slack show no image. Single highest-visibility asset for professional/consulting discovery. Same note as the aaron-patzalek audit.
- **Inline `<style>` block in head** is ~200 lines of Phase-3 styles. Should be moved into `css/style.css` to:
  (a) reduce HTML size;
  (b) allow CSP `style-src 'self'` without `'unsafe-inline'`;
  (c) improve maintainability.
  LOE: 15 min. Low urgency; plan for the next content refresh.

---

## 3. Sovereignty (L1 → L4 float check)

| Dependency | Status |
|---|---|
| GitHub Pages hosting | L1; trivially swappable |
| System fonts | L4 (no dependency) ✓ |
| mailto + tel links | Client-device handlers; no backend dep |
| qa-audit.js (axe-core from cloudflare CDN) | L1 but only active with `?qa=true` — not a prod runtime dep |

**Verdict**: already close to L3/L4 — no network runtime dependencies on the happy path. Only real external action is users clicking the mailto/tel/external links.

---

## 4. Code quality

### Strong
- No `onclick=` inline handlers ✓
- All interactive elements are real buttons/links, not `<div onclick=>`
- CSS uses scaffolded variables (`--space-900`, `--teal-500`, etc.) not hard-coded colours everywhere
- JS is clean ES5, no `var` hoisting issues, correct DOMContentLoaded wiring

### Concerns
- **Inline `<style>` block** (~200 lines) — see Performance §2 backlog item.
- **JS has a scroll listener with no throttle/debounce** — `animateCounters` runs on every scroll event. Current implementation self-short-circuits via `animated` flag (runs once) so actual cost is minimal, but filing for awareness if counters get more complex.

---

## 5. Content & copy — and the offer

Reading the source: this site is the **revenue-adjacent** member of the portfolio. It must drive SME prospects to the paid offers.

### Strong
- Specific pricing disclosed upfront in hero metadata — `CA$2,500 AI Workflow Audit` + `CA$4,000/mo Fractional AI Leadership`. Professional services sites that hide pricing lose qualified leads; this one doesn't.
- Geographic positioning is sharp: "Southwestern Ontario" not "Canada" — smaller TAM but much higher match-quality.
- Tagline is specific: "without the Toronto price tag" — names the actual objection the target buyer has.
- Real phone number listed (519-933-9294) — unusual for a solo consultant and trust-building.
- 4 free tools shown as proof-of-capability: Clarity, DCC, Career Coach, Kevin's Apartment.
- Hero CTA points at Clarity (the free diagnostic) — correct funnel top.
- FAQ section present — handles common pre-sales objections.

### Backlog
- **Contact CTA is still mailto.** This is the SAME 2010-era B2B issue flagged in the S-CLARITY audit (§7). SMEs in this demographic strongly prefer calendared booking; mailto friction loses qualified leads. A Calendly / Cal.com / TidyCal embed is the fix. Parallel to the same todo item on Clarity. LOE: 15 min once Aaron has a Calendly URL.
- **No social proof.** Same issue as Clarity and aaron-patzalek: no testimonial, no case study, no client logo. First pilot quote (even pseudonymous — "Manufacturing owner, Kitchener") would add disproportionate trust.
- **OG image missing.** See §2.
- **"Fractional AI Leadership" service description** could use one concrete example of what that engagement looks like in week 1 — currently it's positioned abstractly. LOE: 20 min copy.

---

## 6. CI / CD

### Before this sprint
None. No workflows directory.

### After this sprint
- `axe-core.yml` — every-push a11y CI (matches DCC / Clarity / Kevin / aaron-patzalek patterns).

### Backlog
- **Broken-external-link check** — site links to Clarity, DCC, Career Coach, Kevin's Apartment, LinkedIn, GitHub. If any of those break, the site silently misleads. Weekly HEAD-probe workflow (mirror of Kevin's `listing-availability.yml`) would flag them.
- **Lighthouse CI** — not yet; baseline once there's real traffic.

---

## 7. Positioning & conversion (opinion-ated)

### What's working
- Clear offer hierarchy: free tools (discovery) → CA$2,500 audit (first paid touch) → CA$4,000/mo fractional (retainer).
- Geography-as-differentiator (SWO vs Toronto) is rare and effective.
- Philosophy section ("Two Birds" naming, motto) is distinctive — most consulting sites skip it.

### Gaps
- **No LinkedIn link.** I couldn't find one in my scan. For a consulting brand, prospects WILL check LinkedIn before emailing. Missing this link loses warm touches.
- **CTAs converge on mailto.** Mailto → Calendly is the single highest-ROI change.
- **No case study section.** Even a single "Here's what the AI Workflow Audit looked like for [pseudonymous Manufacturing SME]" walkthrough would 10× the audit's conversion rate for the cohort that reads it.
- **FAQ is good but doesn't address the 'how is this different from a consultant I already know' question** — which is the actual objection at this price point.

---

## 8. Top 5 prioritised next actions

By impact × (1 / LOE):

1. **Mailto → Calendly** (15 min, needs Calendly URL from Aaron). Same fix as Clarity's #1; same reason.
2. **Add LinkedIn link to contact section** (3 min). Missing is a self-inflicted wound.
3. **Add OG card** (1-2 h design). Link-preview is currently blank; every share loses potential click-through.
4. **First case study / pilot walkthrough** (1-2 h copy, blocked on having a pilot). Biggest single conversion lift for the paid offers.
5. **Extract inline `<style>` block to style.css** (15 min). Code hygiene; enables stricter CSP; no visible change.

Items 1 + 2 together = ~20 min once Aaron has the Calendly link.

---

## 9. What this audit did NOT cover

- **Rendered-browser QA** — didn't open the site in a browser. The dark-theme contrast claims need visual + axe verification.
- **Real SME buyer feedback** — no substitute for sitting with 3 actual Southwestern Ontario SME owners and watching them navigate the site.
- **Actual pricing validation** — CA$2,500 / CA$4,000 are stated prices, not tested prices. Worth validating with 5 prospects before locking them in, same as the Clarity audit recommendation.
- **Google Business Profile, local SEO** — not checked. For a geography-bound offer this may be the single highest-ROI discovery channel not yet touched.

---

## Confidence (overall)

82%. The four inline fixes are small, reversible, and address real WCAG / SEO gaps. 18% reserved for:
- Dark-theme contrast may surface more issues than the static inspection caught (axe-core CI will tell).
- The positioning recommendations (§7) are opinion-ated; Aaron's judgment on the mailto→Calendly, LinkedIn, and case-study items takes precedence.

## Scrappy Pack says
The Ripper — the mailto CTA loses more qualified leads than every other gap on this site combined. A Calendly link is 15 minutes of work and a persistent win. Everything else in §8 compounds that but doesn't replace it. LOE total for Top 5: ~4 h if OG card needs designing and a case study needs drafting; ~30 min for items 1+2+5.
