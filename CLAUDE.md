# CLAUDE.md — Two Birds Innovation

## Project Identity
- Owner: Aaron Patzalek · Two Birds Innovation
- Product: Two Birds Innovation corporate site + grants reference documents
- Audience: Grant reviewers, library partners, institutional due diligence contacts
- Stack: Static HTML/CSS/JavaScript only. No frameworks, no backend, no build tools.
- Deployment: GitHub Pages (`twobirds-kramerica.github.io/two-birds-innovation`)
- HAL Stack global context: `C:\twobirds\two-birds-portfolio\CLAUDE.md`

## Hard Constraints (Never Violate)
- STATIC ONLY: No Node.js, no npm, no build steps. Flat files on GitHub Pages.
- DESIGN SYSTEM: Deep space palette — `--space-900: #0c0a1d`, `--space-700: #1a1730`, `--space-600: #242038`, `--teal-500: #14b8a6`, `--teal-400: #2dd4bf`, `--grey-300: #d1d5db`, `--grey-400: #9ca3af`. Do not introduce new colours without updating PRODUCT.md.
- SYSTEM FONTS ONLY: Font stack is system UI (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`). No Google Fonts CDN, no external font files on the main site. Grants subpage may use system fonts only.
- NOINDEX ON GRANTS: `grants/company-overview.html` has a `<meta name="robots" content="noindex">` tag. This is intentional — it is a warm-contact reference document, not a search discovery page. Never remove this tag.

## Grants Page Rules (grants/company-overview.html)
- Print CSS is intentional: teal (`#14b8a6`) swaps to dark green (`#166534`) for print legibility, navigation is hidden in print view. Do not remove print styles.
- Honesty-note callout ("No paying clients as of June 2026") must remain accurate — update the date if time passes without a client.
- All product status claims must match `PRODUCT.md` at time of push.

## Pending Audit Items (June 5, 2026)
- `/impeccable audit` not yet run — Aaron action P2 filed. Do not mark the site "design-gate clear" until this runs.
- Android Chrome dark mode test pending — Aaron action P2 filed.

## Voice — External-Facing Content
Tone: honest advisor, expert without jargon. Pre-revenue status is disclosed, not hidden. Proactive disclosure builds grant credibility. No inflation of client counts, revenue, or team size.

Apply voice-check protocol (see global CLAUDE.md) to any content Aaron will send externally.

## Commit Convention
- `feat(tbi):` new feature or page
- `fix(tbi):` bug fix
- `chore(tbi):` maintenance, config, docs

## ADR Rule
Any sprint introducing a significant architectural change must file an ADR in `C:\twobirds\two-birds-portfolio\hal-stack\architecture\decisions\` before pushing.
