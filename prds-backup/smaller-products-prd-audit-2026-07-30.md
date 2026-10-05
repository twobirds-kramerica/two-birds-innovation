---
BACKUP NOTICE: Point-in-time snapshot backup created 2026-10-04 for Two Birds Innovation.
STATUS: Static archive snapshot (may be stale).
LIVE SOURCE OF TRUTH: The live, active documents are maintained in Notion and git at twobirds-kramerica/two-birds-portfolio.
CANONICAL REPO PATH: two-birds-portfolio/hal-stack/product-intelligence/smaller-products-prd-audit-2026-07-30.md
NOTION REFERENCE: https://app.notion.com/p/3a7a09cf876a81deaf0cd2e00b5a4c5a?pvs=204
---

# Smaller Products: PRD + Build Audit (8 products)

**Date:** 2026-07-30
**Author:** Claude Code (Opus), dispatched slice of a split PRD-authoring run
**Format precedent:** `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/product-intelligence/job-command-center-prd-2026-07-26.md` (matched for depth and section shape, adapted from single-sprint to ongoing-product form)
**Live checks:** all HTTP status codes and rendered-copy quotations in this file were taken by `curl` against the production URLs on 2026-07-30. Every one is stamped inline.

## Scope of this file, and why these eight

This file covers eight products: **Career Coach, KevsCasa, Elite Karate Site, Quality Dashboard, Aaron Patzalek, Two Birds Command Centre, Family Ops, and the Webinar Series (AI 101 / Seniors)**. They were split out for Opus-tier execution because each is either well-documented already (a brief plus an EA status file exists), mechanically verifiable (a live URL to curl), or small and private enough that the work is documentation rather than judgement. A parallel Fable-tier session owns the larger and strategically-contested products (DCC Adults, DCC Kids, Clarity, and NormeScore) plus the cross-portfolio synthesis. NormeScore is explicitly out of scope here and is not touched.

**Read limits stated up front, per the no-silent-partial rule.** The actual site code for every product below lives in separate repos that are **not checked out in this environment**. I could not read a single line of production HTML, CSS, or JS. Everything in the "what's built" and "gap / drift" sections is derived from three sources only: (1) documents in `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/`, (2) targeted greps and `sed` line reads of `hal-stack/docs/ARCHITECTURE-STATUS.md`, and (3) live `curl` fetches of the deployed pages, rendered to text. Where a finding depends on code I could not see, it is labelled as inferred. Three specific things I could not verify at all and do not guess about: the KevsCasa repo contents (private), the Command Deck contents behind its password gate, and the Elite Karate repo contents (not checked out, no live deploy).

**Recommended sprints in this file are written to be pasteable but are NOT filed.** Nothing here has been written into `hal-stack/sprint-system/sprint-queue.md` or Notion. That is a separate step Aaron triggers.

---

## 1. Career Coach

**Live:** https://twobirds-kramerica.github.io/career-coach/ (curl 2026-07-30: **200**)
**Primary sources:** `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/CAREER-COACH-WIKI.md`, `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/product-intelligence/career-coach-brief.md` (2026-07-03), `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/ea/status/career-coach.md` (generated 2026-07-25)

### 1.1 Problem

Canadian job seekers, especially people mid-transition out of operations, services, or telecom roles, get help from AI tools that embellish, keyword-stuff, and produce copy a recruiter can spot as machine-written in about twenty seconds. Career Coach productises the anti-fabrication editing discipline Aaron built for his own job hunt (the "Editor" persona from the 2026 Job Application Suite) into a tool anyone can use, with the user's own API key so no third party holds their job search. The 2026-07-03 brief sharpens the problem statement considerably: the resume-tailoring function itself is a commodity owned by Jobscan, Rezi, Teal, Kickresume and five Canada-native competitors, so the actual unsolved pain is **verifying a posting is real before any effort is spent on it** (roughly one in three postings is a ghost job, and Ontario's anti-ghosting law took effect 2026-01-01).

### 1.2 Users

Canadian job seekers in career transition. In practice today the only confirmed user is Aaron, since the brief is explicit that this is pre-launch and no real Canadian job seeker has been watched completing onboarding (flagged in the wiki's section 7, item 5, and never closed). The brief's intended v2 user is narrower: Canadians who refuse to spray applications, with a genuine thin spot in bilingual federal (NOC-aware, real EN/FR) applications.

### 1.3 Current state, what is built

Confirmed live by curl on 2026-07-30 against the homepage:

- A three-step onboarding wizard ("About You", "What Matters to You", step 3 unread in the text render) collecting employment status, salary floor and target, location, hybrid/remote/relocation tolerance, preferred sectors, work type, and a ranked priorities list.
- A **provider picker** offering Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), and **Ollama (local, no key)**. This is the LLM portability layer the wiki records as shipped in commit `9d7e44e`.
- An **FR toggle** in the header, so at least the shell is bilingual.
- Voice input affordances ("Prefer to speak? Tap the microphone beside any field").
- Data controls: Export CSV, Export All Data (JSON), Clear all jobs, Reset profile.
- Privacy claims rendered in-page: "All job data is stored only in your browser. Nothing leaves your device except API calls to analyse jobs."
- Positioning line: "Land the job. Know your worth. Own your story." with three badges: privacy first, Canadian-built, free to use.
- `pricing.html` (curl 2026-07-30: **200**) is still a stub. Full rendered text: "Coming Soon / Career Coach Pro / Advanced features including full defendability controls, multiple profiles, analytics, and priority support."

Per `hal-stack/ea/status/career-coach.md`: verify-gate spec exists under key `career-coach` (confirmed present in `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/verification/verify-specs.json`); last shipped 2026-07-16, commit `8ed1f40`, a security fix obfuscating the stored API key at rest and dropping `document.write()`; one open backlog item, `S-CAREER-COACH-APTITUDE-ASSESSMENT-001`, which is an Aaron-gated future-product idea rather than a stall.

The consulting site describes it publicly as seven AI tools (job analysis, cover letter, interview prep, salary negotiation, follow-up email, LinkedIn optimiser, resume keyword analysis). I could not verify all seven from the homepage render, which stops at the onboarding wizard.

### 1.4 Non-goals

- **Auto-apply or volume submission.** The brief marks this a permanent never, not a later: it contradicts human-decides and carries account-ban risk.
- **A full career OS, CRM, or heavyweight tracker.** The market runs three-to-four-tool stacks by choice; owning the whole stack rebuilds Teal and Careerflow badly.
- **Template quality as a differentiator.** Ship adequate output, do not compete on templates.
- **Any server-side storage of a user's job search.** Client-side only is the product's spine, not an implementation detail.
- **A backend.** Static HTML/CSS/JS only, per the first non-negotiable rule.

### 1.5 Gap and drift audit

**Drift 1, the most material one: BYOK has been quietly demoted on the live product.** The wiki (`CAREER-COACH-WIKI.md` section 2) describes the privacy model as "bring-your-own-key LLM plus client-side only". The 2026-07-03 brief goes further and calls BYOK "the single most defensible thing in the whole analysis, protect it as a first-class pillar, not an engineering detail". But the live settings panel, rendered 2026-07-30, reads: *"Career Coach uses AI to analyse your applications. The API key is already configured, you do not need to change anything here."* The provider and key controls sit underneath a collapsed **"Advanced"** disclosure. So a shared or proxied key is now the default path and BYOK is an advanced option. That is the opposite of the brief's instruction to market it rather than bury it, and it likely means calls are routed through a shared Worker (the repo documents a shared clarity-proxy Worker pattern serving two products). **I could not confirm the routing, because the JS is in a repo I cannot read.** Whether this is a deliberate onboarding-friction decision or unintentional drift is exactly the question that needs answering, and the answer changes the privacy claim on the page: "nothing leaves your device except API calls to analyse jobs" is true either way, but if those calls go through a Two Birds proxy rather than direct to Anthropic, the sentence is doing more work than it looks like it is.

**Drift 2: the brief's entire wedge is unbuilt.** Gate Zero ghost-job verification, the Ontario anti-ghosting realness flag, live ATS keyword scoring gated behind a cleared posting, and bilingual-federal NOC depth are the four BUILD items from the 2026-07-03 brief. None of them are visible on the live product. The FR toggle exists, which is the shell for bilingual, but that is not the same as federal-application depth. This is not a regression, the brief was direction-setting and predates no build sprint, but it means the product shipped today is still the commodity resume tool the brief says is dead on arrival as a general tool. **The brief has now been open for 27 days with no build against it.**

**Drift 3: the wiki is 98 days stale and no longer matches the product.** `CAREER-COACH-WIKI.md` is stamped 2026-04-23, describes the product as v0.1 MVP, and its Top-5 audit list does not know about the 2026-07-16 security work or the shared-key change. Its two open items (pricing.html, Pro-launch email capture) are both still genuinely open, which I confirmed live, so it is not wrong so much as frozen.

**Confirmed still open, not drift:** `pricing.html` is still a Coming Soon stub and the blocking question ("what IS Pro?") is still unanswered after three months. The Pro-launch email capture is still not built. The EA status file's next_action flags a SESSION-STATE freshness check as of 2026-07-25.

**Could not verify:** whether all seven advertised tools work, whether any AI output has ever been quality-checked against a real cover letter (wiki section 7 item 3 says never validated), and whether the security fix at `8ed1f40` fully covers the shared-key path.

### 1.6 Recommended next sprints

| P | Item | Note |
|---|---|---|
| **P1** | **Resolve the BYOK question and make the privacy copy exactly true.** Read `js/llm-provider.js` and the settings panel in `C:\twobirds\career-coach`, determine whether the pre-configured key routes through a Two Birds Worker, and either (a) restore BYOK as the default and marketed pillar per the brief, or (b) keep the pre-configured default but state plainly on-page where the request goes. Do not leave the current ambiguity live. | Touches a truthfulness claim, so this outranks feature work |
| **P1** | **Spike Gate Zero as a standalone module** against 5 to 10 live postings using the Workday CXS / Oracle ORC / Ashby JSON patterns already proven in `hal-stack/job-search/`. Prove the realness verdict before any UI. Brief step 2, agent-doable, still unstarted after 27 days. | The whole differentiation thesis rests on this working |
| **P2** | **Write `PRODUCT.md` for Career Coach** locking the wedge (verify-first, BYOK, bilingual-federal) with auto-apply and full-OS explicitly out of scope. This is the DESIGN GATE prerequisite for any future UI sprint and it does not exist. | Brief step 1 |
| **P2** | **Refresh `CAREER-COACH-WIKI.md`** to current state, or mark it explicitly as an archived April snapshot and point to the brief plus EA status file as the live pair. A wiki that reads current but is 98 days old is the same failure class the NO FAKE TIMESTAMPS rule targets. | Cheap, doc-only |
| **P3** | **Decide what Pro is, or delete `pricing.html`.** A Coming Soon page that has been coming soon for three months is worse than no page. If Pro is not a near-term decision, remove the link rather than advertising a stub. | Blocked on an Aaron decision either way |
| **P3** | Pro-launch email capture (Formspree, on CSV export or after first analysis). Only worth building after the Pro decision above. | Wiki AUDIT item 5 |

