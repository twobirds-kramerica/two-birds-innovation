---
BACKUP NOTICE: Point-in-time snapshot backup created 2026-10-04 for Two Birds Innovation.
STATUS: Static archive snapshot (may be stale).
LIVE SOURCE OF TRUTH: The live, active documents are maintained in Notion and git at twobirds-kramerica/two-birds-portfolio.
CANONICAL REPO PATH: two-birds-portfolio/hal-stack/product-intelligence/job-command-center-prd-2026-07-26.md
NOTION REFERENCE: Notion / Product Backlog
---

# Job Command Center — PRD (Notion parity + sunset)

**Date:** 2026-07-26 (overnight autonomous sprint; brief: `hal-stack/orchestration/job-command-center-overnight-prompt.md`, dispatched 2026-07-25)
**Status:** BUILT this sprint (see "What shipped" at end)
**Owner:** Aaron Patzalek (single user — this is NOT a productized build; SIMPLICITY FIRST governs)
**Sits on:** ADR-0037 (git-markdown spine is source of truth; Notion demoted to projection — NOT reopened here), Talon Scoring Spec v2 (`hal-stack/talon/Talon_Scoring_Spec_v1_202606.md`), ADR-0041 (Notion job-pipeline sunset, filed this sprint)

---

## 1. Problem (Aaron's ask, paraphrased from voice dictation 2026-07-25)

The Notion job pipeline dashboard is unreliable ("hammering," "load issue") and its
paid-tier query tools lapse 2026-08-01 (already decided territory — ADR-0037). Aaron
wants the dashboard he had in Notion — "the same logic, criteria, filters" — merged
with the existing Command Deck (aaron-deck.pages.dev) into one self-hosted surface:
"take the best of both worlds." Requirements in his words: "a lot of different
filters and criteria," "maintains history," "evergreen," a layered "human readable
what changed" view, plus a NEW per-role "Create CV and cover letter" button that is
**manual-trigger only** ("just the ones that we agree on"). Separately: "retire"
the Notion job pipeline — keep the data readable in Notion, stop burning
credits/tokens on its ongoing sync traffic.

## 2. What already exists (read end-to-end before scoping — most infrastructure is built)

| Piece | Where | State |
|---|---|---|
| Scoring/filter/criteria logic | `hal-stack/talon/Talon_Scoring_Spec_v1_202606.md` (v2 content, 2026-07-25) | FULLY documented in git. This IS "the logic that went into the Notion dashboard" — nothing is locked inside Notion. Confirmed by comparing against the 2026-07-20 Notion workspace export. |
| Data spine | `hal-stack/job-search/pipeline.md` (343 table rows across 6 sections, 2026-07-26) | Source of truth (ADR-0037). Notes column already carries append-only dated bracket annotations (`[INBOX RECONCILE 2026-07-20: ...]`) = per-row history. Top-of-file dated session bullets = file-level change narrative. Git history = the third layer. **"Maintains history" and "evergreen" are already substantially met by the spine itself.** |
| Deck aggregator | `C:\twobirds\two-birds-personal\command-deck\build-deck-data.py` | Parses pipeline.md, income-first weighting, top-12 jobs on the deck, archive snapshots per day. Parser bug (score corruption) fixed 2026-07-25. |
| Job Command Center page | `command-deck\_deploy\command-center.html` + `hal-stack/job-search/command-center-gen.py` | Counts, top-5 apply-now cards with checklists/history, honest health lights, activity feed. Nightly regenerated + deployed by `refresh-and-deploy.bat` (called from `run-overnight-build.bat`). |
| Apply page | `command-deck\_deploy\apply.html` (built by `hal-stack/job-search/build-apply-page.py` from `applications-manifest.json`) | Ready-to-submit packages with file paths, live/dead status, version history. |
| Notion sync machinery (job-pipeline-specific) | `reconcile-job-pipeline.py` (daily via `run-talon.bat`), drift-check CHECK 1 (reconciler heartbeat), `test-notion-contracts.py` Job Pipeline live schema, Talon daily-scan prompt Steps 0.5/7 (Notion dedup read + page writes) | RUNNING — this is the "credits and tokens being burned" traffic Aaron wants stopped. |

## 3. Gap analysis — what Notion's Job Pipeline database offered that Command Deck does not

From the 2026-07-20 full export (`hal-stack/notion-sync/workspace-export/2026-07-20/databases/Job Pipeline__92415698.md`, 273 rows, 26 properties) versus the live Command Deck pages:

**Real gaps (Notion had it, deck does not):**
1. **Full-pipeline browse.** Notion showed every row; the deck shows top-12 (deck) / top-5 (command center) / a hand-curated apply batch (apply.html). No way to see, filter, or search the whole 343-row spine from a browser/phone.
2. **Filters + sorts.** Notion's day-to-day value was database views: filter by Status / Priority / Golden Ticket / Remote, sort by Score. The deck has zero interactive filtering.
3. **Per-row history surfaced.** The spine's Notes annotations exist but are only readable by opening pipeline.md in an editor. Nothing renders them.
4. **"What changed" narrative.** pipeline.md's top dated session bullets are the change log, but no surface displays them.

