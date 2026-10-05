---
BACKUP NOTICE: Point-in-time snapshot backup created 2026-10-04 for Two Birds Innovation.
STATUS: Static archive snapshot (may be stale).
LIVE SOURCE OF TRUTH: The live, active documents are maintained in Notion and git at twobirds-kramerica/two-birds-portfolio.
CANONICAL REPO PATH: two-birds-portfolio/hal-stack/product-intelligence/backlog-decision-assistant-prd-2026-07-26.md
NOTION REFERENCE: Notion / Product Backlog
---

# Ready Room — Backlog Decision Assistant PRD
**Date:** 2026-07-26 (overnight build, Fable)
**Name (Aaron, mid-build):** **Ready Room**, the Star Trek framing: the private space off the Bridge (Command Deck) where the captain reviews things and comes back with decisions. Used consistently across this PRD, the deck nav, and the page itself.
**Framing (Aaron, explicit):** this is a PROJECT, an internal tool for his own use, not a product being scoped for external or white-label distribution. Productization concerns (multi-tenant, resale branding) are deliberately out of scope; if it ever earns external interest the register/card model would port, but nothing here is designed for that now.
**Status:** PRD + Phase 1 demo SHIPPED (see section 9). Two forks below need Aaron's call before Phase 2.
**Trigger:** Aaron's voice-dictated ask: a fundamentally better way to get through his own backlog and decision queue than flat markdown lists. His framing: an executive briefing. Warm, recommendation-first, visual where it helps, indexed so he can point back ("go back to item 3"), interactive by text or voice, and durable ("used from now until the end of time").
**Home (decided, not re-litigated):** a new section of Command Deck, `C:\twobirds\two-birds-personal\command-deck\ready-room.html`, live at `https://aaron-deck.pages.dev/ready-room.html` behind the existing Pages password gate.

---

## 1. Problem

Aaron's decision queue lives in a 2505-row Notion database, reconciliation markdown files, and CLI chat output. The 2026-07-25 reconciliation (`C:\twobirds\two-birds-portfolio\hal-stack\cos\human-backlog-reconciliation-2026-07-25.md`) found only ~24 items genuinely need him, but they arrive as walls of text. Known failure modes this tool exists to fix:

1. **Wall-of-text loss.** Aaron gets lost in CLI output (standing "reviewable containers" rule). A time-critical item sat at position 144 of 149 in a P1 list and was found one day before expiry.
2. **No stable way to point back.** "That thing we discussed about incorporation" has no address. He wants "go back to item N" to just work.
3. **Neutral menus instead of calls.** He has a standing rule: lead with grounded recommendations, confidence stated, not A/B/C menus.
4. **Decisions evaporate.** A verbal "yes" in chat is not captured anywhere durable; the same question resurfaces weeks later (D1 has been open 91 days).

## 2. Research: what already exists (WebSearch 2026-07-26, knowledge-cutoff rule applied)

**Comparable tools and patterns:**
- **AI chief-of-staff / exec-brief platforms** (Perspective AI, RAY AI, Marblism roundups) converge on the same shape this PRD proposes: a prioritized brief with recommendations, not a raw list. None are sovereign, all are SaaS subscriptions holding your data; none fit the decapitation checklist. Pattern borrowed, product not.
- **Linear/Jira AI triage** auto-triages incoming issues (Linear claims ~70% routine-backlog reduction). The pattern worth borrowing: the machine does the triage and the human only sees the residue that genuinely needs judgment. Our reconciliation pass already does this (2505 rows to ~24); this tool is the presentation layer for the residue.
- **Approval-queue / compliance-review UX research** (Oracle FusionGPS approvals pattern, compliance-analyst workflow studies, NN/g cognitive-load findings): the strongest pattern is **one decision at a time, with exactly the context needed at the moment of decision, rationale visible, and an explicit disposition control**. Fatigued reviewers in cluttered interfaces rubber-stamp or miss real items. This directly shaped the card design: one card = one decision = one recommendation = one set of buttons.
- **Card-based sign-off flows** (agency client-approval tools): a card carries a stable reference number, a visual, a recommendation, and Approve / Decline / Discuss. Same skeleton adopted here.

