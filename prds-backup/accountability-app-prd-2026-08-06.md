---
BACKUP NOTICE: Point-in-time snapshot backup created 2026-10-04 for Two Birds Innovation.
STATUS: Static archive snapshot (may be stale).
LIVE SOURCE OF TRUTH: The live, active documents are maintained in Notion and git at twobirds-kramerica/two-birds-portfolio.
CANONICAL REPO PATH: two-birds-portfolio/hal-stack/research/accountability-app-prd-2026-08-06.md
NOTION REFERENCE: https://app.notion.com/p/3b4a09cf876a81808ae7c895a0f468b0?pvs=204
---

# Accountability App — Research + PRD (v2, expanded)
**Filed:** 2026-08-06, Aaron voice, expanding the original brief filed the same night as Notion `3b4a09cf-876a-8180-8ae7-c895a0f468b0`. **This document supersedes that page's pricing model and scope; the Notion page's anonymization instruction (no family member named, no personal contact info) still applies and is honoured throughout.** Research + PRD done now, per Aaron's request. Build stays P3, not started tonight.

## 1. What changed from the original brief

- **Pricing model revised.** Original: one-time $0.99. New: **freemium — first 10 things/projects free, then $0.99 CAD/year** after that. This is the pricing to build against; the original one-time figure is superseded, not both.
- **Multi-use, not single-use.** Confirmed explicitly: one account tracks many ongoing commitments, not one.
- **Needs real authentication.** Personal data (commitments, an accountability partner's contact info, progress history) means real login, not a local-only anonymous tool.
- **Population scope widened, with an explicit positioning constraint.** Aaron wants the underlying design informed by real research across ADHD/ADD, people living alone, memory loss/dementia, depression, and autism spectrum (high-functioning) — **but the product must never brand or frame itself around any single one of these.** His own words: don't make someone feel like "the autism app," frame it as a general accountability tool for anyone — cutting the lawn, a partner asking their spouse to do a chore — with deeper support *available* for people who need more structure, never labelled as being *for* a diagnosis. This is a known, named UX/product pattern — see §3.
- **A specific accept-to-confirm mechanic for the accountability partner.** A commitment sent to a partner is not "official" until the partner explicitly accepts it. Send 100, get 0 accepted, nothing happened. Get 1 accepted, that one is real. The sender can optionally attach a self-defined reward/recognition; if there is one, the partner also has to acknowledge it as part of accepting.
- **A serious legal/liability requirement**, given the vulnerable-adjacent audience: nothing that happens through the app (harm, a bad outcome, misuse) should trace back to Two Birds. This needs real disclaimer language and a genuine, prominent Canadian crisis/support resources section — not decorative, not an afterthought.

## 2. Research — what's already known and validated per population (live-verified, not assumed)

| Population | What the research actually says | Source |
|---|---|---|
| **ADHD/ADD** | Executive-function support needs to be *externalized* — tools, reminders, routines, accountability outside the person's own head (Dr. Russell Barkley's research). **Aaron's actual reference identified: Dr. Shiva Rouhani** (drshiva.ca), an Ontario family physician with a focused psychotherapy practice in Adult ADHD & Mental Health Care, CPSO-registered, running an OHIP-covered weekly structured ADHD group psychotherapy program plus medication support for adults. Her practice is a real-world precedent for structured, session-based accountability specifically for ADHD adults — worth a deeper read of her published patient materials/program structure when the build sprint runs (direct site fetch failed twice tonight, connection resets; identified via search instead — re-attempt a direct read before citing her work in detail). | [russellbarkley.org](https://www.russellbarkley.org/), [drshiva.ca](https://drshiva.ca/) |
| **Dementia / memory loss** | Real, published clinical research exists specifically on reminder apps for this population. Key finding: **design should use simple layouts, symbols/pictograms/photos, and a small number of contrasting colours** — not text-dense. Scheduling/reminder tools measurably reduce depression and caregiver burden by scaffolding routine. One validated pattern (SmartPrompt) uses a repeating gentle alarm until a task is marked done — worth offering as an optional intensity setting, never forced, since a naggy default would work against the ADHD-friendly "gentle accountability" goal for other users. | [PMC dementia reminder app](https://pmc.ncbi.nlm.nih.gov/articles/PMC7854961/), [JMIR Aging memory/communication app](https://aging.jmir.org/2023/1/e44007/), [SmartPrompt](https://clinicaltrials.gov/study/NCT04313582) |
| **Depression** | Behavioural activation (small, concrete, achievable tasks with acknowledgement/reward on completion) is an evidence-based, professionally-recognized approach — directly maps onto the "state what you're doing, get recognition when you do it" mechanic Aaron already designed intuitively. | [Behavioural activation self-help study](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5153814/) |
| **People living alone generally** | Caregiver/self-care research consistently names the same core pattern as effective: calendars + timed prompts + lightweight structure, kept simple. Nothing exotic needed — this reinforces "keep it simple" as evidence-based, not just a preference. | Same sources as above |
| **Autism (high-functioning)** | Not deep-researched this pass (time-boxed) — but the general accessibility literature converges on predictability, consistent navigation, plain language, and minimizing unexpected UI changes, all of which the DCC design system (below) already implements for a different population and transfers directly. |  |

## 3. The positioning pattern Aaron described already has a name: the curb-cut effect

Designing primarily for people with higher needs, in a way that quietly benefits everyone, is a well-established and named concept (curb cuts built for wheelchairs turned out to help parents with strollers, delivery workers, everyone). Aaron's instinct — "frame it for anyone, let it happen to help more for people who need it, never label the app by the diagnosis" — is exactly this pattern, already proven in physical and digital accessibility design. **Use this framing explicitly in the PRD's product positioning section when the build sprint writes real copy**: the app is for anyone who wants a bit of accountability (cut the lawn, clean the van), and quietly carries extra structure/support underneath for anyone who needs more of it, without ever gating or labelling that structure by diagnosis.

## 4. UI/UX/IA — copy the proven baseline, per Aaron's own instruction to save tokens

**This stack already has exactly the reusable foundation Aaron asked for.** `digital-confidence/DESIGN-SYSTEM.md` ("Warm Hearth") is a senior-first accessible design system already built and already itself derived from proven public-sector baselines: **GOV.UK Design System**, **Canada.ca Style Guide**, and the **NHS Digital Service Manual** (§0 of that file). It already covers colour/contrast tokens, heading hierarchy, spacing, module page structure, buttons, content blocks, WCAG 2.2 AA compliance notes specifically tuned for what seniors need, voice/microcopy rules, and a documented anti-patterns list.

**The build sprint should start from this file, not design from scratch.** It won't cover everything (dementia-specific pictogram/symbol guidance and the accept-to-confirm partner flow are new), but the token system, typography, spacing, and accessibility baseline transfer directly and are already proven on a live, real, Canadian, senior-facing product.

## 5. Legal / disclaimer / crisis-resources section — verified Canadian resources, not guessed

Aaron was right to flag this as a real requirement given the audience. **This repo already has a verified, live, shipped set of Canadian crisis resources** (built for DCC's own AI-health module, `digital-confidence/modules/module-ai-health.html`) — reuse these exact numbers, do not re-derive:

- **988** — Suicide Crisis Helpline. Call or text, free, any time, English or French, anywhere in Canada.
- **Talk Suicide Canada — 1-833-456-4566**
- **Health811 — dial 811 in Ontario** — free, 24/7, registered nurse (provincial equivalents exist elsewhere in Canada; note the app should detect/ask province rather than assume Ontario).
- **211** — connects to local mental-health, community, and seniors' services, free, confidential, many languages.

**New for this app, verified live 2026-08-06 (population-specific, non-emergency):**
- **Alzheimer Society of Canada — 1-855-705-4636 (INFO)**
- **CADDAC (Centre for ADHD Awareness, Canada) — 1-800-807-0090**
- **Autism Ontario — 1-800-472-7789** (a new national Autism Canada support line was announced for an Oct 2025 launch under "Empowering Connections" — its number was not published/confirmed as of this research pass; verify current status before publishing, don't guess a number).

**Footer disclaimer, direction not final copy**: state plainly that the app is for everyday task and accountability support, not a medical, therapeutic, or crisis tool; if something more serious is going on, real help is available, then list the resources above. Aaron's instinct to keep this visible and unavoidable (footer, not buried) is correct and should be followed literally.

**Standard app-store legal package** (not researched deep tonight, standard requirements, flag for the build sprint): privacy policy, terms of service, PIPEDA-compliant data handling, a clear liability/limitation-of-use clause given the nature of user-generated commitments and inter-user messaging, Apple App Store Review Guidelines + Google Play policy compliance.

## 6. Product mechanic — the accept-to-confirm flow, specified

1. User creates a commitment, optionally attaches a self-defined reward/recognition.
2. User picks a recipient from their contacts (with the existing confirm-before-send step from the original brief).
3. Recipient receives it (in-app if they have the app, email otherwise, per the original brief) and must **explicitly accept** — including acknowledging the reward if one was attached — before it becomes an active, tracked commitment.
4. Unaccepted commitments do not count, do not track, do not notify further. This is intentional friction, not a bug to fix later — it keeps the accountability relationship real rather than one-sided broadcast.

## 7. MVP scope discipline — what to build now vs. roadmap-only

Per Aaron's explicit instruction: build a genuine MVP, capture everything else found during research as a **roadmap of themes/epics, do not build against them yet.**

**MVP (v1):**
- Single-step and multi-step commitments, user-defined deadlines/reminders/rewards.
- Deadline-driven work-back breakdown assistance for multi-step commitments (light, not a full project-management tool).
- One accountability partner per commitment, contact-picker + confirm + accept-to-confirm flow, partner opt-out.
- Progress bar for multi-step items.
- Simple congratulations moment on completion.
- Freemium: 10 free, $0.99 CAD/year after.
- iOS + Android + web, EN/FR, Canada-sovereign hosting.
- Footer disclaimer + Canadian resources section as specified above.
- Minimal chatbot (light conversational assist only, not a core feature).
- Built on the DCC Warm Hearth design-system baseline.

**Roadmap-only, found during research, NOT built now (themes for later, per Aaron's instruction to capture but not act):**
- Dementia-specific pictogram/symbol-based alternate UI mode (the "simple layouts, symbols, few colours" finding from §2 — real, evidence-based, but a v2 accessibility mode, not MVP scope).
- The SmartPrompt-style repeating/escalating reminder-until-done option (optional intensity setting).
- 2-3 accountability partners per user (Aaron's own stated "maybe later" ceiling, currently scoped to one).
- Caregiver-facing view (a family member checking in on someone else's commitments, distinct from a peer accountability partner) — surfaced by the dementia-caregiver research in §2 as a real, separate need, not scoped into v1.
- Any deeper autism-specific UX research (this pass was time-boxed; the general accessibility principles already carried over from DCC cover the baseline, but a dedicated pass exists as a named future item).

## 8. Open items for the build sprint
- Confirm "Dr. Rohani" with Aaron before citing anyone by name in final product copy or marketing.
- Confirm province-detection approach for the 811-equivalent resource (Ontario-specific number used above; other provinces have their own).
- Re-verify Autism Canada's national support line number before publishing (unconfirmed at research time).
- File an ADR when the build sprint runs — new product, new sovereignty scope, new mobile deployment pattern, real personal data + inter-user messaging.

---
*Companion document: `hal-stack/research/agent-workflow-observability-prd-2026-08-06.md` (the second of Aaron's two same-night product ideas). Model-dispatch note also applies here: Sonnet-execution/Fable-judgment posture requested, underlying CLAUDE.md rule still pending Aaron's ratification.*
