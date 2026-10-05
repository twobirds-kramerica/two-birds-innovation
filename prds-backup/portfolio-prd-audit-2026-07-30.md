---
BACKUP NOTICE: Point-in-time snapshot backup created 2026-10-04 for Two Birds Innovation.
STATUS: Static archive snapshot (may be stale).
LIVE SOURCE OF TRUTH: The live, active documents are maintained in Notion and git at twobirds-kramerica/two-birds-portfolio.
CANONICAL REPO PATH: two-birds-portfolio/hal-stack/product-intelligence/portfolio-prd-audit-2026-07-30.md
NOTION REFERENCE: https://app.notion.com/p/3a7a09cf876a81deaf0cd2e00b5a4c5a?pvs=204
---

# Two Birds Innovation — Portfolio PRD & Build Audit
**Date:** 2026-07-30 (dispatched by Aaron via voice while driving; produced by a Fable-tier session, with an Opus-tier sub-dispatch covering the smaller/well-documented products — see section 0.3)
**Status:** DRAFT v1 — first full-portfolio pass. Living document; extend rather than replace on the next pass.
**Companion file (smaller products, Opus-authored):** `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/product-intelligence/smaller-products-prd-audit-2026-07-30.md`

---

## 0. Scope, methodology, and how to read this

### 0.1 What this is
Aaron asked for PRDs across the full product portfolio, then an audit comparing each PRD against what's actually built, with recommendations. This is that document. It is the source Aaron explicitly wants roadmaps to come FROM — every product section ends in a short prioritized punch list suitable for feeding into `hal-stack/sprint-system/sprint-queue.md` or the Notion Product Backlog later. Filing those sprints is a separate, later step Aaron triggers (e.g. via `next sprint`), not done in this pass.

### 0.2 What already existed and was NOT duplicated
Before writing anything new, this pass read and built on top of (rather than re-deriving):
- Four existing full PRDs: `hal-stack/product-intelligence/job-command-center-prd-2026-07-26.md`, `hal-stack/product-intelligence/backlog-decision-assistant-prd-2026-07-26.md` (Ready Room), `hal-stack/content/look-what-i-can-do/PRD-lwicd-series.md`, `hal-stack/product-intelligence/aaron-judgment-calibration-skill-2026-07-26.md` + `hal-stack/architecture/decisions/ADR-0040-judgment-calibration-layer.md`. These are audited (section 9), not rewritten.
- The **EA status layer** (`hal-stack/ea/status/*.md`, 9 files, machine-generated 2026-07-25T23:35) and its companion **informed product briefs** (`hal-stack/product-intelligence/*-brief.md`), which already carry current-state, blockers, and next-action data for aaron-patzalek, career-coach, clarity, dcc-adults, dcc-kids, elite-karate, kevscasa, norm, webinars.
- `hal-stack/product-intelligence/product-readiness-2026-07-25.md`, a 5-day-old synthesis covering DCC Adults/Kids, Housing(KevsCasa), and NormeScore in almost exactly this document's target format. This document extends it forward to 2026-07-30 rather than re-running the same analysis (see each product's "since 2026-07-25" note).
- `hal-stack/docs/ARCHITECTURE-STATUS.md` (targeted `sed`/`grep` reads only — lines 4 and 9 are ~3KB/50KB trap lines per the standing tooling-gotcha; never full-Read).
- Product wiki docs at repo root (`DCC-PRODUCT-WIKI.md`, `CLARITY-PRODUCT-WIKI.md`, `CAREER-COACH-WIKI.md`) — dated 2026-04-22/23, three months stale, used for founding vision/history only, never for current-state claims (superseded by the EA status layer for that).

