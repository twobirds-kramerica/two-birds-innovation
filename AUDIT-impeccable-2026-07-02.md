# /impeccable Design Audit — Two Birds Innovation site

**Run:** 2026-07-02 (S-TBI-IMPECCABLE) · **Scope:** `index.html` + `consulting.html` + `consulting-sme.html` + `css/style.css` · **Live:** twobirds-kramerica.github.io/two-birds-innovation/ (HTTP 200)
**Method:** impeccable 5-dimension rubric (matches the Career Coach `AUDIT-2026-06-04.md` format). **Findings do NOT need fixing to clear the design gate — this document is the gate artifact.**

## Score: 14 / 20 — Acceptable (distinctiveness is the gap)

| # | Dimension | Score | Notes |
|---|-----------|-------|-------|
| 1 | Accessibility | 3/4 | Skip-link present; `focus-visible` styles (5); single `<h1>`; `lang="en-CA"`; 6 `aria-` attributes. **Gap:** `alt=` count 0 in index.html — confirm every image has alt text (or that the page is genuinely image-free). |
| 2 | Performance | 3/4 | No CDN/`googleapis`/`unpkg` dependencies (sovereign ✓); system fonts = zero font-load cost. Not Lighthouse-measured here; no obvious regressions. |
| 3 | Theming | 2/4 | **No `:root` design tokens** — colours/spacing are hardcoded (consistency + maintainability risk). **No `prefers-color-scheme` / dark-mode handling** — risks OS-dark-mode inversion on a light palette (see the STANDALONE LIGHT-PALETTE rule; also the outstanding Android-Chrome dark-mode test). |
| 4 | Responsive | 4/4 | 7 `@media` queries; touch targets `min-height: 44px` on `.btn`. Solid. |
| 5 | Anti-Patterns | 2/4 | **System-font stack** (`-apple-system, Segoe UI, Roboto...`) — this is the "AI made that" distinctiveness fail. DCC and Career Coach pass this with self-hosted DM Sans + DM Serif Display; the TBI *company* site is the most generic-looking of the set. 2 `linear-gradient` uses in `style.css` — confirm neither is a full-width gradient hero (a commonly-banned pattern). No side-stripe `border-left: 4px` (✓). |

## Findings by priority

### P1 — distinctiveness (the thing that makes it look templated)
- **Adopt self-hosted brand fonts.** Replace the system-font stack with the Two Birds type system (self-hosted, SIL-OFL, e.g. DM Sans body + DM Serif Display headings — consistent with DCC/Career Coach/Clarity). This single change moves dimensions 3 and 5 up the most. *(Fix later; not required to clear the gate.)*

### P2
- **Introduce `:root` design tokens** for the palette + spacing (currently hardcoded).
- **Add dark-mode handling** — either `color-scheme: light` + a `prefers-color-scheme: dark` guard (belt-and-suspenders for a light palette), or a real dark theme. Closes the outstanding Android-Chrome dark-mode gate item.
- **Verify image alt text** across the site (index.html showed 0 `alt=`).
- **Review the 2 `linear-gradient`s** — confirm no full-width gradient hero.

### P3
- Consider a distinctive layout accent (the current layout is clean but conventional) once fonts + tokens are in.

## Anti-Patterns verdict
Passes on structure (no side-stripes, clean layout, single h1) but **fails the distinctiveness test on typography** — system fonts read as a template. The fix is the P1 font swap.

## Gate status
This audit satisfies DESIGN GATE requirement #2 (/impeccable audit run this quarter) for the TBI site. Remaining gate items (Android-Chrome dark-mode test) map to the P2 dark-mode finding above. Findings are documented for a future TBI UI polish sprint; none block marking existing TBI UI work Done.