Sources: [Perspective AI CoS tools 2026](https://getperspective.ai/blog/best-ai-tools-chief-of-staff-2026-10-strategic-intelligence-platforms), [RAY AI EA decision guide](https://getray.ai/blog/executive-assistant-ai-tools-decision-guide-2026), [Oracle approvals design pattern](https://www.oracle.com/technetwork/topics/ux/applications/511586.htm), [compliance workflow UX patterns](https://digiwagon.com/blogs/compliance-analyst-workflow-ux-patterns/), [approval workflow examples](https://nicelydone.club/tags/approval-workflow).

**Conclusion:** nothing off the shelf is sovereign and shaped for a one-person operation with a git-markdown spine. The patterns are well established; the build is a thin presentation layer over infrastructure that already exists in this stack (reconciliation docs, effort/return matrix, console-worker LLM relay). Build is justified; it is small.

## 3. Fork 1 — claude.ai Project / chat-side layer: RECOMMEND AGAINST for now (confidence ~80%)

Aaron's ask: could a claude.ai Project stay aware of the evolving backlog so the .ai chat is "looped in with deep context" with no manual pasting.

**Research finding:** claude.ai Projects' GitHub connector requires a **manual "Sync now" click** to refresh project knowledge; there is no webhook/auto-sync ([Claude docs](https://claude.com/docs/connectors/github), [open feature request anthropics/claude-ai-mcp#180](https://github.com/anthropics/claude-ai-mcp/issues/180)). Community bridges exist ([claude-sync](https://github.com/bob6664569/claude-sync), [ctxsync](https://github.com/jahwag/ctxsync)) but are third-party, manually triggered, and fail the skills-install/sovereignty bar for a standing pipeline. An acknowledged gap: "no programmatic way to sync files between Claude Code and Claude web project knowledge" ([anthropics/claude-code#25983](https://github.com/anthropics/claude-code/issues/25983)).

**Recommendation: do not build the claude.ai layer now.** The stated requirement ("I'd rather not need to paste anything manually") is exactly what the platform cannot deliver today; a Project would silently drift stale, which is the silent-partial failure class this stack treats as severe. The Command Deck page already delivers the actual goal by a different route: the on-page assistant chat is injected with the live decision data at load time, from the same worker relay, no pasting, always current as of last deploy. **Revisit trigger (named, so this is not a permanent no):** if Anthropic ships webhook auto-sync for Projects (watch issue #180), re-evaluate, because a synced Project would then add mobile claude.ai-app access to the same context at zero marginal cost.

## 4. Fork 2 — voice input: RECOMMEND Web Speech API with the tradeoff named (confidence ~75%)

Constraint set: Aaron needs voice on **tablet/phone when remote**. `whisper-key-local` (sovereign, local, in `launch-claude.bat`) is Windows-system-tray only and has never actually been run; it structurally cannot serve mobile web.

**Research finding (2026):** the browser Web Speech API works on mobile Chrome and iOS Safari. Privacy reality: **by default, audio leaves the device** to the browser vendor's recognition service (Apple shows an explicit "send to Apple" consent modal; Google likewise processes server-side). Chrome 139+ ships an **on-device mode** (`processLocally`) where audio never leaves the device, first browser to do so; not yet guaranteed on mobile or other engines. Sources: [Chrome 139 on-device speech](https://medium.com/@roman_fedyskyi/on-device-speech-uis-in-chrome-139-4b9f0397b9c9), [W3C on-device explainer](https://github.com/WebAudio/web-speech-api/blob/main/explainers/on-device-speech-recognition.md), [MDN SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), [addpipe deep dive](https://blog.addpipe.com/a-deep-dive-into-the-web-speech-api/).

**Sovereignty scoring (decapitation checklist):** Web Speech API is an L1 dependency (vendor cloud) for the recognition step only; the fallback is the text box, which is total and instant, so decapitation impact is zero function loss. The content being dictated is Aaron's own words about his own backlog, not client/citizen data, so the ADR-0039-style hard data boundary is not violated.

**Recommendation:** ship Web Speech API push-to-talk as the mobile-capable voice lane, exactly the pattern already live and proven in `C:\twobirds\two-birds-personal\command-deck\console.html` (hold-to-dictate, release to review, edit, send; nothing auto-sends). Request `processLocally` where the browser supports it so Chrome 139+ desktop/Android stays on-device automatically. Keep whisper-key-local as the fully sovereign desktop lane (separate, still-open backlog cluster CL1). **What Aaron is trading if he accepts:** dictated audio from Safari/older Chrome goes to Apple/Google for recognition. If that is unacceptable, the alternative is text-only on mobile until on-device support broadens; the demo works fully either way. *Status in the shipped demo: the mic is wired and functional (same code pattern as console.html), so declining this fork means removing a working affordance, not building one.*

## 5. The stable index — BD numbers

Aaron wants to point back at items ("go back to 1.2.3"). Design principle: **extend existing ID conventions, do not invent a hierarchy.** Items already carry Notion UUIDs (unspeakable) and reconciliation tier codes (A1/D7, which reset every reconciliation, so they are not stable).

- Every item surfaced in a briefing gets a **`BD-N`** id (Briefing Decision, sequential, never reused, never renumbered). Spoken form "item seven" resolves to BD-7. Flat, not hierarchical: 1.2.3-style nesting is what the approval-queue research warns against (context burden), and a one-person queue never needs it.
- The register is `ready-room-data.json` in the command-deck repo: each record maps BD-N to title, decision type, source (Notion UUID and/or file path), recommendation, confidence, effort/return, strategic theme (per `hal-stack/governance/backlog-format.md`), deadline, visual attachments, and disposition (open / accepted / declined / deferred, with timestamp and note).
- Decided items keep their BD number forever and remain retrievable ("what did we decide on BD-4?"). The register is committed to the private repo, so history is git-durable.
- The assistant chat is injected with the full register, so "go back to three" works in conversation, not just visually.

## 6. Presentation format (what a card is)

Taxonomy reuses the existing effort/benefit matrix and strategic themes; no new scoring invented. Each card:

1. **BD-N chip** + decision-type badge (Quick yes/no · Design taste · Recommendation · Deadline-driven · Disposition).
2. **Deadline countdown** where a hard date exists (days left / OVERDUE), same convention as the deck's Deadlines tab.
3. **Effort / Return pills** straight from the backlog format, plus strategic theme.
4. **The recommendation, first.** One sentence, bolded, with a confidence percentage, before any context. This is the executive-briefing inversion: the call leads, the reasoning follows.
5. **Why (short)** and **what happens if you say yes** (the concrete next action, who executes it).
6. **Visual context** where showing beats telling: screenshots, live-site links, mockups render inline in the card (images) or open in the side panel (pages), reusing console.html's `[[show:]]` visual-panel pattern. Attachment paths live on the register record; for design-taste decisions the card can show before/after side by side.
7. **Disposition controls:** Accept recommendation / Decline / Defer / Discuss. Accept-Decline-Defer write the disposition to the register surface (localStorage now, register file at next build pass) AND to the console-worker `/outbox` KV, which the CLI already treats as its action-pickup queue, so a decision made on the phone at 7am becomes a CLI-executable instruction. Discuss drops the item into the assistant chat with full context pre-loaded.

## 7. Conversational layer

**Backend: the existing console-worker is the right primitive; nothing new was built.** `C:\twobirds\two-birds-personal\command-deck\console-worker\worker.js` already relays `/chat` to Anthropic/OpenAI/Gemini with SSE streaming, gated by `CONSOLE_TOKEN` (hardened 2026-07-25), and already accepts a per-request `system` override. The decisions page sends the briefing register plus Aaron's tone rules as the system prompt, so the assistant knows every BD item, its recommendation, and its status without any pasting. Tone calibrated against `hal-stack/personas/about-aaron.md`: warm, "we," candid sparring partner, recommendation-first, no em-dashes, Canadian English, confidence percentages.

**Provider routing (consistent with `hal-stack/architecture/multi-llm-multi-agent-orchestration-plan-2026-07-25.md`):** this is judgment-tier conversation about Aaron's own decisions, which routes to **Claude** per the routing table. It is also personal data, so the DeepSeek/Kimi cost tier is excluded by the plan's own data-boundary logic (that boundary covers client/third-party data; Aaron's own strategy sits closest to the judgment tier anyway). The worker's provider field stays available if he ever wants a second opinion from Gemini on a specific decision.

## 8. Durability: why this is not a one-off

- **The register is append-only and git-committed.** Briefings are views over it; the data outlives any page redesign.
- **No new infrastructure.** It rides the deck's existing deploy pipeline (`refresh-and-deploy.bat`), password gate, worker, and token model. Fewer moving parts = fewer ways to rot. Zero new services, zero new subscriptions, sovereignty posture unchanged.
- **Feeding it is an agent behaviour, not a manual chore.** Phase 2 makes "file a BD card" the standard way any session surfaces a decision to Aaron (companion to the Notion human-action filing), so the queue refills itself as a by-product of normal work.
- **Static HTML/CSS/JS, same as every product here.** Nothing to upgrade, no framework to age out.
- **Dispositions round-trip.** Decisions flow back to the CLI via the outbox and to Notion at reconciliation, so the tool stays the authoritative "what did we decide" surface instead of drifting into a stale mirror.

## 9. Phased build plan

**Phase 1 (SHIPPED tonight):** `ready-room.html` with 5 real items from the 2026-07-25 reconciliation (BD-1..BD-5), recommendation-first cards, stable BD index, working dispositions to localStorage + worker outbox, working assistant chat over console-worker `/chat` with full register context, working Web Speech push-to-talk (pending Fork 2 ratification), nav link from the deck, deployed to aaron-deck.pages.dev.
**Phase 2:** move the register out of the page into `ready-room-data.json` + a `build-ready-room-data.py` step in `refresh-and-deploy.bat`; CLI-side generator so any session can append BD cards; disposition write-back into the register file from the outbox at build time; visual attachments for design-taste cards (screenshot pairs).
**Phase 3:** voice-fork hardening per Aaron's Fork 2 call (`processLocally`, or strip mic); reconciliation integration so the weekly pass auto-drafts new BD cards from its Tier A-D output; "what did we decide" retrospective view over closed BDs.
**Phase 4 (only if trigger fires):** claude.ai Project sync layer per Fork 1's revisit trigger.

## 10. Demo contents (real items, not synthetic)

Pulled from `hal-stack/cos/human-backlog-reconciliation-2026-07-25.md`, chosen to span decision types:

| BD | Source | Type |
|---|---|---|
| BD-1 | A1 — HAI event / Sam Hebeisen price deadline (expires TODAY 2026-07-26) | Deadline-driven quick check |
| BD-2 | B1 — Kelly Services $145-156K contract, Toronto 3-day-onsite go/no-go (Notion `3a9a09cf-876a-81f2-a3e2-e2cd28b8d638`) | Quick yes/no, income-first |
| BD-3 | D7 — Incorporate Two Birds (Ontario corp, ~85% confidence on file; gates SR&ED/IRAP/RAII; 4 duplicate rows) | Research-backed recommendation |
| BD-4 | D6 — S-DCC-DESIGN-GATE rebuild vs fix (unblocks 9 UI sprints, open since 2026-06-21) | Design-taste / visual |
| BD-5 | A2 — Full Notion workspace export before Aug 1 grace-period end (P0) | Deadline-driven action |

## 11. What is real vs placeholder in the shipped demo (honesty ledger)

- **Real:** all 5 items and their facts; BD index; recommendation-first cards; Accept/Decline/Defer persisting to localStorage and POSTing to the worker outbox (the CLI's existing pickup queue); streaming chat via console-worker with full register context; push-to-talk voice via Web Speech API; deck nav integration; live deploy.
- **Placeholder / Phase 2:** register lives inline in the page JS, not yet in a generated JSON file; dispositions do not yet rewrite the register file itself (they land in outbox + localStorage); BD-4 links to the live DCC site rather than embedded before/after screenshots; no automated card ingestion from reconciliations yet.
