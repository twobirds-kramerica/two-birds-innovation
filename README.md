# Two Birds Innovation — Company Brand Site

Public brand + services site for Two Birds Innovation, Aaron Patzalek's consulting and product company based in St. Thomas, Ontario.

## What this repo is

Static marketing site positioning Two Birds Innovation's AI-readiness audit offer (CA$2,500) and the portfolio of owned products (Digital Confidence Centre, Clarity, Career Coach, Kevin's Apartment Search).

## How to run it

Vanilla HTML/CSS/JS — no build step, no npm.

- Clone the repo
- Open `index.html` in a browser
- Live URL: `https://twobirds-kramerica.github.io/two-birds-innovation/`

## Stack

- Static HTML/CSS/JS per the Two Birds no-npm standing rule
- Inline styles extracted to `style.css` (S-TBI-STYLE-EXTRACT) for cleaner CSP / future header-configurable hosting
- axe-core every-push a11y CI
- Weekly broken-external-link check
- AI bot allow-list in robots.txt (11 explicit bots)

## Related repos

- `two-birds-portfolio` — master governance + HAL Stack infrastructure
- `aaron-patzalek` — personal brand site (founder-focused)
- `clarity`, `career-coach` — products this brand-site routes to
- `digital-confidence` — flagship product (DCC)

## Model lock note

When running Claude Code sessions on this repo, use `claude-sonnet-4-6` (current Sonnet) or `claude-opus-4-7`. Retired Sonnet-4 variants do not resolve.

## AUDIT

`AUDIT.md` has the HAL Stack rigor audit with PROGRESS UPDATE header. 4 of 5 §8 Top-5 items are blocked on Aaron input (Calendly URL, LinkedIn URL, OG card design, first pilot walkthrough) — flagged as not Claude Code work.

## License

All content owned by Two Birds Innovation / Aaron Patzalek unless noted otherwise.