**Not real gaps (assessed honestly, per the brief's instruction not to assume):**
- Scoring/criteria logic — fully in the Talon spec, applied at intake; the dashboard only ever *displayed* results.
- History/evergreen storage — the spine + git already store it (three layers); the gap is *display*, not *infrastructure*. No schema change to pipeline.md is needed.
- Mobile access — the deck is already a password-gated PWA; adding pages inherits that.
- JD archive — `hal-stack/job-search/jd-archive/` supersedes Notion page bodies for new roles; Notion keeps the pre-spine JD bodies as a frozen archive (retained, per ADR-0041).
- Notion properties the spine deliberately dropped (ATS Baseline/Projected, Big Fish, Phase Fit, Drive Link, Customization Tier, Applicant Volume) — mostly empty/stale in the export; Aaron's day-to-day columns (Score, Status, Priority, Tier, GT, Ikigai, Comp, Remote, Window, Notes) all live in the spine. Not rebuilt.

## 4. Target feature set (built this sprint)

### 4.1 Pipeline Browser — `command-deck/pipeline.html` (deployed at /pipeline.html)
- **Data:** `command-center-gen.py` extended to emit the FULL spine (every parsed row, all 13 columns + derived flags + completeness stamp `N total / N emitted / filter: none`) plus the top-of-file dated session bullets, into `window.JOB_COMMAND.pipeline` / `.changelog` in the existing `command-center-data.js`. One generator, one data file, already wired into the nightly deploy.
- **Filters (Notion-view parity):** free-text search (role/company/notes), Status, Priority tier, min Score, Golden Ticket only, Remote model, low-Ikigai flag visibility. Sort: Score / Company / Status / as-filed. Live row-count readout (`showing M of N`) so a filtered view is never mistaken for the whole pipeline (COMPLETENESS rule applied to UI).
- **Row expand:** full Notes (the per-row history layer, dated bracket annotations intact), Ref, comp, Ikigai, first URL as a link, JD-archived flag.
- **What-changed panel:** renders the dated session bullets from the top of pipeline.md, newest first — the human-readable narrative layer. Git history remains the forensic third layer (stated on the page footer, not rebuilt in HTML).

### 4.2 "Create CV + cover letter" button — manual per-role trigger
**Interpretation (AMBIGUOUS SPEC RULE, one sentence):** the simplest mechanism that satisfies "button exists, nothing fires without Aaron's explicit per-role go-ahead" is a per-role button that copies the exact, canonical Claude Code trigger (`apply to <Role> — <Company>` — the existing CLAUDE.md trigger that invokes the cv-cover-letter agent with the LOCKED templates) to the clipboard and marks the row "CV requested" locally (localStorage), so nothing generates until Aaron himself pastes the command into Claude Code.
- Each live row gets a **Create CV + cover letter** button → copies the trigger phrase, flags the row with a visible "requested" badge (device-local), and shows a one-line "paste this into Claude Code" hint.
- This is a *documented manual-trigger convention*, not an automation: zero server, zero polling, zero risk of unapproved generation, and it reuses the entire existing cv-cover-letter agent path unchanged.

### 4.3 Notion job-pipeline sunset (ADR-0041)
Pause exactly the job-pipeline-specific Notion traffic; retire in place, delete nothing:
- `run-talon.bat` — daily `reconcile-job-pipeline.py --apply` step commented out (dated marker + pointer).
- `talon-daily-scan-prompt.md` — Step 0.5 dedup/suppress read now comes from pipeline.md (grep), Step 7 writes rows to pipeline.md instead of Notion pages (JD to jd-archive/), digest references pipeline refs instead of Notion URLs.
- `notion-drift-check.py` — CHECK 1 (reconciler heartbeat + conflict aging: job-pipeline-specific) disabled with dated marker; CHECK 2 (generic mirrors: Learning Library, Human Backlog) untouched.
- `test-notion-contracts.py` — Job Pipeline live schema assertion disabled with dated marker; Product Backlog live check + all offline tests untouched.
- **Kept running (explicitly NOT job-pipeline-specific):** `mirror-databases.py` (mirrors Learning Library + Human Backlog only), `file-aaron-action.py` and the whole ADR-0033 failsafe pattern for other domains, `complete-sprint.py`, the Notion Job Pipeline database itself (readable archive, free tier).
- Every pause is a comment-out with `[SUNSET 2026-07-26 ADR-0041]` markers — reversible in minutes per Aaron's "maybe one day" caveat.

## 5. What we are NOT building (SIMPLICITY FIRST)
- **No write-back from the browser.** Status changes keep flowing through the existing protocol (CLI edits pipeline.md, commits). A server-side edit queue (console-worker POST + polling script) was considered for the CV button and rejected — the clipboard convention delivers the same guarantee with zero new moving parts.
- **No new pipeline.md schema.** The Notes-annotation pattern already carries history; no per-row changelog files, no SQLite, no event store.
- **No multi-tenant / productized anything.** Single user, password-gated, private repo. The "eventually productized" vision note is recorded here and deliberately unbuilt.
- **No Notion deletion, no export re-run, no migration tool.** ADR-0037's export + free-tier projection stance stands.
- **No rebuild of dead Notion properties** (ATS Baseline, Big Fish, Phase Fit, etc. — see 3).
- **No auto-generation of CVs** for any row, ever, without Aaron's explicit per-role action.

## 6. What shipped (close-out summary)
- `hal-stack/job-search/command-center-gen.py` — full-pipeline + changelog emission (portfolio repo).
- `C:\twobirds\two-birds-personal\command-deck\pipeline.html` — Pipeline Browser page (+ staged copy in `refresh-and-deploy.bat`, link from command-center.html).
- Sunset edits per 4.3 (portfolio repo), ADR-0041, SESSION-STATE.md + ARCHITECTURE-STATUS.md entries.
- Verification: generators run clean; drift-check + contract tests pass post-edit; deck redeployed via `refresh-and-deploy.bat`; live URL check noted in SESSION-STATE (password gate caveat).
