# /impeccable Design Audit — Two Birds Innovation site

**Run:** 2026-07-02 (S-TBI-IMPECCABLE) · **Scope:** `index.html` + `consulting.html` + `consulting-sme.html` + `css/style.css` · **Live:** twobirds-kramerica.github.io/two-birds-innovation/ (HTTP 200)
**Method:** impeccable 5-dimension rubric (matches the Career Coach `AUDIT-2026-06-04.md` format). **Findings do NOT need fixing to clear the design gate — this document is the gate artifact.**

## Score: 14 / 20 — Acceptable (distinctiveness is the gap)

| # | Dimension | Score | Notes |
|---|-----------|-------|-------|
| 1 | Accessibility | 3/4 | Skip-link present; `focus-visible` styles (5); single `<h1>`; `lang="en-CA"`; 6 `aria-` attributes. **Gap:** `alt=` count 0 in index.html — confirm every image has alt text (or that the page is genuinely image-free). |
| 2 | Performance | 3/4 | No CDN/`googleapis`/`unpkg` dependencies (sovereign ✓); system fonts = zero font-load cost. Not Lighthouse-measured here; no obvious regressions. |
| 3 | Theming | 2/4 | **No `:root` design tokens** — colours/spacing are hardcoded (consistency + maintainability risk). ~~No `prefers-color-scheme` / dark-mode handling — risks OS-dark-mode inversion on a light palette (see the STANDALONE LIGHT-PALETTE rule; also the outstanding Android-Chrome dark-mode test).~~ **RESOLVED 2026-07-31** — see "Dark-mode guard resolved" below. |
| 4 | Responsive | 4/4 | 7 `@media` queries; touch targets `min-height: 44px` on `.btn`. Solid. |
| 5 | Anti-Patterns | 2/4 | **System-font stack** (`-apple-system, Segoe UI, Roboto...`) — this is the "AI made that" distinctiveness fail. DCC and Career Coach pass this with self-hosted DM Sans + DM Serif Display; the TBI *company* site is the most generic-looking of the set. 2 `linear-gradient` uses in `style.css` — confirm neither is a full-width gradient hero (a commonly-banned pattern). No side-stripe `border-left: 4px` (✓). |

## Findings by priority

### P1 — distinctiveness (the thing that makes it look templated)
- **Adopt self-hosted brand fonts.** Replace the system-font stack with the Two Birds type system (self-hosted, SIL-OFL, e.g. DM Sans body + DM Serif Display headings — consistent with DCC/Career Coach/Clarity). This single change moves dimensions 3 and 5 up the most. *(Fix later; not required to clear the gate.)*

### P2
- **Introduce `:root` design tokens** for the palette + spacing (currently hardcoded).
- ~~**Add dark-mode handling**~~ RESOLVED 2026-07-31, see below.
- **Verify image alt text** across the site (index.html showed 0 `alt=`).
- **Review the 2 `linear-gradient`s** — confirm no full-width gradient hero.

### P3
- Consider a distinctive layout accent (the current layout is clean but conventional) once fonts + tokens are in.

## Anti-Patterns verdict
Passes on structure (no side-stripes, clean layout, single h1) but **fails the distinctiveness test on typography** — system fonts read as a template. The fix is the P1 font swap.

## Gate status
This audit satisfies DESIGN GATE requirement #2 (/impeccable audit run this quarter) for the TBI site. Remaining gate items (Android-Chrome dark-mode test) map to the P2 dark-mode finding above. Findings are documented for a future TBI UI polish sprint; none block marking existing TBI UI work Done.

## Dark-mode guard resolved (2026-07-31)
Note on scope correction: this audit's original P2 wording said "light palette" — actually inaccurate. `css/style.css` is a **dark** (deep-space navy `#0c0a1d` / teal accent) palette used by `index.html` and `consulting.html`, not a light one. (The site's other page, `consulting-sme.html`, already had the light-palette version of this guard — `color-scheme: light` on `<html>` + a `prefers-color-scheme: dark` fallback — from S-TBI-CONSULTING-B; this fix is the dark-palette equivalent for the other two pages, matching that existing repo pattern.)

**Fix, in `C:\twobirds\two-birds-innovation\css\style.css`:**
- Added `color-scheme: dark;` to the existing `html { }` rule (line ~52).
- Added a belt-and-suspenders block at end of file:
```css
/* Prevent OS/browser dark-mode auto-inversion — this site is already a
   dark (deep-space) palette with no light variant, so belt-and-suspenders
   forces the same colours under a light OS preference too. */
@media (prefers-color-scheme: light) {
    body {
        background: var(--space-900);
        color: var(--grey-300);
    }
}
```
This governs both `index.html` and `consulting.html` (both load `css/style.css`). `consulting-sme.html` was already covered by its own inline light-palette guard.

**Verification:** Playwright CLI (`page.emulateMedia({ colorScheme: 'dark' | 'light' })`) against a local static server (`http://localhost:8917/index.html`, since `file://` is blocked per the tooling-gotchas rule). Screenshots under both emulated OS preferences are pixel-identical — dark navy/teal palette held, no inversion, text stays legible. Screenshots: `/tmp/tbi-dark-pref.png`, `/tmp/tbi-light-pref.png`.
**Honest limitation:** this is desktop Chromium emulation of `prefers-color-scheme`, not a literal Android-Chrome device test (Android's "force dark" heuristic for un-styled pages is a separate, device-level feature that can't be triggered via `page.emulateMedia`). The `color-scheme` declaration is the standard signal that tells Chromium's force-dark heuristic "this page already handles its own theming, don't touch it" — but a real Android-Chrome pass is still the fuller check. Not performed here (no Android device in this session); flagging the gap rather than claiming it closed.
Scope: this was a surgical CSS-only fix. The larger hero/card-grid redesign (S-TBI-REDESIGN-FABLE) was explicitly out of scope and untouched.