---

## 2. KevsCasa (repo `kevins-apartment-search`, private)

**Live:** https://kevins-apartment-search.pages.dev (curl 2026-07-30: **200**)
**Also checked:** https://twobirds-kramerica.github.io/kevins-apartment-search/ (curl 2026-07-30: **404**, expected, the deploy is Cloudflare Pages not GitHub Pages)
**Repo privacy:** private, and correct. This carries real listing and personal data, so private is the required default. The absence of a public GitHub Pages URL is not a defect.
**Primary sources:** `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/product-intelligence/kevscasa-brief.md` (2026-07-03), `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/ea/status/kevscasa.md` (2026-07-25), `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/brand/guidelines/housing-product.md`, `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/strategy/naming-decisions-2026-07-23.md`, ARCHITECTURE-STATUS.md line 25.

### 2.1 Problem

Kevin needed to find an apartment in London, Ontario under a hard deadline (house sold, vacate 2026-07-30, which is **today**). Aaron did the searching for him: verifying bot-blocked listings by hand, encoding hard criteria, killing dead links, ranking what was left. The tool exists because that labour needed a surface. The 2026-07-03 brief reframes the general problem: as a consumer product, ranked apartment search is dead, undercut by six-dollar weighted-scoring spreadsheets below and free aggregators above. The unsolved problem is the **searcher-on-behalf-of**: a settlement worker, housing navigator, or family helper building a verified ranked shortlist for someone who cannot search for themselves because of language, unfamiliarity with neighbourhoods, or inability to tell a real listing from a scam. Nobody ships software for that; it is done today with caseworker time.

### 2.2 Users

**Kevin**, named, one person, the live and only confirmed user. His operational need explicitly outranks all product work per the brief's section 2. The intended second user in the B2B frame is a **housing navigator or settlement worker** at a newcomer-settlement agency, with the family or renter as a downstream recipient reading a shared shortlist on a phone. No navigator user exists yet; no design partner has said yes.

### 2.3 Current state, what is built

From ARCHITECTURE-STATUS.md line 25 (read via `sed -n '25p'`), which is a dense single-line sprint log:

- **Direction B "Decision Cards" UI** shipped 2026-06-19 (`S-DESIGN-KEVSCASA-001`): three-button CALL / VIEW / SKIP CTA replacing the old hero-image card, a progress strip (Active / Called / Viewed / Not yet) above the listings grid, a single Filters pill, and a "call next" floating action button. The prior status tracker was preserved as a hidden sync layer.
- **Composite match score** 0 to 100 plus letter grade A to F on all 27 listing cards and the detail page, via a shared `js/kas-score.js` weighting Safety 35 / Transit 25 / Lifestyle 20 / Budget 15, with signals grouped by category and a collapsible "How we score" methodology panel. This is the explainable-scoring pillar the brief demands.
- **Tenant rights content**: `rights.html` (six sections, FAQPage JSON-LD) and `responsibilities.html` (five sections), both noindex per ADR-0010, with a `data-province="ON"` stub for future multi-province expansion.
- Full-bleed image cards with price-overlay gradient and rank badge, key chips (beds, baths, sqft, commute, colour-coded crime band), price-label Leaflet map pins, hover mini-card, sticky filter bar with active-filter count, mobile bottom nav with 48px touch targets.
- Criteria bottom sheet with all nine editors, a five-step first-run setup flow, soft filtering, toast notifications.
- CMHC market context bar (London ON 3.2% vacancy, CMHC Oct 2025), hardcoded annual public data with no runtime API.
- SMS share ("Text my top picks", `sms:` URI, sovereign tier L1).
- ARCHITECTURE-STATUS scores it "est. 17/20".
- A verify-spec exists under key `kevscasa` pointing at the Pages URL, so the nightly sweep covers it.
- Last shipped 2026-07-16, commit `acc0ffb`, a merge of the phone-backfill branch.

A brand kit exists at `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/brand/guidelines/housing-product.md` (v1, 2026-07-23) titled "Housing Product (name TBD, formerly KevsCasa)", specifying Harbour Navy and Gold, status colours, Inter type, and a hard rule: **never use Kevin's name or data in any external-facing surface.**

### 2.4 Non-goals

- **Consumer self-serve signup.** Explicitly parked indefinitely by the brief: it walks straight into the free-spreadsheet floor.
- **Automated listing ingestion or scraping.** Bot-blocking is precisely why Kevin's listings needed manual verification. Keep intake manual or assisted.
- **Multi-tenant auth (Workers, D1, magic links).** Correct architecture per ADR-0010 but parked until a design partner commits. Cloudflare Access covers any interim need with zero code.
- **Payments or billing.** No pricing decision belongs in a pre-design-partner build.
- **Building-reputation scoring** (ORA-style community scores). Different product. Borrow only the transparency lesson.
- **A browsing surface.** The product is a decided queue, not a place to browse the market.

### 2.5 Gap and drift audit

**Open item 1, the naming decision, is genuinely unresolved and now blocks external work.** `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/strategy/naming-decisions-2026-07-23.md` records a full two-round rename research pass. Round one recommended **CharlieCasa** with `.com`/`.ca`/`.ai` all verified available by live RDAP; Aaron rejected it because he dislikes "Charlie". Round two screened seven new candidates and landed on **SamCasa** as top pick with **RemyCasa** as the warmer runner-up and KamCasa as fallback, all three verified clean on `.com`, `.ca`, and `.ai` by RDAP on 2026-07-23. The document is explicit: *"This is OPTIONS ONLY. No rename has been executed anywhere in any repo."* Seven days later that is still true. The brand kit at `housing-product.md` compounds it by stating the name is TBD and **"KevsCasa does NOT ship externally without Aaron's naming decision"**, which means the naming decision is now a hard gate on the `for-agencies.html` reframe, any logo work, and any outreach. Domain availability was verified on 2026-07-23 and the doc itself warns that domain state can change any hour, so the RDAP result is now seven days stale and would need re-checking at purchase.

**Open item 2: the consumer-versus-navigator frame is undecided and is blocking a nine-task EPIC.** Per `hal-stack/ea/status/kevscasa.md`, the "EPIC: Aaron's Rental Search Platform" (`P2-RENTAL-*`, nine sub-tasks) sits "Ready" in the Notion mirror but is not in `sprint-queue.md`, and building it as scoped would ship infrastructure for exactly the consumer frame the brief argues is commoditised. Two Aaron decisions gate it: the name, and the frame. Neither has moved.

**Drift: ARCHITECTURE-STATUS.md line 25 and the brief disagree about what this product is,** and neither cross-references the other. Line 25 is a consumer-product build log (listing cards, filters, map pins, score chips). The brief says the consumer frame is the wall. A reader of the status line alone would conclude the product is healthy and progressing; a reader of the brief would conclude it is pointed at a dead market. Both are true at once, which is worth saying explicitly somewhere rather than leaving the two documents to contradict each other silently.

**Timing risk that nobody has flagged in these files:** Kevin's vacate deadline in the brief is **2026-07-30, which is today**. The brief's step 1 was "keep Kevin whole, manually verify the seven bot-blocked London listings". Whether that happened, and whether Kevin has housing, is not recorded in any file I can read. **I cannot verify Kevin's status and am not guessing.** If the deadline passed, the product's only real user just changed state, and that is a material input to every decision above.

**Could not verify:** anything about the actual codebase, since the repo is private and not checked out. All build detail above is from the ARCHITECTURE-STATUS line, which is a sprint log written by prior sessions, not an independent check. The live site returned 200 but I did not render or inspect its content.

### 2.6 Recommended next sprints