### 0.3 Fable / Opus split (per Aaron's explicit instruction, routing left to this session's judgment)
- **Fable (this document):** HAL Stack itself (foundational, spans everything), Digital Confidence Centre, Clarity, NormeScore, Two Birds Innovation (company/consulting site), the Story Dial / Chronicle / Agency Log / Magpie Scribe content-system cluster (the trigger for the naming-confusion ask), the naming-confusion resolution, the competitive scan, the positioning recommendation, audits of the 4 already-PRD'd products, and this cross-portfolio synthesis. Judgment call: these are either strategically live decisions (NormeScore's 3 stalls), structurally complex (DCC's 33 modules + bilingual + brand-kit-gated video system), or the actual subject of Aaron's naming/positioning questions — Fable-tier judgment, not documentation.
- **Opus (companion file, background dispatch):** Career Coach, KevsCasa, Elite Karate Site, Quality Dashboard, Aaron Patzalek (personal site), Two Birds Command Centre / Command Deck, Family Ops, Webinar Series. Judgment call: these are well-documented (brief + EA status file exists for 5 of the 8) or genuinely simple/small (Quality Dashboard, Family Ops), so mechanical PRD-authoring against existing sources is the right tier, not strategic judgment. One exception flagged to the Opus dispatch as high-stakes despite being in this bucket: the Aaron Patzalek site's copy MUST be checked against `career/POSITIONING-CANON.md` — see that file's section for the finding.

### 0.4 Verification method for "what's built"
The actual product code for DCC, Clarity, Career Coach, KevsCasa, etc. lives in separate repos not checked out in this environment (only `two-birds-portfolio` is present on this machine). "What's built" claims below are grounded in: (a) the git history and documentation that DOES live in this repo (which is extensive — sprint notes, PRDs, brand kits, EA status), and (b) live HTTP checks (`curl -o /dev/null -w '%{http_code}'`) against deployed URLs, run 2026-07-30. Where a claim could not be verified either way, it is marked **UNVERIFIED** rather than stated as fact, per the completeness/no-silent-partial standing rules.

Live URL checks run 2026-07-30 (portfolio-wide):

| URL | HTTP status |
|---|---|
| `https://twobirds-kramerica.github.io/digital-confidence/` | 200 |
| `https://twobirds-kramerica.github.io/career-coach/` | 200 |
| `https://twobirds-kramerica.github.io/clarity/` | 200 |
| `https://twobirds-kramerica.github.io/aaron-patzalek/` | 200 |
| `https://twobirds-kramerica.github.io/two-birds-innovation/` | 200 |
| `https://twobirds-kramerica.github.io/quality-dashboard/` | 200 |
| `https://twobirds-kramerica.github.io/elite-karate-site/`, `/kirks-karate/`, `/elite-karate/` | 404 (all three) |
| `https://twobirds-kramerica.github.io/two-birds-command-centre/` | 200 |
| `https://aaron-deck.pages.dev/` | 200 (password-gated content behind this, expected) |
| `https://clarity-proxy.twobirdsinnovation.workers.dev` | 405 (Worker alive, GET not a valid method — expected for a POST-only API) |
| NormeScore | no live URL exists anywhere (confirmed via `product-readiness-2026-07-25.md`, no repo/domain found) |

---

## 1. NAMING-CONFUSION RESOLUTION — Story Dial / Chronicle / Agency Log / Magpie Scribe / "the Studio"

**This is the concrete thing that triggered this whole dispatch — Aaron's verbatim ask: "I keep forgetting if we call it the studio or if we call it the arc or if we call it the scribe or the notekeeper or the note or NB."** Read in full, don't skim.

### 1.1 The short answer

There are **two genuinely separate systems**, not one confusingly-named system:

1. **The content-OUTPUT system** — turns Aaron's own build activity (git commits, SESSION-STATE, sprint notes) into publishable "look what I built" content. Internally: **Story Dial** (the engine). Its automated weekly cadence + manual invocation: **The Chronicle**. Its published output series: **The Agency Log**. These three names describe three LAYERS of the SAME system, not three different systems — that's a large part of why they blur together in memory.
2. **The content-INTAKE system** — captures raw ideas Aaron forwards or records (TikTok videos, voice notes, images), transcribes them, and triages them for business relevance into the Notion Idea Vault. This is **Magpie Scribe**. It is a completely different system from #1: different purpose (idea capture and triage, not build-activity storytelling), different trigger (forward-a-video / Telegram bot, not a Thursday cron job), different destination (Idea Vault backlog rows, not LinkedIn drafts). **Confirmed by direct code inspection: zero cross-references between `hal-stack/automation/magpie-scribe/` and `hal-stack/story-dial/` or `agents/chronicle-agent.md`.** They share only a surface-level pattern (raw capture in, structured record out), which is almost certainly why they conflate in memory even though they don't share a single line of code or a single data destination.

"The Studio" (`studio.html`, `studio-queue.js`, `studio-stories.js`) is a **third, separate thing**: a video/content production surface that lives in a different local repo (`two-birds-personal/command-deck/`, not checked out in this environment). It is a downstream CONSUMER of stories (per `hal-stack/strategy/coowner-brief-2026-07-06.md`), not the engine that produces them. Per `hal-stack/strategy/PICKUP-2026-07-05-evening.md`, `studio-stories.js` was left corrupted locally as of 2026-07-05 — an open repair item, separate from anything in this section.

"StoryArc" is **not a real name for anything** — it appears exactly once in the whole repo, as a placeholder label in `career/meeting-prep-jasgun-2026-07-23.md` §5 with its own note "concept — name TBD (was it 'the Studio'? confirm)." It was never decided. "The notekeeper," "the note," and "NB" (NotebookLM?) do not map to anything in this cluster at all as best this pass can tell — they may be conflating this system with the NotebookLM advisory-board research library (a genuinely different tool, `hal-stack/personas/` research notebooks) or with nothing concrete. Flagged, not resolved — see 1.5.

### 1.2 A finding Aaron should know: this was already answered once, one week ago

`hal-stack/strategy/naming-decisions-2026-07-23.md` (Decision 2) resolved this EXACT question on 2026-07-23, with the same conclusion as 1.1 above (Story Dial = engine, The Chronicle = process wrapper, Agency Log = published brand, the Studio = the command-deck production surface, StoryArc = never decided, retire it). Aaron is still confused about it a week later per this dispatch's own framing. That itself is the real finding: **a naming decision that gets filed in a markdown doc and never re-surfaced anywhere Aaron actually looks (voice conversation, a dashboard label, a recurring trigger phrase) does not stick.** The fix is not "write the decision down again" (that has now been tried twice); it's making the chosen names the ONLY names that appear anywhere Aaron interacts with the system going forward (see 1.6).

The one thing the 2026-07-23 doc did NOT cover, because it didn't exist as a named concern yet at that time: **Magpie Scribe.** This pass adds that mapping (1.1 above) as the genuinely new content this dispatch contributes to the naming question.

### 1.3 The layer map (for reference)

| Layer | Name | What it is | Where it lives | Status (2026-07-30) |
|---|---|---|---|---|
| Engine (internal, system-level) | **Story Dial** | Raw data → dial (1-5) → formatted output, mapped to persona/channel. Not itself a publishing surface. | `hal-stack/story-dial/` (README, MASTER-SPEC.md, dial-spec.md, scribe-rules.md, raw-data-sources.md, sprint-to-post-template.md, chronicle-weekly.py) | Layer 1 (weekly stub generation) live and scheduled Thursday 2am. Layer 2 (auto-chronicle without a Claude Code session) planned, not built. |
| Process / agent wrapper | **The Chronicle** | The cadence + the manual "Chronicle this week's entry at dial N" invocation that applies Story Dial's rules and writes a Notion draft. | `agents/chronicle-agent.md` (the callable agent spec), `hal-stack/story-dial/PRODUCT.md` (product framing, literally titled "The Chronicle (Story Dial content engine)") | Layer 1 live (Thursday cron creates Notion stub). Chronicle Agent (manual dial-invocation) spec is complete and detailed. Admin UI is a static mockup only, not wired to real data. |
| Published output / brand | **The Agency Log** | The numbered series readers actually see (#001-#013+), under the "True Story: My AI Journey" tagline. | Published in Notion under Command Center / Agency Log; distribution is LinkedIn. | 13 entries exist; #003-005 published, #006-010 stubs only (never chronicled), #011-013 chronicled but publish status unclear as of the 2026-07-23 audit. Cadence has visibly stalled (more stubs than published posts). |
| Intake / triage (separate system) | **Magpie Scribe** | Forward-a-video (or any URL/local file) → transcribe → triage for business relevance → catalog into Notion Idea Vault → escalate high-value items to the sprint queue. | `hal-stack/automation/magpie-scribe/` (magpie.py, transcribe.py, triage.py, catalog.py, escalate.py) + Telegram bot `@Two_birds_magpie_bot` | FULL BUILD LIVE as of 2026-07-23 (confirmed via ARCHITECTURE-STATUS "Fully running" table): Telegram bot live, Notion catalog verified with real writes, both test suites green. |
| Downstream production surface (separate repo) | **"the Studio"** | Video/content production surface, consumes finished stories. | `two-birds-personal/command-deck/studio.html` + `studio-queue.js` + `studio-stories.js` (NOT in this repo, not checked out in this environment) | `studio-stories.js` flagged corrupted 2026-07-05, unconfirmed whether repaired since (**UNVERIFIED** — this environment cannot read that repo). |
| Retired / never real | **StoryArc** | A placeholder label used once, never decided. | `career/meeting-prep-jasgun-2026-07-23.md` §5 | Should be actively retired (see 1.6), not left to keep resurfacing as a maybe-name. |

### 1.4 Competitive scan — has anyone else built this? (live WebSearch, 2026-07-30)

Aaron's actual question: does anything else on the market turn raw voice/text captures into structured, verbatim-preserving stories for content use, the way Story Dial + Chronicle does?

**Closest direct comparables found:**
- **SpeakNotes** — takes meetings, interviews, podcasts, voice notes and turns them into structured outputs (notes, summaries, blog drafts, social copy). Closest single-tool match to "raw capture in, structured content out."
- **Meet Sona** — AI voice interviews turned into multi-format content (LinkedIn posts, blog, newsletter, short-video script) "using your actual words from the transcript" — the closest match to the verbatim-fidelity angle specifically.
- **Oiti** and similar LinkedIn-AI-tool roundups (2026) list dozens of voice-note-to-LinkedIn-draft tools; this is a genuinely populated category, not a novel idea in the abstract.
- **gittomarket.io** and similar "GitHub commits to LinkedIn" tools are the closest match to the *build-activity-specifically* angle (Story Dial's actual raw-data source), but the search commentary is explicit that "dumping a list of commit SHAs into a status update provides automation without distribution value" — i.e. the category exists but is generally regarded as producing weak, low-substance output.

**What none of the comparables combine, that Story Dial + Chronicle does (this is the actual differentiation, not a marketing claim — grounded in what's in the repo):**
1. **A hard, enforced verbatim/receipts discipline.** Scribe Rule 2 (`hal-stack/story-dial/scribe-rules.md`, mirrored in `agents/chronicle-agent.md`) requires every claim trace to a commit hash, Notion ID, or file path, with an explicit `[RECEIPT NEEDED]` flag for anything that can't. No comparable tool found enforces this as a hard gate rather than a stylistic suggestion.
2. **An explicit anti-hype rule with a banned-word list** (no "groundbreaking/revolutionary/industry-leading," no presenting a projection as an outcome) — a direct response to a real incident (Agency Log #003, "the $479K lesson," an optimistic projection that was mis-framed as an outcome once and became the founding cautionary rule). This is lived history informing the rule, not a generic style guide.
3. **A Three Reviewers privacy/tone/receipts gate before anything is marked ready to publish**, and a hard rule that the Chronicle agent writes to Draft only, never auto-publishes.
4. **Dual-track separation of intake (Magpie Scribe, business-idea triage) from output (Story Dial, build-activity storytelling)** — no comparable found runs these as genuinely separate pipelines with separate destinations; most competitor tools conflate "capture an idea" and "turn it into a post" into one funnel.
5. **Audience-vertical + dial mapping** (5 verticals × 5 dials, `agents/chronicle-agent.md`) rather than a single fixed output format.

**Honest framing for Aaron:** the *category* (voice/build-activity → structured social content) is real and populated; Story Dial is not a novel invention of a market that doesn't exist. The specific combination of hard receipts-enforcement + anti-hype rules grounded in a real incident + a formal reviewer gate is a genuine differentiator worth stating in any positioning copy, but it should be framed as "we hold ourselves to a harder verification standard than the tools in this space," not "nothing like this exists" (something does — see comparables above).

Sources:
- [9 Best AI Tools for LinkedIn in 2026 (supergrow.ai)](https://www.supergrow.ai/blog/ai-tools-for-linkedin)
- [10 Best AI Tools for Content Creators in 2026 (SpeakNotes Blog)](https://speaknotes.io/blog/best-ai-tools-for-content-creators)
- [My Personal Picks For The Best LinkedIn AI Tools In 2026 (Meet Sona)](https://meetsona.ai/blog/ai-tools-for-linkedin/)
- [I Tried All 33 LinkedIn AI Content Tools – Best of 2026 (Oiti)](https://www.ghostwriting-ai.com/comparisons/best-linkedin-ai-tools-2026)
- [GitHub Commits to LinkedIn Automatically (gittomarket.io)](https://gittomarket.io/blog/github-commits-to-linkedin-automatically)
- [21 Best LinkedIn AI Tools for 2026 (skrapp.io)](https://skrapp.io/blog/top-linkedin-ai-tools/)

### 1.5 What's still genuinely unresolved (flag, don't guess)

- "The notekeeper," "the note," "NB" — no confident mapping found in this repo to any component in this cluster. Best guess (not stated as fact): NB could be shorthand for NotebookLM (a real, separate tool — `hal-stack/personas/` advisory research library), which is plausible to conflate with a "note-taking" system in casual speech, but this is a guess, not a finding. **Ask Aaron directly** rather than assume.

### 1.6 Recommendation: keep the names, but change how they're surfaced (not a rename)

**Do not rename anything.** The names are fine on their own terms (Story Dial is a good, memorable engine name; The Agency Log is a strong public-facing brand with real double meaning already noted in the 2026-07-23 decision doc). The problem was never the names, it's that a 5-layer system (engine → process → agent → output-brand → separate-intake-system) has 5 things to remember, and nothing in the day-to-day trigger phrase or dashboard surfaces the layer map.

**Concrete fix, not a rename:**
1. Standardize on exactly ONE trigger phrase pattern everywhere it's documented and spoken: "Chronicle [this week's entry / stub N] at dial N" for output, "forward it to Magpie" or "send it to the bot" for intake. These already exist; the fix is removing every OTHER phrase from circulation (retire "StoryArc" from `career/meeting-prep-jasgun-2026-07-23.md` §5, replace with "The Chronicle").
2. Add a one-line system map to the top of `hal-stack/story-dial/README.md` and `hal-stack/automation/magpie-scribe/README.md`, cross-referencing each other explicitly ("this is NOT the same system as Magpie Scribe/Story Dial — see naming-decisions-2026-07-23.md for the full map") so the next person (or Aaron, six months from now) who opens either file sees the boundary immediately instead of having to reconstruct it.
3. If Aaron wants a genuine umbrella name for the whole output cluster (engine + process + brand) when/if it's ever productized for other founders (the "Storyteller SaaS" ambition already noted in `hal-stack/story-dial/sprint-to-post-template.md`), that's a real future decision, not something to force now. **If asked, 3 candidate umbrella names, not recommended for adoption today, just optioned:**
   - **"Receipts"** — one word, states the actual differentiator (1.4 point 1-2), works as a verb ("receipts it") and a brand.
   - **"The Ledger"** — same DNA as "Agency Log," reads as more premium/durable, slight risk of sounding financial/accounting rather than a build-story brand.
   - **"Groundtruth"** (or "Ground Truth") — leans into the anti-hype/verification angle hardest, most literal, least warm.
   This is a naming/taste decision — flagged per the dispatch's own instruction, not executed. Aaron picks, or picks none and keeps the status quo (recommended default: keep status quo, apply fix 1-2 above, revisit umbrella naming only at actual productization time).

**PRD + audit for this cluster:** see section 8.

---

## 2. POSITIONING RECOMMENDATION — should Two Birds Innovation narrate its own story?

**Aaron's question (Steve Grove reference):** should Two Birds Innovation's story originate as a COMPANY narrative that pulls people in — evidence of what's been done, industry-narrative context, an invitation into an ongoing conversation — so people follow "the story of Two Birds" and discover Aaron through it, rather than Aaron being the sole entry point?

**Mandatory pre-reads applied:** `career/POSITIONING-CANON.md` (full read) and `hal-stack/personas/about-aaron.md` (full read) — both canonical per CLAUDE.md, both read in full before writing this section.

### 2.1 Does the "company as narrator" framing fit the canon, or conflict with it?

**Fits, with one load-bearing condition.** The canon does not require Aaron to be the sole narrative entry point — it requires that wherever the story enters from, the identity that lands is "15-year operations and service-delivery leader, AI as force multiplier," never "AI consultant" or any AI-first framing (POSITIONING-CANON section 2, 6). A company-narrative frame is fully compatible with that as long as the company's own story is told the same way: Two Birds Innovation is introduced as an operations-and-delivery builder (the Steve Grove pattern applied honestly is "here is what we've shipped, here is the industry context, here is where this is going" — none of that requires AI to be the headline noun). The risk is not the company-narrator structure itself; it's that a company narrative gives MORE surface area for AI-first language to creep in unnoticed (a "look what our AI built" framing is one careless sentence away from "AI consultancy"), precisely the drift POSITIONING-CANON section 2 says has already happened "ad nauseam."

**The evidence-first part of the Steve Grove pattern is already unusually strong here and underused as a hook.** The receipts discipline documented in section 1.4 (every claim traces to a commit hash or Notion ID, an actual $479K lesson that got corrected and turned into a standing rule) is EXACTLY the kind of "evidence of what you've done" a company narrative needs, and it already exists, built for internal discipline rather than external storytelling. That's a real asset most companies claiming "build in public" don't actually have (most build-in-public content is closer to the "commit SHA dump" the competitive scan found weak — section 1.4).

### 2.2 What this would concretely change about Magpie Scribe / Chronicle output publishing and framing

If Aaron adopts a company-as-narrator frame, the concrete production changes are small (this is a framing shift, not a rebuild):

1. **Byline / voice shift on Agency Log entries.** Currently first-person Aaron ("I built..."). A company-narrator frame would shift some entries to a "Two Birds Innovation" institutional voice ("this week, Two Birds shipped...") with Aaron surfaced as the builder inside that story, not the narrator of it. Not all entries — the existing Dial 5 "Intimate Core" tier (founders only, step-by-step) should probably STAY first-person Aaron; the Dial 2-3 public tiers are the natural candidates for the company voice.
2. **The chronicle-agent.md pillar-to-vertical map already has a "Meta-Chronicle" pillar** (`agents/chronicle-agent.md` line ~47) mapped to V4 (AI-curious founders). That pillar is the natural home for "the story of Two Birds" arc-level content (company milestones, the seven-live-products-in-90-days framing already used in `agents/chronicle-agent.md`'s own context block), distinct from individual build-log entries. This already exists as a category; it's just underused.
3. **A "how we work" / evidence page** on the Two Birds Innovation site (section 5 below covers TBI's current build state) would be the natural landing point for someone who followed the company narrative in and wants to see the receipts, rather than every entry re-explaining who Aaron is from scratch. TBI's site currently leads with service/consulting framing, not a narrative "follow the build" framing — this would be a real, if modest, IA addition, not a full rebuild.
4. **Nothing changes about the underlying Scribe Rules or Three Reviewers gate.** Receipts discipline and anti-hype rules apply exactly as they do today regardless of whose voice is narrating.

### 2.3 Verdict and scope

This is a real, worthwhile positioning question, and the "yes, with the AI-drift-risk guardrail from 2.1" answer is a genuine recommendation, not a dodge. But **fully specifying a company-narrative content strategy (voice-by-dial-tier rules, an actual TBI "our story" page IA, a decision on which past Agency Log entries get reframed vs. left as-is) is its own scoped sprint, not something to half-build inside this audit.** Recommend: file as a new sprint (suggested ID `S-TBI-COMPANY-NARRATIVE-001`) once Aaron confirms he wants to proceed with this direction; this section is the strategic go/no-go input to that sprint, not the sprint itself.

---

## 3. HAL Stack — PRD & Audit

### 3.1 Problem
Aaron is a one-person operation ("orchestrator-who-ships, not operator" per `hal-stack/personas/about-aaron.md`) running 9+ live/near-live products plus consulting plus a job search, entirely through voice dictation into Claude Code sessions. Without a structured system, this collapses into either (a) an agent re-deciding already-settled architecture every session, or (b) Aaron manually tracking hundreds of decisions across products with no memory continuity between sessions. HAL Stack is the governance + automation + persona + verification substrate that makes autonomous, multi-session, multi-product AI-driven building possible without Aaron re-explaining context every time or losing prior decisions to context loss.

### 3.2 Users
Aaron (sole human user/operator). Every Claude Code session across every repo (the actual "user" of most HAL Stack components in a mechanical sense — sprint system, verification gates, persona review, memory).

### 3.3 Current state — what's built (per `hal-stack/docs/ARCHITECTURE-STATUS.md`, "Fully running" table, ~60 rows, last touched 2026-07-30)
Selected highlights (not exhaustive — the full table is the source of truth, this is a representative slice for PRD purposes):
- **Sprint system**: `next-sprint.py`, Notion-backed queue, SESSION-STATE.md discipline, ecosystem loop (`--product` / `--ecosystem` slicing).
- **Verification gates**: 3-layer live-outcome verification (`hal-stack/verification/verify-gate.py`), QA/QC/UAT three-gate runner (`qa-runner.py`, axe-core 4.9.1 + Playwright), MVE Gate (marginal-value-of-effort threshold before any optimization/escalation).
- **Governance/guardrails**: CLAUDE.md (56KB, split 2026-07-27 into 6 triggered reference files + an incident ledger), destructive-action hooks (`destructive-guard.js`), disk-space guard, autonomy-audit loop (3-bucket Handoff Model triage), skills-install protocol (vendor-and-review, never live-install, ADR-0017).
- **Persona infrastructure**: 47+ personas (Founding Board, Boardroom 22-persona/6-department, Scrappy Pack, Mentor Committee), department KNOWLEDGE.md files, callable board-review skills (`board-diana-operator`, `board-priya-qa`, etc. — now exposed as Skill-tool-invocable, not just narrative personas).
- **Notion sync + failsafe**: mirror-databases.py (Learning Library, Human Backlog), drift-check, contract tests, Job Pipeline retired to read-only archive (ADR-0041).
- **Content/intake pipelines**: Magpie Scribe (section 8), Story Dial/Chronicle (section 8), n8n tool-monitoring intake, Continuous Improvement Engine.
- **Monitoring**: uptime-monitor.py, smoke-test.py (Playwright, all live product URLs nightly), Lighthouse median audits, usage-report cost tracking, overnight-health GitHub Actions cron (reduced to Mon/Wed/Fri cadence 2026-07-29 per `S-GHA-CADENCE-CONSOLIDATION-001`, a real recent cost-driven change worth flagging).
- **EA status layer** (S-EA-STATUS-LAYER-001, 2026-07-24): mechanical per-product status generator — this is the exact machinery that made most of this document possible to write quickly and accurately.
- **This document's own existence** is itself evidence the sprint-completion discipline (ADR filing, SESSION-STATE, ARCHITECTURE-STATUS updates) is a real, followed practice, not aspirational — the git log this session grepped is dense with exactly this pattern going back months.

### 3.4 Non-goals
- Not a multi-tenant SaaS platform. Every governance file assumes a single human operator (Aaron) and a single-tenant repo structure.
- Not vendor-agnostic by default — sovereignty-first is a hard constraint (decapitation checklist, L1-L4 float model), meaning HAL Stack deliberately trades some "best available tool" convenience for self-hosted/open-source defaults.
- Not attempting full autonomy without human gates on irreversible/high-stakes actions — the Handoff Model's "Human-only" bucket and the Production Deletion Guard are permanent, not transitional.

### 3.5 Gap / drift audit
- **"Built but not yet wired"** table (ARCHITECTURE-STATUS lines 98-120) shows most items now marked Done — the backlog of "designed but inert" HAL components has been substantially cleared over the repo's life; this is a healthy signal (few zombie half-builds).
- **"Not yet built"** table shows Story Dial Layer 2 automation, a morning-brief HTML builder, and time-layered SESSION-STATE decay as still explicitly deferred — none flagged urgent by their own entries.
- **Real drift found this pass:** the "Open Gaps — Ranked by Impact" table (ARCHITECTURE-STATUS lines 241-256) is stale — most of its entries are struck through as fixed back in June, but the table itself hasn't been pruned/refreshed since, meaning a reader skimming that section gets a false impression of what's currently open. This is a small, low-cost drift (the table is self-documenting its own staleness via strikethrough) but worth a cleanup pass.
- **SESSION-STATE.md itself is now 2MB / effectively unbounded** (`ls -la` confirmed 2,033,095 bytes as of this pass) despite an archive file existing (`SESSION-STATE-archive-2026-Q1.md`, 305KB) — the "time-layered SESSION-STATE decay" item in "Not yet built" is flagged low-priority in the doc's own table, but a 2MB single file is a real operational cost (every session-start read, every grep, every context load pays for this) that keeps growing. Worth reconsidering priority given the file's current size relative to when that item was likely last sized up.

### 3.6 Recommended next sprint(s)
1. **P2 — `S-ARCH-STATUS-GAPS-REFRESH-001`**: prune/refresh the "Open Gaps" table in ARCHITECTURE-STATUS.md (remove resolved-and-struck-through rows entirely rather than leaving strikethrough clutter; add any genuinely new gaps found in this audit).
2. **P2 — `S-SESSION-STATE-DECAY-001`** (re-prioritize from the existing "Not yet built, Deferred" entry): SESSION-STATE.md at 2MB is a real read/grep cost every session; revisit the time-layered decay design now rather than waiting for it to become a P1 emergency.
3. **P3 — this document itself**: schedule a re-run of this PRD-audit pass at a regular cadence (quarterly, or triggered by the next major sprint milestone) so it doesn't become another "written once, never resurfaced" artifact — the same failure mode found in section 1.2.

---

## 4. Digital Confidence Centre (DCC — Adults + Kids) — PRD & Audit

### 4.1 Problem
Seniors (and youth, in the Kids/Youth vertical) face high anxiety around technology — identity theft, banking scams, being "tricked" into charges — with no calm, judgment-free, plain-language place to build confidence. DCC exists to move users from fear to an internal "Security Shield" mindset, in both English and French, at zero cost to the end user.

### 4.2 Users
**Primary (Adults):** "Brenda" persona — 70+, St. Thomas Ontario, high tech anxiety, iPad/iPhone/Android/Windows. Modeled on a real person (Aaron's step-mother, per `DCC-PRODUCT-WIKI.md` §11 "ANSWERED" flags). **Kids/Youth:** 3 cohorts (4-6, 7-9, 10-12) plus a separate youth (13-17) vertical on a parallel content shell. **B2B (secondary):** libraries, municipalities, healthcare orgs, credit unions — via the institutional skin and NHSP grant-language page.

### 4.3 Current state — what's built (per `hal-stack/ea/status/dcc-adults.md` + `dcc-kids.md`, 2026-07-25T23:35, plus git log to 2026-07-30, plus live 200 check)
- **Adults:** 29+ modules live at site root (v2 cutover 2026-07-11, promoted from `/dcc-v2/`), full IA pass (search, sidebar category grouping, category pills, FR toggle, kids cross-links), WCAG AA 0 violations (post-scrub), performance work substantially done (bundle minify, CLS fixes, TBT reduction rounds 1-4), Privacy/ToS live, verify-gate spec passing. 4 classic youth modules ported onto the native `yt-` shell as of 2026-07-12 (S-DCC-YOUTH-PORT). Youth sourcing/factual-cleanup pass completed 2026-07-29/30 (`S-DCC-YOUTH-FACTUAL-CLEANUP-001` — 10 shallow-source flags + a straggler fixed).
- **Kids:** 3 cohorts live, badge/reward system wired (localStorage-only, no accounts, matches ADR-0004's no-auth stance), cross-linked from 6 adult modules.
- **Brand kit:** `hal-stack/brand/guidelines/dcc-adult.md` + `dcc-kids.md` landed 2026-07-25 (full character cast locked: Margaret = guide, Walter/June/David/Priya/Marcus/Sophie/The Caller = scenario cast). Iterated since landing (commits `ac8c7603` fixed a free/age-framing drift, `6b742ffa` synced kids kit to the same fix + added an Illustration section split from Characters `94214cb1`, plus a dated Feathers Model exception for the beta video watermark `36b405e6`) — **review is ACTIVE, not a one-shot rubber stamp, but a final explicit Aaron sign-off stamp was not found in this pass's git-log search through 2026-07-30.** Status best characterized as "in active review with fixes landing," not "signed off" and not "ignored."
- **Video system:** script-only. Pilot 01 (Margaret, "the text that doesn't feel right," 75s, EN+FR draft) fully written; zero rendered frames, zero final character art specifically for video (brand-kit cast is locked conceptually, not illustrated). Blocked on: Aaron's pilot-script sign-off, a render-tool ADR (spec recommends Adobe Character Animator or a seeded-consistency AI tool, explicitly rejects raw generative video for a recurring cast), and unresolved tool-access questions. TTS: as of 2026-07-30, the French voice decision is LOCKED (commit `1a4141d6`, pre-rendered Kokoro French, consistency over accent) — this specific sub-blocker is now resolved.
- **Accessibility link:** also resolved 2026-07-30 — eSSENTIAL Accessibility confirmed merged into Level Access (B2B-only, unusable); going with March of Dimes Canada instead (commit `1a4141d6`).
- **Glossary:** review-surface decided 2026-07-30 (Option A, monthly batch cadence) — FR glossary + terms audit green-lit as new sprints (commits `402a2160`, `a8ee8512`).

### 4.4 Non-goals
- No user accounts/auth for the Kids product (ADR-0004, deliberate, matches the Handoff Model's approach to a minor-adjacent product — no PII collection).
- No paid tier live yet (freemium certificate upsell is queued, P1, not built).
- No native app — static HTML/CSS/JS only, GitHub Pages hosted, per the Five Non-Negotiable Rules.

### 4.5 Gap / drift audit
- **The single biggest live blocker, confirmed still open as of 2026-07-30**, is the brand-kit-gated video system: `product-readiness-2026-07-25.md`'s framing ("brand kit review is the fastest lever in the whole set, ~20-30 min") is 5 days old but this pass found no evidence the video pilot itself has moved past script stage since. **This is the top DCC priority**, not because the product isn't shippable today (it already is, live, working) but because it's the highest-leverage blocked item sitting on Aaron's desk.
- Minor drift: DCC's brand-kit review status is more advanced than `product-readiness-2026-07-25.md` implies (that doc treats it as a single pending review; actual git history shows active iteration already happening) — a small positive drift, not a problem, but worth correcting the record.
- 15 open backlog items on DCC Adults per the 2026-07-25 EA status snapshot are all P1/P2 polish (axe-core 3 serious violations still open per that snapshot, CSS bundle consolidation, freemium cert, institutional/NHSP skin) — none are go/no-go blockers for the live product.

### 4.6 Recommended next sprint(s)
1. **P1 — Aaron action, not agent-doable:** final explicit sign-off on `dcc-adult.md`/`dcc-kids.md` brand kits (the iterative fixes suggest this is close, not stalled) and the video pilot 01 script — this single decision unblocks the video system, which is DCC's biggest visible gap between "documented vision" and "shipped."
2. **P2 — `S-DCC-A11Y-AXE-001`** (already filed, confirm still open): fix the 3 remaining Serious axe-core violations.
3. **P2 — video render pipeline**: once sign-off lands, file the render-tool ADR (Character Animator vs. seeded-consistency AI) and resolve the flagged tool-access gap before attempting pilot 01 render.
4. **P3 — `S-DCC-FREEMIUM-CERT`**: build the freemium certificate upsell (revenue-adjacent, currently just queued).
5. **P3**: re-run `product-readiness-2026-07-25.md`'s style synthesis pass at the next natural checkpoint — it's proven itself a very high-leverage document for exactly this kind of audit and it's already 5 days stale.

---

## 5. Clarity — PRD & Audit

### 5.1 Problem
Canadian SME owners suspect AI matters to their business but don't know where to start, and don't trust generic AI hype. Clarity is a free, fast (5-10 min) AI-readiness self-diagnostic that produces a genuinely useful SWOT-style output, positioned as a credible first step rather than a lead-magnet gimmick, feeding an optional CA$2,500 consulting engagement.

### 5.2 Users
Canadian SME owners/operators, self-selecting via the free tool. Secondary: Aaron, as the consulting-lead-capture beneficiary.

### 5.3 Current state — what's built (per `CLARITY-PRODUCT-WIKI.md` + ARCHITECTURE-STATUS line 20 + `clarity-v3-positioning-brief-2026-07-10.md`, live 200 check confirmed)
- **Proxy architecture live** (S-CLARITY-PROXY-DEPLOY, 2026-06-28): `clarity-proxy` Cloudflare Worker deployed, `CLARITY_PROXY_URL` wired into `llm-provider.js`, KV namespace bound. This is a meaningful architecture shift from the earlier bring-your-own-key-only model (per the April wiki) toward a built-in no-key default with BYOK demoted to "Advanced" — matches the same pattern later reused for Career Coach.
- **LLM portability layer**: 4 providers (Anthropic/OpenAI/Gemini/Ollama), client-side, sovereignty-positive (users aren't locked to one vendor).
- **Cross-promotion**: results page links to Career Coach + DCC (each product is the others' top-of-funnel), factual portfolio-evidence line (sidesteps a "no testimonials" audit flag without fabricating social proof).
- **Performance work**: CLS elimination, deferred CSS, TBT reduction (S-CLARITY-PERF-003, per ARCHITECTURE-STATUS "Not yet built ❌" table, confusingly filed under a "Done" row — naming of that table section is itself slightly misleading, it mixes done and not-done items).
- **A v3 positioning brief exists** (`clarity-v3-positioning-brief-2026-07-10.md`, 257 lines) — not read in full this pass (proportionality), but its existence signals active, recent strategic work on Clarity beyond the April wiki's snapshot.

### 5.4 Non-goals
- Not a full audit/consulting engagement in itself — deliberately a funnel, not the product being sold.
- No hard-expertise claims (legal/financial/medical) in the diagnostic output — general AI-readiness framing only.

### 5.5 Gap / drift audit
- **The April wiki's open questions (pricing validation, pricing-page content, email-capture timing) could not be confirmed resolved or still-open in this pass** — this environment cannot read the `clarity/` repo directly, and no 2026-07 status file equivalent to the DCC/NormeScore EA status entries was found with the same granularity for these specific funnel questions. **Flagged as UNVERIFIED, not silently assumed resolved.**
- The AUDIT.md top-5 next actions from April (mailto→Calendly, pricing page, email capture before Save Report) — 2 of 5 were shipped by April 23 (LLM portability, testimonial substitute); the other 3 (Calendly swap, pricing page, email capture) status as of 2026-07-30 is **UNVERIFIED** in this pass. Given Clarity's proxy-architecture work in June suggests continued active development, these may well be resolved, but this pass cannot confirm without direct repo access.

### 5.6 Recommended next sprint(s)
1. **P1 — verification, not build**: a targeted status check (Fable or Opus, does not require deep judgment) confirming current state of the 3 unresolved April AUDIT.md items (Calendly swap, pricing page, email capture timing) against the live site and Clarity repo directly, closing the UNVERIFIED gap above.
2. **P2**: fold `clarity-v3-positioning-brief-2026-07-10.md`'s recommendations into an updated Clarity brief/EA-status pair (it doesn't have one yet, unlike the 9-product EA canon) so future audits don't have to re-derive Clarity's state from a 3-month-stale wiki.
3. **P3**: apply the same receipts-and-proof-bar cross-promotion pattern already live between Clarity/Career Coach/DCC to NormeScore once NormeScore ships (see section 6) — the infrastructure for this pattern already exists and works.

---

## 6. NormeScore — PRD & Audit

### 6.1 Problem
Regulated Canadian professionals (financial advisers, accountants, insurance brokers, lawyers, and 6 more verticals) lack a credible, sourced tech-readiness benchmark specific to their regulatory context — generic AI-readiness quizzes don't clear the market's credibility bar ("a 5-minute quiz is not an assessment," per the competitive scan already done in `norm-brief.md`).

### 6.2 Users
Regulated-profession SME owners/practitioners across 10 target verticals (9 of 10 benchmark-research sprints DONE as of 2026-07-16/17; bookkeepers held on a pricing-tier decision).

### 6.3 Current state — what's built (per `hal-stack/product-intelligence/norm-brief.md` + `product-readiness-2026-07-25.md`, confirmed no live URL exists anywhere)
This is the portfolio's most structurally-complete-yet-least-deployed product: 21-question diagnostic spec complete, sourced Canadian benchmarks with honest provenance labelling (the stated differentiator), radar + gap-map visualization, conditional CTA logic, a companion 5-question funnel, a content-archive plan, and 4 fully prototyped verticals staged locally (`hal-stack/product-intelligence/norm-staging/`). **None of this is deployed anywhere.** No repo, no live URL, no verify-spec entry — it isn't even on the internal `review.html` staging page alongside other v2 products.

Brand kit (`hal-stack/brand/guidelines/normescore.md`) landed 2026-07-25, explicitly flagged "IN DEVELOPMENT / not live," wordmark-only interim logo.

### 6.4 Non-goals
Per `norm-brief.md`'s own diagnosis: NOT meant to be "just a quiz" — the market credibility bar it's being built against explicitly rules that framing out. Not meant to compete on the 5-question funnel as the headline product; that's explicitly the wrong side of the credibility line unless reframed as de-risking rather than a quiz.

### 6.5 Gap / drift audit — this is a diagnosed, not a discovered, gap
`norm-brief.md` already did the diagnostic work this audit would otherwise have to do from scratch: NormeScore is not blocked on building capacity, it's blocked on three specific Aaron-only decisions, open since **2026-06-29** (over a month as of this pass):
1. **Placement** — own domain vs. aaron-patzalek site vs. TBI main site vs. "the Lab." Nothing downstream (deploy, brand-kit finalization, positioning copy) can proceed without this.
2. **Scope-narrowing** — 3 overlapping ideas (21-q Diagnostic / 5-q Funnel / Content Archive) keep getting re-litigated instead of one being shipped first.
3. **Positioning framing** — must land on the "credible assessment" side of the market's line, not the "quiz" side.

**This pass's own check confirms none of the three have moved since 2026-07-25** (no relevant commits found in git log through 2026-07-30 addressing placement, scope, or NormeScore positioning specifically). This is now a **35-day-old open decision** blocking the portfolio's most fully-built-but-undeployed product. Given the FABLE-TAGGED BACKLOG DECAY pattern already codified in CLAUDE.md for a different kind of stall (Fable capacity), the same underlying principle applies here: a high-completion, high-value asset sitting fully built and undeployed for over a month on a single unmade decision is a real cost, not a neutral "waiting" state.

### 6.6 Recommended next sprint(s)
1. **P0 — Aaron decision, not agent-doable, highest single-lever item in this entire portfolio audit**: make the placement call (1 of the 4 named options). Nothing else in this product can move until this lands.
2. **P1 (mechanical, already scoped) — `S-NORMESCORE-DEPLOY-001`**: once placement is decided, push the existing prototypes to a `-preview.pages.dev` staging path (same pattern used for other v2 products). This is already scoped as trivial and Fable-gated per `product-readiness-2026-07-25.md`.
3. **P1**: resolve the scope-narrowing question in the same conversation as placement — ship ONE slice first (the brief's own recommendation, not re-derived here, is to lead with the Diagnostic, not the Funnel, given the credibility-bar finding).
4. **P2**: apply the Clarity/Career Coach/DCC cross-promotion pattern (proxy-architecture, cross-linking) to NormeScore once deployed.

---

## 7. Two Birds Innovation (company/consulting site) — PRD & Audit

### 7.1 Problem
Two Birds Innovation needs a company-facing site that credibly positions Aaron/the company for consulting engagements and product discovery, without drifting into the "AI consultancy" framing POSITIONING-CANON explicitly forbids.

### 7.2 Users
Prospective consulting clients (SMEs, libraries, municipalities per the "Who We Serve" section), prospective product users discovering DCC/Clarity/NormeScore/KevsCasa through the site's free-tools grid.

### 7.3 Current state — what's built (per ARCHITECTURE-STATUS line 23, live 200 check confirmed)
Live site with hero (split layout, CSS browser mockup + claim/CTAs), a 3-product differentiated free-tools grid (DCC teal / Clarity grey / KevsCasa gold), a "Who We Serve" section (libraries/SMEs/municipalities), Cal.com booking wired (swapped from Calendly for sovereignty, S-CAL-COM-SWAP), favicon added 2026-07-15, self-hosted axe-core. Two full consulting-page design directions were mocked up (A = Minimal+Direct, B = Narrative+Warmth, RECOMMENDED) plus a standalone `consulting-sme.html` direction. **Persona review APPROVED on multiple sub-sprints** (S-TBI-REDESIGN-FABLE, S-TBI-CONSULTING-B).

### 7.4 Non-goals
Not attempting to be a full agency/consultancy site with a large team roster — deliberately reads as "builder/product studio with select advisory," per `career/employability-dossier/linkedin-optimization-2026-07-20.md`, not "an independent consultancy" (explicit non-goal, POSITIONING-CANON section 7).

### 7.5 Gap / drift audit
- **Real, confirmed, still-open blocker**: Phase 2 of the consulting-page rebuild has been blocked on the SAME set of Aaron inputs (live product count + links, headline approval, pricing confirmation CA$2,500?, client sector language, deployment target) since June 19, per ARCHITECTURE-STATUS's own row — over 6 weeks stale as of this pass. Two design directions and a full IA blueprint exist; none of it has shipped because the underlying decisions haven't been made. This is the SAME pattern as NormeScore's placement stall (section 6.5) and DCC's brand-kit pattern: **well-built-but-undecided is the dominant stall shape across this entire portfolio**, not a one-off.
- Font self-hosting debt flagged on `consulting-sme.html` (currently Google Fonts CDN — Lora + Source Sans 3, SIL OFL licensed but still an external CDN call, a sovereignty gap the doc itself already flags as "queued").
- Hero-metric counter grid decision (A/B/C shape) also still listed as an open Aaron-gated item as of the last ARCHITECTURE-STATUS touch on this row.

### 7.6 Recommended next sprint(s)
1. **P1 — Aaron decision batch, not agent-doable**: the 6-7 blocked inputs (product count/links, headline, pricing, client-sector language, deployment target, counter-grid direction) are almost certainly answerable together in one focused session — bundle them into a single decision pass rather than letting them decay further (they're already the portfolio's oldest continuously-open UI blocker).
2. **P2**: font self-hosting for `consulting-sme.html` (mechanical, agent-doable, closes a real sovereignty gap).
3. **P3**: once section 2's positioning recommendation is confirmed by Aaron, apply the company-narrative framing decision to this site specifically (it's the natural landing page for a "follow the story of Two Birds" entry point).

---

## 8. Story Dial / Chronicle / Agency Log / Magpie Scribe — PRD & Audit (the naming-confusion cluster)

### 8.1 Problem
See section 1 for the full naming/relationship context. In product terms: Aaron wants his real, receipts-backed build activity (Story Dial/Chronicle/Agency Log) and his raw captured ideas (Magpie Scribe) turned into structured, trustworthy output without manual effort, without fabrication, and without ever auto-publishing anything he hasn't reviewed.

### 8.2 Users
Aaron (sole operator of both pipelines). Downstream: LinkedIn readers of the Agency Log (5 named audience verticals per `agents/chronicle-agent.md`); internal-only for Magpie Scribe's Idea Vault output.

### 8.3 Current state — what's built
See the full layer map in section 1.3. Summary: Magpie Scribe is FULL BUILD LIVE (confirmed via ARCHITECTURE-STATUS "Fully running" table and its own test suite, both green as of 2026-07-23). Story Dial/Chronicle Layer 1 (weekly Notion stub generation) is live and scheduled; the Chronicle Agent (manual dial-invocation) is a complete, detailed spec; the Agency Log has a visible cadence stall (more unfinished stubs than published posts, per the table in `hal-stack/story-dial/README.md` — entries #006-010 are stubs only).

### 8.4 Non-goals
No auto-publish, ever, for either pipeline (Chronicle writes Draft only; Magpie's board-review tier still requires human review before anything escalates). Not attempting to fully automate Layer 2 chronicling without a Claude Code session (explicitly deferred, sprint-gated).

### 8.5 Gap / drift audit
- **The cadence stall is the real, measurable gap**: Story Dial Layer 1 has been reliably creating weekly stubs (per ARCHITECTURE-STATUS, scheduled and confirmed running) but the Chronicle step (turning a stub into a formatted, reviewed, published entry) has not kept pace — the README table (as of the 2026-07-23 naming-decisions doc) showed 5 of 13 entries stubs-only. The infrastructure works; the conversion-to-published step is where the system is actually leaking value, not the naming (naming was a real but secondary confusion — the deeper issue is a content pipeline that's over-producing raw material relative to what gets finished and published).
- **Correction found mid-pass, same day, different concurrent sprint:** `hal-stack/content-creator/chronicle-recount-findings-2026-07-30.md` (S-CHRONICLE-RECOUNT-001, landed in this repo the same day as this audit, triggered by a separate Aaron complaint about a thin content pull) supersedes the specific "5 of 13 stubs" / "6 stories" counts used above and elsewhere in this document's prior drafts of this section — it found the real count is 14 written stories (not 6), the June 23 audit had misread the automation log instead of the story store, and 328 raw fragments exist where a prior pull surfaced only ~22 because they were flattened into a markdown table incapable of holding a long verbatim. **This is corroborating, not contradicting**, evidence for this document's core finding in section 8.5 (the pipeline over-produces raw material relative to what gets finished/published) and for the general cross-portfolio pattern in section 10 (well-built systems undercounted or under-surfaced due to a measurement/documentation gap, not a build gap). Read that file directly for current, more-verified counts rather than treating the specific numbers in 8.3/8.5 above as final.
- The naming confusion itself (section 1) is a real but comparatively low-cost problem to fix (documentation + trigger-phrase discipline, not a rebuild).

### 8.6 Recommended next sprint(s)
1. **P1**: clear the Agency Log stub backlog (#006-010) — either chronicle them at whatever dial the receipts support, or explicitly archive/retire stale stubs so the "5 of 13 unfinished" number stops being the honest state of the public-facing brand's own visible track record.
2. **P2**: apply the naming-fix recommendations in section 1.6 (retire "StoryArc," add cross-referencing headers to both READMEs) — cheap, immediate, directly answers Aaron's triggering question.
3. **P2**: if section 2's company-narrative positioning direction is confirmed, apply the Meta-Chronicle-pillar voice shift (section 2.2) to future entries.
4. **P3**: revisit Story Dial Layer 2 (auto-chronicle without a session) only after the stub backlog is cleared — building more automation onto a pipeline that's already over-producing relative to its finishing capacity would make the underlying problem worse, not better.

---

## 8A. Companion file headline findings (Opus dispatch, smaller products)

Full detail: `hal-stack/product-intelligence/smaller-products-prd-audit-2026-07-30.md` (Career Coach, KevsCasa, Elite Karate, Quality Dashboard, Aaron Patzalek, Two Birds Command Centre, Family Ops, Webinar Series — 8 PRDs + audits, 628 lines, no em-dashes, 23 live-URL checks logged). This section surfaces only what changes the portfolio-wide picture; read the companion file directly for per-product detail.

**Most severe finding in the whole portfolio audit, this pass or Fable's: the Aaron Patzalek personal site is currently live and violating `career/POSITIONING-CANON.md` in two ways that matter.** (1) The homepage states "20 years" in visible body copy AND in the Person JSON-LD structured data (the part search engines and AI summarizers read and repeat) — the canon (section 8) explicitly retired "20 years" in favour of "15+ years," and `consulting.html` on the SAME site already says "15+ years" correctly, so the site actively contradicts itself and the page a stranger meets first is the wrong one. (2) `consulting.html` reads "built with the same AI-first approach you would be hiring" — a near-verbatim hit on the canon's own DON'T list ("AI-first consultancy") and its explicit "flip it, operations is the noun" rule. This is not a documentation gap, it is live copy actively contradicting Aaron's own explicitly-corrected-ad-nauseam positioning rule, on the site most likely to be a stranger's first impression. **Recommended P0/P1, ahead of several items in section 10.1's punch list below** — this is a mechanical text fix, not a design project, and it's actively live.

**Other findings that change this document's picture:**
- **Quality Dashboard is publishing two false rows**: Clarity shown as "Pending" (confirmed live, 200 per section 0.4's own check), `kevins-apartment-search` shown as "Live" at a GitHub Pages URL that 404s (real deploy is `kevins-apartment-search.pages.dev`). A health-status dashboard asserting a dead link is live is the same failure class as the standing NO FAKE TIMESTAMPS rule, applied to link/status data instead of a date.
- **Two Birds Command Centre and Command Deck are confirmed genuinely separate products** (different repos, different hosts, different nav) — this resolves an explicit open question in `hal-stack/docs/dashboard-inventory-2026-07-11.md` ("could not be confirmed, do not assume either way"). Command Centre is live (200) but its `data/projects.json` is frozen at `lastUpdated: 2026-04-22`, 99 days stale as of this pass.
- **The seniors webinar (Webinar Series product) has a closing window**: suggested dates Aug 12/19, with 3 blocking Aaron actions (venue email, platform pick, date lock) appearing untaken as of this pass, and the plan's assumed Zoom Pro subscription (~US$15.99/mo) would be a second unratified paid appendage under ADR-0036, needing a decapitation-checklist row before signup, not a silent purchase.

**Revised cross-portfolio punch list (supersedes section 10.1's ordering below, insert as new #2):** the Aaron Patzalek "20 years"/"AI-first" fix is added at P1, immediately after NormeScore placement — it is faster to fix than anything else in the whole audit (mechanical text edit) and is the only item found in either file that is a LIVE, ACTIVE canon violation rather than a stalled decision.

---

## 9. Audits of already-existing PRDs (not rewritten, verified against current state)

### 9.1 Job Command Center (`hal-stack/product-intelligence/job-command-center-prd-2026-07-26.md`)
PRD states "BUILT this sprint" (2026-07-26) with a full close-out "What shipped" section (pipeline.html, sunset edits, ADR-0041). This is a completed-and-closed PRD, not an open one. **Audit verdict: matches — no drift found.** The Notion Job Pipeline sunset (ADR-0041) referenced in this PRD is consistent with CLAUDE.md's current JOB PIPELINE rule text (retired to read-only archive), confirming the PRD's stated outcome actually took effect in governance, not just in the PRD doc itself. No further action needed from this audit; this is a model example of a PRD that shipped and closed cleanly.

### 9.2 Ready Room (`hal-stack/product-intelligence/backlog-decision-assistant-prd-2026-07-26.md`)
PRD states "PRD + Phase 1 demo SHIPPED," with two explicit open forks (claude.ai Project sync — recommended AGAINST, ~80% confidence; voice input — recommended FOR Web Speech API, ~75% confidence) awaiting Aaron's call before Phase 2. **Audit verdict:** could not confirm from this environment whether Aaron has since made the Phase 2 call (would require checking `aaron-deck.pages.dev/ready-room.html` behind its password gate, or a subsequent SESSION-STATE entry not captured by this pass's targeted reads). **Flagged UNVERIFIED, not assumed either way.** Recommended: a quick status check (not a rebuild) to confirm Phase 2 status before this PRD is treated as stale.

### 9.3 LWICD series (`hal-stack/content/look-what-i-can-do/PRD-lwicd-series.md`)
Full 279-line PRD with real competitive research (Riley Brown, Superhuman newsletter, etc.), format spec, 32-episode backlog. **Audit finding:** the `look-what-i-can-do/` directory contains only the sprint brief and the PRD itself — **no actual episode scripts, drafts, or published content found in this repo.** This is a fully-specified, zero-executed product, the same "well-planned, not deployed" shape found repeatedly across this portfolio (NormeScore, TBI consulting rebuild, DCC video pilot). **Recommended: P2, treat as a real backlog candidate** — the planning cost is already sunk and thorough; the gap is pure execution capacity, not more research or design.

### 9.4 Judgment Calibration (`hal-stack/product-intelligence/aaron-judgment-calibration-skill-2026-07-26.md` + `ADR-0040-judgment-calibration-layer.md`, PROPOSED)
Full PRD with 7-mentor + Founding Board consultation, gap analysis vs. existing CLAUDE.md/memory system, 25 interview questions drafted, 3-strike distillation loop design. **Audit finding:** no corresponding `.claude/skills/` implementation found in this repo (`find .claude/skills -iname "*judgment*"` returned nothing) — this is a PROPOSED ADR (per its own filename), meaning it was explicitly filed as a decision awaiting ratification, not yet built. **Consistent with its own stated status; no drift.** **Recommended: P2** — confirm with Aaron whether ADR-0040 should be moved from PROPOSED to ACCEPTED, since the design work is thorough and complete; this reads like a decision waiting on the same kind of single Aaron sign-off found elsewhere in this audit (DCC brand kit, TBI consulting inputs, NormeScore placement) rather than a genuinely unresolved design question.

---

## 10. Cross-portfolio synthesis — the pattern this whole audit surfaces

**The dominant failure mode across this ENTIRE portfolio is not under-building. It's over-planning relative to decision-closure.** Every major stalled item found in this pass has the same shape: thorough, well-researched, often fully-built work sitting inert behind exactly one unmade Aaron decision:
- NormeScore: fully prototyped, 4 verticals staged, blocked 35+ days on a placement decision.
- TBI consulting rebuild: two full design directions + IA blueprint, blocked 6+ weeks on a bundle of ~7 small decisions.
- DCC video pilot: script + storyboard complete, blocked on a pilot sign-off + render-tool ADR.
- KevsCasa/Housing: a fully-decomposed 9-task EPIC sitting "Ready" in Notion, blocked on a buyer-strategy decision (consumer vs. B2B-navigator pivot).
- LWICD series: 279-line PRD with 32-episode backlog, zero episodes executed.
- Judgment Calibration: complete PRD + PROPOSED ADR, zero ratification, zero build.
- The naming-confusion itself (section 1): resolved once in writing on 2026-07-23, restated identically here, because a written decision without a surfaced re-triggering point doesn't stick.

**This is a structural pattern, not 7 unrelated stalls.** The portfolio's actual bottleneck right now is not agent capacity, research quality, or build velocity — all of those are demonstrably strong (this audit itself, produced in one session against a documentation base this deep, is evidence of that). The bottleneck is **Aaron decision-closure velocity on already-fully-scoped choices.**

### 10.1 Portfolio-wide recommendation (proportionate, not a new framework)
Do not build new infrastructure for this. The existing Handoff Model, autonomy-audit loop, and Notion human-backlog filing already correctly route these as "Approval-gated" or "Human-only" — they are correctly classified, just not moving. The fix that fits the size of the problem: **a single batched decision session** (the same pattern already proven to work — see commit `1a4141d6`, "decisions 1-5 walked live with Aaron 2026-07-30," which cleared 3 unrelated stalls, TTS/accessibility-link/incorporation, in one sitting) applied specifically to the 5-6 items surfaced in this audit as the highest-value closed-but-undecided items:

**Prioritized cross-portfolio punch list (highest leverage first):**
1. **P0 — NormeScore placement decision** (section 6.6) — single highest-leverage item in the whole portfolio; unblocks a fully-built product.
2. **P0 — DCC video pilot 01 sign-off + brand-kit final stamp** (section 4.6) — brand kit review is visibly close (iterating, not stalled), pilot script is ready to review.
3. **P1 — TBI consulting-page decision bundle** (section 7.6) — 6-7 small decisions, all answerable in one session, blocking the company's own consulting front door.
4. **P1 — KevsCasa/Housing naming + buyer-strategy decision** (referenced via `product-readiness-2026-07-25.md`, detailed in the companion Opus file) — same shape, same fix.
5. **P2 — Agency Log stub backlog** (section 8.6) — clear or retire 5 stalled entries.
6. **P2 — Judgment Calibration ADR-0040 ratification call** (section 9.4) — cheap to close, unblocks a genuinely useful system.
7. **P3 — naming-fix mechanics** (section 1.6) — cheap, high-clarity-value, purely agent-doable, no Aaron decision required beyond optionally picking an umbrella name (not required).

---

## 11. Methodology appendix — what this pass could NOT verify

Per the standing completeness rule: this section states plainly what was left unread rather than letting the rest of the document imply totality.
- The actual product source code for DCC, Clarity, Career Coach, KevsCasa, Elite Karate, Quality Dashboard, and Two Birds Innovation lives in separate repos not present on this machine. All "what's built" claims for those products rest on documentation in this repo (extensive, but not the code itself) plus live HTTP status checks (status code only, not full content audits, except where WebFetch was used).
- Notion (the human backlog, the Idea Vault, the Agency Log database itself) was not queried live in this pass — all Notion-sourced claims come from markdown mirrors, EA status files, or prior sprint notes already in git, not a fresh Notion read.
- `hal-stack/docs/ARCHITECTURE-STATUS.md` was read via targeted `sed`/`grep`, never fully, per its own stated trap-line warning (lines 4 and 9). This means any content in that file NOT captured by the specific line ranges pulled in this pass (product table rows 15-27, HAL components 30-165, gaps 241-269) was not read. The file is only 269 lines total, so this is a small, bounded gap, but stated for completeness.
- The 7 products in the companion Opus-authored file (`smaller-products-prd-audit-2026-07-30.md`) are covered there, not duplicated here — see that file for their PRDs/audits.

---

*End of Fable-authored portion. Companion smaller-products file: `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/product-intelligence/smaller-products-prd-audit-2026-07-30.md`*