| P | Item | Note |
|---|---|---|
| **P1** | **Confirm Kevin's housing status** and, if the 2026-07-30 deadline is live or just passed, treat the tool's accuracy for him as the only priority. Record the outcome somewhere durable. Everything else in this list is subordinate. | Human-only, but the answer changes the roadmap |
| **P1** | **Aaron decision: pick the name.** SamCasa or RemyCasa, both fully verified clean 2026-07-23. Re-run RDAP at purchase time. This one decision unblocks the brand kit, the logo, `for-agencies.html`, and all external positioning. It has been open seven days and the research is complete, so nothing is missing except the choice. | Human-only (taste). File as an Aaron action, not a sprint |
| **P1** | **Aaron decision: consumer versus B2B navigator frame** (brief decision D-1; HAL's read is (a), funded newcomer-settlement agencies). This gates the nine-task `P2-RENTAL-*` EPIC. Do not build the EPIC before the answer. | Human-only (strategy) |
| **P2** | **Reconcile ARCHITECTURE-STATUS.md line 25 with the brief.** Add one sentence to the status row noting the 2026-07-03 brief argues for a B2B pivot, so a future reader does not read the build log as a mandate to keep building the consumer surface. | Doc-only, prevents a wrong autonomous build |
| **P2** | **Write `PRODUCT.md` for the housing product** from the brief's section 4 two-actor shape (navigator console plus family-facing shareable shortlist). Required by the DESIGN GATE before any UI sprint, and does not exist. | Agent-doable, brief step 3 |
| **P3** | Close `S-KEVSCASA-PHONE-BACKFILL` (capture `contact_phone` into listings), the single open sprint-queue item. | Small, mechanical |

---

## 3. Elite Karate Site (Kirk's Elite Karate Club)

**Live:** none. Verified 2026-07-30 by curl across five plausible paths, all **404**: `/elite-karate-site/`, `/kirks-karate/`, `/elite-karate/`, `/kirks-karate-site/`, `/karate/` under `https://twobirds-kramerica.github.io`.
**Status:** **stalled on Aaron, not a build gap.** The site is repo-complete and design-audited. The blocker is a human decision.
**Primary sources:** `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/product-intelligence/elite-karate-brief.md` (stub, 2026-07-24), `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/ea/status/elite-karate.md` (2026-07-25), ARCHITECTURE-STATUS.md line 26, and the three mockups plus gallery in `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/quality/`.

### 3.1 Problem

A local martial arts club in St. Thomas, Ontario needs a website that converts parents and adult prospects into booked free trial classes, competing against three documented local rivals including Legacy Shorin Ryu. The current problem the design work identified is conversion framing: the site's call to action was "Join the Team" rather than "Book a Free Class", and it carried no risk-reduction line, no testimonials, and no instructor credentials.

### 3.2 Users

Kirk (the club owner, the client), plus three documented audience personas in `customer-positioning-draft.md` in the `elite-karate-site` repo (which I could not read, it is not checked out). Aaron is the builder and the current deploy blocker. This is the only product in this file with an external, non-Aaron client.

### 3.3 Current state, what is built

From ARCHITECTURE-STATUS.md line 26 and the EA status file:

- **Design system v1 complete**: `DESIGN.md` with 12 colour tokens, a typography scale, a button system, five component specs, an IA gap analysis, and photography direction for 26 real photos. Plus `PRODUCT.md` (current state, three local competitors documented) and `customer-positioning-draft.md`.
- **Three homepage direction mockups, self-contained, in this repo** and readable: `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/quality/design-mockup-kirks-A-social-proof.html` (14.6 KB), `.../design-mockup-kirks-B-bold-programs.html` (15.2 KB), `.../design-mockup-kirks-C-instructor-led.html` (16.0 KB), plus `.../design-mockup-kirks-gallery.html` (19.1 KB). **Direction B is the recommended pick and the owner's pick, with C's contact anchor stolen into it.** Screenshots exist under `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/quality/playwright-results/`.
- **Conversion fixes already shipped** (`S-KIRKS-DESIGN-SKILLS-001`, 2026-06-21, commit `9c361bb`): hero CTA changed to "Book a Free Class" with the risk-reduction line "No experience needed. No commitment. Your first class is free."; "Try this class" links on class cards; "Book free" inline links on all five schedule rows; contact CTA and mailto subject updated.
- **Build hygiene done** (`S-ELITE-KARATE-CDN-FIX`, commit `35ad438`): the `cdn.tailwindcss.com` JIT script replaced with self-hosted `css/style.css`, Google Fonts replaced with self-hosted Inter (SIL OFL), skip link added, mobile menu ARIA wired, `lang="en-CA"` on the admin page, `robots.txt` disallowing `/admin/`, `privacy.html` written, one Canadian-English spelling fix.
- **IA audit done** (`S-IA-AUDIT-KARATE-001`, 2026-06-27): Contact added to desktop and mobile nav; two findings deferred.
- **Last shipped 2026-07-16**, commit `8463640`, a security fix pinning the Decap CMS unpkg dependency and adding SRI. That is maintenance on a dormant site, which is consistent with ready-but-unpublished.
- **Zero open sprint-queue items** matching this product's pattern.

### 3.4 Non-goals

- Not a booking system, a payments system, or a member portal. It is a marketing site with a Decap CMS admin and a mailto contact path.
- Not multi-location or franchise-shaped. One club, St. Thomas.
- Not a Two Birds product. It is client work, so its roadmap is Kirk's, not the portfolio's.

### 3.5 Gap and drift audit

**The single finding: this product is blocked on Aaron and has been for at least six weeks.** Design work finished 2026-06-19 to 2026-06-27. The only activity since is a 2026-07-16 dependency pin. ARCHITECTURE-STATUS.md line 26 records **Phase 2 blocked on six items owed by Kirk or Aaron: belt rank, testimonials, price, phone number, free-class offer terms, and photo IDs.** An Aaron action was filed at P2. Nothing has moved. This is not a build gap and should not be reported as one.

**Secondary finding: the deploy status is genuinely ambiguous across the docs and I resolved it.** `hal-stack/ea/status/elite-karate.md` says "no live_url on file, deploy status is genuinely unclear from mechanical sources alone". The registry at `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/ea/products-registry.json` has `live_url: null`. ARCHITECTURE-STATUS says "Design-ready, deploy pending Aaron". **I checked five URL variants live on 2026-07-30 and all five returned 404. It is not deployed anywhere under the `twobirds-kramerica.github.io` domain.** The status file's uncertainty can be closed with that answer.

**Gap: no verify-spec entry.** Confirmed by reading `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/verification/verify-specs.json`: the eight keys present are `kevscasa`, `dcc-adults`, `dcc-kids`, `clarity`, `aaron`, `tbi`, `career-coach`, `dcc-classic`. No karate key. Per the LIVE-OUTCOME VERIFICATION rule, an entry must be added at launch so the nightly sweep covers it from day one. Right now that is correct behaviour (nothing to verify), but it is a launch-day checklist item that will be easy to forget.

**Gap: no full product-intelligence brief.** Only a stub exists, created 2026-07-24 purely so the EA status generator had something to point at. It defers to `PRODUCT.md` and `DESIGN.md` inside the repo, which are not checked out here.

**Unresolved design decisions still deferred:** the "Dojo Floor" label is a brand decision deferred to Aaron (IA audit finding F2), and nav/heading consistency is deferred to Phase 2 (F3).

**Could not verify:** the actual site's current state. The repo is not checked out, there is no live deploy, and the three mockups in this repo are standalone design directions, not the real site. Everything above is from sprint logs.

### 3.6 Recommended next sprints

| P | Item | Note |
|---|---|---|
| **P1** | **Get the six blocked items from Kirk.** Belt rank, testimonials, price, phone, free-class offer terms, photo IDs. This is one email or one phone call and it is the only thing standing between a finished site and a live one. Six weeks of a completed build sitting dark is the real cost here. | Human-only. The Aaron action is already filed at P2 and should probably be P1 |
| **P1** | **Aaron picks the direction and ships it.** Direction B plus C's contact anchor is already the recommended and stated owner's pick, so this is a confirmation, not an evaluation. Then deploy to GitHub Pages. | Human decision plus a short deploy sprint |
| **P2** | **At deploy time, add a verify-specs entry** under a `karate` key so the nightly sweep covers it from day one, and update `hal-stack/ea/products-registry.json` with the live URL (currently `null`). | Two-line change, easy to forget, so pair it with the deploy |
| **P2** | **Close the deploy-status ambiguity in the docs now.** Update `hal-stack/ea/status/elite-karate.md` and the stub brief to say "confirmed not deployed, five URL variants checked 404 on 2026-07-30" rather than "genuinely unclear". | Doc-only, removes a recurring re-investigation |
| **P3** | Resolve the two deferred IA findings (Dojo Floor label, nav/heading consistency) as part of the launch pass, not before. | Bundle with deploy |
| **P3** | Write a real product-intelligence brief once the site is live and there is a client relationship to describe. | Not urgent while dark |

---

## 4. Quality Dashboard

**Live:** https://twobirds-kramerica.github.io/quality-dashboard/ (curl 2026-07-30: **200**)
**Repo:** `twobirds-kramerica/quality-dashboard`, not checked out here.
**Note on sources:** this product has **no brief and no EA status file** (it is not one of the nine EA-canon products) and **no row in ARCHITECTURE-STATUS.md** (grep for "quality-dashboard" and "Quality Dashboard" in that file returns nothing). The `quality/` directory in this repo is QA artifacts (Playwright results, audits, personas), **not** this product's source. Context here comes from `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/docs/dashboard-inventory-2026-07-11.md` section 4, `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/sprint-system/sprint-queue.md` (S-QUALITY-DASHBOARD-FRESHNESS-001, lines ~2232 to 2242), `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/legal/ip-ownership-declaration.md` line 123, and my own live render.

### 4.1 Problem

Aaron runs ten-plus repos as a one-person operation and cannot hold each one's health in his head. The dashboard answers "which of my repos is quietly rotting" by scoring each against eight indicators via the unauthenticated public GitHub API (README present, CLAUDE.md present, recent commit, open-issue count, sitemap.xml, robots.txt, stars, description) and surfacing deployment status, workflow health, and staleness alerts on one page.

### 4.2 Users

Aaron alone. The page labels itself "Internal use only" and carries an "Unlock" control in the header, so there is some gating, though the content rendered to an unauthenticated curl anyway.

### 4.3 Current state, what is built

Confirmed by live curl render on 2026-07-30:

- Header: "Two Birds Innovation, Build Quality Dashboard / Automated health checks across all active repositories", with "6 repos live on GitHub Pages | 1 pending activation (clarity)" and a "Last checked:" field (empty in a no-JS render, so it is JS-populated).
- Controls: Download Report, Refresh.
- **"Recent Activity, Build Timeline"** section with a live indicator dot.
- **"GitHub Pages, Live Deployments"** table listing seven repos with status and URL: digital-confidence (Live), career-coach (Live), kevins-apartment-search (Live), quality-dashboard (Live), aaron-patzalek (Live), two-birds-innovation (Live), clarity (**Pending, Pages activation pending**).
- **"GitHub Actions Health, DCC Workflows"** table: three workflows (Content Count Report, Sitemap Validator, Update Sitemap Dates), all marked Fixed / Manual only, with the note "Changed from push triggers to workflow_dispatch only, March 31, 2026."
- **"Next Sprint, April 2026"** block listing three items (n8n install, LightRAG install and DCC ingest, Google Search Console verification), sourced from `APRIL-2026-SPRINT-PLAN.md`.
- A "Portfolio Value Estimate" table (MRR, potential per client, timeline) starting with DCC White-Label at $0 current / $15,000 per year potential.

`S-QUALITY-DASHBOARD-FRESHNESS-001` was completed 2026-07-29 (commit `d74c3f6`), one day before this audit. All four of its scope items shipped: `BUILD_HISTORY` hardcoded commit arrays replaced with a real GitHub `commits?per_page=5` pull reusing the existing `checkRepo()` call; `two-birds-project-template` excluded from staleness alerts; alerts made clickable through to the repo commits page or the repo card anchor; and static Files/Contributors/Size stats given a "not a live check" tooltip while live sections got a teal live-dot. That sprint was filed as a direct consequence of the NO FAKE TIMESTAMPS rule, which was itself written after Aaron caught this page showing "3 months ago" computed off hardcoded April dates.

### 4.4 Non-goals

- Not a public-facing product. Internal only, no marketing surface, no external users.
- No authenticated GitHub API usage. It deliberately uses the unauthenticated public API and accepts the rate limit (the sprint close-out notes the API "returned real commit messages/dates before hitting unauthenticated rate limits partway through the repo list, expected, pre-existing, not a regression").
- Not a CI system, not a replacement for `verify-gate.py`, and not the daily working surface (that is Command Deck).

### 4.5 Gap and drift audit

**The 2026-07-29 freshness fix was correctly scoped and correctly executed, but it fixed the build timeline and left three other stale surfaces on the same page.** Verified live 2026-07-30:

1. **Clarity is listed as "Pending, Pages activation pending". It is live.** `https://twobirds-kramerica.github.io/clarity/` returned **200** on 2026-07-30, and Clarity has a verify-spec entry pointing at exactly that URL in `hal-stack/verification/verify-specs.json`. The dashboard is reporting a live product as not-yet-deployed.
2. **`kevins-apartment-search` is listed as "Live" at `twobirds-kramerica.github.io/kevins-apartment-search/`. That URL returned 404 on 2026-07-30.** The real deploy is `https://kevins-apartment-search.pages.dev` (200, confirmed, and it is what `verify-specs.json` points at). So the dashboard is asserting a dead URL is live. This is the more serious of the two: a health dashboard that green-lights a 404 is worse than no dashboard, because it actively signals false confidence, which is the exact failure the NO FAKE TIMESTAMPS rule names.
3. **The "Next Sprint, April 2026" block is roughly four months stale** and lists three items (n8n, LightRAG, Search Console) that no longer reflect anything in `sprint-queue.md`. It cites `APRIL-2026-SPRINT-PLAN.md` as its source, so it is honestly labelled by date, but it sits on a page whose whole promise is "automated health checks".
4. **The "GitHub Actions Health" table is a March 31, 2026 snapshot**, honestly dated in its own footnote, and covers only DCC workflows.

Because the repo table renders in a plain no-JS curl, **it is static HTML, not a live API result.** The live API work covers health scoring and the build timeline; the deployment table is hand-maintained. That distinction is exactly what scope item 4 of the freshness sprint was meant to make visible ("clarify visually which sections are live-checked versus manually-curated"). The tooltip and live-dot treatment shipped for the stats and the timeline, but I saw no such labelling on the deployment table in the rendered text. **I could not confirm this from the code, since the repo is not checked out, so treat it as an inference from the render.**

**Coverage gap: the repo list is missing products.** It covers six or seven repos. `CLAUDE.md`'s REPOS section names ten, and the stack has grown since. Missing at minimum: `elite-karate-site`, `two-birds-command-centre`, `two-birds-portfolio` itself, and `two-birds-project-template` (which the 2026-07-29 sprint says is still scored for health but excluded from staleness, so it presumably appears elsewhere on the page than the deployment table I rendered). The 2026-07-11 dashboard inventory flagged this same staleness and it is only partly closed.

**Governance gap: this product has no ARCHITECTURE-STATUS row.** Grep confirms zero mentions. The stack map does not track one of the stack's own monitoring surfaces. This is the same class of gap that was flagged and fixed for Command Deck on 2026-07-28.

**Gap: no verify-spec entry.** Not among the eight keys in `verify-specs.json`. It is internal, so this is defensible, but a dashboard that reports on everyone else's health is not itself health-checked.

### 4.6 Recommended next sprints

| P | Item | Note |
|---|---|---|
| **P1** | **Fix the two wrong rows in the deployment table**: Clarity is live (200, verified 2026-07-30), and `kevins-apartment-search` should point at `https://kevins-apartment-search.pages.dev` (200) not the GitHub Pages path (404). Better still, make the table derive its status from an actual HTTP check rather than hand-maintained text. | A dashboard asserting a 404 is "Live" is a truthfulness bug, not cosmetics |
| **P1** | **Finish scope item 4 of `S-QUALITY-DASHBOARD-FRESHNESS-001` on the remaining static sections.** The deployment table, the GitHub Actions table, and the Next Sprint block all need the same "not a live check, last updated [date]" treatment the stats already got. The sprint is marked DONE; this is the residue. | Same rule, same page, three surfaces the sprint did not reach |
| **P2** | **Retire or rebuild the "Next Sprint, April 2026" block.** Either point it at `hal-stack/sprint-system/sprint-queue.md` for real, or delete it. A four-month-old sprint plan on a health dashboard undermines the credibility of the genuinely live sections next to it. | Deleting is a legitimate answer |
| **P2** | **Add the missing repos** to the tracked set: `elite-karate-site`, `two-birds-command-centre`, `two-birds-portfolio`. Ideally enumerate the org's repos from the API rather than maintaining a list. | Closes a gap first flagged 2026-07-11 |
| **P3** | **Add an ARCHITECTURE-STATUS.md row for Quality Dashboard.** It currently has none, so the living stack map does not know this product exists. | Doc-only, same fix pattern as Command Deck's 2026-07-28 row |
| **P3** | Decide whether the "Portfolio Value Estimate" MRR table belongs on this page at all, and if it stays, date-stamp it as a manual estimate. | It reads as data on a page of data but is a projection |

---

## 5. Aaron Patzalek (personal and consulting site)

**Live:** https://twobirds-kramerica.github.io/aaron-patzalek/ (curl 2026-07-30: **200**). Sub-pages verified 200 the same day: `consulting.html`, `ai-for-smes.html`, `dcc-for-libraries.html`, `work.html`.
**Primary sources:** `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/career/POSITIONING-CANON.md` (read in full, canonical), `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/product-intelligence/aaron-patzalek-brief.md` (2026-07-03), `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/ea/status/aaron-patzalek.md` (2026-07-25), ARCHITECTURE-STATUS.md line 21.

**This is the highest-stakes audit in this file.** Everything in section 5.5 below is quoted verbatim from the live pages as rendered by curl on 2026-07-30, then checked line by line against `POSITIONING-CANON.md`.

### 5.1 Problem

Aaron needs a surface that converts a stranger into a booked discovery call and, from there, into a paid engagement. The 2026-07-03 brief diagnoses the recurring failure precisely: he keeps building a **capability showcase** and calling it a consulting offer. Range is his felt strength and his market weakness at the same time, so each rebuild re-expresses breadth, and breadth is what neutralises the premium. The one place he did niche, an AI opportunity assessment, landed in the single most commoditised cell of the 2026 Ontario consulting market, where published rate cards already exist. Both available moves fail by default, which is why the same wall recurs and gets misread as "the site is not good enough yet".

### 5.2 Users

Prospective clients: per the brief's proposed B3, one named buyer, a 10 to 150 person Canadian business owner who has been told to "do something about AI" and does not know what Monday looks like. Secondary readers: recruiters and hiring managers, since this doubles as Aaron's professional front door during an active job search. Aaron himself is the third user, as owner. Confirming or replacing the named buyer is the brief's blocking decision D1, still open.

### 5.3 Current state, what is built

Confirmed live 2026-07-30:

- **`index.html`**: single-column layout, hero, three evidence outcomes, three services each tagged "Project-based, No retainer", one bottom CTA, minimal footer. Footer links: Consulting, AI for SMEs, DCC for Libraries, Services, LinkedIn, Terms, Privacy, Disclaimer. Person JSON-LD present.
- **`consulting.html`**: the **$2,500 AI Workflow Audit** as primary offer. Five business days, five named deliverables (AI tool inventory, process gap map, priority matrix, written implementation plan, one-hour debrief), a "Right for you if" qualifier list, a four-step how-it-works, a four-product proof shelf (DCC, KevsCasa, Career Coach, Clarity) with per-product stat chips, an honest "First audits in progress" pilot-phase disclosure, a free Clarity diagnostic embed, and two Calendly CTAs (15-minute intro, 30-minute discovery).
- **`ai-for-smes.html`**: Elgin County lead-gen page, three pain cards, the same audit offer block, a local-knowledge section ("no travel fees within 45 minutes of St. Thomas"), and eight named target verticals.
- **`dcc-for-libraries.html`**: library white-label DCC offer.
- **`work.html`**: "Operational evidence, June 2026", four capability sections with a counter bar (days of continuous operation, 6 products in production, 1,696+ commits across 6 repositories, automated data refreshes, overnight autonomous builds) and four evidence cards.
- Per the EA status file: verify-gate spec exists under key `aaron`; last shipped 2026-07-24, commit `e1ec597`, a content-accuracy audit; **six open backlog items** (`S-AARONPATZ-PLANNING-001` pick-the-slice plus 90-day plan, `S-AARONPATZ-SITE-001` pain-led copy, `S-AARONPATZ-LEGAL-001` business structure, `S-AARONPATZ-WEBINAR-001` webinar platform, `S-AARONPATZ-OPS-001` SOW/invoice/ToS, `S-AARONPATZ-SITE-BUGS`). The status file names the planning item as the logical entry point since the others depend on it.

### 5.4 Non-goals

- **Not a menu.** The brief parks a broad multi-service page permanently: it is the generalist dilution trap by another name.
- **Not a SaaS storefront.** Track C posture: the site sells Aaron's judgement, with HAL and DCC as evidence, never as the product being sold.
- **No fractional-marketplace positioning** (Toptal, Truvisory style). Parked until one or two paid engagements exist to point at.
- **No thought-leadership content layer yet.** That is a distribution play, and distribution comes after the position locks.
- **No backend, no auth, no CMS.** Static, per the first non-negotiable rule.

### 5.5 Gap and drift audit: POSITIONING-CANON compliance

This section is the point of the exercise. Findings are ordered by severity. Every quotation was taken from a live curl render on 2026-07-30.

---

**FINDING 1 (severe): the homepage claims 20 years. The canon says 15+ years is canonical, full stop.**

`POSITIONING-CANON.md` section 8, final bullet: *"Metrics discipline: '15+ years' is canonical."* Section 1: *"Aaron is a 15-year operations and service-delivery leader."*

Live homepage body copy, 2026-07-30: *"**20 years** in retail, eCommerce, telecom, and nonprofit operations. Based in southwestern Ontario."*

Live homepage JSON-LD `description`, 2026-07-30: *"Senior product and operations leader. **20 years** in services development, category expansion, and company strategy across retail, eCommerce, and telecom."*

Meanwhile `consulting.html`, same day, same site, stat block: *"**15+** years leading product & operations across retail, eCommerce, and telecom."*

So the site contradicts itself between two pages, and the page a stranger lands on first is the one that breaks canon. This is not a rounding preference. The canon frames it as a discipline where every figure must pass the 3AM test, and an inflated tenure figure is the kind of thing that is uncomfortable to defend when challenged. It is also embedded in structured data, so search engines and any AI summariser reading the page will repeat "20 years".

**FINDING 2 (severe): "the same AI-first approach you would be hiring" is a near-verbatim hit on the canon's DON'T list.**

`POSITIONING-CANON.md` section 6, DON'T list, item 5: *"AI-first consultancy for small business"*. Section 6 closing rule: *"Any headline where AI is the noun and operations is the modifier. Flip it: operations is the noun, AI is the modifier."*

Live `consulting.html`, "Proof of work" section, 2026-07-30: *"the four products above are live, owned by real users, and built with the same **AI-first approach** you would be hiring."*

That sentence tells the buyer that what they are hiring is an AI-first approach. AI is the noun; the operations expertise is absent from the sentence entirely. This is the exact drift the canon says has been corrected ad nauseam.

**FINDING 3 (moderate to severe): the primary $2,500 offer is AI-noun-led at the headline level across three pages.**

`POSITIONING-CANON.md` section 4: *"Lead with operational value: operational efficiency, discovering opportunities, service-delivery and operations leadership, practical outcomes. Never headline as 'AI consultancy,' 'AI consultant,' or any AI-first identity."*

Live headlines, 2026-07-30:
- `consulting.html` `<title>`: "AI Workflow Audit | Aaron Patzalek | $2,500 Flat Fee | Southwestern Ontario"
- `consulting.html` H1 area: "AI Workflow Audit, $2,500 Flat Fee, 5 Business Days" and the hero line **"Find out exactly which AI tools fit your business."**
- `ai-for-smes.html` `<title>`: "AI for Small Business | Elgin County & Southwestern Ontario"
- `ai-for-smes.html` hero: **"AI that fits your business."**
- Homepage footer nav: "AI for SMEs"

I want to be fair about this one, because it is a genuine judgement call rather than a clean violation. A **service name** containing "AI" is not the same as an **identity claim**, and the canon's own section 7 approves "AI Workshops" as an offering name. The canon also permits AI keywords for discovery. But the canon is specific that web headlines must lead with operational value, and here the hero sentence on both offer pages makes AI tools the subject and the outcome. The brief independently reaches the same conclusion from a market angle: it explicitly rejects "niche into AI assessments and compete on price and speed" as *the commodity cell*, because "AI Opportunity Assessment, 2 weeks, ~$7,500, delivered as a roadmap" already has published Ontario rate cards. **The canon and the brief agree that this offer is pointed at the wrong shelf.** The current site is the exact configuration both documents warn against.

**FINDING 4 (moderate): the homepage identity line does not use the locked identity.**

Canon section 1: locked CV header identity is **"Operations and Service Transformation Leader"**; the headline identity is "15-year operations and service-delivery leader". Canon section 6 DO list leads with exactly that phrase.

Live homepage `<title>`: "Aaron Patzalek | **Product & Operations Leader** | Ontario, Canada". Live hero subline: "**Senior product and operations leader.** I help teams do more with less." JSON-LD `jobTitle`: "Founder, Two Birds Innovation".

"Senior product and operations leader" is not a canon violation in the way findings 1 and 2 are, and it does keep operations in the noun position, which is the important part. But it is not the locked identity either, and "service delivery" and "service transformation", the words the canon insists on, appear nowhere on the homepage. Worth aligning while the other fixes are being made.

**FINDING 5 (moderate): "Held full P&L ownership over 14 years" needs a 3AM check.**

Live homepage evidence bullet, 2026-07-30, under the Staples outcome: *"Doubled Staples Canada's eCommerce platform to $30M in annual revenue. **Held full P&L ownership over 14 years.** Built three sub-teams from scratch: UX Design, Web Operations, and Analytics. Started as Category Manager; left as Senior PM (2005 to 2019)."*

Canon section 8 records Staples 2005 to 2019 as Senior Product Manager eCommerce and Category Manager Retail Services, with the platform-doubling and team-building claims intact. It does not record fourteen years of full P&L ownership, and "started as Category Manager, left as Senior PM" in the same paragraph makes a fourteen-year full-P&L claim read oddly (he was not a Senior PM for fourteen years). The canon's checklist item 3 is "Would Aaron defend every claim at 3AM?" This one deserves a second look. **I am flagging it as needing verification against the CV baseline, not asserting it is false** (I did not read `career/employability-dossier/cv-baseline-reference.md`).

**FINDING 6 (minor): TELUS dates on the site disagree with the canon.**

Live homepage: *"Reduced churn by 30% as Senior Product Manager at TELUS (**2024 to 2025**)."* Canon section 8: *"TELUS (**2022 to Nov 2025**): Senior Product Manager, Emerging Markets."* Also the site says Koodo scaled "across Central and Eastern Canada" where the canon says "five regions". Small, but this is a factual record and the site shortens a three-year tenure to two.

**FINDING 7 (positive, worth protecting): the homepage AI framing is genuinely excellent and canon-perfect.**

Live homepage, 2026-07-30: *"**Not here to pitch AI**, a curious, practical operator with honest perspective on what's worth adopting and what isn't."*

That is very close to the approved "AI-curious, ops-obsessed" register in canon section 2c, it downplays AI as identity while reading as curious and practical, and it does it without an over-claim. Similarly `consulting.html`'s *"I don't sell AI theory. I build with it."* maps cleanly onto canon section 1's wedge ("I don't just advise, I build it and it ships"). Whoever wrote those lines had the canon right. The problem is that findings 2 and 3 sit on the same pages and pull the opposite direction, so the site says both things at once.

---

**Non-canon findings on the same product:**

**FINDING 8: `work.html` has a live-evidence freshness problem.** The page is headed "Operational evidence, **June 2026**" and promises "Metrics are drawn directly from git history, automation logs, and production systems. **Updated as the operation runs.**" Then it states fixed numbers: "6 products in production", "1,696+ commits across 6 repositories", "133-item sprint backlog". In a no-JS curl render on 2026-07-30, three counters displayed as an em-dash placeholder (days of continuous operation, automated data refreshes, overnight autonomous builds), which suggests those three are JS-populated while the others are typed copy. A page whose whole pitch is receipts, claiming to update as the operation runs, while carrying a June date stamp and hardcoded counts, is squarely in NO FAKE TIMESTAMPS territory. **I could not read the JS to confirm which counters are live and which are static, so this is an inference from the render, not a code finding.** It needs a five-minute look at the repo.

**FINDING 9: the EA status file's next_action is correct and unactioned.** Six open backlog items, and `S-AARONPATZ-PLANNING-001` (pick the consulting slice plus a 90-day plan) is the sequencing entry point because the other five depend on it. That is the same decision as the brief's blocking D1 (one named buyer, one named task) and it has been open since 2026-07-03. **Twenty-seven days.** Every copy fix in this section is downstream of it: rewriting headlines before the buyer is named just re-expresses the same ambiguity in new words.

**FINDING 10: a design-review backlog exists and overlaps.** `sprint-queue.md` around line 2225 carries a 2026-07-20 design-review list including item 4, which is explicitly flagged as needing "a POSITIONING-CANON-aligned rewrite, not a quick word change, check that file first per its own standing rule", and item 7, where Aaron wants the CTA reframed from "what's breaking" to a curiosity or opportunity framing. The live site still says *"30 minutes. You describe what's breaking. I ask questions. No pitch."* on the homepage. So that noted preference has not shipped.

**Could not verify:** anything requiring the repo. No raw HTML, no JS, no CSS. All copy findings are from rendered text, which is the right surface for a positioning audit but means I cannot say which template or partial to edit.

### 5.6 Recommended next sprints

| P | Item | Note |
|---|---|---|
| **P1** | **Canon-compliance copy sweep, findings 1 to 6.** Change "20 years" to "15+ years" on the homepage body copy **and** in the JSON-LD description; delete or rewrite "the same AI-first approach you would be hiring"; align the homepage identity line toward "operations and service transformation"; verify the "full P&L ownership over 14 years" claim against `career/employability-dossier/cv-baseline-reference.md` and correct or remove it; fix the TELUS dates to 2022 to Nov 2025. Do NOT touch finding 7's lines, they are correct. | This is the single most important item in this whole file. Two of the six are severe and one is embedded in structured data |
| **P1** | **Aaron decision: name the one buyer and the one task** (brief D1, `S-AARONPATZ-PLANNING-001`). Open 27 days. Everything else in this list is downstream, and doing the headline work first just repaints the ambiguity. | Human-only (strategy). Not agent-resolvable, and the brief says so explicitly |
| **P2** | **Reframe the $2,500 offer's headline register** (finding 3) once the buyer is named: keep "AI Workflow Audit" as the service name if Aaron wants it, but flip the hero sentence so the operational outcome is the subject and AI is the method. The brief's proposed hero, "I turn 'we should do something about AI' into a short list worth building, then I build the first one", already does this and is canon-compliant. | Depends on P1 decision. Do not ship new headlines before the buyer is settled |
| **P2** | **Fix `work.html`'s evidence freshness** (finding 8): either wire the counts and the date stamp to something genuinely computed, or relabel the page honestly as a dated snapshot. Do not leave "Updated as the operation runs" above a June date and hardcoded totals. | NO FAKE TIMESTAMPS. Same class as the Quality Dashboard fix |
| **P3** | **Ship the two copy items already noted from the 2026-07-20 design review** (`sprint-queue.md` ~line 2225): the curiosity-framed CTA replacing "what's breaking", and item 4's canon-aligned rewrite. | Already scoped, just unshipped |
| **P3** | **Add a canon check to this product's verify or QA path.** A recurring grep for the DON'T-list phrases ("AI consultant", "AI-first", "AI expert", "AI systems architect", "AI transformation partner") plus a "20 years" check across the aaron-patzalek repo would have caught findings 1 and 2 mechanically. | The canon says this drift recurs; a mechanical net is proportionate |

---

## 6. Two Birds Command Centre

**Two products share this name, and they are genuinely different things. I checked, and here is the answer.**

**Product A, "Two Birds Command Centre"**: repo `twobirds-kramerica/two-birds-command-centre`, live at **https://twobirds-kramerica.github.io/two-birds-command-centre/** (curl 2026-07-30: **200**).
**Product B, "Command Deck"**: source `C:\twobirds\two-birds-personal\command-deck\` (private repo), live at **https://aaron-deck.pages.dev/** (curl 2026-07-30: **200**, returns a login wall reading "Command Deck / Aaron's private dashboard / Enter", which is expected and not a fault).

They are **not** the same thing. Different repos, different hosts (GitHub Pages versus Cloudflare Pages), different navigation, different data, different lifecycle states. `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/docs/dashboard-inventory-2026-07-11.md` treats them as items 1 and 2 in a six-item inventory and says of the Command Centre: *"could not confirm from this machine whether this repo is currently deployed/live anywhere... Do not assume either way without asking Aaron."* **I can now close that: it is deployed and live, and its data is frozen at 2026-04-22.** Details below.

### 6.1 Problem

**Command Centre (A)** was built to answer "what is the whole portfolio doing" in one place: every project, every epic, every status, plus a set of knowledge surfaces (an artifact vault with trust-decay badges, an LLM-export inbox viewer, a searchable decision log, a language bank, a prompt library, a journey timeline, a human sprint queue, a sovereignty dashboard, an executive view, a roadmap).

**Command Deck (B)** answers a different question: "what do I do today". It is the daily working surface, password-gated because it carries job-search and personal data.

### 6.2 Users

Aaron only, both of them. Command Centre carries `noindex, nofollow` and is described as non-personal in shape, but its data was scrubbed on 2026-06-23 in a commit titled "fix(privacy): scrub user's real name and personal deadline", which tells you it did carry personal data at some point. Command Deck is explicitly password-gated and its source repo is private, correct per the REPO PRIVACY DEFAULT rule.

### 6.3 Current state, what is built

**Command Centre (A)**, verified live 2026-07-30 by curl:
- `lang="en-CA"`, `data-theme="dark"`, `noindex, nofollow`, a skip link, self-hosted `css/main.css`. Build hygiene is good.
- Eleven-item nav: Dashboard, Vault, Inbox, Decisions, Language, Prompts, Timeline, Human Sprint, Sovereignty, Executive, Roadmap.
- Stats bar (Projects, Epics, Active projects, Epics complete, Epics in flight), a Fuse.js-powered search box, and a "live status as of [last-updated]" line.
- Scripts: `vendor/fuse/fuse.min.js` (self-hosted, not CDN, good), `js/search.js`, `js/decay.js`, `js/dashboard.js`.
- Data: `data/projects.json` (13.2 KB, fetched 2026-07-30) containing `lastUpdated`, 13 projects, and 5 infrastructure items. Projects: Digital Confidence Centre, Clarity, Career Coach, Kevin's Apartment Search, Aaron Patzalek, Two Birds Innovation, HAL Stack, P3 Personal Priority Partner, Superman Table Command Centre, Quality Dashboard, Service Innovation Advisory, Talent Link, Signal-Driven Artifact Builder. Each project carries nested epics with individual statuses.

**Command Deck (B)**, from ARCHITECTURE-STATUS.md line 39 (added 2026-07-28, the row that closed the gap the inventory flagged):
- Tabs: Today, Effort x Benefit, Kanban, Business of me, Client-BizDev, Research, Education, Deadlines, plus a Pages menu to roughly 18 sub-pages including `pipeline.html`, `apply.html`, `conductor.html`, `ready-room.html`, `studio.html`, `console.html`, `mirror.html`, `command-center.html`, `legal.html`, `daily.html`.
- Built by `build-deck-data.py` into `command-deck-data.json`, deployed by `refresh-and-deploy.bat`.
- Daily Hub shipped 2026-07-28 (`S-DAILY-HUB-FILTERABLE-001`, ADR-0044), replacing the Notion Daily Hub and a standing Google Doc as the current-state surface.
- Ticketing shipped locally 2026-07-29 (`S-DAILY-HUB-TICKETING-001`): stable content-hash ticket IDs, per-card Details expand, category legend. **Built and locally QA'd, not yet redeployed.**
- EA status wiring shipped locally 2026-07-29 (`S-EA-DECK-PARSER-001`): `parse_ea_status()` reads `hal-stack/ea/status/*.md` frontmatter onto each product row. **Also awaiting the next deploy.**
- Deliberately excluded from `verify-specs.json`, and the reasoning is recorded and correct: the verifier sends no `deck_auth` cookie, so an entry would fake-green against the login page.

### 6.4 Non-goals

- **Command Deck is deliberately not publicly verifiable.** The password gate is the point. Do not add it to the verify sweep without solving the auth cookie first.
- **Neither is a productized or multi-tenant tool.** Single user, no customers.
- **Command Centre is not the daily surface.** That is unambiguously Command Deck.

### 6.5 Gap and drift audit

**Finding 1, and it is the headline: Command Centre (A) is live and abandoned.** Its `data/projects.json` carries `lastUpdated: 2026-04-22`, and a regex sweep of the entire file found **no date later than 2026-04-22**. That is **99 days stale as of today**. The last repo commit per the inventory was 2026-06-23, a privacy scrub, so the shell has been touched more recently than the data. The page renders "live status as of [last-updated]" sourced from the data file's own timestamp, which means **it is honest, not fake-live**. It correctly reports its own staleness rather than dressing it up, so it does **not** violate the NO FAKE TIMESTAMPS rule. But a reader landing on a public URL titled "Command Centre" showing "live status" will read three-month-old project states as current unless they notice the date.

**Finding 2: its project list has drifted from reality.** The 13 projects include entries with no presence in the current stack map (P3 Personal Priority Partner, Service Innovation Advisory, Talent Link, Signal-Driven Artifact Builder, Superman Table Command Centre) and **omit** products that now exist or matter (Elite Karate, Family Ops, NormeScore, Command Deck itself, the webinar series). Epic statuses reflect April.

**Finding 3: the identity question in `dashboard-inventory-2026-07-11.md` is now answerable and should be written down.** That document explicitly says the deploy status "could not be confirmed from this machine" and instructs not to assume. I confirmed it live: **deployed, 200, GitHub Pages, data frozen 2026-04-22.** The inventory's summary table row currently reads "Stale since Jun 23, live status unconfirmed". It can be upgraded to a confirmed fact, which spares the next session from re-running the same investigation.

**Finding 4: neither Command Centre nor Command Deck appears in `verify-specs.json`.** For Command Deck that is a deliberate, documented, correct decision. For Command Centre there is no recorded reasoning, it is just absent. Given it is live on a public URL, some minimal check would be reasonable, though its low value makes retirement the more sensible answer (see 6.6).

**Finding 5: Command Deck has two features built and tested but not deployed,** both from 2026-07-29 (ticketing, EA status wiring). ARCHITECTURE-STATUS line 39 says both are "awaiting next deploy" via `refresh-and-deploy.bat`. As of 2026-07-30 I cannot tell whether that run has happened, **because the content is behind the password gate and I did not attempt to bypass it.** The login wall rendering correctly is the only thing I verified.

**Finding 6: Command Centre is publicly reachable and was carrying personal data as recently as 2026-06-23.** The privacy scrub commit ("scrub user's real name and personal deadline") means the fix landed, and the page carries `noindex, nofollow`. But `noindex` is a crawler request, not access control: the URL is open to anyone who has it. Given the repo also hosts a decision log, a prompt library, and an LLM-export inbox viewer, it is worth one deliberate look at whether everything currently served there is safe to be public. **I did not audit the sub-pages' contents and am not claiming a leak exists**, only that the combination (public URL, ops-internal surfaces, a prior privacy scrub, and 99 days without review) warrants a check.

### 6.6 Recommended next sprints

| P | Item | Note |
|---|---|---|
| **P1** | **Aaron decision: retire Command Centre (A), or adopt it.** It is live, public, 99 days stale, and functionally superseded by Command Deck. Three honest options: (a) unpublish the Pages deploy and keep the repo, (b) add a visible "archived snapshot, data frozen 2026-04-22" banner and leave it up, or (c) wire `projects.json` to a real generator. Doing nothing is the worst option because it keeps a stale public surface labelled "live status". | The clearest call in this file. Recommendation: (a) or (b), since Command Deck already covers the ground |
| **P1** | **Privacy pass over the public Command Centre surfaces** before deciding: check Vault, Inbox, Decisions, Language Bank, Prompt Library, and Journey Timeline for anything that should not be on an open URL, given the 2026-06-23 scrub commit is evidence this has bitten once. | Do this before (b) or (c). If choosing (a), it is moot |
| **P2** | **Update `hal-stack/docs/dashboard-inventory-2026-07-11.md`** to record the confirmed answer: Command Centre is deployed and live at the GitHub Pages URL, HTTP 200 verified 2026-07-30, data `lastUpdated` 2026-04-22. Replace "live status unconfirmed" in the summary table. | Doc-only, closes a stated open question and stops re-investigation |
| **P2** | **Run `refresh-and-deploy.bat`** to ship the two Command Deck features built and QA'd on 2026-07-29 (ticketing, EA status wiring). Confirm afterwards, since the gate means it cannot be verified externally. | Mechanical, but blocked behind the gate for verification |
| **P3** | **Give Command Centre an ARCHITECTURE-STATUS.md row** if it is being kept, or a one-line retirement note if it is not. It currently has none, the same gap Command Deck had until 2026-07-28. | Depends on the P1 decision |
| **P3** | **Consider a `deck_auth`-aware verify path** for Command Deck so the most-used product in the stack has some automated liveness check beyond "the login page renders". Currently, and correctly, it has none. | Non-trivial, low urgency, worth noting rather than doing now |

---

## 7. Family Ops

**Live:** https://family-ops-sync.twobirdsinnovation.workers.dev/ (curl 2026-07-30: **200**). This single URL serves both the UI and the sync API.
**Also checked:** https://twobirds-kramerica.github.io/family-ops/ (curl 2026-07-30: **404**, expected, it is not a Pages deploy).
**Source in this repo:** `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/family-ops/index.html` (25.5 KB), `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/family-ops/worker/src/index.js`, `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/family-ops/worker/src/page.js`, `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/family-ops/worker/wrangler.toml`. This is the one product in this file whose actual source I could read.
**Primary doc source:** ARCHITECTURE-STATUS.md line 24.

**Framing, stated up front:** this is a **private family utility, not a product.** No external audience, no monetisation, no growth goal, no marketing surface. It should not be held to a public-product bar, and nothing below should be read as a defect against one. The right standard is "does it work reliably for the family", and by every signal available it does.

### 7.1 Problem

A household needs one shared list of who is doing what this week, visible on every family member's phone, that does not require an account, an app install, or a subscription. Google Drive was ruled out on a real technical basis: Google retired static HTML hosting in 2016, so an `.html` in Drive renders as a non-executing preview.

### 7.2 Users

Aaron and his family. Not a persona: the KV store was seeded with Aaron's own seven recurring tasks (school pickup and dropoff, packing lunches, a note that school ends June 25, grocery run, garbage and recycling, lawn, weekly budget check).

### 7.3 Current state, what is built

Read directly from `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/family-ops/index.html` and from ARCHITECTURE-STATUS.md line 24:

- **Single-URL architecture.** The Cloudflare Worker `family-ops-sync` serves the app UI at `GET /` from `family-ops/worker/src/page.js` (a mirror of `index.html` with `WORKER_URL` set to the relative `/state`, so same-origin and no CORS), the sync API at `/state`, and a 204 for `/favicon.ico`. **The family opens one link for both UI and sync.** This is a genuinely nice piece of design for the constraint.
- **Storage:** Cloudflare KV namespace `FAMILY_OPS` (`b052efe101d8495fa5290eafce2563cd`), per-task last-write-wins merge. ADR-0011 filed.
- **Confirmed in the source I read:** `WORKER_URL = '/state'` (line 304), `POLL_MS = 30000` (line 306), a 30-second polling sync (line 442), `localStorage` fallback with save and load paths (lines 362 to 369), and a guard that no-ops the fetch if the URL still contains the `REPLACE_SUBDOMAIN` placeholder (lines 399 and 418).
- **Recurring versus variable task model** (lines 483 to 619): tasks with `recurring: true` render in a pinned "Recurring" section, everything else in a "This week" section. Pin and unpin with hover buttons and toast feedback. **Recurring tasks have no remove button**, which prevents accidental deletion of the baseline.
- **Tombstone deletes** (`{ deleted: true, updatedAt }` pushed to KV) fixing a prior cross-device delete-propagation bug. Week rollover and new-week detection skip tombstoned tasks.
- **Build hygiene, read from source:** `lang="en-CA"`, `noindex, nofollow`, `meta color-scheme: light` (the belt-and-suspenders treatment the design gates require for light-palette pages), system font stack, a full CSS token set (navy, gold, status pill colours), all self-contained with zero external requests.
- **Verified in a prior sprint** (per line 24): live browser smoke test passed, UI renders, add then reload then persisted, visible from an external curl client confirming true cross-device sync, zero console errors. Screenshot at `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/quality/playwright-results/family-ops-recurring-20260616.png`.

**A separate, adjacent tool that is not this one, recorded here so a future "is there already a family calendar" check finds it:** the Summer 2026 calendar lives in a different private repo (`two-birds-personal/family-calendar/`), with its own `summer-worker` and `SUMMER` KV, password-gated edits, served at `summer-plan-5ua.pages.dev`. Per line 24 a print-ready fridge layout was committed there (`7ba5aa6`) but **its deploy was blocked on expired wrangler auth, with an Aaron action filed.** Whether that is still blocked, I cannot tell.

### 7.4 Non-goals

- **No accounts, no auth, no user model.** Anyone with the URL can use it. That is the design, appropriate for a household.
- **Not a product.** No pricing, no external users, no marketing page, no growth metric.
- **No calendar integration yet.** Google Calendar MCP integration for the variable task layer is a recorded open item, explicitly requested by Aaron, framework ready.
- **No notifications, no reminders, no assignment model.** Pills and sections only.
- **Not merged with the Summer 2026 calendar.** Deliberately separate tools.

### 7.5 Gap and drift audit

**Overall: the docs and the code agree, which is rare in this audit.** Everything ARCHITECTURE-STATUS line 24 claims about the recurring framework, the tombstone deletes, the single-URL upgrade, and the polling interval, I confirmed by reading `family-ops/index.html` directly. No drift found between doc and source.

**Gap 1: the copy in this repo may not be what is deployed.** `family-ops/index.html` is described in line 24 as a mirror of `worker/src/page.js`, and `page.js` is what the Worker actually serves. Two files with the same UI, kept in sync by hand, is a drift risk by construction. **I did not diff them** (I read `index.html` in part and did not read `page.js`), so I cannot say whether they are currently identical. Worth a one-command check.

**Gap 2: no live verification is wired.** Family Ops is not in `verify-specs.json` (confirmed: the eight keys are `kevscasa`, `dcc-adults`, `dcc-kids`, `clarity`, `aaron`, `tbi`, `career-coach`, `dcc-classic`). It is a private family tool, so nightly Playwright is disproportionate, but this is the one product here whose silent failure would be noticed by people other than Aaron, on a school morning. A trivial `curl` on `/state` returning 200 with parseable JSON would cost almost nothing.

**Gap 3: the recorded open item has not moved.** Google Calendar MCP integration for the variable task layer is logged in line 24 as an open backlog item with the framework ready and Aaron's explicit request behind it. Line 24 dates the build work to June 16. **Six weeks later it is still open.**

**Gap 4: the sibling Summer 2026 calendar's deploy may still be blocked.** Line 24 records a fridge-layout commit whose deploy failed on expired wrangler auth, with an Aaron action filed. **I cannot verify the current state** (different private repo, not checked out, and I did not test that URL). Given the Summer 2026 window is live right now, this is worth thirty seconds of checking.

**Not a gap: the open URL.** No auth on a household task list is a proportionate choice, and the page is `noindex`. Flagging it as a security defect would be exactly the over-application of a public-product bar this section warns against.

### 7.6 Recommended next sprints

| P | Item | Note |
|---|---|---|
| **P1** | **Check whether the Summer 2026 calendar deploy is still blocked** on expired wrangler auth. The summer window is live now, so a print-ready fridge layout sitting undeployed has a real, dated cost. Different repo (`two-birds-personal/family-calendar/`), so this is a look-and-confirm, not a build. | Time-sensitive in a way nothing else here is |
| **P2** | **Diff `family-ops/index.html` against `family-ops/worker/src/page.js`** and record the result. Two hand-synced copies of the same UI will drift eventually, and the served copy is `page.js`. If they have already diverged, reconcile toward `page.js`. | One command, prevents a confusing future bug |
| **P2** | **Add a minimal liveness check**: a `curl` of `https://family-ops-sync.twobirdsinnovation.workers.dev/state` expecting 200 and valid JSON, folded into the existing nightly sweep. Not a Playwright spec, not a verify-specs product entry, just a heartbeat. | Proportionate to a private tool that a family depends on |
| **P3** | **Google Calendar MCP integration** for the variable task layer, the recorded open backlog item. Framework is ready and Aaron asked for it, so this is a build, not a decision. | Six weeks open. Genuinely optional |
| **P3** | **Consider generating `index.html` from `page.js`** (or the reverse) at deploy time rather than maintaining both by hand. Only worth doing if gap 2 shows they have already drifted. | SIMPLICITY FIRST says do not do this pre-emptively |

---

## 8. Webinar Series (AI 101 / Seniors)

**Live:** none, and none expected. There is no repo and no deployed surface. `live_state: not-live` in `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/ea/status/webinars.md`.
**Primary sources:** `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/product-intelligence/webinars-brief.md` (stub, 2026-07-24), `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/ea/status/webinars.md` (2026-07-25), `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/docs/seniors-webinar-plan-001.md`, `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/docs/webinar-series/ai-101-financial-advisers-2026-07-16.md`, `.../ai-101-series-outlines-2026-07-16.md`, `.../ai-for-all-tack-on-2026-07-17.md`.

**Framing:** this is a **pre-launch content pipeline, not a deployed product.** The right audit question is not "does it work" but "what content exists, versus what has actually been delivered to a real audience". The answer to the second half is: **nothing, yet.**

### 8.1 Problem

Aaron needs a top-of-funnel that reaches small businesses and seniors in southwestern Ontario without a marketing budget or a list. A free 45 to 60 minute webinar is the mechanism, feeding the consulting funnel (webinar, then NormeScore or Clarity diagnostic, then paid audit) per `hal-stack/strategy/market-position-report-2026-07-17.md`. The seniors track solves a different problem: Canadian seniors are being actively targeted by scams and have nowhere plain-language to learn defence, which is the same problem DCC solves asynchronously.

### 8.2 Users

Two distinct audiences, deliberately not merged:

1. **Seniors** in and around St. Thomas, Ontario, reached through the St. Thomas Seniors Centre. Session 1 is fully written: threat landscape, four scams hitting Canadians now, three protective habits, live Q&A, wrap-up with an action plan.
2. **Professional verticals**, pilot audience financial advisers, with outlines drafted for accountants and CPAs, insurance brokers, lawyers, and real estate agents and brokers.

Aaron is the presenter. **Zero attendees to date**, because no session has been scheduled.

### 8.3 Current state, what is built

Content is by far the most advanced part, and it is genuinely substantial:

- **`hal-stack/docs/seniors-webinar-plan-001.md`** (14.1 KB): a complete run-of-show with minute-level timings (0:00 welcome and housekeeping, 0:05 threat landscape in Canada, 0:15 the four scams, 0:30 three habits that protect you, 0:45 live Q&A, 0:55 wrap-up and action plan), plus **registration page copy**, a **LinkedIn promotion post**, an **outreach email to the St. Thomas Seniors Centre**, a post-session workflow, and an explicit "Aaron Actions Required" list.
- **`hal-stack/docs/webinar-series/ai-101-financial-advisers-2026-07-16.md`** (16.1 KB): the pilot session, with a traceability section, a why-this-vertical-first rationale, a 45-minute structure, **cited sources for every live stat** with an explicit instruction to cite rather than paraphrase from memory, registration page copy, prep notes on likely questions, a post-session workflow, and an open-items list of Aaron decisions.
- **`hal-stack/docs/webinar-series/ai-101-series-outlines-2026-07-16.md`** (8.5 KB): outlines for the four remaining verticals plus a sequencing recommendation.
- **`hal-stack/docs/webinar-series/ai-for-all-tack-on-2026-07-17.md`** (5.0 KB): a bolt-on segment ("Did you know Ottawa is funding this?") with a four-beat talk track, placement instructions (after Guardrails, before Soft close, so the session ends with one CTA not two), a bolt-on rule covering all five verticals, timing guidance, and a **compliance-hygiene instruction to re-check the BDC LIFT and FedDev RAII program pages the week of each delivery rather than quoting figures from memory.** It carries a voice-check stamp: "4 talk-track beats + slide + notes | 1 caught (em dashes in talk track) | 1 fixed".
- **`hal-stack/docs/aaron-patzalek-webinar-setup.md`**: a Zoom settings template (referenced from the seniors plan; I did not read it).

**What does not exist:** no repo, no live URL, no verify-spec, no registration page deployed anywhere, no platform account, no scheduled date, no attendee.

### 8.4 Non-goals

- **Not "webinars".** Canon section 7 is explicit: Aaron's one-hour sessions for small independent businesses are **"AI Workshops"**, never webinars. The internal planning docs and the sprint ID both use "webinar", which is fine internally, but nothing external should ship with that word. **This is a live trap for whoever writes the registration page.**
- **Not a paid product.** Free, top of funnel.
- **Not a recorded course.** Live sessions with Q&A. DCC already covers the asynchronous case.
- **Not a build.** There is no software here, only content plus logistics.

### 8.5 Gap and drift audit

**The whole product is blocked on four small human actions, and the calendar is about to make that expensive.**

`hal-stack/docs/seniors-webinar-plan-001.md` closes with an "Aaron Actions Required" list of four items:
1. Email Angela Ostojic at the St. Thomas Seniors Centre (contact details and a full draft are in the file) for a co-promotion partnership **for the August webinar**. P2, 30 minutes.
2. Subscribe to Zoom Pro, roughly US$15.99 per month, needed for registration forms, waiting room, and cloud recording.
3. **Set the webinar date, a Tuesday or Wednesday in August at 2:00 PM Eastern, suggested August 12 or 19, 2026**, then create the registration link and share it.
4. Pick an email-capture tool after the first session (explicitly not needed before August).

**Today is 2026-07-30.** August 12 is thirteen days away. Item 1 (partner outreach) and item 3 (set the date and publish the link) both need to happen before promotion can start, and a seniors audience reached through a community centre needs lead time measured in weeks, not days. **The August window is closing and, on the evidence in these files, none of the three blocking actions has been taken.** I am inferring "not taken" from the EA status file still listing `S-AARONPATZ-WEBINAR-001` as open on 2026-07-25 and from no session or date appearing anywhere I read. **I did not read the Notion human backlog, so I cannot confirm that these actions are still open, only that nothing in the repo shows them closed.** That distinction matters and should not be flattened.

**Gap 2: the platform decision is genuinely unmade, and it is a sovereignty decision nobody has taken.** `S-AARONPATZ-WEBINAR-001` (platform choice, sovereignty check, seniors-safe default settings: mute on entry, waiting room, one-click join) is the single open sprint-queue item for this product. The seniors plan already assumes **Zoom Pro at roughly US$15.99 per month**, which is a **paid third-party SaaS dependency**. Per the SOVEREIGNTY CHECK rule and ADR-0036, a paid tool never qualifies as an OSS appendage and requires Aaron's explicit, scoped ratification plus a row in the "Paid Appendage Exceptions" table in `/home/twobirdsinnovationellite/twobirds/two-birds-portfolio/hal-stack/architecture/decapitation-checklist.md`. The only confirmed exception recorded in `CLAUDE.md` today is Google AI Pro for the LOON video lane. **A Zoom subscription would be a second paid exception and it has not been ratified.** Adopting it silently because a planning doc assumed it would be exactly the drift ADR-0036 exists to prevent.

**Gap 3: "webinar" versus "AI Workshops".** Canon section 7 forbids "webinars" for the small-business sessions. Every planning document, the sprint ID, the EA product key, and the brief all use "webinar". Internally that is harmless. But the registration page copy and the LinkedIn promotion post are already drafted **inside those same files**, and they will be lifted as-is unless someone catches it. Whoever ships the registration page must rename the external-facing artifact. **I did not read the drafted registration copy closely enough to confirm whether it says "webinar" externally**, so this is a flag to check, not a confirmed violation.

**Gap 4: the content has a live-data dependency that will silently rot.** The `ai-for-all` tack-on states its program figures are "the verified set as of 2026-07-17" and instructs re-checking the BDC LIFT and FedDev RAII pages the week of each session. That is exactly the right discipline. But it is an instruction in a markdown file, not a mechanism, so it depends on whoever prepares the session remembering to read the note. Same for the financial-advisers deck's cited stats.

**Gap 5: no product-intelligence brief.** Only a stub, created 2026-07-24 so the status generator had an anchor. Given the content is this developed, the missing artifact is not strategy, it is logistics.

**Not a gap:** the absence of a repo, a live URL, or a verify-spec entry. Correct for a pre-launch content pipeline. Adding a verify-spec entry becomes right at the moment a registration page is deployed, not before.

### 8.6 Recommended next sprints

| P | Item | Note |
|---|---|---|
| **P1** | **Aaron: set the date and email Angela Ostojic this week.** Both drafts are already written and sitting in `hal-stack/docs/seniors-webinar-plan-001.md`. If August is the target, the partner email and the published registration link need to go out inside the next few days or the window slips to September. This is thirty minutes of Aaron's time against a fully-written session that has been ready since mid-July. | Human-only. The most time-sensitive item across all eight products in this file |
| **P1** | **Close `S-AARONPATZ-WEBINAR-001` properly, as a sovereignty decision and not just a signup.** Run the decapitation checklist on the platform before subscribing. If Zoom Pro is the answer, it needs Aaron's explicit scoped ratification and a row in the Paid Appendage Exceptions table in `hal-stack/architecture/decapitation-checklist.md`, per ADR-0036. Do not let a paid dependency enter the stack because a planning doc assumed it. | The one item here with real architectural consequence |
| **P2** | **Rename every external-facing artifact from "webinar" to "AI Workshop"** before the registration page or the LinkedIn post ships, per POSITIONING-CANON section 7. Internal file and sprint names can stay. Check the already-drafted registration copy and LinkedIn post inside the planning docs specifically, since those are the artifacts that will get lifted verbatim. | Cheap now, embarrassing later |
| **P2** | **Re-verify the funding-program figures** (BDC LIFT, FedDev RAII) before the first delivery, per the tack-on's own compliance-hygiene instruction. They were verified 2026-07-17 and are now thirteen days old, well inside tolerance, but the check must actually happen the week of the session. Consider a ground-truth-cache entry so the freshness window is tracked rather than remembered. | The doc already says to do this; make it a mechanism |
| **P3** | **After session 1, write the real brief** and decide whether the seniors track and the professional-verticals track are one product or two. On the evidence they are two: different audiences, different funnels, different CTAs. | Do not do this before running one session |
| **P3** | **When a registration page is deployed, add a verify-spec entry** so the nightly sweep covers it from day one, per the LIVE-OUTCOME VERIFICATION rule. Not before. | Launch-day checklist item |

---

## Appendix: live check log (all run 2026-07-30)

| URL | Code | Note |
|---|---|---|
| https://twobirds-kramerica.github.io/career-coach/ | 200 | Rendered, content quoted in section 1 |
| https://twobirds-kramerica.github.io/career-coach/pricing.html | 200 | Still a Coming Soon stub |
| https://kevins-apartment-search.pages.dev | 200 | The real KevsCasa deploy |
| https://twobirds-kramerica.github.io/kevins-apartment-search/ | **404** | The URL Quality Dashboard reports as "Live" |
| https://twobirds-kramerica.github.io/elite-karate-site/ | **404** | Not deployed |
| https://twobirds-kramerica.github.io/kirks-karate/ | **404** | Not deployed |
| https://twobirds-kramerica.github.io/elite-karate/ | **404** | Not deployed |
| https://twobirds-kramerica.github.io/kirks-karate-site/ | **404** | Not deployed |
| https://twobirds-kramerica.github.io/karate/ | **404** | Not deployed |
| https://twobirds-kramerica.github.io/quality-dashboard/ | 200 | Rendered, stale rows quoted in section 4 |
| https://twobirds-kramerica.github.io/aaron-patzalek/ | 200 | Rendered, copy quoted in section 5 |
| https://twobirds-kramerica.github.io/aaron-patzalek/consulting.html | 200 | Rendered |
| https://twobirds-kramerica.github.io/aaron-patzalek/ai-for-smes.html | 200 | Rendered |
| https://twobirds-kramerica.github.io/aaron-patzalek/dcc-for-libraries.html | 200 | Header only |
| https://twobirds-kramerica.github.io/aaron-patzalek/work.html | 200 | Rendered |
| https://twobirds-kramerica.github.io/two-birds-command-centre/ | 200 | Live and stale, data `lastUpdated` 2026-04-22 |
| https://twobirds-kramerica.github.io/two-birds-command-centre/data/projects.json | 200 | 13 projects, 5 infrastructure items, no date later than 2026-04-22 |
| https://aaron-deck.pages.dev/ | 200 | Login wall, expected, not investigated further |
| https://family-ops-sync.twobirdsinnovation.workers.dev/ | 200 | UI and sync on one URL |
| https://twobirds-kramerica.github.io/family-ops/ | **404** | Expected, not a Pages deploy |
| https://twobirds-kramerica.github.io/clarity/ | 200 | Checked only to disprove Quality Dashboard's "Pending" row |
| https://twobirds-kramerica.github.io/digital-confidence/ | 200 | Same reason |
| https://twobirds-kramerica.github.io/two-birds-innovation/ | 200 | Same reason |

**Completeness stamp for this file: 8 products in scope, 8 PRDs written, 23 live URL checks run, 5 of 8 products have their source repo unavailable in this environment (Career Coach, KevsCasa, Elite Karate, Quality Dashboard, Aaron Patzalek, Command Deck), 1 product's source was read directly (Family Ops), 1 product has no source to read (Webinar Series). The Notion human backlog was NOT read in this pass, so every "still open" claim about an Aaron action is inferred from repo state alone and is labelled as such where it appears.**
